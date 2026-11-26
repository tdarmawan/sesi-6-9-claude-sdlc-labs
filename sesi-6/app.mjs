import { Hono } from 'hono';
import { ClaimService } from './claim.mjs';
export function createApp(repository, options={}) {
  const app=new Hono();const service=new ClaimService(repository,options.policy,options.clock);
  app.use('/api/*',async(c,next)=>{
    // Akun lab dipilih lewat header. Ini bukan autentikasi untuk produksi.
    const user=c.req.header('X-Lab-User');
    if(!['rina','budi'].includes(user))return c.json({error:'Unauthenticated'},401);
    c.set('user',user);await next();
  });
  app.get('/api/claims',c=>c.json({claims:repository.list(c.get('user'))}));
  app.post('/api/claims',async c=>{
    let input;try {input=await c.req.json();}catch{return c.json({error:'Invalid JSON'},400);}
    if(!input||typeof input!=='object'||Array.isArray(input))return c.json({error:'Invalid input'},400);
    const result=service.submit(c.get('user'),input);const {status,...body}=result;return c.json(body,status);
  });
  return app;
}

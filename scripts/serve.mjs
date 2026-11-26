import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { createRepository } from '../sesi-6/db.mjs';
import { createApp } from '../sesi-6/app.mjs';
const repository=createRepository();const app=createApp(repository);const port=Number(process.env.PORT||4176);
const routes=new Map([['/','../sesi-6/index.html'],['/sesi-6/','../sesi-6/index.html'],['/sesi-7/','../sesi-7/checkpoint-01.html'],['/sesi-7/final','../sesi-7/index.html'],['/sesi-8/','../sesi-8/checkpoint-01.html'],['/sesi-8/final','../sesi-8/index.html']]);
const server=createServer(async(req,res)=>{
  try {
    const url=new URL(req.url,'http://127.0.0.1:'+port);
    if(url.pathname.startsWith('/api/')){
      const chunks=[];let size=0;for await(const chunk of req){size+=chunk.length;if(size>8192){res.writeHead(413);res.end();return;}chunks.push(chunk);}
      const response=await app.fetch(new Request(url,{method:req.method,headers:req.headers,...(['GET','HEAD'].includes(req.method)?{}:{body:Buffer.concat(chunks)})}));
      res.writeHead(response.status,Object.fromEntries(response.headers));res.end(Buffer.from(await response.arrayBuffer()));return;
    }
    if(!routes.has(url.pathname)){res.writeHead(404);res.end('Not found');return;}
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store'});res.end(await readFile(new URL(routes.get(url.pathname),import.meta.url)));
  }catch(error){console.error(error.message);res.writeHead(500);res.end('Lab error');}
});
server.listen(port,'127.0.0.1',()=>console.log('Lab: http://127.0.0.1:'+port));
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>server.close(()=>{repository.close();process.exit(0);}));

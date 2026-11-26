const allowedOrigins=new Set(['http://127.0.0.1:4176']);
export const corsHeaders = origin => allowedOrigins.has(origin)?{'Access-Control-Allow-Origin':origin,'Vary':'Origin'}:{'Vary':'Origin'};

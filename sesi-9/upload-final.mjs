import {PNG} from 'pngjs';
const signature=Buffer.from([137,80,78,71,13,10,26,10]);
export function validateUpload(file) {
  if(!file||!Buffer.isBuffer(file.bytes)||!/^[-A-Za-z0-9_]+\.png$/i.test(file.name||'')||file.mime!=='image/png')return {ok:false,reason:'Unsupported type/name'};
  const b=file.bytes;
  if(b.length<33||b.length>1024*1024||!b.subarray(0,8).equals(signature)||b.subarray(12,16).toString()!=='IHDR')return {ok:false,reason:'Invalid PNG'};
  const width=b.readUInt32BE(16),height=b.readUInt32BE(20);
  if(width<1||height<1||width>1024||height>1024)return {ok:false,reason:'Image dimensions out of scope'};
  try {const image=PNG.sync.read(b,{checkCRC:true});return image.width===width&&image.height===height?{ok:true}:{ok:false,reason:'Invalid dimensions'};}catch{return {ok:false,reason:'Invalid PNG content'};}
}

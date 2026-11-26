import {readdir,readFile,stat} from 'node:fs/promises';
import {resolve,dirname,extname} from 'node:path';import {spawnSync} from 'node:child_process';import vm from 'node:vm';
const root=resolve('.');const files=[];
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){if(['node_modules','.git','work','test-results','playwright-report'].includes(entry.name))continue;const file=resolve(dir,entry.name);if(entry.isDirectory())await walk(file);else files.push(file);}}
await walk(root);let links=0,scripts=0;
for(const file of files){
 const ext=extname(file);if(ext==='.json')JSON.parse(await readFile(file,'utf8'));
 if(ext==='.mjs'){const run=spawnSync(process.execPath,['--check',file],{encoding:'utf8'});if(run.status!==0)throw new Error(run.stdout+run.stderr);scripts++;}
 if(ext==='.html'){const html=await readFile(file,'utf8');for(const match of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)){new vm.Script(match[1],{filename:file});scripts++;}}
 if(ext==='.md'){for(const match of (await readFile(file,'utf8')).matchAll(/\[[^\]]+\]\(([^)]+)\)/g)){const target=match[1];if(/^(https?:|#)/.test(target))continue;const path=resolve(dirname(file),decodeURIComponent(target.split('#')[0]));if(!path.startsWith(root))throw new Error('Link outside repo: '+target);await stat(path);links++;}}
}
console.log(`Package check passed: ${files.length} files, ${scripts} syntax checks, ${links} local Markdown links.`);

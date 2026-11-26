import {spawnSync} from 'node:child_process';
const checkpoint=process.argv[2]||'final';if(!['start','bug','final'].includes(checkpoint))throw new Error('Use start, bug or final');
const result=spawnSync(process.execPath,['--test','test/cap-contract.fixture.mjs'],{stdio:'inherit',env:{...process.env,LAB_CHECKPOINT:checkpoint}});
if(result.error)throw result.error;process.exitCode=result.status??1;

import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import * as start from '../sesi-6/cap-start.mjs';import * as buggy from '../sesi-6/cap-bug.mjs';import * as final from '../sesi-6/cap-final.mjs';
const contracts=p=>[p.allowed({amount:1000001,used:0,limit:1000000})===false,p.allowed({amount:1000000,used:0,limit:1000000})===true,p.monthKey('2025-11-01')!==p.monthKey('2026-11-01')];
assert.deepEqual(contracts(start),[false,true,true]);assert.deepEqual(contracts(buggy),[true,false,false]);assert.deepEqual(contracts(final),[true,true,true]);
console.log('Checkpoint oracle: START 1 gap; BUG 2 regressions; FINAL all 3 contracts pass. Intentional failures detected, not suppressed.');
for(const [name,expected] of [['start',1],['bug',1],['final',0]]) {
  const run=spawnSync(process.execPath,['scripts/run-cap-contract.mjs',name],{encoding:'utf8'});
  if(run.error)throw run.error;
  assert.equal(run.status,expected,run.stdout+run.stderr);
  assert.match(run.stdout,/# tests 3|tests 3/);
  console.log(`Actual contract run ${name}: exit ${run.status}, expected ${expected}`);
}

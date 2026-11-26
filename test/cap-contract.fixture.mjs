import test from 'node:test';import assert from 'node:assert/strict';
const names={start:'cap-start.mjs',bug:'cap-bug.mjs',final:'cap-final.mjs'};
const name=names[process.env.LAB_CHECKPOINT||'final'];if(!name)throw new Error('Unknown checkpoint');
const policy=await import('../sesi-6/'+name);
test('CAP: one rupiah above limit rejected',()=>assert.equal(policy.allowed({amount:1000001,used:0,limit:1000000}),false));
test('CAP: exact limit accepted',()=>assert.equal(policy.allowed({amount:1000000,used:0,limit:1000000}),true));
test('CAP: month includes year',()=>assert.notEqual(policy.monthKey('2025-11-01'),policy.monthKey('2026-11-01')));

import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
export function createRepository() {
  const db = new DatabaseSync(':memory:');
  db.exec(readFileSync(new URL('./001-schema.sql', import.meta.url), 'utf8'));
  const repository = {
    limit(userId) { return db.prepare('SELECT monthly_limit FROM claim_limits WHERE user_id = ?').get(userId)?.monthly_limit; },
    list(userId) { return db.prepare('SELECT id, user_id, claim_date, amount, merchant, status FROM claims WHERE user_id = ? ORDER BY id LIMIT 500').all(userId).map(r => ({...r})); },
    budgetRows(userId) { return db.prepare('SELECT claim_date, amount, status FROM claims WHERE user_id = ?').all(userId).map(r => ({...r})); },
    add(claim) {
      const result = db.prepare('INSERT INTO claims(user_id, claim_date, amount, merchant, status) VALUES (?, ?, ?, ?, ?)').run(claim.user_id, claim.claim_date, claim.amount, claim.merchant, claim.status);
      return {id:Number(result.lastInsertRowid), ...claim};
    },
    close() { db.close(); }
  };
  return repository;
}
export function memoryRepository() {
  const rows=[];
  const list=userId=>rows.filter(r=>r.user_id===userId).map(r=>({...r}));
  return {limit:()=>1000000,list,budgetRows:list,add:claim=>{const row={id:rows.length+1,...claim};rows.push(row);return {...row};},close(){}};
}

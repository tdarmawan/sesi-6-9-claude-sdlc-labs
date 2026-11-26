export function readRecord(actor, id, records) {
  if(!actor||typeof actor.id!=='string'||!actor.id) return {status:401};
  const row=records.find(r=>r.id===id&&r.ownerId===actor.id);
  return row?{status:200,data:{...row}}:{status:404};
}

// Fixture in-memory edukasi; tidak diekspos sebagai HTTP endpoint.
export function readRecord(actor, id, records) {
  if(!actor) return {status:401};
  const row=records.find(r=>r.id===id);
  return row?{status:200,data:{...row}}:{status:404};
}

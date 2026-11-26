import * as finalPolicy from './cap-final.mjs';
export class ClaimService {
  constructor(repository, policy=finalPolicy, clock=()=>new Date()) { this.repository=repository;this.policy=policy;this.clock=clock; }
  submit(userId, input) {
    if (!['rina','budi'].includes(userId)) return {error:'Unauthenticated',status:401};
    if (!Number.isSafeInteger(input.amount)||input.amount<=0||typeof input.merchant!=='string'||!input.merchant.trim()||input.merchant.length>120) return {error:'Invalid input',status:400};
    const now=this.clock(); const month=this.policy.monthKey(now);
    const used=this.repository.budgetRows(userId).filter(c=>c.status!=='Rejected'&&this.policy.monthKey(c.claim_date)===month).reduce((sum,c)=>sum+c.amount,0);
    const limit=this.repository.limit(userId);
    if (!Number.isSafeInteger(limit)) return {error:'Limit unavailable',status:422};
    if (!this.policy.allowed({amount:input.amount,used,limit})) return {error:'Monthly limit exceeded',remaining:Math.max(0,limit-used),status:422};
    const claim=this.repository.add({user_id:userId,claim_date:now.toISOString(),amount:input.amount,merchant:input.merchant.trim(),status:'Submitted'});
    return {claim,remaining:limit-used-input.amount,status:201};
  }
}

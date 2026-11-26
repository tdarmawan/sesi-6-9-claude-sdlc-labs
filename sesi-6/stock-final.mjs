export const availableStock = row => Math.max(0, row.onHand - row.reservedQty);
export const stockQuery = batchCode => ({sql:'SELECT * FROM stock WHERE batch_code = ?',params:[batchCode]});

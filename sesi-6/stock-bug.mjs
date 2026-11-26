// Fixture CP-A: reservedQty diabaikan; SQL di bawah hanya string, tidak dieksekusi.
export const availableStock = row => row.onHand;
export const stockQuery = batchCode => ({sql:`SELECT * FROM stock WHERE batch_code = '${batchCode}'`,params:[]});

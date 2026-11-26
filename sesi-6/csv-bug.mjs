// Fixture review/regresi: tidak escape koma, petik, newline atau formula.
export const toCSV = rows => ['merchant,amount',...rows.map(r=>`${r.merchant},${r.amount}`)].join('\n');

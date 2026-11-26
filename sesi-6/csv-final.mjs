function cell(value) {
  let text=String(value);
  if (/^[\s]*[=+@-]/.test(text)) text="'"+text;
  return '"'+text.replaceAll('"','""')+'"';
}
export const toCSV = rows => ['merchant,amount',...rows.map(r=>`${cell(r.merchant)},${cell(r.amount)}`)].join('\n');

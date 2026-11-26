export function monthKey(date) {
  const value = new Date(date);
  if (Number.isNaN(value.getTime())) throw new RangeError('Invalid date');
  return value.toISOString().slice(0, 7);
}
export function allowed({amount, used, limit}) { return used + amount <= limit; }

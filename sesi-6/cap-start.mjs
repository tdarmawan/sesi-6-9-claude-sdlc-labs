// CP00: limit belum diimplementasikan. Kontrak test harus mendeteksi gap ini.
export const monthKey = date => new Date(date).toISOString().slice(0, 7);
export const allowed = () => true;

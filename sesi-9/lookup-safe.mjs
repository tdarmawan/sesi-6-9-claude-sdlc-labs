// Scanner bisa salah menilai query sebagai injection. Nilai tetap parameter, bukan interpolasi SQL.
export const lookup = id => ({sql:'SELECT id FROM sample WHERE id = ?',params:[id]});

# PRD studi kasus Sesi 6
## STOCK
STOCK-01: availableStock = max(0, onHand − reservedQty). Asumsikan dua input integer nonnegatif dari sumber tervalidasi.
STOCK-02: query batchCode wajib placeholder + parameter, bukan interpolasi input.
## Plafon klaim
CAP-01: per user, plafon Rp1.000.000 per bulan UTC. Klaim baru tepat sisa plafon diterima; satu rupiah lebih ditolak HTTP 422 + remaining.
CAP-02: jumlahkan Submitted dan Approved pada user/tahun/bulan yang sama; Rejected tidak mengurangi plafon.
CAP-03: tanggal berasal dari clock yang diberikan; periode mencakup tahun dan bulan UTC. Clock dapat diinjeksikan saat test.
CAP-04: amount integer rupiah positif dan safe integer; merchant nonkosong maksimal 120 karakter; lab user hanya rina atau budi.
API-01: GET /api/claims mengembalikan hanya data user lab yang dipilih, maksimal 500 baris. Perhitungan budget harus mencakup seluruh klaim, bukan hanya halaman pertama.
CSV-01: koma, petik dan newline tetap satu field. Awalan formula (= + - @, termasuk setelah spasi) diberi apostrof sebelum CSV quoting.
## Batas lab
X-Lab-User adalah pengganti pemilih akun untuk data dummy, bukan autentikasi. Tidak ada login, transfer uang, deployment atau persistence. Sistem perusahaan memerlukan autentikasi, transaksi, paging dan kontrol lain yang tidak dibangun di sini.

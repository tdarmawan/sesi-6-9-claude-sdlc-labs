# Product Order Management — sumber bisnis lab v1.0
Data latihan disetujui sebagai aturan studi kasus, bukan kebijakan perusahaan pengguna.
Actor: Business User. Unit harga adalah angka contoh (100), bukan nilai transaksi nyata.
AC-01: katalog menampilkan produk Active. Produk Inactive tidak boleh menjadi order.
AC-02: quantity bilangan bulat 1–99; boleh diubah sebelum Submit. Nol, negatif, pecahan dan >99 ditolak.
AC-03: total = unit price × quantity tanpa diskon, pajak atau biaya tambahan.
AC-04: Submit valid membuat order bernomor unik dengan status Submitted dan ringkasan total yang benar.
AC-05: kebijakan duplicate order belum diputuskan. Catat sebagai business question BQ-01, bukan Fail produk.
Data dummy: P-001 Widget Active price 100; P-002 Legacy Inactive price 50.
Di luar scope: pembayaran, stok riil, pelanggan, autentikasi, integrasi ERP, persistence.

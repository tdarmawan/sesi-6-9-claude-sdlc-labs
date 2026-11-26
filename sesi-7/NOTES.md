# NOTES — batas simulasi dan keputusan TBC

Semua keputusan berikut adalah **aturan latihan**, belum menjadi keputusan produk.
| ID | Keputusan sementara | Alasan / sumber |
|---|---|---|
| D-01 | Role Name wajib diisi | Enam cek prototype di slide; mandatory field BRD tetap TBC |
| D-02 | Trim spasi tepi dan pencocokan nama tanpa beda kapital | Pilihan demo agar duplikat mudah direproduksi; aturan produk TBC |
| D-03 | Alphanumeric diinterpretasikan huruf ASCII, angka, spasi | Nama contoh QA Reviewer; definisi internasional/karakter lain perlu klarifikasi |
| D-04 | Status harus dipilih; tidak ada default | Status Active/Inactive dari RM-004; mandatory/default produk TBC |
| D-05 | ID DEMO-nnn; kembali ke daftar setelah simpan | Pilihan prototype untuk cek alur, format/navigasi produk TBC |
| D-06 | Loading 900 ms, kegagalan lewat kontrol Skenario latihan | Simulasi UI, bukan endpoint atau ketentuan latency produk |
| D-07 | Data hilang setelah reload | Penyimpanan memori untuk latihan satu HTML |

TBC lain: teks pesan duplikat, default permission, hubungan menu induk/submenu, format log,
entrypoint log, rincian Master Menu View Only. Jangan menyelesaikannya dengan tebakan.

RM-002/003/006/007 berada di BRD untuk konteks. Role Members, Change Log, dampak login/session,
dan Edit Role belum dibangun pada alur wajib. Tidak ada login, delete, layanan belakang, atau keamanan produksi.
Kontrol akses demo hanya menunjukkan visibilitas lokal. Otorisasi sesungguhnya perlu layanan belakang di luar scope.

## Catatan iterasi peserta
Temuan: … / bukti: … / perubahan disetujui: … / hasil uji ulang: …

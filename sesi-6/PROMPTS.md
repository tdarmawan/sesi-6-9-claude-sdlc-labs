# Prompt langkah
## 1. Surface dan aturan (read-only)
Baca CLAUDE.md, AGENTS.md, sesi-6/CLAUDE.md dan CONFIG-GUIDE.md. Sebut aturan yang benar-benar dimuat, scope dan perintah validasinya. Jangan edit, install atau membuat PR dulu.
## 2. Review stok
Bandingkan sesi-6/stock-bug.mjs dengan STOCK-01/02 di PRD. Laporkan file:baris, reproduce, dampak dan fix minimal. Query hanya objek string, jangan menghubungkan database nyata.
## 3. Test first
Jalankan node scripts/run-cap-contract.mjs start dari root. Catat kontrak yang gagal. Baca CAP-01..04. Rencanakan implementasi melalui service/repository/policy. Pertahankan test. Setelah implementasi, buktikan kontrak dan unit/integration lulus.
## 4. Debugging
Jalankan node scripts/run-cap-contract.mjs bug. Jangan edit dulu. Ajukan hipotesis dari cap-bug.mjs tentang batas dan periode, dengan file:baris. Gunakan tanggal tetap berbeda tahun. Setelah reproduce disetujui dalam latihan, buat fix minimal dan tes regresi.
## 5. E2E
Periksa e2e/labs.spec.mjs dan npm run test:e2e. Gunakan getByLabel/getByRole, tunggu hasil teramati. Berikan output aktual dan screenshot; bila Chromium belum terpasang, tandai setup belum selesai.
## 6. PR review dan golden
Dari chat baru, baca git diff dan REVIEW.md. Periksa csv-bug.mjs dan stock-bug.mjs dengan lima lensa. Temuan harus file:baris dan skenario yang terbukti. Jangan mengarang nomor PR; pakai URL PR pribadi yang benar-benar dibuat.
## 7. Bisect
Jalankan generator history pada clone latihan, ikuti command yang dicetak. Jalankan git bisect reset setelah menemukan culprit. Jelaskan perubahan ownership filter dan uji judge di code baik/rusak. Jangan berpindah commit di repo kerja pengguna.

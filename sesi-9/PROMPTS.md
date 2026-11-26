# Prompt VA
## H1-1 Scope
Baca SCOPE.md dan PROJECT-INSTRUCTIONS.md. Sebut file allowed/excluded, baseline dan command test. Baca saja; jangan menambah akses/target.
## H1-2 Checklist
Baca CHECKLIST.md dan SCANNER-SIMULATED.json. Sebut mana simulasi dan bukti yang belum ada. Jangan menerima scanner sebagai proof.
## H1-3 Code review
Review auth-vulnerable, cors-vulnerable, upload-vulnerable dan lookup-safe. Laporkan kandidat dengan path/baris nyata, source flow, expected control, impact, exposure dan confidence. Tidak ada akses sistem eksternal.
## H1-4 Dedup
Kelompokkan enam alert menurut root cause/evidence; pertahankan seluruh source ID. Tulis alasan duplicate, false positive dan unverified. Jangan invent CVE atau merekam exploit palsu.
## H1-5 Priority
Beri risk rationale, severity dan confidence terpisah. Verifikasi dengan test lokal read-only terhadap fixture; bedakan config pattern dari eksploit terbukti. Bandingkan TRIAGE-CHECKPOINT setelah review mandiri.
## H2-1 Branch
Pilih VA-001 yang telah divalidasi di lab. Catat baseline dan buat fix/va-remediation. Batasi patch pada komponen ownership.
## H2-2 Plan
Jelaskan root cause, file, perubahan paling kecil, dampak ke pemilik sah/nonpemilik dan test regresi. Jangan apply sebelum rencana latihan direview.
## H2-3 Patch
Terapkan patch hanya pada salinan fixture di branch latihan. Tampilkan git diff; pertahankan baseline dan test. Bandingkan auth-final sebagai acuan sesudah mencoba sendiri.
## H2-4 Validate
Jalankan npm run test:s9 dan suite root. Bukti harus menunjukkan pemilik sah tetap200, nonpemilik404, tanpaactor401. Jangan mengklaim semua risiko hilang.
## H2-5 Record
Isi finding, source IDs, file:baris, diff/commit, test output, residual risk dan status pada template. Label acuan/simulasi terpisah dari hasil peserta.
## H2-6 Review
Rekonsiliasi lima temuan dengan enam alert. Owner dan reviewer menilai closure. Dependency unverified tetap terbuka; approval/date tidak diisi oleh AI.

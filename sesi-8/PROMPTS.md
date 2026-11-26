# Prompt UAT
## H1-1 Project
Baca BRD.md, FLOW.mmd dan PROJECT-INSTRUCTIONS.md. Sebut AC dan pertanyaan bisnis yang tersedia. Jangan generate aturan baru.
## H1-2 Skill
Pasang uat-scenario-builder-v1.zip atau buat dari SKILL.md. Pastikan format actor/precondition/data/steps/expected/priority/AC. Jangan mengklaim Skill tersedia sebelum diperiksa pada akun sendiri.
## H1-3 Generate
Buat scenario dan detailed scripts dari sumber yang sama. Satu outcome bisnis per scenario. Gunakan bahasa bisnis. Prioritas berdasarkan dampak, bukan semua High.
## H1-4 Map
Hubungkan tiap AC ke tahap journey dan UAT ID. Tandai rule ambigu sebagai business question. AC-05 tetap BQ-01, bukan bug atau approval.
## H1-5 Iterate
Periksa exception produk Inactive dan quantity0/pecahan/batas. Revisi aturan Skill v2, generate ulang, bandingkan v1/v2 tanpa mengubah sumber bisnis.
## H2-1 Setup
Buka checkpoint-01.html atau /sesi-8/ pada server loopback. Konfirmasi environment/tab/snapshot, dummy data dan mode persetujuan. Baca satu scenario, jangan memindai situs lain.
## H2-2 Execute
Jalankan UAT-003 atau UAT-004 satu per satu sesuai script, setujui aksi sesuai mode. Reload per run. Berhenti bila actual tidak cocok atau aturan belum jelas.
## H2-3 Evidence
Isi expected/actual/status/evidence/tester/date per langkah. Screenshot berlabel UAT-ID/step/run; jangan memakai gambar contoh sebagai bukti.
## H2-4 Classify
Kelompokkan functional issue, usability feedback, clarification atau environment. Severity berdasarkan business impact. Cocokkan ke AC, bukan dugaan.
## H2-5 Issues
Buat action item dari finding: reproduce, expected/actual, evidence, AC/UAT, owner dan target date yang benar-benar disepakati. Jika belum ada owner/tanggal, tulis TBC.
## H2-6 Summary
Hitung Pass/Fail/Blocked/NotRun dari run yang sama. Susun draft sign-off, tampilkan open risk/BQ-01, kosongkan approver/date/decision sampai business owner mengisinya. Jangan menafsirkan test otomatis sebagai approval bisnis.

# Sesi 6 — Integrasi, Testing, Debugging & Review
## Setup
Dari root repo, jalankan `npm ci`. Baca [PRD](PRD.md), [TRD](TRD.md), [PROMPTS](PROMPTS.md), serta CLAUDE.md dan AGENTS.md di root.
Acuan menggunakan Node 24+, Hono, SQLite lokal, node:test dan Playwright. Tidak perlu akun Cloudflare, database produksi atau secret Claude.
## 6A — Surface, instruksi repo dan review stok
Buka repo yang sama di terminal/IDE/Desktop. Minta Claude menjelaskan aturan root dan `sesi-6/CLAUDE.md` tanpa edit.
Bandingkan [stock-bug.mjs](stock-bug.mjs) dengan PRD. Tulis temuan file:baris, skenario dan alasan. Acuan: [stock-final.mjs](stock-final.mjs).
Buat branch `feat/stock-review` di fork/clone pribadi. Ubah salinan, lihat diff, jalankan `npm run test:s6`, lalu buat PR pribadi. Review dari chat baru; merge diputuskan pemilik repo.
## 6B — Test first dan debugging plafon
1. `node scripts/run-cap-contract.mjs start`: satu kontrak gagal (fitur belum ada).
2. Baca acceptance criteria CAP-01..04 dan test fixture. Buat implementasi sendiri di branch `feat/claim-cap`; jangan menurunkan expected.
3. `node scripts/run-cap-contract.mjs final`: semua kontrak lulus; `npm run test:s6` menguji unit, API, SQL dan golden.
4. `node scripts/run-cap-contract.mjs bug`: dua kontrak gagal. Selidiki batas `<` dan hilangnya tahun pada month key; jangan memakai waktu sistem untuk test.
5. `npm start`, buka root lokal, lalu `npm run test:e2e` setelah menginstal Chromium. Hentikan server manual dahulu sebelum E2E agar port kosong.
## 6C — PR, CSV, golden dan bisect
Review csv-bug.mjs menggunakan lima lensa pada REVIEW.md. Jangan mengubah GOLDEN.json hanya agar test lulus.
Jalankan `node scripts/create-bisect-lab.mjs` sekali. Script membuat repo Git terpisah di work/bisect-lab beserta lima commit sintetis dan judge di luar repo itu; tidak mengubah history repo utama.
Ikuti empat command yang dicetak: cd, git bisect start, git bisect run node dengan path judge, lalu git bisect reset. Jawaban tersimpan lokal di work/bisect-answer.json untuk pembahasan, bukan test peserta.
Jika folder sudah ada, script berhenti dan mempertahankan history lama; gunakan clone latihan baru untuk mengulang.
Acuan [REVIEW-CHECKPOINT.md](REVIEW-CHECKPOINT.md); isi [SCORECARD.md](SCORECARD.md) dari bukti aktual.
## Konfigurasi opsional
`settings.example.json` adalah contoh untuk disalin ke `.claude/settings.json` sesudah ditinjau; bukan batas keamanan mutlak.
`testing.rules.md` bisa disalin ke `.claude/rules/testing.md`. Lihat [CONFIG-GUIDE.md](CONFIG-GUIDE.md).
`ci-claude.example.yml` tidak aktif. CI biasa pada `.github/workflows/ci.yml` berjalan tanpa akun Claude. Integrasi @claude perlu setup App/secret oleh pemilik akun, terpisah dari lab lokal.

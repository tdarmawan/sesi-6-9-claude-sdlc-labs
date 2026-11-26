# Lab Sesi 6–9 — Claude untuk SDLC
Kelanjutan [Sesi 1–5](https://github.com/tdarmawan/sesi-1-5-claude-sdlc-labs), mengikuti nomor file slide di Drive.
Semua studi kasus menggunakan data dummy. Checkpoint awal sengaja mengandung gap; file final adalah acuan teknis, bukan approval peserta.

| Sesi | Materi | Mulai |
|---|---|---|
| 6 | Integrasi, instruksi repo, TDD, debugging, review, regresi | [Panduan](sesi-6/README.md) |
| 7 | qa-test, coverage, execution record, defect | [Panduan](sesi-7/README.md) |
| 8 | Product Order UAT, traceability, findings, sign-off | [Panduan](sesi-8/README.md) |
| 9 | Scoped VA, scanner triage, remediation, residual risk | [Panduan](sesi-9/README.md) |

## Mulai cepat
Klik Code > Download ZIP, ekstrak seluruh folder. Jangan menjalankan berkas dari dalam ZIP.
Sesi 7 dan 8 berupa HTML mandiri: buka `sesi-7/checkpoint-01.html` atau `sesi-8/checkpoint-01.html` di Chrome. Muat ulang mereset data.
Untuk Sesi 6 dan seluruh pemeriksaan, pasang Node.js 24+ dan Git untuk latihan history, kemudian dari root:
```sh
npm ci
npm test
npm run check
npm run test:checkpoints
npx playwright install chromium
npm run test:e2e
npm start
```
Buka `http://127.0.0.1:4176/` untuk klaim; `/sesi-7/` untuk QA checkpoint; `/sesi-7/final` untuk acuan QA; `/sesi-8/` dan `/sesi-8/final` untuk UAT.
Server hanya mendengarkan loopback. Sesi 9 tidak menyediakan endpoint rentan; contoh security hanya fungsi in-memory.
`npm test` menguji acuan final dan mendeteksi fixture bermasalah. `npm run test:checkpoints` membuktikan test kontrak gagal di checkpoint rusak dan lulus di final.
Clone opsional:
```sh
git clone https://github.com/tdarmawan/sesi-6-9-claude-sdlc-labs.git
cd sesi-6-9-claude-sdlc-labs
```
Checkpoint ada sebagai berkas biasa: [CHECKPOINTS.md](CHECKPOINTS.md), tidak memerlukan tag atau branch yang belum tersedia.
Jalur belajar dengan Claude: baca `PROMPTS.md` atau prompt langkah per sesi. Tanpa konektor, unggah salinan dokumen dan lakukan eksekusi manual.
Screenshot dan approval peserta harus berasal dari aktivitas aktual. [VALIDATION.md](VALIDATION.md) memisahkan hasil tes pengembang dari fitur akun Claude yang belum diuji.

## Sumber implementasi
[Hono testing](https://hono.dev/docs/guides/testing), [Node SQLite](https://nodejs.org/api/sqlite.html), [Playwright](https://playwright.dev/docs/test-webserver), [pngjs](https://github.com/pngjs/pngjs), [Claude memory](https://code.claude.com/docs/en/memory), [Claude Actions](https://code.claude.com/docs/en/github-actions).
Hono berjalan di Node dan SQLite lokal, bukan deployment D1. Test runner memakai node:test; contoh Vitest/TypeScript dari materi lama disesuaikan ke JavaScript ESM.
Security fixtures dan scanner adalah buatan untuk kelas; tidak menyalin repo perusahaan, tidak memasang dependensi yang sengaja rentan, tidak mengklaim CVE nyata.

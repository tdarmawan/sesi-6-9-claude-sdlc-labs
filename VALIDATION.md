# Hasil validasi pengembang — 26 November 2026

Lingkungan: Windows, Node 24.21.0, Chromium milik Playwright. Semua command dari root setelah npm ci.

| Pemeriksaan | Hasil aktual |
|---|---|
| npm test | 26 lulus: domain, Hono + SQLite, golden, CSV, QA, UAT, security |
| npm run test:checkpoints | start exit1 (1 gap), bug exit1 (2 regresi), final exit0; oracle mendeteksi masalah yang disengaja |
| npm run test:e2e | 5 lulus: klaim valid/422; QA duplicate Inactive sebelum/sesudah; QA create/View Only; UAT total/status sebelum/sesudah; quantity0/Inactive |
| Bisect generator + git bisect run | Menemukan commit C: regression ownership filter; judge di luar repo; git bisect reset selesai |
| npm audit setelah install | 0 vulnerability yang dilaporkan; bukan bukti tidak ada semua risiko |

Playwright menyimpan screenshot berlabel pada test-results/ saat tes dijalankan; folder itu tidak di-commit. Gunakan bukti run sendiri untuk scorecard.
Server hanya loopback. HTML QA/UAT mandiri tanpa jaringan eksternal. Security fixture hanya fungsi in-memory, tidak membuka endpoint rentan.

Integrasi akun Claude, instalasi extension pada akun peserta, akses Skill/connector, Claude GitHub App dan pengaturan required status check belum diaktifkan oleh lab ini. CI biasa tidak memerlukan secret Claude.
Pengujian kode tidak menggantikan QA/UAT/security approval; seluruh template keputusan manusia tetap Pending.
Laporan scanner adalah simulasi eksplisit, bukan output scanner vendor atau advisory CVE nyata.

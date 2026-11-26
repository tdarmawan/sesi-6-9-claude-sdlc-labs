# TRD acuan
`claim.mjs`: ClaimService menerima repository, policy dan clock. Aturan plafon dievaluasi sekali di service.
`cap-final.mjs`: policy inklusif serta month key YYYY-MM UTC. start/bug adalah fixture, bukan opsi server.
`db.mjs`: adapter memory untuk unit; DatabaseSync SQLite :memory: untuk integration; migration dari 001-schema.sql. Semua nilai SQL di-bind.
`app.mjs`: Hono app.request() dapat diuji tanpa port. HTTP 401 untuk tanpa akun, 400 input invalid, 422 limit, 201 created.
`index.html`: label/id terhubung, feedback HTTP 422, server hanya loopback. `scripts/serve.mjs` memakai app yang sama dan allowlist halaman.
`test/session6.test.mjs`: unit + integration + karakterisasi JSON/GOLDEN + CSV. `e2e/labs.spec.mjs`: Chromium test dengan label/role.
`scripts/run-cap-contract.mjs`: kontrak sama untuk start/bug/final. `test:checkpoints`: membuktikan oracle menangkap gap/regresi.
`scripts/create-bisect-lab.mjs`: history latihan mandiri, judge di luar repo; commit C merusak scope user, bukan history proyek pengguna.
Tidak ada TypeScript build, tsc, lint:arch, Wrangler, D1 remote, tag lab5-selesai atau branch sesi3-part2-start dalam paket ini.

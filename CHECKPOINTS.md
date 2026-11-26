# Checkpoint dan urutan belajar
| Sesi | Awal / gap | Iterasi | Acuan akhir |
|---|---|---|---|
| 6A | stock-bug.mjs | review availableStock dan query | stock-final.mjs |
| 6B | cap-start.mjs (belum membatasi plafon) | cap-bug.mjs (< dan bulan tanpa tahun) | cap-final.mjs + claim/app/db + regression tests |
| 6C | csv-bug.mjs, history yang dibuat lokal | review diff, git bisect | csv-final.mjs, GOLDEN.json, REVIEW-CHECKPOINT.md |
| 7 | qa-test-starter.SKILL.md + TEST-CASES-v1.json | qa-test-v1, CP01 prototype | qa-test-v2, TEST-CASES-v2.json + index.html |
| 8 | SCENARIOS-v1.json + checkpoint-01.html | Skill v2, traceability, results | SCENARIOS-v2.json + index.html + sign-off draft Pending |
| 9 | *-vulnerable.mjs + scanner simulasi | TRIAGE-CHECKPOINT.json | *-final.mjs + tests + REMEDIATION-CHECKPOINT.md |
Snapshot berdampingan agar mudah dibandingkan tanpa mengubah sumber. Jangan menimpa final; gunakan salinan atau branch feat/, fix/, docs/.
Untuk Sesi 6: `node scripts/run-cap-contract.mjs start` dan `bug` harus keluar nonzero karena kontrak gagal; `final` harus lulus. Ini hasil yang diharapkan untuk pembelajaran TDD/regresi.
Hasil contoh tidak boleh diserahkan sebagai hasil eksekusi atau approval pribadi.

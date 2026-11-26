# Scope latihan VA — otorisasi studi kasus lokal
Target: repository lab ini, salinan/branch fix/va-remediation milik peserta. Semua identitas/data sintetis.
In scope: sesi-9/auth-vulnerable.mjs, cors-vulnerable.mjs, upload-vulnerable.mjs, lookup-safe.mjs; pembanding *-final.mjs; scanner/triage/template; test/session9.test.mjs.
package-lock.json boleh dibaca untuk verifikasi dependency; SIM-DEP-001 bukan advisory/CVE sungguhan.
Aksi yang tersedia: baca source, test in-memory, npm audit pada dependency repo ini, review diff minimal dan dokumentasi.
Di luar scope: scan host/domain/IP eksternal, secret, eksploit sistem nyata, upload ke production, shell pada host lain, deployment.
Tidak ada HTTP endpoint rentan. Jangan menghubungkan fixture vulnerable ke server.
Status approval peserta: belum diisi; tulis nama, baseline hash dan scope yang disepakati pada clone latihan sendiri.

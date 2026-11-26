# Sesi 8 — UAT Product Order
## Hands-on 1: requirement to UAT
Baca BRD.md (AC-01..05), FLOW.mmd, UAT-SCRIPTS.md dan PROMPTS.md. Gunakan uat-scenario-builder-v1.zip, lalu iterasi ke v2 dengan sumber sama.
SCENARIOS-v1 melewatkan exception Inactive dan clarification AC-05. SCENARIOS-v2 berisi 8 skenario: 7 Ready, 1 Blocked. TRACEABILITY.csv memetakan semua AC, bukan bukti semua AC telah lulus.
## Hands-on 2: execution, finding, sign-off
Buka checkpoint-01.html secara langsung, atau npm start dari root lalu http://127.0.0.1:4176/sesi-8/. Mulai UAT-003 dan UAT-004.
Checkpoint sengaja menghasilkan total 250 untuk harga100 × quantity3 serta status Draft. Catat actual dan evidence; ini temuan terhadap AC-03/04.
Acuan index.html (/sesi-8/final) menghasilkan total300 dan Submitted; lakukan retest terpisah. Uji quantity0, Inactive dan batas 1/99.
Simpan hasil pada RESULTS-TEMPLATE.csv dan FINDING-TEMPLATE.md; susun ACTION-ITEMS.csv serta SIGN-OFF-DRAFT.md. Owner harus mengisi keputusan sendiri. BQ-01 tetap terbuka.
`npm run test:s8` menguji aturan lokal; `npm run test:e2e` menguji browser setelah setup Chromium. Server manual harus dihentikan dahulu.
## Batas
Data hanya memori. Tidak ada pembayaran, stok, pelanggan nyata, akun atau persistence. Semua keputusan bisnis yang tercantum hanya aturan studi kasus.

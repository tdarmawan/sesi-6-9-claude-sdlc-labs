# UAT scripts v2

Prakondisi tiap skenario: reload; produk dan harga dari BRD; data sebelumnya dihapus.

## UAT-001 / AC-01 — Catalog
Actor: Business User; Priority: High.
1. Reload
2. Periksa katalog Active
Expected: Widget Active tersedia; Legacy tidak ada pada katalog normal.
Evidence: screenshot berlabel UAT-001-STEP-n. Actual/status/tester/tanggal: isi dari eksekusi nyata.

## UAT-002 / AC-02 — Quantity
Actor: Business User; Priority: High.
1. Isi quantity 0
2. Submit Order
Expected: Pesan validasi tampil; order tidak dibuat.
Evidence: screenshot berlabel UAT-002-STEP-n. Actual/status/tester/tanggal: isi dari eksekusi nyata.

## UAT-003 / AC-03 — Review total
Actor: Business User; Priority: High.
1. Pilih Widget harga 100
2. Isi quantity 3
3. Periksa total sebelum Submit
Expected: Order total = 300.
Evidence: screenshot berlabel UAT-003-STEP-n. Actual/status/tester/tanggal: isi dari eksekusi nyata.

## UAT-004 / AC-04 — Submit
Actor: Business User; Priority: High.
1. Pilih Widget, quantity 3
2. Submit Order
3. Periksa Orders
Expected: Satu order unik berstatus Submitted, quantity 3, total 300.
Evidence: screenshot berlabel UAT-004-STEP-n. Actual/status/tester/tanggal: isi dari eksekusi nyata.

## UAT-005 / AC-05 — Duplicate policy
Actor: Product Owner; Priority: Medium.
1. Minta keputusan BQ-01
Expected: Blocked sampai owner menetapkan kebijakan duplicate order.
Evidence: screenshot berlabel UAT-005-STEP-n. Actual/status/tester/tanggal: isi dari eksekusi nyata.

## UAT-006 / AC-01 — Inactive product
Actor: Business User; Priority: High.
1. Kontrol latihan: Siapkan produk Inactive
2. Submit Order
Expected: Produk Inactive ditolak dan tidak membuat order.
Evidence: screenshot berlabel UAT-006-STEP-n. Actual/status/tester/tanggal: isi dari eksekusi nyata.

## UAT-007 / AC-02 — Edit quantity
Actor: Business User; Priority: Medium.
1. Isi quantity 2
2. Ubah menjadi 3 sebelum Submit
Expected: Quantity terakhir 3 dan total 300.
Evidence: screenshot berlabel UAT-007-STEP-n. Actual/status/tester/tanggal: isi dari eksekusi nyata.

## UAT-008 / AC-02 — Quantity bounds
Actor: Business User; Priority: Medium.
1. Uji 1 dan 99 secara terpisah
2. Uji -1, 1.5, 100 secara terpisah
Expected: 1 dan 99 valid; -1, 1.5 dan 100 ditolak.
Evidence: screenshot berlabel UAT-008-STEP-n. Actual/status/tester/tanggal: isi dari eksekusi nyata.
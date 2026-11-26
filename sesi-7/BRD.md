# BRD latihan — WebTM Role Management
Versi acuan 1.1-lab. Data fiktif. Sumber topik: materi Sesi 2–5; paket ini ditulis ulang untuk latihan.

## 1. Document Identity
Prepared by: Analis Latihan. Audience: Tim Produk/Desain/Developer. Tanggal: diisi peserta.
## 2. Document Change Control
1.0: konsep awal. 1.1-lab: hasil klarifikasi, scope Role Management, aturan TBC dipertahankan.
## 3. Approval
Status: bahan latihan. Persetujuan produk/teknis belum diberikan; peserta mencatat keputusan sendiri.
## 4. Project Summary
Pengelolaan role WebTM dipisah dari CRM supaya gangguan CRM tidak memblokir pengelolaan role.
Tujuan: daftar role, pembuatan role dan pengaturan akses yang dapat ditelusuri ke requirement.
Definisi sukses latihan: semua skenario wajib lolos dan keputusan terbuka tercatat.
## 5. Project Scope
BRD mencakup RM-001 sampai RM-007. Prototype wajib dibatasi RM-001, RM-004, RM-005.
Login, hapus role, migrasi produksi dan backend tidak dibuat dalam prototype.
## 6. Business Process Overview
Super admin dengan All Access membuka Access Control > Roles, memilih Create New Role, mengisi nama,
permission dan status, lalu Submit. Nama duplikat terhadap role Active maupun Inactive ditolak.
Jika valid, sistem menghasilkan ID dan menyimpan role. Format ID, pesan dan navigasi sesudah simpan TBC.
View Only: aksi ubah tidak ditampilkan. None: menu tidak tersedia dan akses ditolak.
Flow dan UI acuan: lihat ../sesi-3/FLOW-CHECKPOINT-v2.md dan ../sesi-4/UI-BRIEF-CHECKPOINT.md.
## 7. Requirement
| ID | Kebutuhan | Detail dan batas |
|---|---|---|
| RM-001 | Daftar Role | Role ID, Role Name, Total User, Role Status; entrypoint Access Control > Roles, Create New Role. Detail Edit/Members di fase opsional |
| RM-002 | Role Members | Daftar nama/email user per role; data fiktif |
| RM-003 | Change Log Role | Riwayat perubahan role; format sumber, mapping dan entrypoint rinci TBC |
| RM-004 | Create New Role | ID dibuat sistem (format TBC), nama alphanumeric, nama unik terhadap role Active maupun Inactive, status Active/Inactive; pesan validasi/default/mandatory TBC |
| RM-005 | Role Permission | Setiap menu/submenu memiliki None, View Only, All Access. None menyembunyikan menu/menolak akses; View Only menghilangkan aksi ubah; All Access akses penuh. Default dan relasi induk-submenu TBC |
| RM-006 | Dampak Role Status | Inactive tidak memaksa logout seketika; login berikutnya ditolak setelah session berakhir. Di luar prototype |
| RM-007 | Edit Role | Ubah nama, permission dan status; ID tetap; perubahan tercatat. Opsional kode |

## 8. Appendix
### A. Menu / submenu untuk RM-005
- TRADEMARKETING: DRAFT, INFORMASI PROMO, UPLOAD SB MANUAL, SET PIC SALES, TM REPORT
- APPROVAL: DRAFT SB, REALIZATION
- SERVICES: DAILY ACUMULATION, CLAIM STATUS, ANNOUNCE
- INQUIRY FBP/TM: DMS SALES, TANGKAS SALES, NAV SALES, AUDIT GC DATA, REDEEM DIRECT
- SB MONITORING: SALES BRIEF, SB SELL OUT, SB SELL IN, TCM CLAIM & REDEEM, NAV REDEEM, SYNC SALES BRIEF
- PROMO NOTIF: WA REPORT, LOGGING HISTORY
- ACCESS CONTROL: MASTER MENU, ROLES, USERS

### B. Aturan
Satu user memiliki satu role. Assignment user dan login berada di luar alur wajib.
View Only pada Roles menyembunyikan Create/Edit; hak export laporan tetap tersedia.
TBC tidak boleh diganti dengan dugaan. Aturan sementara prototype ditandai D-xx di NOTES.md.
### C. Perubahan hasil klarifikasi
Role Name unik termasuk role Inactive; menu bernama Access Control > Roles; user satu role;
Inactive tidak menyebabkan force logout seketika. Usulan format ID atau pesan validasi belum disetujui.

# UI brief — WebTM
Platform desktop responsif, bahasa Indonesia, sidebar gelap dan aksi utama hijau.

| Screen | Tujuan/aksi | State | Requirement | Scope prototype |
|---|---|---|---|---|
| Daftar Role | Lihat ID, nama, total user, status; Create New Role | berisi, kosong, View Only, None | RM-001, RM-005 | wajib |
| Create New Role | Isi nama, status, permission; Submit/Batal | awal, duplikat, nama kosong, loading, gagal simpan | RM-004, RM-005 | wajib |
| Role Members | Lihat nama/email fiktif | berisi/kosong | RM-002 | desain konteks; opsional kode |
| Change Log | Lihat perubahan per role | berisi/kosong; entrypoint TBC | RM-003 | desain konteks; opsional kode |

Tidak ada tambahan login/hapus role. ID readonly. Teks error dekat field dan dapat dibaca pembaca layar.
Komponen harus berlabel, dapat dipakai dengan keyboard, dan menyesuaikan lebar ponsel.
Source of truth: BRD.md. Perbedaan visual acuan tidak boleh mengubah aturan bisnis.

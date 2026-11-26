# Acuan teknis, bukan approval peserta
VA-001: guard actor serta ownerId sebelum data dikembalikan; 404 tidak membocorkan apakah record milik pihak lain ada. Test meliputi pemilik/nonpemilik/tanpaactor.
VA-002: exact origin allowlist dan Vary: Origin; wildcard di fixture adalah indikasi konfigurasi, severity perlu konteks runtime. Tidak ada claim eksploit live.
VA-003: extension/MIME/size/signature/dimensi/decoder PNG+CRC. Tidak menulis file atau menjalankan payload. Batas lain seperti penyimpanan, malware, rate limit di luar implementasi ini.
VA-004: SIM-DEP-001 belum mempunyai advisory nyata. Tetap Unverified, walaupun npm audit dependency repo tidak menemukan masalah saat pengujian.
VA-005: query menggunakan placeholder dengan params terpisah; catat alasan false positive.
Enam alert => lima temuan; SCN001/002 dikonsolidasikan, seluruh referensi tetap ada.
Status teknis acuan: test lokal tersedia dan dijalankan pada VALIDATION.md. Human security approval: Pending.

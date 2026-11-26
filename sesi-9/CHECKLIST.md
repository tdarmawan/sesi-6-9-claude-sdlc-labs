# Checklist VA
1. Catat baseline hash dan scope tertulis; source dummy; hindari .env/token.
2. Baca handler ownership, CORS origin dan validasi upload. Tulis file:baris aktual serta alur input/keputusan/output.
3. Bedakan vulnerability, indikasi konfigurasi, false positive dan unverified dependency.
4. Konsolidasikan alert dengan root cause/evidence sama; jangan menghapus referensi scanner asal.
5. Pisahkan severity, confidence, exposure, exploitability dan business impact. Jangan memakai hitungan sederhana sebagai CVSS resmi.
6. Jalankan npm run test:s9 yang hanya memakai memory. Uji fixture rusak dan final untuk membuktikan test mengenali kontrol.
7. Scope patch satu komponen di branch fix/va-remediation; review diff dan regression.
8. Retain open risk, reviewer dan status Pending sampai review aktual; jangan menyimpulkan seluruh aplikasi aman.

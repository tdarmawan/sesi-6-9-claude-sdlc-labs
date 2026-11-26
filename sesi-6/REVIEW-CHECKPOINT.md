# Acuan review, bukan hasil peserta
STOCK: fungsi availableStock pada stock-bug mengabaikan reservedQty; stockQuery menginterpolasi batchCode. Acuan memisahkan nilai parameter.
CAP: tepat limit harus <=; key bulan harus menyertakan tahun UTC. Bug checkpoint sengaja gagal dua kontrak.
CSV: csv-bug tidak melindungi delimiter/newline/formula. csv-final menambah quoting dan perlindungan formula untuk latihan.
Golden: response hanya berisi klaim user yang diminta; uang integer dan nama field tetap. Jangan update GOLDEN tanpa perubahan kontrak yang disengaja.
Bisect: commit bertajuk C: regression ownership filter menghapus filter user. Gunakan hash aktual dari generator, bukan hash dalam slide lama.
Performance note: budgetRows pada lab mengambil seluruh klaim user; untuk volume produksi gunakan agregasi SQL dan paging yang teruji. Ini batas skalabilitas lab, bukan bukti readiness produksi.
Approval PR dan skor peserta: Pending.

# Instruksi dan konfigurasi
Root CLAUDE.md mengimpor AGENTS.md untuk aturan bersama. Sesi 6 menambah CLAUDE.md pada scope subfolder.
CLAUDE.md dan rules adalah konteks instruksi, bukan enforcement keamanan. Permission/settings/hook dan environment perlu diverifikasi terpisah.
Auto memory adalah catatan yang dipelihara Claude per project/user; jangan menganggap semua isinya otomatis dibagikan melalui Git. Buka /memory dan periksa sumber yang benar-benar dimuat.
Contoh settings.example.json boleh ditinjau lalu disalin ke .claude/settings.json di clone pribadi. Jangan menyimpan token di Git.
Contoh testing.rules.md dapat disalin ke .claude/rules/testing.md. Minta Claude menyebut sumber aturan yang dibaca, lalu verifikasi perilakunya.
Fitur UI/izin/command Claude dapat berbeda menurut versi dan akun. Bila command review tidak tersedia, mulai chat baru dan tempel git diff beserta REVIEW.md.
Sumber resmi: https://code.claude.com/docs/en/memory dan https://code.claude.com/docs/en/settings.

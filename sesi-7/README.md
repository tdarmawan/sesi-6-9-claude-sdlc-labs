# Sesi 7 — Test Cases & Agentic Testing
Sumber kasus WebTM dari Sesi 2–5; BRD.md, UI-BRIEF.md, FLOW.mmd, flow.svg, screen-create.svg, screen-list.svg dan prototype acuan disertakan agar lab mandiri.
## Hands-on 1
Ikuti 01-build-qa-test.md sampai 05-iterate-skill.md. Pasang ZIP Skill atau salin SKILL.md ke pembuat Skill. Setiap ZIP berisi tepat satu root Skill/SKILL.md.
Checkpoint v1: 10 test case, dua gap disengaja. v2: 12 test case; TC-010 tetap Blocked karena kebijakan kapital TBC. Coverage hanya RM-001/004/005; jangan mengklaim semua BRD teruji.
## Hands-on 2
Buka checkpoint-01.html di Chrome. Jalur loopback: dari root npm ci, npm start, lalu http://127.0.0.1:4176/sesi-7/.
Ikuti 01-setup-claude-in-chrome.md sampai 06-consolidate-qa-report.md. Mulai TC-001, lalu TC-002/003 pada run terpisah. Muat ulang per kasus.
Checkpoint sengaja memiliki satu defect duplikat Inactive. Acuan index.html menolaknya; catat retest terpisah.
Skills/konektor/Chrome membutuhkan akses akun sendiri. Jika Skill tidak muncul di side panel, tempel execution-rules-paste.md dan gunakan Project untuk format catatan. Tanpa Claude, langkah manual tetap valid bila buktinya aktual.
Jalankan npm run test:s7 dari root untuk oracle domain; npm run test:e2e menguji browser. Jangan menjalankan server manual bersamaan dengan E2E.
EXECUTION-TEMPLATE.csv, DEFECT-TEMPLATE.md dan QA-REPORT-TEMPLATE.md sengaja belum terisi hasil peserta.

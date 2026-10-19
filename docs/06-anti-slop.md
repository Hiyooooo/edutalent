# 06. Anti-Slop Rules

## 1. Visual dilarang
- Jangan memakai hero gradient teal-cyan, glassmorphism, glow, atau blob dekoratif.
- Jangan membuat semua section berupa grid 3 kartu identik.
- Jangan memakai dashboard palsu yang dipenuhi angka tanpa fungsi naratif.
- Jangan memakai foto stok berjabat tangan, tim tertawa menatap laptop, pose menunjuk papan kaca, atau senyum korporat yang dipaksakan.
- Jangan memakai foto wajah AI atau ilustrasi vektor sebagai pengganti foto asli.
- Jangan memakai badge yang menyerupai lembaga sertifikasi, universitas, atau sertifikasi profesi.
- Jangan membuat chart hanya untuk dekorasi; setiap grafik harus punya judul, label, dan makna.
- Jangan mengandalkan warna saja untuk menyampaikan lulus, gagal, atau progres.

## 2. Klaim, logo, dan merek dilarang
- Jangan membuat logo klien, perusahaan, universitas, lembaga sertifikasi, atau mitra.
- Jangan menyatakan “anti-curang 100%”, “proctoring menjamin kejujuran”, “otomatis menentukan kenaikan gaji”, atau “pasti meningkatkan produktivitas”.
- Jangan menulis statistik dampak, jumlah pengguna, ROI, harga, testimoni, dan sertifikasi tanpa bukti yang disetujui.
- Jangan menyebut integrasi pihak ketiga yang belum dikonfirmasi.
- Jangan menyebut demo sebagai fitur produksi yang sudah aktif.

## 3. Copy dilarang
Hindari: “revolusioner”, “terdepan”, “seamless”, “game-changer”, “solusi all-in-one terbaik”, “tingkatkan produktivitas 10x”, “masa depan HR”.
Jangan memakai em dash `—` pada halaman.
Jangan memakai copy generik seperti “semua kebutuhan dalam satu platform” tanpa menjelaskan mekanisme yang relevan.

## 4. Copy wajib
- Jelaskan hubungan materi → ujian → tinjauan → tindak lanjut.
- Gunakan label “Data simulasi”, “Ilustrasi”, atau “Contoh sertifikat internal” di dekat UI demo.
- Jelaskan batas demo proctoring dan kalkulator insentif.
- Bedakan pengajuan simulasi dari pengajuan sungguhan.
- Gunakan CTA jelas dan konsisten: “Jadwalkan konsultasi”.

## 5. Kode dilarang
- Jangan menambahkan request jaringan ke demo.
- Jangan memakai `getUserMedia`, geolocation API, atau akses layar.
- Jangan mengimplementasikan fungsi demo hanya di komponen UI; letakkan rumus di `lib/` dan buat unit test.
- Jangan menambah animasi looping atau memaksa motion bagi pengguna reduced-motion.
- Jangan menaruh secret/API key di client; tidak ada integrasi API yang diminta.
- Jangan memakai `dangerouslySetInnerHTML` untuk konten dinamis.

## 6. Visual wajib
- Timeline belajar dengan checkpoint yang jelas.
- Progress bar kompetensi yang juga menampilkan nilai teks.
- Exam spotlight dan Library spotlight lebih dominan daripada tiga modul pendukung.
- Pola section berganti: editorial, demo lebar, timeline, foto kontekstual, grid modular, CTA.
- Foto asli dengan lisensi jelas, disimpan lokal, dan dicatat di `public/images/CREDITS.md`.

## 7. Tabel wording berisiko
| Dilarang | Gunakan |
|---|---|
| “Proctoring mencegah semua kecurangan” | “Panel ini menggambarkan konsep proctoring; efektivitas bergantung pada implementasi dan kebijakan.” |
| “Nilai tinggi otomatis menaikkan gaji” | “Hasil kompetensi dapat menjadi salah satu bahan evaluasi sesuai kebijakan perusahaan.” |
| “Sertifikat resmi” | “Contoh sertifikat internal (ilustrasi).” |
| “Terbukti meningkatkan produktivitas” | “Dirancang untuk membantu tim meninjau proses belajar dan evaluasi.” |
| “Terintegrasi dengan semua sistem” | “Ruang lingkup integrasi perlu dikonfirmasi.” |
| “Aman 100%” | “Jelaskan kontrol keamanan yang benar-benar diterapkan setelah diverifikasi.” |

## 8. Uji anti-slop (jawab ya/tidak)
1. Apakah hero menjelaskan pembeda EduTalent dalam 5 detik?
2. Apakah Exam dan Library lebih menonjol daripada modul pendukung?
3. Apakah setiap angka demo punya konteks dan label simulasi?
4. Apakah alur belajar bisa dipahami tanpa membaca seluruh halaman?
5. Apakah timeline, progress bar, dan badge punya fungsi nyata?
6. Apakah foto relevan dengan section dan bukan sekadar dekorasi?
7. Apakah foto tidak menyiratkan pelanggan/testimoni?
8. Apakah klaim proctoring dan skill-based pay diberi batasan?
9. Apakah section memakai ritme visual yang bervariasi?
10. Apakah seluruh UI dapat digunakan dengan keyboard dan reduced-motion?

## 9. Audit otomatis
Jalankan dari root proyek. Perintah berikut harus menghasilkan nol hasil kecuali file fixture atau dokumentasi yang secara eksplisit dikecualikan:
```bash
grep -RniE "revolusioner|game-changer|seamless|100% aman|anti-curang 100%|terbukti meningkatkan produktivitas" src
grep -RniE "getUserMedia|navigator\\.geolocation|mediaDevices" src
grep -RniE "unsplash\\.com/.+\\.(jpg|png|webp)|images\\.pexels\\.com" src
grep -RniE "lorem ipsum|TODO: testimonial|10x lebih produktif" src
```
Untuk hotlink audit, URL boleh berada di `CREDITS.md` tetapi tidak di `src` sebagai `src` gambar. Periksa juga bahwa setiap foto yang dipakai di komponen berasal dari manifest lokal.

## 10. Kriteria lulus
Jangan laporkan audit lulus jika perintah belum dijalankan. Untuk hasil nonzero, tinjau setiap temuan secara manual dan jelaskan pengecualian yang sah.

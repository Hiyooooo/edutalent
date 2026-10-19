# 02. Design System

## 1. Identitas visual
| Sumbu | Keputusan |
|---|---|
| Mode | Terang, putih hangat |
| Warna utama | Deep Teal `#0D9488` |
| Warna sekunder | Soft Cyan `#06B6D4` |
| Font | Manrope (display), Nunito Sans (body), IBM Plex Mono (angka) |
| Bentuk | Panel modular dengan sudut 14–20 px; timeline vertikal; badge berbentuk kapsul |
| Layout | Hero editorial dua kolom, panel progres besar, section bergantian antara grid, timeline, dan pita horizontal |
| Motif khas | Jalur belajar bertahap dengan titik checkpoint |
| Motion | Transisi singkat untuk perubahan state saja; tidak ada animasi looping |

Kombinasi font ini dipilih agar berbeda dari gaya dashboard generik: judul humanis, isi ramah dibaca, angka progres rapi.

## 2. Token warna
```css
:root {
  --color-brand: #0D9488;
  --color-brand-dark: #0F766E;
  --color-brand-ink: #115E59;
  --color-cyan: #06B6D4;
  --color-cyan-ink: #155E75;
  --color-bg: #FFFEFA;
  --color-surface: #FFFFFF;
  --color-surface-soft: #F0FDFA;
  --color-surface-cyan: #ECFEFF;
  --color-text: #173B3A;
  --color-text-muted: #496563;
  --color-border: #C7DAD7;
  --color-success: #166534;
  --color-warning: #92400E;
  --color-danger: #B91C1C;
  --color-focus: #1D4ED8;
}
```

## 3. Aturan kontras
Hasil hitungan WCAG dari skrip pendamping dokumentasi:
| Pasangan | Kontras | Aturan |
|---|---:|---|
| `#173B3A` di `#FFFEFA` | 12.08:1 | Teks utama, aman |
| `#496563` di `#FFFEFA` | 6.26:1 | Teks sekunder, aman |
| `#0D9488` di `#FFFEFA` | 3.71:1 | Hanya teks besar/elemen UI; jangan untuk body text |
| `#0F766E` di `#FFFEFA` | 5.42:1 | Tautan dan teks aksen kecil |
| `#06B6D4` di `#FFFEFA` | 2.41:1 | Fill/dekorasi saja; jangan teks kecil atau garis kontrol penting |
| `#155E75` di `#ECFEFF` | 6.99:1 | Teks aksen cyan |
| `#FFFFFF` di `#0D9488` | 3.74:1 | Jangan gunakan untuk teks tombol normal |
| `#FFFFFF` di `#0F766E` | 5.47:1 | Boleh untuk teks tombol primer |
| `#173B3A` di `#06B6D4` | 5.02:1 | Gunakan teks gelap pada tombol/fill cyan |

Catatan: angka pada tabel dihitung dengan skrip verifikasi yang disertakan dalam paket. Jika hasil skrip lokal berbeda karena token berubah, perbarui semua angka di seluruh docs. Jangan menebak angka baru.

**Aturan keras:** teks normal minimal 4.5:1; teks besar minimal 3:1; komponen kontrol dan indikator visual minimal 3:1 terhadap warna yang bersebelahan. Jangan menggunakan putih di atas `--color-brand` untuk label tombol. Gunakan `--color-brand-dark` sebagai fill tombol primer. `--color-cyan` hanya aksen/fill dengan teks gelap.

## 4. Tipografi
| Peran | Font | Desktop | Mobile | Weight / line-height |
|---|---|---:|---:|---|
| H1 | Manrope | 52/58 px | 38/44 px | 750 / 1.08 |
| H2 | Manrope | 38/44 px | 30/36 px | 700 / 1.15 |
| H3 | Manrope | 24/30 px | 21/27 px | 700 / 1.2 |
| Body | Nunito Sans | 17/28 px | 16/26 px | 400 / 1.6 |
| Caption | Nunito Sans | 13/20 px | 13/20 px | 600 / 1.45 |
| Angka progres | IBM Plex Mono | 28/34 px | 24/30 px | 500 / 1.2 |

Gunakan angka tabular untuk skor, persentase, waktu, dan nilai simulasi.

## 5. Spacing, radius, dan layout
- Container maksimum: 1200 px; padding horizontal 24 px desktop dan 20 px mobile.
- Grid desktop: 12 kolom; tablet: 8 kolom; mobile: 4 kolom.
- Breakpoint uji: 375, 768, 1024, 1440 px.
- Spacing dasar: kelipatan 4 px; jarak section desktop 96–120 px, mobile 64–80 px.
- Radius panel utama 20 px, kartu 16 px, kontrol 10 px, badge 999 px.
- Border 1 px; bayangan hanya untuk panel yang perlu hierarki, bukan setiap kartu.

## 6. Komponen
- **Navbar:** wordmark kiri, tautan “Cara kerja”, “Modul”, “FAQ”, tombol konsultasi kanan. Mobile memakai menu tombol dengan label aksesibel.
- **Tombol primer:** fill `#0F766E`, teks putih; tinggi minimal 48 px.
- **Tombol sekunder:** transparan/putih, border `#0F766E`, teks `#0F766E`.
- **Panel demo:** latar putih, border, heading “Demo simulasi”, status dan data yang terbaca.
- **Progress bar:** track `#DDEBE8`, fill teal; nilai persentase juga harus muncul sebagai teks.
- **Badge sertifikat:** bentuk kapsul atau kartu kecil dengan teks “Contoh sertifikat internal”; jangan menyerupai sertifikasi eksternal.
- **Input:** label permanen, instruksi, error terhubung dengan `aria-describedby`.
- **Timeline:** garis vertikal dengan checkpoint dan status teks; jangan hanya membedakan status lewat warna.

## 7. Visual dan diagram khas
1. **Hero learning path:** panel UI kode dengan 3 checkpoint: “Pelajari materi”, “Ikuti ujian”, “Tinjau hasil”. Tambahkan label “Data simulasi”.
2. **Competency bars:** tiga kompetensi dengan nama, skor numerik, dan progress bar. Tidak menyiratkan hasil karyawan nyata.
3. **Learning timeline:** materi, waktu belajar, ujian, tinjauan; urutan harus konsisten.
4. **Exam panel:** nomor soal, pilihan jawaban, penghitung soal dan hasil simulasi. Tidak ada kamera atau pemantauan nyata.
5. **Library panel:** kartu video, modul bacaan, progres penyelesaian, badge internal simulasi.

Semua diagram harus punya judul dan ringkasan tekstual. Hindari menyampaikan status dengan warna saja.

## 8. Motion
- Diizinkan: transisi warna/fokus 120–180 ms; panel hasil muncul 160 ms; perubahan progress tanpa gerak berlebihan.
- Tidak diizinkan: auto-scroll, parallax, animasi looping, angka yang terus menghitung, atau elemen yang bergerak tanpa interaksi.
- `prefers-reduced-motion: reduce`: hapus transform dan transisi non-esensial; tampilkan state akhir.
- Semua interaksi harus tetap berfungsi dengan keyboard.

## 9. Ikon dan logo
Gunakan `lucide-react` untuk ikon. Logo EduTalent berupa wordmark buatan sendiri dan simbol jalur checkpoint sederhana yang dibuat dengan CSS/SVG. Jangan memakai logo pihak ketiga atau badge lembaga sertifikasi.

## 10. Implementasi
- Definisikan token sebagai CSS custom properties dan petakan ke Tailwind.
- Muat font dengan `next/font/google`; bila build harus offline, unduh/host font dengan lisensi yang sesuai dan dokumentasikan perubahan.
- Gunakan `next/image` untuk foto lokal.
- Fungsi format angka dan perhitungan demo berada di `src/lib/`; komponen hanya mengatur presentasi.
- Jangan memakai hex berulang di komponen; gunakan token, kecuali OG generator membutuhkan konstanta terpusat.

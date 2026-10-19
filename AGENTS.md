# EduTalent: Instruksi Agent

## 1. Misi
Bangun landing page pemasaran untuk EduTalent, platform HRIS dengan pendekatan learning & talent development. Audiens: perusahaan konsultan, tech talent incubator, organisasi edukasi, dan tim HR/L&D yang mengembangkan keterampilan SDM. Ini **landing page promosi**, bukan aplikasi internal. Bintang utama: **Exam** dan **Library**. Identitas visual: deep teal `#0D9488`, soft cyan `#06B6D4`, latar putih hangat, timeline pembelajaran, progress kompetensi, dan badge sertifikat. Tidak ada integrasi admin panel yang diminta.

## 2. Urutan baca dan prioritas
Baca berurutan:
1. `AGENTS.md`
2. `docs/06-anti-slop.md`
3. `docs/02-design-system.md`
4. `docs/07-image-plan.md`
5. `docs/04-modules.md`
6. `docs/03-page-structure.md`
7. `docs/05-seo-og-quality.md`
8. `docs/01-brief.md`

Jika ada konflik: instruksi keamanan/kejujuran di `AGENTS.md` > anti-slop > design system > image plan > modules > page structure > SEO > brief. Jangan mengarang fitur yang tidak ditentukan; catat asumsi.

## 3. Format produk dan persuasi
- Bangun alur: masalah pengembangan kompetensi → cara kerja → bukti melalui demo → modul pendukung → implementasi → FAQ → CTA.
- Tampilkan CTA utama minimal 5 kali, tetapi jangan membuatnya mengganggu.
- Setiap section harus memiliki elemen visual yang relevan: foto asli berlisensi, UI mockup yang dibuat dengan kode, diagram, timeline, atau tabel.
- Semua demo adalah showcase interaktif dengan state lokal. Jangan mengirim network request, membuka kamera, meminta geolokasi, atau mengunduh file sungguhan.
- Semua angka, hasil ujian, gaji, perusahaan, sertifikat, testimoni, dan statistik contoh harus diberi label **Ilustrasi** atau **Data simulasi**.

## 4. Lima modul wajib
| Modul | Peran | Sub-fitur wajib |
|---|---|---|
| **Exam** | Bintang utama: evaluasi kompetensi | Bank soal interaktif, live proctoring sebagai konsep demo, tes minat bakat, leaderboard, assessment rekrutmen online, evaluasi kinerja, uji kompetensi, proctoring |
| **Library** | Bintang utama: belajar mandiri dan materi internal | Video e-learning, modul PDF interaktif (simulasi UI, tanpa unduhan nyata), sertifikat kursus internal, knowledge base SOP, arsip dokumen perusahaan, modul e-learning |
| Absensi | Menyandingkan waktu kerja dan waktu belajar | Jam masuk/keluar, GPS geofencing sebagai fitur yang dijelaskan bukan didemokan dengan lokasi nyata, shift kerja, rekap kehadiran real-time, jam training |
| Perizinan | Pengajuan kebutuhan pengembangan | Workflow approval cuti, izin sakit, lembur, transparansi sisa cuti, cuti belajar, beasiswa sertifikasi profesi |
| Gaji | Menjelaskan hubungan kompetensi dengan insentif | Kalkulasi otomatis, PPh 21, BPJS, slip gaji digital, reimbursement, simulasi insentif kenaikan gaji berbasis kelulusan |

Integrasi: Library menyajikan materi; Exam mengukur hasil belajar; kelulusan dapat menjadi masukan untuk evaluasi dan simulasi insentif Gaji; Absensi merekap waktu kerja dan training; Perizinan mengelola persetujuan cuti belajar/beasiswa. Jangan menyatakan alur ini sudah aktif di produk nyata tanpa bukti.

## 5. Tech stack wajib
Gunakan Next.js App Router, React, TypeScript, Tailwind CSS, `lucide-react`, `next/font/google`, `next/image`, `clsx`, `tailwind-merge`, dan `vitest`. Pilihan font: **Manrope** (display), **Nunito Sans** (body), **IBM Plex Mono** (angka/kode). Jangan menambah Framer Motion, GSAP, Lottie, atau library chart tanpa alasan dan persetujuan.

Pohon folder minimum:
```text
05-edutalent/
├── AGENTS.md
├── docs/
├── public/
│   └── images/
│       ├── CREDITS.md
│       └── ...
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── globals.css
    │   ├── robots.ts
    │   ├── sitemap.ts
    │   └── opengraph-image.tsx
    ├── components/
    │   ├── layout/
    │   ├── sections/
    │   ├── modules/
    │   ├── demos/
    │   └── ui/
    └── lib/
        ├── site.ts
        ├── images.ts
        ├── format.ts
        ├── exam.ts
        ├── library.ts
        ├── compensation.ts
        └── __tests__/
```
Letakkan fungsi murni di `lib/`, komponen presentasi di `components/`, dan uji fungsi murni dengan Vitest. Jangan menambahkan API backend.

## 6. DO / DON'T tema
**DO**
- Utamakan bukti proses belajar: timeline, kemajuan kompetensi, hasil ujian, dan badge sertifikat simulasi.
- Gunakan kata kerja konkret: pelajari, uji, tinjau, ukur, tindak lanjuti.
- Tampilkan hubungan antar modul dengan diagram yang dapat dibaca.
- Tandai setiap mockup sebagai data simulasi.

**DON'T**
- Jangan mengklaim proctoring mencegah semua kecurangan, tes minat bakat menentukan masa depan, atau skor otomatis menjamin kenaikan gaji.
- Jangan menampilkan logo klien, lembaga sertifikasi, universitas, atau mitra asli tanpa izin.
- Jangan membuat testimoni, statistik dampak, sertifikasi, harga, atau integrasi palsu.
- Jangan gunakan wajah hasil AI, ilustrasi vektor sebagai pengganti foto, gambar hotlink, atau foto tanpa lisensi yang jelas.
- Jangan memakai gradien dekoratif, animasi looping, emoji sebagai ikon UI, atau kartu identik di setiap section.
- Jangan memakai em dash `—` di copy halaman. Em dash boleh ada di dokumentasi ini.

## 7. Kualitas minimum
- `npm run build`, `npm run test`, dan typecheck harus lulus.
- Target Lighthouse mobile ≥ 90 untuk Performance, Accessibility, Best Practices, dan SEO; laporkan hasil nyata, jangan mengarang skor.
- Uji lebar 375, 768, 1024, dan 1440 px.
- Target WCAG 2.2 AA: teks normal ≥ 4.5:1; teks besar dan komponen UI ≥ 3:1.
- Hormati `prefers-reduced-motion`; tanpa animasi looping.
- Lengkapi metadata SEO/OG, sitemap, robots, HTML semantik, focus state, dan alt foto.
- Jangan mengklaim lulus audit sebelum benar-benar dijalankan.

## 8. Alur kerja agent
1. Periksa repository dan package manager; jangan menghapus pekerjaan yang sudah ada.
2. Baca seluruh dokumen ini.
3. Buat design tokens dan struktur section.
4. Siapkan minimal 6 slot foto asli sesuai `docs/07-image-plan.md`; cari dan periksa 3 kandidat per slot, unduh foto berlisensi ke `public/images/`, dan catat sumber di `CREDITS.md`. Jika terblokir, gunakan placeholder netral dan laporkan BLOCKER.
5. Bangun layout responsif, navigasi, section, dan footer.
6. Bangun demo lokal Exam, Library, dan kalkulator insentif; buat fungsi murni dan test vector yang sesuai.
7. Tambahkan metadata, OG image, sitemap, robots, dan JSON-LD.
8. Jalankan test, typecheck, build, audit aksesibilitas dan responsif.
9. Audit klaim, foto, lisensi, semua modul, dan rujukan.
10. Laporkan apa yang selesai, hasil verifikasi nyata, sumber gambar, asumsi, blocker, dan keputusan yang diperlukan.

## 9. Definition of Done
- [ ] Semua section dan lima modul hadir; Exam dan Library mendapat ruang paling besar.
- [ ] CTA utama muncul minimal 5 kali.
- [ ] Semua demo berfungsi lokal dan memiliki label simulasi.
- [ ] Foto asli berlisensi lokal, minimal 6 slot, dengan credits; atau blocker dilaporkan tanpa mengganti dengan AI/vector.
- [ ] Kontras, test vector, metadata, dan panjang karakter diverifikasi.
- [ ] Tidak ada klaim, logo, testimoni, harga, atau sertifikasi palsu.
- [ ] Build, test, typecheck, responsive checks, dan audit dicatat dengan hasil nyata.

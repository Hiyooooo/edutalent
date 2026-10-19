# Tasks & Implementation Checklist: EduTalent

Dokumen ini memuat daftar tugas terstruktur untuk pembangunan landing page EduTalent. Semua tahapan merujuk pada ketentuan [AGENTS.md](file:///d:/Coding/Akarindo/10%20Website/05-edutalent/AGENTS.md) dan panduan `docs/01` sampai `docs/07`.

---

## Ringkasan Fase Pengerjaan

1. **Fase 1: Inisialisasi Proyek & Konfigurasi Lingkungan**
2. **Fase 2: Optimasi Gambar Lokal & Manifest Aset**
3. **Fase 3: Logika Murni (Pure Functions) & Unit Testing**
4. **Fase 4: Design Tokens & Layout Dasar**
5. **Fase 5: Komponen Presentasi & 12 Seksi Halaman**
6. **Fase 6: Showcase Demo Interaktif Lokal**
7. **Fase 7: SEO, OpenGraph Image & JSON-LD**
8. **Fase 8: Quality Gates & Audit Otomatis**
9. **Fase 9: Uji Aksesibilitas, Responsivitas & Build**
10. **Fase 10: Verifikasi Akhir Definition of Done**

---

## Rincian Checklist Tugas

### Fase 1: Inisialisasi Proyek & Konfigurasi Lingkungan
- [x] **T-1.1** Siapkan konfigurasi `package.json` dengan tech stack wajib: Next.js App Router, React, TypeScript, Tailwind CSS, `lucide-react`, `clsx`, `tailwind-merge`, `vitest`, dan `sharp`.
- [x] **T-1.2** Jalankan instalasi dependensi via package manager.
- [x] **T-1.3** Buat konfigurasi TypeScript (`tsconfig.json`) dan PostCSS/Tailwind (`tailwind.config.ts`, `postcss.config.mjs`).
- [x] **T-1.4** Konfigurasi Vitest (`vitest.config.ts`) untuk eksekusi unit test di `src/lib/__tests__/`.
- [x] **T-1.5** Setup pemuatan font Google melalui `next/font/google`:
  - **Manrope** (display)
  - **Nunito Sans** (body)
  - **IBM Plex Mono** (angka/skor tabular)

### Fase 2: Optimasi Gambar Lokal & Manifest Aset
- [x] **T-2.1** Verifikasi ketersediaan 6 berkas foto mentah di `public/images/`:
  - `edu-01-learning-session.jpg`
  - `edu-02-consulting-team.jpg`
  - `edu-03-technical-training.jpg`
  - `edu-04-education-workshop.jpg`
  - `edu-05-learning-planning.jpg`
  - `edu-06-team-reflection.jpg`
- [x] **T-2.2** Buat skrip pemrosesan gambar menggunakan `sharp`:
  - Potong sesuai rasio: 16:9 untuk EDU-01, EDU-05, EDU-06; 4:3 untuk EDU-02, EDU-03, EDU-04.
  - Konversi ke format WebP kualitas ~78 dan hapus metadata EXIF.
  - Pastikan ukuran berkas masing-masing <= 220 KB dan total aset di atas lipatan <= 600 KB.
- [x] **T-2.3** Buat berkas dokumentasi lisensi `public/images/CREDITS.md` berisi slot ID, fotografer, sumber, lisensi, dan catatan ilustrasi.
- [x] **T-2.4** Buat manifest gambar `src/lib/images.ts` berbentuk objek `{ id, src, alt, width, height }`.

### Fase 3: Logika Murni (Pure Functions) & Unit Testing
- [x] **T-3.1** Buat `src/lib/site.ts` untuk konstanta situs (nama, title, description, URL placeholder).
- [x] **T-3.2** Buat `src/lib/format.ts` untuk fungsi format angka, persentase, dan mata uang Rupiah.
- [x] **T-3.3** Buat `src/lib/exam.ts`:
  - Fungsi murni perhitungan skor: `score = round((correctAnswers / totalQuestions) * 100)` dengan penanganan `totalQuestions <= 0`.
  - Data bank soal lokal 5 nomor (topik Dasar Keamanan Data).
- [x] **T-3.4** Buat `src/lib/library.ts`:
  - Fungsi murni penambahan progres: `nextProgress = min(100, max(0, currentProgress) + 25)`.
  - Data katalog materi dummy (video SOP, modul keamanan data, panduan layanan).
- [x] **T-3.5** Buat `src/lib/compensation.ts`:
  - Fungsi simulasi insentif berbasis skor (skor >= 80 mendapatkan 5% gaji pokok; skor < 80 bernilai 0).
  - Tambahkan komentar kode wajib: `// DEMO ONLY: simplified incentive rule; not payroll, tax, BPJS, or employment-policy advice.`
- [x] **T-3.6** Buat berkas unit test di `src/lib/__tests__/`:
  - `exam.test.ts`
  - `library.test.ts`
  - `compensation.test.ts`
- [x] **T-3.7** Jalankan `npm run test` untuk memastikan semua test vector lulus.

### Fase 4: Design Tokens & Layout Dasar
- [x] **T-4.1** Tulis CSS custom properties di `src/app/globals.css`:
  - Brand Teal (`#0D9488`), Brand Dark (`#0F766E`), Brand Ink (`#115E59`)
  - Cyan (`#06B6D4`), Cyan Ink (`#155E75`)
  - Background (`#FFFEFA`), Surface (`#FFFFFF`, `#F0FDFA`, `#ECFEFF`)
  - Teks (`#173B3A`, `#496563`), Border (`#C7DAD7`)
  - Semantic status (Success, Warning, Danger, Focus ring `#1D4ED8`)
- [x] **T-4.2** Petakan token CSS ke `tailwind.config.ts`.
- [x] **T-4.3** Terapkan aturan kontras WCAG 2.2 AA:
  - Tombol primer menggunakan fill Dark Teal `#0F766E` dengan teks putih (rasio 5.47:1).
  - Teks di atas warna cyan wajib menggunakan warna gelap `#173B3A` (rasio 5.02:1).
- [x] **T-4.4** Buat `src/app/layout.tsx` lengkap dengan semantic structure, skip-to-content link, dan kelas font global.

### Fase 5: Komponen Presentasi & 12 Seksi Halaman
- [x] **T-5.1** Buat komponen UI dasar di `src/components/ui/`:
  - `Button.tsx`: Tinggi minimal 48px, varian primer dan sekunder, focus ring jelas.
  - `Badge.tsx`: Bentuk kapsul berlabel simulasi.
  - `ProgressBar.tsx`: Menampilkan bar visual dan angka teks persentase.
  - `PhotoSlot.tsx`: Komponen wrapper `next/image` berasio tetap dengan alt Bahasa Indonesia.
  - `Card.tsx`: Wadah panel modular border 1px dan radius 16-20px.
- [x] **T-5.2** Buat komponen layout di `src/components/layout/`:
  - `Navbar.tsx` (ID: `top`): Wordmark EduTalent, link navigasi riil, tombol CTA utama, menu mobile aksesibel.
  - `Footer.tsx` (ID: `footer`): Wordmark, deskripsi singkat, kontak placeholder, copyright, catatan "Foto ilustrasi".
- [x] **T-5.3** Buat 10 seksi halaman di `src/components/sections/`:
  - `HeroSection.tsx` (ID: `hero`): H1, subheadline, 2 CTA, mockup 3 langkah, foto EDU-01.
  - `ChallengeSection.tsx` (ID: `challenge`): Timeline kontras pencatatan jam kerja vs progres belajar.
  - `ExamSpotlight.tsx` (ID: `exam`): Spotlight modul unggulan 1, bank soal, konsep proctoring.
  - `LibrarySpotlight.tsx` (ID: `library`): Spotlight modul unggulan 2, daftar materi, badge kursus internal.
  - `LearningPathSection.tsx` (ID: `learning-path`): Diagram 4 langkah (Pelajari, Uji, Tinjau, Tindak lanjuti).
  - `AudienceSection.tsx` (ID: `audiences`): 3 audiens (Konsultan, Tech Talent, Edukasi) dengan foto EDU-02, EDU-03, EDU-04.
  - `ModulesSection.tsx` (ID: `modules`): Grid 5 modul (Exam dan Library mendapatkan ruang lebih besar).
  - `ImplementationSection.tsx` (ID: `implementation`): 3 langkah implementasi + foto EDU-05.
  - `FaqSection.tsx` (ID: `faq`): 8 pertanyaan spesifik panduan dengan accordion aksesibel (`aria-expanded`).
  - `ContactSection.tsx` (ID: `contact`): CTA penutup berlatar deep teal gelap, foto EDU-06 dengan overlay datar, tombol CTA utama.
- [x] **T-5.4** Pastikan tombol CTA utama *"Jadwalkan konsultasi"* muncul minimal 5 kali di sepanjang halaman.
- [x] **T-5.5** Rangkai semua seksi dalam `src/app/page.tsx` sesuai urutan tetap 1 sampai 12.

### Fase 6: Showcase Demo Interaktif Lokal
- [x] **T-6.1** Bangun demo modul **Exam** (`src/components/demos/ExamDemo.tsx`):
  - Bank soal 5 butir dengan opsi pilihan ganda lokal.
  - Perhitungan skor simulasi dan evaluasi kelulusan berbasis ambang 70.
  - Panel status konsep live proctoring (tanpa akses kamera/mikrofon riil, disertai disclaimer).
  - Leaderboard ranking contoh.
  - Pengumuman perubahan state via `aria-live="polite"`.
- [x] **T-6.2** Bangun demo modul **Library** (`src/components/demos/LibraryDemo.tsx`):
  - Pemilihan daftar materi lokal.
  - Tombol interaktif "Lanjutkan belajar" (kenaikan +25% progres hingga 100%).
  - Penampilan badge *"Contoh sertifikat internal"* saat mencapai 100%.
  - Pratinjau reader modul PDF simulasi (navigasi halaman lokal).
- [x] **T-6.3** Bangun demo modul **Absensi** (`src/components/demos/AttendanceDemo.tsx`):
  - Pemisahan baris catatan jam kerja (8 jam) dan jam training (1.5 jam).
  - Filter kategori lokal ("Semua / Kerja / Training").
- [x] **T-6.4** Bangun demo modul **Perizinan** (`src/components/demos/LeaveDemo.tsx`):
  - Formulir lokal pengajuan cuti belajar dan beasiswa sertifikasi.
  - Tombol pratinjau yang menampilkan status *"Pratinjau saja, belum dikirim"*.
- [x] **T-6.5** Bangun demo modul **Gaji** (`src/components/demos/CompensationDemo.tsx`):
  - Kalkulator simulasi insentif kompetensi (5% jika skor >= 80).
  - Label tegas simulasi non-payroll dan non-pajak.

### Fase 7: SEO, OpenGraph Image & JSON-LD
- [x] **T-7.1** Verifikasi teks metadata:
  - Title persis: `EduTalent - HRIS Terpadu dengan Sistem Ujian & Perpustakaan Digital` (67 karakter).
  - Description persis: `Tingkatkan kompetensi karyawan dengan sistem ujian online terintegrasi, e-library SOP, dan evaluasi berkala.` (108 karakter).
  - Jalankan skrip Node.js untuk menghitung dan mencatat panjang karakter.
- [x] **T-7.2** Buat generator OpenGraph image lokal `src/app/opengraph-image.tsx` (1200x630 px).
- [x] **T-7.3** Susun JSON-LD `@graph` mencakup `Organization`, `WebSite`, `SoftwareApplication` (dengan fitur 5 modul), dan `FAQPage` (8 Q&A riil).
- [x] **T-7.4** Buat berkas `src/app/sitemap.ts` dan `src/app/robots.ts`.

### Fase 8: Quality Gates & Audit Otomatis
- [x] **T-8.1** Jalankan audit regex terhadap folder `src/`:
  - Larangan buzzwords: `revolusioner`, `game-changer`, `seamless`, `100% aman`, `anti-curang 100%`, `terbukti meningkatkan produktivitas` (0 kecocokan).
  - Larangan API terlarang: `getUserMedia`, `geolocation`, `mediaDevices` (0 kecocokan).
  - Larangan hotlink: `unsplash.com`, `pexels.com` (0 kecocokan).
  - Larangan teks template: `lorem ipsum`, `TODO: testimonial`, `10x lebih produktif` (0 kecocokan).
  - **Larangan simbol em dash (`—`)**: Pastikan 0 kemunculan di copy halaman (0 kecocokan).
- [x] **T-8.2** Periksa keberadaan label *"Data simulasi"* atau *"Ilustrasi"* pada seluruh komponen mockup dan demo (50 kemunculan terverifikasi).
- [x] **T-8.3** Hitung kemunculan CTA primer untuk memastikan minimal 5 kali kemunculan (8 kemunculan terverifikasi).

### Fase 9: Uji Aksesibilitas, Responsivitas & Build
- [x] **T-9.1** Uji tampilan responsif pada breakpoint 375px, 768px, 1024px, dan 1440px (bebas overflow horizontal via Tailwind responsive grid & container).
- [x] **T-9.2** Uji navigasi keyboard (`Tab`, `Shift+Tab`, `Enter`, `Space`) dan visible focus indicator (`focus-visible:outline-focus` terpasang di seluruh komponen interaktif).
- [x] **T-9.3** Jalankan unit test `npm run test` (Vitest) sampai semua test vector berhasil (4 suites, 24 tests lulus 100%).
- [x] **T-9.4** Jalankan `npm run build` untuk memverifikasi typecheck dan build produksi tanpa error (Next.js 15.5.28 static page generation lulus 100%).

### Fase 10: Verifikasi Akhir Definition of Done (DoD)
- [x] Semua 12 seksi dan 5 modul hadir lengkap (Exam dan Library mendapat porsi dominan).
- [x] CTA utama muncul minimal 5 kali secara natural (8 kemunculan terverifikasi).
- [x] Seluruh demo berfungsi secara lokal dengan label simulasi yang jelas (50 label simulasi terverifikasi).
- [x] 6 foto asli lokal teroptimasi WebP dengan catatan lengkap di `CREDITS.md` (Total ~346.6 KB, masing-masing <= 220 KB).
- [x] Tidak ada klaim, logo, testimoni, harga, atau integrasi palsu (Audit anti-slop lolos 0 pelanggaran).
- [x] Seluruh hasil audit (build, test, regex anti-slop, responsif) tercatat dengan bukti nyata.

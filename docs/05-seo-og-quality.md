# 05. SEO, OpenGraph, dan Quality Gate

## 1. Metadata persis dari input
- Title: `EduTalent - HRIS Terpadu dengan Sistem Ujian & Perpustakaan Digital`
- Description: `Tingkatkan kompetensi karyawan dengan sistem ujian online terintegrasi, e-library SOP, dan evaluasi berkala.`

Panjang karakter harus dihitung skrip, bukan dikira-kira. Jalankan:
```bash
node -e "const t='EduTalent - HRIS Terpadu dengan Sistem Ujian & Perpustakaan Digital'; const d='Tingkatkan kompetensi karyawan dengan sistem ujian online terintegrasi, e-library SOP, dan evaluasi berkala.'; console.log({titleLength:[...t].length,descriptionLength:[...d].length})"
```
Catat hasil skrip di laporan akhir dan jangan mengubah teks metadata.

## 2. Implementasi metadata
Buat `src/lib/site.ts` sebagai sumber metadata:
```ts
export const site = {
  name: "EduTalent",
  url: "https://example.invalid", // TODO: ganti domain resmi sebelum publikasi
  title: "EduTalent - HRIS Terpadu dengan Sistem Ujian & Perpustakaan Digital",
  description: "Tingkatkan kompetensi karyawan dengan sistem ujian online terintegrasi, e-library SOP, dan evaluasi berkala.",
};
```
Gunakan `metadataBase`, canonical, `openGraph` (`website`, `id_ID`), `twitter.card = summary_large_image`, title/description persis, icons, dan robots. Domain `.invalid` hanya placeholder dan wajib diganti sebelum publikasi. Jangan menayangkan URL placeholder sebagai domain resmi.

Contoh pola:
```ts
import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "EduTalent: alur pembelajaran dan evaluasi kompetensi" }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};
```
Pastikan domain placeholder tidak dipakai saat produksi.

## 3. OG image
- Ukuran: 1200 × 630.
- Buat melalui kode lokal, bukan foto AI.
- Komposisi: wordmark EduTalent, judul pendek “Belajar. Uji. Kembangkan.”, tiga checkpoint, bar kompetensi, deep teal/cyan dan putih hangat.
- Gunakan font lokal yang sudah tersedia agar build tidak mengambil aset dari jaringan.
- Jangan memakai logo pelanggan atau badge sertifikasi pihak lain.

## 4. JSON-LD
Buat JSON-LD `@graph` dengan `Organization`, `WebSite`, `SoftwareApplication`, dan `FAQPage` yang menggunakan data FAQ yang sama dengan halaman. `SoftwareApplication.featureList` harus mencakup seluruh sub-fitur lima modul, tetapi jangan mengklaim fitur sudah tersedia bila statusnya belum diverifikasi. Tambahkan `offers` hanya jika harga resmi sudah diberikan. Jangan membuat `aggregateRating` atau `review` palsu.

## 5. Sitemap, robots, dan HTML
- Buat `src/app/sitemap.ts` dan `src/app/robots.ts`.
- Gunakan URL domain resmi setelah disediakan.
- Struktur HTML semantik: `header`, `nav`, `main`, `section`, `footer`.
- Satu H1, heading bertingkat, tautan dengan label bermakna.
- Pastikan FAQ accordion memiliki tombol, `aria-expanded`, dan hubungan ke panel.
- Foto memiliki alt Bahasa Indonesia yang menggambarkan isi, bukan keyword stuffing.

## 6. Anggaran performa dan gambar
- Foto lokal melalui `next/image`; tidak boleh hotlink.
- Target total foto yang terlihat di atas lipatan ≤ 600 KB; target setiap foto ≤ 220 KB setelah optimasi.
- Hanya gambar LCP yang boleh `priority`; gambar lain lazy-load.
- Tetapkan `sizes` yang sesuai layout dan rasio yang stabil untuk mencegah CLS.
- Target CLS < 0.05.
- Target Lighthouse mobile ≥ 90; catat skor aktual setelah audit, jangan mengarang hasil.

## 7. Checklist final
- [ ] Metadata title/description identik dengan input.
- [ ] Panjang karakter dihitung dengan skrip dan dicatat.
- [ ] Canonical, OG, Twitter, icons, robots, viewport/theme color lengkap.
- [ ] OG image 1200×630, dibangun lokal dan konsisten.
- [ ] JSON-LD tidak berisi ulasan/rating/harga palsu.
- [ ] Sitemap dan robots memakai domain resmi, bukan placeholder.
- [ ] Lima modul lengkap dengan semua sub-fitur dasar dan sorotan tema.
- [ ] Seluruh demo punya test vector terverifikasi.
- [ ] Foto asli lokal, lisensi tercatat, alt/sizes/dimensi benar; blocker dilaporkan jika belum ada.
- [ ] WCAG 2.2 AA, keyboard, reduced motion, dan responsif diperiksa.
- [ ] Laporan akhir mencatat build, test, Lighthouse, asumsi, penyederhanaan rumus, sumber foto, dan keputusan pemilik.

## 8. Format laporan akhir agent
Laporkan:
1. Status selesai dan perintah yang dijalankan.
2. Hasil build, test, typecheck, Lighthouse dan ukuran gambar yang benar-benar terukur.
3. Daftar foto dan URL sumber/lisensi.
4. Asumsi dan penyederhanaan rumus.
5. Hal yang perlu keputusan pemilik: domain/kontak, kebijakan insentif, cakupan proctoring, dukungan format Library, dan status fitur produk.

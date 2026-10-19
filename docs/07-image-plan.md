# 07. Image Plan

## 1. Prinsip
Foto menjelaskan konteks kerja dan belajar, bukan sekadar memenuhi ruang. Gunakan fotografi nyata dengan lisensi yang mengizinkan penggunaan pada website komersial. Jangan membuat gambar AI atau ilustrasi vektor sebagai pengganti slot foto. Jangan hotlink; semua foto yang dipakai harus diunduh ke `public/images/` dan dicatat sumbernya.

## 2. Peta visual per section
| Section | Visual |
|---|---|
| Hero | UI learning path buatan kode + foto `EDU-01` |
| Tantangan | Timeline buatan kode |
| Exam | UI demo buatan kode, tanpa foto wajib |
| Library | UI demo buatan kode, tanpa foto wajib |
| Alur kompetensi | Diagram data buatan kode |
| Untuk organisasi | Foto `EDU-02`, `EDU-03`, `EDU-04` |
| Lima modul | Ikon Lucide dan UI buatan kode |
| Cara penerapan | Foto `EDU-05` + timeline |
| CTA penutup | Foto `EDU-06` |
| Footer | Wordmark buatan kode; teks “Foto ilustrasi” tetap terlihat di dekat foto dan footer |

## 3. Slot foto
| ID | Berkas | Section | Rasio & ukuran sumber | Subjek dan suasana | Kata kunci pencarian (Inggris + Indonesia) | Hindari | Alt (Indonesia) | Komposisi |
|---|---|---|---|---|---|---|---|---|
| EDU-01 | `edu-01-learning-session.webp` | Hero | 16:9, sumber ≥ 1600×900 | Sesi belajar profesional kecil di ruang kerja realistis Asia Tenggara | “adult professional learning session natural light”; “karyawan mengikuti pelatihan di ruang kerja” | Logo terbaca, pose melihat kamera, layar aplikasi nyata | “Peserta mengikuti sesi belajar profesional di ruang kerja” | Sisakan ruang negatif di sisi kiri untuk UI/teks |
| EDU-02 | `edu-02-consulting-team.webp` | Audiens: konsultan | 4:3, sumber ≥ 1200×900 | Konsultan meninjau dokumen kerja dalam diskusi natural | “consultants reviewing work documents candid”; “konsultan meninjau dokumen kerja” | Jabat tangan, merek, tulisan dokumen terbaca | “Tim konsultan meninjau dokumen kerja bersama” | Subjek di tengah, crop aman untuk mobile |
| EDU-03 | `edu-03-technical-training.webp` | Audiens: tech talent | 4:3, sumber ≥ 1200×900 | Orang dewasa belajar keterampilan teknis di workstation | “adult technical skills training workplace”; “pelatihan keterampilan teknis orang dewasa” | Kode/layar merek yang terbaca, gaya hacker klise | “Peserta dewasa mengikuti pelatihan keterampilan teknis” | Tampilkan konteks workstation tanpa layar dominan |
| EDU-04 | `edu-04-education-workshop.webp` | Audiens: organisasi edukasi | 4:3, sumber ≥ 1200×900 | Fasilitator dewasa berdiskusi dengan rekan kerja | “adult educator professional workshop candid”; “lokakarya pengembangan profesional pendidik” | Anak yang dapat dikenali, lambang instansi, pose menunjuk papan | “Fasilitator dan peserta dewasa berdiskusi dalam lokakarya” | Sisakan ruang untuk label segmen |
| EDU-05 | `edu-05-learning-planning.webp` | Cara penerapan | 16:9, sumber ≥ 1600×900 | Perencanaan pembelajaran profesional dengan catatan kertas | “professional learning planning notebook natural light”; “perencanaan pelatihan karyawan dengan catatan” | Tulisan sensitif terbaca, merek, pose korporat klise | “Catatan perencanaan program belajar di meja kerja” | Ruang kosong di kanan untuk timeline |
| EDU-06 | `edu-06-team-reflection.webp` | CTA penutup | 16:9, sumber ≥ 1600×900 | Rekan kerja dewasa melakukan refleksi setelah sesi belajar | “adult colleagues reflecting after training candid”; “rekan kerja dewasa meninjau hasil pelatihan” | Testimoni tersirat, wajah dipasangkan dengan nama, logo | “Rekan kerja berdiskusi setelah sesi pembelajaran” | Komposisi lebar, area gelap datar untuk teks CTA |

## 4. Kriteria foto
Semua kandidat harus memenuhi:
- Fotografi sungguhan, dokumenter alami, cahaya alami.
- Konteks Indonesia/Asia Tenggara diutamakan; tempat kerja realistis.
- Palet hangat/netral yang selaras dengan teal dan putih hangat.
- Tanpa logo/merek/teks terbaca, lambang negara/instansi, layar aplikasi lain, atau orang yang dapat disalahartikan sebagai pelanggan/testimoni.
- Hindari jabat tangan, tim tertawa menatap laptop, pose menunjuk papan kaca, dan senyum korporat yang dipaksakan.
- Untuk orang yang tampak, periksa lisensi, syarat model release jika tersedia, dan batas penggunaan dari sumber.
- Jangan memasangkan foto wajah dengan nama/jabatan testimoni. Gunakan inisial jika avatar diperlukan.
- Tampilkan catatan “Foto ilustrasi” di dekat kelompok foto dan footer.

## 5. Prosedur perolehan wajib
1. Periksa akses jaringan dan ketersediaan `UNSPLASH_ACCESS_KEY` atau `PEXELS_API_KEY` pada environment tanpa menampilkan nilainya.
2. Jika API resmi tersedia, gunakan untuk menemukan kandidat. Jika tidak, gunakan pencarian web dan halaman sumber foto dari Unsplash, Pexels, atau Pixabay.
3. Untuk **setiap slot**, kumpulkan tiga kandidat dan buka gambar masing-masing. Jangan memilih hanya berdasarkan judul atau thumbnail.
4. Tolak foto yang tidak sesuai kriteria atau memiliki lisensi yang tidak jelas.
5. Unduh foto terpilih ke `public/images/`; jangan hotlink.
6. Buat `public/images/CREDITS.md` dengan ID slot, judul, fotografer, URL halaman sumber, jenis lisensi, tanggal unduh, dan catatan model release/orang yang tampak.
7. Optimasi menggunakan skrip, misalnya `sharp`: crop sesuai rasio, ekspor WebP sekitar kualitas 78, hapus metadata EXIF/lokasi, target ≤ 220 KB per foto dan ≤ 600 KB total foto di atas lipatan.
8. Verifikasi dimensi, rasio, alt, `sizes`, CLS, dan tampilan pada 375/768/1024/1440 px.
9. Gunakan manifest `src/lib/images.ts` berbentuk `{ id, src, alt, width, height }`; komponen `PhotoSlot` harus memakai `next/image`, rasio tetap, `sizes` tepat, dan `loading="lazy"`. Hanya gambar LCP yang boleh `priority`.
10. Jangan gunakan `remotePatterns`; semua foto harus lokal.
11. Jika akses/lisensi tidak memungkinkan, pertahankan slot dengan blok netral dari design token. Tandai **BLOCKER** di laporan akhir dengan ID slot, kata kunci, dan permintaan akses/foto kepada pemilik. Jangan mengganti foto dengan AI atau vektor.

## 6. Prioritas sumber dan lisensi
1. Foto milik pemilik/klien dengan izin tertulis.
2. Foto komersial dari Unsplash, Pexels, atau Pixabay sesuai lisensi masing-masing dan syarat yang berlaku.
3. Jangan memakai foto tanpa lisensi yang dapat diperiksa. Hindari lisensi yang mewajibkan atribusi kecuali atribusi dipasang dan dipertahankan.

## 7. Integrasi Next.js
- `lib/images.ts` adalah manifest tunggal.
- `PhotoSlot` menggunakan `next/image` dengan `fill` dalam wadah berasio tetap, `sizes` sesuai breakpoint, dan `alt` yang spesifik.
- Gunakan overlay warna datar jika teks diletakkan di atas foto; tanpa gradient overlay.
- Jangan menaruh teks penting hanya di dalam gambar.
- Semua foto harus memiliki dimensi stabil agar tidak terjadi layout shift.

## 8. Checklist foto
- [ ] Minimal enam slot foto.
- [ ] Tiga kandidat per slot telah dilihat secara visual.
- [ ] Lisensi dan halaman sumber diverifikasi.
- [ ] Foto diunduh lokal dan tidak hotlink.
- [ ] `CREDITS.md` lengkap.
- [ ] Ukuran, rasio, optimasi, alt, `sizes`, dan CLS diverifikasi.
- [ ] Foto tidak menyiratkan testimoni atau pelanggan.
- [ ] Jika ada slot kosong, BLOCKER tercatat dan placeholder netral dipakai.

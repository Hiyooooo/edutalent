# 04. Modul dan Demo Interaktif

## 1. Prinsip demo
Semua demo adalah showcase lokal yang berjalan tanpa API, kamera, mikrofon, geolokasi, atau unduhan sungguhan. Beri label “Data simulasi”. Fungsi murni berada di `src/lib/` dan diuji dengan Vitest. Komponen hanya menangani state, tampilan, dan aksesibilitas.

## 2. Hero learning path
- Ikon: `Route`
- H3: **Lihat alur belajar dalam satu tampilan**
- Deskripsi: “Ikuti contoh perjalanan dari materi, ujian, hingga tindak lanjut.”
- UI: empat checkpoint “Pelajari”, “Uji”, “Tinjau”, “Tindak lanjuti”; progress contoh 75%.
- Interaksi: tombol “Tandai materi selesai” mengubah status lokal dari “Sedang dipelajari” menjadi “Selesai”; pembaruan diumumkan melalui `aria-live="polite"`.
- Reduced motion: state langsung berubah tanpa animasi.

## 3. Exam (bintang utama)
- Ikon: `ClipboardCheck`
- H3: **Uji pemahaman dengan assessment yang terstruktur**
- Deskripsi: “Contoh ujian memperlihatkan soal, hasil, dan ranking tanpa mengakses perangkat atau data nyata.”
- Sub-fitur:
| Fitur | Keterangan |
|---|---|
| **Bank soal interaktif** | Demo pilihan ganda dengan 5 soal lokal |
| **Live proctoring anti-curang** | Tampilkan panel konsep status pengawasan; tidak memakai kamera/mikrofon dan tidak menjamin pencegahan kecurangan |
| **Tes minat bakat** | Contoh hasil berupa kelompok minat, bukan diagnosis atau keputusan karier |
| **Leaderboard ranking** | Peringkat contoh dari skor simulasi |
| Assessment rekrutmen online | Ditampilkan sebagai jenis assessment yang dapat dikonfigurasi, perlu verifikasi cakupan produk |
| Evaluasi kinerja | Contoh ringkasan kompetensi untuk bahan tinjauan |
| Uji kompetensi | Skor simulasi dengan ambang kelulusan yang terlihat |
| Proctoring | Status konseptual; tanpa pemantauan nyata |

### Demo dan state
Data:
- Nama assessment: Dasar Keamanan Data
- Soal: 5
- Jawaban benar: 4
- Skor: 80/100
- Ambang lulus demo: 70/100
- Ranking contoh: 2 dari 8

Interaksi:
1. Pengguna memilih jawaban pada satu dari 5 soal.
2. Tombol “Periksa hasil” menghitung jumlah jawaban benar.
3. Tampilkan skor, status demo, dan penjelasan jawaban.
4. Tampilkan ranking sebagai data contoh yang sudah ditetapkan, bukan hasil kompetisi nyata.
5. Status disampaikan dengan teks dan `aria-live="polite"`.

### Rumus murni
`score = round((correctAnswers / totalQuestions) * 100)`. Bila `totalQuestions <= 0`, kembalikan 0. Clamp input jumlah benar ke rentang 0..totalQuestions.

| Benar | Total | Skor | Status bila ambang 70 |
|---:|---:|---:|---|
| 0 | 5 | 0 | Belum lulus |
| 3 | 5 | 60 | Belum lulus |
| 4 | 5 | 80 | Lulus simulasi |
| 5 | 5 | 100 | Lulus simulasi |
| 0 | 0 | 0 | Tidak ada soal |

### Verifikasi
- Input 4 benar dari 5 soal → skor 80, status “Lulus simulasi”.
- Input 3 benar dari 5 soal → skor 60, status “Belum lulus”.
- Input 0 total soal → skor 0, jangan terjadi pembagian dengan nol.
- Tombol reset mengembalikan state awal.
- Pastikan tidak ada `getUserMedia`, permission kamera/mikrofon, network request, atau telemetry.

## 4. Library (bintang utama)
- Ikon: `BookOpen`
- H3: **Buat materi internal mudah dipelajari dan ditinjau**
- Deskripsi: “Kelola contoh video, modul bacaan, dan progres pembelajaran dalam satu jalur.”
- Sub-fitur:
| Fitur | Keterangan |
|---|---|
| **Video e-learning** | Kartu video lokal dengan durasi simulasi; tidak memuat video eksternal |
| **Modul PDF interaktif** | UI pembaca simulasi dengan halaman dan tombol navigasi; tanpa unduhan nyata |
| **Sertifikat kelulusan kursus internal** | Badge contoh yang ditandai ilustratif |
| Knowledge base SOP | Daftar materi SOP dummy |
| Arsip dokumen perusahaan | Daftar dokumen contoh tanpa file nyata |
| Modul e-learning | Kategori dan progres materi |

### Demo dan state
Materi awal:
- Pengantar SOP Operasional: 12 menit, selesai
- Dasar Keamanan Data: 8 halaman, progres 75%
- Panduan Layanan Pelanggan: 6 bagian, belum dimulai

Interaksi:
1. Memilih materi memperbarui panel detail lokal.
2. Tombol “Lanjutkan belajar” menambah progres 25 poin persentase, dibatasi maksimum 100.
3. Pada progres 100%, tampilkan badge “Contoh sertifikat internal”.
4. Pembaruan diumumkan melalui `aria-live="polite"`.
5. Jangan membuat file PDF atau sertifikat yang dapat dianggap resmi.

### Rumus murni
`nextProgress = min(100, max(0, currentProgress) + step)`, dengan `step=25`. Nilai input non-finite dianggap 0.

| Progres awal | Langkah | Progres akhir | Badge contoh |
|---:|---:|---:|---|
| 0 | 25 | 25 | Tidak |
| 50 | 25 | 75 | Tidak |
| 75 | 25 | 100 | Ya |
| 100 | 25 | 100 | Ya |
| -10 | 25 | 25 | Tidak |

### Verifikasi
- Progres 75 + 25 → 100 dan badge muncul.
- Progres 100 + 25 → tetap 100.
- Progres -10 + 25 → 25 setelah normalisasi.
- Navigasi materi dapat digunakan dengan keyboard.
- Tidak ada tautan unduh aktif atau permintaan jaringan.

## 5. Absensi
- Ikon: `Fingerprint`
- H3: **Lihat waktu kerja dan waktu belajar berdampingan**
- Deskripsi: “Contoh rekap menyatukan konteks kehadiran dengan waktu training.”
- Sub-fitur:
| Fitur | Keterangan |
|---|---|
| Jam masuk/keluar | Rekap contoh jam kerja |
| GPS geofencing | Dijelaskan sebagai fitur potensial; demo tidak meminta lokasi |
| Shift kerja | Contoh label shift |
| Rekap kehadiran real-time | Tabel statis berlabel simulasi |
| **Jam training** | Jam belajar ditampilkan di samping jam kerja |

### Demo dan data
Data simulasi: Rani Putri, jam kerja 8 jam, jam training 1.5 jam, shift “Pagi”. Jangan menjumlahkan jam training ke jam kerja kecuali kebijakan pemilik menjelaskan apakah training termasuk jam kerja.

Interaksi: filter lokal “Semua / Kerja / Training” hanya mengubah tampilan baris. `aria-live` mengumumkan jumlah baris yang ditampilkan.

### Verifikasi
- Data awal menunjukkan 8 jam kerja dan 1.5 jam training secara terpisah.
- Tidak ada permintaan geolocation.
- Label status tidak bergantung pada warna saja.

## 6. Perizinan
- Ikon: `CalendarCheck`
- H3: **Dukung pengajuan waktu dan biaya pengembangan**
- Deskripsi: “Gambarkan alur pengajuan cuti belajar dan dukungan sertifikasi profesi.”
- Sub-fitur:
| Fitur | Keterangan |
|---|---|
| Workflow approval cuti | Tahapan pengajuan, tinjauan, keputusan |
| Izin sakit | Jenis izin dasar |
| Lembur | Jenis permintaan dasar |
| Transparansi sisa cuti | Saldo contoh berlabel simulasi |
| **Cuti belajar** | Form lokal untuk kebutuhan pelatihan |
| **Beasiswa sertifikasi profesi** | Form contoh untuk pengajuan dukungan |

### Demo dan state
Form lokal: jenis permohonan, tanggal, alasan. Tombol “Pratinjau pengajuan” hanya menampilkan ringkasan lokal dan status “Belum dikirim”. Tidak ada backend dan tidak ada pengajuan sungguhan.

### Verifikasi
- Field wajib kosong → tampilkan validasi yang terkait dengan input.
- Form valid → tampilkan ringkasan “Pratinjau saja, belum dikirim”.
- Jangan mengirim data ke jaringan.

## 7. Gaji
- Ikon: `Wallet`
- H3: **Simulasikan insentif berdasarkan hasil kompetensi**
- Deskripsi: “Perlihatkan contoh perhitungan yang transparan, bukan keputusan payroll otomatis.”
- Sub-fitur:
| Fitur | Keterangan |
|---|---|
| Kalkulasi otomatis | Fungsi murni untuk demo insentif |
| PPh 21 | Ditampilkan sebagai proses payroll yang perlu kebijakan aktual; tidak dihitung di demo |
| BPJS | Ditampilkan sebagai proses payroll yang perlu kebijakan aktual; tidak dihitung di demo |
| Slip gaji digital | UI contoh, bukan slip resmi |
| Reimbursement | Ringkasan contoh |
| **Skill-based pay** | Simulasi insentif dari nilai kelulusan, perlu persetujuan kebijakan |

### Rumus demo yang disederhanakan
Untuk tujuan demonstrasi saja:
- Input: gaji dasar simulasi `baseSalary`, skor 0–100.
- Jika skor ≥ 80, insentif = 5% dari gaji dasar.
- Jika skor < 80, insentif = 0.
- Total simulasi = gaji dasar + insentif.
- Tidak menghitung PPh 21, BPJS, pajak, potongan, lembur, atau reimbursement.

**Komentar kode wajib:** `// DEMO ONLY: simplified incentive rule; not payroll, tax, BPJS, or employment-policy advice.`

| Gaji dasar | Skor | Insentif | Total simulasi |
|---:|---:|---:|---:|
| Rp4.000.000 | 79 | Rp0 | Rp4.000.000 |
| Rp4.000.000 | 80 | Rp200.000 | Rp4.200.000 |
| Rp5.000.000 | 90 | Rp250.000 | Rp5.250.000 |
| Rp0 | 100 | Rp0 | Rp0 |
| Rp4.000.000 | 100 | Rp200.000 | Rp4.200.000 |

### Verifikasi
- Gaji Rp4.000.000, skor 80 → insentif Rp200.000, total Rp4.200.000.
- Skor 79 → insentif Rp0.
- Input gaji negatif harus dinormalisasi ke Rp0.
- UI wajib menyebut “Simulasi, bukan perhitungan payroll”.
- Kebijakan kelayakan dan persentase perlu keputusan pemilik.

## 8. Alur data antarmodul
1. Library menyediakan materi.
2. Exam memberikan hasil assessment simulasi.
3. Hasil Exam menjadi bahan tinjauan kompetensi, bukan keputusan otomatis.
4. Absensi menampilkan jam training terpisah dari jam kerja.
5. Perizinan menampilkan contoh pengajuan cuti belajar/beasiswa.
6. Gaji menampilkan simulasi insentif berbasis aturan yang dapat diubah setelah kebijakan disetujui.

## 9. Aksesibilitas demo
- Semua kontrol punya label; seluruh interaksi dapat dilakukan dengan keyboard.
- Gunakan `aria-live="polite"` untuk hasil perhitungan, status form, progres, dan filter.
- Fokus keyboard terlihat jelas.
- Jangan mengandalkan warna saja untuk lulus/gagal atau progres.
- `prefers-reduced-motion` menghilangkan animasi, bukan fungsi.

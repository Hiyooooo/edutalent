export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: "Apa itu EduTalent?",
    answer:
      "EduTalent diperkenalkan sebagai konsep HRIS yang menempatkan pengembangan kompetensi berdampingan dengan proses administrasi karyawan. Rincian fitur aktual perlu dikonfirmasi oleh pemilik produk.",
  },
  {
    question: "Apa fungsi modul Exam?",
    answer:
      "Exam ditujukan untuk menggambarkan bank soal, assessment, uji kompetensi, evaluasi kinerja, dan contoh hasil. Demo pada halaman menggunakan data simulasi.",
  },
  {
    question: "Apakah proctoring menggunakan kamera pada demo?",
    answer:
      "Tidak. Demo hanya menunjukkan konsep status ujian dan tidak mengakses kamera, mikrofon, layar, atau lokasi.",
  },
  {
    question: "Materi apa yang dapat ditampilkan di Library?",
    answer:
      "Contoh halaman menampilkan video e-learning, modul bacaan, knowledge base SOP, arsip dokumen, dan progres belajar. Format yang didukung pada produk aktual perlu dikonfirmasi.",
  },
  {
    question: "Apakah sertifikat yang ditampilkan resmi?",
    answer:
      "Tidak. Badge dalam demo hanya contoh sertifikat internal dan bukan sertifikasi profesi atau lembaga eksternal.",
  },
  {
    question: "Bagaimana jam training berhubungan dengan absensi?",
    answer:
      "Konsepnya adalah menampilkan catatan waktu training berdampingan dengan jam kerja. Aturan pencatatan dan integrasi aktual perlu ditentukan pemilik.",
  },
  {
    question: "Apakah nilai ujian otomatis menaikkan gaji?",
    answer:
      "Demo hanya memperlihatkan simulasi insentif. Keputusan kompensasi harus mengikuti kebijakan, evaluasi, dan persetujuan organisasi, bukan skor semata.",
  },
  {
    question: "Bagaimana cara melihat demo produk?",
    answer:
      "Gunakan tombol “Jadwalkan konsultasi”. Tautan dan kontak resmi harus diisi pemilik sebelum situs dipublikasikan.",
  },
];

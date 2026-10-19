/**
 * Pure functions and data fixtures for the Exam module.
 * All calculations and questions are for demonstration/simulation purposes only.
 */

export interface ExamQuestion {
  id: number;
  question: string;
  options: {
    id: string;
    text: string;
  }[];
  correctAnswer: string;
  explanation: string;
}

export interface ExamResult {
  score: number;
  correctCount: number;
  totalQuestions: number;
  isPassed: boolean;
  statusLabel: string;
}

export const EXAM_PASSING_THRESHOLD = 70;

export const examQuestions: ExamQuestion[] = [
  {
    id: 1,
    question: "Apa tindakan pertama yang tepat saat menerima email mencurigakan yang meminta kata sandi akun internal?",
    options: [
      { id: "A", text: "Membalas email untuk mengonfirmasi ke pengirim" },
      { id: "B", text: "Mengklik tautan untuk memeriksa alamat situs" },
      { id: "C", text: "Melaporkan ke tim keamanan IT dan tidak mengklik tautan apa pun" },
      { id: "D", text: "Meneruskan email ke seluruh rekan kerja satu divisi" },
    ],
    correctAnswer: "C",
    explanation: "Laporkan segera ke tim keamanan IT tanpa mengklik tautan apa pun guna mencegah upaya phishing.",
  },
  {
    id: 2,
    question: "Manakah praktik pengelolaan kata sandi akun kerja yang paling aman sesuai standar keamanan?",
    options: [
      { id: "A", text: "Minimal 12 karakter kombinasi huruf besar, kecil, angka, dan simbol" },
      { id: "B", text: "Menggunakan tanggal lahir agar mudah diingat saat rotasi" },
      { id: "C", text: "Menyamakan kata sandi kantor dengan akun media sosial pribadi" },
      { id: "D", text: "Menyimpan catatan kata sandi di kertas dekat monitor kerja" },
    ],
    correctAnswer: "A",
    explanation: "Kata sandi yang kuat memiliki panjang minimal 12 karakter acak dengan kombinasi karakter yang bervariasi.",
  },
  {
    id: 3,
    question: "Kapan autentikasi dua faktor (2FA) wajib diaktifkan pada sistem perusahaan?",
    options: [
      { id: "A", text: "Hanya jika staf sedang bepergian ke luar kota" },
      { id: "B", text: "Wajib diaktifkan untuk seluruh akses sistem kerja tanpa kecuali" },
      { id: "C", text: "Hanya saat staf lupa membawa kartu akses fisik" },
      { id: "D", text: "Opsional jika kata sandi sudah lebih dari 8 karakter" },
    ],
    correctAnswer: "B",
    explanation: "Autentikasi dua faktor (2FA) memberikan lapisan pertahanan ganda yang wajib untuk seluruh akses operasional.",
  },
  {
    id: 4,
    question: "Apa definisi dari prinsip Least Privilege dalam pengendalian hak akses data organisasi?",
    options: [
      { id: "A", text: "Semua staf memiliki wewenang administrator penuh secara merata" },
      { id: "B", text: "Staf hanya diberikan izin akses minimum yang diperlukan untuk menyelesaikan tugasnya" },
      { id: "C", text: "Akses data dibagikan bergantian setiap minggu sekali" },
      { id: "D", text: "Hak akses bebas dibuka untuk umum tanpa proses verifikasi" },
    ],
    correctAnswer: "B",
    explanation: "Least Privilege membatasi risiko keamanan dengan hanya memberikan akses sesuai cakupan kerja spesifik.",
  },
  {
    id: 5,
    question: "Di mana arsip data sensitif perusahaan harus disimpan secara aman?",
    options: [
      { id: "A", text: "Layanan penyimpanan berkas publik gratis tanpa autentikasi" },
      { id: "B", text: "Drive penyimpanan lokal tanpa perlindungan kata sandi" },
      { id: "C", text: "Repositori resmi terenkripsi sesuai kebijakan tata kelola data perusahaan" },
      { id: "D", text: "Perangkat komputer umum di area resepsionis kantor" },
    ],
    correctAnswer: "C",
    explanation: "Data sensitif wajib disimpan pada penyimpanan resmi terenkripsi yang terlindungi kebijakan tata kelola.",
  },
];

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  duration: string;
  isCurrentUser?: boolean;
}

export const sampleLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Dimas Pratama", score: 100, duration: "4m 12s" },
  { rank: 2, name: "Rani Putri (Anda)", score: 80, duration: "5m 40s", isCurrentUser: true },
  { rank: 3, name: "Nabila Sari", score: 80, duration: "6m 15s" },
  { rank: 4, name: "Fajar Nugraha", score: 80, duration: "6m 50s" },
  { rank: 5, name: "Siti Rahma", score: 60, duration: "5m 02s" },
  { rank: 6, name: "Budi Santoso", score: 60, duration: "7m 10s" },
  { rank: 7, name: "Ahmad Fauzi", score: 40, duration: "8m 30s" },
  { rank: 8, name: "Dewi Lestari", score: 20, duration: "9m 12s" },
];

/**
 * Pure formula:
 * score = round((correctAnswers / totalQuestions) * 100)
 * If totalQuestions <= 0, returns 0.
 * Clamps correctAnswers to 0..totalQuestions.
 */
export function calculateExamScore(
  correctAnswers: number,
  totalQuestions: number,
  threshold: number = EXAM_PASSING_THRESHOLD
): ExamResult {
  if (!Number.isFinite(totalQuestions) || totalQuestions <= 0) {
    return {
      score: 0,
      correctCount: 0,
      totalQuestions: 0,
      isPassed: false,
      statusLabel: "Tidak ada soal",
    };
  }

  const safeTotal = Math.max(0, Math.floor(totalQuestions));
  const safeCorrect = Number.isFinite(correctAnswers)
    ? Math.max(0, Math.min(safeTotal, Math.floor(correctAnswers)))
    : 0;

  const score = Math.round((safeCorrect / safeTotal) * 100);
  const isPassed = score >= threshold;

  return {
    score,
    correctCount: safeCorrect,
    totalQuestions: safeTotal,
    isPassed,
    statusLabel: isPassed ? "Lulus simulasi" : "Belum lulus",
  };
}

/**
 * Pure functions and data fixtures for the Library module.
 * All materials, readers, and completion badges are local simulations.
 */

export type MaterialType = "video" | "pdf" | "guide";

export interface LibraryMaterial {
  id: string;
  title: string;
  category: string;
  type: MaterialType;
  metadata: string; // e.g. "12 menit", "8 halaman", "6 bagian"
  initialProgress: number;
  description: string;
  totalPages?: number;
  currentPreviewPage?: number;
}

export const initialMaterials: LibraryMaterial[] = [
  {
    id: "sop-ops",
    title: "Pengantar SOP Operasional",
    category: "Knowledge Base SOP",
    type: "video",
    metadata: "12 menit",
    initialProgress: 100,
    description: "Panduan standar operasional prosedur harian tim kerja untuk menjaga konsistensi alur koordinasi internal.",
  },
  {
    id: "sec-base",
    title: "Dasar Keamanan Data",
    category: "Modul E-Learning",
    type: "pdf",
    metadata: "8 halaman",
    initialProgress: 75,
    description: "Modul interaktif yang membahas perlindungan informasi rahasia, mitigasi phishing, dan kebersihan digital.",
    totalPages: 8,
    currentPreviewPage: 6,
  },
  {
    id: "cust-serv",
    title: "Panduan Layanan Pelanggan",
    category: "Arsip Dokumen Perusahaan",
    type: "guide",
    metadata: "6 bagian",
    initialProgress: 0,
    description: "Prinsip komunikasi empatik dan penanganan kebutuhan klien secara terstruktur dan terukur.",
  },
];

export interface ProgressResult {
  progress: number;
  hasEarnedBadge: boolean;
  statusLabel: string;
}

/**
 * Pure formula:
 * nextProgress = min(100, max(0, currentProgress) + step), with step=25 by default.
 * Non-finite currentProgress is treated as 0.
 */
export function calculateNextProgress(
  currentProgress: number,
  step: number = 25
): ProgressResult {
  const safeCurrent = Number.isFinite(currentProgress)
    ? Math.max(0, currentProgress)
    : 0;
  const safeStep = Number.isFinite(step) ? step : 25;

  const progress = Math.min(100, Math.round(safeCurrent + safeStep));
  const hasEarnedBadge = progress >= 100;

  let statusLabel = "Belum dimulai";
  if (progress >= 100) {
    statusLabel = "Selesai (Badge diperoleh)";
  } else if (progress > 0) {
    statusLabel = `${progress}% dipelajari`;
  }

  return {
    progress,
    hasEarnedBadge,
    statusLabel,
  };
}

"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Video,
  FileText,
  Award,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import {
  initialMaterials,
  LibraryMaterial,
  calculateNextProgress,
} from "@/lib/library";

export const LibraryDemo: React.FC = () => {
  const [materials, setMaterials] = useState<LibraryMaterial[]>(initialMaterials);
  const [selectedId, setSelectedId] = useState<string>("sec-base"); // Default: Dasar Keamanan Data (75%)
  const [previewPage, setPreviewPage] = useState<number>(6); // Default page 6 of 8
  const [announcement, setAnnouncement] = useState("");

  const currentMaterial =
    materials.find((m) => m.id === selectedId) || materials[0];

  const handleAdvanceProgress = () => {
    const next = calculateNextProgress(currentMaterial.initialProgress, 25);
    setMaterials((prev) =>
      prev.map((m) =>
        m.id === currentMaterial.id ? { ...m, initialProgress: next.progress } : m
      )
    );
    setAnnouncement(
      `Progres materi ${currentMaterial.title} ditingkatkan menjadi ${next.progress}%.`
    );
  };

  const handleReset = () => {
    setMaterials(initialMaterials);
    setPreviewPage(6);
    setAnnouncement("Status materi perpustakaan diatur ulang ke kondisi awal.");
  };

  const handlePrevPage = () => {
    setPreviewPage((p) => Math.max(1, p - 1));
    setAnnouncement(`Halaman modul beralih ke halaman ${Math.max(1, previewPage - 1)}.`);
  };

  const handleNextPage = () => {
    const total = currentMaterial.totalPages || 8;
    setPreviewPage((p) => Math.min(total, p + 1));
    setAnnouncement(`Halaman modul beralih ke halaman ${Math.min(total, previewPage + 1)}.`);
  };

  const hasBadge = currentMaterial.initialProgress >= 100;

  return (
    <div className="rounded-panel border border-border bg-surface shadow-sm overflow-hidden">
      {/* Live Region for Screen Readers */}
      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>

      {/* Header Bar */}
      <div className="border-b border-border bg-surface-cyan/50 p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-control bg-cyan-ink text-white">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-cyan-ink">
                  MODUL UNGGULAN 02
                </span>
                <Badge variant="cyan" size="sm">
                  DATA SIMULASI
                </Badge>
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-text">
                Perpustakaan Digital & Materi Internal
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-semibold text-text-muted hover:text-text rounded-control border border-border bg-surface"
          >
            <RotateCcw className="h-4 w-4" />
            Reset Materi
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Left Column: Material List Selector */}
        <div className="lg:col-span-5 p-5 md:p-6 space-y-3 bg-surface-soft/30">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-text-muted">
            Katalog Materi Internal
          </h4>

          <div className="space-y-2.5">
            {materials.map((item) => {
              const isSelected = item.id === currentMaterial.id;
              const isFinished = item.initialProgress >= 100;

              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedId(item.id);
                    setAnnouncement(`Materi ${item.title} dipilih.`);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedId(item.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  className={`p-4 rounded-card border cursor-pointer transition-all ${
                    isSelected
                      ? "border-brand-dark bg-surface shadow-sm ring-1 ring-brand-dark/20"
                      : "border-border bg-surface hover:border-brand-dark/30 hover:bg-surface-soft/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {item.type === "video" ? (
                        <Video className="h-4 w-4 text-cyan-ink flex-shrink-0" />
                      ) : (
                        <FileText className="h-4 w-4 text-brand-dark flex-shrink-0" />
                      )}
                      <span className="font-display text-sm font-bold text-text">
                        {item.title}
                      </span>
                    </div>
                    {isFinished && (
                      <Badge variant="success" size="sm">
                        Selesai
                      </Badge>
                    )}
                  </div>

                  <div className="mt-2 flex items-center justify-between text-xs text-text-muted">
                    <span>{item.category}</span>
                    <span className="font-mono">{item.metadata}</span>
                  </div>

                  <div className="mt-3">
                    <ProgressBar
                      value={item.initialProgress}
                      size="sm"
                      barColor={isFinished ? "success" : "brand"}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Material Reader & Action */}
        <div className="lg:col-span-7 p-5 md:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-mono text-xs font-semibold text-brand-dark">
                {currentMaterial.category}
              </span>
              <h4 className="font-display text-xl font-bold text-text">
                {currentMaterial.title}
              </h4>
            </div>

            {hasBadge && (
              <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-300 px-3 py-1 text-xs font-bold text-amber-800">
                <Sparkles className="h-3.5 w-3.5 text-amber-600" />
                Contoh sertifikat internal
              </div>
            )}
          </div>

          <p className="text-sm text-text-muted leading-relaxed">
            {currentMaterial.description}
          </p>

          {/* Interactive Simulated Reader / Viewer Box */}
          <div className="rounded-card border border-border bg-bg p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-border/80 pb-3 text-xs text-text-muted">
              <span className="font-display font-semibold">
                Pratinjau Modul Pembaca Interaktif
              </span>
              {currentMaterial.type === "pdf" && (
                <span className="font-mono">
                  Halaman {previewPage} dari {currentMaterial.totalPages || 8}
                </span>
              )}
              {currentMaterial.type === "video" && (
                <span className="font-mono">Durasi: 12 menit</span>
              )}
            </div>

            {currentMaterial.type === "pdf" ? (
              <div className="min-h-[140px] rounded-control border border-dashed border-border bg-surface p-4 text-xs md:text-sm text-text leading-relaxed flex flex-col justify-between">
                <div>
                  <p className="font-semibold text-brand-dark mb-1">
                    Bagian 0{previewPage}: Pedoman Penanganan Insiden Keamanan
                  </p>
                  <p className="text-text-muted">
                    Setiap indikasi kebocoran kredensial harus didokumentasikan dan diverifikasi
                    melalui saluran koordinasi internal dalam waktu 15 menit sejak terdeteksi.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border/40 text-xs text-text-muted">
                  <button
                    type="button"
                    onClick={handlePrevPage}
                    disabled={previewPage <= 1}
                    className="inline-flex items-center gap-1 font-semibold text-brand-dark disabled:opacity-30"
                  >
                    <ChevronLeft className="h-4 w-4" /> Halaman Sebelumnya
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPage}
                    disabled={previewPage >= (currentMaterial.totalPages || 8)}
                    className="inline-flex items-center gap-1 font-semibold text-brand-dark disabled:opacity-30"
                  >
                    Halaman Selanjutnya <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="min-h-[140px] rounded-control bg-surface-soft border border-brand/20 p-6 flex flex-col items-center justify-center text-center space-y-2">
                <PlayCircle className="h-10 w-10 text-cyan-ink" />
                <p className="font-display font-bold text-sm text-text">
                  Pemutar Video Simulasi (Durasi {currentMaterial.metadata})
                </p>
                <p className="text-xs text-text-muted max-w-sm">
                  Tidak memuat streaming video eksternal. Digunakan untuk mendemonstrasikan status durasi belajar.
                </p>
              </div>
            )}

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="flex-1 min-w-[200px]">
                <ProgressBar
                  value={currentMaterial.initialProgress}
                  label="Progres Penyelesaian Materi"
                  barColor="brand"
                />
              </div>

              <Button
                variant="primary"
                size="sm"
                onClick={handleAdvanceProgress}
                disabled={currentMaterial.initialProgress >= 100}
              >
                {currentMaterial.initialProgress >= 100
                  ? "Materi Selesai (100%)"
                  : "Lanjutkan Belajar (+25%)"}
              </Button>
            </div>
          </div>

          {/* Certificate Badge Banner */}
          {hasBadge && (
            <div className="rounded-card border border-emerald-300 bg-emerald-50/80 p-4 flex items-start gap-3">
              <Award className="h-6 w-6 text-emerald-700 flex-shrink-0 mt-0.5" />
              <div className="text-xs text-emerald-900 leading-relaxed">
                <strong>Contoh Sertifikat Internal Diperoleh:</strong> Peserta telah menyelesaikan 100%
                materi. Catatan: Lencana ini merupakan ilustrasi internal alur LMS, bukan sertifikasi profesi atau lisensi eksternal.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

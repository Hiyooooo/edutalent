"use client";

import React, { useState } from "react";
import { CheckCircle2, Circle, ArrowRight, Route, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";

interface Step {
  id: number;
  label: string;
  detail: string;
  isCompleted: boolean;
}

export const HeroLearningPathDemo: React.FC = () => {
  const [isCompletedAll, setIsCompletedAll] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const steps: Step[] = [
    {
      id: 1,
      label: "Pelajari",
      detail: "Materi: Dasar Keamanan Data",
      isCompleted: true,
    },
    {
      id: 2,
      label: "Uji",
      detail: "Assessment: Evaluasi 5 Soal",
      isCompleted: true,
    },
    {
      id: 3,
      label: "Tinjau",
      detail: "Hasil: 80/100 (Lulus simulasi)",
      isCompleted: isCompletedAll,
    },
    {
      id: 4,
      label: "Tindak Lanjuti",
      detail: "Rencana pengembangan kompetensi",
      isCompleted: isCompletedAll,
    },
  ];

  const currentProgress = isCompletedAll ? 100 : 75;

  const handleToggle = () => {
    const nextState = !isCompletedAll;
    setIsCompletedAll(nextState);
    setAnnouncement(
      nextState
        ? "Semua tahapan belajar telah ditandai selesai. Progres 100%."
        : "Tahapan belajar dikembalikan ke progres awal 75%."
    );
  };

  return (
    <div className="w-full rounded-panel border border-border bg-surface p-6 shadow-sm">
      {/* Screen reader live region */}
      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-control bg-surface-soft text-brand-dark">
            <Route className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-display text-base md:text-lg font-bold text-text">
              Lihat alur belajar dalam satu tampilan
            </h3>
            <p className="text-xs text-text-muted">
              Contoh alur dari materi, ujian, hingga tindak lanjut.
            </p>
          </div>
        </div>
        <Badge variant="cyan" size="sm">
          DATA SIMULASI
        </Badge>
      </div>

      {/* Progress display */}
      <div className="mt-5 space-y-2">
        <ProgressBar
          value={currentProgress}
          label="Status Jalur Pembelajaran"
          barColor="brand"
        />
      </div>

      {/* Steps List */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-start gap-3 rounded-card border p-3.5 transition-colors ${
              step.isCompleted
                ? "border-brand/30 bg-surface-soft/60"
                : "border-border bg-surface"
            }`}
          >
            {step.isCompleted ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-dark" />
            ) : (
              <Circle className="mt-0.5 h-5 w-5 flex-shrink-0 text-text-muted/50" />
            )}
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-brand-ink">
                  Tahap 0{step.id}
                </span>
                <span className="font-display text-sm font-bold text-text">
                  {step.label}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-text-muted leading-relaxed">
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Action */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
        <p className="text-xs text-text-muted">
          Klik tombol di samping untuk menguji perubahan progres simulasi.
        </p>
        <button
          onClick={handleToggle}
          type="button"
          className="inline-flex items-center gap-2 rounded-control bg-surface-soft px-4 py-2.5 text-xs md:text-sm font-display font-semibold text-brand-dark border border-brand/30 hover:bg-surface-cyan hover:border-cyan/40 transition-colors"
        >
          {isCompletedAll ? (
            <>
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Kembalikan ke 75%
            </>
          ) : (
            <>
              Tandai materi selesai (100%)
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

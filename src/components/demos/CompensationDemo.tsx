"use client";

import React, { useState } from "react";
import { Wallet, TrendingUp, AlertTriangle, Calculator, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatRupiah, formatScore } from "@/lib/format";
import { calculateIncentive, INCENTIVE_SCORE_THRESHOLD } from "@/lib/compensation";

// DEMO ONLY: simplified incentive rule; not payroll, tax, BPJS, or employment-policy advice.

export const CompensationDemo: React.FC = () => {
  const [baseSalary, setBaseSalary] = useState<number>(4000000); // Rp4.000.000 default
  const [score, setScore] = useState<number>(80); // 80/100 default from exam demo
  const [announcement, setAnnouncement] = useState("");

  const result = calculateIncentive(baseSalary, score);

  const handleSalaryChange = (newVal: number) => {
    setBaseSalary(newVal);
    setAnnouncement(`Gaji pokok diubah menjadi ${formatRupiah(newVal)}.`);
  };

  const handleScoreChange = (newScore: number) => {
    setScore(newScore);
    setAnnouncement(
      `Skor kompetensi diubah menjadi ${newScore}. Status insentif: ${
        newScore >= INCENTIVE_SCORE_THRESHOLD ? "Memenuhi syarat 5%" : "Belum memenuhi syarat"
      }.`
    );
  };

  return (
    <div className="rounded-card border border-border bg-surface p-5 md:p-6 shadow-sm space-y-5">
      {/* Screen reader live region */}
      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-control bg-surface-soft text-brand-dark">
            <Wallet className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-semibold text-brand-dark">
                MODUL GAJI
              </span>
              <Badge variant="cyan" size="sm">
                DATA SIMULASI
              </Badge>
            </div>
            <h4 className="font-display font-bold text-text text-base md:text-lg">
              Simulasi Insentif Berbasis Kelulusan Uji Kompetensi
            </h4>
          </div>
        </div>

        <Badge variant={result.qualifiesForIncentive ? "success" : "neutral"} size="sm">
          {result.qualifiesForIncentive ? "Insentif 5% Aktif" : "Ambang Skor Belum Tercapai"}
        </Badge>
      </div>

      {/* Interactive Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="salary-select"
              className="block font-display text-xs font-bold text-text uppercase tracking-wider mb-1.5"
            >
              Gaji Pokok Simulasi
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[4000000, 5000000, 6000000].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleSalaryChange(val)}
                  className={`py-2 px-2.5 rounded-control font-mono text-xs font-bold border transition-colors ${
                    baseSalary === val
                      ? "bg-brand-dark text-white border-brand-dark"
                      : "bg-surface text-text hover:bg-surface-soft border-border"
                  }`}
                >
                  {formatRupiah(val)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="score-range-input"
                className="font-display text-xs font-bold text-text uppercase tracking-wider"
              >
                Skor Hasil Ujian Kompetensi
              </label>
              <span className="font-mono text-sm font-bold text-brand-dark">
                {formatScore(score)}
              </span>
            </div>
            <input
              id="score-range-input"
              type="range"
              min="0"
              max="100"
              step="5"
              value={score}
              onChange={(e) => handleScoreChange(Number(e.target.value))}
              className="w-full accent-brand-dark cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono text-text-muted mt-1">
              <span>0 (Belum Lulus)</span>
              <span className="font-bold text-brand-ink">Ambang 80 (Insentif 5%)</span>
              <span>100 (Maksimal)</span>
            </div>
          </div>
        </div>

        {/* Breakdown Card */}
        <div className="rounded-card border border-brand/20 bg-surface-soft/60 p-4 space-y-3">
          <span className="font-display font-bold text-xs uppercase tracking-wider text-text-muted">
            Kalkulasi Simulasi (Ilustratif)
          </span>

          <div className="space-y-2 text-sm divide-y divide-border/60">
            <div className="flex justify-between items-center pt-1">
              <span className="text-text-muted">Gaji Pokok:</span>
              <span className="font-mono font-semibold text-text">
                {formatRupiah(result.baseSalary)}
              </span>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="text-text-muted">
                Insentif Kelulusan (&ge;80):
              </span>
              <span className="font-mono font-semibold text-brand-dark">
                + {formatRupiah(result.incentiveAmount)}
              </span>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-brand/30">
              <span className="font-display font-bold text-text">
                Total Kompensasi Simulasi:
              </span>
              <span className="font-mono font-bold text-base md:text-lg text-brand-ink">
                {formatRupiah(result.totalCompensation)}
              </span>
            </div>
          </div>

          <div className="pt-2 text-[11px] text-text-muted flex items-start gap-1.5 leading-relaxed">
            <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
            <span>
              <strong>Perhatian:</strong> {result.disclaimer} Keputusan kompensasi, evaluasi kinerja, PPh 21,
              dan BPJS sepenuhnya harus mengikuti kebijakan resmi masing-masing perusahaan.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

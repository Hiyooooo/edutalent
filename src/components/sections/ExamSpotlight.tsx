import React from "react";
import { Badge } from "@/components/ui/Badge";
import { ExamDemo } from "@/components/demos/ExamDemo";

export const ExamSpotlight: React.FC = () => {
  return (
    <section id="exam" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-container px-5 md:px-6 space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="brand" size="sm">
            MODUL UNGGULAN 01
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
            Uji pemahaman, bukan hanya penyelesaian materi
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Susun bank soal, jalankan assessment, dan tinjau hasil kompetensi melalui contoh alur ujian yang terstruktur.
          </p>
        </div>

        {/* Interactive Showcase */}
        <div>
          <ExamDemo />
        </div>

        {/* Disclaimer notes */}
        <div className="border-t border-border pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted">
          <p>
            Peringkat dan skor hanya data simulasi. Proctoring pada demo tidak mengakses kamera atau layar.
          </p>
          <p className="font-mono">
            Hasil penilaian perlu ditinjau sesuai kebijakan organisasi.
          </p>
        </div>
      </div>
    </section>
  );
};

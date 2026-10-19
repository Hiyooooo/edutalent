import React from "react";
import { BookOpen, ClipboardCheck, MessageSquare, ArrowRight, Compass } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const LearningPathSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Pelajari",
      description: "Karyawan membuka materi di Library.",
      detail: "Akses modul bacaan, video SOP internal, dan panduan kerja secara terstruktur.",
      icon: BookOpen,
      badgeColor: "cyan" as const,
    },
    {
      step: "02",
      title: "Uji",
      description: "Exam menyajikan soal sesuai assessment.",
      detail: "Bank soal mengevaluasi pemahaman materi dengan parameter kelulusan yang transparan.",
      icon: ClipboardCheck,
      badgeColor: "brand" as const,
    },
    {
      step: "03",
      title: "Tinjau",
      description: "Hasil menjadi bahan diskusi dan evaluasi.",
      detail: "Data skor dan kompetensi ditinjau bersama mentor atau tim People Operations.",
      icon: MessageSquare,
      badgeColor: "neutral" as const,
    },
    {
      step: "04",
      title: "Tindak Lanjuti",
      description: "Tim menentukan materi lanjutan atau kebutuhan pengembangan.",
      detail: "Rekomendasi materi berikutnya diselaraskan dengan jalur karier dan insentif.",
      icon: Compass,
      badgeColor: "success" as const,
    },
  ];

  return (
    <section id="learning-path" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-container px-5 md:px-6 space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <Badge variant="brand" size="sm">
            ALUR KOMPETENSI TERINTEGRASI
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
            Dari materi ke tindak lanjut yang jelas
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Menghubungkan proses belajar mandiri dengan pengukuran objektif, tinjauan berkala, dan perencanaan tindak lanjut yang nyata.
          </p>
        </div>

        {/* 4 Steps Horizontal/Vertical Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-card border border-border bg-surface p-6 space-y-4 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-extrabold text-brand-dark/40">
                      {item.step}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-control bg-surface-soft text-brand-dark">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-text">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-brand-ink">
                      {item.description}
                    </p>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                <div className="pt-2 border-t border-border/50">
                  <Badge variant={item.badgeColor} size="sm">
                    Checkpoint {item.step}
                  </Badge>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action & Note (Occurrence 3 of 5+) */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-card border border-border bg-surface p-6">
          <div className="space-y-1">
            <h4 className="font-display text-base font-bold text-text">
              Ingin menerapkan alur kompetensi terstruktur di organisasi Anda?
            </h4>
            <p className="text-xs text-text-muted">
              Keterhubungan antarmodul pada halaman ini adalah gambaran konsep; konfirmasi cakupan integrasi pada produk aktual.
            </p>
          </div>
          <a href="#contact">
            <Button variant="primary" size="default">
              Jadwalkan konsultasi
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

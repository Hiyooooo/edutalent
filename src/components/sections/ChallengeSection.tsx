import React from "react";
import { Clock, BookCheck, TrendingUp, ShieldAlert } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const ChallengeSection: React.FC = () => {
  return (
    <section id="challenge" className="bg-surface-soft/80 border-y border-border/80 py-16 md:py-24">
      <div className="mx-auto max-w-container px-5 md:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <Badge variant="brand" size="sm">
            TANTANGAN PENGEMBANGAN SDM
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
            Kehadiran mencatat waktu. Pembelajaran membantu membaca perkembangan.
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            Rekap jam kerja memberi konteks operasional. Materi dan evaluasi membantu tim meninjau keterampilan yang sedang dikembangkan.
          </p>
        </div>

        {/* 3 Modular Contrast Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="surface" radius="card" className="space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-control bg-surface-soft text-brand-dark">
              <Clock className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-text">
              Catat waktu training
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Bedakan jam kerja harian dari alokasi waktu belajar agar pimpinan dapat memantau komitmen pengembangan tim secara objektif.
            </p>
          </Card>

          <Card variant="surface" radius="card" className="space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-control bg-surface-cyan text-cyan-ink">
              <BookCheck className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-text">
              Susun materi internal
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Pusatkan modul SOP, pedoman keamanan data, dan video pembelajaran dalam repositori yang terstruktur dan mudah ditelusuri.
            </p>
          </Card>

          <Card variant="surface" radius="card" className="space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-control bg-emerald-50 text-emerald-800">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-bold text-text">
              Tinjau hasil evaluasi
            </h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Gunakan assessment dan ujian berkala untuk memastikan materi benar-benar dipahami, bukan sekadar selesai dibuka.
            </p>
          </Card>
        </div>

        {/* Note tag */}
        <div className="text-center">
          <p className="text-xs text-text-muted font-mono">
            Contoh alur produk, bukan hasil pelanggan.
          </p>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Briefcase, Terminal, School, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { images } from "@/lib/images";

export const AudienceSection: React.FC = () => {
  const audiences = [
    {
      id: "consulting",
      title: "Perusahaan Konsultan",
      description: "Susun jalur belajar untuk metodologi kerja dan evaluasi internal.",
      detail:
        "Standarisasi materi orientasi konsultan, kerangka kerja analisis masalah klien, dan uji kelayakan metodologi sebelum penugasan proyek.",
      image: images.consulting,
      icon: Briefcase,
    },
    {
      id: "techTalent",
      title: "Tech Talent Incubator",
      description: "Tinjau progres pembelajaran teknis dan hasil assessment.",
      detail:
        "Pantau penguasaan modul e-learning, kepatuhan keamanan data digital, dan hasil kuis berkala calon talenta teknologi.",
      image: images.techTalent,
      icon: Terminal,
    },
    {
      id: "education",
      title: "Organisasi Edukasi",
      description: "Kelola materi internal dan evaluasi berkala.",
      detail:
        "Fasilitasi pengembangan profesional tenaga pengajar, repositori SOP operasional lembaga, dan pelacakan kelulusan kursus internal.",
      image: images.education,
      icon: School,
    },
  ];

  return (
    <section id="audiences" className="bg-surface py-16 md:py-24 border-t border-border/80">
      <div className="mx-auto max-w-container px-5 md:px-6 space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <Badge variant="brand" size="sm">
            FOKUS ORGANISASI
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
            Satu alur belajar, kebutuhan tim yang berbeda
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Tampilkan materi dan evaluasi sesuai konteks pengembangan kompetensi organisasi.
          </p>
        </div>

        {/* 3 Audience Cards with Photos EDU-02, EDU-03, EDU-04 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            return (
              <div
                key={aud.id}
                className="rounded-card border border-border bg-surface overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div>
                  <PhotoSlot
                    image={aud.image}
                    caption={aud.title}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-brand-dark">
                      <Icon className="h-5 w-5" />
                      <h3 className="font-display text-lg font-bold text-text">
                        {aud.title}
                      </h3>
                    </div>
                    <p className="text-sm font-semibold text-brand-ink">
                      {aud.description}
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {aud.detail}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-border/40 text-[11px] font-mono text-text-muted">
                  Foto ilustrasi • Berlisensi komersial
                </div>
              </div>
            );
          })}
        </div>

        {/* Note & CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-card bg-surface-soft p-6 border border-brand/20">
          <p className="text-xs text-text-muted max-w-xl">
            Semua foto di atas adalah dokumentasi ilustrasi profesional. EduTalent menyesuaikan struktur bank soal dan kategori modul dengan alur kerja tim Anda.
          </p>
          <a href="#contact">
            <Button variant="secondary" size="default">
              Diskusikan kebutuhan tim Anda
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

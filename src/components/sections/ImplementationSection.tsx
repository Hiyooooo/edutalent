import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { images } from "@/lib/images";

export const ImplementationSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Petakan kompetensi",
      subtitle: "Tentukan materi dan indikator yang relevan.",
      description:
        "Identifikasi kebutuhan keterampilan kunci per divisi, susun silabus materi, dan tetapkan ambang batas evaluasi yang disepakati.",
    },
    {
      number: "02",
      title: "Susun materi dan assessment",
      subtitle: "Kelompokkan sumber belajar dan ujian.",
      description:
        "Unggah modul bacaan, tautkan panduan SOP, dan buat bank soal assessment yang terstruktur untuk mengukur pemahaman peserta.",
    },
    {
      number: "03",
      title: "Tinjau dan tindak lanjuti",
      subtitle: "Gunakan hasil sebagai bahan evaluasi bersama.",
      description:
        "Tinjau laporan skor secara transparan, jadwalkan sesi mentoring lanjutan, dan simulasikan insentif pengembangan sesuai kebijakan.",
    },
  ];

  return (
    <section id="implementation" className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-container px-5 md:px-6 space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <Badge variant="brand" size="sm">
            LANGKAH PENERAPAN
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
            Mulai dari alur belajar yang ingin Anda ukur
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Tiga tahapan sederhana untuk mengintegrasikan proses pembelajaran mandiri dengan evaluasi kompetensi tim Anda.
          </p>
        </div>

        {/* 2-Column Layout: Photo EDU-05 & 3-Step Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Photo EDU-05 */}
          <div className="lg:col-span-5 space-y-2">
            <PhotoSlot
              image={images.planning}
              caption="Catatan perencanaan program belajar di meja kerja"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <p className="text-[11px] font-mono text-text-muted">
              Foto ilustrasi • Perencanaan program belajar profesional.
            </p>
          </div>

          {/* 3 Steps Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((st) => (
              <div
                key={st.number}
                className="flex items-start gap-4 rounded-card border border-border bg-bg p-5 transition-colors hover:border-brand-dark/40"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-control bg-brand-dark text-white font-mono font-bold text-sm">
                  {st.number}
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-base md:text-lg font-bold text-text">
                      {st.title}
                    </h3>
                    <span className="text-xs font-semibold text-brand-dark font-mono">
                      ({st.subtitle})
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed">
                    {st.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action & Note */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
          <p className="text-xs text-text-muted font-mono">
            Langkah ini adalah contoh pendekatan implementasi, bukan jaminan hasil.
          </p>
          <a href="#contact">
            <Button variant="primary" size="default">
              Rencanakan demo bersama tim
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

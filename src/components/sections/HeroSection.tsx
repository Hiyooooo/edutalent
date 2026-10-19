import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { HeroLearningPathDemo } from "@/components/demos/HeroLearningPathDemo";
import { images } from "@/lib/images";
import { SiteConfig } from "@/lib/site-config";

interface HeroSectionProps {
  config?: SiteConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config }) => {
  const headline =
    config?.hero?.headline ||
    "Bukan Sekadar Absen, Tapi Kembangkan Potensi Karyawan Anda";
  const subheadline =
    config?.hero?.subheadline ||
    "Hubungkan materi belajar, evaluasi kompetensi, dan administrasi karyawan dalam satu alur yang lebih mudah ditinjau.";
  const ctaText = config?.hero?.cta_text || "Jadwalkan konsultasi";
  const whatsappUrl = config?.cta?.whatsapp_url || "#contact";

  const isExternalWhatsapp =
    whatsappUrl.startsWith("http://") ||
    whatsappUrl.startsWith("https://") ||
    whatsappUrl.startsWith("wa.me");

  return (
    <section id="hero" className="relative overflow-hidden bg-bg py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-container px-5 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Persuasive Value */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-soft border border-brand/30 px-3.5 py-1 text-xs font-mono font-bold text-brand-dark">
              <Sparkles className="h-3.5 w-3.5" />
              LEARNING &amp; TALENT DEVELOPMENT
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-extrabold leading-[1.08] text-text tracking-tight">
              {headline}
            </h1>

            <p className="font-body text-base sm:text-lg text-text-muted leading-relaxed">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href={whatsappUrl}
                {...(isExternalWhatsapp
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <Button variant="primary" size="default">
                  {ctaText}
                </Button>
              </a>
              <a href="#exam">
                <Button variant="secondary" size="default">
                  Lihat demo Exam
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>

            <p className="text-xs text-text-muted font-mono">
              Jelajahi contoh alur belajar dengan data simulasi.
            </p>

            {/* Contextual Photo Slot EDU-01 */}
            <div className="pt-2">
              <PhotoSlot
                image={images.hero}
                priority={true}
                caption="Peserta mengikuti sesi belajar profesional di ruang kerja"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <p className="mt-1.5 text-[11px] text-text-muted font-mono">
                Foto ilustrasi: Sesi belajar profesional di ruang kerja kolaboratif.
              </p>
            </div>
          </div>

          {/* Right Column: Code-built Interactive Learning Path Mockup */}
          <div className="lg:col-span-6">
            <HeroLearningPathDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

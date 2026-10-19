import React from "react";
import Image from "next/image";
import { Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-brand-ink text-white py-16 md:py-24">
      {/* Background Image EDU-06 with Flat Dark Teal Overlay (No gradient overlay) */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.reflection.src}
          alt={images.reflection.alt}
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-brand-ink/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-container px-5 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3.5 py-1 text-xs font-mono font-bold text-cyan-200">
            KONSULTASI &amp; PERENCANAAN
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Rancang jalur pengembangan yang sesuai kebutuhan tim Anda
          </h2>

          <p className="text-base sm:text-lg text-surface/85 leading-relaxed">
            Mulai dengan memetakan materi, assessment, dan proses administrasi yang ingin Anda hubungkan.
          </p>

          {/* Primary CTA (Occurrence 5 of 5+) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`mailto:${site.contactEmailPlaceholder}`}>
              <Button
                variant="primary"
                size="lg"
                className="bg-brand hover:bg-brand-dark text-white border border-brand-dark/40 shadow-md min-w-[240px]"
              >
                Jadwalkan konsultasi
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          <p className="text-xs text-surface/70 font-mono">
            Kontak konsultasi akan diaktifkan setelah detail resmi dikonfirmasi.
          </p>

          <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-surface/60 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-cyan" />
              Tanpa komitmen awal
            </span>
            <span>•</span>
            <span>Demo simulasi data interaktif</span>
            <span>•</span>
            <span>Foto ilustrasi</span>
          </div>
        </div>
      </div>
    </section>
  );
};

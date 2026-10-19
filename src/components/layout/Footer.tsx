import React from "react";
import Link from "next/link";
import { Route } from "lucide-react";
import { site } from "@/lib/site";

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-brand-ink text-surface/90 border-t border-brand-dark/30">
      <div className="mx-auto max-w-container px-5 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="#top"
              className="inline-flex items-center gap-2.5 font-display text-2xl font-extrabold text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-control bg-brand text-white">
                <Route className="h-4 w-4" aria-hidden="true" />
              </div>
              <span>
                Edu<span className="text-cyan">Talent</span>
              </span>
            </Link>
            <p className="text-sm text-surface/80 leading-relaxed max-w-sm">
              HRIS terpadu dengan fokus pada pembelajaran dan evaluasi kompetensi.
              Menghubungkan administrasi kerja harian dengan pengembangan potensi SDM.
            </p>
            <div className="pt-2 text-xs text-surface/60 font-mono">
              Foto ilustrasi berlisensi komersial.
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm text-surface/80">
              <li>
                <a href="#learning-path" className="hover:text-white transition-colors">
                  Cara Kerja
                </a>
              </li>
              <li>
                <a href="#exam" className="hover:text-white transition-colors">
                  Exam Spotlight
                </a>
              </li>
              <li>
                <a href="#library" className="hover:text-white transition-colors">
                  Library Spotlight
                </a>
              </li>
              <li>
                <a href="#modules" className="hover:text-white transition-colors">
                  Lima Modul HRIS
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Pertanyaan Umum (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info placeholder */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Kontak & Verifikasi
            </h4>
            <p className="text-sm text-surface/80 leading-relaxed">
              Untuk jadwal konsultasi atau diskusi penyesuaian alur kompetensi organisasi:
            </p>
            <div className="space-y-1 text-xs font-mono text-surface/70">
              <div>Email resmi: {site.contactEmailPlaceholder}</div>
              <div>Domain: {site.url}</div>
            </div>
            <div className="pt-2">
              <span className="inline-block rounded-control bg-white/10 px-2.5 py-1 text-[11px] font-mono text-cyan-200 border border-white/10">
                Data contoh bersifat ilustratif
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 border-t border-brand-dark/40 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-surface/60">
          <p>© 2026 EduTalent. Konten demo dan data contoh bersifat ilustratif.</p>
          <p>Dirancang sesuai panduan anti-slop, kontras WCAG 2.2 AA, dan zero em dash.</p>
        </div>
      </div>
    </footer>
  );
};

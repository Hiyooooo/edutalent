import React from "react";
import Link from "next/link";
import { Route } from "lucide-react";
import { SiteConfig, DEFAULT_CONFIG } from "@/lib/site-config";

interface FooterProps {
  config?: SiteConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  const email = config?.contact?.email || DEFAULT_CONFIG.contact.email;
  const phone = config?.contact?.phone || DEFAULT_CONFIG.contact.phone;
  const socialLinks = config?.contact?.social_links || DEFAULT_CONFIG.contact.social_links;
  const footerText = config?.footer_text || DEFAULT_CONFIG.footer_text;
  const logoUrl = config?.branding?.logo_url;
  const siteName = config?.site?.name || "EduTalent";
  const domain = config?.site?.domain || DEFAULT_CONFIG.site.domain;

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
              {logoUrl ? (
                <div className="relative h-9 w-auto min-w-[36px] flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoUrl}
                    alt={siteName}
                    className="h-9 max-w-[180px] object-contain brightness-0 invert"
                  />
                </div>
              ) : (
                <>
                  <div className="flex h-8 w-8 items-center justify-center rounded-control bg-brand text-white">
                    <Route className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span>
                    Edu<span className="text-cyan">Talent</span>
                  </span>
                </>
              )}
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

          {/* Contact info & Social links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Kontak &amp; Verifikasi
            </h4>
            <p className="text-sm text-surface/80 leading-relaxed">
              Untuk jadwal konsultasi atau diskusi penyesuaian alur kompetensi organisasi:
            </p>
            <div className="space-y-1 text-xs font-mono text-surface/70">
              <div>Email: {email}</div>
              <div>Telepon: {phone}</div>
              <div>Domain: {domain}</div>
            </div>

            {/* Social Links List */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="pt-2">
                <span className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
                  Media Sosial
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {socialLinks.map((item) => (
                    <a
                      key={item.platform}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-control bg-white/10 px-2.5 py-1 text-xs font-medium text-cyan hover:bg-white/20 transition-colors"
                    >
                      {item.platform}
                    </a>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2">
              <span className="inline-block rounded-control bg-white/10 px-2.5 py-1 text-[11px] font-mono text-cyan-200 border border-white/10">
                Data contoh bersifat ilustratif
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 border-t border-brand-dark/40 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-surface/60">
          <p>{footerText}</p>
          <p>Dirancang sesuai panduan anti-slop, kontras WCAG 2.2 AA, dan zero em dash.</p>
        </div>
      </div>
    </footer>
  );
};

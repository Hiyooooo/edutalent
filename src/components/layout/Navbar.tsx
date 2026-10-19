"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Route, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SiteConfig } from "@/lib/site-config";

interface NavbarProps {
  config?: SiteConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ config }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Cara Kerja", href: "#learning-path" },
    { label: "Exam", href: "#exam" },
    { label: "Library", href: "#library" },
    { label: "Modul", href: "#modules" },
    { label: "FAQ", href: "#faq" },
  ];

  const ctaText = config?.hero?.cta_text || "Jadwalkan konsultasi";
  const logoUrl = config?.branding?.logo_url;
  const siteName = config?.site?.name || "EduTalent";

  return (
    <header
      id="top"
      className="sticky top-0 z-50 w-full border-b border-border/80 bg-bg/95 backdrop-blur-md transition-colors"
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-5 md:px-6 py-3.5">
        {/* Brand Logo / Wordmark */}
        <Link
          href="#top"
          className="flex items-center gap-2.5 font-display text-xl font-extrabold tracking-tight text-text hover:text-brand-dark transition-colors focus-visible:outline-2 focus-visible:outline-focus rounded-control px-1"
        >
          {logoUrl ? (
            <div className="relative h-8 w-auto min-w-[32px] flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logoUrl}
                alt={siteName}
                className="h-8 max-w-[160px] object-contain"
              />
            </div>
          ) : (
            <>
              <div className="flex h-8 w-8 items-center justify-center rounded-control bg-brand-dark text-white shadow-xs">
                <Route className="h-4 w-4" aria-hidden="true" />
              </div>
              <span>
                Edu<span className="text-brand-dark">Talent</span>
              </span>
            </>
          )}
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-sm font-medium text-text-muted"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand-dark transition-colors focus-visible:outline-2 focus-visible:outline-focus rounded-control px-1 py-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Primary CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact">
            <Button variant="primary" size="sm">
              {ctaText}
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-control border border-border text-text hover:bg-surface-soft"
          aria-expanded={mobileMenuOpen}
          aria-label="Buka menu navigasi"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-surface px-5 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-semibold" aria-label="Menu Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-text hover:text-brand-dark"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-border">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full"
            >
              <Button variant="primary" size="default" className="w-full">
                {ctaText}
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

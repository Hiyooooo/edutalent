import React from "react";
import {
  ClipboardCheck,
  BookOpen,
  Fingerprint,
  CalendarCheck,
  Wallet,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { AttendanceDemo } from "@/components/demos/AttendanceDemo";
import { LeaveDemo } from "@/components/demos/LeaveDemo";
import { CompensationDemo } from "@/components/demos/CompensationDemo";

export const ModulesSection: React.FC = () => {
  return (
    <section id="modules" className="bg-surface-soft/80 border-y border-border/80 py-16 md:py-24">
      <div className="mx-auto max-w-container px-5 md:px-6 space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <Badge variant="brand" size="sm">
            LIMA MODUL TERPADU
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
            Administrasi dan pengembangan dalam satu gambaran
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Mulai dari waktu training hingga evaluasi kompetensi, setiap modul memberi konteks bagi proses pengembangan karyawan.
          </p>
        </div>

        {/* Highlight Banner: 2 Primary Flagship Modules (Exam & Library) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Exam Overview Box */}
          <div className="rounded-panel border-2 border-brand/30 bg-surface p-6 md:p-8 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-control bg-brand-dark text-white">
                  <ClipboardCheck className="h-6 w-6" />
                </div>
                <div>
                  <Badge variant="brand" size="sm">
                    BINTANG UTAMA 01
                  </Badge>
                  <h3 className="font-display text-xl font-bold text-text">
                    Modul Exam
                  </h3>
                </div>
              </div>
              <a href="#exam" className="text-xs font-bold text-brand-dark hover:underline">
                Buka Demo &rarr;
              </a>
            </div>

            <p className="text-sm text-text-muted leading-relaxed">
              Bank soal interaktif, live proctoring sebagai konsep demo, tes minat bakat, leaderboard ranking, assessment rekrutmen online, evaluasi kinerja, dan uji kompetensi.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-text font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-dark flex-shrink-0" />
                Bank soal pilihan ganda interaktif
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-dark flex-shrink-0" />
                Live proctoring konseptual
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-dark flex-shrink-0" />
                Tes minat bakat &amp; pemetaan peran
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-brand-dark flex-shrink-0" />
                Leaderboard skor simulasi
              </li>
            </ul>
          </div>

          {/* Library Overview Box */}
          <div className="rounded-panel border-2 border-cyan/40 bg-surface p-6 md:p-8 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-control bg-cyan-ink text-white">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <Badge variant="cyan" size="sm">
                    BINTANG UTAMA 02
                  </Badge>
                  <h3 className="font-display text-xl font-bold text-text">
                    Modul Library
                  </h3>
                </div>
              </div>
              <a href="#library" className="text-xs font-bold text-cyan-ink hover:underline">
                Buka Demo &rarr;
              </a>
            </div>

            <p className="text-sm text-text-muted leading-relaxed">
              Video e-learning, modul PDF interaktif simulasi, sertifikat kursus internal, knowledge base SOP, arsip dokumen perusahaan, dan modul e-learning terstruktur.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-text font-medium">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-ink flex-shrink-0" />
                Penyelarasan modul PDF mandiri
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-ink flex-shrink-0" />
                Video e-learning durasi simulasi
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-ink flex-shrink-0" />
                Knowledge base SOP operasional
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-ink flex-shrink-0" />
                Badge sertifikat kursus internal
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Supporting Operational Modules with Local Interactive Showcases */}
        <div className="space-y-8">
          <div className="border-t border-border pt-8">
            <h3 className="font-display text-xl font-bold text-text mb-2">
              Modul Pendukung Operasional &amp; Administrasi
            </h3>
            <p className="text-sm text-text-muted">
              Menghubungkan waktu training, pengajuan izin pengembangan, dan simulasi insentif kompetensi.
            </p>
          </div>

          {/* Module 3: Absensi */}
          <div className="space-y-3">
            <AttendanceDemo />
          </div>

          {/* Module 4: Perizinan */}
          <div className="space-y-3">
            <LeaveDemo />
          </div>

          {/* Module 5: Gaji */}
          <div className="space-y-3">
            <CompensationDemo />
          </div>
        </div>

        {/* Bottom CTA Block (Occurrence 4 of 5+) */}
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-panel bg-surface p-6 md:p-8 border border-border shadow-xs">
          <div className="space-y-1">
            <h4 className="font-display text-lg font-bold text-text">
              Konsultasikan integrasi kelima modul untuk tim HR Anda
            </h4>
            <p className="text-xs text-text-muted">
              Alur modul dapat dikonfigurasi bertahap mulai dari Exam &amp; Library atau diintegrasikan bersama rekap kehadiran.
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

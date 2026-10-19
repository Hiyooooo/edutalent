import React from "react";
import { Badge } from "@/components/ui/Badge";
import { LibraryDemo } from "@/components/demos/LibraryDemo";

export const LibrarySpotlight: React.FC = () => {
  return (
    <section id="library" className="bg-surface-cyan/40 border-y border-border/80 py-16 md:py-24">
      <div className="mx-auto max-w-container px-5 md:px-6 space-y-10">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <Badge variant="cyan" size="sm">
            MODUL UNGGULAN 02
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
            Buat materi internal lebih mudah dipelajari dan ditinjau
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Kelompokkan video, modul bacaan, dan SOP agar karyawan dapat mengikuti jalur belajar dengan progres yang terlihat.
          </p>
        </div>

        {/* Interactive Showcase */}
        <div>
          <LibraryDemo />
        </div>

        {/* Footnote */}
        <div className="border-t border-border pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-text-muted">
          <p>
            Badge ini ilustrasi, bukan sertifikat profesi resmi atau unduhan dokumen nyata.
          </p>
          <p className="font-mono">
            Format yang didukung pada produk aktual perlu dikonfirmasi.
          </p>
        </div>
      </div>
    </section>
  );
};

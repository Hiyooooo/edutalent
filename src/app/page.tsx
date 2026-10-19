import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { ExamSpotlight } from "@/components/sections/ExamSpotlight";
import { LibrarySpotlight } from "@/components/sections/LibrarySpotlight";
import { LearningPathSection } from "@/components/sections/LearningPathSection";
import { AudienceSection } from "@/components/sections/AudienceSection";
import { ModulesSection } from "@/components/sections/ModulesSection";
import { ImplementationSection } from "@/components/sections/ImplementationSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { faqData } from "@/lib/faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppCapsule } from "@/components/ui/WhatsAppCapsule";
import { site } from "@/lib/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        description: site.description,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: {
          "@id": `${site.url}/#organization`,
        },
        inLanguage: "id-ID",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${site.url}/#software`,
        name: site.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: site.description,
        featureList: [
          "Bank soal interaktif",
          "Live proctoring anti-curang konseptual",
          "Tes minat bakat",
          "Leaderboard ranking evaluasi",
          "Assessment rekrutmen online",
          "Evaluasi kinerja karyawan",
          "Uji kompetensi terstruktur",
          "Video e-learning internal",
          "Modul PDF interaktif",
          "Sertifikat kelulusan kursus internal",
          "Knowledge base SOP operasional",
          "Arsip dokumen perusahaan",
          "Rekap jam kerja dan jam training",
          "GPS geofencing konseptual",
          "Shift kerja harian",
          "Workflow approval cuti dan lembur",
          "Pengajuan cuti belajar dan beasiswa sertifikasi",
          "Simulasi insentif kenaikan gaji berbasis kelulusan",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqData.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <ChallengeSection />
        <ExamSpotlight />
        <LibrarySpotlight />
        <LearningPathSection />
        <AudienceSection />
        <ModulesSection />
        <ImplementationSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppCapsule />
    </div>
  );
}

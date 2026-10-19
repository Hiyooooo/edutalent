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
import { getSiteConfig } from "@/lib/site-config";

export default async function HomePage() {
  const config = await getSiteConfig();
  const domainUrl = config.site.domain.startsWith("http")
    ? config.site.domain
    : `https://${config.site.domain}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${domainUrl}/#organization`,
        name: config.site.name,
        url: domainUrl,
        description: config.seo.meta_description,
      },
      {
        "@type": "WebSite",
        "@id": `${domainUrl}/#website`,
        url: domainUrl,
        name: config.site.name,
        publisher: {
          "@id": `${domainUrl}/#organization`,
        },
        inLanguage: "id-ID",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${domainUrl}/#software`,
        name: config.site.name,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: config.seo.meta_description,
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
        "@id": `${domainUrl}/#faq`,
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
      <Navbar config={config} />
      <main id="main-content" className="flex-1">
        <HeroSection config={config} />
        <ChallengeSection />
        <ExamSpotlight />
        <LibrarySpotlight />
        <LearningPathSection />
        <AudienceSection />
        <ModulesSection />
        <ImplementationSection />
        <FaqSection />
        <ContactSection config={config} />
      </main>
      <Footer config={config} />
      <WhatsAppCapsule config={config} />
    </div>
  );
}

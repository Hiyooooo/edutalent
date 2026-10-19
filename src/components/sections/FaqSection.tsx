"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { faqData } from "@/lib/faq";

export const FaqSection: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]); // Open first item by default

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section id="faq" className="bg-surface-soft/60 py-16 md:py-24 border-t border-border/80">
      <div className="mx-auto max-w-container px-5 md:px-6 space-y-12">
        {/* Header */}
        <div className="max-w-2xl space-y-4">
          <Badge variant="brand" size="sm">
            PERTANYAAN UMUM
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-base sm:text-lg text-text-muted leading-relaxed">
            Keterangan transparan seputar fungsionalitas, status demo, batasan sistem, dan implementasi EduTalent.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl space-y-3.5">
          {faqData.map((item, idx) => {
            const isOpen = openIndexes.includes(idx);
            const buttonId = `faq-btn-${idx}`;
            const panelId = `faq-panel-${idx}`;

            return (
              <div
                key={item.question}
                className="rounded-card border border-border bg-surface overflow-hidden transition-colors"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-base md:text-lg font-bold text-text hover:text-brand-dark transition-colors focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2"
                  >
                    <span>{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-text-muted transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-brand-dark" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className={`px-5 pb-5 pt-1 text-sm text-text-muted leading-relaxed border-t border-border/40 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

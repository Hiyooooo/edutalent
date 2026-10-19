"use client";

import React, { useState } from "react";
import {
  ClipboardCheck,
  ShieldCheck,
  Trophy,
  Check,
  RotateCcw,
  AlertCircle,
  HelpCircle,
  Eye,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  examQuestions,
  calculateExamScore,
  sampleLeaderboard,
  EXAM_PASSING_THRESHOLD,
} from "@/lib/exam";

export const ExamDemo: React.FC = () => {
  // Pre-fill answers with 4 correct, 1 unanswered for initial 80/100 score as required by specs
  const initialAnswers: Record<number, string> = {
    1: "C", // Correct
    2: "A", // Correct
    3: "B", // Correct
    4: "B", // Correct
    5: "",  // Unanswered
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>(initialAnswers);
  const [showResults, setShowResults] = useState(false);
  const [activeTab, setActiveTab] = useState<"quiz" | "leaderboard" | "proctoring">("quiz");
  const [announcement, setAnnouncement] = useState("");

  const currentQuestion = examQuestions[currentQuestionIndex];

  // Calculate score
  const correctCount = examQuestions.reduce((count, q) => {
    return answers[q.id] === q.correctAnswer ? count + 1 : count;
  }, 0);

  const result = calculateExamScore(correctCount, examQuestions.length, EXAM_PASSING_THRESHOLD);

  const handleSelectOption = (questionId: number, optionId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setAnnouncement(`Opsi ${optionId} dipilih untuk soal ${questionId}.`);
  };

  const handleCheckResults = () => {
    setShowResults(true);
    setAnnouncement(
      `Hasil diperiksa. Skor simulasi ${result.score}/100. Status: ${result.statusLabel}.`
    );
  };

  const handleReset = () => {
    setAnswers(initialAnswers);
    setShowResults(false);
    setCurrentQuestionIndex(0);
    setAnnouncement("Ujian simulasi diatur ulang ke kondisi awal.");
  };

  return (
    <div className="rounded-panel border border-border bg-surface shadow-sm overflow-hidden">
      {/* Live Region for Screen Readers */}
      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>

      {/* Header Panel */}
      <div className="border-b border-border bg-surface-soft/60 p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-control bg-brand-dark text-white">
              <ClipboardCheck className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-semibold text-brand-dark">
                  MODUL UNGGULAN 01
                </span>
                <Badge variant="cyan" size="sm">
                  DATA SIMULASI
                </Badge>
              </div>
              <h3 className="font-display text-lg md:text-xl font-bold text-text">
                Assessment: Dasar Keamanan Data
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-3 py-1.5 rounded-control font-display text-xs md:text-sm font-semibold transition-colors ${
                activeTab === "quiz"
                  ? "bg-brand-dark text-white"
                  : "bg-surface text-text-muted hover:text-text border border-border"
              }`}
            >
              Ujian Interaktif
            </button>
            <button
              onClick={() => setActiveTab("leaderboard")}
              className={`px-3 py-1.5 rounded-control font-display text-xs md:text-sm font-semibold transition-colors ${
                activeTab === "leaderboard"
                  ? "bg-brand-dark text-white"
                  : "bg-surface text-text-muted hover:text-text border border-border"
              }`}
            >
              Leaderboard
            </button>
            <button
              onClick={() => setActiveTab("proctoring")}
              className={`px-3 py-1.5 rounded-control font-display text-xs md:text-sm font-semibold transition-colors ${
                activeTab === "proctoring"
                  ? "bg-brand-dark text-white"
                  : "bg-surface text-text-muted hover:text-text border border-border"
              }`}
            >
              Konsep Proctoring
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 md:p-8">
        {activeTab === "quiz" && (
          <div className="space-y-6">
            {/* Meta status strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-card bg-surface-soft p-4 border border-brand/20">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-brand-dark">
                  Soal {currentQuestionIndex + 1} dari {examQuestions.length}
                </span>
                <span className="text-xs text-text-muted hidden sm:inline">
                  Ambang Lulus: {EXAM_PASSING_THRESHOLD}/100
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-text-muted">Status:</span>
                <Badge
                  variant={result.isPassed ? "success" : "neutral"}
                  size="sm"
                >
                  {result.statusLabel} ({result.score}/100)
                </Badge>
              </div>
            </div>

            {/* Question Card */}
            <div className="space-y-4">
              <h4 className="font-display text-base md:text-lg font-bold text-text">
                {currentQuestion.id}. {currentQuestion.question}
              </h4>

              {/* Options */}
              <fieldset className="space-y-2.5">
                <legend className="sr-only">Pilihan jawaban untuk soal {currentQuestion.id}</legend>
                {currentQuestion.options.map((opt) => {
                  const isSelected = answers[currentQuestion.id] === opt.id;
                  const isCorrect = opt.id === currentQuestion.correctAnswer;
                  const showAnswerFeedback = showResults;

                  let borderClass = "border-border hover:border-brand-dark/40 bg-surface";
                  if (isSelected) {
                    borderClass = "border-brand-dark bg-surface-soft";
                  }
                  if (showAnswerFeedback) {
                    if (isCorrect) {
                      borderClass = "border-emerald-600 bg-emerald-50/60";
                    } else if (isSelected && !isCorrect) {
                      borderClass = "border-red-600 bg-red-50/60";
                    }
                  }

                  return (
                    <label
                      key={opt.id}
                      className={`flex items-start gap-3 rounded-card border p-4 cursor-pointer transition-all ${borderClass}`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestion.id}`}
                        value={opt.id}
                        checked={isSelected}
                        onChange={() => handleSelectOption(currentQuestion.id, opt.id)}
                        className="mt-1 h-4 w-4 text-brand-dark border-border focus:ring-brand-dark"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-text-muted">
                            [{opt.id}]
                          </span>
                          <span className="text-sm md:text-base text-text">
                            {opt.text}
                          </span>
                        </div>
                        {showAnswerFeedback && isCorrect && (
                          <p className="mt-2 text-xs font-medium text-emerald-800">
                            Jawaban benar: {currentQuestion.explanation}
                          </p>
                        )}
                      </div>
                    </label>
                  );
                })}
              </fieldset>
            </div>

            {/* Question pagination & Action buttons */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
              <div className="flex items-center gap-1.5">
                {examQuestions.map((q, idx) => (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(idx)}
                    className={`h-9 w-9 rounded-control font-mono text-xs font-bold transition-all ${
                      currentQuestionIndex === idx
                        ? "bg-brand-dark text-white ring-2 ring-brand-dark/40"
                        : answers[q.id]
                        ? "bg-surface-soft text-brand-dark border border-brand/30"
                        : "bg-surface text-text-muted border border-border"
                    }`}
                    aria-label={`Buka soal ${q.id}`}
                  >
                    {q.id}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs md:text-sm font-semibold text-text-muted hover:text-text rounded-control border border-border bg-surface"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset Demo
                </button>
                <Button
                  variant="primary"
                  size="default"
                  onClick={handleCheckResults}
                >
                  Periksa Hasil Ujian
                </Button>
              </div>
            </div>

            {/* Result summary banner */}
            {showResults && (
              <div className="rounded-card border border-brand/30 bg-surface-soft p-5 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold text-text text-base">
                    Ringkasan Hasil Evaluasi
                  </span>
                  <Badge variant={result.isPassed ? "success" : "warning"}>
                    {result.statusLabel}
                  </Badge>
                </div>
                <p className="text-sm text-text-muted">
                  Jawaban benar: <strong>{result.correctCount}</strong> dari{" "}
                  <strong>{result.totalQuestions}</strong> soal. Nilai simulasi:{" "}
                  <strong className="font-mono text-brand-dark text-base">
                    {result.score}/100
                  </strong>
                  .
                </p>
                <p className="text-xs text-text-muted">
                  Catatan: Hasil penilaian perlu ditinjau sesuai kebijakan organisasi. Skor ini
                  bersifat simulasi lokal.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === "leaderboard" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-text text-base md:text-lg">
                  Leaderboard Simulasi
                </h4>
                <p className="text-xs text-text-muted">
                  Contoh perankingan skor dari 8 peserta simulasi (Rani Putri di peringkat 2).
                </p>
              </div>
              <Badge variant="cyan" size="sm">
                DATA SIMULASI
              </Badge>
            </div>

            <div className="overflow-x-auto rounded-card border border-border bg-surface">
              <table className="w-full text-left text-sm">
                <thead className="bg-surface-soft border-b border-border text-xs font-mono uppercase text-text-muted">
                  <tr>
                    <th className="py-3 px-4">Peringkat</th>
                    <th className="py-3 px-4">Nama Peserta</th>
                    <th className="py-3 px-4">Skor</th>
                    <th className="py-3 px-4">Durasi Ujian</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {sampleLeaderboard.map((entry) => (
                    <tr
                      key={entry.rank}
                      className={entry.isCurrentUser ? "bg-surface-soft font-semibold text-brand-dark" : "hover:bg-bg/50"}
                    >
                      <td className="py-3 px-4 font-mono">
                        {entry.rank === 1 ? (
                          <span className="inline-flex items-center gap-1 text-amber-600">
                            <Trophy className="h-4 w-4" /> 1
                          </span>
                        ) : (
                          `#${entry.rank}`
                        )}
                      </td>
                      <td className="py-3 px-4">
                        {entry.name}
                        {entry.isCurrentUser && (
                          <span className="ml-2 text-xs font-normal text-brand-ink">
                            (Akun Demo)
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 font-mono">{entry.score}/100</td>
                      <td className="py-3 px-4 font-mono text-text-muted">{entry.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-text-muted italic">
              Peringkat dan durasi merupakan data simulasi untuk menggambarkan konsep transparansi evaluasi.
            </p>
          </div>
        )}

        {activeTab === "proctoring" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-display font-bold text-text text-base md:text-lg">
                  Konsep Status Pengawasan (Live Proctoring)
                </h4>
                <p className="text-xs text-text-muted">
                  Panel ini menggambarkan konsep proctoring; efektivitas bergantung pada implementasi dan kebijakan.
                </p>
              </div>
              <Badge variant="brand" size="sm">
                KONSEP DESAIN
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-card border border-border bg-surface p-4 space-y-2">
                <div className="flex items-center gap-2 text-brand-dark">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="font-display font-bold text-sm">Integritas Browser</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Konsep deteksi perpindahan tab atau jendela browser selama pengerjaan assessment berlangsung.
                </p>
                <div className="pt-2">
                  <Badge variant="success" size="sm">
                    Status: Normal (Simulasi)
                  </Badge>
                </div>
              </div>

              <div className="rounded-card border border-border bg-surface p-4 space-y-2">
                <div className="flex items-center gap-2 text-brand-dark">
                  <Eye className="h-5 w-5" />
                  <span className="font-display font-bold text-sm">Fokus Jendela</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Konsep penanda aktivitas tidak wajar tanpa memerlukan akses kamera atau perekaman layar perangkat.
                </p>
                <div className="pt-2">
                  <Badge variant="neutral" size="sm">
                    Tanpa Kamera Riil
                  </Badge>
                </div>
              </div>

              <div className="rounded-card border border-border bg-surface p-4 space-y-2">
                <div className="flex items-center gap-2 text-brand-dark">
                  <HelpCircle className="h-5 w-5" />
                  <span className="font-display font-bold text-sm">Tes Minat Bakat</span>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Pemetaan minat bakat: Analisis Keamanan Sistem dan Tata Kelola Risiko (ilustrasi kecocokan peran).
                </p>
                <div className="pt-2">
                  <Badge variant="cyan" size="sm">
                    Kategori: Teknis & Kepatuhan
                  </Badge>
                </div>
              </div>
            </div>

            <div className="rounded-card bg-surface-soft p-4 border border-brand/20 flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-brand-dark flex-shrink-0 mt-0.5" />
              <div className="text-xs text-text-muted leading-relaxed">
                <strong>Ketentuan Keamanan & Kejujuran:</strong> Demo ini tidak meminta izin mikrofon, kamera,
                atau transmisi data ke server. Panel ini hanya mengilustrasikan alur tinjauan pengawas bagi tim HR/L&D.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

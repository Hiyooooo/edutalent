// DEMO ONLY: simplified incentive rule; not payroll, tax, BPJS, or employment-policy advice.

export interface IncentiveCalculationResult {
  baseSalary: number;
  score: number;
  qualifiesForIncentive: boolean;
  incentiveRate: number;
  incentiveAmount: number;
  totalCompensation: number;
  disclaimer: string;
}

export const INCENTIVE_SCORE_THRESHOLD = 80;
export const INCENTIVE_RATE = 0.05; // 5%

/**
 * Calculates a demonstration skill-based incentive based on competency score.
 * Normalizes negative salaries or non-finite inputs to 0.
 */
export function calculateIncentive(
  baseSalary: number,
  score: number
): IncentiveCalculationResult {
  const safeBaseSalary = Number.isFinite(baseSalary) ? Math.max(0, Math.round(baseSalary)) : 0;
  const safeScore = Number.isFinite(score) ? Math.max(0, Math.min(100, Math.round(score))) : 0;

  const qualifies = safeScore >= INCENTIVE_SCORE_THRESHOLD && safeBaseSalary > 0;
  const rate = qualifies ? INCENTIVE_RATE : 0;
  const incentiveAmount = qualifies ? Math.round(safeBaseSalary * rate) : 0;
  const totalCompensation = safeBaseSalary + incentiveAmount;

  return {
    baseSalary: safeBaseSalary,
    score: safeScore,
    qualifiesForIncentive: qualifies,
    incentiveRate: rate,
    incentiveAmount,
    totalCompensation,
    disclaimer: "Simulasi ilustratif, bukan perhitungan payroll resmi atau rekomendasi kebijakan ketenagakerjaan.",
  };
}

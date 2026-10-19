/**
 * Formatting utilities for numbers, currencies, and percentages.
 */

export function formatRupiah(amount: number): string {
  const safeAmount = Number.isFinite(amount) ? Math.max(0, Math.round(amount)) : 0;
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(safeAmount)
    .replace(/\s+/g, "");
}

export function formatPercent(value: number): string {
  const safeValue = Number.isFinite(value) ? Math.max(0, Math.min(100, Math.round(value))) : 0;
  return `${safeValue}%`;
}

export function formatScore(score: number): string {
  const safeScore = Number.isFinite(score) ? Math.max(0, Math.min(100, Math.round(score))) : 0;
  return `${safeScore}/100`;
}

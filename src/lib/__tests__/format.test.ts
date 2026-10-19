import { describe, it, expect } from "vitest";
import { formatRupiah, formatPercent, formatScore } from "../format";

describe("Formatting helper functions", () => {
  it("formats Indonesian Rupiah amounts consistently", () => {
    expect(formatRupiah(4000000)).toMatch(/Rp4\.000\.000/);
    expect(formatRupiah(200000)).toMatch(/Rp200\.000/);
    expect(formatRupiah(0)).toMatch(/Rp0/);
    expect(formatRupiah(-500)).toMatch(/Rp0/);
  });

  it("formats percentages within bounds", () => {
    expect(formatPercent(75)).toBe("75%");
    expect(formatPercent(100)).toBe("100%");
    expect(formatPercent(0)).toBe("0%");
    expect(formatPercent(120)).toBe("100%");
    expect(formatPercent(-10)).toBe("0%");
  });

  it("formats scores out of 100", () => {
    expect(formatScore(80)).toBe("80/100");
    expect(formatScore(100)).toBe("100/100");
    expect(formatScore(0)).toBe("0/100");
  });
});

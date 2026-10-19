import { describe, it, expect } from "vitest";
import { calculateNextProgress, initialMaterials } from "../library";

describe("Library pure calculation logic", () => {
  it("advances progress from 0 to 25 without badge", () => {
    const result = calculateNextProgress(0, 25);
    expect(result.progress).toBe(25);
    expect(result.hasEarnedBadge).toBe(false);
    expect(result.statusLabel).toBe("25% dipelajari");
  });

  it("advances progress from 50 to 75 without badge", () => {
    const result = calculateNextProgress(50, 25);
    expect(result.progress).toBe(75);
    expect(result.hasEarnedBadge).toBe(false);
    expect(result.statusLabel).toBe("75% dipelajari");
  });

  it("advances progress from 75 to 100 and awards completion badge", () => {
    const result = calculateNextProgress(75, 25);
    expect(result.progress).toBe(100);
    expect(result.hasEarnedBadge).toBe(true);
    expect(result.statusLabel).toBe("Selesai (Badge diperoleh)");
  });

  it("caps progress at 100 when adding step to 100", () => {
    const result = calculateNextProgress(100, 25);
    expect(result.progress).toBe(100);
    expect(result.hasEarnedBadge).toBe(true);
  });

  it("normalizes negative initial progress to 0 and adds step", () => {
    const result = calculateNextProgress(-10, 25);
    expect(result.progress).toBe(25);
    expect(result.hasEarnedBadge).toBe(false);
  });

  it("normalizes non-finite progress to 0", () => {
    const result = calculateNextProgress(NaN, 25);
    expect(result.progress).toBe(25);
  });

  it("provides initial material catalog with 3 items", () => {
    expect(initialMaterials).toHaveLength(3);
    expect(initialMaterials[0].title).toBe("Pengantar SOP Operasional");
    expect(initialMaterials[1].title).toBe("Dasar Keamanan Data");
    expect(initialMaterials[2].title).toBe("Panduan Layanan Pelanggan");
  });
});

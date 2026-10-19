import { describe, it, expect } from "vitest";
import { calculateIncentive } from "../compensation";

describe("Compensation skill-based incentive calculation", () => {
  it("yields Rp0 incentive for score 79 on Rp4.000.000 salary", () => {
    const result = calculateIncentive(4000000, 79);
    expect(result.qualifiesForIncentive).toBe(false);
    expect(result.incentiveAmount).toBe(0);
    expect(result.totalCompensation).toBe(4000000);
  });

  it("yields Rp200.000 (5%) incentive for score 80 on Rp4.000.000 salary", () => {
    const result = calculateIncentive(4000000, 80);
    expect(result.qualifiesForIncentive).toBe(true);
    expect(result.incentiveAmount).toBe(200000);
    expect(result.totalCompensation).toBe(4200000);
  });

  it("yields Rp250.000 (5%) incentive for score 90 on Rp5.000.000 salary", () => {
    const result = calculateIncentive(5000000, 90);
    expect(result.qualifiesForIncentive).toBe(true);
    expect(result.incentiveAmount).toBe(250000);
    expect(result.totalCompensation).toBe(5250000);
  });

  it("yields Rp0 incentive and Rp0 total when base salary is 0 even with score 100", () => {
    const result = calculateIncentive(0, 100);
    expect(result.qualifiesForIncentive).toBe(false);
    expect(result.incentiveAmount).toBe(0);
    expect(result.totalCompensation).toBe(0);
  });

  it("yields Rp200.000 (5%) incentive for score 100 on Rp4.000.000 salary", () => {
    const result = calculateIncentive(4000000, 100);
    expect(result.qualifiesForIncentive).toBe(true);
    expect(result.incentiveAmount).toBe(200000);
    expect(result.totalCompensation).toBe(4200000);
  });

  it("normalizes negative base salary to 0", () => {
    const result = calculateIncentive(-2000000, 85);
    expect(result.baseSalary).toBe(0);
    expect(result.incentiveAmount).toBe(0);
    expect(result.totalCompensation).toBe(0);
  });

  it("always provides a disclaimer in the output object", () => {
    const result = calculateIncentive(4000000, 85);
    expect(result.disclaimer).toBeTruthy();
    expect(result.disclaimer).toContain("Simulasi");
  });
});

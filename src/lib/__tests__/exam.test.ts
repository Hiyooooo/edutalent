import { describe, it, expect } from "vitest";
import { calculateExamScore, examQuestions, EXAM_PASSING_THRESHOLD } from "../exam";

describe("Exam pure calculation logic", () => {
  it("calculates score 0 for 0 correct out of 5", () => {
    const result = calculateExamScore(0, 5);
    expect(result.score).toBe(0);
    expect(result.isPassed).toBe(false);
    expect(result.statusLabel).toBe("Belum lulus");
  });

  it("calculates score 60 for 3 correct out of 5 (below threshold 70)", () => {
    const result = calculateExamScore(3, 5);
    expect(result.score).toBe(60);
    expect(result.isPassed).toBe(false);
    expect(result.statusLabel).toBe("Belum lulus");
  });

  it("calculates score 80 for 4 correct out of 5 (passes simulation threshold 70)", () => {
    const result = calculateExamScore(4, 5);
    expect(result.score).toBe(80);
    expect(result.isPassed).toBe(true);
    expect(result.statusLabel).toBe("Lulus simulasi");
  });

  it("calculates score 100 for 5 correct out of 5", () => {
    const result = calculateExamScore(5, 5);
    expect(result.score).toBe(100);
    expect(result.isPassed).toBe(true);
    expect(result.statusLabel).toBe("Lulus simulasi");
  });

  it("safely handles 0 total questions without division by zero", () => {
    const result = calculateExamScore(0, 0);
    expect(result.score).toBe(0);
    expect(result.isPassed).toBe(false);
    expect(result.statusLabel).toBe("Tidak ada soal");
  });

  it("clamps negative correct answers or numbers exceeding total questions", () => {
    const negResult = calculateExamScore(-2, 5);
    expect(negResult.score).toBe(0);

    const overResult = calculateExamScore(10, 5);
    expect(overResult.score).toBe(100);
  });

  it("contains 5 question bank items for local simulation", () => {
    expect(examQuestions).toHaveLength(5);
    examQuestions.forEach((q) => {
      expect(q.id).toBeGreaterThan(0);
      expect(q.options.length).toBe(4);
      expect(["A", "B", "C", "D"]).toContain(q.correctAnswer);
      expect(q.explanation).toBeTruthy();
    });
  });
});

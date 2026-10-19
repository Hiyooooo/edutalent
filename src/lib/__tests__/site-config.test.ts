import { describe, it, expect, vi, beforeEach } from "vitest";
import {
  normalizeImageUrl,
  adjustHexBrightness,
  DEFAULT_CONFIG,
  getSiteConfig,
} from "../site-config";

describe("Site Configuration & Normalizer", () => {
  it("normalizes relative and absolute image URLs properly", () => {
    expect(normalizeImageUrl("https://example.com/logo.png", "https://api.akarindo.id")).toBe(
      "https://example.com/logo.png"
    );
    expect(normalizeImageUrl("/storage/logo.png", "https://api.akarindo.id/api")).toBe(
      "https://api.akarindo.id/storage/logo.png"
    );
    expect(normalizeImageUrl(null)).toBeNull();
    expect(normalizeImageUrl("")).toBeNull();
  });

  it("adjusts hex brightness cleanly for derived color variations", () => {
    const original = "#0D9488";
    const darker = adjustHexBrightness(original, -15);
    expect(darker).toMatch(/^#[0-9a-fA-F]{6}$/);
    expect(darker).not.toBe(original);
  });

  it("returns DEFAULT_CONFIG fallback when env variables are not set or fetch fails", async () => {
    const config = await getSiteConfig();
    expect(config).toBeDefined();
    expect(config.site.name).toBe("EduTalent");
    expect(config.hero.headline).toBe(DEFAULT_CONFIG.hero.headline);
    expect(config.cta.whatsapp_url).toContain("wa.me");
    expect(config.branding.primary_color).toBe("#0D9488");
  });
});

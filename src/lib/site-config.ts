import { cache } from "react";

export interface SocialLink {
  platform: string;
  url: string;
}

export interface SiteConfig {
  site: {
    id: string;
    name: string;
    domain: string;
  };
  branding: {
    logo_url: string | null;
    favicon_url: string | null;
    primary_color: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    cta_text: string;
  };
  cta: {
    whatsapp_number: string;
    whatsapp_message_template: string;
    whatsapp_url: string;
  };
  contact: {
    email: string;
    phone: string;
    social_links: SocialLink[];
  };
  footer_text: string;
  tracking: {
    ga_id: string | null;
    meta_pixel_id: string | null;
  };
  seo: {
    meta_title: string;
    meta_description: string;
    keywords: string[];
    og_image_url: string | null;
  };
}

export function normalizeImageUrl(
  urlRaw?: string | null,
  apiUrl?: string
): string | null {
  if (!urlRaw || typeof urlRaw !== "string") {
    return null;
  }
  const trimmed = urlRaw.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  if (trimmed.startsWith("/") && apiUrl) {
    const cleanApi = apiUrl.replace(/\/+$/, "").replace(/\/api$/, "");
    return `${cleanApi}${trimmed}`;
  }
  return trimmed;
}

/**
 * Adjust hex color brightness to calculate dark/ink variants dynamically
 */
export function adjustHexBrightness(hex: string, percent: number): string {
  const cleanHex = hex.replace("#", "");
  if (cleanHex.length !== 6) return hex;

  const num = parseInt(cleanHex, 16);
  let r = (num >> 16) + Math.round(255 * (percent / 100));
  let g = ((num >> 8) & 0x00ff) + Math.round(255 * (percent / 100));
  let b = (num & 0x0000ff) + Math.round(255 * (percent / 100));

  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

export const DEFAULT_CONFIG: SiteConfig = {
  site: {
    id: "05-edutalent",
    name: "EduTalent",
    domain: "https://example.invalid",
  },
  branding: {
    logo_url: null,
    favicon_url: null,
    primary_color: "#0D9488",
  },
  hero: {
    headline: "Bukan Sekadar Absen, Tapi Kembangkan Potensi Karyawan Anda",
    subheadline:
      "Hubungkan materi belajar, evaluasi kompetensi, dan administrasi karyawan dalam satu alur yang lebih mudah ditinjau.",
    cta_text: "Jadwalkan konsultasi",
  },
  cta: {
    whatsapp_number: "6281234567890",
    whatsapp_message_template:
      "Halo EduTalent, saya ingin berkonsultasi mengenai platform learning dan HRIS.",
    whatsapp_url:
      "https://wa.me/6281234567890?text=Halo%20EduTalent,%20saya%20ingin%20konsultasi%20alur%20belajar%20dan%20HRIS",
  },
  contact: {
    email: "kontak@edutalent.invalid",
    phone: "+62 812-3456-7890",
    social_links: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Instagram", url: "https://instagram.com" },
    ],
  },
  footer_text:
    "© 2026 EduTalent. Konten demo dan data contoh bersifat ilustratif.",
  tracking: {
    ga_id: null,
    meta_pixel_id: null,
  },
  seo: {
    meta_title:
      "EduTalent - HRIS Terpadu dengan Sistem Ujian & Perpustakaan Digital",
    meta_description:
      "Tingkatkan kompetensi karyawan dengan sistem ujian online terintegrasi, e-library SOP, dan evaluasi berkala.",
    keywords: [
      "HRIS",
      "LMS",
      "Ujian Online",
      "Learning and Development",
      "EduTalent",
      "Kompetensi Karyawan",
    ],
    og_image_url: "/opengraph-image",
  },
};

export const getSiteConfig = cache(async (): Promise<SiteConfig> => {
  const apiUrl = process.env.APIURL || process.env.API_URL;
  const siteId = process.env.SITE_ID || "05-edutalent";
  const siteSecret = process.env.SITE_SECRET;

  if (!apiUrl || !siteSecret) {
    return DEFAULT_CONFIG;
  }

  try {
    const cleanUrl = apiUrl.replace(/\/+$/, "").replace(/\/api$/, "");
    const revalidateSeconds =
      Number(process.env.REVALIDATE_SECONDS) || 60;

    const response = await fetch(`${cleanUrl}/api/v1/site/config`, {
      method: "GET",
      headers: {
        "X-Site-Id": siteId,
        "X-Site-Secret": siteSecret,
        Accept: "application/json",
      },
      next: { revalidate: revalidateSeconds },
    });

    if (!response.ok) {
      return DEFAULT_CONFIG;
    }

    const data = await response.json();

    const socialLinks = Array.isArray(data.contact?.social_links)
      ? data.contact.social_links
      : typeof data.contact?.social_links === "object" &&
          data.contact?.social_links !== null
        ? Object.entries(data.contact.social_links).map(
            ([platform, url]) => ({
              platform,
              url: String(url),
            })
          )
        : [];

    const logoUrlRaw = data.branding?.logo_url;
    const faviconUrlRaw = data.branding?.favicon_url;
    const ogImageUrlRaw = data.seo?.og_image_url;

    return {
      site: {
        id: data.site?.id || DEFAULT_CONFIG.site.id,
        name: data.site?.name || DEFAULT_CONFIG.site.name,
        domain: data.site?.domain || DEFAULT_CONFIG.site.domain,
      },
      branding: {
        logo_url:
          normalizeImageUrl(logoUrlRaw, apiUrl) ||
          DEFAULT_CONFIG.branding.logo_url,
        favicon_url:
          normalizeImageUrl(faviconUrlRaw, apiUrl) ||
          DEFAULT_CONFIG.branding.favicon_url,
        primary_color:
          data.branding?.primary_color ||
          DEFAULT_CONFIG.branding.primary_color,
      },
      hero: {
        headline: data.hero?.headline || DEFAULT_CONFIG.hero.headline,
        subheadline:
          data.hero?.subheadline || DEFAULT_CONFIG.hero.subheadline,
        cta_text: data.hero?.cta_text || DEFAULT_CONFIG.hero.cta_text,
      },
      cta: {
        whatsapp_number:
          data.cta?.whatsapp_number || DEFAULT_CONFIG.cta.whatsapp_number,
        whatsapp_message_template:
          data.cta?.whatsapp_message_template ||
          DEFAULT_CONFIG.cta.whatsapp_message_template,
        whatsapp_url:
          data.cta?.whatsapp_url || DEFAULT_CONFIG.cta.whatsapp_url,
      },
      contact: {
        email: data.contact?.email || DEFAULT_CONFIG.contact.email,
        phone: data.contact?.phone || DEFAULT_CONFIG.contact.phone,
        social_links:
          socialLinks.length > 0
            ? socialLinks
            : DEFAULT_CONFIG.contact.social_links,
      },
      footer_text: data.footer_text || DEFAULT_CONFIG.footer_text,
      tracking: {
        ga_id: data.tracking?.ga_id ?? null,
        meta_pixel_id: data.tracking?.meta_pixel_id ?? null,
      },
      seo: {
        meta_title:
          data.seo?.meta_title || DEFAULT_CONFIG.seo.meta_title,
        meta_description:
          data.seo?.meta_description || DEFAULT_CONFIG.seo.meta_description,
        keywords: Array.isArray(data.seo?.keywords)
          ? data.seo.keywords
          : DEFAULT_CONFIG.seo.keywords,
        og_image_url:
          normalizeImageUrl(ogImageUrlRaw, apiUrl) ||
          DEFAULT_CONFIG.seo.og_image_url,
      },
    };
  } catch {
    return DEFAULT_CONFIG;
  }
});

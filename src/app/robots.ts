import { MetadataRoute } from "next";
import { getSiteConfig } from "@/lib/site-config";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const config = await getSiteConfig();
  const domainUrl = config.site.domain.startsWith("http")
    ? config.site.domain
    : `https://${config.site.domain}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${domainUrl}/sitemap.xml`,
  };
}

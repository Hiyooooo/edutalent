import { MetadataRoute } from "next";
import { getSiteConfig } from "@/lib/site-config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const config = await getSiteConfig();
  const domainUrl = config.site.domain.startsWith("http")
    ? config.site.domain
    : `https://${config.site.domain}`;

  return [
    {
      url: domainUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}

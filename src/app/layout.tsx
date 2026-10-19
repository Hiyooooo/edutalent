import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { manrope, nunitoSans, ibmPlexMono } from "./fonts";
import { getSiteConfig, adjustHexBrightness } from "@/lib/site-config";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0D9488",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const config = await getSiteConfig();
  const domainUrl = config.site.domain.startsWith("http")
    ? config.site.domain
    : `https://${config.site.domain}`;

  const ogImage = config.seo.og_image_url || "/opengraph-image";

  return {
    metadataBase: new URL(domainUrl),
    title: config.seo.meta_title,
    description: config.seo.meta_description,
    keywords: config.seo.keywords,
    icons: {
      icon: [
        { url: config.branding.favicon_url || "/icon.svg", type: "image/svg+xml" },
        { url: "/favicon.ico" },
      ],
      shortcut: config.branding.favicon_url || "/favicon.ico",
      apple: "/icon-192.png",
    },
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: domainUrl,
      siteName: config.site.name,
      title: config.seo.meta_title,
      description: config.seo.meta_description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${config.site.name}: alur pembelajaran dan evaluasi kompetensi`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.seo.meta_title,
      description: config.seo.meta_description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = await getSiteConfig();
  const primaryColor = config.branding.primary_color || "#0D9488";
  const darkColor = adjustHexBrightness(primaryColor, -12);
  const inkColor = adjustHexBrightness(primaryColor, -25);

  return (
    <html
      lang="id"
      className={`${manrope.variable} ${nunitoSans.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        {/* Dynamic Theme Color Injection from Admin Panel */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --color-brand: ${primaryColor};
                --color-brand-dark: ${darkColor};
                --color-brand-ink: ${inkColor};
              }
            `,
          }}
        />

        {/* Google Analytics Script (Only if configured in Admin Panel) */}
        {config.tracking.ga_id && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${config.tracking.ga_id}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${config.tracking.ga_id}');
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel Script (Only if configured in Admin Panel) */}
        {config.tracking.meta_pixel_id && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${config.tracking.meta_pixel_id}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}
      </head>
      <body className="font-body text-text bg-bg antialiased selection:bg-brand/20">
        <a href="#main-content" className="skip-link">
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}

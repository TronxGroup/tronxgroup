import type { Metadata } from "next";
import Script from "next/script";
import Landing from "./_components/Landing";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxgroup.com"),
  title: "Tronx Group — Crecimiento, Tecnología y Contenido",
  description:
    "Tronx Group es un holding creativo-tecnológico que integra estrategia, medios y conocimiento para impulsar el crecimiento empresarial con propósito.",
  alternates: { canonical: "https://www.tronxgroup.com" },
  openGraph: {
    title: "Tronx Group — Crecimiento, Tecnología y Contenido",
    description:
      "Holding creativo-tecnológico: Tronx Strategy, Dekaelo Media, Tronx TV y Echevensko.",
    url: "https://www.tronxgroup.com",
    images: ["/og-tronx.jpg"],
    type: "website",
    siteName: "Tronx Group",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Group — Crecimiento, Tecnología y Contenido",
    description:
      "Holding creativo-tecnológico: Tronx Strategy, Dekaelo Media, Tronx TV y Echevensko.",
    images: ["/og-tronx.jpg"],
    creator: "@TronxGroup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, maxSnippet: -1, maxImagePreview: "large" },
  },
  keywords: [
    "Tronx Group",
    "Tronx Strategy",
    "Dekaelo Media",
    "Tronx TV",
    "growth B2B",
    "CRM",
    "automatización",
    "video corporativo",
    "Chile",
  ],
  category: "business",
};

export default function Page() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tronx Group",
    url: "https://www.tronxgroup.com",
    logo: "https://www.tronxgroup.com/tronxgrouplogo.png",
    sameAs: [
      "https://x.com/TronxGroup",
      "https://www.dekaelomedia.com/",
      "https://www.tronxstrategy.com/",
    ],
    brand: [
      {
        "@type": "Brand",
        name: "Dekaelo Media",
        url: "https://www.dekaelomedia.com/",
        sameAs: [
          "https://www.instagram.com/dekaelo_media/",
          "https://www.linkedin.com/company/dekaelo-media/",
          "https://www.youtube.com/@dekaelo_media",
        ],
      },
      {
        "@type": "Brand",
        name: "Tronx Strategy",
        url: "https://www.tronxstrategy.com/",
        sameAs: [
          "https://www.linkedin.com/company/tronx-strategy",
          "https://www.instagram.com/tronx_strategy/",
        ],
      },
      {
        "@type": "Brand",
        name: "Tronx TV",
        url: "https://www.tronxgroup.com/#tronxtv",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+56-9-2008-0031",
        contactType: "customer service",
        areaServed: "CL",
        availableLanguage: ["es", "en"],
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tronx Group",
    url: "https://www.tronxgroup.com",
  };

  return (
    <>
      <Script
        id="jsonld-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <Script
        id="jsonld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      <Landing />
    </>
  );
}

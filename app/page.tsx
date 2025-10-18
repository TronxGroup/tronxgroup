import type { Metadata } from "next";
import Script from "next/script";
import Landing from "./_components/Landing";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxgroup.com"),
  title: "Tronx Group — Sistemas que escalan",
  description:
    "Holding creativo-tecnológico: Strategy (growth B2B), Dekaelo Media (audiovisual) y Tronx TV (plataforma editorial). Embudos con CRM, Ads y reporting.",
  alternates: { canonical: "https://www.tronxgroup.com" },
  openGraph: {
    title: "Tronx Group — Sistemas que escalan",
    description:
      "Estrategia, tecnología y narrativa con resultados reales. Embudos con CRM, Ads y reporting.",
    url: "https://www.tronxgroup.com",
    images: ["/og-tronx.jpg"],
    type: "website",
    siteName: "Tronx Group",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Group — Sistemas que escalan",
    description:
      "Holding creativo-tecnológico: Strategy, Dekaelo Media y Tronx TV.",
    images: ["/og-tronx.jpg"],
    creator: "@TronxGroup",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  keywords: [
    "Tronx Group","Tronx Strategy","Dekaelo Media","Tronx TV",
    "growth B2B","CRM","automatización","video corporativo","Chile",
  ],
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
          "https://www.instagram.com/tronxstrategy/",
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
      <Script id="jsonld-org" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Script id="jsonld-website" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
      <Landing />
    </>
  );
}

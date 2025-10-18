import type { Metadata } from "next";
import Script from "next/script";
import TronxLanding from "./_components/TronxLanding";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxgroup.com"),
  title: "Tronx Group — Sistemas que escalan",
  description:
    "Holding creativo–tecnológico: Strategy (growth B2B), Dekaelo Media (audiovisual) y Tronx TV (plataforma editorial). Operación 100 % cloud con métricas.",
  alternates: { canonical: "https://www.tronxgroup.com" },
  openGraph: {
    title: "Tronx Group — Sistemas que escalan",
    description:
      "Creatividad, tecnología y narrativa integradas en un solo sistema cloud.",
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
      "Holding creativo–tecnológico con estrategia, audiovisual y medios.",
    images: ["/og-tronx.jpg"],
    creator: "@TronxGroup",
  },
  icons: {
    icon: "/favicon_tronxgroup.png",
    shortcut: "/favicon_tronxgroup.png",
    apple: "/favicon_tronxgroup.png",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tronx Group",
    url: "https://www.tronxgroup.com",
    logo: "https://www.tronxgroup.com/tronxgrouplogo.png",
    sameAs: ["https://x.com/TronxGroup", "https://www.linkedin.com/company/tronx-group"],
    brand: [
      { "@type": "Brand", name: "Tronx Strategy", url: "https://www.tronxstrategy.com" },
      { "@type": "Brand", name: "Dekaelo Media", url: "https://www.dekaelomedia.com" },
      { "@type": "Brand", name: "Tronx TV", url: "https://www.tronxtv.com" },
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

  return (
    <>
      <Script id="jsonld-org" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <TronxLanding />
    </>
  );
}

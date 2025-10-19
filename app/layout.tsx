// /app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxgroup.com"),
  applicationName: "Tronx Group",
  title: {
    default: "Tronx Group SpA",
    template: "%s | Tronx Group",
  },
  description:
    "Holding creativo–tecnológico: estrategia digital, producción audiovisual y plataforma editorial operadas 100 % en la nube.",
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
  alternates: { canonical: "https://www.tronxgroup.com" },
  openGraph: {
    type: "website",
    url: "https://www.tronxgroup.com",
    siteName: "Tronx Group",
    title: "Tronx Group — Creatividad, tecnología y crecimiento real",
    description:
      "Tronx Group integra Strategy, Dekaelo Media y Tronx TV bajo un modelo 100 % cloud con métricas claras.",
    images: [
      {
        url: "/og-tronx.jpg", // 1200x630 recomendado
        width: 1200,
        height: 630,
        alt: "Tronx Group",
      },
    ],
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@TronxGroup",
    title: "Tronx Group — Creatividad, tecnología y crecimiento real",
    description:
      "Holding creativo–tecnológico: Strategy, Dekaelo Media y Tronx TV. Operación 100 % cloud.",
    images: ["/og-tronx.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon_tronxgroup.png",
    shortcut: "/favicon_tronxgroup.png",
    apple: "/favicon_tronxgroup.png",
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0C132B", // azul Tronx
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tronx Group SpA",
    url: "https://www.tronxgroup.com",
    logo: "https://www.tronxgroup.com/tronxgrouplogo.png",
    sameAs: [
      "https://x.com/TronxGroup",
      "https://www.linkedin.com/company/tronx-group",
      "https://www.tronxstrategy.com/",
      "https://www.dekaelomedia.com/",
      "https://www.tronxtv.com/",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+56-9-2008-0031",
        email: "info@tronxgroup.com",
        contactType: "customer service",
        areaServed: "CL",
        availableLanguage: ["es", "en"],
      },
    ],
    department: [
      {
        "@type": "Organization",
        name: "Tronx Strategy",
        url: "https://www.tronxstrategy.com/",
      },
      {
        "@type": "Organization",
        name: "Dekaelo Media",
        url: "https://www.dekaelomedia.com/",
      },
      {
        "@type": "Organization",
        name: "Tronx TV",
        url: "https://www.tronxtv.com/",
      },
    ],
  };

  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        {/* JSON-LD de organización */}
        <Script
          id="jsonld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}

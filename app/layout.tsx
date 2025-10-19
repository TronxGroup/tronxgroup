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
    "producción audiovisual",
    "inteligencia de datos",
    "video corporativo",
    "Chile",
    "estrategia cloud",
    "ecosistema digital",
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
        url: "/og-tronx.jpg",
        width: 1200,
        height: 630,
        alt: "Tronx Group — Growth, Media & Cloud Systems",
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
  themeColor: "#0C132B",
  colorScheme: "dark light",
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
        description:
          "Unidad de estrategia y crecimiento B2B con enfoque en performance, CRM y automatización.",
      },
      {
        "@type": "Organization",
        name: "Dekaelo Media",
        url: "https://www.dekaelomedia.com/",
        description:
          "Estudio audiovisual estratégico: branding, institucional, ficción y performance content.",
      },
      {
        "@type": "Organization",
        name: "Tronx TV",
        url: "https://www.tronxtv.com/",
        description:
          "Plataforma editorial y de contenidos originales en video: reality, documental, conversación y ficción.",
      },
    ],
  };

  return (
    <html
      lang="es"
      className={`${inter.variable} scroll-smooth antialiased selection:bg-sky-500/20 selection:text-sky-300`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="jsonld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>

      <body className="relative min-h-screen bg-gradient-to-b from-[#0A0F21] via-[#0B1126] to-[#0C132B] text-slate-100 tracking-tight">
        {/* Fondo decorativo global (brillos Tronx) */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-sky-500/10 blur-[160px] rounded-full motion-safe:animate-floatSlowReverse" />
          <div className="absolute bottom-[-300px] right-[-200px] w-[700px] h-[700px] bg-indigo-500/10 blur-[180px] rounded-full motion-safe:animate-floatSlow" />
        </div>

        {/* Contenido */}
        {children}
      </body>
    </html>
  );
}

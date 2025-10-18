import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxgroup.com"),
  applicationName: "Tronx Group",
  title: {
    default: "Tronx Group — Sistemas que escalan",
    template: "%s | Tronx Group",
  },
  description:
    "Holding creativo–tecnológico: Strategy (growth B2B), Dekaelo Media (audiovisual) y Tronx TV (plataforma editorial). Operación 100 % cloud con métricas.",
  keywords: [
    "Tronx Group",
    "Tronx Strategy",
    "Dekaelo Media",
    "Tronx TV",
    "growth B2B",
    "CRM",
    "automatización",
    "embudos",
    "video corporativo",
    "Chile",
  ],
  alternates: { canonical: "https://www.tronxgroup.com/" },
  openGraph: {
    title: "Tronx Group — Sistemas que escalan",
    description:
      "Creatividad, tecnología y narrativa integradas en un solo sistema cloud.",
    url: "https://www.tronxgroup.com/",
    siteName: "Tronx Group",
    type: "website",
    images: ["/og-tronx.jpg"], // coloca /public/og-tronx.jpg (1200x630)
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
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0EA5E9",      // azul Tronx
  colorScheme: "light",       // sitio en modo claro
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

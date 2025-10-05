import "./globals.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxgroup.com"),
  applicationName: "Tronx Group",
  title: {
    default: "Tronx Group SpA",
    template: "%s | Tronx Group",
  },
  description:
    "Creatividad, estrategia y narrativa desde Chile hacia el mundo.",
  keywords: [
    "Tronx Group",
    "Tronx Strategy",
    "Dekaelo Media",
    "Tronx TV",
    "growth",
    "B2B",
    "contenido",
    "CRM",
    "automatización",
  ],
  alternates: {
    canonical: "https://www.tronxgroup.com/",
  },
  openGraph: {
    title: "Tronx Group SpA",
    description:
      "Holding creativo-tecnológico que integra estrategia, contenido y sistemas para crecer con propósito.",
    url: "https://www.tronxgroup.com/",
    siteName: "Tronx Group",
    type: "website",
    // Si tienes una imagen OG, colócala en /public/og-tronx.jpg y descomenta:
    // images: ["/og-tronx.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Group SpA",
    description:
      "Creatividad, estrategia y narrativa desde Chile hacia el mundo.",
    // images: ["/og-tronx.jpg"],
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
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

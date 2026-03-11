// tronxgroup/app/layout.tsx

import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxgroup.com"),
  title: {
    default: "Tronx Group SpA",
    template: "%s | Tronx Group SpA",
  },
  description:
    "Tronx Group SpA es una sociedad operativa independiente orientada a administración, facturación, control financiero y continuidad operativa de unidades especializadas.",
  applicationName: "Tronx Group SpA",
  category: "Business",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon_tronx_web.png" }],
    apple: [{ url: "/favicon_tronx_web.png" }],
  },
  openGraph: {
    title: "Tronx Group SpA",
    description:
      "Sociedad operativa independiente orientada a administración, facturación y continuidad operativa.",
    url: "https://www.tronxgroup.com",
    siteName: "Tronx Group SpA",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "/og-tronx.jpg",
        width: 1200,
        height: 630,
        alt: "Tronx Group SpA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Group SpA",
    description:
      "Sociedad operativa independiente orientada a administración, facturación y continuidad operativa.",
    images: ["/og-tronx.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const GA_ID = "G-3ZXV73VV96";

function Analytics() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga-tronx" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}

function NavLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900"
    >
      {children}
    </a>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white text-neutral-900 antialiased">
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        <Analytics />

        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tronx Group SpA",
            legalName: "Tronx Group SpA",
            url: "https://www.tronxgroup.com",
            logo: "https://www.tronxgroup.com/logo_tronx_web.png",
            description:
              "Sociedad operativa independiente orientada a administración, facturación, control financiero y continuidad operativa.",
            email: "info@tronxgroup.com",
            telephone: "+56 9 2008 0031",
            address: {
              "@type": "PostalAddress",
              addressCountry: "CL",
            },
            sameAs: ["https://x.com/TronxGroup"],
          })}
        </Script>

        <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
            <a href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9">
                <Image
                  src="/logo_tronx_web.png"
                  alt="Tronx Group SpA"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="leading-tight">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-900">
                  Tronx Group
                </p>
                <p className="hidden text-[10px] text-neutral-500 sm:block">
                  Tronx Group SpA
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-7 md:flex">
              <NavLink href="#perfil">Perfil</NavLink>
              <NavLink href="#unidades">Unidades</NavLink>
              <NavLink href="#contacto">Contacto</NavLink>
            </div>

            <a
              href="#contacto"
              className="text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Contacto
            </a>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mt-16 border-t border-neutral-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3 text-sm text-neutral-600">
                <p className="font-medium text-neutral-900">Tronx Group SpA</p>
                <p>
                  Sociedad operativa independiente orientada a administración,
                  facturación y continuidad operativa.
                </p>
                <p className="text-xs text-neutral-500">
                  © {currentYear} Tronx Group SpA
                </p>
              </div>

              <div className="space-y-3 text-sm md:text-right">
                <p>
                  <a
                    href="mailto:info@tronxgroup.com"
                    className="text-neutral-900 hover:text-neutral-600"
                  >
                    info@tronxgroup.com
                  </a>
                </p>

                <p>
                  <a
                    href="https://wa.me/56920080031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 hover:text-neutral-600"
                  >
                    +56 9 2008 0031
                  </a>
                </p>

                <p>
                  <a
                    href="https://x.com/TronxGroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 hover:text-neutral-600"
                  >
                    X / @TronxGroup
                  </a>
                </p>

                <p className="text-xs text-neutral-500">
                  Tronx Group SpA es la razón social de facturación y
                  administración.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

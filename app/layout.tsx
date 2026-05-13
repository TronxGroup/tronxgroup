// app/layout.tsx

import "./globals.css";

import type {
  Metadata,
  Viewport,
} from "next";

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
    "Tronx Group SpA es una sociedad operativa independiente orientada a administración y continuidad operativa.",

  applicationName: "Tronx Group SpA",

  category: "Business",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [{ url: "/favicon_tronx_web.png" }],
    apple: [{ url: "/favicon_tronx_web.png" }],
  },

  openGraph: {
    title: "Tronx Group SpA",

    description:
      "Sociedad operativa independiente orientada a administración y continuidad operativa.",

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
      "Sociedad operativa independiente orientada a administración y continuidad operativa.",

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

      <Script
        id="ga-tronx"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            dataLayer.push(arguments);
          }

          gtag('js', new Date());

          gtag('config', '${GA_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-neutral-500 transition hover:text-black"
    >
      {children}
    </a>
  );
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html
      lang="es"
      suppressHydrationWarning
    >
      <body className="bg-white text-black antialiased">

        {/* PRECONNECT */}
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
        />

        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
        />

        {/* ANALYTICS */}
        <Analytics />

        {/* STRUCTURED DATA */}
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

            logo:
              "https://www.tronxgroup.com/logo_tronx_web.png",

            description:
              "Sociedad operativa independiente orientada a administración y continuidad operativa.",

            email: "info@tronxgroup.com",

            address: {
              "@type": "PostalAddress",
              addressCountry: "CL",
            },
          })}
        </Script>

        {/* HEADER */}
        <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">

          <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">

            {/* LOGO */}
            <a
              href="/"
              className="flex items-center gap-3"
            >

              <div className="relative h-9 w-9">

                <Image
                  src="/logo_tronx_web.png"
                  alt="Tronx Group"
                  fill
                  priority
                  className="object-contain"
                />

              </div>

              <div className="leading-tight">

                <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Tronx Group
                </p>

              </div>

            </a>

            {/* NAV */}
            <div className="hidden items-center gap-8 md:flex">

              <NavLink href="#perfil">
                Perfil
              </NavLink>

              <NavLink href="#unidades">
                Unidades
              </NavLink>

              <NavLink href="#contacto">
                Contacto
              </NavLink>

            </div>

          </nav>

        </header>

        {/* PAGE */}
        <main>
          {children}
        </main>

        {/* FOOTER */}
        <footer className="border-t border-neutral-200 bg-white">

          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-sm font-medium text-black">
                Tronx Group SpA
              </p>

              <p className="mt-1 text-sm text-neutral-500">
                Sociedad operativa independiente.
              </p>

            </div>

            <div className="text-sm text-neutral-500 sm:text-right">

              <a
                href="mailto:info@tronxgroup.com"
                className="transition hover:text-black"
              >
                info@tronxgroup.com
              </a>

              <p className="mt-2 text-xs text-neutral-400">
                © {currentYear} Tronx Group SpA
              </p>

            </div>

          </div>

        </footer>

      </body>
    </html>
  );
}

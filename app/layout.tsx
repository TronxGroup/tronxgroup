// tronxgroup/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxgroup.com"),
  title: {
    default: "Tronx Group — Grupo corporativo independiente",
    template: "%s · Tronx Group",
  },
  description:
    "Tronx Group SpA es un grupo corporativo independiente especializado en comunicación audiovisual, operación digital y desarrollo editorial.",
  applicationName: "Tronx Group",
  category: "Business",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon_tronx_web.png" }],
    apple: [{ url: "/favicon_tronx_web.png" }],
  },
  openGraph: {
    title: "Tronx Group — Grupo corporativo independiente",
    description:
      "Comunicación audiovisual, operación digital y activos editoriales bajo un estándar estratégico común.",
    url: "https://www.tronxgroup.com",
    siteName: "Tronx Group",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "/og-tronx.jpg",
        width: 1200,
        height: 630,
        alt: "Tronx Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Group — Grupo corporativo independiente",
    description:
      "Comunicación audiovisual y operación digital con estructura estratégica común.",
    images: ["/og-tronx.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
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
      className="relative text-xs font-medium text-slate-600 transition-colors hover:text-slate-900"
    >
      {children}
    </a>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900 antialiased">

        {/* Performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        <Analytics />

        {/* JSON-LD Organization */}
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tronx Group SpA",
            url: "https://www.tronxgroup.com",
            logo: "https://www.tronxgroup.com/logo_tronx_web.png",
            description:
              "Grupo corporativo independiente especializado en comunicación audiovisual y operación digital.",
            email: "info@tronxgroup.com",
            telephone: "+56 9 2008 0031",
            address: {
              "@type": "PostalAddress",
              addressCountry: "CL",
            },
          })}
        </Script>

        {/* HEADER */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <div className="relative h-9 w-9 md:h-11 md:w-11">
                <Image
                  src="/logo_tronx_web.png"
                  alt="Tronx Group"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="leading-tight">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-slate-800">
                  Tronx Group
                </p>
                <p className="hidden text-[10px] text-slate-500 md:block">
                  Grupo corporativo independiente
                </p>
              </div>
            </a>

            {/* Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <NavLink href="#enfoque">Enfoque</NavLink>
              <NavLink href="#marcas">Marcas</NavLink>
              <NavLink href="#contacto">Contacto</NavLink>
            </div>

            {/* Contact CTA minimal */}
            <a
              href="#contacto"
              className="hidden rounded-full border border-slate-300 px-4 py-1.5 text-[11px] font-semibold text-slate-800 transition hover:border-slate-900 sm:inline-flex"
            >
              Contacto
            </a>

            <a
              href="#contacto"
              className="inline-flex rounded-full border border-slate-300 px-3 py-1.5 text-[11px] font-semibold text-slate-800 sm:hidden"
            >
              →
            </a>
          </nav>
        </header>

        {/* MAIN */}
        <main>{children}</main>

        {/* FOOTER */}
        <footer className="mt-20 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

            <div className="grid gap-8 md:grid-cols-2">

              {/* Left */}
              <div className="space-y-3 text-sm text-slate-600">
                <p className="font-semibold text-slate-900">
                  Tronx Group SpA
                </p>
                <p>
                  Grupo corporativo independiente especializado en
                  comunicación audiovisual y operación digital.
                </p>
                <p className="text-xs text-slate-500">
                  © {currentYear} Tronx Group SpA. Todos los derechos reservados.
                </p>
              </div>

              {/* Right */}
              <div className="space-y-3 text-sm md:text-right">
                <p>
                  <a
                    href="mailto:info@tronxgroup.com"
                    className="font-medium text-slate-800 hover:text-slate-600"
                  >
                    info@tronxgroup.com
                  </a>
                </p>
                <p>
                  <a
                    href="https://wa.me/56920080031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-slate-800 hover:text-slate-600"
                  >
                    +56 9 2008 0031
                  </a>
                </p>
                <p className="text-xs text-slate-500">
                  Tronx Group SpA es la razón social de facturación.
                </p>
              </div>

            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}

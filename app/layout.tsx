// tronxgroup/app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tronxgroup.com"),
  title: {
    default: "Tronx Group SpA — firma especializada en audiovisual & WebOps",
    template: "%s · Tronx Group",
  },
  description:
    "Tronx Group SpA opera como firma especializada (célula experta) para organizaciones: producción audiovisual premium, WebOps (sitios + medición + CRM) y formatos editoriales.",
  applicationName: "Tronx Group",
  category: "Business",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon_tronx_web.png" }],
    apple: [{ url: "/favicon_tronx_web.png" }],
  },
  openGraph: {
    title: "Tronx Group — audiovisual premium & WebOps",
    description:
      "Firma especializada para organizaciones: producción audiovisual, operación digital medible (web + CRM) y formatos editoriales como Reality Day.",
    url: "https://www.tronxgroup.com",
    siteName: "Tronx Group",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "/og-tronx.jpg", // crea este asset si no lo tienes
        width: 1200,
        height: 630,
        alt: "Tronx Group — audiovisual premium & WebOps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Group — audiovisual premium & WebOps",
    description:
      "Firma especializada para organizaciones: producción audiovisual, WebOps (web + medición + CRM) y formatos editoriales.",
    images: ["/og-tronx.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const GA_ID = "G-3ZXV73VV96";

// ✅ Recomendación: mueve esto a env vars cuando puedas (NEXT_PUBLIC_GA_ID)
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
          gtag('config', '${GA_ID}', {
            anonymize_ip: true,
            send_page_view: true
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
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center gap-1 text-xs font-medium text-slate-600 transition-colors hover:text-sky-700"
    >
      <span>{children}</span>
      <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-sky-500/70 transition-transform duration-200 origin-center group-hover:scale-x-100" />
    </a>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <Analytics />

        {/* JSON-LD (Organization) — sin hablar de “holding” */}
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Tronx Group SpA",
            url: "https://www.tronxgroup.com",
            logo: "https://www.tronxgroup.com/logo_tronx_web.png",
            sameAs: [
              "https://x.com/TronxGroup",
              // agrega otras si corresponde
            ],
            description:
              "Firma especializada (célula experta) en producción audiovisual premium y WebOps (web + medición + CRM) para organizaciones.",
            email: "info@tronxgroup.com",
            telephone: "+56 9 2008 0031",
            address: {
              "@type": "PostalAddress",
              addressCountry: "CL",
            },
          })}
        </Script>

        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>

      <body className="bg-slate-50 text-slate-900 antialiased">
        {/* HEADER */}
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Brand */}
            <a href="#top" className="flex items-center gap-3">
              <div className="relative h-10 w-10 md:h-12 md:w-12">
                <Image
                  src="/logo_tronx_web.png"
                  alt="Tronx Group"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="leading-tight">
                <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-600">
                  Tronx Group
                </p>
                <p className="hidden text-[10px] font-medium text-slate-500 md:block">
                  Firma especializada · Audiovisual &amp; WebOps
                </p>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-6 md:flex">
              <NavLink href="#servicios">Soluciones</NavLink>
              <NavLink href="#unidades">Líneas</NavLink>
              <NavLink href="#modelo">Modelo cloud</NavLink>
              <NavLink href="#iniciativas">Activos propios</NavLink>
              <NavLink href="#contacto">Contacto</NavLink>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="hidden items-center rounded-full border border-sky-600/60 bg-sky-600 px-3 py-1.5 text-[11px] font-semibold text-white transition-colors hover:border-sky-500 hover:bg-sky-500 sm:inline-flex"
            >
              Agendar reunión
            </a>

            {/* Mobile quick CTA */}
            <a
              href="#contacto"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-sm transition hover:border-sky-500 hover:text-sky-700 sm:hidden"
            >
              Contacto
            </a>
          </nav>
        </header>

        {/* CONTENIDO */}
        <main id="top">{children}</main>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p>© {currentYear} Tronx Group SpA. Todos los derechos reservados.</p>
                <p className="text-[11px] text-slate-500">
                  Tronx Group SpA es la razón social de facturación. Las marcas operan como líneas de solución.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:items-end">
                <p className="text-slate-600">
                  <a
                    href="mailto:info@tronxgroup.com"
                    className="font-semibold text-sky-700 hover:text-sky-600"
                  >
                    info@tronxgroup.com
                  </a>{" "}
                  ·{" "}
                  <a
                    href="https://wa.me/56920080031"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-sky-700 hover:text-sky-600"
                  >
                    +56 9 2008 0031
                  </a>
                </p>

                <a
                  href="https://x.com/TronxGroup"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-sky-700"
                >
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-300 text-[10px] font-semibold leading-none">
                    X
                  </span>
                  <span className="text-xs font-medium">@TronxGroup</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

// app/layout.tsx

import "./globals.css";

import type {
  Metadata,
  Viewport,
} from "next";

import type { ReactNode } from "react";

import Image from "next/image";

export const metadata: Metadata = {
  title: "Tronx Group",
  description: "Tronx Group",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

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
                Estructura operativa independiente.
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

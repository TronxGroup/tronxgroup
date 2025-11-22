// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tronx Group SpA — Holding creativo-tecnológico",
  description:
    "Tronx Group SpA es un holding creativo-tecnológico chileno que integra producción audiovisual, desarrollo web, medios editoriales y plataformas territoriales.",
  metadataBase: new URL("https://www.tronxgroup.com"),
  openGraph: {
    title: "Tronx Group SpA — Holding creativo-tecnológico",
    description:
      "Producción audiovisual, desarrollo web moderno, medios digitales y SANRAVAL: el directorio territorial del eje Santiago–Rancagua–Valparaíso.",
    url: "https://www.tronxgroup.com",
    siteName: "Tronx Group",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900">
       {/* HEADER */}
<header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
  <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">

    {/* Marca Tronx */}
    <Link href="#top" className="flex items-center gap-3">
      {/* Logo real */}
      <div className="relative h-8 w-8">
        <Image
          src="/logo_tronx_web.png"
          alt="Tronx Group"
          fill
          className="object-contain"
        />
      </div>

      {/* Texto único */}
      <span className="text-[11px] font-semibold tracking-[0.20em] uppercase text-slate-600">
        Creative-Tech Holding
      </span>
    </Link>

    {/* Menú principal desktop */}
    <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
      <a
        href="#servicios"
        className="group relative inline-flex items-center gap-1 hover:text-sky-700 transition-colors"
      >
        <span>Soluciones</span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-sky-500/70 transition-transform duration-200 origin-center group-hover:scale-x-100" />
      </a>

      <a
        href="#unidades"
        className="group relative inline-flex items-center hover:text-sky-700 transition-colors"
      >
        <span>Holding</span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-sky-500/70 transition-transform duration-200 origin-center group-hover:scale-x-100" />
      </a>

      <a
        href="#modelo"
        className="group relative inline-flex items-center hover:text-sky-700 transition-colors"
      >
        <span>Modelo cloud</span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-sky-500/70 transition-transform duration-200 origin-center group-hover:scale-x-100" />
      </a>

      <a
        href="#iniciativas"
        className="group relative inline-flex items-center hover:text-sky-700 transition-colors"
      >
        <span>Proyectos propios</span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-sky-500/70 transition-transform duration-200 origin-center group-hover:scale-x-100" />
      </a>

      <a
        href="#contacto"
        className="group relative inline-flex items-center hover:text-sky-700 transition-colors"
      >
        <span>Contacto</span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-sky-500/70 transition-transform duration-200 origin-center group-hover:scale-x-100" />
      </a>
    </div>

    {/* CTA */}
    <a
      href="#contacto"
      className="hidden sm:inline-flex items-center rounded-full border border-sky-600/60 bg-sky-600 px-3 py-1.5 text-[11px] font-medium text-white hover:bg-sky-500 hover:border-sky-500 transition-colors"
    >
      Hablar con Tronx
    </a>

  </nav>
</header>

        {/* CONTENIDO */}
        <main id="top">{children}</main>

        {/* FOOTER */}
        <footer className="border-t border-slate-200 mt-12 bg-white">
          <div className="section py-7 text-xs flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-slate-500">
            <p>
              © {currentYear} Tronx Group SpA. Todos los derechos reservados.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p>
                <a
                  href="mailto:info@tronxgroup.com"
                  className="text-sky-700 hover:text-sky-600"
                >
                  info@tronxgroup.com
                </a>{" "}
                · +56 9 2008 0031
              </p>
              <div className="flex items-center gap-2">
                <a
                  href="https://x.com/TronxGroup"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-500 hover:text-sky-700"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-[10px] leading-none">
                    X
                  </span>
                  <span>@TronxGroup</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

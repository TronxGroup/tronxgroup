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
      <body className="bg-tronx-bg text-slate-100">
        <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-black/60 backdrop-blur">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            <Link href="#top" className="flex items-center gap-2">
              {/* Reemplaza este bloque por tu logo real en /public si quieres */}
              <div className="h-7 w-7 rounded-lg bg-cyan-400/80 blur-[1px]" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-[0.22em] uppercase text-slate-400">
                  Tronx Group
                </span>
                <span className="text-[11px] text-slate-400">
                  Creative-Tech Holding
                </span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
              <a href="#unidades" className="hover:text-cyan-300">
                Unidades
              </a>
              <a href="#modelo" className="hover:text-cyan-300">
                Modelo Cloud
              </a>
              <a href="#domo" className="hover:text-cyan-300">
                DOMO
              </a>
              <a href="#sanraval" className="hover:text-cyan-300">
                SANRAVAL
              </a>
              <a href="#contacto" className="hover:text-cyan-300">
                Contacto
              </a>
            </div>
            <a
              href="#contacto"
              className="hidden sm:inline-flex btn-primary text-xs"
            >
              Hablar con Tronx
            </a>
          </nav>
        </header>

        <main id="top">{children}</main>

        <footer className="border-t border-slate-800/70 mt-12">
          <div className="section py-8 text-xs flex flex-col sm:flex-row gap-3 sm:items-center justify-between text-slate-400">
            <p>
              © {currentYear} Tronx Group SpA. Todos los derechos reservados.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p>
                <a
                  href="mailto:info@tronxgroup.com"
                  className="text-cyan-300 hover:text-cyan-200"
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
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-cyan-300"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-600 text-[10px] leading-none">
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

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
      <body className="bg-slate-950 text-slate-100">
        <header className="sticky top-0 z-30 border-b border-slate-800/70 bg-black/60 backdrop-blur">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            {/* Marca Tronx */}
            <Link href="#top" className="flex items-center gap-2">
              {/* Reemplaza este bloque por tu logo real en /public si quieres */}
              <div className="h-7 w-7 rounded-lg bg-sky-400/80 blur-[1px]" />
              <div className="flex flex-col leading-tight">
                <span className="text-[11px] font-semibold tracking-[0.24em] uppercase text-slate-400">
                  TRONX GROUP
                </span>
                <span className="text-[11px] text-slate-500">
                  Creative-Tech Holding
                </span>
              </div>
            </Link>

            {/* Menú principal desktop */}
            <div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
              <a
                href="#servicios"
                className="relative inline-flex items-center gap-1 hover:text-sky-300 transition-colors"
              >
                <span>Soluciones</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-sky-400/70 transition-transform duration-200 origin-center group-hover:scale-x-100" />
              </a>
              <a
                href="#unidades"
                className="relative inline-flex items-center hover:text-sky-300 transition-colors group"
              >
                <span>Holding</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-sky-400/70 transition-transform duration-200 origin-center group-hover:scale-x-100" />
              </a>
              <a
                href="#modelo"
                className="relative inline-flex items-center hover:text-sky-300 transition-colors group"
              >
                <span>Modelo cloud</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-sky-400/70 transition-transform duration-200 origin-center group-hover:scale-x-100" />
              </a>
              <a
                href="#iniciativas"
                className="relative inline-flex items-center hover:text-sky-300 transition-colors group"
              >
                <span>Proyectos propios</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-sky-400/70 transition-transform duration-200 origin-center group-hover:scale-x-100" />
              </a>
              <a
                href="#contacto"
                className="relative inline-flex items-center hover:text-sky-300 transition-colors group"
              >
                <span>Contacto</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-sky-400/70 transition-transform duration-200 origin-center group-hover:scale-x-100" />
              </a>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              className="hidden sm:inline-flex items-center rounded-full border border-sky-500/60 bg-sky-500/10 px-3 py-1.5 text-[11px] font-medium text-sky-100 hover:bg-sky-500/20 hover:border-sky-400 transition-colors"
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
                  className="text-sky-300 hover:text-sky-200"
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
                  className="inline-flex items-center gap-1 text-slate-400 hover:text-sky-300"
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

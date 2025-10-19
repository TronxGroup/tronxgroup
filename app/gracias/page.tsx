// app/gracias/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gracias | Tronx Group",
  description: "Gracias por contactarnos. Hemos recibido tu mensaje.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/gracias" },
};

export default function GraciasPage() {
  return (
    <main
      className="min-h-screen text-blue-50"
      style={{
        background:
          "radial-gradient(900px 520px at 90% -10%, rgba(14,165,233,0.12), transparent 60%), linear-gradient(180deg, #0C132B 0%, #0E1633 100%)",
      }}
    >
      {/* NAV mínimo */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[rgba(12,19,43,0.80)] bg-[rgba(12,19,43,0.92)] border-b border-white/10">
        <div className="section flex items-center justify-between py-3">
          <Link href="/" aria-label="Volver al inicio" className="flex items-center">
            <Image
              src="/tronxgrouplogo.png"
              alt="Tronx Group"
              width={48}
              height={48}
              priority
            />
          </Link>
        </div>
      </nav>

      {/* HERO de confirmación */}
      <header className="relative overflow-hidden bg-[#0B1126]">
        <div className="absolute inset-0 bg-[url('/BG_tronx_group.jpg')] bg-cover bg-center opacity-15 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0C132B]/60 to-[#0A0F21]" />

        <div className="relative section py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(59,130,246,0.4)]">
              ¡Gracias! Hemos recibido tu mensaje.
            </h1>
            <p className="mt-4 text-blue-100/90">
              Nuestro equipo revisará tu solicitud y se pondrá en contacto a la
              brevedad. Si necesitas adjuntar material o darnos más contexto,
              puedes escribir a <span className="text-white font-semibold">info@tronxgroup.com</span>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/#top"
                className="btn btn-primary !bg-sky-600 hover:!bg-sky-500 text-white"
              >
                Volver al inicio
              </Link>
              <Link
                href="/#contacto"
                className="btn border border-white/50 text-white/95 font-semibold hover:bg-white/15 backdrop-blur-md"
              >
                Enviar otro mensaje
              </Link>
              <a
                href="/catalogo/tronxgroup_catalogo_2026.pdf"
                className="btn btn-secondary hover:bg-sky-100/90"
                download
              >
                Descargar catálogo
              </a>
            </div>

            <div className="mt-6 text-xs text-blue-200/85">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Ticket creado en CRM
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Tarjeta de atajos */}
      <section className="py-12">
        <div className="section">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
            <h2 className="text-white text-xl font-semibold">¿Qué sigue?</h2>
            <ul className="mt-3 space-y-2 text-blue-100/90">
              <li>• Te contactaremos al correo indicado para coordinar el siguiente paso.</li>
              <li>• Si lo prefieres, conversa directo por WhatsApp:{" "}
                <a
                  className="underline hover:text-white"
                  href="https://wa.me/56920080031"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +56 9 2008 0031
                </a>
              </li>
              <li>• Explora nuestras unidades:{" "}
                <Link className="underline hover:text-white" href="/#unidades">
                  Tronx Strategy, Dekaelo Media y Tronx TV
                </Link>.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER compacto */}
      <footer className="mt-0 border-t border-white/10 bg-[#0C132B] text-blue-100/90">
        <div className="section py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/tronxgrouplogo.png" alt="Tronx Group" width={20} height={20} />
            <span className="text-xs">
              © 2025 Tronx Group SpA — Todos los derechos reservados
            </span>
          </div>
          <div className="text-xs">
            <Link href="/#contacto" className="hover:text-white">Contacto</Link>
            <span className="mx-2 opacity-50">•</span>
            <a
              className="hover:text-white"
              href="https://www.linkedin.com/company/tronx-group"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="mx-2 opacity-50">•</span>
            <a
              className="hover:text-white"
              href="https://x.com/TronxGroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

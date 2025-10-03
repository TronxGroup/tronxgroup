'use client'

import React from "react";
import {
  ArrowRight,
  Video,
  LineChart,
  Tv,
  Mail,
  Phone,
  Globe,
  ExternalLink,
} from "lucide-react";

// ===== Helpers =====
const Section = ({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition hover:bg-white/10">
    {children}
  </div>
);

// ===== Data =====
const LINKS = {
  tronx: {
    phone: "+56 9 2008 0031",
    email: "info@tronxgroup.com",
  },
  brands: {
    dekaelo: { site: "https://dekaleomedia.com" },
    strategy: { site: "https://tronxstrategy.com" },
    tv: { site: "https://tronxtv.com" },
  },
};

export default function Page() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nombre = data.get("nombre");
    const correo = data.get("correo");
    alert(`Gracias, ${nombre}. Te contactaremos a ${correo}.`);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 selection:bg-sky-500/30">
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <Section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/tronx-logo.png" alt="Tronx Group" className="h-8 w-8 rounded-lg object-contain" />
            <span className="text-sm font-semibold tracking-wider">TRONX GROUP SpA</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#marcas" className="hover:text-white">Marcas</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${LINKS.tronx.phone.replace(/\s/g, "")}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/5"
            >
              <Phone size={16}/> {LINKS.tronx.phone}
            </a>
            <a href="#contacto" className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-neutral-100">
              Conversemos <ArrowRight size={16} />
            </a>
          </div>
        </Section>
      </header>

      {/* HERO (muy breve) */}
      <Section className="py-16 sm:py-24 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Holding creativo y tecnológico con foco en impacto real
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-neutral-300">
          Tronx Group integra estrategia B2B, producción audiovisual y plataformas editoriales. Un solo equipo, tres marcas.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#marcas" className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow hover:bg-sky-400">
            Ver marcas <ArrowRight size={18} />
          </a>
          <a href={`mailto:${LINKS.tronx.email}`} className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/5">
            <Mail size={18}/> {LINKS.tronx.email}
          </a>
        </div>
      </Section>

      {/* MARCAS (solo lo esencial) */}
      <Section id="marcas" className="py-10">
        <h2 className="text-2xl sm:text-3xl font-bold">Marcas</h2>
        <p className="mt-2 text-neutral-300">Operamos como un ecosistema: cada marca aporta una pieza clave.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dekaelo Media */}
          <Card>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-500/20 p-2"><Video size={18} className="text-sky-300" /></div>
              <p className="text-sm font-semibold tracking-wide">Dekaelo Media</p>
            </div>
            <h3 className="mt-3 text-lg font-bold">Producción Audiovisual Estratégica</h3>
            <p className="mt-2 text-sm text-neutral-300">Contenido mensual con calidad cinematográfica: cápsulas, reels, vodcasts y piezas para campañas.</p>
            <a href={LINKS.brands.dekaelo.site} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-sky-300 hover:text-sky-200">
              <Globe size={14}/> Sitio <ExternalLink size={14}/>
            </a>
          </Card>

          {/* Tronx Strategy */}
          <Card>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-500/20 p-2"><LineChart size={18} className="text-emerald-300" /></div>
              <p className="text-sm font-semibold tracking-wide">Tronx Strategy</p>
            </div>
            <h3 className="mt-3 text-lg font-bold">Crecimiento B2B</h3>
            <p className="mt-2 text-sm text-neutral-300">Embudos, performance, CRM y automatizaciones para generar demanda y cerrar negocios.</p>
            <a href={LINKS.brands.strategy.site} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200">
              <Globe size={14}/> Sitio <ExternalLink size={14}/>
            </a>
          </Card>

          {/* Tronx TV */}
          <Card>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-fuchsia-500/20 p-2"><Tv size={18} className="text-fuchsia-300" /></div>
              <p className="text-sm font-semibold tracking-wide">Tronx TV</p>
            </div>
            <h3 className="mt-3 text-lg font-bold">Narrativas Originales</h3>
            <p className="mt-2 text-sm text-neutral-300">Canal editorial con documental, ficción y conversación en 4K UHD por temporadas.</p>
            <a href={LINKS.brands.tv.site} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm text-fuchsia-300 hover:text-fuchsia-200">
              <Globe size={14}/> Sitio <ExternalLink size={14}/>
            </a>
          </Card>
        </div>

        {/* Teléfono único */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm">
          <p>
            📞 Canal único de contacto:&nbsp;
            <a className="font-semibold hover:underline" href={`tel:${LINKS.tronx.phone.replace(/\s/g, "")}`}>
              {LINKS.tronx.phone}
            </a>
          </p>
        </div>
      </Section>

      {/* CONTACTO (breve) */}
      <Section id="contacto" className="py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Contacto</h2>
          <p className="mt-3 text-neutral-300">Cuéntanos tu contexto. Te respondemos con los próximos pasos.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid gap-3 text-left">
            <div className="grid sm:grid-cols-2 gap-3">
              <input name="nombre" required placeholder="Nombre" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" />
              <input name="correo" type="email" required placeholder="Correo" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" />
            </div>
            <input name="empresa" placeholder="Empresa (opcional)" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" />
            <textarea name="mensaje" required rows={4} placeholder="Cuéntanos brevemente tu necesidad" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" />
            <div className="grid gap-3 sm:grid-cols-3">
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-neutral-900 px-5 py-3 font-semibold hover:bg-neutral-100">
                Enviar <ArrowRight size={18}/>
              </button>
              <a href={`mailto:${LINKS.tronx.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/5">
                <Mail size={18}/> {LINKS.tronx.email}
              </a>
              <a href={`tel:${LINKS.tronx.phone.replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/5">
                <Phone size={18}/> {LINKS.tronx.phone}
              </a>
            </div>
          </form>
        </div>
      </Section>

      {/* FOOTER (mínimo) */}
      <footer className="border-t border-white/10 py-8 text-sm text-neutral-400">
        <Section className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Tronx Group SpA.</p>
          <div className="flex items-center gap-4">
            <a href="#marcas" className="hover:text-white">Marcas</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
            <a href="/privacidad" className="hover:text-white">Privacidad</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}

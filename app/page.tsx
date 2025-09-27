'use client'

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Video,
  Tv,
  Layers,
  LineChart,
  Mail,
  CheckCircle2,
  Globe,
  ExternalLink,
  Phone,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Twitter,
  Tiktok,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const Section = ({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </section>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide bg-white/5 border-white/10">
    {children}
  </span>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm transition hover:bg-white/10">
    {children}
  </div>
);

const SocialIcon = ({ platform, href }: { platform: 'linkedin' | 'instagram' | 'youtube' | 'facebook' | 'x' | 'tiktok'; href?: string }) => {
  const common = "h-5 w-5";
  const icon: Record<string, React.ReactNode> = {
    linkedin: <Linkedin className={common} />,
    instagram: <Instagram className={common} />,
    youtube: <Youtube className={common} />,
    facebook: <Facebook className={common} />,
    x: <Twitter className={common} />, // usar Twitter icon para X
    tiktok: <Tiktok className={common} />,
  };
  return (
    <a
      href={href || "#"}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-lg border border-white/10 px-2 py-1 text-xs text-neutral-300 hover:text-white hover:bg-white/5"
    >
      {icon[platform]}
      <span className="ml-2 capitalize hidden sm:inline">{platform}</span>
    </a>
  );
};

const LINKS = {
  tronxGroup: {
    phone: "+56 9 2008 0031",
    x: "https://x.com/tronxgroup", // TODO: ajustar handle si corresponde
    email: "hola@tronx.group",
  },
  brands: {
    dekaelo: {
      site: "https://dekaleomedia.com",
      socials: {
        linkedin: "#", // TODO: agregar handle oficial
        instagram: "#",
        youtube: "#",
      },
    },
    strategy: {
      site: "https://tronxstrategy.com",
      socials: {
        linkedin: "#",
      },
    },
    tv: {
      site: "https://tronxtv.com",
      socials: {
        youtube: "#",
        instagram: "#",
        tiktok: "#",
        facebook: "#",
      },
    },
  },
  partners: {
    apcc: {
      site: "https://asiapacific-chamber.com",
      socials: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
        youtube: "#",
      },
    },
    echevensko: {
      site: "https://empresas.echevensko.com",
      socials: {
        instagram: "#",
        linkedin: "#",
      },
    },
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 selection:bg-sky-500/30">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/70 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <Section className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <img src="/tronx-logo.png" alt="Tronx Group" className="h-8 w-8 rounded-lg object-contain" />
            <span className="text-sm font-semibold tracking-wider">TRONX GROUP SpA</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#marcas" className="hover:text-white">Marcas</a>
            <a href="#valor" className="hover:text-white">Propuesta de Valor</a>
            <a href="#ecosistema" className="hover:text-white">Ecosistema</a>
            <a href="#contacto" className="hover:text-white">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${LINKS.tronxGroup.phone.replace(/\s/g, "")}`}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-sm hover:bg-white/5"
            >
              <Phone size={16}/> {LINKS.tronxGroup.phone}
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-xl bg-white text-neutral-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-neutral-100"
            >
              Conversemos <ArrowRight size={16} />
            </a>
          </div>
        </Section>
      </header>

      {/* HERO */}
      <Section className="relative py-20 sm:py-28">
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={fadeUp.transition}
          className="mx-auto max-w-3xl text-center"
        >
          <Tag>
            <Rocket size={14} /> Creatividad · Estrategia · Narrativa
          </Tag>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Desde Chile hacia el mundo: marcas que <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">crecen</span> y <span className="bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">trascienden</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-neutral-300">
            Tronx Group SpA reúne marcas especializadas en audiovisual, estrategia B2B y contenidos editoriales para impulsar negocios y audiencias con impacto real.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#marcas"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-semibold text-white shadow hover:bg-sky-400"
            >
              Ver marcas <ArrowRight size={18} />
            </a>
            <a
              href={`https://wa.me/56920080031`}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/5"
            >
              WhatsApp directo
            </a>
          </div>
        </motion.div>

        {/* Hero background accents */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-sky-500/10 via-indigo-500/10 to-fuchsia-500/10 blur-3xl" />
      </Section>

      {/* QUIÉNES SOMOS */}
      <Section className="py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">Quiénes somos</p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Holding chileno liderado por Tomás Echeverría</h2>
          <p className="mt-4 text-neutral-300">
            Centralizamos administración, estrategia y producción en tres marcas que trabajan integradas para entregar resultados medibles y narrativas memorables. Un único canal de contacto para todo el ecosistema.
          </p>
        </div>
      </Section>

      {/* MARCAS */}
      <Section id="marcas" className="py-14">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl sm:text-2xl font-bold">Nuestras marcas</h3>
          <div className="hidden sm:flex gap-2">
            <Tag>Holding</Tag>
            <Tag>Chile → Mundo</Tag>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dekaelo Media */}
          <Card>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-sky-500/20 p-2"><Video size={18} className="text-sky-300"/></div>
              <p className="text-sm font-semibold tracking-wide">Dekaelo Media</p>
            </div>
            <h4 className="mt-3 text-lg font-bold">Producción Audiovisual Estratégica</h4>
            <p className="mt-2 text-sm text-neutral-300">Contenido con calidad cinematográfica todos los meses: cápsulas, reels, vodcasts y campañas. Publicación lista por plataforma.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-300"/> Planes mensuales (IVA inc.)</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-300"/> Banco Bice (vodcasts internos 2026)</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-sky-300"/> Películas “Domo” y “Las Horribles” (2026–2029)</li>
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a href={LINKS.brands.dekaelo.site} target="_blank" className="inline-flex items-center gap-1 text-sm text-sky-300 hover:text-sky-200"><Globe size={14}/> Sitio <ExternalLink size={14}/></a>
              <SocialIcon platform="linkedin" href={LINKS.brands.dekaelo.socials.linkedin} />
              <SocialIcon platform="instagram" href={LINKS.brands.dekaelo.socials.instagram} />
              <SocialIcon platform="youtube" href={LINKS.brands.dekaelo.socials.youtube} />
            </div>
          </Card>

          {/* Tronx Strategy */}
          <Card>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-500/20 p-2"><LineChart size={18} className="text-emerald-300"/></div>
              <p className="text-sm font-semibold tracking-wide">Tronx Strategy</p>
            </div>
            <h4 className="mt-3 text-lg font-bold">Crecimiento B2B con estrategia, tecnología y contenido</h4>
            <p className="mt-2 text-sm text-neutral-300">Implementamos y operamos tu embudo: sitios y landings, performance, CRM y automatizaciones. Retainers y Programa Socios (Revenue Share).</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-300"/> Onboarding 2–4 semanas</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-300"/> Retainers de growth y capacitación</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-300"/> Revenue Share: 15–25% servicios, 20–35% productos digitales</li>
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a href={LINKS.brands.strategy.site} target="_blank" className="inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200"><Globe size={14}/> Sitio <ExternalLink size={14}/></a>
              <SocialIcon platform="linkedin" href={LINKS.brands.strategy.socials.linkedin} />
            </div>
          </Card>

          {/* Tronx TV */}
          <Card>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-fuchsia-500/20 p-2"><Tv size={18} className="text-fuchsia-300"/></div>
              <p className="text-sm font-semibold tracking-wide">Tronx TV</p>
            </div>
            <h4 className="mt-3 text-lg font-bold">Historias que trascienden fronteras</h4>
            <p className="mt-2 text-sm text-neutral-300">Canal editorial multiplataforma con narrativas originales que combinan documental, ficción y conversación en 4K UHD. Publicación por temporadas.</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-fuchsia-300"/> Programa: "Reality Day" (12 minutos)</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-fuchsia-300"/> Mirada editorial propia</li>
            </ul>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a href={LINKS.brands.tv.site} target="_blank" className="inline-flex items-center gap-1 text-sm text-fuchsia-300 hover:text-fuchsia-200"><Globe size={14}/> Sitio <ExternalLink size={14}/></a>
              <SocialIcon platform="youtube" href={LINKS.brands.tv.socials.youtube} />
              <SocialIcon platform="instagram" href={LINKS.brands.tv.socials.instagram} />
              <SocialIcon platform="tiktok" href={LINKS.brands.tv.socials.tiktok} />
              <SocialIcon platform="facebook" href={LINKS.brands.tv.socials.facebook} />
            </div>
          </Card>
        </div>

        {/* Teléfono único visible */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm">
          <p>📞 Canal único de contacto para todas las marcas: <a className="font-semibold hover:underline" href={`tel:${LINKS.tronxGroup.phone.replace(/\s/g, "")}`}>{LINKS.tronxGroup.phone}</a></p>
        </div>
      </Section>

      {/* PROPUESTA DE VALOR */}
      <Section id="valor" className="py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold">Propuesta de valor Tronx Group</h3>
            <p className="mt-3 text-neutral-300">Integración única de estrategia, producción y narrativa para generar crecimiento medible y contenido que perdura.</p>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            <Card>
              <div className="flex items-center gap-3"><Layers size={18} className="text-sky-300"/><p className="font-semibold">Integración 360°</p></div>
              <p className="mt-2 text-sm text-neutral-300">Estrategia + performance + audiovisual + editorial en un mismo equipo.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3"><LineChart size={18} className="text-emerald-300"/><p className="font-semibold">Impacto medible</p></div>
              <p className="mt-2 text-sm text-neutral-300">KPIs claros: CAC, conversión, LTV y reportes mensuales.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3"><Video size={18} className="text-sky-300"/><p className="font-semibold">Calidad cinematográfica</p></div>
              <p className="mt-2 text-sm text-neutral-300">Producción en 4K UHD y storytelling que conecta.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3"><Tv size={18} className="text-fuchsia-300"/><p className="font-semibold">Narrativas originales</p></div>
              <p className="mt-2 text-sm text-neutral-300">Programas y formatos propios con mirada editorial.</p>
            </Card>
          </div>
        </div>
      </Section>

      {/* ECOSISTEMA: Socios del Programa (Tronx Strategy) */}
      <Section id="ecosistema" className="py-14">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl sm:text-2xl font-bold">Ecosistema</h3>
          <Tag>Socios del Programa · Tronx Strategy</Tag>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <p className="text-sm font-semibold tracking-wide">Cámara de Comercio Asia Pacífico (APCC)</p>
            <p className="mt-2 text-sm text-neutral-300">Socio del Programa (Tronx Strategy).</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a href={LINKS.partners.apcc.site} target="_blank" className="inline-flex items-center gap-1 text-sm text-sky-300 hover:text-sky-200"><Globe size={14}/> Sitio <ExternalLink size={14}/></a>
              <SocialIcon platform="facebook" href={LINKS.partners.apcc.socials.facebook} />
              <SocialIcon platform="instagram" href={LINKS.partners.apcc.socials.instagram} />
              <SocialIcon platform="linkedin" href={LINKS.partners.apcc.socials.linkedin} />
              <SocialIcon platform="youtube" href={LINKS.partners.apcc.socials.youtube} />
            </div>
          </Card>
          <Card>
            <p className="text-sm font-semibold tracking-wide">Echevensko</p>
            <p className="mt-2 text-sm text-neutral-300">Socio del Programa (Tronx Strategy).</p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a href={LINKS.partners.echevensko.site} target="_blank" className="inline-flex items-center gap-1 text-sm text-emerald-300 hover:text-emerald-200"><Globe size={14}/> Sitio <ExternalLink size={14}/></a>
              <SocialIcon platform="instagram" href={LINKS.partners.echevensko.socials.instagram} />
              <SocialIcon platform="linkedin" href={LINKS.partners.echevensko.socials.linkedin} />
            </div>
          </Card>
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm">
          <p>Llegues por Dekaelo, Tronx TV, APCC o Echevensko, el contacto es único: <a className="font-semibold hover:underline" href={`tel:${LINKS.tronxGroup.phone.replace(/\s/g, "")}`}>{LINKS.tronxGroup.phone}</a> · <a className="hover:underline" href={`mailto:${LINKS.tronxGroup.email}`}>{LINKS.tronxGroup.email}</a></p>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" className="py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">¿Listo para conversar?</h3>
          <p className="mt-3 text-neutral-300">Cuéntanos tu contexto y objetivos. Te proponemos un plan claro con hitos, KPIs y tiempos de implementación.</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <a href={`mailto:${LINKS.tronxGroup.email}`} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-neutral-900 px-5 py-3 font-semibold hover:bg-neutral-100">
              <Mail size={18}/> {LINKS.tronxGroup.email}
            </a>
            <a href={`tel:${LINKS.tronxGroup.phone.replace(/\s/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/5">
              <Phone size={18}/> {LINKS.tronxGroup.phone}
            </a>
            <a href={`https://wa.me/56920080031`} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold hover:bg-white/5">
              WhatsApp directo
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-sm text-neutral-400">
        <Section className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Tronx Group SpA. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#marcas" className="hover:text-white">Marcas</a>
              <a href="#valor" className="hover:text-white">Valor</a>
              <a href="#ecosistema" className="hover:text-white">Ecosistema</a>
              <a href="#contacto" className="hover:text-white">Contacto</a>
            </div>
          </div>
          {/* RRSS Tronx Group */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-neutral-300">Tronx Group</span>
              <SocialIcon platform="x" href={LINKS.tronxGroup.x} />
            </div>
            <div className="text-right text-neutral-300">
              <a className="hover:underline" href={`tel:${LINKS.tronxGroup.phone.replace(/\s/g, "")}`}>{LINKS.tronxGroup.phone}</a>
            </div>
          </div>
        </Section>
      </footer>
    </div>
  );
}

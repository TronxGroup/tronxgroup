"use client";

import Image from "next/image";
import { useCallback } from "react";
import type { ReactNode, HTMLAttributes, FormEvent, SVGProps } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Layers,
  LineChart,
  Rocket,
  Play,
  Users,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";

/** Sección con container responsivo */
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      {children}
    </section>
  );
}

/** Chip/pill de apoyo visual */
function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 border border-brand-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

/** Card con spread de props para permitir id, aria-, etc. */
function Card({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`card ${className}`}>
      {children}
    </div>
  );
}

/** Logotipo oficial de X (Twitter) como SVG embebido */
function XLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M18 12h21.4l28.2 36.6L95 12h16.6L75.8 60.7 114 108H92.6L65.7 72.3 37.2 108H20.6l40.2-49L18 12z"
      />
    </svg>
  );
}

export default function TronxLanding() {
  const submitMailto = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const name = encodeURIComponent(String(data.get("name") || ""));
    const email = encodeURIComponent(String(data.get("email") || ""));
    const message = encodeURIComponent(String(data.get("message") || ""));
    const subject = encodeURIComponent("Contacto Tronx Group (Landing)");
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    );
    window.location.href = `mailto:info@tronxgroup.com?subject=${subject}&body=${body}`;
  }, []);

  return (
    <>
      {/* ANCLA SUPERIOR */}
      <div id="top" />

      {/* NAV */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[rgba(12,19,43,0.80)] bg-[rgba(12,19,43,0.92)] border-b border-white/10">
        <div className="section flex items-center justify-between py-3">
          <a href="#top" aria-label="Volver al inicio" className="flex items-center">
            <Image
              src="/tronxgrouplogo.png"
              alt="Tronx Group"
              width={72}
              height={72}
              priority
            />
          </a>
          <div className="hidden md:flex items-center gap-5 text-sm">
            <a href="#holding" className="nav-link">Holding</a>
            <a href="#adn" className="nav-link">ADN & Propósito</a>
            <a href="#unidades" className="nav-link">Unidades</a>
            <a href="#cloud" className="nav-link">Cloud Suite</a>
            <a href="#socios" className="nav-link">Programa Socios</a>
            <a href="#contacto" className="btn btn-primary !bg-sky-600 hover:!bg-sky-500 text-white">
              Contactar
            </a>
          </div>
        </div>
      </nav>

      {/* HERO (moderno/tech) */}
      <header
        className="relative overflow-hidden bg-[#0B1126] text-white"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% -10%, rgba(14,165,233,0.25), transparent 60%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.25), transparent 60%), linear-gradient(to bottom, #0C132B, #0A1022 80%)",
        }}
      >
        {/* Capa de imagen suave + overlay */}
        <div className="absolute inset-0 bg-[url('/BG_tronx_group.jpg')] bg-cover bg-center opacity-15 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0C132B]/60 to-[#0A0F21]" />

        <div className="relative section py-24 sm:py-32 flex flex-col items-start">
          <div className="max-w-3xl">
            {/* Badges con glassmorphism */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 backdrop-blur-sm">
                Cloud Growth System
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 backdrop-blur-sm">
                Operación 100 % digital
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 backdrop-blur-sm">
                KPI driven
              </span>
            </div>

            {/* Título dinámico */}
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(59,130,246,0.4)]">
              <span className="block">Crecemos con sistemas,</span>
              <span className="block text-sky-400/90 font-light">
                no con campañas.
              </span>
            </h1>

            {/* Descripción */}
            <p className="mt-6 text-base sm:text-lg text-blue-100/90 max-w-2xl leading-relaxed">
              Tronx Group integra <strong>Tronx Strategy</strong> (growth B2B y
              automatizaciones), <strong>Dekaelo Media</strong> (producción
              audiovisual estratégica) y <strong>Tronx TV</strong> (plataforma
              editorial). Un solo ecosistema cloud con métricas de impacto:
              <strong> CAC · CVR · LTV · ROAS</strong>.
            </p>

            {/* Botones */}
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                className="btn btn-primary !bg-sky-600 hover:!bg-sky-500 shadow-lg shadow-sky-500/20"
              >
                Iniciar conversación <ArrowRight size={18} />
              </a>
              <a
                href="#unidades"
                className="btn border border-white/50 text-white/95 font-semibold hover:bg-white/15 backdrop-blur-md"
              >
                Ver unidades del holding
              </a>
              <a
                href="/catalogo/tronxgroup_catalogo_2026.pdf"
                className="btn btn-secondary hover:bg-sky-100/90"
                download
              >
                Descargar catálogo
              </a>
            </div>

            {/* Stack */}
            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-blue-200/85">
              <span className="inline-flex items-center gap-1.5">
                <Shield size={14} /> Zoho · HubSpot · Make · GA4 · GTM · Vercel
                · Cloudflare
              </span>
            </div>
          </div>
        </div>

        {/* Orbes decorativos */}
        <div className="pointer-events-none absolute -bottom-40 right-[-60px] w-[520px] h-[520px] bg-sky-500/20 blur-[140px] rounded-full" />
        <div className="pointer-events-none absolute -top-24 -left-24 w-[380px] h-[380px] bg-indigo-600/15 blur-[120px] rounded-full" />
      </header>

      {/* DESCRIPCIÓN HOLDING */}
      <Section id="holding" className="py-16">
        <Card className="p-6 bg-white/95">
          <h2 className="h2 text-slate-900">¿Qué es Tronx Group?</h2>
          <p className="p-muted mt-3 max-w-4xl">
            Tronx Group es un{" "}
            <strong>holding creativo–tecnológico chileno</strong> que integra
            estrategia digital, producción audiovisual y medios narrativos,
            operando bajo un modelo <strong>100 % cloud</strong>, ágil y
            trazable. Nuestro sistema combina{" "}
            <strong>creatividad, datos y operación digital</strong> para generar
            crecimiento real y sostenible.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="kpi">
              <Layers size={16} /> Ecosistema integrado
            </div>
            <div className="kpi">
              <LineChart size={16} /> KPIs de punta a punta
            </div>
            <div className="kpi">
              <Rocket size={16} /> Time-to-value 2–4 semanas
            </div>
          </div>
        </Card>
      </Section>

      {/* ADN & PROPÓSITO */}
      <Section id="adn" className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 bg-white/95">
            <h3 className="h3 text-slate-900">ADN & Propósito</h3>
            <p className="p-muted mt-2">
              <strong>Propósito</strong>: Acelerar el crecimiento de empresas e
              instituciones con creatividad, tecnología y{" "}
              <strong>resultados comprobables</strong>. No hacemos marketing
              aislado: <strong>construimos sistemas que escalan</strong>.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 className="text-brand-600" size={18} /> ⚡
                Velocidad: entregables rápidos y decisiones basadas en datos.
              </li>
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 className="text-brand-600" size={18} /> 🎯
                Trazabilidad: cada acción tiene métrica y retorno claro.
              </li>
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 className="text-brand-600" size={18} /> 💡
                Propósito: crecer con sentido y visión de largo plazo.
              </li>
              <li className="inline-flex items-start gap-2">
                <CheckCircle2 className="text-brand-600" size={18} /> 🧩
                Excelencia: precisión operativa y estándar internacional.
              </li>
            </ul>
            <p className="mt-4 italic text-slate-600">
              “Tronx convierte la estrategia en historia, y la historia en
              resultados reales.”
            </p>
          </Card>

          <Card className="p-6 bg-white/95" id="cloud">
            <h3 className="h3 text-slate-900">Tronx Cloud Suite (resumen)</h3>
            <p className="p-muted mt-2">
              Plataforma tecnológica unificada para operar WebOps, Data &
              Analytics, CRM & Automation, Ads Ops y Security en un solo
              entorno. <strong>Beneficio</strong>: operar, medir y escalar sin
              fricción.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="badge">WebOps: Next.js · Vercel · Cloudflare</div>
              <div className="badge">Data: GA4 · GTM · Looker</div>
              <div className="badge">CRM: Zoho · HubSpot · Make</div>
              <div className="badge">Ads: Google · Meta · LinkedIn</div>
              <div className="badge">
                Security: SSL · DNSSEC · SPF · DKIM · DMARC
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* UNIDADES DEL HOLDING (FONDO AZUL, TEXTO CLARO) */}
      <section
        id="unidades"
        className="py-16 text-blue-50"
        style={{
          background:
            "radial-gradient(800px 500px at 10% -10%, rgba(59,130,246,0.15), transparent 60%), linear-gradient(180deg, #0C132B 0%, #0E1633 100%)",
        }}
      >
        <div className="section">
          <h2 className="h2 text-center text-white">Unidades de negocio</h2>
          <p className="text-center mt-2 text-blue-100/90">
            Tres unidades, un solo sistema.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tronx Strategy */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="flex items-center gap-3">
                <div className="logo-box bg-white/10 border-white/20">
                  <span className="logo-initial text-blue-100">TS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Tronx Strategy</h4>
                  <p className="text-xs text-blue-200/90">
                    Growth B2B · CRM · Automatización
                  </p>
                </div>
              </div>
              <ul className="mt-4 text-sm space-y-2 text-blue-100/90">
                <li>WebOps & Landings optimizadas</li>
                <li>Zoho/HubSpot + Make (nurturing y pipelines)</li>
                <li>Ads Ops con reporting CAC · CVR · LTV · ROAS</li>
                <li>Programa Socios (Revenue Share)</li>
              </ul>
            </div>

            {/* Dekaelo Media */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="flex items-center gap-3">
                <div className="logo-box bg-white/10 border-white/20">
                  <span className="logo-initial text-blue-100">DK</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Dekaelo Media</h4>
                  <p className="text-xs text-blue-200/90">
                    Estudio audiovisual estratégico
                  </p>
                </div>
              </div>
              <ul className="mt-4 text-sm space-y-2 text-blue-100/90">
                <li>Producción institucional y corporativa</li>
                <li>Vodcast/cápsulas B2B · Performance content</li>
                <li>Pipeline 4K HDR · Cine digital Super 35 mm</li>
                <li>Modelos mensuales: Basic · Standard · Premium</li>
              </ul>
            </div>

            {/* Tronx TV */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="flex items-center gap-3">
                <div className="logo-box bg-white/10 border-white/20">
                  <span className="logo-initial text-blue-100">TV</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Tronx TV</h4>
                  <p className="text-xs text-blue-200/90">Plataforma editorial</p>
                </div>
              </div>
              <ul className="mt-4 text-sm space-y-2 text-blue-100/90">
                <li>Línea original: reality, documental, conversación, ficción</li>
                <li>Formato digital 4K · distribución multiplataforma</li>
                <li>Vitrina narrativa y reputacional</li>
                <li>Alianzas editoriales y sponsorships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMA SOCIOS (resumen) */}
      <Section id="socios" className="py-6">
        <Card className="p-6 bg-white/95">
          <h3 className="h3 text-slate-900">Programa Socios — Revenue Share</h3>
          <p className="p-muted mt-2">
            Tronx opera el embudo, CRM y cierre comercial; el cliente paga{" "}
            <strong>sólo por ventas efectivas</strong>. Win–win acelerado con
            trazabilidad total.
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
            <div className="badge">Activos de conversión (video + landing + copy)</div>
            <div className="badge">CRM & automatización (Zoho/HubSpot + Make)</div>
            <div className="badge">Base B2B + Ads multicanal</div>
            <div className="badge">Liquidación mensual transparente</div>
          </div>
        </Card>
      </Section>

      {/* BANDA DE CONFIANZA */}
      <Section className="py-10">
        <div className="card p-4 flex flex-wrap items-center justify-center gap-6 text-slate-600 text-xs bg-white/95">
          <span className="inline-flex items-center gap-2">
            <Users size={16} /> B2B & organizaciones
          </span>
          <span className="inline-flex items-center gap-2">
            <Play size={16} /> Editorial & vodcasts
          </span>
          <span className="inline-flex items-center gap-2">
            <Shield size={16} /> Security: DNSSEC · SPF · DKIM · DMARC
          </span>
        </div>
      </Section>

      {/* CONTACTO */}
      <Section id="contacto" className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <Card className="p-6 lg:col-span-3 bg-white/95">
            <h3 className="h3 text-slate-900">Conversemos</h3>
            <p className="p-muted mt-2">
              Cuéntanos tu objetivo y te proponemos un sistema a medida.
            </p>
            <form onSubmit={submitMailto} className="mt-6 grid grid-cols-1 gap-4">
              <div className="field">
                <label className="label">Nombre</label>
                <input
                  name="name"
                  required
                  className="input"
                  placeholder="Nombre y apellido"
                />
              </div>
              <div className="field">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input"
                  placeholder="tu@email.cl"
                />
              </div>
              <div className="field">
                <label className="label">Mensaje</label>
                <textarea
                  name="message"
                  className="textarea"
                  placeholder="Breve contexto y objetivo"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <button type="submit" className="btn btn-primary">
                  Enviar
                </button>
                <a
                  href="/catalogo/tronxgroup_catalogo_2026.pdf"
                  className="btn btn-ghost"
                  download
                >
                  Descargar catálogo
                </a>
              </div>
            </form>
          </Card>

          <Card className="p-6 lg:col-span-2 bg-white/95">
            <h4 className="font-semibold text-slate-900">Datos corporativos</h4>
            <ul className="mt-3 text-sm text-slate-700 space-y-2">
              <li className="inline-flex items-center gap-2">
                <Mail size={16} /> info@tronxgroup.com
              </li>
              <li className="inline-flex items-center gap-2">
                <Phone size={16} /> +56 9 2008 0031
              </li>
              <li>Santiago · Chile</li>
            </ul>
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">
                Sitios
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <a
                  className="link-quiet"
                  href="https://www.tronxgroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tronxgroup.com
                </a>
                <a
                  className="link-quiet"
                  href="https://www.tronxstrategy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tronxstrategy.com
                </a>
                <a
                  className="link-quiet"
                  href="https://www.dekaelomedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dekaelomedia.com
                </a>
                <a
                  className="link-quiet"
                  href="https://www.tronxtv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  tronxtv.com
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="mt-10 border-t border-white/10 bg-[#0C132B] text-blue-100/90">
        <div className="section py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/tronxgrouplogo.png"
              alt="Tronx Group"
              width={24}
              height={24}
            />
            <span className="text-sm">
              © 2026 Tronx Group SpA — Todos los derechos reservados
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="btn-icon border-white/15 text-white/90 hover:bg-white/10"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/tronx-group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>
            <a
              className="btn-icon border-white/15 text-white/90 hover:bg-white/10"
              aria-label="X"
              href="https://x.com/TronxGroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XLogo width={18} height={18} />
            </a>
            <a
              className="btn-icon border-white/15 text-white/90 hover:bg-white/10"
              aria-label="WhatsApp"
              href="https://wa.me/56920080031"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

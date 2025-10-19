"use client";

import Image from "next/image";
import Script from "next/script";
import { useCallback, useMemo } from "react";
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
  Instagram,
  Youtube,
  Facebook,
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
    <span className="inline-flex items-center rounded-full bg-sky-500/15 text-sky-100 border border-sky-500/30 px-3 py-1 text-xs font-medium backdrop-blur">
      {children}
    </span>
  );
}

/** Card glass para fondos oscuros */
function GlassCard({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md ${className}`}
    >
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

/** Logotipo TikTok como SVG embebido */
function TikTokLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M170.7 45.3a62.6 62.6 0 0 0 26.4 21.8c7.5 3.4 15.6 5.4 23.9 5.8v33.5c-16.7-.5-33-6.1-46.7-16.1v62.5c0 53.5-57.4 86.5-104.3 60.1-18.1-10.4-29.3-29.5-29.3-50.4 0-43 43.1-72.6 82.7-56.6v35.4c-9.7-6.4-22.6-5.7-31.5 2.1-12.4 10.7-11.2 30.4 2.5 39.3 19 12.6 45.6-1.9 45.6-23.9V24h29.7c0 7.6.9 14.2 2.9 21.3z"
      />
    </svg>
  );
}

/** Logotipo WhatsApp en SVG (sin dependencias externas) */
function WhatsAppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 256 256" aria-hidden="true" focusable="false" {...props}>
      <path
        fill="currentColor"
        d="M128 24c57.4 0 104 46.6 104 104 0 57.4-46.6 104-104 104-18.1 0-35.9-4.7-51.6-13.6L24 232l17.7-50.9C33.1 165.3 24 147.1 24 128 24 70.6 70.6 24 128 24zm0 16c-48.6 0-88 39.4-88 88 0 17.1 5 33.6 14.4 47.9l2.3 3.4-10.3 29.6 30.4-10 3.3 2c14.1 8.4 30.2 12.8 47 12.8 48.6 0 88-39.4 88-88s-39.4-88-88-88zm47.5 50.7c3.5-.1 7.5 1 9 5.2 1.1 3 .9 6.9.8 10.1-.2 6.4-4.4 14.6-14 23.9-12.1 11.8-24.3 19.4-42.1 8.4-8.8-5.4-23.6-19.5-28.2-33.8-4.8-14.9 1.1-22.9 6.5-26.1 2.2-1.3 4.6-1.3 6.6-.8 2 .6 4.2 1.9 5.3 4.6 1.2 2.8 4.5 10.6 4.8 11.4.4.8.7 1.7.7 2.6.1 1.4-.6 3-1.9 4.8-1.4 1.8-3.1 4.1-3.9 5.5-.8 1.4-.8 2.5 0 4.1.8 1.6 3.5 8.3 10.2 14.9 6.7 6.6 13.6 9.3 15.3 10.1 1.7.8 2.7.7 4.1-.3 1.4-1 4.7-4.2 6-5.6 1.3-1.4 2.4-1.7 3.8-1.1 1.4.6 9.3 4.4 10.9 5.2 1.6.8 2.7 1.2 3.2 2.5.5 1.3.5 7.4-2.3 11.9-2.8 4.5-8.2 8.3-13.5 8.3-3.5 0-6.2-.2-12.8-3.1-6.6-2.9-20.5-10.7-30.5-21.8-10-11.1-16.6-24.9-17.8-28.1-1.2-3.2-1.2-6.1.2-8.7 1.4-2.6 4.2-6.9 5.9-9.1 1.7-2.2 3.7-2.6 6-1.9 2.3.7 14.7 6.1 14.7 6.1z"
      />
    </svg>
  );
}

export default function TronxLanding() {
  /** mapeo de campos Zoho WebToLead */
  const zoho = useMemo(
    () => ({
      action: "https://crm.zoho.com/crm/WebToLeadForm",
      xnQsjsdp:
        "2198d5e447535f2b669d09da75b927722067c5fd7abd1d25d8e4e07ca7cd6b0b",
      xmIwtLD:
        "a643b1cee8686d38784d4b0d5583725625cefc028019876faa1c321b61c0121d5f70e8d56815b00ebd6280a61201206e",
      actionType: "TGVhZHM=",
      returnURL: "https://www.tronxgroup.com/gracias",
      recaptchaSiteKey: "6Lch8eArAAAAAKq0w3lMg8-Cej5Y8LUMm4rPi9Ao",
      // campos visibles (React): First Name, Last Name, Email, LEADCF3 (Mensaje)
      // ocultos sugeridos:
      defaults: {
        LEADCF5: "Tronx-Group", // Marca
        LEADCF9: "tronxgroup.com/contacto", // Lead_Origen
      },
    }),
    []
  );

  /** Si quieres mantener también envío por mailto como fallback, puedes usar esto */
  const submitMailto = useCallback((e: FormEvent<HTMLFormElement>) => {
    // (no se usa ahora; dejamos Zoho como acción principal)
    e.preventDefault();
  }, []);

  return (
    <>
      {/* Carga de reCAPTCHA v2 */}
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
        async
        defer
      />

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
            <a href="#adn" className="nav-link">ADN &amp; Propósito</a>
            <a href="#unidades" className="nav-link">Unidades</a>
            <a href="#cloud" className="nav-link">Cloud Suite</a>
            <a href="#socios" className="nav-link">Programa Socios</a>
            <a
              href="#contacto"
              className="btn btn-primary !bg-sky-600 hover:!bg-sky-500 text-white"
            >
              Contactar
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header
        className="relative overflow-hidden bg-[#0B1126] text-white"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% -10%, rgba(14,165,233,0.25), transparent 60%), radial-gradient(circle at 80% 0%, rgba(59,130,246,0.25), transparent 60%), linear-gradient(to bottom, #0C132B, #0A1022 80%)",
        }}
      >
        <div className="absolute inset-0 bg-[url('/BG_tronx_group.jpg')] bg-cover bg-center opacity-15 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0C132B]/60 to-[#0A0F21]" />

        <div className="relative section py-24 sm:py-32 flex flex-col items-start">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2 mb-4">
              <Pill>Cloud Growth System</Pill>
              <Pill>Operación 100 % digital</Pill>
              <Pill>KPI driven</Pill>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(59,130,246,0.4)]">
              <span className="block">Crecemos con sistemas,</span>
              <span className="block text-sky-400/90 font-light">no con campañas.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-blue-100/90 max-w-2xl leading-relaxed">
              Tronx Group integra <strong>Tronx Strategy</strong> (growth B2B y automatizaciones),
              <strong> Dekaelo Media</strong> (producción audiovisual estratégica) y
              <strong> Tronx TV</strong> (plataforma editorial). Un solo ecosistema cloud con métricas de impacto:
              <strong> CAC · CVR · LTV · ROAS</strong>.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="btn btn-primary !bg-sky-600 hover:!bg-sky-500 shadow-lg shadow-sky-500/20">
                Iniciar conversación <ArrowRight size={18} />
              </a>
              <a href="#unidades" className="btn border border-white/50 text-white/95 font-semibold hover:bg-white/15 backdrop-blur-md">
                Ver unidades del holding
              </a>
              <a href="/catalogo/tronxgroup_catalogo_2026.pdf" className="btn btn-secondary hover:bg-sky-100/90" download>
                Descargar catálogo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-blue-200/85">
              <span className="inline-flex items-center gap-1.5">
                <Shield size={14} /> Zoho · HubSpot · Make · GA4 · GTM · Vercel · Cloudflare
              </span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute -bottom-40 right-[-60px] w-[520px] h-[520px] bg-sky-500/20 blur-[140px] rounded-full" />
        <div className="pointer-events-none absolute -top-24 -left-24 w-[380px] h-[380px] bg-indigo-600/15 blur-[120px] rounded-full" />
      </header>

      {/* HOLDING */}
      <section
        id="holding"
        className="py-16 text-blue-50"
        style={{
          background:
            "radial-gradient(800px 500px at 10% -10%, rgba(59,130,246,0.12), transparent 60%), linear-gradient(180deg, #0C132B 0%, #0E1633 100%)",
        }}
      >
        <Section>
          <GlassCard className="p-6">
            <h2 className="h2 text-white">¿Qué es Tronx Group?</h2>
            <p className="mt-3 max-w-4xl text-blue-100/90">
              Tronx Group es un <strong>holding creativo–tecnológico chileno</strong> que integra
              estrategia digital, producción audiovisual y medios narrativos, operando bajo un modelo
              <strong> 100 % cloud</strong>, ágil y trazable. Nuestro sistema combina
              <strong> creatividad, datos y operación digital</strong> para generar crecimiento real y sostenible.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="kpi bg-white/10 text-blue-50 border border-white/10"><Layers size={16}/> Ecosistema integrado</div>
              <div className="kpi bg-white/10 text-blue-50 border border-white/10"><LineChart size={16}/> KPIs de punta a punta</div>
              <div className="kpi bg-white/10 text-blue-50 border border-white/10"><Rocket size={16}/> Time-to-value 2–4 semanas</div>
            </div>
          </GlassCard>
        </Section>
      </section>

      {/* ADN + CLOUD */}
      <section
        id="adn"
        className="py-16 text-blue-50"
        style={{
          background:
            "radial-gradient(900px 520px at 90% -10%, rgba(14,165,233,0.12), transparent 60%), linear-gradient(180deg, #0C132B 0%, #0E1633 100%)",
        }}
      >
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <h3 className="h3 text-white">ADN & Propósito</h3>
              <p className="mt-2 text-blue-100/90">
                <strong>Propósito</strong>: Acelerar el crecimiento de empresas e instituciones con creatividad,
                tecnología y <strong>resultados comprobables</strong>. No hacemos marketing aislado:
                <strong> construimos sistemas que escalan</strong>.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-blue-100/90">
                <li className="inline-flex items-start gap-2"><CheckCircle2 className="text-sky-300" size={18}/> ⚡ Velocidad: entregables rápidos y decisiones basadas en datos.</li>
                <li className="inline-flex items-start gap-2"><CheckCircle2 className="text-sky-300" size={18}/> 🎯 Trazabilidad: cada acción tiene métrica y retorno claro.</li>
                <li className="inline-flex items-start gap-2"><CheckCircle2 className="text-sky-300" size={18}/> 💡 Propósito: crecer con sentido y visión de largo plazo.</li>
                <li className="inline-flex items-start gap-2"><CheckCircle2 className="text-sky-300" size={18}/> 🧩 Excelencia: precisión operativa y estándar internacional.</li>
              </ul>
              <p className="mt-4 italic text-blue-200/90">
                “Tronx convierte la estrategia en historia, y la historia en resultados reales.”
              </p>
            </GlassCard>

            <GlassCard className="p-6" id="cloud">
              <h3 className="h3 text-white">Tronx Cloud Suite (resumen)</h3>
              <p className="mt-2 text-blue-100/90">
                Plataforma tecnológica unificada para operar WebOps, Data & Analytics, CRM & Automation,
                Ads Ops y Security en un solo entorno. <strong>Beneficio</strong>: operar, medir y escalar sin fricción.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <div className="badge bg-white/10 border-white/15 text-blue-50">WebOps: Next.js · Vercel · Cloudflare</div>
                <div className="badge bg-white/10 border-white/15 text-blue-50">Data: GA4 · GTM · Looker</div>
                <div className="badge bg-white/10 border-white/15 text-blue-50">CRM: Zoho · HubSpot · Make</div>
                <div className="badge bg-white/10 border-white/15 text-blue-50">Ads: Google · Meta · LinkedIn</div>
                <div className="badge bg-white/10 border-white/15 text-blue-50">Security: SSL · DNSSEC · SPF · DKIM · DMARC</div>
              </div>
            </GlassCard>
          </div>
        </Section>
      </section>

      {/* UNIDADES + RRSS */}
      <section
        id="unidades"
        className="py-16 text-blue-50"
        style={{
          background:
            "radial-gradient(800px 500px at 10% -10%, rgba(59,130,246,0.15), transparent 60%), linear-gradient(180deg, #0C132B 0%, #0E1633 100%)",
        }}
      >
        <Section>
          <h2 className="h2 text-center text-white">Unidades de negocio</h2>
          <p className="text-center mt-2 text-blue-100/90">Tres unidades, un solo sistema.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tronx Strategy */}
            <GlassCard className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg overflow-hidden">
                    <Image
                      src="/TronxStrategy_TronxGroup.jpg"
                      alt="Logo Tronx Strategy"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Tronx Strategy</h4>
                    <p className="text-xs text-blue-200/90">Growth B2B · CRM · Automatización</p>
                  </div>
                </div>
                <a
                  href="https://www.tronxstrategy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1 rounded-lg border border-white/20 text-white/90 hover:bg-white/10"
                >
                  Visitar sitio
                </a>
              </div>

              <ul className="mt-4 text-sm space-y-2 text-blue-100/90">
                <li>WebOps &amp; Landings optimizadas</li>
                <li>Zoho/HubSpot + Make (nurturing y pipelines)</li>
                <li>Ads Ops con reporting CAC · CVR · LTV · ROAS</li>
                <li>Programa Socios (Revenue Share)</li>
              </ul>

              <div className="mt-5 flex items-center gap-3">
                <a className="btn-icon border-white/15 text-white/90 hover:bg-white/10" aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/tronx-strategy" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18}/>
                </a>
                <a className="btn-icon border-white/15 text-white/90 hover:bg-white/10" aria-label="Instagram"
                  href="https://instagram.com/tronxstrategy" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18}/>
                </a>
              </div>
            </GlassCard>

            {/* Dekaelo Media */}
            <GlassCard className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg overflow-hidden">
                    <Image
                      src="/Dekaelo_TronxGroup.jpg"
                      alt="Logo Dekaelo Media"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Dekaelo Media</h4>
                    <p className="text-xs text-blue-200/90">Estudio audiovisual estratégico</p>
                  </div>
                </div>
                <a
                  href="https://www.dekaelomedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1 rounded-lg border border-white/20 text-white/90 hover:bg-white/10"
                >
                  Visitar sitio
                </a>
              </div>

              <ul className="mt-4 text-sm space-y-2 text-blue-100/90">
                <li>Producción institucional y corporativa</li>
                <li>Vodcast/cápsulas B2B · Performance content</li>
                <li>Pipeline 4K HDR · Cine digital Super 35 mm</li>
                <li>Modelos mensuales: Basic · Standard · Premium</li>
              </ul>

              <div className="mt-5 flex items-center gap-3">
                <a className="btn-icon border-white/15 text-white/90 hover:bg-white/10" aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/dekaelo-media" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18}/>
                </a>
                <a className="btn-icon border-white/15 text-white/90 hover:bg-white/10" aria-label="Instagram"
                  href="https://instagram.com/dekaelo_media" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18}/>
                </a>
                <a className="btn-icon border-white/15 text-white/90 hover:bg-white/10" aria-label="YouTube"
                  href="https://youtube.com/@dekaelo_media" target="_blank" rel="noopener noreferrer">
                  <Youtube size={18}/>
                </a>
              </div>
            </GlassCard>

            {/* Tronx TV */}
            <GlassCard className="p-6">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 border border-white/20 rounded-lg overflow-hidden">
                    <Image
                      src="/TronxTV_TronxGroup.jpg"
                      alt="Logo Tronx TV"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Tronx TV</h4>
                    <p className="text-xs text-blue-200/90">Plataforma editorial</p>
                  </div>
                </div>
                <a
                  href="https://www.tronxtv.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-3 py-1 rounded-lg border border-white/20 text-white/90 hover:bg-white/10"
                >
                  Visitar sitio
                </a>
              </div>

              <ul className="mt-4 text-sm space-y-2 text-blue-100/90">
                <li>Línea original: reality, documental, conversación, ficción</li>
                <li>Formato digital 4K · distribución multiplataforma</li>
                <li>Vitrina narrativa y reputacional</li>
                <li>Alianzas editoriales y sponsorships</li>
              </ul>

              <div className="mt-5 flex items-center gap-3">
                <a className="btn-icon border-white/15 text-white/90 hover:bg-white/10" aria-label="YouTube"
                  href="https://youtube.com/@TronxTV" target="_blank" rel="noopener noreferrer">
                  <Youtube size={18}/>
                </a>
                <a className="btn-icon border-white/15 text-white/90 hover:bg-white/10" aria-label="Instagram"
                  href="https://instagram.com/tronxtv" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18}/>
                </a>
                <a className="btn-icon border-white/15 text-white/90 hover:bg-white/10" aria-label="X"
                  href="https://x.com/tronx_tv" target="_blank" rel="noopener noreferrer">
                  <XLogo width={18} height={18}/>
                </a>
                <a className="btn-icon border-white/15 text-white/90 hover:bg-white/10" aria-label="TikTok"
                  href="https://tiktok.com/@tronxtv" target="_blank" rel="noopener noreferrer">
                  <TikTokLogo width={18} height={18}/>
                </a>
                <a className="btn-icon border-white/15 text-white/90 hover:bg-white/10" aria-label="Facebook"
                  href="https://web.facebook.com/tronxtv" target="_blank" rel="noopener noreferrer">
                  <Facebook size={18}/>
                </a>
              </div>
            </GlassCard>
          </div>
        </Section>
      </section>

      {/* PROGRAMA SOCIOS */}
      <section
        id="socios"
        className="py-16 text-blue-50"
        style={{
          background:
            "radial-gradient(900px 520px at 90% -10%, rgba(14,165,233,0.12), transparent 60%), linear-gradient(180deg, #0C132B 0%, #0E1633 100%)",
        }}
      >
        <Section>
          <GlassCard className="p-6">
            <h3 className="h3 text-white">Programa Socios — Revenue Share</h3>
            <p className="mt-2 text-blue-100/90">
              Tronx opera el embudo, CRM y cierre comercial; el cliente paga <strong>sólo por ventas efectivas</strong>.
              Win–win acelerado con trazabilidad total.
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
              <div className="badge bg-white/10 border-white/15 text-blue-50">Activos de conversión (video + landing + copy)</div>
              <div className="badge bg-white/10 border-white/15 text-blue-50">CRM &amp; automatización (Zoho/HubSpot + Make)</div>
              <div className="badge bg-white/10 border-white/15 text-blue-50">Base B2B + Ads multicanal</div>
              <div className="badge bg-white/10 border-white/15 text-blue-50">Liquidación mensual transparente</div>
            </div>
          </GlassCard>
        </Section>
      </section>

      {/* BANDA DE CONFIANZA */}
      <section
        className="py-10 text-blue-50"
        style={{ background: "linear-gradient(180deg, #0C132B 0%, #0E1633 100%)" }}
      >
        <Section>
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 flex flex-wrap items-center justify-center gap-6 text-xs">
            <span className="inline-flex items-center gap-2"><Users size={16}/> B2B &amp; organizaciones</span>
            <span className="inline-flex items-center gap-2"><Play size={16}/> Editorial &amp; vodcasts</span>
            <span className="inline-flex items-center gap-2"><Shield size={16}/> Security: DNSSEC · SPF · DKIM · DMARC</span>
          </div>
        </Section>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="py-16 text-blue-50"
        style={{
          background:
            "radial-gradient(800px 520px at 10% -10%, rgba(59,130,246,0.12), transparent 60%), linear-gradient(180deg, #0C132B 0%, #0E1633 100%)",
        }}
      >
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <GlassCard className="p-6 lg:col-span-3">
              <h3 className="h3 text-white">Conversemos</h3>
              <p className="mt-2 text-blue-100/90">Cuéntanos tu objetivo y te proponemos un sistema a medida.</p>

              {/* FORMULARIO: diseño actual + envío a Zoho */}
              <form
                action={zoho.action}
                method="POST"
                className="mt-6 grid grid-cols-1 gap-4"
              >
                {/* ====== Requeridos por Zoho (ocultos) ====== */}
                <input type="hidden" name="xnQsjsdp" value={zoho.xnQsjsdp} />
                <input type="hidden" name="xmIwtLD" value={zoho.xmIwtLD} />
                <input type="hidden" name="actionType" value={zoho.actionType} />
                <input type="hidden" name="returnURL" value={zoho.returnURL} />
                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                {/* Honeypot */}
                <input
                  type="hidden"
                  name="aG9uZXlwb3Q"
                  value=""
                  style={{ display: "none" }}
                />
                {/* Defaults */}
                <input type="hidden" name="LEADCF5" value={zoho.defaults.LEADCF5} />
                <input type="hidden" name="LEADCF9" value={zoho.defaults.LEADCF9} />

                {/* ====== Campos visibles (match con Zoho) ====== */}
                <div className="field">
                  <label className="label text-blue-50">Nombre</label>
                  <input
                    name="First Name"
                    required
                    className="input bg-white text-slate-900"
                    placeholder="Nombre"
                    maxLength={40}
                  />
                </div>

                <div className="field">
                  <label className="label text-blue-50">Apellido</label>
                  <input
                    name="Last Name"
                    required
                    className="input bg-white text-slate-900"
                    placeholder="Apellido"
                    maxLength={80}
                  />
                </div>

                <div className="field">
                  <label className="label text-blue-50">Email</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    className="input bg-white text-slate-900"
                    placeholder="tu@email.cl"
                    maxLength={100}
                  />
                </div>

                <div className="field">
                  <label className="label text-blue-50">Mensaje</label>
                  <textarea
                    name="LEADCF3"
                    required
                    className="textarea bg-white text-slate-900"
                    placeholder="Breve contexto y objetivo"
                  />
                </div>

                {/* reCAPTCHA (tema dark) */}
                <div className="mt-2">
                  <div
                    className="g-recaptcha"
                    data-sitekey={zoho.recaptchaSiteKey}
                    data-theme="dark"
                  />
                </div>

                {/* Botones */}
                <div className="flex flex-wrap gap-3">
                  <button type="submit" className="btn btn-primary">
                    Enviar
                  </button>
                  <a
                    href="/catalogo/tronxgroup_catalogo_2026.pdf"
                    className="btn border border-white/30 text-white hover:bg-white/10"
                    download
                  >
                    Descargar catálogo
                  </a>
                </div>
              </form>
            </GlassCard>

            <GlassCard className="p-6 lg:col-span-2">
              <h4 className="font-semibold text-white">Datos corporativos</h4>
              <ul className="mt-3 text-sm text-blue-100/90 space-y-2">
                <li className="inline-flex items-center gap-2"><Mail size={16}/> info@tronxgroup.com</li>
                <li className="inline-flex items-center gap-2"><Phone size={16}/> +56 9 2008 0031</li>
                <li>Santiago · Chile</li>
              </ul>
              <div className="mt-5">
                <p className="text-xs uppercase tracking-wide text-blue-300 mb-2">Sitios</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  <a className="link-quiet text-blue-100/90 hover:text-white" href="https://www.tronxgroup.com" target="_blank" rel="noopener noreferrer">tronxgroup.com</a>
                  <a className="link-quiet text-blue-100/90 hover:text-white" href="https://www.tronxstrategy.com" target="_blank" rel="noopener noreferrer">tronxstrategy.com</a>
                  <a className="link-quiet text-blue-100/90 hover:text-white" href="https://www.dekaelomedia.com" target="_blank" rel="noopener noreferrer">dekaelomedia.com</a>
                  <a className="link-quiet text-blue-100/90 hover:text-white" href="https://www.tronxtv.com" target="_blank" rel="noopener noreferrer">tronxtv.com</a>
                </div>
              </div>
            </GlassCard>
          </div>
        </Section>
      </section>

      {/* FOOTER */}
      <footer className="mt-0 border-t border-white/10 bg-[#0C132B] text-blue-100/90">
        <div className="section py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/tronxgrouplogo.png" alt="Tronx Group" width={24} height={24} />
            <span className="text-sm">
              © 2025 Tronx Group SpA — Todos los derechos reservados
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* X */}
            <a
              className="btn-icon border-white/15 text-white/90 hover:bg-white/10"
              aria-label="X"
              href="https://x.com/TronxGroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <XLogo width={18} height={18} />
            </a>

            {/* LinkedIn */}
            <a
              className="btn-icon border-white/15 text-white/90 hover:bg-white/10"
              aria-label="LinkedIn"
              href="https://www.linkedin.com/company/tronx-group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
            </a>

            {/* WhatsApp */}
            <a
              className="btn-icon border-white/15 text-white/90 hover:bg-white/10"
              aria-label="WhatsApp"
              href="https://wa.me/56920080031"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
            >
              <WhatsAppLogo width={18} height={18} />
            </a>
          </div>
        </div>
      </footer>

      {/* Mejora de contraste global para labels (más claros) */}
      <style jsx global>{`
        .label { color: #e6eeff; } /* títulos más claros */
      `}</style>
    </>
  );
}

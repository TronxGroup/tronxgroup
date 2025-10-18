"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, CheckCircle2, ExternalLink, Play, Shield, Users,
} from "lucide-react";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-50 text-brand-700 border border-brand-200 px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}

function Feature({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-5">
      <h4 className="font-semibold text-slate-900">{title}</h4>
      <p className="text-sm text-slate-700 mt-1.5">{children}</p>
    </div>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 p-4 text-center bg-white">
      <p className="text-xl font-extrabold text-slate-900">{kpi}</p>
      <p className="text-xs text-slate-600 mt-1">{label}</p>
    </div>
  );
}

export default function Landing() {
  return (
    <>
      {/* HERO */}
      <header className="relative overflow-hidden gradient-hero-blue">
        <div className="section py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Pill>Holding creativo–tecnológico</Pill>
              <Pill>Operación 100 % cloud</Pill>
              <Pill>Métricas & trazabilidad</Pill>
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Sistemas que escalan: estrategia, tecnología y narrativa con resultados reales.
            </h1>
            <p className="p-muted mt-6">
              Tronx Group integra <strong>Strategy</strong> (growth B2B y automatización),
              <strong> Dekaelo Media</strong> (producción audiovisual estratégica) y
              <strong> Tronx TV</strong> (plataforma editorial). Implementamos embudos con
              <strong> CRM, Ads, contenido</strong> y <strong>reporting</strong> (CAC · CVR · LTV · ROAS).
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/programa-socios" className="btn btn-primary">
                Programa Socios <ArrowRight size={18} />
              </Link>
              <Link href="/tronx-cloud" className="btn btn-secondary">
                Ver Tronx Cloud Suite
              </Link>
              <a
                href="/catalogo/tronxgroup_catalogo_2026.pdf"
                className="btn btn-ghost"
                download
              >
                Descargar catálogo
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5">
                <Shield size={14} /> Zoho · HubSpot · Make · GA4 · GTM · Vercel · Cloudflare
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Value props */}
      <section className="section py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature title="Onboarding 2–4 semanas">
            Dominios, correo, CRM, landings y medición. Publicación y handoff documentado.
          </Feature>
          <Feature title="Growth operativo">
            Sprints quincenales: Ads (Google/Meta/LinkedIn), SEO/CRO, automatizaciones y contenido.
          </Feature>
          <Feature title="Revenue Share">
            Pagas solo por ventas válidas. Tronx capta, nutre y cierra; tú entregas.
          </Feature>
        </div>
      </section>

      {/* Casos */}
      <section className="section py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">Casos destacados</h2>
          <Link href="/casos" className="text-sm inline-flex items-center text-brand-700 hover:underline">
            Ver todos <ExternalLink size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-md overflow-hidden ring-1 ring-slate-200 bg-white">
                <Image src="/logos/apcc.svg" alt="APCC" fill className="object-contain p-1.5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  APCC – Cámara de Comercio Asia Pacífico
                </h3>
                <p className="text-xs text-slate-600">Operación unificada con Tronx Cloud Suite</p>
              </div>
              <span className="ml-auto pill">Tronx Cloud Suite</span>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="inline-flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-600 mt-0.5" /> Web institucional + Zoho/HubSpot sincronizado con Make</li>
              <li className="inline-flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-600 mt-0.5" /> Formularios maestros, pipelines y automatizaciones</li>
              <li className="inline-flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-600 mt-0.5" /> Embudo de membresías + reporting Looker Studio</li>
              <li className="inline-flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-600 mt-0.5" /> DNS, Vercel, Cloudflare, GA4, GTM</li>
            </ul>

            <div className="grid grid-cols-3 gap-3 mt-5">
              <Stat kpi="2–4 sem" label="Implementación" />
              <Stat kpi="100 %" label="Leads trazados" />
              <Stat kpi="SLA" label="Operación mensual" />
            </div>

            <div className="mt-5">
              <Link href="/casos/apcc" className="btn btn-secondary inline-flex items-center">
                Ver caso <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="card p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-md overflow-hidden ring-1 ring-slate-200 bg-white">
                <Image src="/logos/echevensko.svg" alt="Echevensko" fill className="object-contain p-1.5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-slate-900">Echevensko — La Magia de la Imaginación</h3>
                <p className="text-xs text-slate-600">Charlas corporativas · Revenue Share B2B</p>
              </div>
              <span className="ml-auto pill">Programa Socios</span>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li className="inline-flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-600 mt-0.5" /> Landing Next.js + Zoho CRM + nurturing</li>
              <li className="inline-flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-600 mt-0.5" /> Campañas Google/Meta segmentadas RR.HH.</li>
              <li className="inline-flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-600 mt-0.5" /> Cierre comercial + liquidación mensual transparente</li>
              <li className="inline-flex items-start gap-2"><CheckCircle2 size={16} className="text-brand-600 mt-0.5" /> Video corporativo por Dekaelo Media</li>
            </ul>

            <div className="grid grid-cols-3 gap-3 mt-5">
              <Stat kpi="15 días" label="Primer cierre" />
              <Stat kpi="↑ CVR" label="Optimización continua" />
              <Stat kpi="RS" label="Pago por venta válida" />
            </div>

            <div className="mt-5">
              <Link href="/casos/echevensko" className="btn btn-secondary inline-flex items-center">
                Ver caso <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banda de confianza */}
      <section className="section py-6">
        <div className="card p-4 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-xs">
          <span className="inline-flex items-center gap-2">
            <Users size={16} /> Ecosistema B2B e instituciones
          </span>
          <span className="inline-flex items-center gap-2">
            <Play size={16} /> Contenido editorial y vodcasts
          </span>
          <span className="inline-flex items-center gap-2">
            <Shield size={16} /> Seguridad: DNSSEC, SPF, DKIM, DMARC
          </span>
        </div>
      </section>

      {/* Tronx Cloud Suite */}
      <section className="section py-14">
        <div className="card p-6 border border-slate-200 rounded-2xl bg-gradient-to-br from-brand-50 to-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-1">
              <h2 className="text-xl font-bold text-slate-900">Tronx Cloud Suite</h2>
              <p className="text-sm text-slate-700 mt-2">
                Operación digital unificada: WebOps, Data & Analytics, CRM & Automation, Ads Ops y Security — administrada por Tronx Strategy.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/tronx-cloud" className="btn btn-secondary">Ver detalles</Link>
                <Link href="/contacto" className="btn btn-ghost">Solicitar demo</Link>
              </div>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Feature title="WebOps">Next.js · Vercel · Cloudflare · CI/CD</Feature>
              <Feature title="Data & Analytics">GA4, GTM, eventos, Looker</Feature>
              <Feature title="CRM & Automation">Zoho/HubSpot + Make</Feature>
              <Feature title="Ads Ops">Google · Meta · LinkedIn</Feature>
              <Feature title="Security & Compliance">SSL, DNSSEC, SPF, DKIM, DMARC</Feature>
              <Feature title="SLA & Soporte">Sprints, tickets y roadmap</Feature>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section py-14">
        <div className="card p-6 border border-slate-200 rounded-2xl bg-white">
          <h3 className="text-xl font-bold text-slate-900">¿Listo para crecer con un sistema que escala?</h3>
          <p className="text-sm text-slate-700 mt-2">
            Si tu oferta calza, partimos con <strong>Programa Socios</strong>. ¿Necesitas base tecnológica? Activamos <strong>Tronx Cloud Suite</strong>.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Link href="/programa-socios" className="btn btn-primary">Conocer Programa Socios</Link>
            <Link href="/tronx-cloud" className="btn btn-secondary">Ver Tronx Cloud Suite</Link>
            <a href="/catalogo/tronxgroup_catalogo_2026.pdf" className="btn btn-ghost" download>
              Descargar catálogo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// app/page.tsx
import Link from "next/link";
import Image from "next/image";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

export default function Home() {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 space-y-20">
        {/* HERO / HOLDING */}
        <section
          id="holding"
          className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-center"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Holding creativo-tecnológico · Chile
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              Tronx Group SpA —
              <span className="block text-slate-800">
                producción audiovisual, desarrollo web y medios editoriales.
              </span>
            </h1>
            <p className="text-sm text-slate-600 max-w-xl">
              Holding chileno que integra producción audiovisual, desarrollo web
              y medios editoriales para empresas, bancos, cámaras y
              organizaciones de Chile. Acompañamos proyectos
              corporativos desde su presencia digital hasta la producción de
              contenido y plataformas territoriales.
            </p>

            <div className="grid gap-3 text-xs text-slate-600 md:grid-cols-3">
              <div className="card p-3">
                <p className="font-semibold text-slate-900">
                  Presencia digital
                </p>
                <p className="mt-1">
                  Sitios corporativos modernos, portales gremiales y operación
                  digital medible.
                </p>
              </div>
              <div className="card p-3">
                <p className="font-semibold text-slate-900">
                  Contenido audiovisual
                </p>
                <p className="mt-1">
                  Vodcasts, cápsulas y formatos editoriales para directorios y
                  equipos internos.
                </p>
              </div>
              <div className="card p-3">
                <p className="font-semibold text-slate-900">
                  Plataformas territoriales
                </p>
                <p className="mt-1">
                  Directorios y medios propios como SANRAVAL para proyectos de
                  largo plazo.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#contacto" className="btn-primary text-xs">
                Coordinar una reunión
              </a>
              <a
                href="#unidades"
                className="text-xs font-semibold text-sky-700 hover:text-sky-600"
              >
                Ver unidades del holding →
              </a>
            </div>
          </div>

          {/* Panel derecho: foto/video hero */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
            <Image
              src="/images/hero/tronx-hero.jpg"
              alt="Tronx Group · Proyectos corporativos"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-4 space-y-2">
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-200">
                Operación 100% cloud
              </p>
              <p className="text-xs text-slate-100 max-w-xs">
                Vercel, Cloudflare, GitHub, Zoho CRM y analítica moderna para
                una operación liviana, documentada y trazable.
              </p>
            </div>
          </div>
        </section>

        {/* ECOSISTEMA */}
        <section id="ecosistema" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Ecosistema Tronx
            </h2>
            <p className="text-xs text-slate-500 max-w-md">
              Cuatro unidades que permiten abordar comunicación, infraestructura
              digital y territorio desde un mismo lugar, con continuidad y
              cuidado de marca.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="card p-4 flex gap-3">
              <div className="h-10 w-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src="/images/ecosistema/comunicacion.jpg"
                  alt="Comunicación y audiovisual"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Comunicación y audiovisual
                </h3>
                <p className="mt-2 text-slate-600">
                  Dekaelo Media y Tronx TV producen formatos para directorios,
                  colaboradores y audiencias externas.
                </p>
              </div>
            </div>
            <div className="card p-4 flex gap-3">
              <div className="h-10 w-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src="/images/ecosistema/infraestructura.jpg"
                  alt="Infraestructura digital"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Infraestructura digital
                </h3>
                <p className="mt-2 text-slate-600">
                  Tronx Strategy diseña y opera sitios, analítica y flujos
                  conectados a CRM para equipos comerciales y de comunicaciones.
                </p>
              </div>
            </div>
            <div className="card p-4 flex gap-3">
              <div className="h-10 w-10 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src="/images/ecosistema/territorio.jpg"
                  alt="Territorio y comunidad"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">
                  Territorio y comunidad
                </h3>
                <p className="mt-2 text-slate-600">
                  SANRAVAL articula empresas, turismo y ciudad en el eje
                  Santiago–Rancagua–Valparaíso como plataforma territorial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUCIONES (ancla #servicios para el menú) */}
        <section id="servicios" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Soluciones para organizaciones
            </h2>
            <p className="text-xs text-slate-500 max-w-md">
              Qué hace Tronx Group por empresas, bancos y cámaras.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="card group p-4 hover:border-sky-500/80">
              <h3 className="text-sm font-semibold text-slate-900">
                Web &amp; operación digital
              </h3>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>· Sitios corporativos y portales gremiales.</li>
                <li>· Formularios conectados a CRM y flujos internos.</li>
                <li>· Analítica para reportes ejecutivos y decisiones.</li>
              </ul>
            </div>
            <div className="card group p-4 hover:border-sky-500/80">
              <h3 className="text-sm font-semibold text-slate-900">
                Contenido &amp; comunicación
              </h3>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>· Vodcasts internos, cápsulas y videos institucionales.</li>
                <li>· Reels y piezas para campañas y formación.</li>
                <li>· Formatos editoriales para públicos internos y externos.</li>
              </ul>
            </div>
            <div className="card group p-4 hover:border-sky-500/80">
              <h3 className="text-sm font-semibold text-slate-900">
                Territorio &amp; largo plazo
              </h3>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>· Plataformas territoriales y directorios sectoriales.</li>
                <li>· Integración de datos, contenido y presencia digital.</li>
                <li>· Iniciativas propias como SANRAVAL.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* UNIDADES DEL HOLDING */}
<section id="unidades" className="space-y-6">
  <div className="flex items-baseline justify-between gap-4">
    <h2 className="text-xl font-semibold text-slate-900">
      Unidades del holding
    </h2>
    <p className="text-xs text-slate-500 max-w-md">
      Cuatro marcas con un mismo lenguaje. Tecnología actualizada,
      narrativa cuidada y una lectura territorial del Chile Central.
    </p>
  </div>

  <div className="grid gap-4 md:grid-cols-2 text-sm">

    {/* DEKAELO */}
    <div className="card p-4 flex flex-col justify-between hover:border-sky-500/60 transition">
      
      {/* Imagen uniforme */}
      <div className="h-28 w-full rounded-xl overflow-hidden mb-3 bg-slate-100">
        <Image
          src="/images/unidades/dekaelo-set.jpg"
          alt="Dekaelo Media"
          width={600}
          height={112}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Dekaelo Media / Dekaelo Pictures
        </p>
        <p className="text-sm font-semibold text-slate-900">
          Producción audiovisual estratégica y cinematográfica.
        </p>
        <ul className="space-y-1 text-slate-600">
          <li>· Vodcasts y contenido corporativo para bancos y empresas.</li>
          <li>· Producción y dirección cinematográfica.</li>
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <Link href="https://www.dekaelomedia.com" target="_blank" className="text-sky-700 hover:underline">
          Visitar sitio →
        </Link>
        <div className="flex items-center gap-2 text-slate-500">
          <a href="https://www.instagram.com/dekaelo_media/" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaInstagram className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/company/dekaelo-media/" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaLinkedinIn className="h-4 w-4" />
          </a>
          <a href="https://www.youtube.com/@dekaelo_media" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaYoutube className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>

    {/* TRONX STRATEGY */}
    <div className="card p-4 flex flex-col justify-between hover:border-sky-500/60 transition">
      
      <div className="h-28 w-full rounded-xl overflow-hidden mb-3 bg-slate-100">
        <Image
          src="/images/unidades/tronx-strategy-webops.jpg"
          alt="Tronx Strategy"
          width={600}
          height={112}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Tronx Strategy
        </p>
        <p className="text-sm font-semibold text-slate-900">
          Estudio de desarrollo web y operación digital B2B.
        </p>
        <ul className="space-y-1 text-slate-600">
          <li>· Sitios corporativos en Next.js sobre Vercel + Cloudflare.</li>
          <li>· CRM, WebOps y automatizaciones.</li>
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <Link href="https://www.tronxstrategy.com" target="_blank" className="text-sky-700 hover:underline">
          Visitar sitio →
        </Link>
        <div className="flex items-center gap-2 text-slate-500">
          <a href="https://www.linkedin.com/company/tronx-strategy" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaLinkedinIn className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/tronxstrategy" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaInstagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>

    {/* TRONX TV */}
    <div className="card p-4 flex flex-col justify-between hover:border-sky-500/60 transition">
      
      <div className="h-28 w-full rounded-xl overflow-hidden mb-3 bg-slate-100">
        <Image
          src="/images/unidades/tronx-tv-reality-day.jpg"
          alt="Tronx TV"
          width={600}
          height={112}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          Tronx TV
        </p>
        <p className="text-sm font-semibold text-slate-900">
          Medio audiovisual y editorial del holding.
        </p>
        <ul className="space-y-1 text-slate-600">
          <li>· Documentales, entrevistas y programas originales.</li>
          <li>· Proyecto insignia: Reality Day.</li>
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <Link href="https://www.tronxtv.com" target="_blank" className="text-sky-700 hover:underline">
          Visitar sitio →
        </Link>
        <div className="flex items-center gap-2 text-slate-500">
          <a href="https://youtube.com/@tronxtv" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaYoutube className="h-4 w-4" />
          </a>
          <a href="https://www.instagram.com/tronxtv/" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaInstagram className="h-4 w-4" />
          </a>
          <a href="https://web.facebook.com/tronxtv" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a href="https://x.com/tronx_tv" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaXTwitter className="h-4 w-4" />
          </a>
          <a href="https://www.tiktok.com/@tronxtv" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaTiktok className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>

    {/* SANRAVAL */}
    <div className="card p-4 flex flex-col justify-between hover:border-sky-500/60 transition">
      
      <div className="h-28 w-full rounded-xl overflow-hidden mb-3 bg-slate-100">
        <Image
          src="/images/unidades/sanraval-mapa.jpg"
          alt="SANRAVAL"
          width={600}
          height={112}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          SANRAVAL
        </p>
        <p className="text-sm font-semibold text-slate-900">
          Guía territorial del eje Santiago–Rancagua–Valparaíso.
        </p>
        <ul className="space-y-1 text-slate-600">
          <li>· Directorio territorial del Chile Central.</li>
          <li>· Editorial de turismo, ciudad e infraestructura.</li>
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs">
        <Link href="https://www.sanraval.cl" target="_blank" className="text-sky-700 hover:underline">
          Visitar sitio →
        </Link>
        <div className="flex items-center gap-2 text-slate-500">
          <a href="https://www.instagram.com/sanraval.cl" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaInstagram className="h-4 w-4" />
          </a>
          <a href="https://web.facebook.com/sanraval.cl" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaFacebookF className="h-4 w-4" />
          </a>
          <a href="https://youtube.com" target="_blank" className="p-1 rounded-full border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition">
            <FaYoutube className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>

  </div>
</section>

        {/* MODELO OPERATIVO */}
        <section id="modelo" className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Modelo operativo · Arquitectura cloud
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="card p-4">
              <h3 className="text-sm font-semibold text-slate-900">
                Web &amp; DevOps
              </h3>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>· Despliegues en Vercel y Cloudflare.</li>
                <li>· Repositorios en GitHub y flujos CI/CD.</li>
                <li>· Diseño pensado para mantenimiento simple.</li>
              </ul>
            </div>
            <div className="card p-4">
              <h3 className="text-sm font-semibold text-slate-900">
                Datos &amp; Relación
              </h3>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>· Zoho CRM y otras herramientas según proyecto.</li>
                <li>· Analítica con GA4 y Search Console.</li>
                <li>· Automatizaciones cuando agregan valor real.</li>
              </ul>
            </div>
            <div className="card p-4">
              <h3 className="text-sm font-semibold text-slate-900">
                Criterios de diseño
              </h3>
              <ul className="mt-2 space-y-1 text-slate-600">
                <li>· Infraestructura ligera y documentada.</li>
                <li>· Evitar complejidad innecesaria.</li>
                <li>· Preparado para crecer por capas, no por peso.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROYECTOS INSIGNIA / INICIATIVAS */}
<section id="iniciativas" className="space-y-6">
  <h2 className="text-xl font-semibold text-slate-900">
    Proyectos insignia
  </h2>

  <div className="grid gap-4 md:grid-cols-2 text-sm">
    {/* DOMO — Largometraje */}
<div
  className="card relative p-4 flex flex-col justify-between bg-cover bg-center overflow-hidden"
  style={{ backgroundImage: "url('/proyecto_domo.jpg')" }}
>
  {/* Overlay leve */}
  <div className="absolute inset-0 bg-black/20" />

  <div className="relative space-y-2 z-10">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
      Proyecto cinematográfico · Dekaelo Pictures
    </p>
    <p className="text-sm font-semibold text-white">
      DOMO — Largometraje en desarrollo.
    </p>
    <p className="text-slate-100">
      Primer largometraje de ficción del holding. Propiedad intelectual
      de largo plazo, con foco en festivales, salas independientes y
      plataformas de streaming.
    </p>
    <p className="text-xs text-slate-200 mt-1">
      Rol dentro del holding: consolida la identidad audiovisual de Tronx
      Group y alimenta Tronx TV con teasers, making-of y conversaciones en
      profundidad.
    </p>
  </div>
</div>

    {/* SANRAVAL — Guía territorial */}
    <div
      className="card relative p-4 flex flex-col justify-between bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/proyecto_sanraval.jpg')" }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative space-y-2 z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
          Plataforma territorial · SANRAVAL
        </p>
        <p className="text-sm font-semibold text-white">
          SANRAVAL — Guía del eje Santiago · Rancagua · Valparaíso.
        </p>
        <p className="text-slate-200">
          Directorio territorial y plataforma editorial que articula empresas,
          turismo, cultura y proyectos urbanos en una sola macrozona.
        </p>
        <p className="text-xs text-slate-300 mt-1">
          Rol para Tronx Group: diversificación hacia territorio, turismo,
          comercio local y proyectos urbanos, creando un activo editorial y
          comercial propio.
        </p>
      </div>
    </div>
  </div>
</section>
        {/* CONTACTO */}
        <section id="contacto" className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Contacto · Conversemos el próximo proyecto corporativo
          </h2>
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] text-sm">
            <form className="space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">
                    Nombre y apellido
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">
                    Empresa / institución
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-xs text-slate-500 mb-1">
                    Correo
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-1">
                  ¿Qué tipo de proyecto quieres revisar?
                </label>
                <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500">
                  <option>Sitio corporativo / portal gremial</option>
                  <option>Serie audiovisual / vodcast</option>
                  <option>Plataforma territorial / directorio</option>
                  <option>Otro proyecto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-1">
                  Cuéntanos brevemente de tu proyecto
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500"
                />
              </div>

              <button
                type="submit"
                className="btn-primary text-xs px-6 py-2"
              >
                Enviar mensaje
              </button>
            </form>

            <div className="space-y-4 text-sm">
              <div className="card p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Contacto directo
                </p>
                <p className="mt-2 text-slate-700 text-sm">
                  También puedes escribir a{" "}
                  <a
                    href="mailto:info@tronxgroup.com"
                    className="text-sky-700 hover:underline"
                  >
                    info@tronxgroup.com
                  </a>{" "}
                  o por WhatsApp al{" "}
                  <span className="text-sky-700">+56 9 2008 0031</span>.
                </p>
              </div>
              <div className="card p-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Forma de trabajo
                  </p>
                  <p className="mt-1 text-slate-600 text-xs">
                    Proyectos definidos con etapas claras, responsables directos
                    y entregables concretos. Podemos integrarnos al equipo
                    interno o trabajar como célula externa especializada.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Enfoque corporativo
                  </p>
                  <p className="mt-1 text-slate-600 text-xs">
                    Experiencia con bancos, cámaras, asociaciones y marcas
                    personales ejecutivas. Procesos documentados y base
                    tecnológica alineada con estándares actuales del mundo
                    corporativo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg border border-cyan-400/60 bg-slate-900 flex items-center justify-center text-xs font-semibold">
              TG
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-[0.12em] uppercase text-cyan-300">
                Tronx Group SpA
              </div>
              <div className="text-xs text-slate-400">
                Holding creativo-tecnológico
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
            <a href="#holding" className="hover:text-cyan-300">
              Holding
            </a>
            <a href="#ecosistema" className="hover:text-cyan-300">
              Ecosistema
            </a>
            <a href="#soluciones" className="hover:text-cyan-300">
              Soluciones
            </a>
            <a href="#unidades" className="hover:text-cyan-300">
              Unidades
            </a>
            <a href="#proyectos" className="hover:text-cyan-300">
              Proyectos
            </a>
            <a href="#modelo" className="hover:text-cyan-300">
              Modelo Cloud
            </a>
            <a href="#contacto" className="hover:text-cyan-300">
              Contacto
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#contacto"
              className="rounded-full border border-cyan-400/60 bg-cyan-400/10 px-4 py-2 text-xs font-semibold text-cyan-200 hover:bg-cyan-400/20"
            >
              Coordinar reunión
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 space-y-20">
        {/* HERO */}
        <section
          id="holding"
          className="grid gap-10 md:grid-cols-[1.2fr,1fr] items-center"
        >
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Holding creativo-tecnológico · Chile Central
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Tronx Group SpA —
              <span className="block text-slate-200">
                producción audiovisual, desarrollo web y medios editoriales.
              </span>
            </h1>
            <p className="text-sm text-slate-300 max-w-xl">
              Holding chileno que integra producción audiovisual, desarrollo web
              y medios editoriales para empresas, bancos, cámaras y
              organizaciones del Chile Central. Acompañamos proyectos
              corporativos desde su presencia digital hasta la producción de
              contenido y plataformas territoriales.
            </p>

            <div className="grid gap-3 text-xs text-slate-300 md:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3">
                <p className="font-semibold text-slate-100">
                  Presencia digital
                </p>
                <p className="mt-1">
                  Sitios corporativos modernos, portales gremiales y WebOps
                  medible.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3">
                <p className="font-semibold text-slate-100">
                  Contenido audiovisual
                </p>
                <p className="mt-1">
                  Vodcasts, cápsulas y formatos editoriales para directorios y
                  equipos internos.
                </p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-3">
                <p className="font-semibold text-slate-100">
                  Plataformas territoriales
                </p>
                <p className="mt-1">
                  Directorios y medios propios como SANRAVAL para proyectos de
                  largo plazo.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contacto"
                className="rounded-full bg-cyan-400 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Coordinar una reunión
              </a>
              <a
                href="#unidades"
                className="text-xs font-semibold text-slate-300 hover:text-cyan-300"
              >
                Ver unidades del holding →
              </a>
            </div>
          </div>

          {/* Panel derecho: espacio para foto/video */}
          <div className="relative h-64 md:h-80 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden">
            <div className="absolute inset-0 opacity-60 bg-[url('/tronx-hero.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-4 space-y-2">
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-cyan-300">
                Operación 100% cloud
              </p>
              <p className="text-xs text-slate-200 max-w-xs">
                Vercel, Cloudflare, GitHub, Zoho CRM y analítica moderna para
                una operación liviana, documentada y trazable.
              </p>
            </div>
          </div>
        </section>

        {/* ECOSISTEMA */}
        <section id="ecosistema" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-50">
              Ecosistema Tronx
            </h2>
            <p className="text-xs text-slate-400 max-w-md">
              Cuatro unidades que permiten abordar comunicación, infraestructura
              digital y territorio desde un mismo lugar, con continuidad y
              cuidado de marca.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Comunicación y audiovisual
              </h3>
              <p className="mt-2 text-slate-300">
                Dekaelo Media y Tronx TV producen formatos para directorios,
                colaboradores y audiencias externas.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Infraestructura digital
              </h3>
              <p className="mt-2 text-slate-300">
                Tronx Strategy diseña y opera sitios, analítica y flujos
                conectados a CRM para equipos comerciales y de comunicaciones.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Territorio y comunidad
              </h3>
              <p className="mt-2 text-slate-300">
                SANRAVAL articula empresas, turismo y ciudad en el eje
                Santiago–Rancagua–Valparaíso como plataforma territorial.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUCIONES */}
        <section id="soluciones" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-50">
              Soluciones para organizaciones
            </h2>
            <p className="text-xs text-slate-400 max-w-md">
              Qué hace Tronx Group por empresas, bancos y cámaras.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-4 hover:border-cyan-400/60">
              <h3 className="text-sm font-semibold text-slate-100">
                Web &amp; operación digital
              </h3>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li>· Sitios corporativos y portales gremiales.</li>
                <li>· Formularios conectados a CRM y flujos internos.</li>
                <li>· Analítica para reportes ejecutivos y decisiones.</li>
              </ul>
            </div>
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-4 hover:border-cyan-400/60">
              <h3 className="text-sm font-semibold text-slate-100">
                Contenido &amp; comunicación
              </h3>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li>· Vodcasts internos, cápsulas y videos institucionales.</li>
                <li>· Reels y piezas para campañas y formación.</li>
                <li>· Formatos editoriales para públicos internos y externos.</li>
              </ul>
            </div>
            <div className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-4 hover:border-cyan-400/60">
              <h3 className="text-sm font-semibold text-slate-100">
                Territorio &amp; largo plazo
              </h3>
              <ul className="mt-2 space-y-1 text-slate-300">
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
            <h2 className="text-xl font-semibold text-slate-50">
              Unidades del holding
            </h2>
            <p className="text-xs text-slate-400 max-w-md">
              Cuatro marcas con un mismo lenguaje. Tecnología actualizada,
              narrativa cuidada y una lectura territorial del Chile Central.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            {/* Dekaelo */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Dekaelo Media / Dekaelo Pictures
                    </p>
                    <p className="text-sm font-semibold text-slate-100">
                      Producción audiovisual estratégica y cinematográfica.
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-lg border border-slate-700 bg-slate-900 text-[0.65rem] flex items-center justify-center">
                    LOGO
                  </div>
                </div>
                <ul className="space-y-1 text-slate-300">
                  <li>· Vodcasts y contenido corporativo para bancos y empresas.</li>
                  <li>· Piezas audiovisuales para comunicación interna y externa.</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <Link href="#" className="text-cyan-300 hover:underline">
                  Visitar sitio →
                </Link>
                <div className="flex items-center gap-2 text-slate-400">
                  <span>IG</span>
                  <span>in</span>
                </div>
              </div>
            </div>

            {/* Tronx Strategy */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Tronx Strategy
                    </p>
                    <p className="text-sm font-semibold text-slate-100">
                      Estudio de desarrollo web y operación digital B2B.
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-lg border border-slate-700 bg-slate-900 text-[0.65rem] flex items-center justify-center">
                    LOGO
                  </div>
                </div>
                <ul className="space-y-1 text-slate-300">
                  <li>· Sitios corporativos en Next.js sobre Vercel + Cloudflare.</li>
                  <li>· Integración con CRM y automatizaciones comerciales.</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <Link href="#" className="text-cyan-300 hover:underline">
                  Visitar sitio →
                </Link>
                <div className="flex items-center gap-2 text-slate-400">
                  <span>IG</span>
                  <span>FB</span>
                </div>
              </div>
            </div>

            {/* Tronx TV */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Tronx TV
                    </p>
                    <p className="text-sm font-semibold text-slate-100">
                      Medio audiovisual y editorial del holding.
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-lg border border-slate-700 bg-slate-900 text-[0.65rem] flex items-center justify-center">
                    LOGO
                  </div>
                </div>
                <ul className="space-y-1 text-slate-300">
                  <li>· Documentales, entrevistas y contenido de conversación.</li>
                  <li>· Proyecto insignia: Reality Day.</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <Link href="#" className="text-cyan-300 hover:underline">
                  Visitar sitio →
                </Link>
                <div className="flex flex-wrap items-center gap-2 text-slate-400">
                  <span>YT</span>
                  <span>IG</span>
                  <span>FB</span>
                  <span>X</span>
                  <span>TT</span>
                </div>
              </div>
            </div>

            {/* SANRAVAL */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      SANRAVAL
                    </p>
                    <p className="text-sm font-semibold text-slate-100">
                      Guía territorial del eje Santiago–Rancagua–Valparaíso.
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-lg border border-slate-700 bg-slate-900 text-[0.65rem] flex items-center justify-center">
                    LOGO
                  </div>
                </div>
                <ul className="space-y-1 text-slate-300">
                  <li>· Directorio de empresas, servicios y proyectos del Chile Central.</li>
                  <li>· Cobertura editorial de turismo, ciudad y movilidad.</li>
                </ul>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs">
                <Link href="#" className="text-cyan-300 hover:underline">
                  Visitar sitio →
                </Link>
                <div className="flex flex-wrap items-center gap-2 text-slate-400">
                  <span>IG</span>
                  <span>FB</span>
                  <span>YT</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MODELO OPERATIVO */}
        <section id="modelo" className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Modelo operativo · Arquitectura cloud
          </h2>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Web &amp; DevOps
              </h3>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li>· Despliegues en Vercel y Cloudflare.</li>
                <li>· Repositorios en GitHub y flujos CI/CD.</li>
                <li>· Diseño pensado para mantenimiento simple.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Datos &amp; Relación
              </h3>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li>· Zoho CRM y otras herramientas según proyecto.</li>
                <li>· Analítica con GA4 y Search Console.</li>
                <li>· Automatizaciones cuando agregan valor real.</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="text-sm font-semibold text-slate-100">
                Criterios de diseño
              </h3>
              <ul className="mt-2 space-y-1 text-slate-300">
                <li>· Infraestructura ligera y documentada.</li>
                <li>· Evitar complejidad innecesaria.</li>
                <li>· Preparado para crecer por capas, no por peso.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROYECTOS INSIGNIA */}
        <section id="proyectos" className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Proyectos insignia
          </h2>
          <div className="grid gap-4 md:grid-cols-2 text-sm">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Proyecto cinematográfico · Dekaelo Pictures
                </p>
                <p className="text-sm font-semibold text-slate-100">
                  DOMO — Largometraje en desarrollo.
                </p>
                <p className="text-slate-300">
                  Primer largometraje de ficción del holding. Propiedad
                  intelectual de largo plazo, con foco en festivales, salas
                  independientes y plataformas de streaming.
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Rol dentro del holding: consolida la identidad audiovisual de
                  Tronx Group y alimenta Tronx TV con teasers, making-of y
                  conversaciones en profundidad.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Plataforma territorial · SANRAVAL
                </p>
                <p className="text-sm font-semibold text-slate-100">
                  SANRAVAL — Guía del eje Santiago · Rancagua · Valparaíso.
                </p>
                <p className="text-slate-300">
                  Directorio territorial y plataforma editorial que articula
                  empresas, turismo, cultura y proyectos urbanos en una sola
                  macrozona.
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Rol para Tronx Group: diversificación hacia territorio,
                  turismo, comercio local y proyectos urbanos, creando un activo
                  editorial y comercial propio.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-50">
            Contacto · Conversemos el próximo proyecto corporativo
          </h2>
          <div className="grid gap-8 md:grid-cols-[1.2fr,1fr] text-sm">
            <form className="space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Nombre y apellido
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-400/70"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Empresa / institución
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-400/70"
                  />
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Correo
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-400/70"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-400/70"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  ¿Qué tipo de proyecto quieres revisar?
                </label>
                <select className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-400/70">
                  <option>Sitio corporativo / portal gremial</option>
                  <option>Serie audiovisual / vodcast</option>
                  <option>Plataforma territorial / directorio</option>
                  <option>Otro proyecto</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Cuéntanos brevemente de tu proyecto
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs text-slate-100 outline-none focus:border-cyan-400/70"
                />
              </div>

              <button
                type="submit"
                className="rounded-full bg-cyan-400 px-5 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-300"
              >
                Enviar mensaje
              </button>
            </form>

            <div className="space-y-4 text-sm">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Contacto directo
                </p>
                <p className="mt-2 text-slate-200 text-sm">
                  También puedes escribir a{" "}
                  <a
                    href="mailto:info@tronxgroup.com"
                    className="text-cyan-300 hover:underline"
                  >
                    info@tronxgroup.com
                  </a>{" "}
                  o por WhatsApp al{" "}
                  <span className="text-cyan-300">+56 9 2008 0031</span>.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 space-y-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Forma de trabajo
                  </p>
                  <p className="mt-1 text-slate-300 text-xs">
                    Proyectos definidos con etapas claras, responsables directos
                    y entregables concretos. Podemos integrarnos al equipo
                    interno o trabajar como célula externa especializada.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Enfoque corporativo
                  </p>
                  <p className="mt-1 text-slate-300 text-xs">
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

        {/* FOOTER */}
        <footer className="border-t border-slate-900 pt-6 mt-6 pb-4 text-[0.7rem] text-slate-500">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} Tronx Group SpA. Holding
              creativo-tecnológico con base en Providencia, Santiago de Chile.
            </p>
            <p className="text-slate-600">
              Sitio desarrollado por{" "}
              <span className="text-cyan-300">Tronx Strategy</span>.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

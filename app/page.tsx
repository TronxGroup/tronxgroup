"use client";

const UNIDADES = [
  {
    name: "Dekaelo Media / Dekaelo Pictures",
    role: "Producción audiovisual estratégica y cinematográfica.",
    bullets: [
      "Vodcasts y contenido corporativo para bancos, empresas y organizaciones.",
      "Piezas audiovisuales para comunicación interna y externa.",
      "Desarrollo de largometrajes y proyectos de autor bajo sello Dekaelo Pictures."
    ],
    link: "https://www.dekaelomedia.com"
  },
  {
    name: "Tronx Strategy",
    role: "Estudio de desarrollo web y operación digital B2B.",
    bullets: [
      "Sitios corporativos en Next.js sobre Vercel + Cloudflare.",
      "SEO, WebOps y medición con analítica moderna para directorios y gerencias.",
      "Integración con CRM y automatizaciones comerciales."
    ],
    link: "https://www.tronxstrategy.com"
  },
  {
    name: "Tronx TV",
    role: "Medio audiovisual y editorial del holding.",
    bullets: [
      "Formatos documentales, entrevistas y contenido de conversación.",
      "Proyecto insignia: Reality Day (historias reales con mirada cinematográfica).",
      "Plataforma para marcas, personas y proyectos vinculados a territorio."
    ],
    link: "https://www.tronxtv.com"
  },
  {
    name: "SANRAVAL",
    role: "Guía territorial del eje Santiago–Rancagua–Valparaíso.",
    bullets: [
      "Directorio de empresas, servicios y proyectos del Chile Central.",
      "Cobertura editorial de turismo, ciudad, movilidad e iniciativas locales.",
      "Activo territorial del holding con foco en largo plazo."
    ],
    link: "https://www.sanraval.cl"
  }
];

export default function HomePage() {
  return (
    <>
      {/* HERO CORPORATIVO */}
      <section className="section pt-16 lg:pt-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-400">
              Holding creativo-tecnológico
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50 tracking-tight">
              Tronx Group SpA
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
              Holding chileno que integra{" "}
              <span className="text-sky-400">
                producción audiovisual, desarrollo web y medios editoriales
              </span>{" "}
              para empresas, bancos, cámaras y organizaciones del Chile Central.
            </p>
            <p className="mt-3 text-sm text-slate-400 max-w-xl">
              Acompañamos proyectos corporativos desde la definición de su
              presencia digital hasta la producción de contenido y plataformas
              territoriales, sobre una arquitectura cloud ligera y escalable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#servicios" className="btn-primary">
                Soluciones para empresas
              </a>
              <a href="#contacto" className="btn-ghost">
                Coordinar una reunión
              </a>
            </div>
          </div>

          {/* Tarjeta ecosistema, sin números */}
          <div className="relative">
            <div className="card p-6">
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
                Ecosistema Tronx
              </p>
              <p className="mt-3 text-sm text-slate-200">
                Cuatro unidades que permiten abordar{" "}
                <span className="text-sky-400">
                  comunicación, infraestructura digital y territorio
                </span>{" "}
                desde un mismo lugar.
              </p>
              <div className="mt-5 grid gap-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      Comunicación y marca
                    </p>
                    <p className="mt-1">
                      Dekaelo Media y Tronx TV producen piezas y formatos
                      editoriales para directorios, colaboradores y audiencias
                      externas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      Infraestructura digital
                    </p>
                    <p className="mt-1">
                      Tronx Strategy diseña y opera sitios, analítica y
                      automatizaciones para equipos comerciales y de
                      comunicaciones.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      Territorio y comunidad
                    </p>
                    <p className="mt-1">
                      SANRAVAL conecta empresas, turismo y ciudad en el eje
                      Santiago–Rancagua–Valparaíso como plataforma territorial
                      de largo plazo.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[11px] text-slate-500">
                Operación 100% cloud sobre Vercel, Cloudflare, GitHub, Zoho CRM
                y analítica moderna, manteniendo estructura liviana y trazable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE: QUÉ HACEMOS PARA EMPRESAS */}
      <section
        id="servicios"
        className="section border-t border-slate-800/70 bg-slate-950/80"
      >
        <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-400">
          Soluciones para organizaciones
        </p>
        <h2 className="section-title">
          Qué hace Tronx Group por empresas, bancos y cámaras.
        </h2>
        <p className="section-subtitle">
          Combinamos estrategia, producción audiovisual y desarrollo web para
          proyectos que necesitan orden, continuidad y una estética cuidada.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Web & operación digital
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Sitios corporativos y portales gremiales.</li>
              <li>Integración con CRM y formularios operativos.</li>
              <li>Analítica para reportes ejecutivos y directorios.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Contenido & comunicación
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Vodcasts internos, cápsulas y videos institucionales.</li>
              <li>Reels y piezas para campañas y formación.</li>
              <li>Formatos editoriales para públicos internos y externos.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Territorio & proyectos de largo plazo
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Plataformas territoriales y directorios sectoriales.</li>
              <li>Integración de datos, contenido y presencia digital.</li>
              <li>
                Iniciativas propias como SANRAVAL para articular ciudad y
                empresas.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* UNIDADES DEL HOLDING */}
      <section id="unidades" className="section border-t border-slate-800/70">
        <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-400">
          Unidades del holding
        </p>
        <h2 className="section-title">Cuatro marcas, un mismo lenguaje.</h2>
        <p className="section-subtitle">
          Cada unidad tiene su foco, pero todas comparten tecnología actualizada,
          narrativa cuidada y lectura territorial del Chile Central.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {UNIDADES.map((unit) => (
            <article key={unit.name} className="card p-6">
              <h3 className="text-sm font-semibold text-slate-50">
                {unit.name}
              </h3>
              <p className="mt-2 text-xs text-sky-400">{unit.role}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {unit.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-sky-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={unit.link}
                  target="_blank"
                  className="text-xs text-sky-400 hover:text-sky-300"
                  rel="noreferrer"
                >
                  Visitar sitio →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODELO CLOUD MÁS SINTÉTICO */}
      <section
        id="modelo"
        className="section border-t border-slate-800/70 bg-gradient-to-b from-slate-950 to-black"
      >
        <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-400">
          Modelo operativo
        </p>
        <h2 className="section-title">
          Arquitectura cloud como estándar, no como extra.
        </h2>
        <p className="section-subtitle">
          Los proyectos del holding comparten una base técnica común: sitios
          rápidos, seguros y medibles, conectados a herramientas de CRM y
          reporting que ya usan las áreas corporativas.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">Web & DevOps</h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Despliegues en Vercel y Cloudflare.</li>
              <li>Repositorios en GitHub y CI/CD.</li>
              <li>Diseño pensado para mantenimiento simple.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Datos & Relación
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Zoho CRM y otras herramientas según proyecto.</li>
              <li>Analítica con GA4 y Search Console.</li>
              <li>Automatizaciones cuando agregan valor real.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Criterios de diseño
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Infraestructura ligera y documentada.</li>
              <li>Evitar complejidad innecesaria.</li>
              <li>Preparado para crecer por capas, no por peso.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* INICIATIVAS PROPIAS (DOMO + SANRAVAL) */}
      <section
        id="iniciativas"
        className="section border-t border-slate-800/70 bg-slate-950/80"
      >
        <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-400">
          Iniciativas propias
        </p>
        <h2 className="section-title">
          Proyectos que consolidan la identidad de Tronx Group.
        </h2>
        <p className="section-subtitle">
          Además de trabajar para clientes, Tronx Group impulsa proyectos
          propios que fortalecen su posición en audiovisual y territorio.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2 text-sm">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              DOMO — Largometraje en desarrollo
            </h3>
            <p className="mt-3 text-slate-300">
              Primer largometraje de ficción del holding, desarrollado por
              Dekaelo Pictures. Un proyecto que combina cine de género,
              producción eficiente y una ruta de festivales y plataformas
              digitales.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              DOMO posiciona a Tronx Group en la industria audiovisual de alto
              nivel y alimenta Tronx TV con contenido derivado (teasers,
              making-of, conversaciones).
            </p>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              SANRAVAL — Guía del eje central
            </h3>
            <p className="mt-3 text-slate-300">
              Directorio territorial y plataforma editorial que articula el eje
              Santiago–Rancagua–Valparaíso como una sola macrozona. Empresas,
              turismo, cultura y proyectos urbanos en una misma referencia.
            </p>
            <a
              href="https://www.sanraval.cl"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-xs text-sky-400 hover:text-sky-300"
            >
              Visitar sanraval.cl →
            </a>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="section border-t border-slate-800/70 pb-20"
      >
        <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-400">
          Contacto
        </p>
        <h2 className="section-title">
          Conversemos el próximo proyecto corporativo.
        </h2>
        <p className="section-subtitle">
          Si estás planificando un sitio corporativo, un portal gremial, una
          serie audiovisual o una plataforma territorial, podemos revisar juntos
          el alcance y el enfoque adecuado.
        </p>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <form
            className="card p-6 grid gap-4 text-sm"
            action="#"
            method="post"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Nombre y apellido
                </label>
                <input
                  name="name"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Empresa / institución
                </label>
                <input
                  name="company"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Correo
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Teléfono / WhatsApp
                </label>
                <input
                  name="phone"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">
                ¿Qué tipo de proyecto quieres revisar?
              </label>
              <select
                name="interest"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
              >
                <option>Sitio corporativo / Tronx Strategy</option>
                <option>Producción audiovisual / Dekaelo Media</option>
                <option>Proyecto territorial / SANRAVAL</option>
                <option>Coproducción / DOMO u otros</option>
                <option>Otro / mixto</option>
              </select>
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">
                Cuéntanos brevemente de tu proyecto
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-sky-400"
              />
            </div>
            <button type="submit" className="btn-primary w-fit">
              Enviar mensaje
            </button>
            <p className="text-[11px] text-slate-400">
              También puedes escribir a{" "}
              <a
                href="mailto:info@tronxgroup.com"
                className="text-sky-400 hover:text-sky-300"
              >
                info@tronxgroup.com
              </a>{" "}
              o por WhatsApp al +56 9 2008 0031.
            </p>
          </form>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Forma de trabajo
              </h3>
              <p className="mt-3 text-xs text-slate-300">
                Proyectos definidos con etapas claras, responsables directos y
                entregables concretos. Podemos integrarnos al equipo interno o
                trabajar como célula externa especializada.
              </p>
            </div>
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Enfoque para clientes corporativos
              </h3>
              <p className="mt-3 text-xs text-slate-300">
                Experiencia con bancos, cámaras, asociaciones y marcas
                personales ejecutivas. Comunicación cuidada, procesos documentados
                y una base tecnológica alineada con estándares actuales del
                mundo corporativo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

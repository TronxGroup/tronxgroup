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
      "SEO, WebOps y medición con analítica moderna para equipos directivos.",
      "Integración con CRM y automatizaciones comerciales."
    ],
    link: "https://www.tronxstrategy.com"
  },
  {
    name: "Tronx TV",
    role: "Medio audiovisual y editorial del holding.",
    bullets: [
      "Formatos documentales, entrevistas y contenido de conversación.",
      "Proyecto insignia: Reality Day, historias reales con mirada cinematográfica.",
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
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-400">
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
              Acompañamos proyectos corporativos desde su presencia digital hasta
              la producción de contenido y plataformas territoriales, utilizando
              una arquitectura cloud ligera, documentada y escalable.
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

          {/* Tarjeta ecosistema, estilo más elegante */}
          <div className="relative">
            <div className="absolute inset-0 -top-6 -right-6 rounded-3xl bg-sky-500/10 blur-3xl pointer-events-none" />
            <div className="relative card p-6 border border-slate-800/70 bg-gradient-to-br from-slate-950/90 to-black/80">
              <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-slate-400">
                Ecosistema Tronx
              </p>
              <p className="mt-3 text-sm text-slate-200">
                Cuatro unidades que permiten abordar{" "}
                <span className="text-sky-400">
                  comunicación, infraestructura digital y territorio
                </span>{" "}
                desde un mismo lugar, con criterios de continuidad y cuidado de
                marca.
              </p>
              <div className="mt-5 space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      Comunicación y audiovisual
                    </p>
                    <p className="mt-1">
                      Dekaelo Media y Tronx TV producen formatos para
                      directorios, colaboradores y audiencias externas.
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
                      Tronx Strategy diseña y opera sitios, analítica y flujos
                      conectados a CRM para equipos comerciales y de
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
                      SANRAVAL articula empresas, turismo y ciudad en el eje
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
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-400">
            Soluciones para organizaciones
          </p>
          <h2 className="section-title">
            Qué hace Tronx Group por empresas, bancos y cámaras.
          </h2>
          <p className="section-subtitle max-w-3xl">
            Combinamos estrategia, producción audiovisual y desarrollo web para
            proyectos que requieren orden, continuidad y una estética cuidada,
            con foco en equipos directivos, comunicaciones y áreas comerciales.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
            <div className="card p-5 border border-slate-800/60">
              <h3 className="text-sm font-semibold text-slate-50">
                Web & operación digital
              </h3>
              <ul className="mt-3 space-y-1.5 text-slate-300">
                <li>Sitios corporativos y portales gremiales.</li>
                <li>Formularios conectados a CRM y flujos internos.</li>
                <li>Analítica para reportes ejecutivos y decisiones.</li>
              </ul>
            </div>
            <div className="card p-5 border border-slate-800/60">
              <h3 className="text-sm font-semibold text-slate-50">
                Contenido & comunicación
              </h3>
              <ul className="mt-3 space-y-1.5 text-slate-300">
                <li>Vodcasts internos, cápsulas y videos institucionales.</li>
                <li>Reels y piezas para campañas y formación.</li>
                <li>Formatos editoriales para públicos internos y externos.</li>
              </ul>
            </div>
            <div className="card p-5 border border-slate-800/60">
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
        </div>
      </section>

      {/* UNIDADES DEL HOLDING */}
      <section id="unidades" className="section border-t border-slate-800/70">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-400">
            Unidades del holding
          </p>
          <h2 className="section-title">Cuatro marcas con un mismo lenguaje.</h2>
          <p className="section-subtitle max-w-3xl">
            Cada unidad tiene su foco, pero todas comparten tecnología
            actualizada, narrativa cuidada y una lectura territorial del Chile
            Central.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {UNIDADES.map((unit) => (
              <article
                key={unit.name}
                className="card p-6 border border-slate-800/60 bg-slate-950/80"
              >
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
        </div>
      </section>

      {/* MODELO CLOUD */}
      <section
        id="modelo"
        className="section border-t border-slate-800/70 bg-gradient-to-b from-slate-950 to-black"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-400">
            Modelo operativo
          </p>
          <h2 className="section-title">
            Arquitectura cloud como estándar, no como extra.
          </h2>
          <p className="section-subtitle max-w-3xl">
            Los proyectos del holding comparten una base técnica común: sitios
            rápidos, seguros y medibles, conectados a herramientas de CRM y
            reporting que dialogan bien con el mundo corporativo.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
            <div className="card p-5 border border-slate-800/60">
              <h3 className="text-sm font-semibold text-slate-50">
                Web & DevOps
              </h3>
              <ul className="mt-3 space-y-1.5 text-slate-300">
                <li>Despliegues en Vercel y Cloudflare.</li>
                <li>Repositorios en GitHub y flujos CI/CD.</li>
                <li>Diseño pensado para mantenimiento simple.</li>
              </ul>
            </div>
            <div className="card p-5 border border-slate-800/60">
              <h3 className="text-sm font-semibold text-slate-50">
                Datos & Relación
              </h3>
              <ul className="mt-3 space-y-1.5 text-slate-300">
                <li>Zoho CRM y otras herramientas según proyecto.</li>
                <li>Analítica con GA4 y Search Console.</li>
                <li>Automatizaciones cuando agregan valor real.</li>
              </ul>
            </div>
            <div className="card p-5 border border-slate-800/60">
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
        </div>
      </section>

      {/* DOMO */}
      <section
        id="domo"
        className="section border-t border-slate-800/70 bg-slate-950/80"
      >
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-400">
              Proyecto cinematográfico · Dekaelo Pictures
            </p>
            <h2 className="section-title">DOMO — Largometraje en desarrollo.</h2>
            <p className="section-subtitle max-w-3xl">
              Primer largometraje de ficción del holding, desarrollado por
              Dekaelo Pictures. Un proyecto que combina cine de género,
              producción eficiente y una ruta de festivales y plataformas
              digitales.
            </p>
          </div>
          <div className="card p-5 border border-slate-800/60 text-sm">
            <h3 className="text-sm font-semibold text-slate-50">
              Rol dentro del holding
            </h3>
            <p className="mt-3 text-slate-300">
              DOMO consolida la identidad audiovisual de Tronx Group, posiciona a
              Dekaelo Pictures como unidad cinematográfica y alimenta Tronx TV
              con contenido derivado: teasers, making-of y conversaciones en
              profundidad.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              La película se concibe como propiedad intelectual de largo plazo,
              con foco en distribución en festivales, salas independientes y
              plataformas de streaming.
            </p>
          </div>
        </div>
      </section>

      {/* SANRAVAL */}
      <section
        id="sanraval"
        className="section border-t border-slate-800/70 bg-gradient-to-b from-black to-slate-950"
      >
        <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-400">
              Plataforma territorial · SANRAVAL
            </p>
            <h2 className="section-title">
              SANRAVAL — Guía del eje Santiago · Rancagua · Valparaíso.
            </h2>
            <p className="section-subtitle max-w-3xl">
              Directorio territorial y plataforma editorial que articula el eje
              Santiago–Rancagua–Valparaíso como una sola macrozona. Empresas,
              turismo, cultura y proyectos urbanos en una misma referencia.
            </p>
          </div>
          <div className="card p-5 border border-slate-800/60 text-sm">
            <h3 className="text-sm font-semibold text-slate-50">
              Rol para Tronx Group
            </h3>
            <p className="mt-3 text-slate-300">
              SANRAVAL diversifica el holding hacia territorio, turismo, comercio
              local y proyectos urbanos, creando un activo editorial y comercial
              propio, con potencial de expansión a otras macrozonas del país.
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
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] font-semibold tracking-[0.26em] uppercase text-slate-400">
            Contacto
          </p>
          <h2 className="section-title">
            Conversemos el próximo proyecto corporativo.
          </h2>
          <p className="section-subtitle max-w-3xl">
            Si estás planificando un sitio corporativo, un portal gremial, una
            serie audiovisual o una plataforma territorial, podemos revisar
            juntos el alcance y el enfoque adecuado.
          </p>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <form
              className="card p-6 grid gap-4 text-sm border border-slate-800/60 bg-slate-950/80"
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
              <div className="card p-5 border border-slate-800/60 bg-slate-950/80">
                <h3 className="text-sm font-semibold text-slate-50">
                  Forma de trabajo
                </h3>
                <p className="mt-3 text-xs text-slate-300">
                  Proyectos definidos con etapas claras, responsables directos y
                  entregables concretos. Podemos integrarnos al equipo interno o
                  trabajar como célula externa especializada.
                </p>
              </div>
              <div className="card p-5 border border-slate-800/60 bg-slate-950/80">
                <h3 className="text-sm font-semibold text-slate-50">
                  Enfoque para clientes corporativos
                </h3>
                <p className="mt-3 text-xs text-slate-300">
                  Experiencia con bancos, cámaras, asociaciones y marcas
                  personales ejecutivas. Comunicación cuidada, procesos
                  documentados y una base tecnológica alineada con estándares
                  actuales del mundo corporativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

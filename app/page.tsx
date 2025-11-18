"use client";

const UNIDADES = [
  {
    name: "Dekaelo Media / Dekaelo Pictures",
    role: "Producción audiovisual estratégica y cinematográfica.",
    bullets: [
      "Vodcasts y contenido corporativo con estética cinematográfica.",
      "Planes de contenido para marcas e instituciones.",
      "Desarrollo de largometrajes y proyectos de autor."
    ],
    link: "https://www.dekaelomedia.com"
  },
  {
    name: "Tronx Strategy",
    role: "Estudio de desarrollo web y operación digital B2B.",
    bullets: [
      "Sitios en Next.js desplegados sobre Vercel + Cloudflare.",
      "SEO, WebOps y medición con analítica moderna.",
      "Integración con CRM y automatizaciones para equipos comerciales."
    ],
    link: "https://www.tronxstrategy.com"
  },
  {
    name: "Tronx TV",
    role: "Medio audiovisual y editorial del holding.",
    bullets: [
      "Formatos documentales, entrevistas y crónicas del territorio.",
      "Proyecto insignia: Reality Day (2025–2030).",
      "Espacio para marcas, personas y proyectos del Chile Central."
    ],
    link: "https://www.tronxtv.com"
  },
  {
    name: "SANRAVAL",
    role: "Guía territorial del eje Santiago–Rancagua–Valparaíso.",
    bullets: [
      "Directorio de empresas, pymes y servicios por comuna.",
      "Cobertura de turismo, gastronomía y proyectos urbanos.",
      "Plataforma editorial del Chile Central."
    ],
    link: "https://www.sanraval.cl"
  }
];

export default function HomePage() {
  return (
    <>
      {/* HERO MÁS CORPORATIVO */}
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
              Holding chileno que une{" "}
              <span className="text-cyan-300">
                producción audiovisual, desarrollo web, medios editoriales y
                plataformas territoriales
              </span>{" "}
              bajo una misma visión: contar historias que también operan como
              sistemas.
            </p>
            <p className="mt-3 text-sm text-slate-400 max-w-xl">
              Desde Chile Central hacia LATAM, ayudamos a empresas, marcas e
              instituciones a alinear su presencia digital, su narrativa y su
              operación sobre una arquitectura cloud ligera y escalable.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#unidades" className="btn-primary">
                Explorar unidades del holding
              </a>
              <a href="#contacto" className="btn-ghost">
                Coordinar una reunión
              </a>
            </div>
          </div>

          {/* LADO DERECHO: EN VEZ DE KPIs, UNA “MAPA” DEL ECOSISTEMA */}
          <div className="relative">
            <div className="card p-6">
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
                Ecosistema Tronx
              </p>
              <p className="mt-3 text-sm text-slate-200">
                Cuatro unidades conectadas, un solo lenguaje:{" "}
                <span className="text-cyan-300">
                  estrategia, imagen y territorio
                </span>
                .
              </p>
              <div className="mt-5 grid gap-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      Imagen & relato
                    </p>
                    <p className="mt-1">
                      Dekaelo Media y Tronx TV construyen la capa audiovisual:
                      vodcasts, documentales, largometrajes y formatos editoriales.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      Infraestructura & operación
                    </p>
                    <p className="mt-1">
                      Tronx Strategy diseña y opera sitios web, analítica y
                      automatizaciones para equipos comerciales y proyectos B2B.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <div>
                    <p className="font-semibold text-slate-100">
                      Territorio & comunidad
                    </p>
                    <p className="mt-1">
                      SANRAVAL conecta empresas, turismo y ciudad en el eje
                      Santiago–Rancagua–Valparaíso, como plataforma territorial
                      de largo plazo.
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[11px] text-slate-500">
                Operamos 100% en la nube sobre Vercel, Cloudflare, GitHub, Zoho
                CRM y analítica moderna, con foco en eficiencia y escalabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIDAD / QUÉ HACEMOS, SIN TANTA INFO FINANCIERA */}
      <section className="section border-t border-slate-800/70">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-400">
              Identidad y propósito
            </p>
            <h2 className="section-title">
              Historias que también son sistemas de operación.
            </h2>
            <p className="section-subtitle">
              Tronx Group nace de la mezcla entre cine, desarrollo web y proyectos
              territoriales. La misma lógica que guía un rodaje –preproducción,
              estructura, montaje– se aplica a cómo diseñamos sitios, medios y
              plataformas para empresas e instituciones.
            </p>
          </div>
          <div className="grid gap-4 text-sm">
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-slate-50">Misión</h3>
              <p className="mt-2 text-slate-300">
                Potenciar organizaciones reales mediante tecnología creativa:
                sitios web, contenido audiovisual y medios que se miden en
                reputación, posicionamiento y relación con el territorio.
              </p>
            </div>
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Cómo trabajamos
              </h3>
              <p className="mt-2 text-slate-300">
                Operamos con equipos pequeños, infraestructura cloud y una red
                de colaboradores, para mantener estructura liviana y capacidad de
                respuesta rápida ante proyectos corporativos, institucionales o
                urbanos.
              </p>
            </div>
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
          Cada unidad tiene su foco, pero todas comparten la misma visión:
          estética cuidada, tecnología actualizada y lectura territorial del
          Chile Central.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {UNIDADES.map((unit) => (
            <article key={unit.name} className="card p-6">
              <h3 className="text-sm font-semibold text-slate-50">
                {unit.name}
              </h3>
              <p className="mt-2 text-xs text-cyan-300">{unit.role}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {unit.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-[5px] h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <a
                  href={unit.link}
                  target="_blank"
                  className="text-xs text-cyan-300 hover:text-cyan-200"
                  rel="noreferrer"
                >
                  Visitar sitio →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MODELO CLOUD, MÁS SINTÉTICO */}
      <section
        id="modelo"
        className="section border-t border-slate-800/70 bg-gradient-to-b from-tronx-bg to-black/60"
      >
        <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-400">
          Modelo operativo
        </p>
        <h2 className="section-title">Arquitectura cloud como estándar, no como extra.</h2>
        <p className="section-subtitle">
          Los proyectos del holding comparten una base técnica común: sitios
          rápidos, seguros y medibles, con flujos de datos conectados a CRM y
          herramientas de reporting.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">Web & DevOps</h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Despliegues sobre Vercel y Cloudflare.</li>
              <li>Repositorios en GitHub y CI/CD.</li>
              <li>Diseño pensado para mantenimiento simple.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Datos & Relación
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Zoho CRM y herramientas afines según cada proyecto.</li>
              <li>Analítica con GA4 y Search Console.</li>
              <li>Automatizaciones con Make/Zapier cuando tiene sentido.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Criterios de diseño
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Infraestructura ligera, auditable y documentada.</li>
              <li>Evitar sobre-complejidad técnica innecesaria.</li>
              <li>Preparado para crecer por capas, no por peso.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DOMO, SIN NÚMEROS */}
      <section
        id="domo"
        className="section border-t border-slate-800/70 bg-tronx-bg"
      >
        <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-400">
          Proyecto cinematográfico · Dekaelo Pictures
        </p>
        <h2 className="section-title">DOMO — Largometraje en desarrollo.</h2>
        <p className="section-subtitle">
          DOMO es el primer largometraje de ficción del holding. Un proyecto de
          Dekaelo Pictures que conecta cine de género, producción eficiente y
          una ruta de festivales y plataformas digitales.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] text-sm">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Ficha general
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Largometraje de ficción chileno, 70–90 minutos.</li>
              <li>Rodaje programado para 2026.</li>
              <li>
                Ruta prevista: festivales internacionales, cines independientes y
                plataformas OTT.
              </li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Rol dentro de Tronx Group
            </h3>
            <p className="mt-3 text-slate-300">
              DOMO consolida a Dekaelo Pictures como unidad cinematográfica,
              fortalece el posicionamiento de Tronx Group en la industria
              audiovisual y alimenta Tronx TV con contenido derivado
              (teasers, making-of, conversaciones).
            </p>
          </div>
        </div>
      </section>

      {/* SANRAVAL */}
      <section
        id="sanraval"
        className="section border-t border-slate-800/70 bg-gradient-to-b from-black/70 to-tronx-bg"
      >
        <p className="text-xs font-semibold tracking-[0.26em] uppercase text-slate-400">
          Plataforma territorial · SANRAVAL
        </p>
        <h2 className="section-title">
          SANRAVAL — Guía del eje Santiago · Rancagua · Valparaíso.
        </h2>
        <p className="section-subtitle">
          SANRAVAL es un directorio y plataforma editorial que entiende la
          macrozona cordillera–valle–mar como un solo sistema urbano. Empresas,
          turismo, cultura y proyectos urbanos en una misma referencia.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Para personas
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Buscar negocios y servicios por comuna y región.</li>
              <li>Explorar rutas, barrios y experiencias del eje central.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Para empresas
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Presencia en un entorno editorial cuidado.</li>
              <li>Posibilidad de aparecer en especiales y contenidos.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Para el holding
            </h3>
            <p className="mt-3 text-slate-300">
              SANRAVAL es un activo territorial y editorial propio de Tronx Group
              que permite unir marcas, ciudades y proyectos a largo plazo.
            </p>
            <a
              href="https://www.sanraval.cl"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex text-xs text-cyan-300 hover:text-cyan-200"
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
          Conversemos el siguiente proyecto del ecosistema Tronx.
        </h2>
        <p className="section-subtitle">
          Desarrollo web, producción audiovisual, medios editoriales o
          iniciativas territoriales. Podemos trabajar cada unidad por separado o
          diseñar una solución integrada.
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
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Empresa / institución
                </label>
                <input
                  name="company"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
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
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">
                  Teléfono / WhatsApp
                </label>
                <input
                  name="phone"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-300 mb-1">
                ¿Qué te interesa explorar?
              </label>
              <select
                name="interest"
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
              >
                <option>Desarrollo web / Tronx Strategy</option>
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
                className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400"
              />
            </div>
            <button type="submit" className="btn-primary w-fit">
              Enviar mensaje
            </button>
            <p className="text-[11px] text-slate-400">
              También puedes escribir directamente a{" "}
              <a
                href="mailto:info@tronxgroup.com"
                className="text-cyan-300 hover:text-cyan-200"
              >
                info@tronxgroup.com
              </a>{" "}
              o por WhatsApp al +56 9 2008 0031.
            </p>
          </form>

          <div className="space-y-4 text-sm text-slate-300">
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Qué puedes esperar de Tronx
              </h3>
              <p className="mt-3 text-xs text-slate-300">
                Un equipo pequeño, especializado y conectado a una red de
                colaboradores. Menos estructura pesada, más enfoque en hacer que
                los proyectos funcionen y duren en el tiempo.
              </p>
            </div>
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Una empresa pensada a largo plazo
              </h3>
              <p className="mt-3 text-xs text-slate-300">
                Tronx Group no es solo una suma de marcas. Es una forma de
                trabajar donde cada proyecto –un sitio, una serie, un directorio
                territorial– se diseña como un activo que puede seguir creciendo
                más allá de un solo encargo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

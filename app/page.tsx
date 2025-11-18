"use client";

const UNIDADES = [
  {
    name: "Dekaelo Media / Dekaelo Pictures",
    role: "Producción audiovisual estratégica y cinematográfica.",
    bullets: [
      "Vodcasts corporativos, documentales e institucionales.",
      "Planes de contenido para marcas y organizaciones.",
      "Producción de largometrajes: DOMO (2026) y Las Horribles (2027)."
    ],
    link: "https://www.dekaelomedia.com"
  },
  {
    name: "Tronx Strategy",
    role: "Estudio de desarrollo web y operación digital B2B.",
    bullets: [
      "Sitios en Next.js sobre Vercel + Cloudflare.",
      "SEO, WebOps y medición con GA4 + Search Console.",
      "Integración con Zoho CRM, HubSpot y automatizaciones Make/Zapier."
    ],
    link: "https://www.tronxstrategy.com"
  },
  {
    name: "Tronx TV",
    role: "Medio audiovisual y editorial con identidad cinematográfica.",
    bullets: [
      "Formatos documentales, conversación e historias del territorio.",
      "Proyecto insignia: Reality Day (2025–2030).",
      "Plataforma para marcas, personas y proyectos del Chile Central."
    ],
    link: "https://www.tronxtv.com"
  },
  {
    name: "SANRAVAL",
    role: "Directorio territorial y plataforma editorial del eje Santiago–Rancagua–Valparaíso.",
    bullets: [
      "Guía de empresas, pymes, turismo, gastronomía y servicios.",
      "Cobertura de proyectos urbanos, movilidad e infraestructura.",
      "Activo territorial, comercial y editorial del holding."
    ],
    link: "https://www.sanraval.cl"
  }
];

const ROADMAP = [
  {
    year: "2025",
    focus: "Validación del ecosistema",
    result: "Lanzamiento Tronx TV + SANRAVAL."
  },
  {
    year: "2026",
    focus: "Consolidación",
    result: "Rodaje DOMO + expansión web y clientes B2B."
  },
  {
    year: "2027–2028",
    focus: "Expansión LATAM",
    result: "Chile, Perú, México y Colombia."
  },
  {
    year: "2029–2030",
    focus: "Escala e IP",
    result: "50 clientes web, 10 socios estratégicos, 50k suscriptores."
  }
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="section pt-16 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
          <div>
            <p className="section-header-eyebrow">Holding creativo-tecnológico</p>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50 tracking-tight">
              Tronx Group SpA
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl">
              Holding chileno que integra{" "}
              <span className="text-cyan-300">
                producción audiovisual, desarrollo web, medios editoriales y
                plataformas territoriales
              </span>{" "}
              para empresas, instituciones y proyectos del Chile Central y
              LATAM.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contacto" className="btn-primary">
                Conversemos un proyecto
              </a>
              <a href="#finanzas" className="btn-ghost">
                Ver indicadores 2025–2030
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-slate-400">
              <span>Constitución legal: 17 de noviembre 2025</span>
              <span className="hidden sm:inline-block">·</span>
              <span>Industria: Audiovisual · Web · Medios · Territorio</span>
            </div>
          </div>

          <div className="relative">
            <div className="card p-6">
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-slate-400">
                Resumen ejecutivo
              </p>
              <p className="mt-3 text-sm text-slate-200">
                Operamos{" "}
                <span className="text-cyan-300">100% en la nube</span> sobre
                Vercel, Cloudflare, GitHub, Zoho y GA4, con costos fijos mínimos
                y capacidad de escalar inmediatamente nuevos clientes y
                proyectos.
              </p>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <dt className="text-slate-400">Costo fijo mensual</dt>
                  <dd className="mt-1 text-slate-100 font-semibold">
                    $554.135 CLP
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400">Ingresos 2026 estimados</dt>
                  <dd className="mt-1 text-slate-100 font-semibold">
                    $23–40 MM CLP
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400">Margen operativo</dt>
                  <dd className="mt-1 text-slate-100 font-semibold">
                    50–60%
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400">Endeudamiento</dt>
                  <dd className="mt-1 text-emerald-300 font-semibold">0</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIDAD */}
      <section className="section border-t border-slate-800/70">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="section-header-eyebrow">Identidad y propósito</p>
            <h2 className="section-title">
              Tecnología creativa con foco en territorio y empresas reales.
            </h2>
            <p className="section-subtitle">
              Desarrollamos sitios web, contenido audiovisual y medios
              editoriales que se miden en reputación, crecimiento y
              posicionamiento. Operamos con estética cinematográfica, datos y
              una arquitectura cloud replicable en cualquier ciudad.
            </p>
          </div>
          <div className="grid gap-4 text-sm">
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-slate-50">Misión</h3>
              <p className="mt-2 text-slate-300">
                Potenciar empresas e instituciones mediante tecnología creativa,
                conectando desarrollo web, audiovisual y medios editoriales con
                impacto medible en negocio.
              </p>
            </div>
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Visión 2030
              </h3>
              <p className="mt-2 text-slate-300">
                Ser referente latinoamericano en producción audiovisual moderna,
                desarrollo web premium, narrativa territorial y contenido
                editorial con estética cinematográfica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UNIDADES */}
      <section id="unidades" className="section border-t border-slate-800/70">
        <p className="section-header-eyebrow">Estructura del holding</p>
        <h2 className="section-title">Cuatro unidades, un solo ecosistema.</h2>
        <p className="section-subtitle">
          Cada unidad opera con autonomía creativa pero comparte la misma
          infraestructura tecnológica y visión territorial.
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

      {/* MODELO CLOUD */}
      <section
        id="modelo"
        className="section border-t border-slate-800/70 bg-gradient-to-b from-tronx-bg to-black/60"
      >
        <p className="section-header-eyebrow">Modelo operativo</p>
        <h2 className="section-title">Arquitectura cloud Tronx.</h2>
        <p className="section-subtitle">
          Infraestructura ligera, segura y replicable para desplegar proyectos
          web, campañas y medios con la misma lógica de un SaaS global.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">Web & DevOps</h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Vercel — hosting serverless, CI/CD.</li>
              <li>Cloudflare — DNS, CDN, WAF, SSL.</li>
              <li>GitHub — repositorios y despliegue.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Datos & Automatización
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Zoho CRM — leads, ventas, automatización.</li>
              <li>Make + HubSpot (APCC) — integraciones gremiales.</li>
              <li>GA4 + Search Console — métricas y SEO.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Ventajas operativas
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Operación 100% digital y remota.</li>
              <li>Replicable en 72 horas a nuevos clientes.</li>
              <li>Costos fijos mínimos, seguridad avanzada.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FINANZAS */}
      <section id="finanzas" className="section border-t border-slate-800/70">
        <p className="section-header-eyebrow">Indicadores clave</p>
        <h2 className="section-title">Estado financiero 2025–2026.</h2>
        <p className="section-subtitle">
          Operación lean, sin deuda, con gastos fijos controlados y margen
          proyectado superior al 50%.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Costos fijos mensuales
            </h3>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              $554.135{" "}
              <span className="text-xs text-slate-400 align-middle">CLP</span>
            </p>
            <p className="mt-3 text-slate-300 text-xs">
              Incluye Adobe CC, OpenAI, Zoho CRM, Google Workspace, contabilidad,
              oficina virtual, móvil y pauta publicitaria Google/Meta.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Ingresos estimados 2026
            </h3>
            <p className="mt-3 text-2xl font-semibold text-slate-50">
              $23–40 MM{" "}
              <span className="text-xs text-slate-400 align-middle">CLP</span>
            </p>
            <p className="mt-3 text-slate-300 text-xs">
              Fuentes: desarrollo web (Tronx Strategy), producción audiovisual
              (Dekaelo), medios (Tronx TV), SANRAVAL y acuerdos de revenue share
              con socios.
            </p>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Márgenes & deuda
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Margen operativo proyectado: 50–60%.</li>
              <li>Endeudamiento: 0.</li>
              <li>Modelo pensado para escalar sin estructura pesada.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DOMO */}
      <section
        id="domo"
        className="section border-t border-slate-800/70 bg-tronx-bg"
      >
        <p className="section-header-eyebrow">
          Proyecto cinematográfico · Dekaelo Pictures
        </p>
        <h2 className="section-title">DOMO — Largometraje 2026.</h2>
        <p className="section-subtitle">
          Primer largometraje de ficción del holding. DOMO posiciona a Tronx
          Group en la industria audiovisual de alto nivel y abre la puerta a
          distribución internacional.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] text-sm">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Ficha estratégica
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Tipo: largometraje de ficción (70–90 min).</li>
              <li>Presupuesto: $10.000.000 CLP (financiamiento privado).</li>
              <li>Rodaje: abril 2026 · Post: mayo–julio 2026.</li>
              <li>
                Postulación: BARS Buenos Aires + festivales SANFIC, Guadalajara,
                Málaga, BAFICI.
              </li>
              <li>
                Distribución objetivo: cines independientes + plataformas como
                Amazon Prime Video, Apple TV, Google Play o Tubi.
              </li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Rol dentro del holding
            </h3>
            <p className="mt-3 text-slate-300">
              DOMO genera propiedad intelectual con valor comercial a largo
              plazo, legitima a Dekaelo Pictures como unidad cinematográfica y
              alimenta Tronx TV con teasers, making-of y contenido exclusivo.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Proyección de retorno 2027–2028: $2–10 MM CLP combinando
              licencias OTT, revenue share, exhibición alternativa y contenido
              derivado.
            </p>
          </div>
        </div>
      </section>

      {/* SANRAVAL */}
      <section
        id="sanraval"
        className="section border-t border-slate-800/70 bg-gradient-to-b from-black/70 to-tronx-bg"
      >
        <p className="section-header-eyebrow">
          Plataforma territorial · SANRAVAL
        </p>
        <h2 className="section-title">
          SANRAVAL — Guía del eje Santiago · Rancagua · Valparaíso.
        </h2>
        <p className="section-subtitle">
          Directorio territorial y plataforma editorial que articula la
          macrozona cordillera–valle–mar. Un activo digital de largo plazo para
          empresas, turistas y ciudades.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3 text-sm">
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Qué ofrece
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Fichas de empresas y pymes por comuna y región.</li>
              <li>Cobertura de turismo, gastronomía, servicios y cultura.</li>
              <li>Noticias y reportajes del eje central.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Enfoque territorial
            </h3>
            <ul className="mt-3 space-y-1.5 text-slate-300">
              <li>Macrozona SANRAVAL: Santiago, Rancagua, Valparaíso.</li>
              <li>
                Microzonas: litoral creativo, polos productivos del valle,
                corredores de servicios.
              </li>
              <li>Infraestructura: Ruta 5, 68, 78, ferrocarriles y puertos.</li>
            </ul>
          </div>
          <div className="card p-5">
            <h3 className="text-sm font-semibold text-slate-50">
              Rol para Tronx Group
            </h3>
            <p className="mt-3 text-slate-300">
              SANRAVAL diversifica el holding hacia territorio, turismo,
              comercio local y proyectos urbanos, creando un activo editorial y
              comercial propio con potencial de expansión a otras macrozonas.
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

      {/* ROADMAP */}
      <section className="section border-t border-slate-800/70">
        <p className="section-header-eyebrow">Ruta 2025–2030</p>
        <h2 className="section-title">Roadmap Tronx Group.</h2>
        <p className="section-subtitle">
          Un plan de crecimiento ordenado: primero validar, luego consolidar,
          después escalar hacia LATAM con IP propia.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-4 text-sm">
          {ROADMAP.map((item) => (
            <div key={item.year} className="card p-5">
              <p className="text-xs font-semibold text-cyan-300">
                {item.year}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                {item.focus}
              </h3>
              <p className="mt-2 text-slate-300 text-xs">{item.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="section border-t border-slate-800/70 pb-20"
      >
        <p className="section-header-eyebrow">Contacto</p>
        <h2 className="section-title">
          Conversemos cómo Tronx puede operar tu próximo proyecto.
        </h2>
        <p className="section-subtitle">
          Escríbenos y coordinamos una reunión para revisar tu caso: web,
          audiovisual, territorial o una combinación de todo el ecosistema
          Tronx.
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
                ¿En qué podemos ayudarte?
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
                Datos legales
              </h3>
              <ul className="mt-3 space-y-1.5 text-xs">
                <li>Razón social: Tronx Group SpA.</li>
                <li>RUT: 78.297.435-1.</li>
                <li>Constitución: 17 de noviembre de 2025.</li>
                <li>Giros: publicidad, marketing digital, contenido audiovisual.</li>
                <li>Domicilio tributario: Antonio Bellet 193, Of. 1210, Providencia.</li>
              </ul>
            </div>
            <div className="card p-5">
              <h3 className="text-sm font-semibold text-slate-50">
                Un holding diseñado para durar
              </h3>
              <p className="mt-3 text-xs text-slate-300">
                Tronx Group está pensado para crecer con baja fricción, alto
                valor y rendimiento sostenible: arquitectura cloud, IP
                audiovisual, plataforma territorial y servicios web replicables
                en cualquier ciudad de Chile y LATAM.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

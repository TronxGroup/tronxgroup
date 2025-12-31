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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[0.7rem] font-semibold tracking-[0.14em] text-slate-600">
      {children}
    </span>
  );
}

function Stat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function Card({
  eyebrow,
  title,
  desc,
  bullets,
  href,
  cta,
  imageSrc,
  imageAlt,
  socials,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
  socials?: Array<{ href: string; icon: React.ReactNode; label: string }>;
}) {
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-sky-500/60 hover:shadow-sm">
      <div className="h-28 w-full overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={900}
          height={320}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-4 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          {eyebrow}
        </p>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{desc}</p>

        <ul className="mt-3 space-y-1 text-sm text-slate-600">
          {bullets.map((b) => (
            <li key={b}>· {b}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3 text-xs">
        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-sky-700 hover:underline"
          >
            {cta} →
          </a>
        ) : (
          <Link
            href={href as any}
            className="font-semibold text-sky-700 hover:underline"
          >
            {cta} →
          </Link>
        )}

        {socials?.length ? (
          <div className="flex items-center gap-2 text-slate-500">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="rounded-full border border-slate-200 p-1 transition hover:border-sky-500 hover:text-sky-600"
              >
                {s.icon}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-10 space-y-20">
        {/* HERO — posicionamiento de FIRMA (no holding) */}
        <section className="grid items-center gap-10 md:grid-cols-[1.15fr,1fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Pill>Firma especializada</Pill>
              <Pill>Producción &amp; WebOps</Pill>
              <Pill>Operación cloud</Pill>
              <Pill>Chile</Pill>
            </div>

            <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
              Tronx Group —{" "}
              <span className="block text-slate-800">
                estudio premium para comunicación audiovisual y operación digital.
              </span>
            </h1>

            <p className="max-w-xl text-sm text-slate-600">
              Trabajamos como <span className="font-semibold text-slate-800">célula experta</span>:
              menos capas, más criterio y ejecución directa. Entregamos sitios y sistemas
              conectados a CRM, y producimos contenido con estándar cinematográfico para
              equipos internos y marca empleadora.
            </p>

            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Web &amp; WebOps</p>
                <p className="mt-1 text-sm text-slate-600">
                  Sitios rápidos y mantenibles, medición y automatizaciones donde agregan valor.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Contenido audiovisual</p>
                <p className="mt-1 text-sm text-slate-600">
                  Vodcasts, cápsulas, institucionales y formatos editoriales para cultura interna.
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-sm font-semibold text-slate-900">Editorial &amp; territorio</p>
                <p className="mt-1 text-sm text-slate-600">
                  Proyectos propios y plataformas territoriales con visión de largo plazo.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href="#contacto" className="btn-primary text-xs">
                Coordinar una reunión
              </a>
              <a
                href="#servicios"
                className="text-xs font-semibold text-sky-700 hover:text-sky-600"
              >
                Ver qué hacemos →
              </a>
            </div>

            <p className="text-xs text-slate-500">
              * Tronx Group SpA es la razón social de facturación. Las marcas son líneas de solución.
            </p>
          </div>

          {/* Panel derecho: hero visual + prueba social breve */}
          <div className="relative h-72 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 md:h-[22rem]">
            <Image
              src="/images/hero/tronx-hero.jpg"
              alt="Tronx Group · Producción y operación digital"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

            <div className="relative flex h-full flex-col justify-end p-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-200">
                Entrega rápida · Criterio senior
              </p>
              <p className="mt-2 text-sm text-slate-100">
                Arquitectura cloud (Vercel, Cloudflare, GitHub), CRM y analítica moderna
                para operar liviano, con trazabilidad y documentación.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <Stat label="Enfoque" value="B2B / Instituciones" />
                <Stat label="Modo" value="Célula experta" />
                <Stat label="Entrega" value="2–4 semanas" />
              </div>
            </div>
          </div>
        </section>

        {/* SERVICIOS — paquetes claros (evita sensación “holding”) */}
        <section id="servicios" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Qué hacemos (en simple)
            </h2>
            <p className="max-w-md text-xs text-slate-500">
              Tres líneas principales, con entregables claros y operación medible.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Web &amp; operación digital
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Sitios + medición + flujos
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                <li>· Sitios corporativos y portales gremiales</li>
                <li>· Formularios conectados a CRM</li>
                <li>· GA4/GTM/Search Console</li>
                <li>· Optimización de performance</li>
              </ul>
              <div className="mt-4">
                <a href="#contacto" className="text-xs font-semibold text-sky-700 hover:underline">
                  Cotizar WebOps →
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Contenido audiovisual
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Producción corporativa premium
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                <li>· Vodcasts multicámara</li>
                <li>· Cápsulas internas y formación</li>
                <li>· Institucionales y cobertura</li>
                <li>· Post y color consistente</li>
              </ul>
              <div className="mt-4">
                <a href="#contacto" className="text-xs font-semibold text-sky-700 hover:underline">
                  Cotizar audiovisual →
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Editorial &amp; cultura
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900">
                Narrativas para equipos y marca
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                <li>· Series internas / employer branding</li>
                <li>· Formatos documentales (Reality Day)</li>
                <li>· Piezas derivadas para RRSS</li>
                <li>· Guion, rodaje, edición</li>
              </ul>
              <div className="mt-4">
                <a href="#unidades" className="text-xs font-semibold text-sky-700 hover:underline">
                  Ver formatos →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ TRONX — elimina “holding vibes” y sube confianza */}
        <section id="porque" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Por qué funciona
            </h2>
            <p className="max-w-md text-xs text-slate-500">
              Diseñado para organizaciones que necesitan velocidad, claridad y un estándar alto.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">Ejecución directa</h3>
              <p className="mt-2 text-sm text-slate-600">
                Menos intermediarios. Proyectos con etapas claras, responsables directos y entregables concretos.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">Operación trazable</h3>
              <p className="mt-2 text-sm text-slate-600">
                CRM, medición y flujos cuando aportan control real. Lo que se hace, se puede medir y repetir.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">Estándar narrativo</h3>
              <p className="mt-2 text-sm text-slate-600">
                No es “contenido por contenido”. Es comunicación con intención, ritmo y estética consistente.
              </p>
            </div>
          </div>
        </section>

        {/* UNIDADES — renombrar para que no sea “holding”: “Líneas de trabajo” */}
        <section id="unidades" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Líneas de trabajo
            </h2>
            <p className="max-w-md text-xs text-slate-500">
              Marcas con foco específico. Una sola operación y un mismo estándar de ejecución.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card
              eyebrow="Audiovisual / Producción"
              title="Dekaelo Media — producción estratégica y cinematográfica"
              desc="Formatos corporativos premium para bancos, empresas e instituciones: vodcasts, cápsulas e institucionales."
              bullets={[
                "Vodcasts multicámara con sonido profesional",
                "Edición, color y entregas listas para uso interno/externo",
                "Cobertura y piezas para campañas",
              ]}
              href="https://www.dekaelomedia.com"
              cta="Visitar Dekaelo"
              imageSrc="/images/unidades/dekaelo-set.jpg"
              imageAlt="Dekaelo Media"
              socials={[
                { href: "https://www.instagram.com/dekaelo_media/", icon: <FaInstagram className="h-4 w-4" />, label: "Instagram Dekaelo" },
                { href: "https://www.linkedin.com/company/dekaelo-media/", icon: <FaLinkedinIn className="h-4 w-4" />, label: "LinkedIn Dekaelo" },
                { href: "https://www.youtube.com/@dekaelo_media", icon: <FaYoutube className="h-4 w-4" />, label: "YouTube Dekaelo" },
              ]}
            />

            <Card
              eyebrow="Web / CRM / Automatización"
              title="Tronx Strategy — WebOps y operación digital B2B"
              desc="Sitios modernos en Next.js con despliegue cloud, medición y flujos conectados a CRM para equipos comerciales y comunicaciones."
              bullets={[
                "Sitios corporativos + performance",
                "GA4/GTM/Search Console",
                "Zoho CRM + automatizaciones cuando conviene",
              ]}
              href="https://www.tronxstrategy.com"
              cta="Visitar Tronx Strategy"
              imageSrc="/images/unidades/tronx-strategy-webops.jpg"
              imageAlt="Tronx Strategy"
              socials={[
                { href: "https://www.linkedin.com/company/tronx-strategy", icon: <FaLinkedinIn className="h-4 w-4" />, label: "LinkedIn Tronx Strategy" },
                { href: "https://www.instagram.com/tronxstrategy", icon: <FaInstagram className="h-4 w-4" />, label: "Instagram Tronx Strategy" },
              ]}
            />

            <Card
              eyebrow="Editorial / Formatos propios"
              title="Tronx TV — medio audiovisual y formatos originales"
              desc="Documentales, conversación y series. Proyecto insignia: Reality Day (narrativa premium para cultura y marca empleadora)."
              bullets={[
                "Series internas (RRHH / cultura)",
                "Episodios documentales (Reality Day)",
                "Piezas derivadas para RRSS",
              ]}
              href="https://www.tronxtv.com"
              cta="Visitar Tronx TV"
              imageSrc="/images/unidades/tronx-tv-reality-day.jpg"
              imageAlt="Tronx TV"
              socials={[
                { href: "https://youtube.com/@tronxtv", icon: <FaYoutube className="h-4 w-4" />, label: "YouTube Tronx TV" },
                { href: "https://www.instagram.com/tronxtv/", icon: <FaInstagram className="h-4 w-4" />, label: "Instagram Tronx TV" },
                { href: "https://web.facebook.com/tronxtv", icon: <FaFacebookF className="h-4 w-4" />, label: "Facebook Tronx TV" },
                { href: "https://x.com/tronx_tv", icon: <FaXTwitter className="h-4 w-4" />, label: "X Tronx TV" },
                { href: "https://www.tiktok.com/@tronxtv", icon: <FaTiktok className="h-4 w-4" />, label: "TikTok Tronx TV" },
              ]}
            />

            <Card
              eyebrow="Territorio / Plataforma"
              title="SANRAVAL — guía territorial del Chile Central"
              desc="Directorio y editorial del eje Santiago–Rancagua–Valparaíso. Un activo propio de largo plazo conectado a economía local."
              bullets={[
                "Directorio territorial",
                "Editorial de turismo, ciudad e infraestructura",
                "Base para proyectos urbanos y alianzas",
              ]}
              href="https://www.sanraval.cl"
              cta="Visitar SANRAVAL"
              imageSrc="/images/unidades/sanraval-mapa.jpg"
              imageAlt="SANRAVAL"
              socials={[
                { href: "https://www.instagram.com/sanraval.cl", icon: <FaInstagram className="h-4 w-4" />, label: "Instagram SANRAVAL" },
                { href: "https://web.facebook.com/sanraval.cl", icon: <FaFacebookF className="h-4 w-4" />, label: "Facebook SANRAVAL" },
                { href: "https://youtube.com", icon: <FaYoutube className="h-4 w-4" />, label: "YouTube SANRAVAL" },
              ]}
            />
          </div>
        </section>

        {/* MODELO OPERATIVO — mantener pero simplificar el tono */}
        <section id="modelo" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Cómo operamos (cloud + simple)
            </h2>
            <p className="max-w-md text-xs text-slate-500">
              Infraestructura liviana, segura y documentada. Complejidad solo cuando agrega valor.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">Web &amp; despliegue</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                <li>· Vercel + Cloudflare</li>
                <li>· GitHub + CI/CD</li>
                <li>· Mantenible y rápido</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">Datos &amp; relación</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                <li>· Zoho CRM según necesidad</li>
                <li>· GA4 + Search Console</li>
                <li>· Automatizaciones selectivas</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-900">Criterio de diseño</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-600">
                <li>· Documentación simple</li>
                <li>· Evitar “tech por ego”</li>
                <li>· Crecer por capas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* INICIATIVAS — mantener, pero quitar “holding” del copy */}
        <section id="iniciativas" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Activos propios (largo plazo)
            </h2>
            <p className="max-w-md text-xs text-slate-500">
              Proyectos que fortalecen identidad, reputación y oportunidades futuras.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-cover bg-center p-5"
              style={{ backgroundImage: "url('/proyecto_domo.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/35" />
              <div className="relative z-10 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-100">
                  Proyecto cinematográfico
                </p>
                <p className="text-sm font-semibold text-white">
                  DOMO — largometraje en desarrollo
                </p>
                <p className="text-sm text-slate-100">
                  IP de largo plazo con foco en festivales y plataformas. Alimenta el universo editorial
                  con teasers, making-of y conversaciones.
                </p>
              </div>
            </div>

            <div
              className="relative overflow-hidden rounded-2xl border border-slate-200 bg-cover bg-center p-5"
              style={{ backgroundImage: "url('/proyecto_sanraval.jpg')" }}
            >
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative z-10 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
                  Plataforma territorial
                </p>
                <p className="text-sm font-semibold text-white">
                  SANRAVAL — guía del eje Santiago · Rancagua · Valparaíso
                </p>
                <p className="text-sm text-slate-200">
                  Directorio y editorial para economía local, turismo y ciudad. Un activo que puede crecer
                  con alianzas sin demandar operación pesada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO — CTA más “premium” y menos “equipo grande” */}
        <section id="contacto" className="space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-slate-900">
              Contacto
            </h2>
            <p className="max-w-md text-xs text-slate-500">
              Escríbenos y coordinamos una reunión breve para entender el proyecto y confirmar encaje.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 items-stretch">
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Contacto directo
              </p>
              <p className="mt-3 text-sm text-slate-700">
                Correo o WhatsApp. Respondemos con claridad y proponemos el siguiente paso.
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-slate-800">Correo:</span>{" "}
                  <a href="mailto:info@tronxgroup.com" className="text-sky-700 hover:underline">
                    info@tronxgroup.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-800">WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/56920080031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 hover:underline"
                  >
                    +56 9 2008 0031
                  </a>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:info@tronxgroup.com" className="btn-primary text-xs px-6 py-2">
                  Escribir un correo
                </a>
                <a
                  href="https://wa.me/56920080031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-xs px-6 py-2"
                >
                  Abrir WhatsApp
                </a>
              </div>

              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Cómo trabajamos
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Proyectos definidos por etapas, con entregables concretos. Podemos integrarnos a tu equipo
                  o trabajar como célula externa especializada.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Para quién es
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>· Bancos, empresas e instituciones</li>
                  <li>· Cámaras / asociaciones</li>
                  <li>· Equipos de comunicaciones y RRHH</li>
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Ideal si necesitas
                </p>
                <ul className="mt-2 space-y-1 text-sm text-slate-600">
                  <li>· Subir estándar audiovisual sin “agencia pesada”</li>
                  <li>· Modernizar web + medición + flujos</li>
                  <li>· Narrativa interna (cultura / employer branding)</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Nota de transparencia
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Tronx Group opera como firma especializada con liderazgo directo en cada proyecto.
                  Cuando se requiere, se suman colaboradores por etapa.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#servicios" className="btn-ghost text-xs px-6 py-2">
                  Volver a servicios
                </a>
                <a href="#unidades" className="btn-ghost text-xs px-6 py-2">
                  Ver líneas de trabajo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER simple */}
        <footer className="border-t border-slate-200 pt-8 text-xs text-slate-500">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Tronx Group SpA · Operación cloud · Chile</p>
            <div className="flex flex-wrap items-center gap-2">
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-slate-700">
                LinkedIn
              </a>
              <span className="text-slate-300">·</span>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-slate-700">
                Instagram
              </a>
              <span className="text-slate-300">·</span>
              <a href="mailto:info@tronxgroup.com" className="hover:text-slate-700">
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

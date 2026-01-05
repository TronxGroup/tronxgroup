// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";

type Social = { href: string; icon: ReactNode; label: string };

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.14em] text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200/70 bg-white/90 p-4 shadow-sm backdrop-blur">
      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-base font-semibold text-slate-900">{value}</p>
    </div>
  );
}

function SectionHeader({
  title,
  desc,
  right,
}: {
  title: string;
  desc?: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        {desc ? (
          <p className="max-w-2xl text-sm text-slate-600">{desc}</p>
        ) : null}
      </div>
      {right ? <div className="sm:shrink-0">{right}</div> : null}
    </div>
  );
}

function ExternalOrInternalLink({
  href,
  className,
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}) {
  const isExternal = /^https?:\/\//i.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} aria-label={ariaLabel} className={className}>
      {children}
    </Link>
  );
}

function SocialIcons({ socials }: { socials?: Social[] }) {
  if (!socials?.length) return null;
  return (
    <div className="flex items-center gap-2 text-slate-500">
      {socials.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          className="rounded-full border border-slate-200 bg-white p-2 transition hover:border-sky-500 hover:text-sky-700"
        >
          {s.icon}
        </a>
      ))}
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
  tag,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  href: string;
  cta: string;
  imageSrc: string;
  imageAlt: string;
  socials?: Social[];
  tag?: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-sky-500/60 hover:shadow-md">
      <div className="relative h-36 w-full overflow-hidden bg-slate-100">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={1200}
          height={480}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
        {tag ? (
          <div className="absolute left-4 top-4">
            <Pill>{tag}</Pill>
          </div>
        ) : null}
      </div>

      <div className="p-5">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {eyebrow}
        </p>

        <h3 className="mt-2 text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600">{desc}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2">
              <span className="mt-1 text-slate-400">•</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center justify-between gap-3">
          <ExternalOrInternalLink
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-600"
          >
            {cta} <span aria-hidden>→</span>
          </ExternalOrInternalLink>

          <SocialIcons socials={socials} />
        </div>
      </div>
    </div>
  );
}

function AnchorButton({
  href,
  variant = "primary",
  children,
}: {
  href: string;
  variant?: "primary" | "ghost";
  children: ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-slate-50";
  const styles =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-slate-800"
      : "border border-slate-200 bg-white text-slate-800 hover:border-sky-500/60 hover:text-sky-700";
  return (
    <a href={href} className={cx(base, styles)}>
      {children}
    </a>
  );
}

function Divider() {
  return <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[22rem] bg-gradient-to-b from-sky-100/55 via-slate-50 to-slate-50" />

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-16 pt-10">
        {/* NAV (simple, one-page anchors) */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 bg-white shadow-sm">
              <span className="text-sm font-semibold tracking-tight text-slate-900">
                TG
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Tronx Group</p>
              <p className="text-xs text-slate-500">
                Firma especializada · Audiovisual &amp; WebOps
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-2 text-xs">
            <a
              href="#servicios"
              className="rounded-full px-3 py-2 font-semibold text-slate-700 hover:text-sky-700"
            >
              Soluciones
            </a>
            <a
              href="#unidades"
              className="rounded-full px-3 py-2 font-semibold text-slate-700 hover:text-sky-700"
            >
              Líneas
            </a>
            <a
              href="#modelo"
              className="rounded-full px-3 py-2 font-semibold text-slate-700 hover:text-sky-700"
            >
              Modelo cloud
            </a>
            <a
              href="#activos"
              className="rounded-full px-3 py-2 font-semibold text-slate-700 hover:text-sky-700"
            >
              Activos propios
            </a>
            <a
              href="#contacto"
              className="rounded-full px-3 py-2 font-semibold text-slate-700 hover:text-sky-700"
            >
              Contacto
            </a>

            <AnchorButton href="#contacto" variant="primary">
              Agendar reunión
            </AnchorButton>
          </nav>
        </header>

        {/* HERO */}
        <section className="grid items-center gap-10 md:grid-cols-[1.08fr,1fr]">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Pill>Firma especializada</Pill>
              <Pill>Producción &amp; WebOps</Pill>
              <Pill>Operación cloud</Pill>
              <Pill>Chile</Pill>
            </div>

            <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-5xl md:leading-[1.05]">
              Tronx Group —{" "}
              <span className="text-slate-800">
                ejecución directa para comunicación audiovisual y operación digital.
              </span>
            </h1>

            <p className="max-w-2xl text-base text-slate-600">
              Operamos como{" "}
              <span className="font-semibold text-slate-800">célula experta</span>:
              pocas capas, decisiones rápidas y entregables reales. Diseñamos y
              publicamos sitios conectados a CRM, y producimos contenido con estándar
              cinematográfico para equipos internos, comunicaciones y marca empleadora.
            </p>

            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Web &amp; WebOps</p>
                <p className="mt-2 text-sm text-slate-600">
                  Sitios rápidos y mantenibles, medición y automatizaciones solo donde
                  agregan control.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Audiovisual</p>
                <p className="mt-2 text-sm text-slate-600">
                  Vodcasts, cápsulas, institucionales y piezas para cultura interna.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-900">Editorial</p>
                <p className="mt-2 text-sm text-slate-600">
                  Formatos propios (Reality Day) y activos territoriales con visión
                  de largo plazo.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <AnchorButton href="#contacto" variant="primary">
                Coordinar una reunión
              </AnchorButton>
              <a
                href="#servicios"
                className="text-sm font-semibold text-sky-700 hover:text-sky-600"
              >
                Ver qué hacemos <span aria-hidden>→</span>
              </a>
            </div>

            <p className="text-xs text-slate-500">
              * Tronx Group SpA es la razón social de facturación. Las marcas operan
              como líneas de solución.
            </p>
          </div>

          {/* Hero visual */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <div className="relative h-80 md:h-[26rem]">
              <Image
                src="/images/hero/tronx-hero.jpg"
                alt="Tronx Group · Producción y operación digital"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-200">
                Entrega rápida · Criterio senior
              </p>
              <p className="mt-2 text-sm text-slate-100">
                Arquitectura cloud (Vercel, Cloudflare, GitHub), CRM y analítica
                moderna para operar liviano, con trazabilidad y documentación.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <Stat label="Enfoque" value="B2B / Instituciones" />
                <Stat label="Modo" value="Célula experta" />
                <Stat label="Entrega" value="2–4 semanas" />
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* SERVICIOS */}
        <section id="servicios" className="scroll-mt-24 space-y-6">
          <SectionHeader
            title="Qué hacemos"
            desc="Tres líneas principales, con entregables claros, operación medible y un estándar alto."
            right={
              <AnchorButton href="#contacto" variant="ghost">
                Pedir propuesta
              </AnchorButton>
            }
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Web &amp; operación digital
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                Sitios + medición + flujos
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Presencia moderna, rápida y mantenible. Integración con CRM cuando
                aporta trazabilidad.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                <li>• Sitios corporativos y portales gremiales</li>
                <li>• Formularios conectados a CRM</li>
                <li>• GA4 / GTM / Search Console</li>
                <li>• Performance y buenas prácticas</li>
              </ul>
              <div className="mt-5">
                <a
                  href="#contacto"
                  className="text-sm font-semibold text-sky-700 hover:text-sky-600"
                >
                  Cotizar WebOps <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Contenido audiovisual
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                Producción corporativa premium
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Producción eficiente, audio cuidado y post consistente para uso interno
                y externo.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                <li>• Vodcasts multicámara</li>
                <li>• Cápsulas internas y formación</li>
                <li>• Institucionales y cobertura</li>
                <li>• Post + color consistente</li>
              </ul>
              <div className="mt-5">
                <a
                  href="#contacto"
                  className="text-sm font-semibold text-sky-700 hover:text-sky-600"
                >
                  Cotizar audiovisual <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Editorial &amp; cultura
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">
                Narrativas para equipos y marca
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Formatos con intención: cultura interna, employer branding y piezas
                derivadas para RRSS.
              </p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                <li>• Series internas (RRHH / cultura)</li>
                <li>• Documentales (Reality Day)</li>
                <li>• Piezas derivadas para RRSS</li>
                <li>• Guion, rodaje, edición</li>
              </ul>
              <div className="mt-5">
                <a
                  href="#unidades"
                  className="text-sm font-semibold text-sky-700 hover:text-sky-600"
                >
                  Ver formatos <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* POR QUÉ */}
        <section id="porque" className="scroll-mt-24 space-y-6">
          <SectionHeader
            title="Por qué funciona"
            desc="Diseñado para organizaciones que necesitan velocidad, claridad y un estándar alto."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Ejecución directa
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Menos intermediarios. Etapas claras, responsables directos y entregables
                concretos.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Operación trazable
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                CRM, medición y flujos cuando aportan control real. Lo hecho se puede
                medir y repetir.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Estándar narrativo
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                No es “contenido por contenido”. Es comunicación con intención, ritmo y
                estética consistente.
              </p>
            </div>
          </div>
        </section>

        {/* LÍNEAS */}
        <section id="unidades" className="scroll-mt-24 space-y-6">
          <SectionHeader
            title="Líneas de trabajo"
            desc="Marcas con foco específico. Una sola operación y un mismo estándar de ejecución."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Card
              tag="Producción"
              eyebrow="Audiovisual / Dekaelo Media"
              title="Producción estratégica y cinematográfica"
              desc="Formatos corporativos premium para bancos, empresas e instituciones: vodcasts, cápsulas e institucionales."
              bullets={[
                "Vodcasts multicámara con sonido profesional",
                "Edición + color consistente, entregas listas para uso interno/externo",
                "Cobertura y piezas para campañas",
              ]}
              href="https://www.dekaelomedia.com"
              cta="Visitar Dekaelo"
              imageSrc="/images/unidades/dekaelo-set.jpg"
              imageAlt="Dekaelo Media"
              socials={[
                {
                  href: "https://www.instagram.com/dekaelo_media/",
                  icon: <FaInstagram className="h-4 w-4" />,
                  label: "Instagram Dekaelo",
                },
                {
                  href: "https://www.linkedin.com/company/dekaelo-media/",
                  icon: <FaLinkedinIn className="h-4 w-4" />,
                  label: "LinkedIn Dekaelo",
                },
                {
                  href: "https://www.youtube.com/@dekaelo_media",
                  icon: <FaYoutube className="h-4 w-4" />,
                  label: "YouTube Dekaelo",
                },
              ]}
            />

            <Card
              tag="WebOps"
              eyebrow="Operación digital / Tronx Strategy"
              title="WebOps y operación digital B2B"
              desc="Sitios modernos en Next.js, medición y flujos conectados a CRM para equipos comerciales y comunicaciones."
              bullets={[
                "Sitios corporativos + performance",
                "GA4 / GTM / Search Console",
                "Zoho CRM + automatizaciones selectivas",
              ]}
              href="https://www.tronxstrategy.com"
              cta="Visitar Tronx Strategy"
              imageSrc="/images/unidades/tronx-strategy-webops.jpg"
              imageAlt="Tronx Strategy"
              socials={[
                {
                  href: "https://www.linkedin.com/company/tronx-strategy",
                  icon: <FaLinkedinIn className="h-4 w-4" />,
                  label: "LinkedIn Tronx Strategy",
                },
                {
                  href: "https://www.instagram.com/tronxstrategy",
                  icon: <FaInstagram className="h-4 w-4" />,
                  label: "Instagram Tronx Strategy",
                },
              ]}
            />

            <Card
              tag="Editorial"
              eyebrow="Formatos propios / Tronx TV"
              title="Medio audiovisual y formatos originales"
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
                {
                  href: "https://youtube.com/@tronxtv",
                  icon: <FaYoutube className="h-4 w-4" />,
                  label: "YouTube Tronx TV",
                },
                {
                  href: "https://www.instagram.com/tronxtv/",
                  icon: <FaInstagram className="h-4 w-4" />,
                  label: "Instagram Tronx TV",
                },
                {
                  href: "https://web.facebook.com/tronxtv",
                  icon: <FaFacebookF className="h-4 w-4" />,
                  label: "Facebook Tronx TV",
                },
                {
                  href: "https://x.com/tronx_tv",
                  icon: <FaXTwitter className="h-4 w-4" />,
                  label: "X Tronx TV",
                },
                {
                  href: "https://www.tiktok.com/@tronxtv",
                  icon: <FaTiktok className="h-4 w-4" />,
                  label: "TikTok Tronx TV",
                },
              ]}
            />

            <Card
              tag="Territorio"
              eyebrow="Plataforma / SANRAVAL"
              title="Guía territorial del Chile Central"
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
                {
                  href: "https://www.instagram.com/sanraval.cl",
                  icon: <FaInstagram className="h-4 w-4" />,
                  label: "Instagram SANRAVAL",
                },
                {
                  href: "https://web.facebook.com/sanraval.cl",
                  icon: <FaFacebookF className="h-4 w-4" />,
                  label: "Facebook SANRAVAL",
                },
              ]}
            />
          </div>
        </section>

        {/* MODELO */}
        <section id="modelo" className="scroll-mt-24 space-y-6">
          <SectionHeader
            title="Cómo operamos (cloud + simple)"
            desc="Infraestructura liviana, segura y documentada. Complejidad solo cuando agrega valor."
          />

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Web &amp; despliegue
              </h3>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                <li>• Vercel + Cloudflare</li>
                <li>• GitHub + CI/CD</li>
                <li>• Mantenible y rápido</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Datos &amp; relación
              </h3>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                <li>• Zoho CRM según necesidad</li>
                <li>• GA4 + Search Console</li>
                <li>• Automatizaciones selectivas</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Criterio de diseño
              </h3>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                <li>• Documentación simple</li>
                <li>• Evitar “tech por ego”</li>
                <li>• Crecer por capas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACTIVOS */}
        <section id="activos" className="scroll-mt-24 space-y-6">
          <SectionHeader
            title="Activos propios (largo plazo)"
            desc="Proyectos que fortalecen identidad, reputación y oportunidades futuras."
          />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-sm">
              <div className="relative h-56">
                <Image
                  src="/proyecto_domo.jpg"
                  alt="DOMO — largometraje en desarrollo"
                  fill
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-200">
                  Proyecto cinematográfico
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  DOMO — largometraje en desarrollo
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  IP de largo plazo con foco en festivales y plataformas. Alimenta el
                  universo editorial con teasers, making-of y conversaciones.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-sm">
              <div className="relative h-56">
                <Image
                  src="/proyecto_sanraval.jpg"
                  alt="SANRAVAL — guía del eje Santiago · Rancagua · Valparaíso"
                  fill
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-200">
                  Plataforma territorial
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  SANRAVAL — guía del eje Santiago · Rancagua · Valparaíso
                </p>
                <p className="mt-2 text-sm text-slate-200">
                  Directorio y editorial para economía local, turismo y ciudad. Un activo
                  que puede crecer con alianzas sin demandar operación pesada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-24 space-y-6">
          <SectionHeader
            title="Contacto"
            desc="Coordinemos una reunión breve para entender el proyecto y confirmar encaje."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Contacto directo
              </p>
              <p className="mt-3 text-sm text-slate-700">
                Correo o WhatsApp. Respondemos con claridad y proponemos el siguiente paso.
              </p>

              <div className="mt-5 space-y-2 text-sm">
                <p>
                  <span className="font-semibold text-slate-800">Correo:</span>{" "}
                  <a
                    href="mailto:info@tronxgroup.com"
                    className="font-semibold text-sky-700 hover:text-sky-600"
                  >
                    info@tronxgroup.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-800">WhatsApp:</span>{" "}
                  <a
                    href="https://wa.me/56920080031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sky-700 hover:text-sky-600"
                  >
                    +56 9 2008 0031
                  </a>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:info@tronxgroup.com"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white"
                >
                  Escribir un correo
                </a>
                <a
                  href="https://wa.me/56920080031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2 text-xs font-semibold text-slate-800 transition hover:border-sky-500/60 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white"
                >
                  Abrir WhatsApp
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Cómo trabajamos
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Proyectos por etapas, entregables concretos y liderazgo directo. Cuando se
                  requiere, sumamos colaboradores por fase.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="space-y-5">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Para quién es
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                    <li>• Bancos, empresas e instituciones</li>
                    <li>• Cámaras / asociaciones</li>
                    <li>• Equipos de comunicaciones y RRHH</li>
                  </ul>
                </div>

                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Ideal si necesitas
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                    <li>• Subir estándar audiovisual sin “agencia pesada”</li>
                    <li>• Modernizar web + medición + flujos</li>
                    <li>• Narrativa interna (cultura / employer branding)</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Nota de transparencia
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    Tronx Group opera como firma especializada con liderazgo directo en cada
                    proyecto. Cuando se requiere, se suman colaboradores por etapa.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <AnchorButton href="#servicios" variant="ghost">
                    Volver a servicios
                  </AnchorButton>
                  <AnchorButton href="#unidades" variant="ghost">
                    Ver líneas de trabajo
                  </AnchorButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CIERRE */}
        <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-base font-semibold text-slate-900">
                ¿Tienes un proyecto en mente?
              </p>
              <p className="text-sm text-slate-600">
                Coordinemos una reunión breve y te decimos el mejor camino (y si hace
                sentido trabajar juntos).
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <AnchorButton href="#contacto" variant="primary">
                Agendar reunión
              </AnchorButton>
              <a
                href="mailto:info@tronxgroup.com"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2 text-xs font-semibold text-slate-800 transition hover:border-sky-500/60 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-white"
              >
                Escribir ahora
              </a>
            </div>
          </div>
        </section>

        <footer className="space-y-3 pb-2 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Tronx Group SpA. Todos los derechos reservados.
          </p>

          <p className="text-xs text-slate-500">
            Tronx Group SpA es la razón social de facturación. Las marcas operan como
            líneas de solución.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
            <a href="mailto:info@tronxgroup.com" className="hover:text-sky-700">
              info@tronxgroup.com
            </a>
            <span aria-hidden>·</span>
            <a
              href="https://wa.me/56920080031"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-700"
            >
              +56 9 2008 0031
            </a>
            <span aria-hidden>·</span>
            <a
              href="https://x.com/TronxGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-700"
            >
              X @TronxGroup
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}

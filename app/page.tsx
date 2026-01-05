// app/page.tsx
import Image from "next/image";
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

/**
 * Next typed routes can reject generic string href for <Link/>.
 * For this one-page site, anchors (#id) and external URLs are best served by <a>.
 */
function SmartLink({
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
  const isHash = href.startsWith("#");
  const isMailOrTel = /^(mailto:|tel:)/i.test(href);

  // External, hash anchors, mailto/tel -> use <a>
  if (isExternal || isHash || isMailOrTel) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={className}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }

  // If someday you add internal routes like "/legal", you can switch this
  // to next/link with typed Route support. For now keep it simple:
  return (
    <a href={href} aria-label={ariaLabel} className={className}>
      {children}
    </a>
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
          <SmartLink
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 hover:text-sky-600"
          >
            {cta} <span aria-hidden>→</span>
          </SmartLink>

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
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[22rem] bg-gradient-to-b from-sky-100/55 via-slate-50 to-slate-50" />

      <div className="mx-auto max-w-6xl space-y-16 px-4 pb-16 pt-10">
        {/* NAV */}
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

        {/* ... aquí sigue tu resto de secciones (servicios, por qué, unidades, modelo, activos, contacto, footer) ... */}
        {/* Importante: donde antes usabas Link/ExternalOrInternalLink, usa SmartLink */}
      </div>
    </main>
  );
}

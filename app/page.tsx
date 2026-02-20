// app/page.tsx
import Image from "next/image";
import type { ReactNode } from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

type Social = { href: string; icon: ReactNode; label: string };

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-slate-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function SectionHeader({
  title,
  desc,
}: {
  title: string;
  desc?: string;
}) {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      {desc ? (
        <p className="max-w-2xl text-sm text-slate-600">{desc}</p>
      ) : null}
    </div>
  );
}

function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      className={className}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
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
          className="rounded-full border border-slate-200 bg-white p-2 transition hover:border-slate-400"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl space-y-20 px-4 pb-20 pt-16">

        {/* HERO */}
        <section className="grid items-center gap-12 md:grid-cols-[1.05fr,1fr]">

          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Pill>Grupo independiente</Pill>
              <Pill>Comunicación & Operación Digital</Pill>
              <Pill>Chile</Pill>
            </div>

            <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-5xl md:leading-[1.1]">
              Tronx Group
            </h1>

            <p className="max-w-2xl text-base text-slate-600">
              Grupo corporativo especializado en comunicación audiovisual,
              operación digital y desarrollo editorial.
              Integramos producción estratégica, infraestructura moderna
              y activos propios de largo plazo bajo un mismo estándar de ejecución.
            </p>

            <p className="text-sm text-slate-500">
              Las marcas operan de manera independiente con foco específico,
              manteniendo coherencia estratégica y estructura común.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <div className="relative h-80 md:h-[26rem]">
              <Image
                src="/images/hero/tronx-hero.jpg"
                alt="Tronx Group"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ENFOQUE */}
        <section className="space-y-8">
          <SectionHeader
            title="Enfoque"
            desc="Estructura liviana, liderazgo directo y estándar consistente en cada línea de trabajo."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Comunicación audiovisual
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Producción estratégica para instituciones, empresas
                y equipos internos. Narrativa clara, ejecución precisa
                y tratamiento visual consistente.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Operación digital
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Sitios corporativos, medición y flujos operativos
                diseñados para organizaciones que requieren control,
                trazabilidad y crecimiento por capas.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">
                Desarrollo editorial
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Formatos propios, plataformas territoriales
                y propiedad intelectual con visión de largo plazo.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* MARCAS */}
        <section className="space-y-8">
          <SectionHeader
            title="Líneas y marcas"
            desc="Unidades con foco específico que operan bajo un mismo marco estratégico."
          />

          <div className="grid gap-6 md:grid-cols-2">

            {/* DEKAELO */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Dekaelo Media
              </p>

              <h3 className="mt-2 text-base font-semibold text-slate-900">
                Producción audiovisual corporativa
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                Series institucionales, vodcast ejecutivos y documentales
                desarrollados para banca, gremios empresariales
                y organizaciones de alto perfil.
              </p>

              <div className="mt-5 flex items-center justify-between">
                <SmartLink
                  href="https://www.dekaelomedia.com"
                  className="text-sm font-semibold text-slate-800 hover:text-slate-600"
                >
                  Visitar sitio →
                </SmartLink>

                <SocialIcons
                  socials={[
                    {
                      href: "https://www.instagram.com/dekaelo_media/",
                      icon: <FaInstagram className="h-4 w-4" />,
                      label: "Instagram",
                    },
                    {
                      href: "https://www.linkedin.com/company/dekaelo-media/",
                      icon: <FaLinkedinIn className="h-4 w-4" />,
                      label: "LinkedIn",
                    },
                    {
                      href: "https://www.youtube.com/@dekaelo_media",
                      icon: <FaYoutube className="h-4 w-4" />,
                      label: "YouTube",
                    },
                  ]}
                />
              </div>
            </div>

            {/* TRONX STRATEGY */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Tronx Strategy
              </p>

              <h3 className="mt-2 text-base font-semibold text-slate-900">
                WebOps y operación digital B2B
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                Desarrollo web corporativo, integración con CRM
                y estructura de medición para equipos comerciales
                y de comunicaciones.
              </p>

              <div className="mt-5 flex items-center justify-between">
                <SmartLink
                  href="https://www.tronxstrategy.com"
                  className="text-sm font-semibold text-slate-800 hover:text-slate-600"
                >
                  Visitar sitio →
                </SmartLink>

                <SocialIcons
                  socials={[
                    {
                      href: "https://www.linkedin.com/company/tronx-strategy",
                      icon: <FaLinkedinIn className="h-4 w-4" />,
                      label: "LinkedIn",
                    },
                  ]}
                />
              </div>
            </div>

            {/* TRONX TV */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Tronx TV
              </p>

              <h3 className="mt-2 text-base font-semibold text-slate-900">
                Plataforma audiovisual y formatos originales
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                Desarrollo de series documentales y formatos
                de conversación orientados a cultura, territorio
                y economía real.
              </p>

              <div className="mt-5 flex items-center justify-between">
                <SmartLink
                  href="https://www.tronxtv.com"
                  className="text-sm font-semibold text-slate-800 hover:text-slate-600"
                >
                  Visitar sitio →
                </SmartLink>

                <SocialIcons
                  socials={[
                    {
                      href: "https://youtube.com/@tronxtv",
                      icon: <FaYoutube className="h-4 w-4" />,
                      label: "YouTube",
                    },
                    {
                      href: "https://www.instagram.com/tronxtv/",
                      icon: <FaInstagram className="h-4 w-4" />,
                      label: "Instagram",
                    },
                    {
                      href: "https://www.tiktok.com/@tronxtv",
                      icon: <FaTiktok className="h-4 w-4" />,
                      label: "TikTok",
                    },
                  ]}
                />
              </div>
            </div>

            {/* SANRAVAL */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                SANRAVAL
              </p>

              <h3 className="mt-2 text-base font-semibold text-slate-900">
                Plataforma territorial del Chile Central
              </h3>

              <p className="mt-3 text-sm text-slate-600">
                Directorio y editorial del eje Santiago–Rancagua–Valparaíso,
                enfocado en economía local, turismo e infraestructura.
              </p>

              <div className="mt-5 flex items-center justify-between">
                <SmartLink
                  href="https://www.sanraval.cl"
                  className="text-sm font-semibold text-slate-800 hover:text-slate-600"
                >
                  Visitar sitio →
                </SmartLink>

                <SocialIcons
                  socials={[
                    {
                      href: "https://www.instagram.com/sanraval.cl",
                      icon: <FaInstagram className="h-4 w-4" />,
                      label: "Instagram",
                    },
                  ]}
                />
              </div>
            </div>

          </div>
        </section>

        <Divider />

        {/* CONTACTO */}
        <section className="space-y-6">
          <SectionHeader
            title="Contacto corporativo"
            desc="Para consultas institucionales o coordinación entre unidades."
          />

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-700">
              Correo:{" "}
              <a
                href="mailto:info@tronxgroup.com"
                className="font-semibold text-slate-900"
              >
                info@tronxgroup.com
              </a>
            </p>

            <p className="mt-2 text-sm text-slate-700">
              WhatsApp:{" "}
              <a
                href="https://wa.me/56920080031"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-900"
              >
                +56 9 2008 0031
              </a>
            </p>

            <p className="mt-6 text-xs text-slate-500">
              Tronx Group SpA es la razón social de facturación.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}

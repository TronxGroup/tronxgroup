// app/page.tsx
import Image from "next/image";
import type { ReactNode } from "react";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

type Social = { href: string; icon: ReactNode; label: string };

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-slate-700">
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
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
        {title}
      </h2>
      {desc && (
        <p className="max-w-2xl text-sm text-slate-600 md:text-base">
          {desc}
        </p>
      )}
    </div>
  );
}

function SmartLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-sm font-semibold text-slate-900 transition hover:text-slate-600"
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
          className="rounded-full border border-slate-200 bg-white p-2 transition hover:border-slate-400"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

function Divider() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl space-y-24 px-4 pb-24 pt-20">

        {/* HERO */}
        <section className="grid items-center gap-14 md:grid-cols-[1.1fr,1fr]">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              <Pill>Grupo corporativo independiente</Pill>
              <Pill>Comunicación audiovisual</Pill>
              <Pill>Operación digital</Pill>
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl md:leading-[1.05]">
              Tronx Group
            </h1>

            <p className="max-w-2xl text-base text-slate-600 md:text-lg">
              Estructura corporativa que integra producción audiovisual,
              operación digital y desarrollo editorial bajo un mismo estándar
              estratégico.
            </p>

            <p className="max-w-xl text-sm text-slate-500">
              Las marcas operan de forma independiente,
              manteniendo coherencia estructural y dirección común.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
            <div className="relative h-80 md:h-[28rem]">
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
        <section id="enfoque" className="scroll-mt-28 space-y-12">
          <SectionHeader
            title="Enfoque"
            desc="Estructura liviana, liderazgo directo y crecimiento por capas."
          />

          <div className="grid gap-8 md:grid-cols-3">

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Comunicación audiovisual
              </h3>
              <p className="text-sm text-slate-600">
                Producción estratégica para instituciones y empresas.
                Narrativa clara, ejecución precisa y estándar visual consistente.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Operación digital
              </h3>
              <p className="text-sm text-slate-600">
                Sitios corporativos, integración con CRM y medición estructurada
                para equipos comerciales y de comunicaciones.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Desarrollo editorial
              </h3>
              <p className="text-sm text-slate-600">
                Formatos propios y plataformas territoriales
                con visión de largo plazo.
              </p>
            </div>

          </div>
        </section>

        <Divider />

        {/* MARCAS */}
        <section id="marcas" className="scroll-mt-28 space-y-14">
          <SectionHeader
            title="Marcas y líneas"
            desc="Unidades especializadas que operan bajo un mismo marco estratégico."
          />

          <div className="grid gap-10 md:grid-cols-2">

            {/* DEKAELO */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Dekaelo Media
              </h3>

              <p className="text-sm text-slate-600">
                Producción audiovisual corporativa para banca,
                gremios empresariales y organizaciones de alto perfil.
              </p>

              <div className="flex items-center justify-between pt-2">
                <SmartLink href="https://www.dekaelomedia.com">
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
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Tronx Strategy
              </h3>

              <p className="text-sm text-slate-600">
                Web corporativa, medición y flujos operativos
                diseñados para organizaciones que requieren trazabilidad.
              </p>

              <div className="flex items-center justify-between pt-2">
                <SmartLink href="https://www.tronxstrategy.com">
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
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">
                Tronx TV
              </h3>

              <p className="text-sm text-slate-600">
                Plataforma audiovisual y desarrollo de formatos originales
                enfocados en cultura, territorio y economía real.
              </p>

              <div className="flex items-center justify-between pt-2">
                <SmartLink href="https://www.tronxtv.com">
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
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">
                SANRAVAL
              </h3>

              <p className="text-sm text-slate-600">
                Plataforma territorial del eje Santiago–Rancagua–Valparaíso,
                conectada a economía local e infraestructura.
              </p>

              <div className="flex items-center justify-between pt-2">
                <SmartLink href="https://www.sanraval.cl">
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
        <section id="contacto" className="scroll-mt-28 space-y-8">
          <SectionHeader
            title="Contacto corporativo"
            desc="Consultas institucionales y coordinación entre unidades."
          />

          <div className="space-y-3 text-sm text-slate-700">
            <p>
              Correo:{" "}
              <a
                href="mailto:info@tronxgroup.com"
                className="font-semibold text-slate-900"
              >
                info@tronxgroup.com
              </a>
            </p>

            <p>
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

            <p className="pt-4 text-xs text-slate-500">
              Tronx Group SpA es la razón social de facturación.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}

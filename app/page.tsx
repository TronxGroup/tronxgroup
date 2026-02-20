// app/page.tsx

import Image from "next/image";
import type { ReactNode } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

type Social = { href: string; icon: ReactNode; label: string };

/* ================= COMPONENTES BASE ================= */

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
    <div className="space-y-4">
      <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
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
          className="rounded-full border border-slate-200 bg-white p-2 transition hover:border-slate-400 hover:text-slate-800"
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

/* ================= BRAND BLOCK ================= */

function BrandBlock({
  title,
  description,
  url,
  socials,
}: {
  title: string;
  description: string;
  url: string;
  socials: Social[];
}) {
  return (
    <div className="space-y-5 border-b border-slate-200 pb-8 last:border-none last:pb-0">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>

      <p className="text-sm text-slate-600 max-w-md">
        {description}
      </p>

      <div className="flex items-center justify-between pt-2">
        <SmartLink href={url}>Visitar sitio →</SmartLink>
        <SocialIcons socials={socials} />
      </div>
    </div>
  );
}

/* ================= PAGE ================= */

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl space-y-28 px-4 pb-28 pt-24">

        {/* HERO */}
        <section className="grid items-center gap-16 md:grid-cols-[1.1fr,1fr]">
          <div className="space-y-8">
            <div className="flex flex-wrap gap-2">
              <Pill>Grupo corporativo independiente</Pill>
              <Pill>Infraestructura estratégica</Pill>
              <Pill>Activos propios</Pill>
            </div>

            <h1 className="text-5xl font-semibold leading-tight text-slate-900 md:text-6xl md:leading-[1.05]">
              Tronx Group
            </h1>

            <p className="max-w-2xl text-base text-slate-600 md:text-lg">
              Grupo corporativo que integra producción audiovisual,
              operación digital e iniciativas editoriales bajo
              una misma estructura estratégica.
            </p>

            <p className="max-w-xl text-sm text-slate-500">
              Dirección común, ejecución especializada.
              Marcas independientes, coherencia institucional.
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <Divider />

        {/* ENFOQUE */}
        <section id="enfoque" className="scroll-mt-28 space-y-14">
          <SectionHeader
            title="Enfoque estructural"
            desc="Crecimiento controlado, infraestructura sólida y visión de largo plazo."
          />

          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Producción estratégica
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Comunicación audiovisual orientada a posicionamiento institucional.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Operación digital
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Infraestructura web moderna, trazable y preparada para escalar.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Activos editoriales
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Desarrollo de propiedad intelectual y plataformas propias.
              </p>
            </div>
          </div>
        </section>

        <Divider />

        {/* MARCAS */}
        <section id="marcas" className="scroll-mt-28 space-y-16">
          <SectionHeader
            title="Marcas especializadas"
            desc="Unidades independientes bajo una estructura corporativa común."
          />

          <div className="grid gap-14 md:grid-cols-2">

            {/* DEKAELO */}
            <BrandBlock
              title="Dekaelo Media"
              description="Producción audiovisual corporativa para banca y organizaciones."
              url="https://www.dekaelomedia.com"
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
              ]}
            />

            {/* TRONX STRATEGY */}
            <BrandBlock
              title="Tronx Strategy"
              description="Web corporativa moderna, medición real y operación digital."
              url="https://www.tronxstrategy.com"
              socials={[
                {
                  href: "https://www.instagram.com/tronxstrategy",
                  icon: <FaInstagram className="h-4 w-4" />,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/tronx-strategy",
                  icon: <FaLinkedinIn className="h-4 w-4" />,
                  label: "LinkedIn",
                },
              ]}
            />

            {/* TRONX TV */}
            <BrandBlock
              title="Tronx TV"
              description="Desarrollo de formatos audiovisuales y plataformas culturales."
              url="https://www.tronxtv.com"
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
                {
                  href: "https://web.facebook.com/tronxtv/",
                  icon: <FaFacebook className="h-4 w-4" />,
                  label: "Facebook",
                },
              ]}
            />

            {/* SANRAVAL */}
            <BrandBlock
              title="SANRAVAL"
              description="Plataforma territorial del eje Santiago–Rancagua–Valparaíso."
              url="https://www.sanraval.cl"
              socials={[
                {
                  href: "https://web.facebook.com/sanraval.cl",
                  icon: <FaFacebook className="h-4 w-4" />,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/sanraval.cl",
                  icon: <FaInstagram className="h-4 w-4" />,
                  label: "Instagram",
                },
              ]}
            />

          </div>
        </section>

        <Divider />

        {/* CONTACTO */}
        <section id="contacto" className="scroll-mt-28 space-y-8">
          <SectionHeader
            title="Contacto corporativo"
            desc="Coordinación institucional y consultas estratégicas."
          />

          <div className="space-y-4 text-sm text-slate-700">
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

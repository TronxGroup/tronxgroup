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
    <span className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-[0.6rem] font-semibold tracking-[0.2em] text-slate-600 uppercase">
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
    <div className="space-y-6">
      <h2 className="text-4xl font-semibold text-slate-900 tracking-tight">
        {title}
      </h2>
      {desc && (
        <p className="max-w-3xl text-base text-slate-600 leading-relaxed">
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
      className="text-sm font-semibold text-slate-900 hover:text-slate-600 transition"
    >
      {children}
    </a>
  );
}

function SocialIcons({ socials }: { socials?: Social[] }) {
  if (!socials?.length) return null;

  return (
    <div className="flex items-center gap-3 text-slate-500">
      {socials.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="text-slate-500 hover:text-slate-900 transition"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-slate-200" />;
}

/* ================= BRAND BLOCK ================= */

function BrandBlock({
  description,
  url,
  socials,
  logo,
}: {
  description: string;
  url: string;
  socials: Social[];
  logo: string;
}) {
  return (
    <div className="border border-slate-200 bg-white p-12">

      <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400 mb-6">
        Unidad especializada
      </p>

      <div className="relative h-24 w-full max-w-sm mb-10">
        <Image
          src={logo}
          alt="Brand logo"
          fill
          className="object-contain object-left"
        />
      </div>

      <p className="text-sm text-slate-600 leading-relaxed max-w-md">
        {description}
      </p>

      <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
        <SmartLink href={url}>Visitar sitio →</SmartLink>
        <SocialIcons socials={socials} />
      </div>
    </div>
  );
}

/* ================= PAGE ================= */

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl space-y-32 px-6 pb-32 pt-32">

        {/* HERO */}
        <section className="grid items-center gap-24 md:grid-cols-[1.1fr,1fr]">
          <div className="space-y-10">
            <div className="flex flex-wrap gap-3">
              <Pill>Grupo corporativo independiente</Pill>
              <Pill>Infraestructura estratégica</Pill>
              <Pill>Activos propios</Pill>
            </div>

            <h1 className="text-6xl font-semibold leading-[1.05] text-slate-900">
              Tronx Group
            </h1>

            <p className="max-w-2xl text-lg text-slate-600 leading-relaxed">
              Grupo corporativo que integra producción audiovisual,
              operación digital e iniciativas editoriales bajo
              una estructura estratégica común.
            </p>

            <p className="max-w-xl text-sm text-slate-500">
              Dirección unificada. Ejecución especializada.
              Coherencia institucional entre marcas.
            </p>
          </div>

          <div className="relative overflow-hidden border border-slate-200">
            <div className="relative h-[32rem]">
              <Image
                src="/images/hero/tronx-hero.jpg"
                alt="Tronx Group"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* MARCAS */}
        <section id="marcas" className="space-y-20">
          <SectionHeader
            title="Marcas especializadas"
            desc="Unidades independientes que operan bajo una estructura corporativa común."
          />

          <div className="grid gap-16 md:grid-cols-2">

            <BrandBlock
              description="Producción audiovisual corporativa para banca y organizaciones."
              url="https://www.dekaelomedia.com"
              logo="/tronxgroup_logo_dekaelomedia.png"
              socials={[
                {
                  href: "https://www.instagram.com/dekaelo_media/",
                  icon: <FaInstagram size={18} />,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/dekaelo-media/",
                  icon: <FaLinkedinIn size={18} />,
                  label: "LinkedIn",
                },
              ]}
            />

            <BrandBlock
              description="Web corporativa moderna, medición real y operación digital."
              url="https://www.tronxstrategy.com"
              logo="/tronxgroup_logo_tronxstrategy.png"
              socials={[
                {
                  href: "https://www.instagram.com/tronxstrategy",
                  icon: <FaInstagram size={18} />,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/company/tronx-strategy",
                  icon: <FaLinkedinIn size={18} />,
                  label: "LinkedIn",
                },
              ]}
            />

            <BrandBlock
              description="Desarrollo de formatos audiovisuales y plataformas culturales."
              url="https://www.tronxtv.com"
              logo="/tronxgroup_logo_tronxtv.png"
              socials={[
                {
                  href: "https://youtube.com/@tronxtv",
                  icon: <FaYoutube size={18} />,
                  label: "YouTube",
                },
                {
                  href: "https://www.instagram.com/tronxtv/",
                  icon: <FaInstagram size={18} />,
                  label: "Instagram",
                },
                {
                  href: "https://www.tiktok.com/@tronxtv",
                  icon: <FaTiktok size={18} />,
                  label: "TikTok",
                },
                {
                  href: "https://web.facebook.com/tronxtv/",
                  icon: <FaFacebook size={18} />,
                  label: "Facebook",
                },
              ]}
            />

            <BrandBlock
              description="Plataforma territorial del eje Santiago–Rancagua–Valparaíso."
              url="https://www.sanraval.cl"
              logo="/tronxgroup_logo_sanraval.png"
              socials={[
                {
                  href: "https://web.facebook.com/sanraval.cl",
                  icon: <FaFacebook size={18} />,
                  label: "Facebook",
                },
                {
                  href: "https://www.instagram.com/sanraval.cl",
                  icon: <FaInstagram size={18} />,
                  label: "Instagram",
                },
              ]}
            />

          </div>
        </section>

        <Divider />

        {/* CONTACTO */}
        <section id="contacto" className="space-y-10">
          <SectionHeader
            title="Contacto corporativo"
            desc="Coordinación institucional y consultas estratégicas."
          />

          <div className="space-y-6 text-base text-slate-700">
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

            <p className="text-sm text-slate-500">
              Tronx Group SpA es la razón social de facturación.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}

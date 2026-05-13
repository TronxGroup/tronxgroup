// app/page.tsx

import type { ReactNode } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

type Social = {
  href: string;
  icon: ReactNode;
  label: string;
};

type Unit = {
  name: string;
  description: string;
  href?: string;
  socials?: Social[];
  tag: string;
};

const units: Unit[] = [
  {
    name: "Dekaelo Media",
    description:
      "Producción audiovisual corporativa. Vodcast, contenido institucional y desarrollo audiovisual para empresas.",
    href: "https://www.dekaelomedia.com",
    tag: "Audiovisual",
    socials: [
      {
        href: "https://www.instagram.com/dekaelo_media/",
        icon: <FaInstagram size={14} />,
        label: "Instagram",
      },
      {
        href: "https://www.linkedin.com/company/dekaelo-media/",
        icon: <FaLinkedinIn size={14} />,
        label: "LinkedIn",
      },
      {
        href: "https://www.youtube.com/@dekaelo_media",
        icon: <FaYoutube size={14} />,
        label: "YouTube",
      },
    ],
  },

  {
    name: "Tronx Web",
    description:
      "Sitios web modernos y rápidos para empresas y profesionales en Chile.",
    href: "https://www.tronxweb.cl",
    tag: "Web",
    socials: [
      {
        href: "https://www.instagram.com/tronx.web/",
        icon: <FaInstagram size={14} />,
        label: "Instagram",
      },
    ],
  },

  {
    name: "Tronx TV",
    description:
      "Iniciativa editorial audiovisual enfocada en contenido original y desarrollo documental.",
    href: "https://www.tronxtv.com",
    tag: "Editorial",
    socials: [
      {
        href: "https://youtube.com/@tronxtv",
        icon: <FaYoutube size={14} />,
        label: "YouTube",
      },
      {
        href: "https://www.instagram.com/tronxtv/",
        icon: <FaInstagram size={14} />,
        label: "Instagram",
      },
      {
        href: "https://www.tiktok.com/@tronxtv",
        icon: <FaTiktok size={14} />,
        label: "TikTok",
      },
    ],
  },
];

const legalData = [
  {
    label: "Razón social",
    value: "TRONX GROUP SpA",
  },
  {
    label: "Constitución",
    value: "17 de noviembre de 2025",
  },
  {
    label: "Ubicación",
    value: "Santiago, Chile",
  },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-white/10 py-12"
    >
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-tronx-300">
        {title}
      </h2>

      <div className="mt-6">
        {children}
      </div>
    </section>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href?: string;
  children: React.ReactNode;
}) {
  if (!href) return <span>{children}</span>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white transition hover:text-tronx-300"
    >
      {children}
    </a>
  );
}

function SocialLinks({
  socials,
}: {
  socials?: Social[];
}) {
  if (!socials?.length) return null;

  return (
    <div className="flex items-center gap-3 text-white/40">
      {socials.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          className="transition hover:text-tronx-300"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">

      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">

        {/* HERO */}
        <div className="space-y-6">

          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-tronx-300">
            Sociedad operativa independiente · Santiago, Chile
          </p>

          <h1 className="text-5xl font-black tracking-tight md:text-7xl">
            TRONX{" "}
            <span className="text-gradient">
              GROUP
            </span>
          </h1>

          <p className="max-w-2xl text-base leading-8 text-white/60">
            Estructura corporativa que administra y da continuidad
            operativa a unidades especializadas en producción audiovisual,
            desarrollo web e iniciativas editoriales.
          </p>

        </div>

        {/* DATOS */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3">

          {legalData.map((item) => (
            <div
              key={item.label}
              className="glass rounded-[1.75rem] p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                {item.label}
              </p>

              <p className="mt-3 text-sm font-medium text-white">
                {item.value}
              </p>
            </div>
          ))}

        </div>

        {/* PERFIL */}
        <Section
          id="perfil"
          title="Perfil"
        >
          <div className="space-y-4 text-sm leading-7 text-white/60">

            <p>
              Tronx Group SpA funciona como estructura administrativa
              para distintas iniciativas digitales y audiovisuales.
            </p>

            <p>
              El enfoque es mantener una operación simple,
              independiente y sostenible en el tiempo.
            </p>

          </div>
        </Section>

        {/* UNIDADES */}
        <Section
          id="unidades"
          title="Unidades"
        >
          <div className="space-y-5">

            {units.map((unit) => (
              <div
                key={unit.name}
                className="glass rounded-[2rem] p-7"
              >

                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

                  <div>

                    <div className="flex items-center gap-3">

                      <h3 className="text-2xl font-bold tracking-tight">
                        {unit.name}
                      </h3>

                      <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40">
                        {unit.tag}
                      </span>

                    </div>

                    <p className="mt-4 max-w-2xl leading-7 text-white/60">
                      {unit.description}
                    </p>

                  </div>

                  <ExternalLink href={unit.href}>
                    <span className="text-sm font-semibold">
                      Visitar →
                    </span>
                  </ExternalLink>

                </div>

                {unit.socials?.length ? (
                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                      Canales
                    </p>

                    <SocialLinks socials={unit.socials} />

                  </div>
                ) : null}

              </div>
            ))}

          </div>
        </Section>

        {/* VALIDACIÓN */}
        <Section
          id="validacion"
          title="Validación"
        >
          <div className="space-y-4 text-sm leading-7 text-white/60">

            <p>
              Tronx Group SpA es la razón social utilizada
              para administración y facturación de servicios
              asociados a las unidades del grupo.
            </p>

            <p>
              Facturas emitidas por Tronx Group SpA relacionadas
              con Dekaelo Media, Tronx Web o Tronx TV
              corresponden a la estructura operativa oficial.
            </p>

          </div>
        </Section>

        {/* CONTACTO */}
        <Section
          id="contacto"
          title="Contacto"
        >
          <div className="space-y-2 text-sm text-white/60">

            <p>
              Correo:
              {" "}
              <a
                href="mailto:info@tronxgroup.com"
                className="text-white transition hover:text-tronx-300"
              >
                info@tronxgroup.com
              </a>
            </p>

          </div>
        </Section>

      </div>

    </main>
  );
}

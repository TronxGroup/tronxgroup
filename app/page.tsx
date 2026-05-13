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
};

const units: Unit[] = [
  {
    name: "Dekaelo Media",

    description:
      "Producción audiovisual corporativa y contenido para empresas.",

    href: "https://www.dekaelomedia.com",

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
      "Sitios web modernos y rápidos para empresas y profesionales.",

    href: "https://www.tronxweb.cl",

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
      "Proyecto editorial audiovisual y documental.",

    href: "https://www.tronxtv.com",

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
      className="border-t border-neutral-200 py-12 scroll-mt-24"
    >
      <h2 className="text-xs uppercase tracking-[0.22em] text-neutral-400">
        {title}
      </h2>

      <div className="mt-6">
        {children}
      </div>
    </section>
  );
}

function SocialLinks({
  socials,
}: {
  socials?: Social[];
}) {
  if (!socials?.length) return null;

  return (
    <div className="flex items-center gap-3 text-neutral-400">
      {socials.map((s) => (
        <a
          key={s.href}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="transition hover:text-black"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      <div className="mx-auto max-w-4xl px-6 py-20">

        {/* HERO */}
        <div>

          <p className="text-xs uppercase tracking-[0.24em] text-neutral-400">
            Santiago, Chile
          </p>

          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            TRONX GROUP
          </h1>

          <p className="mt-6 max-w-2xl text-neutral-600 leading-7">
            Estructura operativa para iniciativas audiovisuales,
            desarrollo web y proyectos editoriales.
          </p>

        </div>

        {/* PERFIL */}
        <Section
          id="perfil"
          title="Perfil"
        >

          <div className="space-y-4 text-neutral-600 leading-7">

            <p>
              Tronx Group SpA administra distintas iniciativas
              digitales y audiovisuales bajo una estructura simple
              e independiente.
            </p>

          </div>

        </Section>

        {/* UNIDADES */}
        <Section
          id="unidades"
          title="Unidades"
        >

          <div className="space-y-6">

            {units.map((unit) => (
              <div
                key={unit.name}
                className="rounded-2xl border border-neutral-200 p-6"
              >

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                  <div>

                    <h3 className="text-xl font-medium">
                      {unit.name}
                    </h3>

                    <p className="mt-3 max-w-2xl text-neutral-600 leading-7">
                      {unit.description}
                    </p>

                  </div>

                  <a
                    href={unit.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-500 transition hover:text-black"
                  >
                    Sitio →
                  </a>

                </div>

                {unit.socials?.length ? (
                  <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-5">

                    <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                      Redes
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

          <div className="space-y-4 text-neutral-600 leading-7">

            <p>
              Tronx Group SpA es la razón social utilizada
              para administración y facturación de servicios
              asociados a las unidades del grupo.
            </p>

          </div>

        </Section>

        {/* CONTACTO */}
        <Section
          id="contacto"
          title="Contacto"
        >

          <div className="text-neutral-600">

            <a
              href="mailto:info@tronxgroup.com"
              className="transition hover:text-black"
            >
              info@tronxgroup.com
            </a>

          </div>

        </Section>

      </div>

    </main>
  );
}

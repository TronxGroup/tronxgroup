// app/page.tsx

import type { ReactNode } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebook,
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
    description: "Producción audiovisual corporativa.",
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
    ],
  },
  {
    name: "Tronx Strategy",
    description: "Infraestructura digital y operación web.",
    href: "https://www.tronxstrategy.com",
    socials: [
      {
        href: "https://www.instagram.com/tronxstrategy",
        icon: <FaInstagram size={14} />,
        label: "Instagram",
      },
      {
        href: "https://www.linkedin.com/company/tronx-strategy",
        icon: <FaLinkedinIn size={14} />,
        label: "LinkedIn",
      },
    ],
  },
  {
    name: "Tronx TV",
    description: "Desarrollo editorial audiovisual.",
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
      {
        href: "https://web.facebook.com/tronxtv/",
        icon: <FaFacebook size={14} />,
        label: "Facebook",
      },
    ],
  },
  {
    name: "SANRAVAL",
    description: "Plataforma editorial territorial.",
    href: "https://www.sanraval.cl",
    socials: [
      {
        href: "https://web.facebook.com/sanraval.cl",
        icon: <FaFacebook size={14} />,
        label: "Facebook",
      },
      {
        href: "https://www.instagram.com/sanraval.cl",
        icon: <FaInstagram size={14} />,
        label: "Instagram",
      },
    ],
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-neutral-200 py-10 first:border-t-0 first:pt-0">
      <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
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
      className="text-neutral-900 underline underline-offset-4 hover:text-neutral-600 transition"
    >
      {children}
    </a>
  );
}

function SocialLinks({ socials }: { socials?: Social[] }) {
  if (!socials?.length) return null;

  return (
    <div className="flex items-center gap-3 text-neutral-500">
      {socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.label}
          className="hover:text-neutral-900 transition"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900" id="top">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <div className="space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-500">
            Sociedad operativa independiente
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Tronx Group SpA
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
            Estructura corporativa orientada a administración, facturación,
            control financiero y continuidad operativa de unidades
            especializadas.
          </p>
        </div>

        <div className="mt-12 border border-neutral-200">
          <div className="grid gap-0 sm:grid-cols-2">
            <div className="border-b border-neutral-200 p-5 sm:border-b-0 sm:border-r">
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Razón social
              </p>
              <p className="mt-2 text-sm font-medium">TRONX GROUP SpA</p>
            </div>

            <div className="border-b border-neutral-200 p-5 sm:border-b-0">
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                RUT
              </p>
              <p className="mt-2 text-sm font-medium">78.297.435-1</p>
            </div>

            <div className="border-b border-neutral-200 p-5 sm:border-b-0 sm:border-r sm:border-t">
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Constitución
              </p>
              <p className="mt-2 text-sm font-medium">17 de noviembre de 2025</p>
            </div>

            <div className="p-5 sm:border-t">
              <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Función
              </p>
              <p className="mt-2 text-sm font-medium">
                Facturación, administración y continuidad operativa
              </p>
            </div>
          </div>
        </div>

        <Section title="Perfil">
          <div className="space-y-3 text-sm leading-7 text-neutral-600">
            <p>
              Tronx Group SpA articula unidades de trabajo vinculadas a
              producción audiovisual, operación digital e iniciativas
              editoriales bajo una administración centralizada.
            </p>
            <p>
              La sociedad no opera como marca comercial visible, sino como
              estructura de respaldo administrativo, contractual y financiero.
            </p>
          </div>
        </Section>

        <Section title="Unidades">
          <div className="divide-y divide-neutral-200 border border-neutral-200">
            {units.map((unit) => (
              <div key={unit.name} className="p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-neutral-900">
                      {unit.name}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {unit.description}
                    </p>
                  </div>

                  <div className="text-sm">
                    <ExternalLink href={unit.href}>Sitio</ExternalLink>
                  </div>
                </div>

                {unit.socials?.length ? (
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                      Canales
                    </p>
                    <SocialLinks socials={unit.socials} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        <Section title="Validación">
          <div className="space-y-3 text-sm leading-7 text-neutral-600">
            <p>
              Tronx Group SpA es la razón social utilizada para fines de
              facturación y administración.
            </p>
            <p>
              Si recibiste una factura emitida por Tronx Group SpA asociada a
              un servicio de Dekaelo Media o Tronx Strategy, corresponde a la
              estructura administrativa del grupo.
            </p>
          </div>
        </Section>

        <Section title="Contacto">
          <div className="space-y-2 text-sm text-neutral-700">
            <p>
              Correo:{" "}
              <a
                href="mailto:info@tronxgroup.com"
                className="underline underline-offset-4 hover:text-neutral-500 transition"
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
                className="underline underline-offset-4 hover:text-neutral-500 transition"
              >
                +56 9 2008 0031
              </a>
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

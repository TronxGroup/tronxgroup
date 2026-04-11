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
  role: string;
  description: string;
  href?: string;
  socials?: Social[];
  tag: string;
};

const units: Unit[] = [
  {
    name: "Dekaelo Media",
    role: "Unidad principal de caja",
    description: "Producción audiovisual corporativa. Video institucional, vodcast ejecutivo y series para empresas en Chile.",
    href: "https://www.dekaelomedia.com",
    tag: "Audiovisual",
    socials: [
      { href: "https://www.instagram.com/dekaelo_media/", icon: <FaInstagram size={14} />, label: "Instagram" },
      { href: "https://www.linkedin.com/company/dekaelo-media/", icon: <FaLinkedinIn size={14} />, label: "LinkedIn" },
      { href: "https://www.youtube.com/@dekaelo_media", icon: <FaYoutube size={14} />, label: "YouTube" },
    ],
  },
  {
    name: "Tronx Web",
    role: "Unidad digital recurrente",
    description: "Sitios web profesionales para pymes y profesionales en Chile. Diseño, textos y mantención mensual incluidos.",
    href: "https://www.tronxweb.cl",
    tag: "Web",
    socials: [
      { href: "https://www.instagram.com/tronxweb", icon: <FaInstagram size={14} />, label: "Instagram" },
      { href: "https://www.linkedin.com/company/tronx-web", icon: <FaLinkedinIn size={14} />, label: "LinkedIn" },
    ],
  },
  {
    name: "Tronx TV",
    role: "Activo editorial audiovisual",
    description: "Desarrollo editorial audiovisual independiente. Serie documental Reality Day y proyectos de largo plazo.",
    href: "https://www.tronxtv.com",
    tag: "Editorial",
    socials: [
      { href: "https://youtube.com/@tronxtv", icon: <FaYoutube size={14} />, label: "YouTube" },
      { href: "https://www.instagram.com/tronxtv/", icon: <FaInstagram size={14} />, label: "Instagram" },
      { href: "https://www.tiktok.com/@tronxtv", icon: <FaTiktok size={14} />, label: "TikTok" },
    ],
  },
];

const legalData = [
  { label: "Razón social", value: "TRONX GROUP SpA" },
  { label: "Constitución", value: "17 de noviembre de 2025" },
  { label: "Función", value: "Facturación, administración y continuidad operativa" },
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
      className="border-t border-neutral-200 py-10 scroll-mt-24"
    >
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function ExternalLink({ href, children }: { href?: string; children: React.ReactNode }) {
  if (!href) return <span>{children}</span>;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-900 underline underline-offset-4 hover:text-neutral-500 transition"
    >
      {children}
    </a>
  );
}

function SocialLinks({ socials }: { socials?: Social[] }) {
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
          title={s.label}
          className="hover:text-neutral-900 transition"
        >
          {s.icon}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">

        {/* HEADER */}
        <div className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
            Sociedad operativa independiente · Santiago, Chile
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Tronx Group SpA
          </h1>
          <p className="max-w-xl text-sm leading-7 text-neutral-500 sm:text-base">
            Estructura corporativa de administración, facturación y continuidad
            operativa para unidades especializadas en producción audiovisual,
            desarrollo web e iniciativas editoriales.
          </p>
        </div>

        {/* DATOS LEGALES */}
        <div className="mt-12 border border-neutral-200">
          <div className="grid gap-0 sm:grid-cols-2">
            {legalData.map((item, i) => (
              <div
                key={item.label}
                className={[
                  "p-5",
                  i < legalData.length - 2 ? "border-b border-neutral-200" : "",
                  i % 2 === 0 ? "sm:border-r sm:border-neutral-200" : "",
                  i >= 2 ? "sm:border-t sm:border-neutral-200" : "",
                ].join(" ")}
              >
                <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                  {item.label}
                </p>
                <p className="mt-2 text-sm font-medium text-neutral-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PERFIL */}
        <Section id="perfil" title="Perfil">
          <div className="space-y-3 text-sm leading-7 text-neutral-600">
            <p>
              Tronx Group SpA articula unidades de trabajo vinculadas a
              producción audiovisual, desarrollo web e iniciativas editoriales
              bajo una administración centralizada.
            </p>
            <p>
              La sociedad no opera como marca comercial visible. Su función es
              de respaldo administrativo, contractual y financiero para las
              unidades que la integran.
            </p>
            <p>
              El modelo se organiza bajo un principio claro: estructura liviana,
              crecimiento controlado y continuidad financiera sostenible.
            </p>
          </div>
        </Section>

        {/* UNIDADES */}
        <Section id="unidades" title="Unidades operativas">
          <div className="divide-y divide-neutral-200 border border-neutral-200">
            {units.map((unit) => (
              <div key={unit.name} className="p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-neutral-900">
                        {unit.name}
                      </p>
                      <span className="rounded-full border border-neutral-200 px-2 py-0.5 text-[10px] uppercase tracking-wider text-neutral-400">
                        {unit.tag}
                      </span>
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                      {unit.role}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-neutral-600">
                      {unit.description}
                    </p>
                  </div>
                  <div className="shrink-0 text-sm">
                    <ExternalLink href={unit.href}>Sitio →</ExternalLink>
                  </div>
                </div>
                {unit.socials?.length ? (
                  <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-4">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
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
        <Section id="validacion" title="Validación de facturación">
          <div className="space-y-3 text-sm leading-7 text-neutral-600">
            <p>
              Tronx Group SpA es la razón social utilizada para fines de
              facturación y administración de todos los servicios del grupo.
            </p>
            <p>
              Si recibiste una factura emitida por Tronx Group SpA asociada a
              un servicio de <strong className="font-medium text-neutral-900">Dekaelo Media</strong>,{" "}
              <strong className="font-medium text-neutral-900">Tronx Web</strong> o{" "}
              <strong className="font-medium text-neutral-900">Tronx TV</strong>,
              corresponde a la estructura administrativa del grupo y es válida.
            </p>
          </div>
        </Section>

        {/* CONTACTO */}
        <Section id="contacto" title="Contacto">
          <div className="space-y-2 text-sm text-neutral-600">
            <p>
              Correo:{" "}
              <a
                href="mailto:info@tronxgroup.cl"
                className="text-neutral-900 underline underline-offset-4 hover:text-neutral-500 transition"
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

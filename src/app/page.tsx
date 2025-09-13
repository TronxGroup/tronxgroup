import Link from 'next/link';
import { ArrowRight, Building2, Film, Landmark, Rocket, Users, Link as LinkIcon } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex text-sm rounded-full border border-white/10 px-3 py-1 text-white/80">
              Holding creativo-estratégico
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
              Tronx Group
              <span className="block text-white/70 text-xl md:text-2xl mt-2">
                Estrategia, creatividad y alianzas que convierten ideas en resultados.
              </span>
            </h1>
            <p className="mt-4 text-white/70">
              Integramos consultoría, producción audiovisual y redes de negocios para potenciar marcas y
              organizaciones en Chile y Latinoamérica.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#marcas" className="btn">
                Ver marcas <ArrowRight size={18} />
              </Link>
              <Link href="/contacto" className="btn-outline">
                Hablemos
              </Link>
            </div>
          </div>
          <div className="card">
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <Rocket className="mt-1" />
                <span>Diseñamos estrategias B2B y crecimiento sostenible.</span>
              </li>
              <li className="flex items-start gap-3">
                <Film className="mt-1" />
                <span>Producimos contenidos con calidad cinematográfica.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-1" />
                <span>Construimos comunidades, membresías y delegaciones.</span>
              </li>
              <li className="flex items-start gap-3">
                <Landmark className="mt-1" />
                <span>Alianzas internacionales: HKLABA & Asia Pacífico.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section id="marcas" className="section border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold">Marcas Tronx Group</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Tronx Group opera con tres marcas propias. Además, se apalanca en alianzas estratégicas para ampliar
            capacidades y alcance.
          </p>

          {/* 3 marcas propias */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <BrandCard
              title="Dekaelo Media"
              description="Producción Audiovisual Estratégica: YouTube/Institucional, reels y campañas de contenido."
              href="https://www.dekaelomedia.com"
              icon={<Film />}
            />
            <BrandCard
              title="Tronx Strategy"
              description="Consultoría B2B, propuestas corporativas, growth, CRM y performance."
              href="https://www.tronxstrategy.com"
              icon={<Building2 />}
            />
            <BrandCard
              title="Tronx TV"
              description="Canal y formatos de contenido original (en desarrollo)."
              href="#"
              icon={<Rocket />}
            />
          </div>

          {/* Alianzas y relaciones */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <LinkIcon size={18} /> Alianzas de Tronx Strategy
              </h3>
              <p className="text-white/70 mt-2">
                Tronx Strategy colabora con organizaciones y talentos para potenciar propuestas B2B.
              </p>
              <ul className="mt-4 space-y-2 text-white/80">
                <li>
                  <strong>APCC — Cámara de Comercio Asia Pacífico</strong>
                  <span className="block text-white/60 text-sm">
                    Aliada de <em>Tronx Strategy</em> en membresías empresariales, misiones y foros.
                  </span>
                  <span className="block text-white/50 text-xs mt-1">
                    APCC mantiene alianza con <strong>HKLABA</strong> (Hong Kong – Latin America Business Association).
                  </span>
                  <div className="mt-2 flex gap-3 text-sm">
                    <Link className="link" href="https://apcc-chamber.vercel.app">
                      APCC →
                    </Link>
                    <Link className="link" href="https://hklaba.vercel.app">
                      HKLABA →
                    </Link>
                  </div>
                </li>
                <li className="mt-3">
                  <strong>Echevensko</strong>
                  <span className="block text-white/60 text-sm">
                    Aliado de <em>Tronx Strategy</em> para charlas corporativas y formación
                    (La Magia de la Imaginación).
                  </span>
                  <div className="mt-2 text-sm">
                    <Link className="link" href="https://empresas.echevensko.com">
                      Echevensko →
                    </Link>
                  </div>
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold">Mapa rápido del ecosistema</h3>
              <EcosystemMap />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container card text-center">
          <h3 className="text-2xl font-semibold">¿Listo para alinear estrategia, contenido y ventas?</h3>
          <p className="mt-2 text-white/70">Conversemos un roadmap de 90 días y un piloto de alto impacto.</p>
          <div className="mt-4">
            <Link href="/contacto" className="btn">
              Agenda una reunión
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function BrandCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link href={href} className="card block hover:bg-white/10 transition-colors">
      <div className="flex items-start gap-4">
        <div className="p-2 rounded-xl bg-white/10">{icon}</div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-white/70 text-sm mt-1">{description}</p>
        </div>
      </div>
    </Link>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs">
      {children}
    </span>
  );
}

function EcosystemRow({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex-1 text-right text-white/70">{left}</div>
      <span className="mx-1">→</span>
      <div className="flex-1 text-white">{right}</div>
    </div>
  );
}

function EcosystemMap() {
  return (
    <div className="space-y-3">
      <EcosystemRow
        left={<Pill>Tronx Group</Pill>}
        right={
          <div className="flex gap-1 flex-wrap">
            <Pill>Dekaelo Media</Pill>
            <Pill>Tronx Strategy</Pill>
            <Pill>Tronx TV</Pill>
          </div>
        }
      />
      <EcosystemRow
        left={<Pill>Tronx Strategy</Pill>}
        right={
          <div className="flex gap-1 flex-wrap">
            <Pill>APCC</Pill>
            <Pill>Echevensko</Pill>
          </div>
        }
      />
      <EcosystemRow left={<Pill>APCC</Pill>} right={<div className="flex gap-1 flex-wrap"><Pill>HKLABA</Pill></div>} />
      <p className="text-xs text-white/60">
        Relaciones: Tronx Strategy ↔ aliados (APCC, Echevensko). APCC ↔ HKLABA.
      </p>
    </div>
  );
}

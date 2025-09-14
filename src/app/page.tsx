import Link from 'next/link';
import { ArrowRight, Building2, Film, Rocket, Users } from 'lucide-react';

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
                Estrategia, creatividad y ejecución para resultados reales.
              </span>
            </h1>
            <p className="mt-4 text-white/70">
              Integramos <span className="text-white">consultoría</span>, <span className="text-white">producción audiovisual</span> y <span className="text-white">contenidos</span> para impulsar marcas y organizaciones en Chile y Latinoamérica con métricas y procesos claros.
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

          {/* Puntos clave */}
          <div className="card">
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3">
                <Rocket className="mt-1" />
                <span>Planes de estrategia y crecimiento sostenibles.</span>
              </li>
              <li className="flex items-start gap-3">
                <Film className="mt-1" />
                <span>Producción audiovisual con estándar profesional y foco en negocio.</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="mt-1" />
                <span>Comunidades, contenidos y networking B2B.</span>
              </li>
              <li className="flex items-start gap-3">
                <Building2 className="mt-1" />
                <span>Soluciones corporativas orientadas a resultados medibles.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MARCAS */}
      <section id="marcas" className="section border-t border-white/10">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold">Marcas Tronx Group</h2>
          <p className="mt-2 text-white/70 max-w-2xl">
            Operamos tres marcas complementarias que cubren <b>estrategia</b>, <b>contenido</b> y <b>distribución</b>.
          </p>

          {/* 3 marcas propias */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <BrandCard
              title="Dekaelo Media"
              description="Producción Audiovisual Estratégica: institucional, YouTube, reels y campañas de contenido."
              href="https://www.dekaelomedia.com"
              icon={<Film />}
            />
            <BrandCard
              title="Tronx Strategy"
              description="Consultoría B2B: propuestas corporativas, growth, CRM, performance e implementación."
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

          {/* Explicador y ecosistema */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold">Qué hace cada marca</h3>
              <ul className="mt-4 space-y-2 text-white/80 text-sm">
                <li>
                  <b>Dekaelo Media:</b> ideación, rodaje y post con foco en negocio (video largo + piezas para redes y performance).
                </li>
                <li>
                  <b>Tronx Strategy:</b> planes de crecimiento, embudos, CRM, paid media y optimización.
                </li>
                <li>
                  <b>Tronx TV:</b> proyectos editoriales y formatos propios para distribución.
                </li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold">Mapa del ecosistema</h3>
              <EcosystemMap />
              <p className="text-xs text-white/60 mt-3">
                * Tronx Group se compone únicamente de estas tres marcas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="text-xl font-semibold">Quiénes somos</h3>
            <p className="mt-3 text-white/80">
              Somos un holding creativo-estratégico con base en Chile. Integramos estrategia, producción audiovisual y
              distribución de contenidos para construir marcas con propósito y resultados medibles. Trabajamos con procesos,
              datos y storytelling potente.
            </p>
            <div className="mt-4 grid sm:grid-cols-3 gap-3 text-sm">
              <Bullet>Visión: impulsar marcas de LatAm con soluciones integrales.</Bullet>
              <Bullet>Misión: performance + marca + distribución, de forma sostenible.</Bullet>
              <Bullet>Valores: transparencia, excelencia, creatividad y colaboración.</Bullet>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">Gobernanza y tecnología</h3>
            <ul className="mt-3 space-y-2 text-white/80 text-sm">
              <li>Dominios y analítica centralizados (GoDaddy/NIC.CL, GTM, GA4, Search Console).</li>
              <li>Infra moderna (GitHub, Vercel, Cloudflare) y correo en Google Workspace (alias por marca).</li>
              <li>CRM maestro en Zoho; flujos de nurturing; reporting unificado.</li>
              <li>Suite creativa y automatizaciones (Adobe, ChatGPT, integraciones).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container card text-center">
          <h3 className="text-2xl font-semibold">¿Listo para alinear estrategia, contenido y ventas?</h3>
          <p className="mt-2 text-white/70">Conversemos un roadmap de 90 días y un piloto de alto impacto.</p>
          <div className="mt-4 flex gap-3 justify-center">
            <Link href="/contacto" className="btn">
              Agenda una reunión
            </Link>
            <Link href="#marcas" className="btn-outline">
              Ver marcas
            </Link>
          </div>
          <p className="text-xs text-white/50 mt-6">
            Tronx Group SpA es titular de sus marcas registradas y centraliza dominios, analítica y CRM para asegurar trazabilidad y resultados.
          </p>
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
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">{children}</div>;
}

import Link from 'next/link';
import { ArrowRight, Building2, Film, Landmark, Rocket, Users } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="section">
        <div className="container grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex text-sm rounded-full border border-white/10 px-3 py-1 text-white/80">Holding creativo-estratégico</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">Tronx Group
              <span className="block text-white/70 text-xl md:text-2xl mt-2">Estrategia, creatividad y alianzas que convierten ideas en resultados.</span>
            </h1>
            <p className="mt-4 text-white/70">Integramos consultoría, producción audiovisual y redes de negocios para potenciar marcas y organizaciones en Chile y Latinoamérica.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#marcas" className="btn">Ver marcas <ArrowRight size={18} /></Link>
              <Link href="/contacto" className="btn-outline">Hablemos</Link>
            </div>
          </div>
          <div className="card">
            <ul className="space-y-4 text-white/80">
              <li className="flex items-start gap-3"><Rocket className="mt-1"/><span>Diseñamos estrategias B2B y crecimiento sostenible.</span></li>
              <li className="flex items-start gap-3"><Film className="mt-1"/><span>Producimos contenidos con calidad cinematográfica.</span></li>
              <li className="flex items-start gap-3"><Users className="mt-1"/><span>Construimos comunidades, membresías y delegaciones.</span></li>
              <li className="flex items-start gap-3"><Landmark className="mt-1"/><span>Alianzas internacionales: HKLABA & Asia Pacífico.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* MARCAS DESTACADAS */}
      <section id="marcas" className="section border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold">Marcas & Unidades</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Cada unidad cumple un rol específico dentro del ecosistema para entregar valor 360° a clientes y aliados.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <BrandCard title="Dekaelo Media" description="Producción Audiovisual Estratégica: YouTube/Institucional, reels y campañas de contenido." href="https://www.dekaelomedia.com" icon={<Film />} />
            <BrandCard title="Tronx Strategy" description="Consultoría B2B, propuestas corporativas, growth, CRM y performance." href="https://www.tronxstrategy.com" icon={<Building2 />} />
            <BrandCard title="APCC" description="Cámara de Comercio Asia Pacífico: membresías, misiones y oportunidades." href="https://apcc-chamber.vercel.app" icon={<Landmark />} />
            <BrandCard title="HKLABA" description="Alianza con Hong Kong – Latin America Business Association." href="https://hklaba.vercel.app" icon={<Landmark />} />
            <BrandCard title="Echevensko" description="Charlas inspiracionales y formación: La Magia de la Imaginación." href="https://empresas.echevensko.com" icon={<Users />} />
            <BrandCard title="Tronx TV / Andinex" description="Contenido y proyectos de expansión regional (en desarrollo)." href="/marcas#tronx-tv" icon={<Rocket />} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container card text-center">
          <h3 className="text-2xl font-semibold">¿Listo para alinear estrategia, contenido y ventas?</h3>
          <p className="mt-2 text-white/70">Conversemos un roadmap de 90 días y un piloto de alto impacto.</p>
          <div className="mt-4">
            <Link href="/contacto" className="btn">Agenda una reunión</Link>
          </div>
        </div>
      </section>
    </>
  );
}

function BrandCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: React.ReactNode }) {
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

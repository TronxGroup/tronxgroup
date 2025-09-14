import Link from 'next/link';
import type { ElementType } from 'react';
import { Instagram, Linkedin, Facebook, Youtube, Rocket } from 'lucide-react';

// Tipo para las redes (acepta íconos de lucide o componentes propios)
type Social = { name: string; url: string; icon: ElementType };

const brands: {
  name: string;
  desc: string;
  url: string;
  socials: Social[];
}[] = [
  {
    name: 'Dekaelo Media',
    desc: 'Estudio audiovisual estratégico: producción de alto nivel con enfoque en negocio. Un video institucional + 4–5 reels mensuales para dar presencia constante a tu marca.',
    url: 'https://www.dekaelomedia.com',
    socials: [
      { name: 'LinkedIn', url: '#', icon: Linkedin },
      { name: 'Instagram', url: '#', icon: Instagram },
    ],
  },
  {
    name: 'Tronx Strategy',
    desc: 'Consultoría corporativa y B2B: diseño de propuestas, gestión de growth, embudos de ventas, CRM y performance digital para empresas en expansión.',
    url: 'https://www.tronxstrategy.com',
    socials: [{ name: 'LinkedIn', url: '#', icon: Linkedin }],
  },
  {
    name: 'Tronx TV',
    desc: 'Canal propio de contenidos y documentales en desarrollo. Un espacio de formatos originales para inspirar, informar y conectar con audiencias B2B y masivas.',
    url: '#',
    socials: [
      { name: 'YouTube', url: '#', icon: Youtube },
      { name: 'Instagram', url: '#', icon: Instagram },
      { name: 'TikTok', url: '#', icon: Rocket }, // placeholder para TikTok
      { name: 'Facebook', url: '#', icon: Facebook },
    ],
  },
];

export default function Marcas() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold">Marcas</h1>
        <p className="mt-2 text-white/70 max-w-2xl">
          Ecosistema integrado que cubre las tres áreas críticas para el crecimiento empresarial:
          <span className="text-white"> estrategia</span>, 
          <span className="text-white"> contenido</span> y 
          <span className="text-white"> distribución</span>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {brands.map((b) => (
            <div key={b.name} className="card">
              <h3 className="text-xl font-semibold">{b.name}</h3>
              <p className="text-white/70 mt-1">{b.desc}</p>

              {/* Redes sociales */}
              <div className="mt-3 flex flex-wrap gap-3">
                {b.socials.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.name}
                      href={s.url}
                      className="flex items-center gap-1 text-white/70 hover:text-white text-sm"
                      aria-label={`${b.name} en ${s.name}`}
                    >
                      <Icon size={16} /> {s.name}
                    </Link>
                  );
                })}
              </div>

              {/* Sitio oficial */}
              <div className="mt-4">
                <Link href={b.url} className="link">
                  Ir al sitio →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

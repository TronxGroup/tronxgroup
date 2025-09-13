import Link from 'next/link';

const brands = [
  { name: 'Dekaelo Media', desc: 'Producción Audiovisual Estratégica para empresas: video largo + 4–5 reels mensuales.', url: 'https://www.dekaelomedia.com' },
  { name: 'Tronx Strategy', desc: 'Consultoría B2B, propuestas corporativas, growth & CRM.', url: 'https://www.tronxstrategy.com' },
  { name: 'APCC', desc: 'Cámara de Comercio Asia Pacífico. Membresías, foros y misiones.', url: 'https://apcc-chamber.vercel.app' },
  { name: 'HKLABA', desc: 'Alianza HK–LatAm. Delegación Chile 2025 y networking global.', url: 'https://hklaba.vercel.app' },
  { name: 'Echevensko', desc: 'Charlas y formación: La Magia de la Imaginación.', url: 'https://empresas.echevensko.com' },
  { name: 'Tronx TV', desc: 'Canal de contenido y documentales (en desarrollo).', url: '#' },
  { name: 'Andinex', desc: 'Proyectos regionales y expansión (en diseño).', url: '#' },
];

export default function Marcas() {
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-semibold">Marcas</h1>
        <p className="mt-2 text-white/70 max-w-2xl">Ecosistema coordinado para entregar valor 360°: estrategia, contenido y relaciones.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {brands.map((b) => (
            <div key={b.name} className="card">
              <h3 className="text-xl font-semibold">{b.name}</h3>
              <p className="text-white/70 mt-1">{b.desc}</p>
              <div className="mt-4">
                <Link href={b.url} className="link">Ir al sitio →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

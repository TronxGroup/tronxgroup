/* ------------------------------------------------------
   Tronx Group — Sitio web corporativo
   Stack: Next.js (App Router) + TypeScript + TailwindCSS
   Instrucciones rápidas:
   1) npm create next-app@latest tronx-group --ts --eslint --app --src-dir --tailwind --import-alias "@/*"
   2) Reemplaza/añade los archivos de este documento dentro del proyecto.
   3) npm i lucide-react
   4) npm run dev
   5) (Opcional) Ejecuta tests: npm run test
------------------------------------------------------ */

/* ===================== package.json ===================== */
// file: package.json
{
  "name": "tronx-group",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "vitest run"
  },
  "dependencies": {
    "autoprefixer": "^10.4.20",
    "lucide-react": "^0.462.0",
    "next": "^14.2.5",
    "postcss": "^8.4.41",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwindcss": "^3.4.10"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.4.6",
    "@testing-library/react": "^14.3.1",
    "@types/node": "^20.12.12",
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "jsdom": "^24.0.0",
    "typescript": "^5.4.5",
    "vitest": "^1.6.0"
  }
}

/* ===================== next.config.mjs ===================== */
// file: next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
export default nextConfig;

/* ===================== tsconfig.json ===================== */
// file: tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}

/* ===================== postcss.config.js ===================== */
// file: postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

/* ===================== tailwind.config.ts ===================== */
// file: tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f7ff', 100: '#e8eeff', 200: '#cddbff', 300: '#a8c0ff',
          400: '#7e9aff', 500: '#5a79ff', 600: '#3f5bff', 700: '#3349cc',
          800: '#28399f', 900: '#1b276b'
        }
      }
    },
  },
  plugins: [],
};
export default config;

/* ===================== globals.css ===================== */
// file: src/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root { color-scheme: dark; }
html { scroll-behavior: smooth; }
body { @apply bg-black text-white; }
.container { @apply mx-auto max-w-6xl px-4; }
.link { @apply text-brand-400 hover:text-brand-200 transition-colors; }
.btn { @apply inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-medium bg-white text-black hover:opacity-90 active:opacity-80; }
.btn-outline { @apply inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-medium border border-white/20 hover:bg-white/10; }
.card { @apply rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6; }
.section { @apply py-16 md:py-24; }

/* ===================== Layout ===================== */
// file: src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tronxgroup.com'),
  title: {
    default: 'Tronx Group — Estrategia, Creatividad y Alianzas',
    template: '%s | Tronx Group',
  },
  description:
    'Holding creativo-estratégico que integra Dekaelo Media, Tronx Strategy, APCC, HKLABA, Echevensko, Tronx TV y Andinex.',
  openGraph: {
    type: 'website',
    url: 'https://www.tronxgroup.com/',
    title: 'Tronx Group — Estrategia, Creatividad y Alianzas',
    description: 'Conectamos marcas, contenidos y negocios en un ecosistema integral.',
    images: [{ url: '/og-cover.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

/* ===================== Home ===================== */
// file: src/app/page.tsx
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

/* ===================== Quiénes Somos ===================== */
// file: src/app/quienes-somos/page.tsx
export default function QuienesSomos() {
  return (
    <section className="section">
      <div className="container">
        <span className="text-sm text-white/60">Institucional</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Quiénes Somos</h1>
        <p className="mt-4 text-white/70 max-w-3xl">Somos un holding creativo-estratégico con base en Chile. Integramos consultoría, producción audiovisual y alianzas internacionales para construir marcas con propósito y resultados medibles. Creemos en procesos claros, data útil y storytelling potente.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="card"><h3 className="font-semibold">Visión</h3><p className="text-white/70 mt-2">Conectar Latinoamérica con Asia y el mundo a través de negocios, contenidos e innovación.</p></div>
          <div className="card"><h3 className="font-semibold">Misión</h3><p className="text-white/70 mt-2">Diseñar y ejecutar estrategias integrales que combinen performance, marca y relaciones.</p></div>
          <div className="card"><h3 className="font-semibold">Valores</h3><p className="text-white/70 mt-2">Transparencia, excelencia, creatividad y colaboración de largo plazo.</p></div>
        </div>

        <div className="mt-12 card">
          <h3 className="text-xl font-semibold">Equipo Núcleo</h3>
          <ul className="mt-4 grid md:grid-cols-2 gap-4 text-white/80">
            <li><strong>Dirección Estratégica:</strong> Roadmaps, pricing, relaciones B2B.</li>
            <li><strong>Dirección Audiovisual:</strong> Guion, rodaje, post y distribución.</li>
            <li><strong>Growth & CRM:</strong> Zoho / HubSpot / Brevo, analítica y automatizaciones.</li>
            <li><strong>Alianzas & Gremios:</strong> APCC & HKLABA para expansión regional.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ===================== Marcas ===================== */
// file: src/app/marcas/page.tsx
import Link from 'next/link';

const brands = [
  {
    name: 'Dekaelo Media',
    desc: 'Producción Audiovisual Estratégica para empresas: video largo + 4–5 reels mensuales.',
    url: 'https://www.dekaelomedia.com',
  },
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

/* ===================== Contacto ===================== */
// file: src/app/contacto/page.tsx
export default function Contacto() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">Contacto</h1>
          <p className="mt-2 text-white/70">Cuéntanos de tu proyecto. Respondemos dentro de 24–48h hábiles.</p>

          <form className="mt-6 space-y-4" action="https://formspree.io/f/XXXXXXXX" method="POST">
            <div>
              <label className="block text-sm text-white/70">Nombre</label>
              <input name="name" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"/>
            </div>
            <div>
              <label className="block text-sm text-white/70">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"/>
            </div>
            <div>
              <label className="block text-sm text-white/70">Mensaje</label>
              <textarea name="message" rows={5} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"/>
            </div>
            <button className="btn" type="submit">Enviar</button>
          </form>

          <div className="mt-8 text-white/70 space-y-1">
            <p><strong>Email:</strong> tronxgroupspa@gmail.com</p>
            <p><strong>Ubicación:</strong> Santiago, Chile</p>
            <p><strong>Redes:</strong> LinkedIn / YouTube / Instagram</p>
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold">Agenda una reunión</h3>
          <p className="text-white/70 mt-2">Si prefieres coordinar directo, comparte 3 horarios y te confirmamos.</p>
          <ul className="mt-4 list-disc list-inside text-white/80 space-y-1">
            <li>Kickoff 30 min (visión y objetivos)</li>
            <li>Roadmap 90 días (entregables y KPIs)</li>
            <li>Propuesta formal y cronograma</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ===================== Componentes ===================== */
// file: src/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/marcas', label: 'Marcas' },
  { href: '/contacto', label: 'Contacto' },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur bg-black/70">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-semibold">Tronx Group</Link>
        <nav className="flex items-center gap-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`px-3 py-1.5 rounded-xl hover:bg-white/10 ${pathname === l.href ? 'bg-white/10' : ''}`}>{l.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

// file: src/components/Footer.tsx
import Link from 'next/link';
export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container py-10 text-sm text-white/60">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p>© {new Date().getFullYear()} Tronx Group. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/quienes-somos" className="link">Quiénes Somos</Link>
            <Link href="/marcas" className="link">Marcas</Link>
            <Link href="/contacto" className="link">Contacto</Link>
          </div>
        </div>
        <p className="mt-2">Operamos desde Chile para LatAm y el mundo. Sitio en construcción — se irán integrando fotos, casos y prensa.</p>
      </div>
    </footer>
  );
}

/* ===================== SEO extra ===================== */
// file: src/app/robots.txt/route.ts
export function GET() {
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: https://www.tronxgroup.com/sitemap.xml\n`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
}

// file: src/app/sitemap.ts
import { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.tronxgroup.com';
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/quienes-somos`, lastModified: new Date() },
    { url: `${base}/marcas`, lastModified: new Date() },
    { url: `${base}/contacto`, lastModified: new Date() },
  ];
}

/* ===================== Tests (Vitest + RTL) ===================== */
// file: vitest.config.ts
import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

// file: src/setupTests.ts
import '@testing-library/jest-dom';

// file: src/__tests__/home.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

import Home from '@/app/page';

describe('Home Page', () => {
  it('renderiza el título Tronx Group y CTA', () => {
    render(<Home />);
    expect(screen.getByText('Tronx Group')).toBeInTheDocument();
    expect(screen.getByText('Agenda una reunión')).toBeInTheDocument();
  });
});

// file: src/__tests__/navbar.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: any) => <a href={href} {...props}>{children}</a>,
}));

vi.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

import { Navbar } from '@/components/Navbar';

describe('Navbar', () => {
  it('marca "Inicio" como activo cuando pathname es "/"', () => {
    render(<Navbar />);
    const inicio = screen.getByText('Inicio');
    expect(inicio.className).toMatch(/bg-white\/10/);
  });
});

/* ===================== Public assets (placeholders) ===================== */
// Coloca en /public:
// - og-cover.jpg (1200x630)
// - logos de marcas si los tienes (dekaelo.png, apcc.png, hklaba.png, etc.)

/* ===================== Notas ===================== */
// - Reemplaza la URL de Formspree en /contacto con tu endpoint real.
// - Ajusta dominios reales en metadataBase y sitemap.
// - Si usarás Cloudflare/SSL y subdominios, recuerda configurar A/AAAA y CNAME en DNS y Vercel.

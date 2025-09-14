'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

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
        {/* Logo con imagen */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo_TronxGroup_v2025.png.png"
            alt="Tronx Group"
            width={140}   // ajusta el tamaño según tu diseño
            height={32}   // proporción recomendada
            priority
          />
        </Link>

        {/* Navegación */}
        <nav className="flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-xl hover:bg-white/10 ${
                pathname === l.href ? 'bg-white/10' : ''
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

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

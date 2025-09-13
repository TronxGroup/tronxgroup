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

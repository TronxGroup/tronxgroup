import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tronx Group SpA',
  description: 'Creatividad, estrategia y narrativa desde Chile hacia el mundo.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

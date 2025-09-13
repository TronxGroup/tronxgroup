import Link from 'next/link';
import { Twitter } from 'lucide-react';

export default function Contacto() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">Contacto</h1>
          <p className="mt-2 text-white/70">
            Cuéntanos de tu proyecto. Respondemos dentro de 24–48 h hábiles. Si prefieres, escríbenos directo a{' '}
            <a href="mailto:info@tronxgroup.com" className="link">info@tronxgroup.com</a>.
          </p>

          <form
            className="mt-6 space-y-4"
            action="https://formspree.io/f/XXXXXXXX" // ← reemplaza con tu endpoint real
            method="POST"
          >
            <input type="hidden" name="_subject" value="Nuevo contacto desde tronxgroup.com" />
            <div>
              <label className="block text-sm text-white/70" htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Tu nombre"
                className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="tu@empresa.com"
                className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70" htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Cuéntanos brevemente objetivos, plazo y presupuesto aproximado."
                className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>
            <button className="btn" type="submit">Enviar</button>
            <p className="text-xs text-white/50">
              Al enviar aceptas ser contactado por correo. No compartimos tus datos con terceros.
            </p>
          </form>

          <div className="mt-8 text-white/70 space-y-1">
            <p><strong>Email:</strong> <a href="mailto:info@tronxgroup.com" className="link">info@tronxgroup.com</a></p>
            <p><strong>Ubicación:</strong> Santiago, Chile</p>
            <p className="flex items-center gap-2">
              <strong>Redes:</strong>
              {/* Solo X (Twitter). Reemplaza el href con tu cuenta real */}
              <Link href="#" className="inline-flex items-center gap-1 link">
                <Twitter size={16} /> X (Twitter)
              </Link>
            </p>
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold">Agenda una reunión</h3>
          <p className="text-white/70 mt-2">
            Si prefieres coordinar directo, comparte 3 horarios y te confirmamos.
          </p>
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

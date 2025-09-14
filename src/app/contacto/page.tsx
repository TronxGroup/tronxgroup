import Link from 'next/link';
import { Twitter, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Contacto() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-12">
        {/* Columna izquierda */}
        <div>
          <h1 className="text-3xl md:text-4xl font-semibold">Contacto</h1>
          <p className="mt-2 text-white/70">
            Cuéntanos sobre tu proyecto o idea. Nuestro equipo responde en un plazo de 24–48 h hábiles. 
            También puedes escribirnos directamente a{' '}
            <a href="mailto:info@tronxgroup.com" className="link">info@tronxgroup.com</a>.
          </p>

          {/* Formulario */}
          <form
            className="mt-6 space-y-5"
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
                placeholder="Tu nombre completo"
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
                placeholder="Cuéntanos brevemente tus objetivos, plazos y presupuesto aproximado."
                className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-500"
              />
            </div>

            {/* Checkbox de privacidad */}
            <div className="flex items-start gap-2 text-sm text-white/60">
              <input type="checkbox" required id="privacy" className="mt-1" />
              <label htmlFor="privacy">
                Acepto la <Link href="/privacidad-condiciones" className="link">política de privacidad</Link> y autorizo el uso de mis datos para recibir respuesta a esta solicitud.
              </label>
            </div>

            <button className="btn" type="submit">Enviar</button>
            <p className="text-xs text-white/50 mt-1">
              No compartimos tus datos con terceros. Solo los usamos para dar respuesta a tu solicitud.
            </p>
          </form>

          {/* Info adicional */}
          <div className="mt-10 space-y-2 text-white/70">
            <p className="flex items-center gap-2">
              <Mail size={16} /> <a href="mailto:info@tronxgroup.com" className="link">info@tronxgroup.com</a>
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Santiago, Chile
            </p>
            <p className="flex items-center gap-3">
              <span className="font-semibold text-white/80">Redes:</span>
              <Link href="#" className="flex items-center gap-1 link"><Twitter size={16} /> X</Link>
              <Link href="#" className="flex items-center gap-1 link"><Linkedin size={16} /> LinkedIn</Link>
            </p>
          </div>
        </div>

        {/* Columna derecha: agenda */}
        <div className="card">
          <h3 className="text-xl font-semibold">Agenda una reunión</h3>
          <p className="text-white/70 mt-2">
            Si prefieres coordinar directo, sugiere 3 horarios y te confirmamos.
          </p>
          <ul className="mt-4 list-disc list-inside text-white/80 space-y-1">
            <li>Kickoff 30 min · visión y objetivos</li>
            <li>Roadmap 90 días · entregables y KPIs</li>
            <li>Propuesta formal y cronograma</li>
          </ul>
          <div className="mt-6">
            <Link href="/contacto#form" className="btn">Agendar ahora</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

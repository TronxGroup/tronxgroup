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

export default function QuienesSomos() {
  return (
    <section className="section">
      <div className="container">
        <span className="text-sm text-white/60">Institucional</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Quiénes Somos</h1>
        <p className="mt-4 text-white/70 max-w-3xl">
          Somos un holding creativo-estratégico con base en Chile. Integramos consultoría, producción audiovisual y
          alianzas internacionales para construir marcas con propósito y resultados medibles. Creemos en procesos
          claros, data útil y storytelling potente.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="card"><h3 className="font-semibold">Visión</h3><p className="text-white/70 mt-2">Conectar Latinoamérica con Asia y el mundo a través de negocios, contenidos e innovación.</p></div>
          <div className="card"><h3 className="font-semibold">Misión</h3><p className="text-white/70 mt-2">Diseñar y ejecutar estrategias integrales que combinen performance, marca y relaciones.</p></div>
          <div className="card"><h3 className="font-semibold">Valores</h3><p className="text-white/70 mt-2">Transparencia, excelencia, creatividad y colaboración de largo plazo.</p></div>
        </div>
      </div>
    </section>
  );
}

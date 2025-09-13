export default function QuienesSomos() {
  return (
    <section className="section">
      <div className="container">
        <span className="text-sm text-white/60">Institucional</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Quiénes somos</h1>

        <p className="mt-4 text-white/70 max-w-3xl">
          Somos un holding creativo-estratégico con base en Chile. Integramos estrategia, producción
          audiovisual y distribución de contenidos para construir marcas con propósito y resultados
          medibles. Trabajamos con procesos claros, datos útiles y storytelling potente.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="card">
            <h3 className="font-semibold">Visión</h3>
            <p className="text-white/70 mt-2">
              Impulsar marcas de Latinoamérica con soluciones integrales de estrategia y contenido.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold">Misión</h3>
            <p className="text-white/70 mt-2">
              Diseñar y ejecutar estrategias que combinen performance, marca y distribución para
              crecer de forma sostenible.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold">Valores</h3>
            <p className="text-white/70 mt-2">
              Transparencia, excelencia, creatividad y colaboración de largo plazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

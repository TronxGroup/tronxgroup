export default function QuienesSomos() {
  return (
    <section className="section">
      <div className="container">
        <span className="text-sm text-white/60">Institucional</span>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Quiénes somos</h1>

        <p className="mt-4 text-white/70 max-w-3xl">
          Tronx Group es un holding creativo–estratégico con base en Chile. Unimos consultoría,
          producción audiovisual y distribución de contenidos para ayudar a empresas y
          organizaciones a crecer con propósito y resultados medibles. Trabajamos con procesos
          claros, métricas reales y storytelling que conecta.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="card">
            <h3 className="font-semibold">Visión</h3>
            <p className="text-white/70 mt-2">
              Ser el socio creativo y estratégico que potencie marcas de Latinoamérica mediante
              soluciones integrales de estrategia, contenido y tecnología.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold">Misión</h3>
            <p className="text-white/70 mt-2">
              Diseñar y ejecutar planes que integren performance, branding y distribución de
              contenidos, asegurando impacto sostenible en el tiempo.
            </p>
          </div>

          <div className="card">
            <h3 className="font-semibold">Valores</h3>
            <p className="text-white/70 mt-2">
              Transparencia en cada gestión, excelencia en la ejecución, creatividad en las
              soluciones y compromiso de largo plazo con nuestros clientes y aliados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

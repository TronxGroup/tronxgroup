// app/privacidad/condiciones/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacidad & Condiciones | Tronx Group",
  description:
    "Política de Privacidad y Términos y Condiciones de Tronx Group SpA.",
  robots: { index: false, follow: false }, // no indexar
  alternates: { canonical: "/privacidad/condiciones" },
};

export default function PrivacidadCondicionesPage() {
  const lastUpdate = "19 Oct 2025";

  return (
    <main
      className="min-h-screen text-blue-50"
      style={{
        background:
          "radial-gradient(900px 520px at 90% -10%, rgba(14,165,233,0.12), transparent 60%), linear-gradient(180deg, #0C132B 0%, #0E1633 100%)",
      }}
    >
      {/* NAV mínimo */}
      <nav className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[rgba(12,19,43,0.80)] bg-[rgba(12,19,43,0.92)] border-b border-white/10">
        <div className="section flex items-center justify-between py-3">
          <Link href="/" aria-label="Volver al inicio" className="flex items-center">
            <Image
              src="/tronxgrouplogo.png"
              alt="Tronx Group"
              width={48}
              height={48}
              priority
            />
          </Link>
          <span className="text-xs text-blue-200/80">
            Última actualización: {lastUpdate}
          </span>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden bg-[#0B1126]">
        <div className="absolute inset-0 bg-[url('/BG_tronx_group.jpg')] bg-cover bg-center opacity-15 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0C132B]/60 to-[#0A0F21]" />
        <div className="relative section py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(59,130,246,0.4)]">
            Privacidad & Condiciones
          </h1>
          <p className="mt-4 text-blue-100/90 max-w-3xl">
            La protección de tus datos y la claridad de nuestras condiciones son
            esenciales. En esta página encontrarás nuestra{" "}
            <strong>Política de Privacidad</strong> y los{" "}
            <strong>Términos y Condiciones</strong> aplicables al uso de nuestros
            sitios y servicios.
          </p>
        </div>
      </header>

      {/* Contenido */}
      <section className="py-10">
        <div className="section grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Índice */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
              <h3 className="text-white font-semibold mb-3 text-sm">Contenido</h3>
              <nav className="text-sm space-y-2 text-blue-100/90">
                <a className="block hover:text-white" href="#privacy">Política de Privacidad</a>
                <a className="block hover:text-white" href="#data-we-collect">Datos que recopilamos</a>
                <a className="block hover:text-white" href="#use-of-data">Uso de datos</a>
                <a className="block hover:text-white" href="#cookies">Cookies</a>
                <a className="block hover:text-white" href="#legal-bases">Bases legales (GDPR)</a>
                <a className="block hover:text-white" href="#rights">Tus derechos</a>
                <a className="block hover:text-white" href="#security">Seguridad & Retención</a>
                <a className="block hover:text-white" href="#third-parties">Terceros & Transferencias</a>
                <a className="block hover:text-white" href="#changes">Cambios</a>
                <a className="block hover:text-white" href="#terms">Términos y Condiciones</a>
                <a className="block hover:text-white" href="#use-of-site">Uso del sitio</a>
                <a className="block hover:text-white" href="#liability">Responsabilidad</a>
                <a className="block hover:text-white" href="#ip">Propiedad intelectual</a>
                <a className="block hover:text-white" href="#contact">Contacto</a>
              </nav>
            </div>
          </aside>

          {/* Contenido principal */}
          <div className="lg:col-span-3 space-y-6">
            {/* PRIVACIDAD */}
            <div id="privacy" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h2 className="text-white text-2xl font-semibold">Política de Privacidad</h2>
              <p className="mt-3 text-blue-100/90">
                Esta Política describe cómo {`Tronx Group SpA`} (“Tronx Group”, “nosotros”)
                recopila, usa y protege la información personal que nos proporcionas
                al utilizar nuestros sitios web y servicios (incluyendo formularios
                de contacto integrados con CRM, como Zoho).
              </p>
            </div>

            <div id="data-we-collect" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Datos que recopilamos</h3>
              <ul className="mt-3 space-y-2 text-blue-100/90 list-disc pl-5">
                <li><strong>Identificación y contacto:</strong> nombre, apellido, correo electrónico, teléfono (si lo indicas).</li>
                <li><strong>Contenido del mensaje:</strong> los campos que escribes en nuestros formularios.</li>
                <li><strong>Datos técnicos:</strong> IP, tipo de dispositivo/navegador, páginas visitadas, fecha y hora.</li>
                <li><strong>Cookies y analítica:</strong> datos de navegación (ver sección “Cookies”).</li>
              </ul>
            </div>

            <div id="use-of-data" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Cómo usamos tu información</h3>
              <ul className="mt-3 space-y-2 text-blue-100/90 list-disc pl-5">
                <li>Responder consultas, brindar soporte y dar seguimiento comercial.</li>
                <li>Mejorar sitios, contenidos y operación (“Cloud Growth System”).</li>
                <li>Generar métricas internas (CAC, CVR, LTV, ROAS) de forma agregada.</li>
                <li>Cumplir obligaciones legales y prevenir abusos o fraudes.</li>
              </ul>
            </div>

            <div id="cookies" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Cookies</h3>
              <p className="mt-2 text-blue-100/90">
                Usamos cookies propias y de terceros (p. ej., analítica y rendimiento)
                para operar el sitio y comprender su uso. Puedes gestionar preferencias
                desde tu navegador. Algunas funciones podrían verse afectadas si
                deshabilitas ciertas categorías.
              </p>
            </div>

            <div id="legal-bases" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Bases legales (GDPR) y CCPA</h3>
              <ul className="mt-3 space-y-2 text-blue-100/90 list-disc pl-5">
                <li><strong>Ejecución de contrato / medidas precontractuales:</strong> responder tu solicitud.</li>
                <li><strong>Interés legítimo:</strong> mejorar la seguridad, prevenir fraude y optimizar servicios.</li>
                <li><strong>Consentimiento:</strong> para comunicaciones comerciales cuando sea requerido.</li>
              </ul>
              <p className="mt-3 text-blue-100/90">
                Si resides en la UE/EEE (GDPR) o California (CCPA), puedes ejercer derechos
                adicionales detallados en la sección “Tus derechos”.
              </p>
            </div>

            <div id="rights" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Tus derechos</h3>
              <ul className="mt-3 space-y-2 text-blue-100/90 list-disc pl-5">
                <li>Acceso, rectificación, actualización y eliminación de datos.</li>
                <li>Oposición o limitación del tratamiento; portabilidad cuando aplique.</li>
                <li>Retiro del consentimiento (sin efecto retroactivo) cuando sea la base legal.</li>
              </ul>
              <p className="mt-3 text-blue-100/90">
                Para ejercer tus derechos, escribe a{" "}
                <a className="underline hover:text-white" href="mailto:info@tronxgroup.com">
                  info@tronxgroup.com
                </a>.
              </p>
            </div>

            <div id="security" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Seguridad y retención</h3>
              <ul className="mt-3 space-y-2 text-blue-100/90 list-disc pl-5">
                <li>Implementamos medidas técnicas y organizativas (SSL, DNSSEC, SPF, DKIM, DMARC).</li>
                <li>Conservamos datos solo mientras sea necesario para los fines indicados o por requerimientos legales.</li>
              </ul>
            </div>

            <div id="third-parties" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Terceros y transferencias</h3>
              <p className="mt-2 text-blue-100/90">
                Podemos compartir datos con proveedores que nos ayudan a operar (p. ej., CRM Zoho,
                analítica, hosting). Exigimos garantías contractuales y de seguridad adecuadas.
                Si hay transferencias internacionales, aplicamos salvaguardas reconocidas (p. ej.,
                cláusulas contractuales tipo).
              </p>
            </div>

            <div id="changes" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Cambios a esta política</h3>
              <p className="mt-2 text-blue-100/90">
                Podemos actualizar este documento para reflejar cambios operativos o legales.
                Publicaremos la versión vigente con su fecha de actualización.
              </p>
            </div>

            {/* TÉRMINOS */}
            <div id="terms" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h2 className="text-white text-2xl font-semibold">Términos y Condiciones</h2>
              <p className="mt-3 text-blue-100/90">
                Estos Términos regulan el uso de nuestros sitios y servicios. Al
                acceder, aceptas cumplirlos. Si no estás de acuerdo, te pedimos
                no utilizar el sitio.
              </p>
            </div>

            <div id="use-of-site" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Uso del sitio</h3>
              <ul className="mt-3 space-y-2 text-blue-100/90 list-disc pl-5">
                <li>Usarás el sitio conforme a las leyes aplicables y sin causar perjuicio.</li>
                <li>No intentarás vulnerar seguridad, extraer datos sin autorización o interrumpir el servicio.</li>
                <li>La información publicada puede cambiar sin previo aviso.</li>
              </ul>
            </div>

            <div id="liability" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Limitación de responsabilidad</h3>
              <p className="mt-2 text-blue-100/90">
                El sitio se proporciona “tal cual”. En la medida permitida por la ley,
                Tronx Group no es responsable por daños indirectos, incidentales o
                consecuenciales derivados del uso o imposibilidad de uso del sitio.
              </p>
            </div>

            <div id="ip" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Propiedad intelectual</h3>
              <p className="mt-2 text-blue-100/90">
                Marcas, logotipos, contenidos, diseños y software asociados al sitio son
                propiedad de Tronx Group o sus licenciantes. No se concede licencia
                salvo autorización expresa.
              </p>
            </div>

            <div id="contact" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <h3 className="text-white text-xl font-semibold">Contacto</h3>
              <p className="mt-2 text-blue-100/90">
                Si tienes preguntas sobre esta página o deseas ejercer tus derechos:
              </p>
              <ul className="mt-2 text-blue-100/90 space-y-1">
                <li>Email: <a className="underline hover:text-white" href="mailto:info@tronxgroup.com">info@tronxgroup.com</a></li>
                <li>WhatsApp: <a className="underline hover:text-white" href="https://wa.me/56920080031" target="_blank" rel="noopener noreferrer">+56 9 2008 0031</a></li>
                <li>Ubicación: Santiago · Chile</li>
              </ul>
              <div className="mt-4">
                <Link href="/" className="btn btn-primary !bg-sky-600 hover:!bg-sky-500 text-white">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER compacto */}
      <footer className="mt-0 border-t border-white/10 bg-[#0C132B] text-blue-100/90">
        <div className="section py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/tronxgrouplogo.png" alt="Tronx Group" width={20} height={20} />
            <span className="text-xs">
              © 2025 Tronx Group SpA — Todos los derechos reservados
            </span>
          </div>
          <div className="text-xs">
            <Link href="/#contacto" className="hover:text-white">Contacto</Link>
            <span className="mx-2 opacity-50">•</span>
            <a
              className="hover:text-white"
              href="https://www.linkedin.com/company/tronx-group"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="mx-2 opacity-50">•</span>
            <a
              className="hover:text-white"
              href="https://x.com/TronxGroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

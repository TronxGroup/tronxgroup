"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Rocket,
  Video,
  Tv,
  Lightbulb,
  Mail,
  Home,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// --- Íconos personalizados ---
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 1227"
    className="w-5 h-5 fill-current"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M714.2 519.8L1179.5 0H1073.1L666.5 461.7L358.3 0H0L486.2 708.1L0 1226.6H106.4L537.4 744.2L861.7 1226.6H1200L714.2 519.8ZM589.5 678.4L543.6 612.2L145.2 79.7H306.4L612.2 520.2L658.1 586.4L1073.6 1146.9H912.5L589.5 678.4Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="w-5 h-5 fill-current"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M16 2C8.268 2 2 8.268 2 16a13.9 13.9 0 002.027 7.202L2 30l6.995-2.007A13.9 13.9 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25a11.82 11.82 0 01-6.022-1.655l-.43-.255-4.155 1.192 1.194-4.046-.281-.422A11.84 11.84 0 014.2 16C4.2 9.934 9.934 4.2 16 4.2S27.8 9.934 27.8 16 22.066 27 16 27zm6.377-8.489c-.347-.174-2.052-1.012-2.37-1.128-.317-.116-.55-.174-.782.175-.231.348-.898 1.128-1.1 1.362-.203.231-.406.26-.753.087-.347-.174-1.468-.541-2.797-1.726-1.034-.923-1.734-2.064-1.937-2.412-.203-.348-.022-.536.152-.71.157-.156.348-.406.522-.609.174-.203.231-.348.347-.579.116-.231.058-.435-.029-.609-.087-.174-.782-1.884-1.07-2.574-.283-.679-.571-.587-.782-.597l-.667-.012c-.203 0-.523.076-.797.376-.274.3-1.046 1.02-1.046 2.483s1.071 2.879 1.22 3.076c.174.231 2.099 3.2 5.089 4.487.712.307 1.267.491 1.7.63.713.227 1.362.195 1.875.118.572-.085 1.758-.718 2.007-1.41.247-.692.247-1.282.174-1.41-.072-.128-.26-.203-.606-.377z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M32.7 5.3c1.8 3.5 5 6.1 8.9 6.9v6.2c-3.3-.1-6.5-1.1-9.3-2.9v12.5c0 7.5-6.1 13.6-13.6 13.6S5.1 35.5 5.1 28s6.1-13.6 13.6-13.6c1 0 2 .1 3 .4v6.7c-.9-.3-1.9-.5-3-.5-4.1 0-7.4 3.3-7.4 7.4S14.6 36 18.7 36s7.4-3.3 7.4-7.4V5.3h6.6z" />
  </svg>
);

export default function Landing() {
  return (
    <main id="top" className="bg-black text-white">
      {/* === HEADER === */}
      <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#top" className="inline-flex items-center gap-3">
            <Image
              src="/tronxgrouplogo.png"
              alt="Tronx Group"
              width={32}
              height={32}
              className="rounded"
              priority
            />
            <span className="font-semibold tracking-tight">Tronx Group</span>
          </a>
          <nav className="flex items-center gap-5 text-gray-400">
            <a
              href="https://wa.me/56920080031"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#25D366] transition"
              aria-label="WhatsApp Tronx Group"
            >
              <WhatsAppIcon />
              <span className="hidden sm:inline">+56 9 2008 0031</span>
            </a>
            <a
              href="https://x.com/TronxGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="X (Twitter) Tronx Group"
            >
              <XIcon />
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 hover:text-white transition"
              aria-label="Ir al inicio"
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">Inicio</span>
            </a>
          </nav>
        </div>
      </header>

      {/* === HERO === */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
        <motion.h1
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={fadeUp.transition}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Tronx Group
        </motion.h1>

        <motion.p
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-2xl text-lg md:text-xl text-gray-300 mb-8"
        >
          Holding creativo-tecnológico que une estrategia, contenido y sistemas
          para construir crecimiento real, medible y con propósito.
        </motion.p>

        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            Conversemos <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={{ ...fadeUp.transition, delay: 0.45 }}
          viewport={{ once: true }}
          className="absolute bottom-8 text-sm text-gray-500"
        >
          Crecer. Simplificar. Escalar.
        </motion.div>
      </section>

      {/* === MARCAS === */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-16">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={fadeUp.transition}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ecosistema Tronx
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Cada marca refleja una energía: estrategia, comunicación,
            expansión y estructura. Juntas forman un
            sistema diseñado para el crecimiento B2B moderno.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tronx Strategy */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={fadeUp.transition}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
          >
            <div className="flex items-center justify-between mb-4">
              <Rocket className="w-8 h-8 text-blue-400" />
              <a
                href="https://www.tronxstrategy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm inline-flex items-center gap-1 text-blue-300 hover:text-white"
              >
                Sitio <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tronx Strategy</h3>
            <p className="text-gray-400 mb-4">
              Unidad de crecimiento B2B. Estrategia, CRM, automatización y
              performance marketing. Operación digital rápida y medible.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Tronx Cloud Suite</li>
              <li>• Revenue Share Program</li>
              <li>• Growth &amp; Data Playbooks</li>
            </ul>
            <div className="flex items-center gap-4 text-gray-400">
              <a
                href="https://www.linkedin.com/company/tronx-strategy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Tronx Strategy"
                className="hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/tronx_strategy/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Tronx Strategy"
                className="hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Dekaelo Media */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
          >
            <div className="flex items-center justify-between mb-4">
              <Video className="w-8 h-8 text-pink-400" />
              <a
                href="https://www.dekaelomedia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm inline-flex items-center gap-1 text-pink-300 hover:text-white"
              >
                Sitio <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <h3 className="text-xl font-semibold mb-2">Dekaelo Media</h3>
            <p className="text-gray-400 mb-4">
              Estudio audiovisual estratégico. Videos, reels, vodcasts y piezas
              cinematográficas que transmiten propósito y emoción.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Producción mensual y on-demand</li>
              <li>• Storytelling corporativo</li>
              <li>• Contenido para performance y fidelización</li>
            </ul>
            <div className="flex items-center gap-4 text-gray-400">
              <a
                href="https://www.instagram.com/dekaelo_media/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Dekaelo"
                className="hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/dekaelo-media/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Dekaelo"
                className="hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@dekaelo_media"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Dekaelo"
                className="hover:text-white"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Tronx TV */}
          <motion.div
            id="tronxtv"
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
          >
            <div className="flex items-center justify-between mb-4">
              <Tv className="w-8 h-8 text-green-400" />
              <span className="text-xs text-gray-400">Próximamente</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tronx TV</h3>
            <p className="text-gray-400 mb-4">
              Plataforma editorial de contenidos originales en video. Historias,
              documentales y realities sobre liderazgo, innovación y conciencia.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Reality Day y series originales</li>
              <li>• Entrevistas y comunidad creativa</li>
              <li>• Expansión LATAM ↔ APAC</li>
            </ul>
            <div className="flex items-center gap-4 text-gray-400">
              {/* Sustituir # por URLs reales cuando estén listos */}
              <a className="hover:text-white" aria-label="YouTube Tronx TV" href="#">
                <Youtube className="w-5 h-5" />
              </a>
              <a className="hover:text-white" aria-label="Instagram Tronx TV" href="#">
                <Instagram className="w-5 h-5" />
              </a>
              <a className="hover:text-white" aria-label="Facebook Tronx TV" href="#">
                <Facebook className="w-5 h-5" />
              </a>
              <a className="hover:text-white" aria-label="TikTok Tronx TV" href="#">
                <TikTokIcon />
              </a>
              <a className="hover:text-white" aria-label="X Tronx TV" href="#">
                <XIcon />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === FILOSOFÍA === */}
      <section className="bg-zinc-950 py-24 px-6">
        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={fadeUp.transition}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <Lightbulb className="w-10 h-10 mx-auto text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-semibold">
            Estrategia con Propósito
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Tronx Group nace de la idea de que el crecimiento no se mide solo en
            cifras, sino en impacto real. Combinamos tecnología, comunicación y
            conciencia para que cada proyecto crezca de forma escalable, humana
            y sostenible.
          </p>
        </motion.div>
      </section>

      {/* === CONTACTO === */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={fadeUp.transition}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold mb-4 text-center"
          >
            Conectemos
          </motion.h2>
          <motion.p
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 mb-10"
          >
            ¿Eres empresa, socio o creador interesado en construir el futuro con Tronx Group?
            Escríbenos o envíanos un mensaje directo.
          </motion.p>

          {/* FORMULARIO */}
          <form
            className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-lg"
            method="POST"
            action="https://formspree.io/f/your-endpoint" // TODO: reemplaza por tu endpoint o crea /api/contact
          >
            {/* Honeypot */}
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="_subject" value="Nuevo mensaje desde TronxGroup.com" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nombre" className="block text-sm text-gray-300 mb-1">
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="given-name"
                  className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="apellido" className="block text-sm text-gray-300 mb-1">
                  Apellido
                </label>
                <input
                  id="apellido"
                  name="apellido"
                  type="text"
                  required
                  autoComplete="family-name"
                  className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Tu apellido"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="tu@empresa.com"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="mensaje" className="block text-sm text-gray-300 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20 resize-y"
                  placeholder="Cuéntanos brevemente qué necesitas…"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
                aria-label="Enviar formulario de contacto"
              >
                Enviar <Mail className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 text-gray-400">
                <a
                  href="mailto:info@tronxgroup.com"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  info@tronxgroup.com <Mail className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/56920080031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#25D366] transition"
                >
                  <WhatsAppIcon /> +56 9 2008 0031
                </a>
              </div>
            </div>
          </form>

          {/* Accesos rápidos */}
          <div className="flex justify-center gap-6 mt-10 text-gray-400">
            <a
              href="https://x.com/TronxGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="X Tronx Group"
            >
              <XIcon />
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 hover:text-white transition"
              aria-label="Ir al inicio"
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">Inicio</span>
            </a>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-3">
            <Image
              src="/tronxgrouplogo.png"
              alt="Tronx Group"
              width={28}
              height={28}
              className="rounded"
            />
            <span>© {new Date().getFullYear()} Tronx Group SpA. Crecer con propósito.</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/56920080031"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#25D366] transition"
              aria-label="WhatsApp Tronx Group"
            >
              <WhatsAppIcon />
              <span className="hidden sm:inline">+56 9 2008 0031</span>
            </a>
            <a
              href="https://x.com/TronxGroup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label="X (Twitter) Tronx Group"
            >
              <XIcon />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

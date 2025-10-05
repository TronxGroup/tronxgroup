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
  Phone,
  Globe,
  CheckCircle2,
  Twitter,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Landing() {
  return (
    <main className="bg-black text-white">
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
            expansión, sabiduría y estructura. Juntas forman un
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
            <Rocket className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tronx Strategy</h3>
            <p className="text-gray-400 mb-4">
              Unidad de crecimiento B2B. Estrategia, CRM, automatización y
              performance marketing. Operación digital rápida y medible.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Tronx Cloud Suite</li>
              <li>• Revenue Share Program</li>
              <li>• Growth &amp; Data Playbooks</li>
            </ul>
          </motion.div>

          {/* Dekaelo Media */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
          >
            <Video className="w-8 h-8 text-pink-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dekaelo Media</h3>
            <p className="text-gray-400 mb-4">
              Estudio audiovisual estratégico. Videos, reels, vodcasts y piezas
              cinematográficas que transmiten propósito y emoción.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Producción mensual y on-demand</li>
              <li>• Storytelling corporativo</li>
              <li>• Contenido para performance y fidelización</li>
            </ul>
          </motion.div>

          {/* Tronx TV */}
          <motion.div
            initial={fadeUp.initial}
            whileInView={fadeUp.whileInView}
            transition={{ ...fadeUp.transition, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
          >
            <Tv className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tronx TV</h3>
            <p className="text-gray-400 mb-4">
              Plataforma editorial de contenidos originales en video. Historias,
              documentales y realities sobre liderazgo, innovación y conciencia.
            </p>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>• Reality Day y series originales</li>
              <li>• Entrevistas y comunidad creativa</li>
              <li>• Expansión LATAM ↔ APAC</li>
            </ul>
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
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Crecimiento medible
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Sistemas replicables
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-400" />
              Creatividad estratégica
            </div>
          </div>
        </motion.div>
      </section>

      {/* === CONTACTO === */}
      <section id="contacto" className="py-24 px-6 text-center">
        <motion.h2
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={fadeUp.transition}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-8"
        >
          Conectemos
        </motion.h2>
        <motion.p
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-gray-400 mb-8"
        >
          ¿Eres empresa, socio o creador interesado en construir el futuro con
          Tronx Group? Escríbenos o llámanos directamente.
        </motion.p>

        <motion.div
          initial={fadeUp.initial}
          whileInView={fadeUp.whileInView}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href="mailto:info@tronxgroup.com"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            info@tronxgroup.com <Mail className="w-4 h-4" />
          </a>

          <a
            href="tel:+56920080031"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
          >
            <Phone className="w-4 h-4" /> +56 9 2008 0031
          </a>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 text-gray-400">
          <a
            href="https://x.com/TronxGroup"
            className="hover:text-white"
            aria-label="X Tronx Group"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.tronxgroup.com"
            className="hover:text-white"
            aria-label="Sitio Tronx Group"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Tronx Group SpA. Crecer con propósito.
      </footer>
    </main>
  );
}

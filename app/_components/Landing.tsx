'use client';

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { motion } from 'framer-motion';
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
} from 'lucide-react';

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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M16 2C8.268 2 2 8.268 2 16a13.9 13.9 0 002.027 7.202L2 30l6.995-2.007A13.9 13.9 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25a11.82 11.82 0 01-6.022-1.655l-.43-.255-4.155 1.192 1.194-4.046-.281-.422A11.84 11.84 0 014.2 16C4.2 9.934 9.934 4.2 16 4.2S27.8 9.934 27.8 16 22.066 27 16 27zm6.377-8.489c-.347-.174-2.052-1.012-2.37-1.128-.317-.116-.55-.174-.782.175-.231.348-.898 1.128-1.1 1.362-.203.231-.406.26-.753.087-.347-.174-1.468-.541-2.797-1.726-1.034-.923-1.734-2.064-1.937-2.412-.203-.348-.022-.536.152-.71.157-.156.348-.406.522-.609.174-.203.231-.348.347-.579.116-.231.058-.435-.029-.609-.087-.174-.782-1.884-1.07-2.574-.283-.679-.571-.587-.782-.597l-.667-.012c-.203 0-.523.076-.797.376-.274.3-1.046 1.02-1.046 2.483s1.071 2.879 1.22 3.076c.174.231 2.099 3.2 5.089 4.487.712.307 1.267.491 1.7.63.713.227 1.362.195 1.875.118.572-.085 1.758-.718 2.007-1.41.247-.692.247-1.282.174-1.41-.072-.128-.26-.203-.606-.377z" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true" className="w-5 h-5 fill-current">
    <path d="M32.7 5.3c1.8 3.5 5 6.1 8.9 6.9v6.2c-3.3-.1-6.5-1.1-9.3-2.9v12.5c0 7.5-6.1 13.6-13.6 13.6S5.1 35.5 5.1 28s6.1-13.6 13.6-13.6c1 0 2 .1 3 .4v6.7c-.9-.3-1.9-.5-3-.5-4.1 0-7.4 3.3-7.4 7.4S14.6 36 18.7 36s7.4-3.3 7.4-7.4V5.3h6.6z" />
  </svg>
);

// ===================== ZOHO HELPERS =====================
declare global {
  interface Window {
    rccallback6988454000000768151?: () => void;
  }
}

const getZohoForm = () =>
  document.getElementById('webform6988454000000768151') as HTMLFormElement | null;

export default function Landing() {
  // === Funciones Zoho (adaptadas y tipadas) ===
  const validateEmail6988454000000768151 = useCallback(() => {
    const form = getZohoForm();
    if (!form) return true;
    const emailFld = form.querySelectorAll('[ftype=email]') as NodeListOf<HTMLInputElement>;
    for (let i = 0; i < emailFld.length; i++) {
      const emailVal = emailFld[i].value;
      if (emailVal.trim().length !== 0) {
        const atpos = emailVal.indexOf('@');
        const dotpos = emailVal.lastIndexOf('.');
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
          alert('Introduzca una dirección de correo electrónico válida.');
          emailFld[i].focus();
          return false;
        }
      }
    }
    return true;
  }, []);

  const reCaptchaAlert6988454000000768151 = useCallback(() => {
    const recap = document.getElementById('recap6988454000000768151');
    if (recap && recap.getAttribute('captcha-verified') === 'false') {
      const err = document.getElementById('recapErr6988454000000768151') as HTMLDivElement | null;
      if (err) err.style.visibility = 'visible';
      return false;
    }
    return true;
  }, []);

  useEffect(() => {
    // Expone el callback después de montar (cliente)
    window.rccallback6988454000000768151 = () => {
      const recap = document.getElementById('recap6988454000000768151');
      if (recap) recap.setAttribute('captcha-verified', 'true');
      const err = document.getElementById('recapErr6988454000000768151') as HTMLDivElement | null;
      if (err && err.style.visibility === 'visible') err.style.visibility = 'hidden';
    };
    return () => {
      // limpiar si fuera necesario
      delete window.rccallback6988454000000768151;
    };
  }, []);

  const checkMandatory6988454000000768151 = useCallback(() => {
    const form = getZohoForm();
    if (!form) return false;

    const mndFileds = ['First Name', 'Last Name', 'Email', 'LEADCF3'] as const;
    const fldLangVal = ['Nombre', 'Apellido', 'Correo electrónico', 'Mensaje'] as const;

    for (let i = 0; i < mndFileds.length; i++) {
      const fieldObj = form.elements.namedItem(mndFileds[i]) as
        | HTMLInputElement
        | HTMLTextAreaElement
        | HTMLSelectElement
        | null;

      if (fieldObj) {
        const val = 'value' in fieldObj ? (fieldObj as HTMLInputElement).value.trim() : '';
        if (val.length === 0) {
          if ('type' in fieldObj && (fieldObj as HTMLInputElement).type === 'file') {
            alert('Seleccione un archivo para cargar.');
          } else {
            alert(`${fldLangVal[i]} no puede estar vacío.`);
          }
          (fieldObj as HTMLElement).focus();
          return false;
        } else if (fieldObj.nodeName === 'SELECT') {
          const sel = fieldObj as HTMLSelectElement;
          if (sel.options[sel.selectedIndex].value === '-None-') {
            alert(`${fldLangVal[i]} no puede ser nulo.`);
            sel.focus();
            return false;
          }
        } else if ('type' in fieldObj && (fieldObj as HTMLInputElement).type === 'checkbox') {
          const chk = fieldObj as HTMLInputElement;
          if (!chk.checked) {
            alert(`Please accept ${fldLangVal[i]}`);
            chk.focus();
            return false;
          }
        }
      }
    }

    if (!validateEmail6988454000000768151()) return false;
    if (!reCaptchaAlert6988454000000768151()) return false;

    const urlparams = new URLSearchParams(window.location.search);
    if (urlparams.get('service') === 'smarturl') {
      const webform = getZohoForm();
      if (webform) {
        const smarturlfield = document.createElement('input');
        smarturlfield.type = 'hidden';
        smarturlfield.value = 'smarturl';
        smarturlfield.name = 'service';
        webform.appendChild(smarturlfield);
      }
    }

    const submitBtn = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLInputElement | null;
    if (submitBtn) submitBtn.setAttribute('disabled', 'true');

    return true;
  }, [reCaptchaAlert6988454000000768151, validateEmail6988454000000768151]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      (document as any).charset = 'UTF-8';
      if (!checkMandatory6988454000000768151()) {
        e.preventDefault();
        return false;
      }
      return true;
    },
    [checkMandatory6988454000000768151]
  );

  return (
    <main id="top" className="bg-black text-white">
      {/* reCAPTCHA v2 */}
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" async defer />

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
            <a href="#top" className="inline-flex items-center gap-2 hover:text-white transition" aria-label="Ir al inicio">
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

        <motion.div initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={{ ...fadeUp.transition, delay: 0.3 }} viewport={{ once: true }}>
          <a href="#contacto" className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
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
        <motion.div initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={{ once: true }} className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ecosistema Tronx</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Cada marca refleja una energía: estrategia, comunicación, expansión y estructura. Juntas forman un
            sistema diseñado para el crecimiento B2B moderno.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tronx Strategy */}
          <motion.div initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={{ once: true }} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <Rocket className="w-8 h-8 text-blue-400" />
              <a href="https://www.tronxstrategy.com/" target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center gap-1 text-blue-300 hover:text-white">
                Sitio <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tronx Strategy</h3>
            <p className="text-gray-400 mb-4">
              Unidad de crecimiento B2B. Estrategia, CRM, automatización y performance marketing. Operación digital
              rápida y medible.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Tronx Cloud Suite</li>
              <li>• Revenue Share Program</li>
              <li>• Growth &amp; Data Playbooks</li>
            </ul>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://www.linkedin.com/company/tronx-strategy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Tronx Strategy" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/tronx_strategy/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Tronx Strategy" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Dekaelo Media */}
          <motion.div initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={{ ...fadeUp.transition, delay: 0.1 }} viewport={{ once: true }} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <Video className="w-8 h-8 text-pink-400" />
              <a href="https://www.dekaelomedia.com/" target="_blank" rel="noopener noreferrer" className="text-sm inline-flex items-center gap-1 text-pink-300 hover:text-white">
                Sitio <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <h3 className="text-xl font-semibold mb-2">Dekaelo Media</h3>
            <p className="text-gray-400 mb-4">
              Estudio audiovisual estratégico. Videos, reels, vodcasts y piezas cinematográficas que transmiten
              propósito y emoción.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Producción mensual y on-demand</li>
              <li>• Storytelling corporativo</li>
              <li>• Contenido para performance y fidelización</li>
            </ul>
            <div className="flex items-center gap-4 text-gray-400">
              <a href="https://www.instagram.com/dekaelo_media/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Dekaelo" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/dekaelo-media/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Dekaelo" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@dekaelo_media" target="_blank" rel="noopener noreferrer" aria-label="YouTube Dekaelo" className="hover:text-white">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Tronx TV */}
          <motion.div id="tronxtv" initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={{ ...fadeUp.transition, delay: 0.2 }} viewport={{ once: true }} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <div className="flex items-center justify-between mb-4">
              <Tv className="w-8 h-8 text-green-400" />
              <span className="text-xs text-gray-400">Próximamente</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tronx TV</h3>
            <p className="text-gray-400 mb-4">
              Plataforma editorial de contenidos originales en video. Historias, documentales y realities sobre
              liderazgo, innovación y conciencia.
            </p>
            <ul className="text-sm text-gray-400 space-y-1 mb-4">
              <li>• Reality Day y series originales</li>
              <li>• Entrevistas y comunidad creativa</li>
              <li>• Expansión LATAM ↔ APAC</li>
            </ul>
            <div className="flex items-center gap-4 text-gray-400">
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
        <motion.div initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={{ once: true }} className="max-w-4xl mx-auto text-center space-y-8">
          <Lightbulb className="w-10 h-10 mx-auto text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-semibold">Estrategia con Propósito</h2>
          <p className="text-gray-400 leading-relaxed">
            Tronx Group nace de la idea de que el crecimiento no se mide solo en cifras, sino en impacto real.
            Combinamos tecnología, comunicación y conciencia para que cada proyecto crezca de forma escalable, humana y
            sostenible.
          </p>
        </motion.div>
      </section>

      {/* === CONTACTO === */}
      <section id="contacto" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={fadeUp.transition} viewport={{ once: true }} className="text-3xl md:text-4xl font-semibold mb-4 text-center">
            Conectemos
          </motion.h2>
          <motion.p initial={fadeUp.initial} whileInView={fadeUp.whileInView} transition={{ ...fadeUp.transition, delay: 0.1 }} viewport={{ once: true }} className="text-center text-gray-400 mb-10">
            ¿Eres empresa, socio o creador interesado en construir el futuro con Tronx Group? Escríbenos o envíanos un
            mensaje directo.
          </motion.p>

          {/* === FORMULARIO: Diseño Tailwind + Zoho WebToLead === */}
          <div
            id="crmWebToEntityForm"
            className="crmWebToEntityForm bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 md:p-8 shadow-lg"
            style={{ backgroundColor: 'transparent', color: 'white', maxWidth: '100%' }}
          >
            <form
              id="webform6988454000000768151"
              action="https://crm.zoho.com/crm/WebToLeadForm"
              name="WebToLeads6988454000000768151"
              method="POST"
              acceptCharset="UTF-8"
              onSubmit={handleSubmit}
            >
              {/* Hidden obligatorios (no tocar) */}
              <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="c8b16296486d2860a4b23aa15d1ac647044f9c87a9c104366cdc0555e25b788c" readOnly />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="c85ed9ecf2b74bce9120505206b6b8119337042138eac711daa5200f90bacdfdf33787bd7c21fef02621e1261dccbd4c" readOnly />
              <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" readOnly />
              <input type="text" style={{ display: 'none' }} name="returnURL" value="null" readOnly />
              {/* Honeypot */}
              <input type="text" name="aG9uZXlwb3Q" style={{ display: 'none' }} defaultValue="" />

              {/* Campos visibles con tu mismo diseño */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="First_Name" className="block text-sm text-gray-300 mb-1">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="First_Name"
                    name="First Name"
                    type="text"
                    required
                    maxLength={40}
                    autoComplete="given-name"
                    aria-required="true"
                    aria-label="First Name"
                    className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="Last_Name" className="block text-sm text-gray-300 mb-1">
                    Apellido <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="Last_Name"
                    name="Last Name"
                    type="text"
                    required
                    maxLength={80}
                    autoComplete="family-name"
                    aria-required="true"
                    aria-label="Last Name"
                    className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="Tu apellido"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="Email" className="block text-sm text-gray-300 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="Email"
                    name="Email"
                    type="email"
                    inputMode="email"
                    required
                    maxLength={100}
                    autoComplete="email"
                    ftype="email"
                    aria-required="true"
                    aria-label="Email"
                    className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
                    placeholder="tu@empresa.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="LEADCF3" className="block text-sm text-gray-300 mb-1">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="LEADCF3"
                    name="LEADCF3"
                    required
                    rows={5}
                    aria-required="true"
                    aria-label="LEADCF3"
                    className="w-full rounded-xl bg-black/40 border border-zinc-700 px-4 py-3 outline-none focus:ring-2 focus:ring-white/20 resize-y"
                    placeholder="Cuéntanos brevemente qué necesitas…"
                    style={{ fontFamily: 'Arial, sans-serif' }}
                  />
                </div>
              </div>

              {/* Campos ocultos (valores por defecto) */}
              <div className="hidden">
                <label htmlFor="LEADCF5" className="block text-sm">Marca</label>
                <select id="LEADCF5" name="LEADCF5" defaultValue="Tronx-Group" aria-label="LEADCF5" className="zcwf_col_fld_slt">
                  <option value="-None-">-None-</option>
                  <option value="Tronx-Group">Tronx-Group</option>
                  <option value="Dekaelo">Dekaelo</option>
                  <option value="Tronx-TV">Tronx-TV</option>
                  <option value="Tonx-Strategy">Tonx-Strategy</option>
                  <option value="Echevensko">Echevensko</option>
                  <option value="APCC">APCC</option>
                  <option value="HKLABA">HKLABA</option>
                </select>

                <label htmlFor="LEADCF9" className="block text-sm">Lead_Origen</label>
                <select id="LEADCF9" name="LEADCF9" defaultValue="tronxgroup.com/contacto" aria-label="LEADCF9" className="zcwf_col_fld_slt">
                  <option value="-None-">-None-</option>
                  <option value="plan.dekaelomedia.com">plan.dekaelomedia.com</option>
                  <option value="tronxgroup.com/contacto">tronxgroup.com&#x2f;contacto</option>
                  <option value="tronxstrategic.com/contacto">tronxstrategic.com&#x2f;contacto</option>
                  <option value="dekaelomedia.com/contacto">dekaelomedia.com&#x2f;contacto</option>
                  <option value="empresas.echevensko.com">empresas.echevensko.com</option>
                  <option value="asiapacific-chamber.com/contacto">asiapacific-chamber.com&#x2f;contacto</option>
                  <option value="asiapacific-chamber/join">asiapacific-chamber&#x2f;join</option>
                  <option value="hklaba.com/contacto">hklaba.com&#x2f;contacto</option>
                  <option value="asiapacific-chamber/eventos">asiapacific-chamber&#x2f;eventos</option>
                </select>
              </div>

              {/* reCAPTCHA */}
              <div className="mt-6">
                <div
                  className="g-recaptcha"
                  data-sitekey="6Lch8eArAAAAAKq0w3lMg8-Cej5Y8LUMm4rPi9Ao"
                  data-theme="dark"
                  data-callback="rccallback6988454000000768151"
                  id="recap6988454000000768151"
                  // Zoho espera este flag exacto (sin data-):
                  {...{ 'captcha-verified': 'false' }}
                />
                <div id="recapErr6988454000000768151" style={{ fontSize: 12, color: 'red', visibility: 'hidden' }}>
                  Error en validación de Captcha. Si no es un robot, inténtelo de nuevo.
                </div>
              </div>

              {/* Botones + contactos */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="submit"
                  id="formsubmit"
                  role="button"
                  className="formsubmit inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition cursor-pointer"
                  value="Enviar"
                  aria-label="Enviar"
                  title="Enviar"
                />
                <input
                  type="reset"
                  className="zcwf_button inline-flex items-center gap-2 bg-transparent border border-zinc-700 text-gray-300 px-6 py-3 rounded-full hover:bg-white/5 transition cursor-pointer"
                  role="button"
                  name="reset"
                  value="Restablecer"
                  aria-label="Restablecer"
                  title="Restablecer"
                />

                <div className="flex items-center gap-3 text-gray-400">
                  <a href="mailto:info@tronxgroup.com" className="inline-flex items-center gap-2 hover:text-white transition">
                    info@tronxgroup.com <Mail className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/56920080031" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-[#25D366] transition">
                    <WhatsAppIcon /> +56 9 2008 0031
                  </a>
                </div>
              </div>
            </form>
          </div>

          {/* Accesos rápidos */}
          <div className="flex justify-center gap-6 mt-10 text-gray-400">
            <a href="https://x.com/TronxGroup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="X Tronx Group">
              <XIcon />
            </a>
            <a href="#top" className="inline-flex items-center gap-2 hover:text-white transition" aria-label="Ir al inicio">
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
            <Image src="/tronxgrouplogo.png" alt="Tronx Group" width={28} height={28} className="rounded" />
            <span>© {new Date().getFullYear()} Tronx Group SpA. Crecer con propósito.</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="https://wa.me/56920080031" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#25D366] transition" aria-label="WhatsApp Tronx Group">
              <WhatsAppIcon />
              <span className="hidden sm:inline">+56 9 2008 0031</span>
            </a>
            <a href="https://x.com/TronxGroup" target="_blank" rel="noopener noreferrer" className="hover:text-white transition" aria-label="X (Twitter) Tronx Group">
              <XIcon />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

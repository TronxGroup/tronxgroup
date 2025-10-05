import type { Metadata } from "next";
import Landing from "./_components/Landing";

export const metadata: Metadata = {
  title: "Tronx Group — Crecimiento, Tecnología y Contenido",
  description:
    "Tronx Group es un holding creativo-tecnológico que integra estrategia, medios y conocimiento para impulsar el crecimiento empresarial con propósito.",
  alternates: { canonical: "https://www.tronxgroup.com" },
  openGraph: {
    title: "Tronx Group — Crecimiento, Tecnología y Contenido",
    description:
      "Holding creativo-tecnológico: Tronx Strategy, Dekaelo Media, Tronx TV y Echevensko.",
    url: "https://www.tronxgroup.com",
    images: ["/og-tronx.jpg"],
    type: "website",
    siteName: "Tronx Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Group — Crecimiento, Tecnología y Contenido",
    description:
      "Holding creativo-tecnológico: Tronx Strategy, Dekaelo Media, Tronx TV y Echevensko.",
    images: ["/og-tronx.jpg"],
  },
};

export default function Page() {
  return <Landing />;
}

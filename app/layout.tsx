import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import WhatsAppButton from "@/app/components/contact/WhatsAppButton";
import InitialPreloader from "@/app/components/ui/InitialPreloader";
import SmoothScroll from "@/app/components/ui/SmoothScroll";
import Cursor from "@/app/components/ui/Cursor";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", display: "swap" });
const sans = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rosca — Développeur Fullstack",
  description:
    "Portfolio de Rosca MB, développeur fullstack web & mobile : applications React, Next.js, Flutter, APIs et intégrations IA sur-mesure.",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
};

// Runs before paint so returning visitors never see a flash of the intro curtain.
const introScript = `try{if(sessionStorage.getItem("portfolio_intro_loaded")){document.documentElement.dataset.intro="seen"}}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable} ${serif.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>
        <SmoothScroll>
          <InitialPreloader />
          <Cursor />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <div className="grain" aria-hidden="true" />
        </SmoothScroll>
      </body>
    </html>
  );
}

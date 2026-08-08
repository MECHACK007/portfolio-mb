import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import WhatsAppButton from "@/app/components/contact/WhatsAppButton";

export const metadata: Metadata = {
  title: "Rosca — Développeur Fullstack",
  description: "Portfolio de développeur fullstack.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
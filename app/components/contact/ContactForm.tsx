"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const DEFAULT_MESSAGE = "Bonjour Rosca, je vous contacte depuis votre portfolio afin d'échanger sur un projet web ou mobile.";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState(DEFAULT_MESSAGE);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue lors de l'envoi.");
      }

      setStatus({
        type: "success",
        message: data.message || "Votre message a bien été envoyé ! Je vous répondrai rapidement.",
      });

      // Clear fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage(DEFAULT_MESSAGE);
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err.message || "Impossible d'envoyer le message. Veuillez réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-[#D9491F]/20 bg-white p-6 sm:p-10 shadow-xl shadow-[#D9491F]/5">
      <h3 className="text-2xl font-black text-text tracking-tight mb-2">
        Envoyez-moi un <span className="framed-accent text-[#D9491F]">message direct</span>
      </h3>
      <p className="text-sm text-muted mb-8">
        Remplissez ce formulaire et votre message sera instantanément transmis sur ma boîte mail.
      </p>

      {status.type === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-emerald-800 border border-emerald-200 text-sm"
        >
          <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Message envoyé avec succès !</p>
            <p className="mt-1 text-emerald-700">{status.message}</p>
          </div>
        </motion.div>
      )}

      {status.type === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-start gap-3 rounded-2xl bg-rose-50 p-4 text-rose-800 border border-rose-200 text-sm"
        >
          <AlertCircle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Erreur lors de l&apos;envoi</p>
            <p className="mt-1 text-rose-700">{status.message}</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-text uppercase tracking-wider mb-2">
              Nom complet <span className="text-[#D9491F]">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ex: Bangoulou Rosca"
              className="w-full rounded-xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-text transition-all focus:border-[#D9491F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D9491F]/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-text uppercase tracking-wider mb-2">
              Adresse Email <span className="text-[#D9491F]">*</span>
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ex: roscabangoulou@icloud.com"
              className="w-full rounded-xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-text transition-all focus:border-[#D9491F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D9491F]/20"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-xs font-bold text-text uppercase tracking-wider mb-2">
            Sujet / Projet
          </label>
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="ex: Demande de devis pour une application mobile"
            className="w-full rounded-xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-text transition-all focus:border-[#D9491F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D9491F]/20"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold text-text uppercase tracking-wider mb-2">
            Votre Message <span className="text-[#D9491F]">*</span>
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Décrivez brièvement votre besoin, vos objectifs et vos délais..."
            className="w-full rounded-xl border border-black/10 bg-neutral-50 px-4 py-3 text-sm text-text transition-all focus:border-[#D9491F] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D9491F]/20 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#D9491F] px-8 py-4 text-base font-bold text-white shadow-lg shadow-[#D9491F]/25 transition-all hover:bg-[#b73721] hover:shadow-xl active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
        >
          {loading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              <span>Envoi en cours...</span>
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Envoyer mon message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, LoaderCircle, Send, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import SectionLabel from "@/app/components/ui/SectionLabel";

const DEFAULT_MESSAGE = "Bonjour Rosca, je vous contacte depuis votre portfolio afin d'échanger sur un projet web ou mobile.";

const inputClass =
  "mt-2 w-full border-0 border-b border-bone/15 bg-transparent px-0 py-3 text-lg text-bone placeholder:text-smoke/50 transition-colors focus:border-ember focus:outline-none focus-visible:outline-none";

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
    } catch (err) {
      setStatus({
        type: "error",
        message: err instanceof Error ? err.message : "Impossible d'envoyer le message. Veuillez réessayer.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid gap-14 rounded-[2rem] border border-bone/10 bg-ink-2 p-6 sm:rounded-[2.5rem] sm:p-12 lg:grid-cols-12 lg:gap-16 lg:p-16">
      <div className="lg:col-span-5">
        <SectionLabel index="03">Formulaire</SectionLabel>
        <h2 className="mt-8 text-[clamp(2.4rem,4.4vw,4.2rem)] font-bold leading-[0.92] tracking-[-0.05em]">
          Envoyez-moi un{" "}
          <span className="font-serif font-normal italic tracking-[-0.02em] text-ember">message direct.</span>
        </h2>
        <p className="mt-6 max-w-sm leading-relaxed text-smoke">
          Remplissez ce formulaire et votre message sera instantanément transmis sur ma boîte mail.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10 lg:col-span-7">
        <AnimatePresence mode="wait">
          {status.type && (
            <motion.div
              key={status.type}
              role="status"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={
                status.type === "success"
                  ? "flex items-start gap-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 p-5 text-sm"
                  : "flex items-start gap-4 rounded-2xl border border-rose-400/25 bg-rose-400/10 p-5 text-sm"
              }
            >
              <span
                className={
                  status.type === "success"
                    ? "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-400 text-ink"
                    : "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-rose-400 text-ink"
                }
              >
                {status.type === "success" ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
              </span>
              <div>
                <p className="font-semibold text-bone">
                  {status.type === "success" ? "Message envoyé avec succès !" : "Erreur lors de l'envoi"}
                </p>
                <p className="mt-1 text-bone/75">{status.message}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <Field id="name" index="01" label="Nom complet" required>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ex: Bangoulou Rosca"
              className={inputClass}
            />
          </Field>

          <Field id="email" index="02" label="Adresse Email" required>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ex: roscabangoulou@icloud.com"
              className={inputClass}
            />
          </Field>
        </div>

        <Field id="subject" index="03" label="Sujet / Projet">
          <input
            id="subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="ex: Demande de devis pour une application mobile"
            className={inputClass}
          />
        </Field>

        <Field id="message" index="04" label="Votre Message" required>
          <textarea
            id="message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Décrivez brièvement votre besoin, vos objectifs et vos délais..."
            className={`${inputClass} resize-none leading-relaxed`}
          />
        </Field>

        <button
          type="submit"
          disabled={loading}
          className="group flex w-full items-center justify-between gap-6 rounded-full bg-ember py-2.5 pl-8 pr-2.5 text-lg font-semibold text-ink transition-colors duration-500 hover:bg-bone disabled:pointer-events-none disabled:opacity-60 sm:w-auto sm:min-w-[20rem]"
        >
          <span>{loading ? "Envoi en cours..." : "Envoyer mon message"}</span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover:-rotate-[20deg]">
            {loading ? <LoaderCircle className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </span>
        </button>
      </form>
    </div>
  );
}

function Field({
  id,
  index,
  label,
  required,
  children,
}: {
  id: string;
  index: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="group">
      <label
        htmlFor={id}
        className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-smoke transition-colors group-focus-within:text-bone"
      >
        <span className="text-ember">{index}</span>
        {label}
        {required && <span className="text-ember">*</span>}
      </label>
      {children}
    </div>
  );
}

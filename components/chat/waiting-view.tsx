"use client";

import { motion } from "framer-motion";

export default function WaitingView() {
  return (
    <motion.div
      key="waiting"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-[1] max-w-[420px] text-center"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="mx-auto mb-8 h-16 w-16 rounded-full border-2 border-[rgba(145,165,155,0.2)] border-t-[rgb(145,165,155)]"
      />

      <h2 className="mb-3.5 font-serif text-[30px] font-semibold text-[#E6EAE8]">
        Recherche en cours…
      </h2>

      <p className="text-[15px] font-light leading-[1.7] text-[rgba(230,234,232,0.5)]">
        Nous cherchons la personne idéale pour vous,
        <br />
        quelqu&apos;un qui partage votre sujet.
      </p>

      <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[rgba(145,165,155,0.2)] bg-[rgba(145,165,155,0.1)] px-5 py-2">
        <motion.span
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="inline-block h-[6px] w-[6px] rounded-full bg-[rgb(145,165,155)]"
        />
        <span className="text-[13px] text-[rgb(145,165,155)]">
          En attente de connexion
        </span>
      </div>
    </motion.div>
  );
}

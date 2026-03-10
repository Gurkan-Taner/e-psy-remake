"use client";

import { motion, AnimatePresence } from "framer-motion";

import { TOPICS } from "@/data/topics";

interface FormViewProps {
  mode: string;
  therapieSubject: string;
  listenerSubject: string[];
  onSetMode: (mode: string) => void;
  onSetTherapieSubject: (subject: string) => void;
  onSetListenerSubject: (updateFn: (prev: string[]) => string[]) => void;
  onJoin: () => void;
}

export default function FormView({
  mode,
  therapieSubject,
  listenerSubject,
  onSetMode,
  onSetTherapieSubject,
  onSetListenerSubject,
  onJoin,
}: FormViewProps) {
  const isTherapie = mode === "therapie";
  const isListener = mode === "listener";

  const isFormValid =
    mode !== "" &&
    (isTherapie ? therapieSubject !== "" : listenerSubject.length > 0);

  const handleTopicToggle = (topicId: string) => {
    if (isTherapie) {
      onSetTherapieSubject(topicId === therapieSubject ? "" : topicId);
    } else {
      onSetListenerSubject((prev) =>
        prev.includes(topicId)
          ? prev.filter((t) => t !== topicId)
          : [...prev, topicId],
      );
    }
  };

  const isTopicSelected = (topicId: string) =>
    isTherapie
      ? therapieSubject === topicId
      : listenerSubject.includes(topicId);

  return (
    <motion.div
      key="form"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-[1] w-full max-w-[560px]"
    >
      <div className="mb-11 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-3 font-serif text-[clamp(30px,5vw,44px)] font-semibold leading-[1.15] tracking-[-0.025em] text-[#E6EAE8]"
        >
          Votre espace
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[15px] font-light leading-[1.6] text-[rgba(230,234,232,0.5)]"
        >
          Remplissez en quelques secondes, rencontrez quelqu&apos;un en 2
          minutes.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="rounded-[28px] border border-[rgba(145,165,155,0.15)] bg-[rgba(145,165,155,0.06)] px-10 py-11 backdrop-blur-[12px]"
      >
        <div className="mb-8">
          <label className="mb-3.5 block text-[11px] uppercase tracking-[0.08em] text-[rgb(145,165,155)]">
            Je souhaite…
          </label>

          <div className="grid grid-cols-2 gap-3">
            {[
              {
                value: "therapie",
                label: "Parler",
                sublabel: "Être écouté·e",
                icon: "💭",
              },
              {
                value: "listener",
                label: "Écouter",
                sublabel: "Soutenir quelqu'un",
                icon: "🫂",
              },
            ].map((opt) => (
              <motion.button
                key={opt.value}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onSetMode(opt.value)}
                className={`cursor-pointer rounded-[16px] px-4 py-5 text-center transition
                ${
                  mode === opt.value
                    ? "border-[1.5px] border-[rgb(145,165,155)] bg-[rgba(145,165,155,0.15)]"
                    : "border border-[rgba(145,165,155,0.2)] bg-[rgba(145,165,155,0.04)]"
                }`}
              >
                <div className="mb-2 text-[26px]">{opt.icon}</div>

                <div className="mb-1 text-[15px] font-semibold text-[#E6EAE8]">
                  {opt.label}
                </div>

                <div className="text-xs text-[rgba(230,234,232,0.5)]">
                  {opt.sublabel}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {mode !== "" && (
            <motion.div
              key="topics"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 overflow-hidden"
            >
              <label className="mt-2 mb-3.5 block text-[11px] uppercase tracking-[0.08em] text-[rgb(145,165,155)]">
                {isTherapie
                  ? "Sujet dont vous souhaitez parler"
                  : "Sujets sur lesquels vous pouvez écouter"}
              </label>

              <div className="flex flex-wrap gap-2">
                {TOPICS.map((t) => {
                  const selected = isTopicSelected(t.id);

                  return (
                    <motion.button
                      key={t.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleTopicToggle(t.id)}
                      className={`cursor-pointer rounded-full px-[18px] py-[10px] text-[13px] font-medium transition
                      ${
                        selected
                          ? "border-[1.5px] border-[rgb(145,165,155)] bg-[rgba(145,165,155,0.18)] text-[rgb(145,165,155)]"
                          : "border border-[rgba(145,165,155,0.2)] bg-[rgba(145,165,155,0.05)] text-[rgba(230,234,232,0.6)]"
                      }`}
                    >
                      {t.label}
                    </motion.button>
                  );
                })}
              </div>

              {isListener && (
                <p className="mt-2.5 text-xs text-[rgba(230,234,232,0.35)]">
                  Vous pouvez sélectionner plusieurs sujets.
                </p>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={
            isFormValid
              ? { scale: 1.03, boxShadow: "0 16px 48px rgba(98,114,106,0.35)" }
              : {}
          }
          whileTap={isFormValid ? { scale: 0.97 } : {}}
          onClick={() => isFormValid && onJoin()}
          className={`w-full rounded-full py-[18px] text-[16px] font-medium tracking-[0.01em] transition
          ${
            isFormValid
              ? "cursor-pointer bg-[rgb(98,114,106)] text-[#E6EAE8]"
              : "cursor-not-allowed bg-[rgba(145,165,155,0.12)] text-[rgba(230,234,232,0.3)]"
          }`}
        >
          Trouver ma connexion →
        </motion.button>

        <p className="mt-[18px] text-center text-[11px] tracking-[0.02em] text-[rgba(230,234,232,0.3)]">
          Aucun compte requis · 100% anonyme · Gratuit
        </p>
      </motion.div>
    </motion.div>
  );
}

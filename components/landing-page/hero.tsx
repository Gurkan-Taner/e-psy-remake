"use client";

import { useRouter } from "next/navigation";

import { motion } from "framer-motion";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
            className="absolute border border-[rgb(145,165,155)] rounded-full"
            style={{ width: `${i * 400}px`, aspectRatio: "1/1" }}
          />
        ))}
      </div>
      <motion.div className="relative z-10 max-w-[800px] mx-auto pt-[120px] px-12 pb-[80px] text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-[6px] rounded-full bg-[rgba(145,165,155,0.12)] border border-[rgba(145,165,155,0.25)] text-[12px] font-medium tracking-[0.06em] uppercase text-[rgb(145,165,155)] mb-10"
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-[6px] h-[6px] rounded-full bg-[rgb(145,165,155)] inline-block"
          />
          Espace de bien-être anonyme
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="font-serif text-[clamp(44px,7vw,84px)] font-semibold leading-[1.1] tracking-[-0.03em] mb-7 text-[#E6EAE8]"
        >
          Parler.{" "}
          <span className="italic text-[rgb(145,165,155)]">Écouter.</span>
          <br />
          Aller mieux.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-[clamp(16px,2vw,20px)] leading-[1.7] text-[rgba(230,234,232,0.6)] max-w-[560px] mx-auto mb-[52px] font-light"
        >
          Connectez-vous avec une personne qui traverse ce que vous traversez ou
          qui a choisi d&apos;être là pour vous.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 20px 60px rgba(98,114,106,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              router.push("/chat");
            }}
            className="glow-btn px-[44px] py-[18px] rounded-full bg-[rgb(98,114,106)] text-[#E6EAE8] text-[16px] font-medium tracking-[0.01em] cursor-pointer"
          >
            Trouver quelqu&apos;un
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-[44px] py-[18px] rounded-full bg-transparent border border-[rgba(145,165,155,0.35)] text-[rgba(230,234,232,0.7)] text-[16px] font-normal cursor-pointer"
          >
            Comment ça marche
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex gap-10 justify-center mt-[72px] flex-wrap items-center"
        >
          {[
            { value: "100%", label: "anonyme & sécurisé" },
            { value: "24/7", label: "disponible" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="font-serif text-[32px] font-semibold text-[rgb(145,165,155)] leading-none">
                {value}
              </div>
              <div className="text-[12px] text-[rgba(230,234,232,0.45)] mt-[6px] tracking-[0.04em]">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

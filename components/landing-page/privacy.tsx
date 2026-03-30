"use client";
import { motion } from "framer-motion";

export default function Privacy() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section
      className="py-32 bg-[rgb(45,53,49)]/50 relative overflow-hidden"
      id="privacy"
    >
      <motion.div
        className="max-w-[1200px] mx-auto px-12 grid md:grid-cols-2 gap-20 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="flex flex-col gap-9">
          <motion.h2
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="font-serif text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.025em] leading-[1.15]"
          >
            Votre jardin secret <br />
            <span className="italic text-[rgb(145,165,155)]">
              reste secret.
            </span>
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                t: "Pas de compte",
                d: "Aucun e-mail, aucun mot de passe. Vous arrivez, vous parlez.",
              },
              {
                t: "Cryptage total",
                d: "Vos échanges sont éphémères et disparaissent une fois la session close.",
              },
              {
                t: "Zéro jugement",
                d: "L'anonymat permet une liberté de parole absolue.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="flex gap-6 group"
              >
                {/* La barre qui s'anime au scroll */}
                <div className="relative w-1 h-14 bg-[rgb(145,165,155)]/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
                    className="absolute inset-0 bg-[rgb(145,165,155)]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h4 className="font-medium text-[#E6EAE8] text-xl transition-colors group-hover:text-[rgb(145,165,155)]">
                    {item.t}
                  </h4>
                  <p className="text-[rgba(230,234,232,0.5)] font-light max-w-md leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative aspect-square max-w-[500px] mx-auto w-full rounded-full border border-[rgb(145,165,155)]/5 flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-[rgb(145,165,155)]/10 animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-16 rounded-full border border-[rgb(145,165,155)]/20 animate-[spin_20s_linear_infinite_reverse]" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-24 bg-[rgb(145,165,155)] rounded-full blur-[80px]"
          />

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative text-center p-12 bg-[rgb(50,59,54)] z-10 rounded-[40px] border border-[rgb(145,165,155)]/20 shadow-2xl backdrop-blur-xl"
          >
            <motion.span
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl block mb-6 drop-shadow-[0_0_20px_rgba(145,165,155,0.3)]"
            >
              🔒
            </motion.span>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[rgb(145,165,155)] font-bold">
              Privacy Protocol v1.0
            </p>
            <div className="mt-4 flex gap-1 justify-center">
              {[1, 2, 3].map((dot) => (
                <motion.div
                  key={dot}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: dot * 0.2,
                  }}
                  className="w-1 h-1 bg-[rgb(145,165,155)] rounded-full"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

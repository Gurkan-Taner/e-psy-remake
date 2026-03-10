"use client";

import { TOPICS } from "@/data/topics";
import { motion } from "framer-motion";

export default function Topics() {
  return (
    <section className="py-32 px-6 overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(145,165,155,0.03)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        className="max-w-[1000px] mx-auto text-center flex flex-col gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={{
            hidden: { y: 20, opacity: 0, scale: 0.8 },
            visible: {
              y: 0,
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
              },
            },
          }}
          className="font-serif text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.025em] leading-[1.15]"
        >
          Ici, chaque émotion a{" "}
          <span className="italic text-[rgb(145,165,155)]">sa place.</span>
        </motion.h2>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex flex-wrap justify-center gap-4 relative z-10"
        >
          {TOPICS.map((topic, i) => (
            <motion.div
              key={topic.id}
              variants={{
                hidden: { y: 20, opacity: 0, scale: 0.8 },
                visible: {
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  },
                },
              }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -12,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-[rgb(145,165,155)]/20 text-[rgb(145,165,155)] cursor-default transition-all hover:bg-[rgb(145,165,155)]/10 hover:border-[rgb(145,165,155)]/40 hover:text-[#E6EAE8] backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(145,165,155,0.15)]"
            >
              {topic.label}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

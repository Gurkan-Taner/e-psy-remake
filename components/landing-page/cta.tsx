"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";

import { motion, useInView } from "framer-motion";

export default function Cta() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const router = useRouter();

  return (
    <section className="py-[120px] px-12 text-center relative overflow-hidden">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[700px] mx-auto px-[60px] py-[80px] rounded-[32px] bg-[rgba(145,165,155,0.1)] border border-[rgba(145,165,155,0.2)] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_50%_0%,rgba(145,165,155,0.15)_0%,transparent_70%)]" />
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-semibold tracking-[-0.025em] mb-5 relative">
            Vous n&apos;êtes pas{" "}
            <span className="italic text-[rgb(145,165,155)]">seul-e</span>
          </h2>
          <p className="text-[rgba(230,234,232,0.6)] text-[17px] leading-[1.7] mb-11 relative font-light">
            Qu&apos;il s&apos;agisse de parler ou d&apos;écouter,
            <br />
            chaque connexion commence par un seul geste.
          </p>
          <motion.button
            whileHover={{
              scale: 1.04,
              boxShadow: "0 20px 60px rgba(98,114,106,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              router.push("/chat");
            }}
            className="glow-btn px-[56px] py-[20px] rounded-full bg-[rgb(98,114,106)] text-[#E6EAE8] text-[17px] font-medium cursor-pointer relative"
          >
            Commencer maintenant
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

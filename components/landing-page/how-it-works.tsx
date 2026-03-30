"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import StepCard from "@/components/step-card";

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-[120px] px-12 max-w-[1200px] mx-auto" id="faq">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="text-center mb-20">
          <span className="text-[12px] tracking-[0.1em] uppercase text-[rgb(145,165,155)] block mb-5">
            Le processus
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-semibold tracking-[-0.025em] leading-[1.15]">
            Simple comme un{" "}
            <span className="italic text-[rgb(145,165,155)]">souffle</span>
          </h2>
        </div>
      </motion.div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
        {[
          {
            number: "01",
            title: "Choisissez votre rôle",
            desc: "Avez-vous besoin de parler, ou souhaitez-vous être là pour quelqu'un ? Les deux sont précieux.",
          },
          {
            number: "02",
            title: "Sélectionnez un sujet",
            desc: "Anxiété, stress, deuil, relations... choisissez ce qui résonne avec vous en ce moment.",
          },
          {
            number: "03",
            title: "Un espace pour vous",
            desc: "Une conversation privée, bienveillante, anonyme. Aucun compte requis. Aucun jugement.",
          },
        ].map((step, i) => (
          <StepCard key={step.number} {...step} delay={i * 0.12} />
        ))}
      </div>
    </section>
  );
}

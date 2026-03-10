"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StepCard({
  number,
  title,
  desc,
  delay,
}: {
  number: string;
  title: string;
  desc: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative group"
    >
      <div className="relative rounded-2xl p-8 h-full overflow-hidden bg-[rgba(145,165,155,0.08)] border border-[rgba(145,165,155,0.2)]">
        <motion.div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[rgba(145,165,155,0.06)]" />
        <span className="block font-serif text-6xl font-bold mb-4 leading-none text-[rgba(145,165,155,0.25)]">
          {number}
        </span>
        <h3 className="text-xl font-semibold mb-3 text-[#E6EAE8] font-serif">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[rgba(230,234,232,0.6)]">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

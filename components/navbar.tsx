"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { text: "Comment ça marche", anchorId: "faq" },
  { text: "Confidentialité", anchorId: "privacy" },
];

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-[rgba(145,165,155,0.1)] bg-[rgba(50,59,54,0.7)] px-6 py-4 backdrop-blur-[20px] md:px-12 md:py-5"
      >
        <div className="flex items-center gap-[10px]">
          <div className="h-2 w-2 rounded-full bg-[rgb(145,165,155)]" />
          <span className="font-serif text-[20px] font-semibold tracking-[-0.02em]">
            E-Psy
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((navItem) => (
            <a
              key={navItem.anchorId}
              href={`#${navItem.anchorId}`}
              className="cursor-pointer text-[13px] font-normal tracking-[0.02em] text-[rgba(230,234,232,0.6)] transition-colors hover:text-[rgba(230,234,232,0.9)]"
            >
              {navItem.text}
            </a>
          ))}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/chat")}
            className="glow-btn cursor-pointer rounded-full bg-[rgb(98,114,106)] px-[22px] py-[10px] text-[13px] font-medium tracking-[0.02em] text-[#E6EAE8]"
          >
            Commencer
          </motion.button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/chat")}
            className="glow-btn cursor-pointer rounded-full bg-[rgb(98,114,106)] px-4 py-2 text-[12px] font-medium tracking-[0.02em] text-[#E6EAE8]"
          >
            Commencer
          </motion.button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-lg text-[rgba(230,234,232,0.7)]"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-[1.5px] w-5 origin-center bg-current"
            />
            <motion.span
              animate={
                menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
              className="block h-[1.5px] w-5 origin-center bg-current"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block h-[1.5px] w-5 origin-center bg-current"
            />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[61px] z-[99] flex flex-col border-b border-[rgba(145,165,155,0.1)] bg-[rgba(50,59,54,0.95)] px-6 py-4 backdrop-blur-[20px] md:hidden"
          >
            {navItems.map((navItem, i) => (
              <motion.a
                key={navItem.anchorId}
                href={`#${navItem.anchorId}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.2 }}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer border-b border-[rgba(145,165,155,0.08)] py-4 text-[14px] font-normal tracking-[0.02em] text-[rgba(230,234,232,0.7)] last:border-none"
              >
                {navItem.text}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[98] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}

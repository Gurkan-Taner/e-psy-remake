"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const router = useRouter();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between border-b border-[rgba(145,165,155,0.1)] bg-[rgba(50,59,54,0.7)] px-12 py-5 backdrop-blur-[20px]"
    >
      <div className="flex items-center gap-[10px]">
        <div className="h-2 w-2 rounded-full bg-[rgb(145,165,155)]" />{" "}
        <span className="font-serif text-[20px] font-semibold tracking-[-0.02em]">
          E-Psy
        </span>
      </div>
      <div className="flex items-center gap-8">
        {" "}
        {["Comment ça marche", "FAQ"].map((item) => (
          <span
            key={item}
            className="text-[13px] font-normal text-[rgba(230,234,232,0.6)] cursor-pointer tracking-[0.02em]"
          >
            {item}
          </span>
        ))}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            router.push("/chat");
          }}
          className="glow-btn px-[22px] py-[10px] rounded-full bg-[rgb(98,114,106)] text-[#E6EAE8] text-[13px] font-medium tracking-[0.02em] cursor-pointer"
        >
          Commencer
        </motion.button>
      </div>
    </motion.nav>
  );
}

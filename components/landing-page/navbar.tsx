"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "../ui/button";
import SidebarChatIcon from "@/public/icons/chat.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/about" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 flex w-full justify-between items-center py-4 px-4 md:px-8 transition-all duration-300 ${
        scrolled
          ? "bg-primary-600 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <Link href="/chat">
          <Image
            alt="Logo du site qui représente une messagerie"
            src={SidebarChatIcon}
            className="w-10 h-10"
          />
        </Link>
      </motion.div>

      <nav className="hidden md:flex gap-8">
        {navItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1 + 0.3,
              ease: "easeOut",
            }}
          >
            <Link href={item.href}>
              <motion.p
                className="text-white hover:text-primary-500 font-medium cursor-pointer relative"
                whileHover="hover"
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
                  initial={{ scaleX: 0 }}
                  variants={{
                    hover: {
                      scaleX: 1,
                      transition: { duration: 0.3 },
                    },
                  }}
                />
              </motion.p>
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Menu hamburger pour mobile */}
      <motion.div
        className="md:hidden flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <button className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hidden md:block"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/chat">
            <Button className="bg-primary-700 hover:bg-primary-800 border-primary-600 font-semibold px-6 py-5 rounded-lg transition-colors duration-300">
              Rejoindre
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}

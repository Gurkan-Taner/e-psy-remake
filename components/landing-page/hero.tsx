"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

import HeroImage from "@/public/images/hero-image.svg";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            className="w-full lg:w-[45%] order-2 lg:order-1"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.2 },
                },
              }}
            >
              Parce qu&apos;écouter et discuter peut{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text ">
                tout changer.
              </span>
            </motion.h1>

            <motion.h2
              className="mt-4 mb-6 text-lg md:text-xl text-gray-200"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.4 },
                },
              }}
            >
              E-Psy est une plateforme d&apos;échange sécurisé pour les
              personnes en détresse émotionnelle
            </motion.h2>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.7, delay: 0.6 },
                },
              }}
            >
              <motion.div
                className="w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/chat">
                  <Button className="bg-primary-700 border-primary-600 hover:bg-primary-800 transition-colors duration-300 font-semibold px-8 py-6 text-lg rounded-lg w-full sm:w-auto">
                    Rejoindre
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[55%] flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={HeroImage}
              alt="Image de deux personnes souriantes"
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

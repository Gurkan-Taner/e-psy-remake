"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const engagementCards = [
  {
    title: "Écoute bienveillante",
    description:
      "Nos professionnels vous offrent une écoute sans jugement dans un cadre bienveillant et sécurisé.",
    icon: "🧠",
  },
  {
    title: "Confidentialité absolue",
    description:
      "Vos données et vos échanges sont protégés et restent strictement confidentiels.",
    icon: "🔒",
  },
  {
    title: "Accessibilité pour tous",
    description:
      "Des services adaptés à vos besoins, disponibles à tout moment, où que vous soyez.",
    icon: "🌐",
  },
];

export default function Engagement() {
  return (
    <section className="bg-primary-600 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-white text-3xl font-semibold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Nos engagements
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {engagementCards.map((card, index) => (
            <motion.div
              key={index}
              className="h-full"
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-primary-300 rounded-xl shadow-lg p-8 h-full flex flex-col">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-200 flex-grow">{card.description}</p>
                <motion.div
                  className="mt-6 w-12 h-1 bg-primary-600 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

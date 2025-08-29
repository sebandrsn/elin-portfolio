"use client";

import { motion } from "motion/react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} Elin Åsedahl. Alla rättigheter förbehållna.`;
  return (
    <div className="h-48 bg-black text-white">
      <div className="flex h-full flex-col justify-between">
        <div className="mt-8 flex flex-row px-80">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            className="flex w-1/2 flex-col items-center justify-center text-4xl"
          >
            Contact
            <a
              href="mailto:elin.asedahl@hotmail.com"
              className="mt-2 text-base hover:underline"
            >
              elin.asedahl@hotmail.com
            </a>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            className="flex w-1/2 flex-col items-center justify-center text-4xl"
          >
            Social
            <a
              href="https://instagram.com/elinsfotogalleri"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-base hover:underline"
            >
              Instagram
            </a>
          </motion.div>
        </div>
        <div className="flex justify-center pb-4">{footerText}</div>
      </div>
    </div>
  );
}

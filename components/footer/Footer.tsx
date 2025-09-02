"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerText = `© ${currentYear} Elin Åsedahl. Alla rättigheter förbehållna.`;
  return (
    <div className="h-auto bg-black text-white lg:h-48">
      <div className="mx-auto flex h-full w-1/2 flex-col justify-between">
        <div className="my-9 flex flex-col gap-11 lg:mt-8 lg:flex-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            className="flex flex-col items-center justify-center text-4xl lg:w-1/2"
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
            className="flex flex-col items-center justify-center text-4xl lg:w-1/2"
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
        <div className="hidden justify-center lg:flex lg:pb-4">
          {footerText}
        </div>
      </div>
      <div className="mt-7 w-full bg-black pb-5 text-center text-white lg:hidden">
        {footerText}
      </div>
    </div>
  );
}

import { motion } from "motion/react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#fffdfb]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex w-full max-w-xl flex-col items-center gap-2 px-6 text-center"
      >
        <h1 className="text-4xl font-light tracking-wide text-gray-900 sm:text-5xl">
          LISE &amp; MIKKEL
        </h1>
        <p className="text-lg text-gray-900 mb-4">21.09.2026 - 25.09.2026</p>
        <Image src="/images/wedding-logo.png" alt="Bryllupsblomst" width={200} height={200} />
        <h2 className="text-3xl font-light text-gray-900 sm:text-3xl mt-4">BRYLLUPSFEST</h2>
      </motion.div>
    </section>
  );
}

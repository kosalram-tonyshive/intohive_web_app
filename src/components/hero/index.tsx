"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background: Figma hero render */}
      <Image
        src="/hero.jpg"
        alt="Modern house"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Subtle left-to-right veil for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

      {/* Promo card (matches your layout: title -> gold band -> subtext -> phone) */}
      <div className="absolute left-6 md:left-16 bottom-16 z-20 max-w-xl">
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 18,
            delay: 0.1,
          }}
          className="backdrop-blur-sm bg-black/30 shadow-promo border border-hive-600/50 rounded"
        >
          <div className="p-5 md:p-6">
            <p className="text-xl md:text-2xl text-white/90">Transform Your Space</p>
            <div className="mt-3 bg-hive-500 px-4 py-3 inline-block">
              <p className="text-3xl md:text-5xl font-extrabold tracking-tight">GET 20% OFF</p>
            </div>
            <p className="mt-3 text-white/85 text-lg md:text-xl">Your First Design Project!</p>
            <p className="mt-1 text-xl md:text-2xl font-semibold">
              Call Now{" "}
              <a href="tel:7897895027" className="underline">
                789 789 5027
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

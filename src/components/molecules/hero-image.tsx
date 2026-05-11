"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { HERO_IMAGE, HERO_FLOATING_BADGE } from "@/constants/hero";

function FloatingBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.7 }}
      className="absolute -bottom-4 -left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#111213]/90 px-5 py-3.5 backdrop-blur-md md:left-20 lg:left-10 xl:left-40"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-600 text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div>
        <p className="text-xs font-semibold text-white">{HERO_FLOATING_BADGE.title}</p>
        <p className="text-xs text-white/40">{HERO_FLOATING_BADGE.subtitle}</p>
      </div>
    </motion.div>
  );
}

export function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, x: 30 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      className="relative flex justify-center lg:justify-end"
    >
      <div className="absolute inset-0 rounded-3xl bg-primary-600/30 blur-[60px]" />

      <div
        className="relative overflow-hidden rounded-3xl"
        style={{
          boxShadow: "0 32px 80px #0260FE28, 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <Image
          src={HERO_IMAGE.src}
          alt={HERO_IMAGE.alt}
          width={HERO_IMAGE.width}
          height={HERO_IMAGE.height}
          className="h-auto w-full max-w-sm object-cover lg:max-w-md"
          priority
        />

        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background:
              "linear-gradient(to top, #0c0c0c 0%, transparent 100%)",
          }}
        />
      </div>

      <FloatingBadge />
    </motion.div>
  );
}

"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";
import { HeroStat } from "@/components/ui/hero-stat";
import {
  HERO_BADGE,
  HERO_TITLE,
  // HERO_SUBTITLE,
  HERO_DESCRIPTION,
  HERO_CTA,
  HERO_STATS,
} from "@/constants/hero";

function AvailabilityBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-8 flex items-center gap-2.5 rounded-full border border-foreground/10 bg-foreground/5 px-4 py-2 backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="text-xs font-medium tracking-widest text-foreground/70 uppercase">
        {HERO_BADGE.text}
      </span>
    </motion.div>
  );
}

function HeroTitle() {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      className="mb-5 font-rethink-sans text-2xl font-bold leading-[1.08] tracking-tight text-foreground lg:text-4xl xl:text-5xl"
    >
      {HERO_TITLE.prefix}
      <span className="italic text-primary-600">{HERO_TITLE.highlight}</span>
      {HERO_TITLE.suffix}
    </motion.h1>
  );
}

/* function HeroSubtitle() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      className="mb-4 text-base font-medium tracking-wide text-secondary-foreground/80 uppercase"
    >
      {HERO_SUBTITLE}
    </motion.p>
  );
}
*/

function HeroDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="mb-10 max-w-lg text-base text-center lg:text-lg lg:text-left leading-relaxed text-secondary-foreground/80"
    >
      {HERO_DESCRIPTION}
    </motion.p>
  );
}

function HeroCTAs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      className="flex flex-col lg:flex-row items-center gap-4"
    >
      <Button
        asChild size="lg"
        className="min-w-55 group flex items-center gap-2.5 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:gap-4 hover:brightness-110"
        variant="default"
      >
        <Link
          href={HERO_CTA.primary.href}
        >
          {HERO_CTA.primary.label}
          <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>

      <Button variant="outline" size="lg" className="min-w-55 cursor-pointer px-7 py-3.5 font-semibold backdrop-blur-sm transition-all duration-300">
        <Link
          href={HERO_CTA.secondary.href}
          className="flex items-center gap-2.5 transition-colors duration-300"
        >
          <HugeiconsIcon icon={Mail01Icon} size={16} strokeWidth={2} />
          {HERO_CTA.secondary.label}
        </Link>
      </Button>
    </motion.div>
  );
}

function HeroStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mt-12 flex items-center gap-8 border-t border-foreground/8 pt-8"
    >
      {HERO_STATS.map((stat) => (
        <HeroStat key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </motion.div>
  );
}

export function HeroTextContent() {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <AvailabilityBadge />
      <HeroTitle />
      {/* <HeroSubtitle /> */}
      <HeroDescription />
      <HeroCTAs />
      <HeroStats />
    </div>
  );
}

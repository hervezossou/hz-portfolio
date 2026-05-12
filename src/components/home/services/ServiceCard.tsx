"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import type { ServicePreview } from "./services.types";

interface ServiceCardProps {
  service: ServicePreview;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl border border-border bg-card p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary-600/40 hover:shadow-lg hover:shadow-primary-600/10"
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600/10">
        <HugeiconsIcon
          icon={service.icon}
          size={24}
          strokeWidth={1.5}
          className="text-primary-600"
        />
      </div>

      <span className="mb-2 text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {service.eyebrow}
      </span>

      <h3 className="mb-4 line-clamp-2 text-xl font-bold leading-tight text-foreground">
        {service.title}
      </h3>

      <ul className="mb-6 flex flex-col gap-2">
        {service.highlights.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground/80">
            <span className="mt-0.5 shrink-0 text-primary-600">✦</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto border-t dark:border-white/15 border-black/20 pt-5">
        <Link
          href={service.cta.href}
          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition-all duration-300 hover:gap-4"
        >
          {service.cta.label}
          <HugeiconsIcon
            icon={ArrowRight01Icon}
            size={16}
            strokeWidth={2}
            className="transition-transform duration-300 group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </motion.div>
  );
}

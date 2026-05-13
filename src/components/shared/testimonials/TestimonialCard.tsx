"use client";

import { motion } from "motion/react";
import { Testimonial } from "./testimonials.types";
import { cn } from "@/components/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

function renderQuoteWithHighlight(quote: string, highlight?: string): React.ReactNode {
  if (!highlight) {
    return <span className="italic">{quote}</span>;
  }

  const parts = quote.split(new RegExp(`(${highlight})`, 'gi'));
  return parts.map((part, i) => {
    if (part.toLowerCase() === highlight.toLowerCase()) {
      return (
        <span key={i} className="not-italic font-semibold text-primary">
          {part}
        </span>
      );
    }
    return <span key={i} className="italic">{part}</span>;
  });
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -20 : 20
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.6,
        delay: 0.1 + (index * 0.1)
      }}
      className={cn(
        "group relative p-8 rounded-2xl border transition-all duration-300 ease-out",
        "bg-card border-border hover:border-primary/30 hover:-translate-y-1"
      )}
    >
      {/* Guillemet décoratif */}
      <div aria-hidden="true" className="text-7xl leading-none text-primary opacity-60 mb-4">
        "
      </div>

      {/* Citation */}
      <blockquote className="text-lg leading-relaxed mb-6 text-foreground/80">
        {renderQuoteWithHighlight(testimonial.quote, testimonial.highlight)}
      </blockquote>

      {/* Séparateur */}
      <div className="border-t border-border/20 mb-6" />

      {/* Footer */}
      <footer className="flex items-center gap-2">
        <span className="font-semibold text-foreground">
          {testimonial.author}
        </span>
        <span aria-hidden="true" className="text-muted-foreground/60">
          ·
        </span>
        <span className="text-sm text-muted-foreground">
          {testimonial.company}
        </span>
      </footer>
    </motion.div>
  );
}
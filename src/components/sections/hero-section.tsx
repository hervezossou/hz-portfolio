"use client";

import { cn } from "@/lib/utils";
import { HeroBackground } from "@/components/molecules/hero-background";
import { HeroTextContent } from "@/components/molecules/hero-text-content";
import { HeroImage } from "@/components/molecules/hero-image";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative min-h-screen overflow-hidden bg-muted/30",
        className
      )}
    >
      <HeroBackground />

      <div className="relative mx-auto flex min-h-screen max-w-360 items-center px-6 pt-32 pb-20 lg:pt-52 lg:pb-32 lg:px-12">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:order-2"><HeroImage /></div>
          <div className="lg:order-1"><HeroTextContent /></div>
        </div>
      </div>
    </section>
  );
}

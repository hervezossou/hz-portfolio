"use client";

import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { TESTIMONIALS } from "./testimonials.data";
import { TestimonialCard } from "./TestimonialCard";

interface TestimonialsSectionProps {
  variant?: "primary" | "secondary";
  // "primary"   → bg-background (Home, Services)
  // "secondary" → bg-muted/50 (About)
}

export function TestimonialsSection({
  variant = "primary"
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "relative pb-24",
        variant === "primary" ? "bg-background" : "bg-muted/50"
      )}
    >
      <div className="mx-auto max-w-360 px-4 md:px-8 lg:px-12">
        <SectionHeader
          title="Témoignages"
          subtitle={
            <>
              Ce qu&apos;ils disent
              <br />
              <span className="text-primary-500">
                de notre collaboration.
              </span>
            </>
          }
        />

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
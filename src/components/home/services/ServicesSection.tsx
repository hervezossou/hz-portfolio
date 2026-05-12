"use client";

import { cn } from "@/components/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "./ServiceCard";
import { SERVICES_PREVIEW } from "./services.data";

interface ServicesSectionProps {
  variant?: "primary" | "secondary";
}

export function ServicesSection({ variant = "primary" }: ServicesSectionProps) {
  return (
    <section className={cn(
      variant === "primary" ? "bg-background" : "bg-muted/50"
    )}>
      <div className="mx-auto max-w-360 px-4 pb-12 md:px-8 md:pb-18 lg:px-12 lg:pb-24">
        <SectionHeader
          title={
            <>
              Des interfaces pensées pour
              <br />
              <span className="text-primary-500">
                faire grandir ton business.
              </span>
            </>
          }
          subtitle="Ce que je construis"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_PREVIEW.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

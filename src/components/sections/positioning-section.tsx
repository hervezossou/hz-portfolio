"use client";

import { cn } from "@/components/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { ValueGrid } from "@/components/organisms/value-grid";

interface PositioningSectionProps {
    variant?: "primary" | "secondary";
}

export function PositioningSection({
    variant = "primary",
}: PositioningSectionProps) {
    return (
        <section
            className={cn(
                "relative py-24",
                variant === "primary" ? "bg-slate-950" : "bg-slate-900"
            )}
        >
            <div className="mx-auto max-w-[1440px] px-8">
                <SectionHeader
                    title={
                        <>
                            Pas juste du code.
                            <br />
                            <span className="text-azure-blue-500">
                                De la valeur.
                            </span>
                        </>
                    }
                    subtitle="Nous nous concentrons sur ce qui apporte réellement de la valeur à vos produits numériques."
                    className="mb-16 pt-0 pb-0"
                />
                <ValueGrid />
            </div>
        </section>
    );
}

"use client";

import { cn } from "@/components/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { ProcessList } from "@/components/organisms/process-list";

interface ProcessSectionProps {
    variant?: "primary" | "secondary";
}

export function ProcessSection({ variant = "primary" }: ProcessSectionProps) {
    return (
        <section
            className={cn(
                "relative py-24 md:py-32 overflow-hidden",
                variant === "primary" ? "bg-slate-950" : "bg-slate-900"
            )}
        >
            <div className="max-w-[1440px] mx-auto px-8">
                <SectionHeader
                    title={<>Un process<br /><span className="text-azure-blue-500">sans surprise.</span></>}
                    subtitle="Comment je travaille"
                    className="mb-16 pt-0 pb-0"
                />
                <ProcessList />
            </div>
        </section>
    );
}

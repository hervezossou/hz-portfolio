import { SectionHeader } from "@/components/ui/section-header";
import { ParcoursCard } from "@/components/organisms/parcours-card";
import { Briefcase01Icon, Mortarboard01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/components/lib/utils";
import { EXPERIENCES, EDUCATIONS } from "@/constants/parcours";

interface ParcoursSectionProps {
    variant?: "primary" | "secondary";
}

export function ParcoursSection({ variant = "primary" }: ParcoursSectionProps) {
    return (
        <section
            className={cn(
                "overflow-hidden px-4 py-8 md:px-8 md:py-16",
                variant === "primary" ? "bg-slate-950" : "bg-slate-900"
            )}
        >
            <div className="mx-auto max-w-[1440px]">
                <SectionHeader
                    title={
                        <>
                            D&apos;où je viens,
                            <br />
                            <span className="text-azure-blue-500 font-light italic">
                                où je vais.
                            </span>
                        </>
                    }
                    className="mb-4 pt-0"
                />

                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
                    <ParcoursCard
                        title="Expériences"
                        items={EXPERIENCES}
                        icon={Briefcase01Icon}
                    />
                    <ParcoursCard
                        title="Formations"
                        items={EDUCATIONS}
                        icon={Mortarboard01Icon}
                    />
                </div>
            </div>
        </section>
    );
}

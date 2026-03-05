import { SectionHeader } from "@/components/ui/section-header";
import { ParcoursCard } from "@/components/organisms/parcours-card";
import { Briefcase01Icon, Mortarboard01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/components/lib/utils";

interface ParcoursSectionProps {
    variant?: "primary" | "secondary";
}

const EXPERIENCES = [
    {
        period: "Octobre 2025 - Présent",
        title: "Développeur Frontend",
        subtitle: "The Creative Mind · À distance",
    },
    {
        period: "Septembre 2024 - Décembre 2024",
        title: "Stagiaire Développeur Web",
        subtitle: "TechSeed Academy · Cotonou",
    },
    {
        period: "Mai 2023 - Novembre 2023",
        title: "Stagiaire Développeur Web",
        subtitle: "COSIT BENIN · Cotonou",
    },
];

const EDUCATIONS = [
    {
        period: "2020 - 2023",
        title: "Ingénieur en Génie Mathématique et Modélisation",
        subtitle: "UNSTIM · Abomey",
    },
    {
        period: "2018 - 2020",
        title: "Cycle Préparatoire aux Etudes d'Ingénieur",
        subtitle: "INSPEI · Abomey",
    },
    {
        period: "2015 - 2018",
        title: "Baccalauréat Scientifique",
        subtitle: "Cours de Soutien Scolaire · Cotonou",
    },
];

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

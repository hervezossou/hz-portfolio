import { SectionHeader } from "@/components/ui/section-header";
import { ParcoursCard } from "@/components/organisms/parcours-card";
import { Briefcase01Icon, Mortarboard01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/components/lib/utils";

interface ParcoursSectionProps {
    variant?: "primary" | "secondary";
}

const EXPERIENCES = [
    {
        period: "2023 - Présent",
        title: "Développeur Frontend Freelance",
        subtitle: "Indépendant · Remote",
    },
    {
        period: "2021 - 2023",
        title: "Intégrateur Web",
        subtitle: "Agence XYZ · Cotonou",
    },
    {
        period: "2019 - 2021",
        title: "Développeur Junior",
        subtitle: "Startup ABC · Bénin",
    },
];

const EDUCATIONS = [
    {
        period: "2018 - 2021",
        title: "Licence en Informatique",
        subtitle: "Université de Parakou",
    },
    {
        period: "2016 - 2018",
        title: "BTS Développement Web",
        subtitle: "Institut Supérieur XYZ",
    },
    {
        period: "2015 - 2016",
        title: "Formation UI/UX Design",
        subtitle: "OpenClassrooms · En ligne",
    },
];

export function ParcoursSection({ variant = "primary" }: ParcoursSectionProps) {
    return (
        <section
            className={cn(
                "overflow-hidden px-8 py-32",
                variant === "primary" ? "bg-slate-950" : "bg-slate-900"
            )}
        >
            <div className="mx-auto max-w-[1440px] px-8">
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

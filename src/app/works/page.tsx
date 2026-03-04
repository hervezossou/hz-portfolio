import { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectSection } from "@/components/sections/project-section";
import { ConversionSection } from "@/components/sections/conversion-section";

export const metadata: Metadata = {
    title: "Mes réalisations - Hervé Zossou",
    description: "Mes réalisations - Hervé Zossou",
};

export default function WorksPage() {
    return (
        <div className="w-full">
            <PageHeader
                badge="Mes réalisations"
                title="Ce que j'ai construit"
                description="Découvrez mes projets récents, des solutions innovantes et des expériences utilisateur exceptionnelles."
                variant="primary"
            />
            <ProjectSection variant="secondary" />
            <ConversionSection
                title="Prêt à transformer votre idée en réalité ?"
                description="Chaque projet commence par une conversation. Parlons de votre vision, de vos objectifs et de la manière dont nous pouvons collaborer pour créer quelque chose d'exceptionnel."
                variant="primary"
            />
        </div>
    );
}

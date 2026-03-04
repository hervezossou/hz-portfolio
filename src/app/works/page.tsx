import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectSection } from "@/components/sections/project-section";
import { ConversionSection } from "@/components/sections/conversion-section";

export default function WorksPage() {
    return (
        <div className="w-full">
            <PageHeader badge="Mes réalisations" title="Ce que j'ai construit" description="Découvrez mes projets récents, des solutions innovantes et des expériences utilisateur exceptionnelles." />
            <ProjectSection variant="secondary" />
            <ConversionSection variant="primary" />
        </div>
    );
}
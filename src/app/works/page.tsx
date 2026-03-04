import { PageHeader } from "@/components/layout/PageHeader";
import { ProjectSection } from "@/components/sections/project-section";

export default function WorksPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans overflow-x-hidden selection:bg-azure-blue-500/30">
            <PageHeader badge="Mes réalisations" title="Ce que j'ai construit" description="Découvrez mes projets récents, des solutions innovantes et des expériences utilisateur exceptionnelles." />
            <ProjectSection variant="secondary" />
        </div>
    );
}
import { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { AboutSection } from "@/components/sections/about-section";
import { ParcoursSection } from "@/components/sections/parcours-section";
import { ConversionSection } from "@/components/sections/conversion-section";
import { StackBentoSection } from "@/components/sections/stack-bento-section";

export const metadata: Metadata = {
    title: "À propos - Hervé Zossou",
    description: "À propos - Hervé Zossou",
};

export default function AboutPage() {
    return (
        <PageWrapper>
            <PageHeader
                badge="À PROPOS"
                title="La personne derrière le code."
                description={
                    <>
                        Je m&apos;appelle{" "}
                        <span className="text-azure-blue-500 font-medium">
                            Hervé
                        </span>
                        , et je suis passionné par la création de sites et
                        d&apos;applications web.
                    </>
                }
                variant="primary"
            />
            <AboutSection variant="secondary" />
            <StackBentoSection variant="primary" />
            <ParcoursSection variant="secondary" />
            <ConversionSection
                variant="primary"
                title="Envie de collaborer sur un projet ?"
                description="Discutons de ce que je peux apporter à votre équipe ou votre projet."
            />
        </PageWrapper>
    );
}

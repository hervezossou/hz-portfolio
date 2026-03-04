import { PageHeader } from "@/components/layout/PageHeader";
import { PageWrapper } from "@/components/layout/PageWrapper";

export default function AboutPage() {
    return (
        <PageWrapper>
            <PageHeader
                badge="À PROPOS"
                title="La personne derrière le code."
                description={
                    <>
                        Je m&apos;appelle <span className="text-azure-blue-500 font-medium">Hervé</span>, et je suis passionné par la création de sites et d&apos;applications web.
                    </>
                }
            />
        </PageWrapper>
    );
}
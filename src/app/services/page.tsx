import { Metadata } from "next";

import { PageHeader } from "@/components/layout/PageHeader";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ServicesSection } from "@/components/home/services/ServicesSection";
import { TestimonialsSection } from "@/components/shared/testimonials/testimonials-section";
import { ConversionSection } from "@/components/sections/conversion-section";

export const metadata: Metadata = {
    title: "Services - Hervé Zossou",
    description: "Services - Hervé Zossou",
};

export default function ServicesPage() {
    return (
        <PageWrapper>
            <PageHeader
                badge="SERVICES"
                title="Des interfaces qui font la différence."
                description={
                    <>
                        Chaque projet est une opportunité unique.
                        Je conçois des interfaces web sur mesure qui non seulement
                        captivent vos utilisateurs, mais qui génèrent aussi des résultats
                        concrets pour votre business.
                    </>
                }
                variant="primary"
            />

            {/* Services détaillés - à implémenter selon services-copy.md */}
            <ServicesSection variant="secondary" />

            {/* Section témoignages */}
            <TestimonialsSection variant="primary" />

            {/* FAQ - à implémenter */}
            <section className="py-24 bg-[#111213]">
                <div className="mx-auto max-w-360 px-4 md:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <p className="text-xs font-medium tracking-widest text-white/40 uppercase mb-4">
                            FAQ
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Questions fréquentes
                        </h2>
                    </div>
                    {/* FAQ content à implémenter */}
                    <div className="text-center text-white/60">
                        FAQ à implémenter selon les besoins
                    </div>
                </div>
            </section>

            {/* Conversion - à implémenter */}
            <ConversionSection
                title="Prêt à transformer votre idée en réalité ?"
                description="Chaque projet commence par une conversation. Parlons de votre vision, de vos objectifs et de la manière dont nous pouvons collaborer pour créer quelque chose d'exceptionnel."
                variant="primary"
            />
        </PageWrapper>
    );
}
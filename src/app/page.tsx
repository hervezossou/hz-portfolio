import { HeroSection } from "@/components/sections/hero-section";
import { TrustStrip } from "@/components/shared/trust-strip";
import { PositioningSection } from "@/components/sections/positioning-section";
import { ServicesSection } from "@/components/home/services/ServicesSection";
import { ProjectSection } from "@/components/sections/project-section";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/shared/testimonials/testimonials-section";
import { ConversionSection } from "@/components/sections/conversion-section";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <TrustStrip />
            <PositioningSection variant="primary" />
            <ServicesSection variant="secondary" />
            <div id="projets">
                <ProjectSection variant="primary" />
            </div>
            <TestimonialsSection variant="secondary" />
            <ProcessSection variant="primary" />
            <ConversionSection variant="secondary" />
        </main>
    );
}

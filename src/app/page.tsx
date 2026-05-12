import { HeroSection } from "@/components/sections/hero-section";
import { PositioningSection } from "@/components/sections/positioning-section";
import { ServicesSection } from "@/components/home/services/ServicesSection";
import { ProjectSection } from "@/components/sections/project-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ConversionSection } from "@/components/sections/conversion-section";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <PositioningSection variant="primary" />
            <ServicesSection variant="secondary" />
            <div id="projets">
                <ProjectSection variant="primary" />
            </div>
            <ProcessSection variant="secondary" />
            <ConversionSection variant="primary" />
        </main>
    );
}

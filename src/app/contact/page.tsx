import { ContactSection } from "@/components/sections/contact-section";
import { PageHeader } from "@/components/layout/PageHeader";

export default function ContactPage() {
    return (
        <main className="min-h-screen text-white selection:bg-azure-blue-600 selection:text-white">
            <PageHeader
                badge="CONTACT"
                title="Travaillons ensemble"
                description="Une idée ou un projet en tête ? Décrivez-moi votre vision, je vous réponds sous 24h."
            />
            <ContactSection />
        </main>
    );
}
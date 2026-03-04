import { Metadata } from "next";

import { ContactSection } from "@/components/sections/contact-section";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
    title: "Contactez-moi - Hervé Zossou",
    description: "Contactez-moi - Hervé Zossou",
};

export default function ContactPage() {
    return (
        <div className="w-full">
            <PageHeader
                variant="secondary"
                badge="CONTACT"
                title="Travaillons ensemble"
                description="Une idée ou un projet en tête ? Décrivez-moi votre vision, je vous réponds sous 24h."
            />
            <ContactSection variant="primary" />
        </div>
    );
}

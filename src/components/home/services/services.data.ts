import {
    WebDesign01Icon,
    Briefcase01Icon,
    WebProgrammingIcon,
} from "@hugeicons/core-free-icons";
import type { ServicePreview } from "./services.types";

export const SERVICES_PREVIEW: ServicePreview[] = [
    {
        id: 1,
        eyebrow: "Pour les entrepreneurs solo & cr\u00E9ateurs",
        title: "Une page. Un message. Des clients.",
        highlights: [
            "Design sur mesure, aucun template",
            "Responsive mobile & desktop",
            "SEO de base (balises, meta, performance)",
        ],
        cta: {
            label: "D\u00E9marrer mon projet",
            href: "/services#landing-page",
        },
        icon: WebDesign01Icon,
    },
    {
        id: 2,
        eyebrow: "Pour les PME & structures \u00E9tablies",
        title: "Ton entreprise m\u00E9rite une pr\u00E9sence \u00E0 sa hauteur.",
        highlights: [
            "Jusqu\u2019\u00E0 5 pages sur mesure",
            "Design coh\u00E9rent avec ton identit\u00E9 visuelle",
            "SEO technique complet",
        ],
        cta: {
            label: "Demander un devis",
            href: "/services#site-vitrine",
        },
        icon: Briefcase01Icon,
    },
    {
        id: 3,
        eyebrow: "Pour les startups & projets tech",
        title: "De l\u2019id\u00E9e \u00E0 l\u2019interface, sans compromis.",
        highlights: [
            "Audit & cadrage du projet",
            "Design system & composants r\u00E9utilisables",
            "Int\u00E9gration API & donn\u00E9es dynamiques",
        ],
        cta: {
            label: "Discutons de ton projet",
            href: "/services#app-web",
        },
        icon: WebProgrammingIcon,
    },
];

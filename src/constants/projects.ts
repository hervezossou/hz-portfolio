import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "Système de Design",
        category: "UI/UX",
        year: "2025",
        description:
            "Un système de composants modulaires pour applications web à grande échelle. Chaque élément pensé pour la cohérence, la scalabilité et la beauté.",
        tag: "Featured",
        accent: "#2E9DF7",
        bgColor: "rgba(46,157,247,0.10)",
        shape: "circle",
        showCode: true,
    },
    {
        id: 2,
        title: "Interface Analytique",
        category: "Dashboard",
        year: "2024",
        description:
            "Visualisation de données complexes avec une approche minimaliste. Transformer la complexité en clarté, chiffre après chiffre.",
        tag: "Design",
        accent: "#64A6C4",
        bgColor: "rgba(100,166,196,0.10)",
        shape: "grid",
        showCode: false,
    },
    {
        id: 3,
        title: "Application Mobile",
        category: "iOS / Android",
        year: "2024",
        description:
            "Expérience utilisateur fluide pour une app de productivité personnelle. Conçue pour disparaître et laisser l'utilisateur au centre.",
        tag: "Mobile",
        accent: "#38BDF8",
        bgColor: "rgba(56,189,248,0.08)",
        shape: "lines",
        showCode: true,
    },
    {
        id: 4,
        title: "Identité Visuelle",
        category: "Branding",
        year: "2023",
        description:
            "Refonte complète d'une marque tech avec un positionnement premium. Du logo au système de communication, une cohérence totale.",
        tag: "Brand",
        accent: "#7DD3FC",
        bgColor: "rgba(125,211,252,0.08)",
        shape: "cross",
        showCode: false,
    },
];

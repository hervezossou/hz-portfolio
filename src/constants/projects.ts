import { Project } from "@/types/project";

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "Site Corporate Kemaco Sarl",
        category: "Site Corporate",
        year: "2025",
        description:
            "Conception et déploiement du site corporate de bout en bout. Interface responsive sous Next.js, gestion du calendrier projet et des attentes client.",
        tag: "Client freelance",
        accent: "#0078ff",
        bgColor: "#0c1220",
        shape: "grid",
        showCode: false,
        liveUrl: "https://www.kemaco.pro",
    },
    {
        id: 2,
        title: "Dashboard Analytique",
        category: "Application Web",
        year: "2024",
        description:
            "Tableau de bord de visualisation de données en temps réel avec des graphiques interactifs. Construit avec Next.js, Recharts et une API REST.",
        tag: "Projet Personnel",
        accent: "#38BDF8",
        bgColor: "#080f1a",
        shape: "lines",
        showCode: true,
        githubUrl: "https://github.com/hervezossou/analytics-dashboard",
    },
    {
        id: 3,
        title: "UI Kit Open Source",
        category: "Design Système",
        year: "2024",
        description:
            "Bibliothèque de composants React réutilisables basée sur Radix UI et Tailwind CSS. Documentée avec Storybook et publiée sur npm.",
        tag: "Open Source",
        accent: "#a78bfa",
        bgColor: "#0d0b18",
        shape: "circle",
        showCode: true,
        githubUrl: "https://github.com/hervezossou/ui-kit",
    },
    {
        id: 4,
        title: "App de Gestion de Tâches",
        category: "Application Mobile",
        year: "2023",
        description:
            "Application de productivité cross-platform avec synchronisation en temps réel, notifications push et mode hors-ligne. Développée avec React Native et Supabase.",
        tag: "Mobile",
        accent: "#34d399",
        bgColor: "#081310",
        shape: "grid",
        showCode: true,
        githubUrl: "https://github.com/hervezossou/task-manage",
    },
];

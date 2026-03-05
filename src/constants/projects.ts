import { Project } from "@/types/project";

export const PROJECTS_DATA: Project[] = [
    {
        id: 1,
        title: "Site vitrine Kemaco Sarl",
        category: "Site Corporate",
        year: "2025",
        description:
            "Site vitrine livré de A à Z pour une entreprise locale de la maquette au déploiement. Interface responsive sous Next.js, pilotage du calendrier et des attentes client en autonomie totale.",
        tag: "Client freelance",
        accent: "#0078ff",
        bgColor: "#0c1220",
        shape: "grid",
        showCode: false,
        liveUrl: "https://www.kemaco.pro",
    },
    {
        id: 2,
        title: "Ballamas Shop",
        category: "Site E-commerce",
        year: "2025",
        description:
            "Boutique e-commerce complète avec catalogue produits, gestion des commandes et tunnel d'achat optimisé. Construit sous Next.js avec une attention particulière à la fluidité du parcours utilisateur.",
        tag: "Projet Personnel",
        accent: "#38BDF8",
        bgColor: "#080f1a",
        shape: "lines",
        showCode: true,
        liveUrl: "https://ballamas-shop-ten.vercel.app",
        githubUrl: "https://github.com/hervezossou/ballamas-ecom",
    },
    {
        id: 4,
        title: "Positivus Agency",
        category: "Site Web Vitrine",
        year: "2025",
        description:
            "Intégration pixel-perfect d'un site vitrine pour une agence de marketing digital. Mise en page moderne, sections animées et expérience de navigation soignée de la hero à la conversion.",
        tag: "Projet Personnel",
        accent: "#34d399",
        bgColor: "#081310",
        shape: "grid",
        showCode: true,
        githubUrl: "https://github.com/hervezossou/positivus-site",
        liveUrl: "https://positivus-agency-rouge.vercel.app",
    },
    {
        id: 3,
        title: "Doctor Matthew",
        category: "Landing Page",
        year: "2025",
        description:
            "Landing page médicale pensée pour convertir, présentation du praticien, services clairs et appel à l'action direct. Interface responsive déployée sous Next.js, conçue pour inspirer confiance dès le premier scroll.",
        tag: "Projet Personnel",
        accent: "#a78bfa",
        bgColor: "#0d0b18",
        shape: "circle",
        showCode: true,
        githubUrl: "https://github.com/hervezossou/doctor-matthew",
        liveUrl: "https://doctor-matthew.vercel.app",
    },
];

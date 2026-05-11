export const HERO_BADGE = {
    text: "Développeur Frontend \u00B7 Travail à distance",
} as const;

export const HERO_TITLE = {
    prefix: "Je construis des ",
    highlight: "interfaces",
    suffix: " qui font avancer ton business.",
} as const;

export const HERO_SUBTITLE =
    "Front-End Engineer\u00A0\u00A0\u00B7\u00A0\u00A0Exp\u00E9rience utilisateur claire\u00A0\u00A0\u00B7\u00A0\u00A0Valeur business r\u00E9elle";

export const HERO_DESCRIPTION =
    "De la maquette au d\u00E9ploiement, je con\u00E7ois des produits digitaux o\u00F9 chaque d\u00E9tail compte pour tes utilisateurs comme pour tes r\u00E9sultats.";

export const HERO_CTA = {
    primary: {
        href: "/services",
        label: "Voir mes services",
    },
    secondary: {
        href: "mailto:hervezossou@outlook.com",
        label: "Me contacter",
    },
} as const;

export const HERO_STATS = [
    { value: "4+", label: "Projets livr\u00E9s" },
    { value: "98", label: "Score Lighthouse" },
    { value: "3+", label: "Ans d'exp\u00E9rience" },
] as const;

export const HERO_IMAGE = {
    src: "/images/about-picture.jpg",
    alt: "Herv\u00E9 Zossou \u2014 D\u00E9veloppeur Frontend",
    width: 480,
    height: 520,
} as const;

export const HERO_FLOATING_BADGE = {
    title: "Travail \u00E0 distance",
    subtitle: "B\u00E9nin \u00B7 Monde entier",
} as const;

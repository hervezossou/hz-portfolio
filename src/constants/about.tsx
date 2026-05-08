const DESCRIPTION_PARAGRAPHS = [
    {
        id: "philosophy",
        content: (
            <>
                Je ne me contente pas de faire fonctionner les choses, je les fais
                fonctionner <span className="text-primary-500">bien</span>. Depuis
                plusieurs années, je conçois des interfaces web qui allient
                esthétique, performance et accessibilité.
            </>
        ),
    },
    {
        id: "differentiator",
        content: (
            <>
                Ce qui me différencie ? Je pense{" "}
                <span className="text-primary-500">produit</span> autant que code. Vos
                utilisateurs, votre conversion, votre marque, j&apos;y pense avant
                d&apos;écrire la première ligne.
            </>
        ),
    },
];

export const ABOUT_DATA = {
    title: (
        <>
            Je suis Hervé,{" "}
            <em className="text-primary-500 not-italic">développeur frontend</em>{" "}
            passionné par les interfaces
            qui ont du sens.
        </>
    ),
    description: DESCRIPTION_PARAGRAPHS,
    stats: [
        { value: "4+", label: "Projets livrés" },
        { value: "98", label: "Score Lighthouse" },
        { value: "3+", label: "Ans d'expérience" },
    ],
    image: {
        src: "/images/about-picture.jpg",
        alt: "Hervé Zossou",
    },
};

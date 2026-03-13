export const ABOUT_DATA = {
    title: (
        <>
            Je suis Hervé,{" "}
            <em className="text-primary-500 not-italic">développeur frontend</em>{" "}
            passionné par les interfaces
            qui ont du sens.
        </>
    ),
    description: [
        <>
            Je ne me contente pas de faire fonctionner les choses, je les fais
            fonctionner <span className="text-primary-500">bien</span>. Depuis
            plusieurs années, je conçois des interfaces web qui allient
            esthétique, performance et accessibilité.
        </>,
        <>
            Ce qui me différencie ? Je pense{" "}
            <span className="text-primary-500">produit</span> autant que code. Vos
            utilisateurs, votre conversion, votre marque, j&apos;y pense avant
            d&apos;écrire la première ligne.
        </>,
    ],
    stats: [
        { value: "4+", label: "Projets livrés" },
        { value: "98", label: "Score Lighthouse" },
        { value: "3+", label: "Ans d'expérience" },
    ],
    image: {
        src: "/images/Profile_512x512.png",
        alt: "Hervé Zossou",
    },
};

import { AboutCard } from "@/components/organisms/about-card";
import { cn } from "@/components/lib/utils";

const ABOUT_DATA = {
    title: (
        <>
            Je suis Hervé,
            <br />
            <em className="text-azure-blue-500 not-italic">développeur frontend</em>
            <br />
            passionné par les interfaces
            <br />
            qui ont du sens.
        </>
    ),
    description: [
        <>
            Je ne me contente pas de faire fonctionner les choses, je les fais
            fonctionner <span className="text-white/70">bien</span>. Depuis
            plusieurs années, je conçois des interfaces web qui allient
            esthétique, performance et accessibilité.
        </>,
        <>
            Ce qui me différencie ? Je pense{" "}
            <span className="text-white/70">produit</span> autant que code. Vos
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

interface AboutSectionProps {
    className?: string;
    variant?: "primary" | "secondary";
}

export function AboutSection({ className, variant = "primary" }: AboutSectionProps) {
    return (
        <section
            className={cn(
                "overflow-hidden px-8 py-24",
                variant === "primary" ? "bg-slate-950" : "bg-slate-900",
                className
            )}
        >
            <div className="mx-auto max-w-[1440px] px-8">
                <AboutCard {...ABOUT_DATA} />
            </div>
        </section>
    );
}

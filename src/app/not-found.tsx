import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    TypographyH1,
    TypographyBody,
    TypographyLabel,
} from "@/components/ui/typography";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ConversionSection } from "@/components/sections/conversion-section";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    ArrowRight01Icon,
    Home01Icon,
    LinkSquare01Icon,
} from "@hugeicons/core-free-icons";

export default function NotFound() {
    return (
        <PageWrapper className="bg-slate-900">
            {/* Hero 404 */}
            <section className="relative flex min-h-[70vh] flex-1 flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20">
                {/* Large Background Number */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center font-sans text-[clamp(180px,28vw,440px)] leading-none font-bold tracking-tighter text-slate-200/15 select-none">
                    404
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-2xl px-4 text-center">
                    <div className="border-azure-blue-400/30 bg-azure-blue-400/10 mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md">
                        <span className="bg-azure-blue-400 h-2 w-2 animate-pulse rounded-full shadow-[0_0_8px_rgba(46,157,247,0.6)]" />
                        <TypographyLabel className="text-azure-blue-400 text-[10px] font-medium tracking-widest uppercase">
                            Erreur 404
                        </TypographyLabel>
                    </div>

                    <TypographyH1 className="mb-4 text-white">
                        404{" "}
                        <span className="font-light text-slate-300 italic">
                            Oups.
                        </span>
                    </TypographyH1>

                    <TypographyBody className="mx-auto mb-12 max-w-lg text-slate-200">
                        Il semble que vous ayez suivi un lien brisé ou tapé une
                        URL incorrecte. Ne vous inquiétez pas, l&apos;accueil
                        est à un clic.
                    </TypographyBody>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/">
                            <Button className="bg-azure-blue-600 hover:bg-azure-blue-500 shadow-azure-blue-500/20 group h-auto cursor-pointer rounded-2xl px-10 py-6 text-sm font-medium text-white shadow-lg transition-all">
                                <HugeiconsIcon
                                    icon={Home01Icon}
                                    size={20}
                                    strokeWidth={2}
                                />
                                Retour à l&apos;accueil
                                <HugeiconsIcon
                                    icon={ArrowRight01Icon}
                                    size={20}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </Button>
                        </Link>
                        <Link href="/works">
                            <Button
                                variant="outline"
                                className="hover:text-azure-blue-500 hover:border-azure-blue-500 h-auto cursor-pointer rounded-2xl border-slate-700/50 px-10 py-6 text-sm font-normal text-slate-300 transition-all"
                            >
                                <HugeiconsIcon
                                    icon={LinkSquare01Icon}
                                    size={20}
                                />
                                Voir mes projets
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Conversion Section */}
            <ConversionSection
                title="Prêt à transformer votre idée en réalité ?"
                description="Chaque projet commence par une conversation. Parlons de votre vision, de vos objectifs et de la manière dont nous pouvons collaborer pour créer quelque chose d'exceptionnel."
                variant="primary"
            />
        </PageWrapper>
    );
}

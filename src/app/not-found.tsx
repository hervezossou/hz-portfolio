import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyBody, TypographyLabel } from "@/components/ui/typography";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ConversionSection } from "@/components/sections/conversion-section";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Home01Icon, LinkSquare01Icon } from "@hugeicons/core-free-icons";

export default function NotFound() {
    return (
        <PageWrapper className="bg-slate-950">
            {/* Hero 404 */}
            <section className="relative flex-1 flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden min-h-[70vh]">
                {/* Large Background Number */}
                <div className="absolute inset-0 flex items-center justify-center font-sans font-bold text-[clamp(180px,28vw,440px)] text-white/3 select-none pointer-events-none leading-none tracking-tighter">
                    404
                </div>

                {/* Content */}
                <div className="relative z-10 text-center max-w-2xl px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-azure-blue-400/30 bg-azure-blue-400/10 backdrop-blur-md mb-8">
                        <span className="w-2 h-2 rounded-full bg-azure-blue-400 shadow-[0_0_8px_rgba(46,157,247,0.6)] animate-pulse" />
                        <TypographyLabel className="text-azure-blue-400 tracking-widest font-medium uppercase text-[10px]">
                            Erreur 404
                        </TypographyLabel>
                    </div>

                    <TypographyH1 className="text-slate-50 mb-6 leading-[1.1]">
                        Cette page n&apos;existe pas,<br />
                        <span className="text-slate-500 italic font-light">ou plus.</span>
                    </TypographyH1>

                    <TypographyBody className="text-slate-400 text-lg max-w-lg mx-auto mb-12 font-light leading-relaxed">
                        Il semble que vous ayez suivi un lien brisé ou tapé une URL incorrecte.
                        Ne vous inquiétez pas, l&apos;accueil est à un clic.
                    </TypographyBody>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <Button className="bg-azure-blue-600 hover:bg-azure-blue-500 text-white rounded-2xl px-10 py-6 h-auto text-sm font-medium transition-all shadow-lg shadow-azure-blue-500/20 group cursor-pointer">
                                <HugeiconsIcon icon={Home01Icon} size={20} strokeWidth={2} />
                                Retour à l&apos;accueil
                                <HugeiconsIcon icon={ArrowRight01Icon} size={20} className="transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                        <Link href="/works">
                            <Button variant="outline" className="rounded-2xl px-10 py-6 h-auto text-sm font-normal border-slate-700/50 text-slate-400 hover:text-azure-blue-500 hover:border-azure-blue-500 transition-all cursor-pointer">
                                <HugeiconsIcon icon={LinkSquare01Icon} size={20} />
                                Voir mes projets
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Conversion Section */}
            <ConversionSection variant="secondary" />
        </PageWrapper>
    );
}

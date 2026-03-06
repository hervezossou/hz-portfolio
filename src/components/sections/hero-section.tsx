"use client";

import { cn } from "@/components/lib/utils";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyBody, TypographyCaption } from "@/components/ui/typography";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

interface HeroSectionProps {
    variant?: "primary" | "secondary";
}

export const HeroSection = ({ variant = "primary" }: HeroSectionProps) => {
    return (
        <section
            className={cn(
                "selection:bg-azure-blue-500/30 relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden",
                variant === "primary" ? "bg-slate-950" : "bg-slate-900"
            )}
        >
            {/* Background Accent Gradients */}
            <div className="bg-azure-blue-500/5 pointer-events-none absolute top-[-10%] left-[-10%] h-[50%] w-[50%] animate-pulse rounded-full blur-[120px]" />
            <div className="bg-azure-blue-600/5 pointer-events-none absolute right-[-10%] bottom-[-10%] h-[50%] w-[50%] animate-pulse rounded-full blur-[120px]" />

            <div className="relative z-10 container mx-auto flex flex-col items-center px-6 text-center">
                {/* Floating Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="my-8 flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="bg-azure-blue-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                        <span className="bg-azure-blue-500 relative inline-flex h-2 w-2 rounded-full"></span>
                    </span>
                    <TypographyCaption className="text-xs font-medium tracking-wider text-slate-200 uppercase">
                        ✦ Disponible pour missions freelance · Ouvert aux
                        opportunités en CDI
                    </TypographyCaption>
                </motion.div>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl"
                >
                    <TypographyH1 className="mb-6 text-[clamp(40px,7vw,80px)] leading-[1.1] font-bold tracking-tight text-white">
                        Développeur Frontend <br />
                        <span className="text-2xl leading-normal tracking-tight md:text-4xl font-rethink-sans text-azure-blue-400 font-normal italic">
                            Je transforme vos idées en interfaces qui convertissent.
                        </span>
                    </TypographyH1>

                    <TypographyBody className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-light text-slate-200 md:text-xl lg:text-2xl">
                        Je conçois des produits digitaux où chaque détail compte,
                        de la première maquette au déploiement en production.
                    </TypographyBody>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full mx-auto flex flex-col items-center justify-center gap-4 md:flex-row"
                >
                    <Button
                        asChild
                        variant="default"
                        size="lg"
                        aria-label="Voir les projets récents sur cette page"
                        className="w-full md:w-xs shadow-azure-blue-500/20 cursor-pointer gap-3 justify-center"
                    >
                        <Link href="#projets" scroll={true}>
                            <span>Voir mes récents projets</span>
                            <HugeiconsIcon
                                icon={ArrowDown01Icon}
                                size={24}
                                strokeWidth={2}
                            />
                        </Link>
                    </Button>

                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="w-full md:w-xs text-slate-300"
                    >
                        <Link href="mailto:hervezossou@outlook.com">
                            <HugeiconsIcon
                                icon={Mail01Icon}
                                size={24}
                                strokeWidth={2}
                            />
                            <span>Me contacter</span>
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
};

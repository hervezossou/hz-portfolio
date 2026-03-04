"use client";

import { cn } from "@/components/lib/utils";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyBody } from "@/components/ui/typography";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

interface HeroSectionProps {
    variant?: "primary" | "secondary";
}

export const HeroSection = ({ variant = "primary" }: HeroSectionProps) => {
    return (
        <section className={cn(
            "relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden selection:bg-azure-blue-500/30",
            variant === "primary" ? "bg-slate-950" : "bg-slate-900"
        )}>
            {/* Background Accent Gradients */}
            <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] animate-pulse rounded-full bg-azure-blue-500/5 blur-[120px] pointer-events-none" />
            <div className="absolute right-[-10%] bottom-[-10%] h-[50%] w-[50%] animate-pulse rounded-full bg-azure-blue-600/5 blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-6 flex flex-col items-center text-center">
                {/* Floating Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure-blue-400 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-azure-blue-500"></span>
                    </span>
                    <p className="text-[11px] font-medium tracking-wider uppercase text-slate-400">
                        ✦ Disponible pour missions freelance · Ouvert aux opportunités CDI
                    </p>
                </motion.div>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl"
                >
                    <TypographyH1 className="mb-6 text-[clamp(40px,7vw,80px)] font-bold leading-[1.1] tracking-tight text-white">
                        Ingénieur Frontend <br />
                        <span className="font-rethink-sans font-normal italic text-azure-blue-400/80">
                            Expert React & Next.js
                        </span>
                    </TypographyH1>

                    <TypographyBody className="mx-auto mb-12 max-w-2xl text-lg md:text-xl lg:text-2xl font-light text-slate-400 leading-relaxed">
                        Je conçois et développe des produits digitaux <span className="text-white font-normal">performants</span>,
                        <span className="text-white font-normal"> scalables</span> et
                        centrés sur <span className="text-white font-normal">l&apos;expérience utilisateur</span>.
                    </TypographyBody>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link href="#projets" scroll={true}>
                        <Button
                            className="px-10 py-7 rounded-2xl text-base font-medium gap-3 bg-azure-blue-600 hover:bg-azure-blue-500 text-white transition-all shadow-lg shadow-azure-blue-500/20 cursor-pointer"
                        >
                            <span>Voir mes projets</span>
                            <HugeiconsIcon icon={ArrowRight01Icon} size={20} strokeWidth={2} />
                        </Button>
                    </Link>

                    <Link href="mailto:hervezossou@outlook.com">
                        <Button
                            className="px-10 py-7 rounded-2xl text-base font-medium gap-3 bg-white hover:bg-slate-100 text-slate-950 border-none transition-all shadow-lg cursor-pointer"
                        >
                            <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={2} />
                            <span>Me contacter</span>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

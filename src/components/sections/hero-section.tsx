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
                    className="mb-8 flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/50 px-4 py-2 backdrop-blur-md"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="bg-azure-blue-400 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                        <span className="bg-azure-blue-500 relative inline-flex h-2 w-2 rounded-full"></span>
                    </span>
                    <p className="text-[11px] font-medium tracking-wider text-slate-400 uppercase">
                        ✦ Disponible pour missions freelance · Ouvert aux
                        opportunités CDI
                    </p>
                </motion.div>

                {/* Hero Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl"
                >
                    <TypographyH1 className="mb-6 text-[clamp(40px,7vw,80px)] leading-[1.1] font-bold tracking-tight text-white">
                        Ingénieur Frontend <br />
                        <span className="font-rethink-sans text-azure-blue-400/80 font-normal italic">
                            Expert React & Next.js
                        </span>
                    </TypographyH1>

                    <TypographyBody className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-light text-slate-400 md:text-xl lg:text-2xl">
                        Je conçois et développe des produits digitaux{" "}
                        <span className="font-normal text-white">
                            performants
                        </span>
                        ,
                        <span className="font-normal text-white">
                            {" "}
                            scalables
                        </span>{" "}
                        et centrés sur{" "}
                        <span className="font-normal text-white">
                            l&apos;expérience utilisateur
                        </span>
                        .
                    </TypographyBody>
                </motion.div>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center gap-4 sm:flex-row"
                >
                    <Link href="#projets" scroll={true}>
                        <Button className="bg-azure-blue-600 hover:bg-azure-blue-500 shadow-azure-blue-500/20 cursor-pointer gap-3 rounded-2xl px-10 py-7 text-base font-medium text-white shadow-lg transition-all">
                            <span>Voir mes projets</span>
                            <HugeiconsIcon
                                icon={ArrowRight01Icon}
                                size={20}
                                strokeWidth={2}
                            />
                        </Button>
                    </Link>

                    <Link href="mailto:hervezossou@outlook.com">
                        <Button className="cursor-pointer gap-3 rounded-2xl border-none bg-white px-10 py-7 text-base font-medium text-slate-950 shadow-lg transition-all hover:bg-slate-100">
                            <HugeiconsIcon
                                icon={Mail01Icon}
                                size={20}
                                strokeWidth={2}
                            />
                            <span>Me contacter</span>
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

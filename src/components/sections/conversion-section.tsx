"use client";

import { cn } from "@/components/lib/utils";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyBody } from "@/components/ui/typography";
import { AvailabilityStatus } from "@/components/ui/availability-status";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

interface ConversionSectionProps {
    variant?: "primary" | "secondary";
}

export function ConversionSection({ variant = "primary" }: ConversionSectionProps) {
    return (
        <section
            className={cn(
                "relative py-24 md:py-32 overflow-hidden",
                variant === "primary" ? "bg-slate-950" : "bg-slate-900"
            )}
        >
            <div className="max-w-[1440px] mx-auto px-8 flex justify-center">
                {/* Card Wrapper with premium border gradient */}
                <div className="relative w-full max-w-6xl group">
                    {/* Subtle glow behind the card */}
                    <div className="absolute -inset-1 bg-linear-to-r from-azure-blue-500/10 via-slate-500/5 to-azure-blue-500/10 rounded-[32px] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />

                    <div className="relative bg-slate-900/60 backdrop-blur-3xl border border-slate-700/30 rounded-[32px] overflow-hidden">
                        {/* Grain Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                        <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 flex flex-col items-center text-center">
                            <span className="inline-block text-[10px] font-medium tracking-[0.2em] uppercase text-azure-blue-400 mb-8 px-4 py-1.5 rounded-full border border-azure-blue-500/20 bg-azure-blue-500/5">
                                Travaillons ensemble
                            </span>

                            <TypographyH2 className="text-white text-[clamp(32px,5vw,56px)] leading-[1.1] mb-6 font-bold tracking-tight">
                                Vous avez un projet ?<br />
                                <span className="text-slate-500 italic font-rethink-sans font-normal border-b border-slate-800">Parlons-en.</span>
                            </TypographyH2>

                            <TypographyBody className="text-slate-400 text-lg md:text-xl max-w-3xl mb-12 font-light leading-relaxed">
                                Startup en quête de son premier MVP, agence en surcharge,
                                ou recruteur à la recherche d&apos;un profil solide; je suis votre interlocuteur.
                            </TypographyBody>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <Link href="/works">
                                    <Button
                                        variant="outline"
                                        className="px-10 py-7 rounded-2xl text-base font-medium gap-3 border-slate-700/50 text-slate-300 hover:text-azure-blue-500 hover:border-azure-blue-500 transition-all cursor-pointer min-w-[220px]"
                                    >
                                        <span>Voir mes projets</span>
                                        <HugeiconsIcon icon={ArrowRight01Icon} size={20} strokeWidth={2} />
                                    </Button>
                                </Link>

                                <Link href="/contact">
                                    <Button
                                        className="px-10 py-7 rounded-2xl text-base font-medium gap-3 bg-white text-slate-950 hover:bg-slate-100 transition-all shadow-xl shadow-white/5 cursor-pointer min-w-[220px]"
                                    >
                                        <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={2} />
                                        <span>Prendre contact</span>
                                    </Button>
                                </Link>
                            </div>

                            <AvailabilityStatus />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

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
    title?: React.ReactNode;
    description?: React.ReactNode;
}

export function ConversionSection({
    variant = "primary",
    title,
    description,
}: ConversionSectionProps) {
    return (
        <section
            className={cn(
                "relative overflow-hidden py-24 md:py-32",
                variant === "primary" ? "bg-slate-950" : "bg-slate-900"
            )}
        >
            <div className="mx-auto flex max-w-[1440px] justify-center px-8">
                {/* Card Wrapper with premium border gradient */}
                <div className="group relative w-full">
                    {/* Subtle glow behind the card */}
                    <div className="from-azure-blue-500/10 to-azure-blue-500/10 absolute -inset-1 rounded-[32px] bg-linear-to-r via-slate-500/5 opacity-50 blur-2xl transition duration-1000 group-hover:opacity-100" />

                    <div className="relative overflow-hidden rounded-[32px] border border-slate-700/30 bg-slate-900/60 backdrop-blur-3xl">
                        {/* Grain Overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />

                        <div className="relative z-10 flex flex-col items-center px-8 py-16 text-center md:px-16 md:py-24">
                            <span className="text-azure-blue-400 border-azure-blue-500/20 bg-azure-blue-500/5 mb-8 inline-block rounded-full border px-4 py-1.5 text-[10px] font-medium tracking-[0.2em] uppercase">
                                Travaillons ensemble
                            </span>

                            <TypographyH2 className="mb-6 text-[clamp(32px,5vw,56px)] leading-[1.1] font-bold tracking-tight text-white">
                                {title ? (
                                    title
                                ) : (
                                    <>
                                        Vous avez un projet ?<br />
                                        <span className="font-rethink-sans border-b border-slate-700 font-normal text-slate-300 italic">
                                            Parlons-en.
                                        </span>
                                    </>
                                )}
                            </TypographyH2>

                            <TypographyBody className="mb-12 max-w-3xl text-lg leading-relaxed font-light text-slate-200 md:text-xl">
                                {description ? (
                                    description
                                ) : (
                                    <>
                                        Startup en quête de son premier MVP,
                                        agence en surcharge, ou recruteur à la
                                        recherche d&apos;un profil solide; je
                                        suis votre interlocuteur.
                                    </>
                                )}
                            </TypographyBody>

                            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                                <Button
                                    asChild
                                    className="min-w-[220px]"
                                >
                                    <Link href="/contact">
                                        <HugeiconsIcon
                                            icon={Mail01Icon}
                                            size={24}
                                            strokeWidth={2}
                                        />
                                        <TypographyBody>Prendre contact</TypographyBody>
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    aria-label="Voir toutes mes réalisations"
                                    className="min-w-[220px]"
                                >
                                    <Link href="/works">
                                        <TypographyBody>Toutes mes réalisations</TypographyBody>
                                        <HugeiconsIcon
                                            icon={ArrowRight01Icon}
                                            size={20}
                                            strokeWidth={2}
                                        />
                                    </Link>
                                </Button>
                            </div>

                            <AvailabilityStatus />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

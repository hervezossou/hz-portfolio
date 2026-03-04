import { AboutImage } from "@/components/molecules/about-image";
import { AboutStatsGrid } from "@/components/molecules/about-stats-grid";
import { AvailabilityStatus } from "@/components/ui/availability-status";
import { TypographyH2, TypographyBody } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/components/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { Mail01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface AboutCardProps {
    title: React.ReactNode;
    description: React.ReactNode[];
    stats: { value: string; label: string }[];
    image: { src: string; alt: string };
    className?: string;
}

export function AboutCard({
    title,
    description,
    stats,
    image,
    className,
}: AboutCardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl bg-linear-to-br from-white/15 via-white/5 to-white/10 p-[1.5px]",
                className
            )}
        >
            <div className="flex flex-col overflow-hidden rounded-[14px] bg-slate-900/60 backdrop-blur-sm xl:flex-row">
                {/* Image Section */}
                <div className="relative order-first min-h-[300px] w-full shrink-0 md:min-h-[512px] xl:w-[45%]">
                    <AboutImage src={image.src} alt={image.alt} />
                </div>

                {/* Content Section */}
                <div className="flex flex-1 flex-col justify-center px-8 py-10 md:px-12 md:py-14">
                    {/* Badge */}
                    <div className="mb-8">
                        <AvailabilityStatus
                            text="Disponible · Remote friendly"
                            className="rounded-full border border-emerald-500/10 bg-emerald-500/5 px-3 py-1"
                        />
                    </div>

                    {/* Title */}
                    <TypographyH2 className="mb-6 text-[clamp(26px,3.2vw,38px)] text-white">
                        {title}
                    </TypographyH2>

                    {/* Description */}
                    <div className="mb-10 space-y-4">
                        {description.map((paragraph, index) => (
                            <TypographyBody
                                key={index}
                                className="text-slate-200"
                            >
                                {paragraph}
                            </TypographyBody>
                        ))}
                    </div>

                    {/* Stats */}
                    <AboutStatsGrid stats={stats} className="mb-12" />

                    {/* Actions */}
                    <div className="w-full flex flex-wrap gap-4 lg:flex-nowrap">
                        <Button
                            asChild
                            size="lg"
                            className="w-full lg:w-[50%] bg-azure-blue-700 hover:bg-azure-blue-600 shadow-azure-blue-500/20 rounded-2xl px-10 py-8 shadow-lg"
                        >

                            <Link href="/contact">
                                <HugeiconsIcon
                                    icon={Mail01Icon}
                                    size={24}
                                    strokeWidth={2}
                                />
                                <TypographyBody>Me contacter</TypographyBody>
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full lg:w-[50%] rounded-2xl border-white/10 px-10 py-7 text-slate-300 hover:text-azure-blue-500 hover:border-azure-blue-500"
                        >
                            <Link href="/works" aria-label="Voir toutes mes réalisations">
                                <TypographyBody>Découvrir mon portfolio</TypographyBody>
                                <HugeiconsIcon
                                    icon={ArrowRight01Icon}
                                    size={24}
                                    strokeWidth={2}
                                />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { motion } from "motion/react";
import { TypographyH1, TypographyBody } from "@/components/ui/typography";
import { cn } from "@/components/lib/utils";

interface SectionHeaderProps {
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    className?: string;
}

export function SectionHeader({ title, subtitle, className }: SectionHeaderProps) {
    return (
        <div className={cn("pt-24 pb-12", className)}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-4"
            >
                <TypographyH1 className="font-bold text-[clamp(44px,5.5vw,82px)] leading-[1.06] tracking-[-0.035em] text-white">
                    {title}
                </TypographyH1>
                {subtitle && (
                    <TypographyBody className="text-xl text-slate-500 font-light max-w-4xl leading-relaxed">
                        {subtitle}
                    </TypographyBody>
                )}
            </motion.div>
        </div>
    );
}

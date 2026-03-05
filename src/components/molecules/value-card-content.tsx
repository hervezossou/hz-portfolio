"use client";

import { motion } from "motion/react";
import { ValueBadge } from "@/components/ui/value-badge";
import { TypographyBody } from "@/components/ui/typography";

interface ValueCardContentProps {
    isHovered: boolean;
    description: string;
    badges: string[];
}

export function ValueCardContent({
    isHovered,
    description,
    badges,
}: ValueCardContentProps) {
    return (
        <div className="relative mt-auto flex flex-col gap-6">
            <motion.div
                animate={{
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                    marginTop: isHovered ? 0 : -24,
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
            >
                <TypographyBody className="text-base leading-relaxed font-normal text-slate-100">
                    {description}
                </TypographyBody>
            </motion.div>

            <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                    <ValueBadge key={badge}>{badge}</ValueBadge>
                ))}
            </div>
        </div>
    );
}

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
                <TypographyBody className={isHovered ? "text-white" : "text-muted-foreground"}>
                    {description}
                </TypographyBody>
            </motion.div>

            <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                    <span
                        key={badge}
                        className={`rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wider uppercase transition-colors ${
                            isHovered
                                ? "border-white/30 bg-white/10 text-white"
                                : "border-border bg-muted/50 text-muted-foreground"
                        }`}
                    >
                        {badge}
                    </span>
                ))}
            </div>
        </div>
    );
}

"use client";

import { motion, AnimatePresence } from "motion/react";
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
        <div className="relative mt-auto h-24">
            <AnimatePresence mode="wait">
                {isHovered ? (
                    <motion.div
                        key="description"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <TypographyBody className="text-base leading-relaxed font-normal text-slate-200">
                            {description}
                        </TypographyBody>
                    </motion.div>
                ) : (
                    <motion.div
                        key="badges"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="flex flex-wrap gap-2"
                    >
                        {badges.map((badge) => (
                            <ValueBadge key={badge}>{badge}</ValueBadge>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

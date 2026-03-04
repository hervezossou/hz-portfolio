"use client";

import { motion, AnimatePresence } from "motion/react";
import { ValueBadge } from "@/components/ui/value-badge";
import { TypographyBody } from "@/components/ui/typography";

interface ValueCardContentProps {
    isHovered: boolean;
    description: string;
    badges: string[];
}

export function ValueCardContent({ isHovered, description, badges }: ValueCardContentProps) {
    return (
        <div className="relative h-24 mt-auto">
            <AnimatePresence mode="wait">
                {isHovered ? (
                    <motion.div
                        key="description"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <TypographyBody className="text-slate-200 text-base font-normal leading-relaxed">
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

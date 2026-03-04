"use client";

import { motion } from "motion/react";
import { ProcessNumber } from "@/components/ui/process-number";
import { TypographyBody } from "@/components/ui/typography";
import { ValueBadge } from "@/components/ui/value-badge";
import { cn } from "@/components/lib/utils";

interface ProcessItemProps {
    number: string;
    title: string;
    tag: string;
    description: string;
    isActive: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export function ProcessItem({
    number,
    title,
    tag,
    description,
    isActive,
    onMouseEnter,
    onMouseLeave,
}: ProcessItemProps) {
    return (
        <li
            className={cn(
                "group border-t border-slate-800/40 transition-all duration-500 last:border-b",
                isActive ? "border-slate-700/60" : "hover:border-slate-800"
            )}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div
                className={cn(
                    "grid grid-cols-[48px_1fr_auto] items-center gap-6 py-7 md:py-8 transition-all duration-350",
                    isActive && "pt-10 pb-4"
                )}
            >
                <ProcessNumber number={number} isHovered={isActive} />

                <h3
                    className={cn(
                        "font-sora text-xl md:text-2xl lg:text-3xl transition-colors duration-300 tracking-tight",
                        isActive ? "text-white" : "text-slate-500"
                    )}
                >
                    {title}
                </h3>

                <div className={cn(
                    "opacity-0 transition-all duration-300 transform translate-x-4",
                    isActive && "opacity-100 translate-x-0"
                )}>
                    <ValueBadge className="hidden sm:inline-flex">{tag}</ValueBadge>
                </div>
            </div>

            <motion.div
                initial={false}
                animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
            >
                <div className="pl-12 md:pl-[72px] pb-8 max-w-2xl">
                    <TypographyBody className="text-slate-400 text-[15px] leading-relaxed">
                        {description}
                    </TypographyBody>
                </div>
            </motion.div>
        </li>
    );
}

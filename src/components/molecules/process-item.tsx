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
                    "grid grid-cols-[48px_1fr_auto] items-center gap-6 py-7 transition-all duration-350 md:py-8",
                    isActive && "pt-10 pb-4"
                )}
            >
                <ProcessNumber number={number} isHovered={isActive} />

                <h3
                    className={cn(
                        "font-sora text-xl tracking-tight transition-colors duration-300 md:text-2xl lg:text-3xl",
                        isActive ? "text-white" : "text-slate-500"
                    )}
                >
                    {title}
                </h3>

                <div
                    className={cn(
                        "translate-x-4 transform opacity-0 transition-all duration-300",
                        isActive && "translate-x-0 opacity-100"
                    )}
                >
                    <ValueBadge className="hidden sm:inline-flex">
                        {tag}
                    </ValueBadge>
                </div>
            </div>

            <motion.div
                initial={false}
                animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
            >
                <div className="max-w-2xl pb-8 pl-12 md:pl-[72px]">
                    <TypographyBody className="text-[15px] leading-relaxed text-slate-400">
                        {description}
                    </TypographyBody>
                </div>
            </motion.div>
        </li>
    );
}

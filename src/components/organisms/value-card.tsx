"use client";

import { motion } from "motion/react";
import { ValueIcon } from "@/components/ui/value-icon";
import { ValueCardContent } from "@/components/molecules/value-card-content";
import { TypographyH3 } from "@/components/ui/typography";
import { cn } from "@/components/lib/utils";

interface ValueCardProps {
    value: {
        id: number;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        icon: any;
        title: string;
        description: string;
        badges: string[];
    };
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}

export function ValueCard({
    value,
    isHovered,
    onHover,
    onLeave,
}: ValueCardProps) {
    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            animate={{ flex: isHovered ? 1.8 : 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "group relative flex min-h-[320px] cursor-pointer flex-col overflow-hidden rounded-[2rem] border p-10 transition-all duration-500",
                isHovered
                    ? "bg-azure-blue-600 shadow-azure-blue-900/40 border-transparent shadow-2xl"
                    : "border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-slate-700"
            )}
        >
            {/* Glow Effect */}
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 bg-linear-to-tr from-white/10 to-transparent transition-opacity duration-500",
                    isHovered ? "opacity-100" : "opacity-0"
                )}
            />

            <ValueIcon
                icon={value.icon}
                isHovered={isHovered}
                className="mb-8"
            />

            <TypographyH3
                className={cn(
                    "mb-4 text-2xl leading-tight font-semibold tracking-tight transition-colors duration-300",
                    isHovered ? "text-white" : "text-slate-100"
                )}
            >
                {value.title}
            </TypographyH3>

            <ValueCardContent
                isHovered={isHovered}
                description={value.description}
                badges={value.badges}
            />
        </motion.div>
    );
}

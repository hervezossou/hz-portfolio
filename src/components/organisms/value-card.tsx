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

export function ValueCard({ value, isHovered, onHover, onLeave }: ValueCardProps) {
    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            animate={{ flex: isHovered ? 1.8 : 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "group relative flex flex-col min-h-[320px] p-10 rounded-[2rem] border cursor-pointer overflow-hidden transition-all duration-500",
                isHovered
                    ? "bg-azure-blue-600 border-transparent shadow-2xl shadow-azure-blue-900/40"
                    : "bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-slate-700"
            )}
        >
            {/* Glow Effect */}
            <div
                className={cn(
                    "absolute inset-0 bg-linear-to-tr from-white/10 to-transparent transition-opacity duration-500 pointer-events-none",
                    isHovered ? "opacity-100" : "opacity-0"
                )}
            />

            <ValueIcon icon={value.icon} isHovered={isHovered} className="mb-8" />

            <TypographyH3 className={cn(
                "text-2xl font-semibold tracking-tight leading-tight mb-4 transition-colors duration-300",
                isHovered ? "text-white" : "text-slate-100"
            )}>
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

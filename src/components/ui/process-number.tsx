"use client";

import { cn } from "@/components/lib/utils";

interface ProcessNumberProps {
    number: string;
    isHovered: boolean;
    className?: string;
}

export function ProcessNumber({ number, isHovered, className }: ProcessNumberProps) {
    return (
        <span
            className={cn(
                "font-sora text-[13px] transition-colors duration-300 tracking-wider",
                isHovered ? "text-slate-400" : "text-slate-800",
                className
            )}
        >
            {number}
        </span>
    );
}

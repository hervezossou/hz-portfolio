"use client";

import { cn } from "@/components/lib/utils";
import { TypographyLabel } from "./typography";

interface ProcessNumberProps {
    number: string;
    isHovered: boolean;
    className?: string;
}

export function ProcessNumber({
    number,
    isHovered,
    className,
}: ProcessNumberProps) {
    return (
        <TypographyLabel
            className={cn(
                "font-sora text-[13px] tracking-wider transition-colors duration-300",
                isHovered ? "text-slate-400" : "text-slate-400",
                className
            )}
        >
            {number}
        </TypographyLabel>
    );
}

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
                isHovered ? "text-muted-foreground" : "text-muted-foreground/70",
                className
            )}
        >
            {number}
        </TypographyLabel>
    );
}

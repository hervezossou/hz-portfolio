"use client";

import { cn } from "@/components/lib/utils";

interface ValueBadgeProps {
    children: React.ReactNode;
    className?: string;
}

export function ValueBadge({ children, className }: ValueBadgeProps) {
    return (
        <span
            className={cn(
                "rounded-full border border-border bg-muted/50 px-2.5 py-1 text-[10px] font-medium tracking-wider text-muted-foreground uppercase transition-colors group-hover:border-foreground/20 group-hover:bg-foreground/10 group-hover:text-foreground",
                className
            )}
        >
            {children}
        </span>
    );
}

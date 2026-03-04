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
                "rounded-full border border-slate-700/50 bg-slate-800/50 px-2.5 py-1 text-[10px] font-medium tracking-wider text-slate-400 uppercase transition-colors group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white",
                className
            )}
        >
            {children}
        </span>
    );
}

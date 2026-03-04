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
                "bg-slate-800/50 text-slate-400 text-[10px] font-medium px-2.5 py-1 rounded-full border border-slate-700/50 uppercase tracking-wider transition-colors group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20",
                className
            )}
        >
            {children}
        </span>
    );
}

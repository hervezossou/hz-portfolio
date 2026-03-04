"use client";

import { cn } from "@/components/lib/utils";

interface ProjectTagProps {
    children: React.ReactNode;
    accent: string;
    className?: string;
}

export function ProjectTag({ children, accent, className }: ProjectTagProps) {
    return (
        <span
            className={cn(
                "px-3.5 py-1 rounded-full text-[11px] font-medium tracking-widest uppercase border transition-colors",
                className
            )}
            style={{
                backgroundColor: `${accent}22`,
                borderColor: `${accent}44`,
                color: accent,
            }}
        >
            {children}
        </span>
    );
}

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
                "rounded-full border px-3.5 py-1 text-[11px] font-medium tracking-widest uppercase transition-colors",
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

"use client";

import { cn } from "@/components/lib/utils";

interface AvailabilityStatusProps {
    className?: string;
    text?: string;
}

export function AvailabilityStatus({
    className,
    text = "Disponible pour missions freelance · Remote friendly",
}: AvailabilityStatusProps) {
    return (
        <div className={cn("inline-flex items-center gap-2.5", className)}>
            <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
            </span>
            <span className="text-[12px] font-light tracking-wide text-slate-500">
                {text}
            </span>
        </div>
    );
}

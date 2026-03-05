"use client";

import { cn } from "@/components/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import type { HugeIcon } from "@/types/hugeicons";

interface ValueIconProps {
    icon: HugeIcon;
    isHovered: boolean;
    className?: string;
}

export function ValueIcon({
    icon: Icon,
    isHovered,
    className,
}: ValueIconProps) {
    return (
        <div
            className={cn(
                "flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300",
                isHovered
                    ? "bg-white/20 text-white"
                    : "bg-azure-blue-500/10 text-azure-blue-500",
                className
            )}
        >
            <HugeiconsIcon
                icon={Icon}
                size={28}
                strokeWidth={1.5}
                className="transition-transform duration-300"
            />
        </div>
    );
}

import { cn } from "@/components/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import type { IconSvgElement } from "@hugeicons/react";

interface ParcoursIconProps {
    icon: IconSvgElement;
    className?: string;
}

export function ParcoursIcon({ icon, className }: ParcoursIconProps) {
    return (
        <div
            className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-slate-900 transition-transform duration-500 group-hover:scale-110",
                className
            )}
        >
            <HugeiconsIcon
                icon={icon}
                size={20}
                strokeWidth={1.5}
                className="text-azure-blue-500"
            />
        </div>
    );
}

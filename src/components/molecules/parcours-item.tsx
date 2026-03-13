import { ParcoursIcon } from "@/components/ui/parcours-icon";
import { TypographyBody, TypographyLabel } from "@/components/ui/typography";
import { cn } from "@/components/lib/utils";
import type { IconSvgElement } from "@hugeicons/react";

interface ParcoursItemProps {
    period: string;
    title: string;
    subtitle: string;
    icon: IconSvgElement;
    isLast?: boolean;
}

export function ParcoursItem({
    period,
    title,
    subtitle,
    icon,
    isLast,
}: ParcoursItemProps) {
    return (
        <div
            className={cn(
                "group flex items-start gap-4 py-7 transition-all",
                !isLast && "border-b border-border"
            )}
        >
            <ParcoursIcon icon={icon} />
            <div className="min-w-0 flex-1">
                <TypographyLabel className="mb-1.5 block text-[11px] tracking-wider text-muted-foreground/60 uppercase">
                    {period}
                </TypographyLabel>
                <div className="flex flex-col gap-0.5">
                    <h4 className="group-hover:text-primary-400 truncate text-base font-medium text-foreground transition-colors">
                        {title}
                    </h4>
                    <TypographyBody className="text-sm font-light text-muted-foreground/70">
                        {subtitle}
                    </TypographyBody>
                </div>
            </div>
        </div>
    );
}

"use client";

import { TypographyCaption, TypographyLabel } from "@/components/ui/typography";

interface ProjectHeaderProps {
    tag: string;
    year: string;
    category: string;
}

export function ProjectHeader({
    tag,
    year,
    category,
}: ProjectHeaderProps) {
    return (
        <div className="flex flex-col gap-2">
            <TypographyLabel className="text-[11px] font-medium tracking-[0.14em] text-slate-300 uppercase">
                {category} <span className="mx-1 text-slate-500">›</span> {tag}
            </TypographyLabel>
            <TypographyCaption className="font-medium text-slate-400">
                {year}
            </TypographyCaption>
        </div>
    );
}

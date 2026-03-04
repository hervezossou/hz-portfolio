"use client";

import { ProjectTag } from "@/components/ui/project-tag";
import { TypographyCaption, TypographyLabel } from "@/components/ui/typography";

interface ProjectHeaderProps {
    tag: string;
    year: string;
    category: string;
    accent: string;
}

export function ProjectHeader({
    tag,
    year,
    category,
    accent,
}: ProjectHeaderProps) {
    return (
        <div className="mb-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <ProjectTag accent={accent}>{tag}</ProjectTag>
                <TypographyCaption className="font-medium text-slate-200">
                    {year}
                </TypographyCaption>
            </div>
            <TypographyLabel className="text-[11px] font-medium tracking-[0.14em] text-slate-200 uppercase">
                {category}
            </TypographyLabel>
        </div>
    );
}

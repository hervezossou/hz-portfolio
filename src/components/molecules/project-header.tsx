"use client";

import { ProjectTag } from "@/components/ui/project-tag";
import { TypographyCaption, TypographyLabel } from "@/components/ui/typography";

interface ProjectHeaderProps {
    tag: string;
    year: string;
    category: string;
    accent: string;
}

export function ProjectHeader({ tag, year, category, accent }: ProjectHeaderProps) {
    return (
        <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-3">
                <ProjectTag accent={accent}>{tag}</ProjectTag>
                <TypographyCaption className="text-slate-500 font-medium">
                    {year}
                </TypographyCaption>
            </div>
            <TypographyLabel className="text-[11px] tracking-[0.14em] uppercase text-slate-500 font-medium">
                {category}
            </TypographyLabel>
        </div>
    );
}

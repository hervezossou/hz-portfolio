"use client";

import { TypographyCaption, TypographyLabel } from "@/components/ui/typography";
import { ProjectTag } from "@/components/ui/project-tag";

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
            <TypographyLabel className="text-[11px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                {category} <span className="mx-1 text-xl text-secondary-foreground">›</span> <ProjectTag accent="#2E9DF7">{tag}</ProjectTag>
            </TypographyLabel>
            <TypographyCaption className="font-medium text-secondary-foreground">
                {year}
            </TypographyCaption>
        </div>
    );
}

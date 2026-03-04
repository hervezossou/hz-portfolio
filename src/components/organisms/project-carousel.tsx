"use client";

import { useState, useEffect } from "react";
import { Project } from "@/types/project";
import { ProjectCard } from "./project-card";
import { ProjectNavButton } from "@/components/ui/project-nav-button";
import { ProjectPagination } from "@/components/molecules/project-pagination";
import { TypographyLabel } from "@/components/ui/typography";

interface ProjectCarouselProps {
    projects: Project[];
}

export function ProjectCarousel({ projects }: ProjectCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [isWide, setIsWide] = useState(true);
    const total = projects.length;

    useEffect(() => {
        const onResize = () => setIsWide(window.innerWidth >= 1024);
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    const goTo = (dir: number) => {
        setCurrent((prev) => (prev + dir + total) % total);
    };

    return (
        <div className="w-full">
            {/* Section header + nav */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                    <TypographyLabel className="text-xs tracking-[0.16em] uppercase text-slate-500 font-normal">
                        Projets sélectionnés
                    </TypographyLabel>
                    <span className="text-xs text-slate-700 font-light">
                        {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                </div>
                <div className="flex gap-2.5">
                    <ProjectNavButton direction="left" onClick={() => goTo(-1)} />
                    <ProjectNavButton direction="right" onClick={() => goTo(1)} />
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative w-full">
                {projects.map((proj, index) => (
                    <ProjectCard
                        key={proj.id}
                        project={proj}
                        isVisible={index === current}
                        isWide={isWide}
                        index={index}
                    />
                ))}
            </div>

            {/* Pagination */}
            <ProjectPagination
                total={total}
                current={current}
                onSelect={setCurrent}
            />
        </div>
    );
}

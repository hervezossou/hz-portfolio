"use client";

import { motion } from "motion/react";
import { Project } from "@/types/project";
import { ProjectHeader } from "@/components/molecules/project-header";
import { ProjectIllustration } from "@/components/ui/project-illustration";
import { ProjectActions } from "@/components/molecules/project-actions";
import { TypographyH2, TypographyBody } from "@/components/ui/typography";
import { cn } from "@/components/lib/utils";

interface ProjectCardProps {
    project: Project;
    isVisible: boolean;
    isWide: boolean;
    index: number;
}

export function ProjectCard({ project, isVisible, isWide, index }: ProjectCardProps) {
    const imgRight = index % 2 === 0;

    return (
        <motion.div
            initial={false}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.985,
                y: isVisible ? 0 : 8,
            }}
            transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={cn(
                "absolute top-0 left-0 w-100% h-full",
                isVisible ? "relative z-10" : "z-0 pointer-events-none"
            )}
        >
            <div
                className={cn(
                    "bg-slate-900/60 backdrop-blur-[36px] backdrop-saturate-160 border border-slate-700/30 rounded-3xl overflow-hidden w-full flex shadow-2xl transition-all duration-500",
                    isWide
                        ? imgRight
                            ? "flex-row"
                            : "flex-row-reverse"
                        : "flex-column-reverse",
                    isWide ? "min-h-[460px]" : "auto"
                )}
            >
                {/* Content Side */}
                <div
                    className={cn(
                        "flex-1 flex flex-col justify-center",
                        isWide ? "px-16 py-14" : "px-8 py-10"
                    )}
                >
                    <ProjectHeader
                        tag={project.tag}
                        year={project.year}
                        category={project.category}
                        accent={project.accent}
                    />

                    <TypographyH2 className="text-[clamp(30px,3.2vw,50px)] font-light! leading-[1.08] tracking-[-0.03em] mb-6 text-slate-100">
                        {project.title}
                    </TypographyH2>

                    <TypographyBody className="text-slate-400 font-light max-w-md leading-relaxed mb-6">
                        {project.description}
                    </TypographyBody>

                    <ProjectActions showCode={project.showCode} />
                </div>

                {/* Illustration Side */}
                <div
                    style={{ backgroundColor: project.bgColor }}
                    className={cn(
                        "relative flex items-center justify-center overflow-hidden p-10 shrink-0 border-slate-700/20",
                        isWide ? (imgRight ? "w-[42%] border-l" : "w-[42%] border-r") : "w-full border-b min-h-[220px]"
                    )}
                >
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at center, ${project.accent}14 0%, transparent 70%)`,
                        }}
                    />
                    <div className="relative z-1 w-full max-w-[340px]">
                        <ProjectIllustration shape={project.shape} accent={project.accent} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

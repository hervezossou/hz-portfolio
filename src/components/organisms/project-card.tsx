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

export function ProjectCard({
    project,
    isVisible,
    isWide,
    index,
}: ProjectCardProps) {
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
                "absolute top-0 left-0 h-full w-full",
                isVisible ? "relative z-10" : "pointer-events-none z-0"
            )}
        >
            <div
                className={cn(
                    "flex w-full overflow-hidden rounded-2xl border border-slate-700/30 bg-slate-900/60 shadow-2xl backdrop-blur-[36px] backdrop-saturate-160 transition-all duration-500",
                    isWide
                        ? imgRight
                            ? "flex-row"
                            : "flex-row-reverse"
                        : "flex-col-reverse",
                    isWide ? "min-h-[460px]" : "auto"
                )}
            >
                {/* Content Side */}
                <div
                    className={cn(
                        "flex flex-1 flex-col justify-center",
                        isWide ? "p-10" : "p-5"
                    )}
                >
                    <ProjectHeader
                        tag={project.tag}
                        year={project.year}
                        category={project.category}
                    />

                    <TypographyH2 className="mt-2 mb-6 text-[clamp(30px,3.2vw,50px)] leading-[1.08] tracking-[-0.03em] text-slate-100">
                        {project.title}
                    </TypographyH2>

                    <TypographyBody className="mb-2 max-w-xl leading-relaxed text-slate-200 text-justify">
                        {project.description}
                    </TypographyBody>

                    <ProjectActions
                        showCode={project.showCode}
                        onViewProject={() => window.open(project.liveUrl, "_blank")}
                        onViewCode={() => window.open(project.githubUrl, "_blank")}
                    />
                </div>

                {/* Illustration Side */}
                <div
                    style={{ backgroundColor: project.bgColor }}
                    className={cn(
                        "relative flex shrink-0 items-center justify-center overflow-hidden border-slate-700/20 p-10",
                        isWide
                            ? imgRight
                                ? "w-[42%] border-l"
                                : "w-[42%] border-r"
                            : "min-h-[220px] w-full border-b"
                    )}
                >
                    <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                            background: `radial-gradient(circle at center, ${project.accent}14 0%, transparent 70%)`,
                        }}
                    />
                    <div className="relative z-1 w-full max-w-[340px]">
                        <ProjectIllustration
                            shape={project.shape}
                            accent={project.accent}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

"use client";

import { cn } from "@/components/lib/utils";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ProjectCarousel } from "@/components/organisms/project-carousel";
import { SectionHeader } from "@/components/ui/section-header";
import { PROJECTS_DATA } from "@/constants/projects";

interface ProjectSectionProps {
    variant?: "primary" | "secondary";
}

export function ProjectSection({ variant = "primary" }: ProjectSectionProps) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const onScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            className={cn(
                "selection:bg-primary-500/30 relative min-h-screen overflow-x-hidden font-sans",
                variant === "primary" ? "bg-background" : "bg-muted"
            )}
        >
            {/* Ambient blobs */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <motion.div
                    style={{ y: scrollY * 0.12 }}
                    className="absolute -top-[15%] -left-[8%] h-[55vw] w-[55vw] rounded-full bg-[radial-gradient(circle,rgba(46,157,247,0.07)_0%,transparent_70%)]"
                />
                <div className="absolute -right-[10%] bottom-0 h-[40vw] w-[40vw] rounded-full bg-[radial-gradient(circle,rgba(100,166,196,0.05)_0%,transparent_70%)]" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8 pb-24">
                <SectionHeader
                    title={
                        <>
                            Donner vie à<br />
                            <span className="text-primary-500">
                                l&apos;exceptionnel.
                            </span>
                        </>
                    }
                    subtitle="Transformer vos visions les plus ambitieuses en expériences digitales de classe mondiale."
                />

                {/* Projects Carousel Organism */}
                <ProjectCarousel projects={PROJECTS_DATA} />
            </div>
        </div>
    );
}

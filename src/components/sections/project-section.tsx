"use client";

import { cn } from "@/components/lib/utils";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ProjectCarousel } from "@/components/organisms/project-carousel";
import { PROJECTS } from "@/constants/projects";
import { SectionHeader } from "@/components/ui/section-header";

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
        <div className={cn(
            "relative min-h-screen font-sans overflow-x-hidden selection:bg-azure-blue-500/30",
            variant === "primary" ? "bg-slate-950" : "bg-slate-900"
        )}>
            {/* Ambient blobs */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <motion.div
                    style={{ y: scrollY * 0.12 }}
                    className="absolute -top-[15%] -left-[8%] w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle,rgba(46,157,247,0.07)_0%,transparent_70%)]"
                />
                <div className="absolute bottom-0 -right-[10%] w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(100,166,196,0.05)_0%,transparent_70%)]" />
            </div>

            <div className="relative z-10 max-w-[1440px] mx-auto px-8 pb-24">
                <SectionHeader
                    title={<>Donner vie à<br /><span className="text-azure-blue-500">l&apos;exceptionnel.</span></>}
                    subtitle="Transformer vos visions les plus ambitieuses en expériences digitales de classe mondiale."
                />

                {/* Projects Carousel Organism */}
                <ProjectCarousel projects={PROJECTS} />
            </div>
        </div>
    );
}

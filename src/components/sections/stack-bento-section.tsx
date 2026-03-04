import { SectionHeader } from "@/components/ui/section-header";
import { StackBentoGrid } from "@/components/organisms/stack-bento-grid";
import { cn } from "@/components/lib/utils";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFigma,
    SiGit,
    SiNodedotjs,
} from "@icons-pack/react-simple-icons";

const STACK_DATA = [
    {
        name: "React",
        category: "Framework",
        color: "#61DAFB",
        bg: "rgba(97,218,251,0.08)",
        size: "large" as const,
        svg: <SiReact />,
    },
    {
        name: "Next.js",
        category: "Framework",
        color: "#ffffff",
        bg: "rgba(255,255,255,0.06)",
        size: "normal" as const,
        svg: <SiNextdotjs />,
    },
    {
        name: "TypeScript",
        category: "Langage",
        color: "#3178C6",
        bg: "rgba(49,120,198,0.1)",
        size: "normal" as const,
        svg: <SiTypescript />,
    },
    {
        name: "Tailwind",
        category: "Styling",
        color: "#06B6D4",
        bg: "rgba(6,182,212,0.08)",
        size: "normal" as const,
        svg: <SiTailwindcss />,
    },
    {
        name: "Figma",
        category: "UI Design",
        color: "#F24E1E",
        bg: "rgba(242,78,30,0.08)",
        size: "normal" as const,
        svg: <SiFigma />,
    },
    {
        name: "Git",
        category: "Versioning",
        color: "#F05032",
        bg: "rgba(240,80,50,0.08)",
        size: "normal" as const,
        svg: <SiGit />,
    },
    {
        name: "Node.js",
        category: "Runtime",
        color: "#339933",
        bg: "rgba(51,153,51,0.08)",
        size: "normal" as const,
        svg: <SiNodedotjs />,
    },
];

interface StackBentoSectionProps {
    className?: string;
    variant?: "primary" | "secondary";
}

export function StackBentoSection({
    className,
    variant = "primary",
}: StackBentoSectionProps) {
    return (
        <section
            className={cn(
                "overflow-hidden px-8 py-16",
                variant === "primary" ? "bg-slate-950" : "bg-slate-900",
                className
            )}
        >
            <div className="mx-auto max-w-[1440px] px-8">
                <SectionHeader
                    title={
                        <>
                            La stack que je maîtrise,
                            <br />
                            <span className="text-azure-blue-500 font-light italic">
                                et celle que j&apos;explore.
                            </span>
                        </>
                    }
                    className="mb-14 pt-0"
                />

                <StackBentoGrid items={STACK_DATA} />

                {/* Exploration Footer */}
                <div className="mt-12 flex items-center gap-3 text-slate-400">
                    <span className="bg-azure-blue-500 h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_8px_rgba(46,157,247,0.6)]" />
                    <span className="text-sm md:text-base font-normal tracking-wide italic">
                        En exploration — Docker · CI/CD · TanStack Start
                    </span>
                </div>
            </div>
        </section>
    );
}

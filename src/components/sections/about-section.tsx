import { AboutCard } from "@/components/organisms/about-card";
import { cn } from "@/components/lib/utils";
import { ABOUT_DATA } from "@/constants/about";

interface AboutSectionProps {
    className?: string;
    variant?: "primary" | "secondary";
}

export function AboutSection({ className, variant = "primary" }: AboutSectionProps) {
    return (
        <section
            className={cn(
                "overflow-hidden px-4 py-16 md:px-8 md:py-24",
                variant === "primary" ? "bg-slate-950" : "bg-slate-900",
                className
            )}
        >
            <div className="mx-auto max-w-[1440px]">
                <AboutCard {...ABOUT_DATA} />
            </div>
        </section>
    );
}

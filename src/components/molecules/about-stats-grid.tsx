import { AboutStat } from "@/components/ui/about-stat";
import { cn } from "@/components/lib/utils";

interface StatItem {
    value: string;
    label: string;
}

interface AboutStatsGridProps {
    stats: StatItem[];
    className?: string;
}

export function AboutStatsGrid({ stats, className }: AboutStatsGridProps) {
    return (
        <div className={cn("flex flex-wrap w-full gap-8 md:gap-16", className)}>
            {stats.map((stat, index) => (
                <AboutStat key={index} {...stat} />
            ))}
        </div>
    );
}

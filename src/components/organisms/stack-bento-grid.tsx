import { StackCard } from "@/components/molecules/stack-card";
import { cn } from "@/components/lib/utils";

interface TechItem {
    name: string;
    category: string;
    color: string;
    bg: string;
    size?: "normal" | "large";
    svg: React.ReactNode;
}

interface StackBentoGridProps {
    items: TechItem[];
    className?: string;
}

export function StackBentoGrid({ items, className }: StackBentoGridProps) {
    return (
        <div
            className={cn("grid grid-cols-2 gap-2.5 lg:grid-cols-4", className)}
        >
            {items.map((item) => (
                <StackCard key={item.name} {...item} />
            ))}
        </div>
    );
}

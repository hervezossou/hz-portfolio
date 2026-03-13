import { cn } from "@/components/lib/utils";

interface StackTagProps {
    children: React.ReactNode;
    className?: string;
}

export function StackTag({ children, className }: StackTagProps) {
    return (
        <span
            className={cn(
                "letter-spacing-[0.16em] w-max text-xs font-normal uppercase",
                "rounded-full border border-border px-2.5 py-1 text-muted-foreground",
                "transition-colors duration-350",
                className
            )}
        >
            {children}
        </span>
    );
}

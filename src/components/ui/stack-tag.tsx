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
                "rounded-full border border-slate-400 px-2.5 py-1 text-slate-300",
                "transition-colors duration-350",
                className
            )}
        >
            {children}
        </span>
    );
}

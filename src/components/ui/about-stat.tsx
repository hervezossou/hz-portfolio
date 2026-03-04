import { cn } from "@/components/lib/utils";

interface AboutStatProps {
    value: string;
    label: string;
    className?: string;
}

export function AboutStat({ value, label, className }: AboutStatProps) {
    return (
        <div className={cn("flex flex-col gap-1", className)}>
            <p className="font-sora text-[clamp(22px,2.5vw,28px)] leading-none font-semibold text-white">
                {value}
            </p>
            <p className="font-rethink-sans text-[12px] font-light tracking-wider text-slate-300 uppercase">
                {label}
            </p>
        </div>
    );
}

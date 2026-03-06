import { cn } from "@/components/lib/utils";
import { TypographyH3, TypographyLabel } from "./typography";

interface AboutStatProps {
    value: string;
    label: string;
    className?: string;
}

export function AboutStat({ value, label, className }: AboutStatProps) {
    return (
        <div className={cn("flex flex-col gap-1", className)}>
            <TypographyH3 className="text-[clamp(22px,2.5vw,28px)] leading-none font-semibold text-white">
                {value}
            </TypographyH3>
            <TypographyLabel className="text-[12px] font-light tracking-wider text-slate-300 uppercase">
                {label}
            </TypographyLabel>
        </div>
    );
}

import { cn } from "@/components/lib/utils";

interface HeroStatProps {
  value: string;
  label: string;
  className?: string;
}

export function HeroStat({ value, label, className }: HeroStatProps) {
  return (
    <div className={cn("flex flex-col gap-0.5", className)}>
      <span className="text-2xl font-bold text-primary-600">
        {value}
      </span>
      <span className="text-xs tracking-wider text-secondary-foreground uppercase">
        {label}
      </span>
    </div>
  );
}

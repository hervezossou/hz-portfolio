import { SectionHeader } from "@/components/ui/section-header";
import { StackBentoGrid } from "@/components/organisms/stack-bento-grid";
import { cn } from "@/components/lib/utils";
import { STACK_DATA } from "@/constants/stack";

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
                "overflow-hidden px-4 md:px-8 py-16",
                variant === "primary" ? "bg-background" : "bg-muted",
                className
            )}
        >
            <div className="mx-auto max-w-[1440px]">
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
                <div className="mt-12 flex items-center gap-3 text-muted-foreground">
                    <span className="bg-azure-blue-500 h-1.5 w-1.5 shrink-0 rounded-full shadow-[0_0_8px_rgba(46,157,247,0.6)]" />
                    <span className="text-sm md:text-base font-normal tracking-wide italic">
                        En exploration — Docker · CI/CD · Vitest
                    </span>
                </div>
            </div>
        </section>
    );
}

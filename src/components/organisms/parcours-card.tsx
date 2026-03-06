import { ParcoursItem } from "@/components/molecules/parcours-item";
import type { IconSvgElement } from "@hugeicons/react";
import { TypographyH3 } from "@/components/ui/typography";

interface ParcoursEntry {
    period: string;
    title: string;
    subtitle: string;
}

interface ParcoursCardProps {
    title: string;
    items: ParcoursEntry[];
    icon: IconSvgElement;
}

export function ParcoursCard({ title, items, icon }: ParcoursCardProps) {
    return (
        <div className="h-full rounded-2xl border border-white/5 bg-slate-900/40 p-4 shadow-2xl backdrop-blur-md sm:p-10">
            <TypographyH3 className="mb-2 text-base md:text-lg lg:text-xl flex items-center gap-3 font-semibold tracking-widest text-slate-100 uppercase">
                <span className="bg-azure-blue-500 h-1.5 w-1.5 rounded-full shadow-[0_0_8px_rgba(46,157,247,0.6)]" />
                {title}
            </TypographyH3>
            <div className="flex flex-col">
                {items.map((item, index) => (
                    <ParcoursItem
                        key={index}
                        {...item}
                        icon={icon}
                        isLast={index === items.length - 1}
                    />
                ))}
            </div>
        </div>
    );
}

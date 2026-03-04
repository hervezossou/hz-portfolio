"use client";

import { useState } from "react";
import { cn } from "@/components/lib/utils";
import { StackTag } from "@/components/ui/stack-tag";
import { StackIcon } from "@/components/ui/stack-icon";

interface StackCardProps {
    name: string;
    category: string;
    color: string;
    bg: string;
    size?: "normal" | "large";
    svg: React.ReactNode;
    className?: string;
}

export function StackCard({
    name,
    category,
    color,
    bg,
    size = "normal",
    svg,
    className,
}: StackCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cn(
                "relative flex min-h-[150px] cursor-default flex-col gap-2 rounded-xl border border-white/5 p-5 transition-all duration-350",
                "bg-slate-900/50 backdrop-blur-sm",
                size === "large" && "col-span-2 min-h-[180px]",
                isHovered ? "border-white/10" : "border-white/5",
                className
            )}
            style={isHovered ? { backgroundColor: bg } : {}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glow effect */}
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-400",
                    isHovered && "opacity-100"
                )}
                style={{
                    background: `radial-gradient(ellipse 80% 70% at 20% 80%, ${color}18 0%, transparent 70%)`,
                }}
            />

            {/* Top: Category Tag */}
            <StackTag
                className={cn(isHovered && "border-slate-400 text-slate-200")}
            >
                {category}
            </StackTag>

            {/* Bottom: Icon + Name */}
            <div className="relative z-10 flex flex-col items-start gap-1">
                <StackIcon
                    isLarge={size === "large"}
                    color={isHovered ? color : "rgba(255,255,255,0.65)"}
                    className={cn(isHovered && "scale-110")}
                >
                    {svg}
                </StackIcon>
                <p
                    className={cn(
                        "text-base lg:text-lg font-medium transition-colors duration-350",
                        isHovered ? "text-white" : "text-slate-300",
                        size === "large" && "text-lg"
                    )}
                >
                    {name}
                </p>
            </div>
        </div>
    );
}

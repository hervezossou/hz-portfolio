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
    isBrandColor?: boolean;
}

export function StackCard({
    name,
    category,
    color,
    bg,
    size = "normal",
    svg,
    className,
    isBrandColor = true,
}: StackCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cn(
                "relative flex min-h-[150px] cursor-default flex-col gap-2 rounded-xl border border-border p-5 transition-all duration-350",
                "bg-muted/50 backdrop-blur-sm",
                size === "large" && "col-span-2 min-h-[180px]",
                isHovered ? "border-foreground/10" : "border-border",
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
                className={cn(isHovered && "border-muted-foreground text-muted-foreground")}
            >
                {category}
            </StackTag>

            {/* Bottom: Icon + Name */}
            <div className="relative z-10 flex flex-col items-start gap-1">
                <div className={cn(
                    "transition-transform duration-350",
                    isHovered && "scale-110"
                )}>
                    <StackIcon
                        isLarge={size === "large"}
                        color={isBrandColor && isHovered ? color : undefined}
                        className={cn(
                            isBrandColor 
                                ? (isHovered ? "text-foreground" : "text-foreground/70")
                                : (isHovered ? "dark:text-white text-black" : "text-foreground/70")
                        )}
                    >
                        {svg}
                    </StackIcon>
                </div>
                <p
                    className={cn(
                        "text-base lg:text-lg font-medium transition-colors duration-350",
                        isHovered ? "text-foreground" : "text-foreground/70",
                        size === "large" && "text-lg"
                    )}
                >
                    {name}
                </p>
            </div>
        </div>
    );
}

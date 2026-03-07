"use client";

import Link from "next/link";
import { cn } from "@/components/lib/utils";
import { TypographyH3 } from "./typography";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <Link
            href="/"
            className={cn(
                "group font-sora flex items-center gap-2.5 text-xl font-bold tracking-tight transition-all duration-300",
                className
            )}
        >
            <div className="from-azure-blue-600 to-azure-blue-400 shadow-azure-blue-500/20 group-hover:shadow-azure-blue-500/40 relative flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-tr text-white shadow-lg transition-all group-hover:scale-105">
                <span className="text-sm">H</span>
            </div>
            <div className="group-hover:text-azure-blue-400 flex items-baseline text-foreground transition-colors">
                <TypographyH3>herve</TypographyH3>
                <span className="font-light text-muted-foreground">.dev</span>
            </div>
        </Link>
    );
}

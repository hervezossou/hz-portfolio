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
                "group flex items-center gap-2.5 font-sora font-bold text-xl tracking-tight transition-all duration-300",
                className
            )}
        >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-tr from-azure-blue-600 to-azure-blue-400 text-white shadow-lg shadow-azure-blue-500/20 group-hover:scale-105 group-hover:shadow-azure-blue-500/40 transition-all">
                <span className="text-sm">H</span>
            </div>
            <div className="flex items-baseline text-white group-hover:text-azure-blue-400 transition-colors">
                <TypographyH3>herve</TypographyH3><span className="text-slate-500 font-light">.dev</span>
            </div>
        </Link>
    );
}

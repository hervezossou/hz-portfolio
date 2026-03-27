"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/components/lib/utils";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <Link
            href="/"
            className={cn(
                "group font-sora flex items-center transition-all duration-300",
                className
            )}
        >
            {/* Light mode logo — hidden in dark mode */}
            <Image
                src="/brand/logo-light.png"
                alt="Hervé Zossou logo"
                width={200}
                height={80}
                className="h-12 md:h-20 w-auto object-contain transition-all group-hover:scale-105 dark:hidden"
                priority
            />
            {/* Dark mode logo — hidden in light mode */}
            <Image
                src="/brand/logo-dark.png"
                alt="Hervé Zossou logo"
                width={200}
                height={80}
                className="hidden h-12 md:h-20 w-auto object-contain transition-all group-hover:scale-105 dark:block"
                priority
            />
        </Link>
    );
}

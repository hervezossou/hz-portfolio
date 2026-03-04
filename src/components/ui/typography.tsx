import { cn } from "@/components/lib/utils";
import React from "react";

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
}

export function TypographyH1({ children, className }: TypographyProps) {
    return (
        <h1
            className={cn(
                "font-sora font-extrabold",
                "text-[36px] leading-[44px]", // Mobile
                "md:text-[48px] md:leading-[56px] md:tracking-[-0.025em]", // Tablet
                "lg:text-[64px] lg:leading-[72px]", // Desktop
                className
            )}
        >
            {children}
        </h1>
    );
}

export function TypographyH2({ children, className }: TypographyProps) {
    return (
        <h2
            className={cn(
                "font-sora font-semibold",
                "text-[28px] leading-[36px]", // Mobile
                "md:text-[36px] md:leading-[44px] md:tracking-[-0.0125em]", // Tablet
                "lg:text-[48px] lg:leading-[56px]", // Desktop
                className
            )}
        >
            {children}
        </h2>
    );
}

export function TypographyH3({ children, className }: TypographyProps) {
    return (
        <h3
            className={cn(
                "font-sora font-semibold",
                "text-[24px] leading-[32px]", // Mobile
                "md:text-[28px] md:leading-[36px] md:tracking-[-0.0125em]", // Tablet
                "lg:text-[32px] lg:leading-[40px]", // Desktop
                className
            )}
        >
            {children}
        </h3>
    );
}

export function TypographyBody({ children, className }: TypographyProps) {
    return (
        <p
            className={cn(
                "font-rethink-sans font-normal",
                "text-[16px] leading-[24px] tracking-[-0.0001em]", // Mobile & Tablet
                "lg:text-[18px] lg:leading-[28px]", // Desktop
                className
            )}
        >
            {children}
        </p>
    );
}

export function TypographyHighlight({ children, className }: TypographyProps) {
    return (
        <span
            className={cn(
                "font-rethink-sans font-medium",
                "leading-[28px] tracking-[-0.0001em] text-[18tpx]",
                className
            )}
        >
            {children}
        </span>
    );
}

export function TypographyLabel({ children, className }: TypographyProps) {
    return (
        <span
            className={cn(
                "font-rethink-sans font-medium",
                "text-[14px] leading-[20px] tracking-[-0.0001em]",
                className
            )}
        >
            {children}
        </span>
    );
}

export function TypographyCaption({ children, className }: TypographyProps) {
    return (
        <span
            className={cn(
                "font-rethink-sans font-normal",
                "text-[12px] leading-[18px] tracking-[-0.0001em]",
                className
            )}
        >
            {children}
        </span>
    );
}

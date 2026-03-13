"use client";

import { cn } from "@/components/lib/utils";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

interface ProjectNavButtonProps {
    direction: "left" | "right";
    onClick: () => void;
    className?: string;
}

export function ProjectNavButton({
    direction,
    onClick,
    className,
}: ProjectNavButtonProps) {
    const icon =
        direction === "left" ? (
            <HugeiconsIcon icon={ArrowLeft01Icon} size={24} strokeWidth={1.5} />
        ) : (
            <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={24}
                strokeWidth={1.5}
            />
        );

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={cn(
                "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border text-lg transition-all",
                "hover:text-primary-500 hover:bg-primary-500/10 hover:border-primary-500/40 border-border bg-muted/70 text-muted-foreground backdrop-blur-xl",
                className
            )}
        >
            {icon}
        </motion.button>
    );
}

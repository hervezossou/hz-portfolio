"use client";

import { cn } from "@/components/lib/utils";
import { motion } from "motion/react";
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'

interface ProjectNavButtonProps {
    direction: "left" | "right";
    onClick: () => void;
    className?: string;
}

export function ProjectNavButton({ direction, onClick, className }: ProjectNavButtonProps) {
    const icon = direction === "left" ? <HugeiconsIcon icon={ArrowLeft01Icon} size={24} strokeWidth={1.5} /> : <HugeiconsIcon icon={ArrowRight01Icon} size={24} strokeWidth={1.5} />;

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className={cn(
                "w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all border cursor-pointer",
                "bg-slate-800/70 backdrop-blur-xl border-slate-700/50 text-slate-400 hover:text-azure-blue-500 hover:bg-azure-blue-500/10 hover:border-azure-blue-500/40",
                className
            )}
        >
            {icon}
        </motion.button>
    );
}

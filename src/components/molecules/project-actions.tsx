"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { HugeiconsIcon } from '@hugeicons/react'
import { LinkSquare01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'

interface ProjectActionsProps {
    onViewProject?: () => void;
    onViewCode?: () => void;
    showCode?: boolean;
}

export function ProjectActions({ onViewProject, onViewCode, showCode = true }: ProjectActionsProps) {
    return (
        <div className="flex items-center gap-3.5 mt-8">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                    variant="default"
                    onClick={onViewProject}
                    className="w-auto gap-4 bg-primary text-slate-200 rounded-2xl px-12 py-5 h-auto text-sm font-medium tracking-wide transition-opacity cursor-pointer min-w-[220px]"
                >

                    <span>Voir le projet</span>
                    <HugeiconsIcon icon={ArrowRight01Icon} size={24} strokeWidth={2} />
                </Button>
            </motion.div>
            {showCode && (
                <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                    <Button
                        variant="outline"
                        onClick={onViewCode}
                        className="rounded-2xl px-12 py-5 h-auto text-sm font-normal border-slate-700/50 text-slate-400 hover:text-azure-blue-500 hover:border-azure-blue-500 transition-all cursor-pointer min-w-[220px]"
                    >
                        Voir le code
                        <HugeiconsIcon icon={LinkSquare01Icon} size={24} strokeWidth={2} />
                    </Button>
                </motion.div>
            )}
        </div>
    );
}

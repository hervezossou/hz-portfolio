"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare02Icon, LinkCircle02Icon } from "@hugeicons/core-free-icons";

interface ProjectActionsProps {
    onViewProject?: () => void;
    onViewCode?: () => void;
    showCode?: boolean;
}

export function ProjectActions({
    onViewProject,
    onViewCode,
    showCode = true,
}: ProjectActionsProps) {
    return (
        <div className="mt-8 flex items-center gap-3.5">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                    variant="default"
                    onClick={onViewProject}
                    className="bg-primary h-auto w-auto min-w-[220px] cursor-pointer gap-4 rounded-2xl px-12 py-5 text-sm font-medium tracking-wide text-slate-200 transition-opacity"
                >
                    <span>Voir le projet</span>
                    <HugeiconsIcon
                        icon={LinkSquare02Icon}
                        size={24}
                        strokeWidth={2}
                    />
                </Button>
            </motion.div>
            {showCode && (
                <motion.div
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="hidden md:block"
                >
                    <Button
                        variant="outline"
                        onClick={onViewCode}
                        className="hover:text-azure-blue-500 hover:border-azure-blue-500 h-auto min-w-[220px] cursor-pointer rounded-2xl border-slate-700/50 px-12 py-5 text-sm font-normal text-slate-400 transition-all"
                    >
                        Voir le code
                        <HugeiconsIcon
                            icon={LinkCircle02Icon}
                            size={24}
                            strokeWidth={2}
                        />
                    </Button>
                </motion.div>
            )}
        </div>
    );
}

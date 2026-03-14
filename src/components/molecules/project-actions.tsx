"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import { LinkSquare02Icon, LinkCircle02Icon } from "@hugeicons/core-free-icons";
import { TypographyBody } from "@/components/ui/typography";
import { cn } from "@/components/lib/utils";

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
        <div className="mt-8 flex flex-col md:flex-row w-full items-center gap-3.5">
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="w-full">
                <Button
                    variant="default"
                    size="lg"
                    onClick={onViewProject}
                    className={cn("h-auto w-full cursor-pointer gap-4 rounded-2xl px-8 py-4 text-sm font-medium tracking-wide transition-opacity", !showCode ? "md:max-w-1/2" : "")}
                >
                    <TypographyBody>Voir le projet</TypographyBody>
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
                    className="w-full md:block"
                >
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={onViewCode}
                        className="h-auto w-full cursor-pointer rounded-2xl border-border px-8 py-4 text-sm font-normal text-muted-foreground transition-all"
                    >
                        <TypographyBody>Voir le code</TypographyBody>
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

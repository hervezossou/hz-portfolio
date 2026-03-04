"use client";

import { cn } from "@/components/lib/utils";
import { motion } from "motion/react";

interface PageWrapperProps {
    children: React.ReactNode;
    className?: string;
}

export function PageWrapper({ children, className }: PageWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "selection:bg-azure-blue-500/30 flex min-h-screen flex-1 flex-col font-sans selection:text-white",
                className
            )}
        >
            {children}
        </motion.div>
    );
}

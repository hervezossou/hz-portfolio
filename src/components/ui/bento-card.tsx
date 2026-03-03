"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/components/lib/utils";

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    onClick?: () => void;
}

export const BentoCard = ({
    children,
    className,
    delay = 0,
    onClick,
}: BentoCardProps) => {
    return (
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            className={cn(
                "relative group overflow-hidden rounded-[2rem] border border-white/5 bg-[#111827] p-8 transition-all duration-300 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.15)]",
                className
            )}
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 -z-10 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {children}
        </motion.div>
    );
};

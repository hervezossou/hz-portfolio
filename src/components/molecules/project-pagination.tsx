"use client";

import { motion } from "motion/react";

interface ProjectPaginationProps {
    total: number;
    current: number;
    onSelect: (index: number) => void;
}

export function ProjectPagination({ total, current, onSelect }: ProjectPaginationProps) {
    return (
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onSelect(i)}
                    className="p-1 cursor-pointer focus:outline-none"
                >
                    <motion.div
                        animate={{
                            width: i === current ? 28 : 8,
                            backgroundColor: i === current ? "#2E9DF7" : "rgba(148,163,184,0.2)",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="h-2 rounded-full"
                    />
                </button>
            ))}
        </div>
    );
}

"use client";

import { useState } from "react";
import { ValueCard } from "./value-card";
import { VALUES_DATA } from "@/constants/values";

export function ValueGrid() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="perspective-1000 flex w-full flex-col items-stretch gap-6 lg:flex-row">
            {VALUES_DATA.map((value, index) => (
                <ValueCard
                    key={value.id}
                    value={value}
                    isHovered={hoveredIndex === index}
                    onHover={() => setHoveredIndex(index)}
                    onLeave={() => setHoveredIndex(null)}
                />
            ))}
        </div>
    );
}

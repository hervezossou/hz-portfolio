"use client";

import React, { useEffect, useRef } from "react";
import {
    TypographyH1,
    TypographyBody,
    TypographyLabel,
} from "@/components/ui/typography";
import { cn } from "@/components/lib/utils";

interface PageHeaderProps {
    badge?: string;
    title?: string;
    description?: string;
    variant?: "primary" | "secondary";
}

export const PageHeader = ({
    badge = "CONTACT",
    title = "Contactez-nous",
    description = "Nous sommes à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet.",
    variant = "primary",
}: PageHeaderProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const container = canvas.parentElement;
            if (container) {
                canvas.width = container.offsetWidth;
                canvas.height = container.offsetHeight;
                draw();
            }
        };

        const draw = () => {
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);

            const tileSize = 48;
            // Using a semi-transparent version of azure-blue-400 for the grid
            ctx.strokeStyle = "rgba(116, 203, 251, 0.08)";
            ctx.lineWidth = 1;

            for (let x = 0; x <= w; x += tileSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, h);
                ctx.stroke();
            }
            for (let y = 0; y <= h; y += tileSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(w, y);
                ctx.stroke();
            }

            // Dot at each intersection
            ctx.fillStyle = "rgba(116, 203, 251, 0.12)";
            for (let x = 0; x <= w; x += tileSize) {
                for (let y = 0; y <= h; y += tileSize) {
                    ctx.beginPath();
                    ctx.arc(x, y, 1.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        };

        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    return (
        <div className={cn(
            "relative flex flex-col items-center justify-center overflow-hidden px-6 py-28 text-center min-h-[500px]",
            variant === "primary" ? "bg-slate-950" : "bg-slate-900"
        )}>
            {/* Grid canvas */}
            <canvas
                ref={canvasRef}
                className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
                aria-hidden="true"
            />

            {/* Radial blue glow — center */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(46,157,247,0.13)_0%,transparent_80%)]"
            />

            {/* Bottom-edge fade for seamless blending */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-0 right-0 h-[40%] bg-linear-to-b from-transparent to-azure-blue-950/90"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-6 max-w-6xl">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-azure-blue-400/30 bg-azure-blue-400/10 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-azure-blue-400 shadow-[0_0_8px_rgba(46,157,247,0.6)] animate-pulse" />
                    <TypographyLabel className="text-azure-blue-400 tracking-widest font-medium uppercase text-[10px]">
                        {badge}
                    </TypographyLabel>
                </div>

                {/* Title */}
                <TypographyH1 className="text-slate-50">
                    {title}
                </TypographyH1>

                {/* Description with subtle blue gradient */}
                <TypographyBody className="max-w-4xl text-balance bg-linear-to-br from-slate-400 via-azure-blue-300 to-slate-400 bg-clip-text text-transparent">
                    {description}
                </TypographyBody>
            </div>
        </div>
    );
};

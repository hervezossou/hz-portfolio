"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    TypographyH1,
    TypographyBody,
    TypographyLabel,
} from "@/components/ui/typography";
import { cn } from "@/components/lib/utils";

interface PageHeaderProps {
    badge?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    variant?: "primary" | "secondary";
}

export const PageHeader = ({
    badge = "CONTACT",
    title = "Contactez-nous",
    description = "Nous sommes à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet.",
    variant = "primary",
}: PageHeaderProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };

        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"]
        });

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
            // Dark mode: blue-ish, Light mode: darker for visibility
            const gridColor = isDark ? "rgba(116, 203, 251, 0.08)" : "rgba(30, 41, 59, 0.15)";
            const dotColor = isDark ? "rgba(116, 203, 251, 0.12)" : "rgba(30, 41, 59, 0.25)";

            ctx.strokeStyle = gridColor;
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
            ctx.fillStyle = dotColor;
            for (let x = 0; x <= w; x += tileSize) {
                for (let y = 0; y <= h; y += tileSize) {
                    ctx.beginPath();
                    ctx.arc(x, y, isDark ? 1.5 : 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        };

        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
            observer.disconnect();
        };
    }, [isDark]);

    return (
        <div
            className={cn(
                "relative flex min-h-[500px] flex-col items-center justify-center overflow-hidden px-6 py-28 text-center",
                variant === "primary" ? "bg-muted" : "bg-muted/80"
            )}
        >
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
                className={cn(
                    "pointer-events-none absolute right-0 bottom-0 left-0 h-[40%] bg-linear-to-b from-transparent",
                    isDark ? "to-azure-blue-950/90" : "to-background/90"
                )}
            />

            {/* Content */}
            <div className="relative z-10 flex max-w-6xl flex-col items-center gap-6">
                {/* Badge */}
                <div className="border-azure-blue-400/30 bg-azure-blue-400/10 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md">
                    <span className="bg-azure-blue-400 h-2 w-2 animate-pulse rounded-full shadow-[0_0_8px_rgba(46,157,247,0.6)]" />
                    <TypographyLabel className="text-azure-blue-400 text-[10px] font-medium tracking-widest uppercase">
                        {badge}
                    </TypographyLabel>
                </div>

                {/* Title */}
                <TypographyH1 className="text-foreground">{title}</TypographyH1>

                {/* Description with subtle blue gradient if it's a string */}
                <TypographyBody className="max-w-4xl text-balance text-secondary-foreground">
                    {typeof description === "string" ? (
                        <span className="via-secondary-foreground bg-linear-to-br from-secondary-foreground to-secondary-foreground bg-clip-text">
                            {description}
                        </span>
                    ) : (
                        description
                    )}
                </TypographyBody>
            </div>
        </div>
    );
};

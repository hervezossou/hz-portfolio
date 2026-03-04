"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/components/lib/utils";
import Image from "next/image";

interface AboutImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function AboutImage({ src, alt, className }: AboutImageProps) {
    const [imgLoaded, setImgLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && imgRef.current) {
                    const img = imgRef.current;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) observer.observe(imgRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div
            className={cn("relative h-full w-full overflow-hidden", className)}
        >
            {/* Shimmer / Placeholder */}
            <div
                className={cn(
                    "absolute inset-0 z-10 bg-slate-900 transition-opacity duration-1000",
                    imgLoaded ? "pointer-events-none opacity-0" : "opacity-100"
                )}
            >
                {/* Custom Shimmer effect */}
                <div className="animate-shimmer absolute inset-0 bg-linear-to-r from-transparent via-white/3 to-transparent bg-size-[200%_100%]" />

                {/* Silhouette avatar fallback */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="h-16 w-16 rounded-full border border-white/10 bg-white/5" />
                    <div className="h-3.5 w-32 rounded-lg bg-white/5" />
                    <div className="h-2.5 w-24 rounded-lg bg-white/3" />
                </div>
            </div>

            {/* Actual Image */}
            <Image
                ref={imgRef}
                src={src}
                alt={alt}
                width={512}
                height={512}
                onLoad={() => setImgLoaded(true)}
                className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-all duration-500",
                    imgLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
                )}
            />

            {/* Overlays / Gradients */}
            <div className="absolute inset-0 z-20 hidden bg-linear-to-r from-transparent via-transparent to-slate-950/80 md:block" />
            <div className="absolute inset-0 z-20 block bg-linear-to-b from-transparent via-transparent to-slate-950/80 md:hidden" />
        </div>
    );
}

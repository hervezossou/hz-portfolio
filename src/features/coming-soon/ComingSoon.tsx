"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const ComingSoon = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="selection:bg-primary relative flex min-h-screen flex-col overflow-hidden bg-slate-900 text-slate-100 selection:text-white">
            {/* Background Accent Gradient - decorative only, no layout impact */}
            <div className="bg-primary pointer-events-none absolute top-[-10%] left-[-10%] h-[45%] w-[45%] animate-pulse rounded-full opacity-[0.05] blur-[120px]"></div>
            <div className="bg-primary pointer-events-none absolute right-[-10%] bottom-[-10%] h-[45%] w-[45%] animate-pulse rounded-full opacity-[0.05] blur-[120px]"></div>

            {/* Main Content - flex-1 centers it vertically in remaining space */}
            <main
                className={`mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-8 text-center transition-all duration-1000 ease-out sm:px-12 lg:py-12 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
                {/* Name / Brand */}
                <div className="mb-12">
                    <span className="text-primary font-rethink-sans mb-3 block text-xs font-medium tracking-[0.25em] uppercase sm:text-sm">
                        Hervé Zossou
                    </span>
                    <div className="bg-primary/40 mx-auto h-px w-10"></div>
                </div>

                {/* Heading */}
                <h1 className="font-sora mb-8 text-2xl leading-[1.1] font-semibold tracking-tight md:text-4xl lg:text-[3.5rem]">
                    I&apos;m a Frontend Engineer <br />
                    <span className="font-rethink-sans leading-tight font-normal tracking-tight italic opacity-40">
                        specialized in React & Next.js
                    </span>
                </h1>

                {/* Business Pitch */}
                <p className="font-rethink-sans mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light text-slate-400 md:text-xl lg:text-2xl">
                    I design and build{" "}
                    <span className="font-normal text-white">fast</span>,
                    <span className="font-normal text-white"> scalable</span>,
                    and
                    <span className="font-normal text-white">
                        {" "}
                        conversion-focused
                    </span>{" "}
                    websites & applications.
                </p>

                {/* Status Badge */}
                <div className="mb-12 flex items-center justify-center gap-3">
                    <span className="relative flex h-2 w-2">
                        <span className="bg-primary/40 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                        <span className="bg-primary relative inline-flex h-2 w-2 rounded-full"></span>
                    </span>
                    <p className="text-primary/80 font-rethink-sans text-xs font-medium tracking-[0.2em] uppercase">
                        Full portfolio launching soon
                    </p>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                    <Link
                        href="mailto:contact@hervezossou.com"
                        className="group border-primary/30 text-primary relative inline-flex items-center gap-3 overflow-hidden rounded-lg border bg-transparent px-12 py-4 transition-all duration-500 hover:text-white"
                    >
                        <div className="bg-primary absolute inset-0 -z-10 w-0 transition-all duration-500 ease-in-out group-hover:w-full"></div>
                        <span className="font-medium tracking-wide">
                            Get in touch
                        </span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>
            </main>

            {/* Footer - natural bottom via flex column, no fixed/absolute */}
            <footer
                className={`w-full py-4 text-center transition-opacity delay-700 duration-1000 lg:py-8 ${isVisible ? "opacity-30" : "opacity-0"}`}
            >
                <p className="font-sans text-[10px] font-light tracking-[0.4em] uppercase">
                    © {new Date().getFullYear()} Hervé Zossou. Indie Developer.
                </p>
            </footer>
        </div>
    );
};

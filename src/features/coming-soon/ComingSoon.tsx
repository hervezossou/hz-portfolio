"use client";

import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const ComingSoon = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 0);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative min-h-screen bg-slate-900 text-slate-100 selection:bg-primary selection:text-white flex flex-col overflow-hidden">

            {/* Background Accent Gradient - decorative only, no layout impact */}
            <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-primary opacity-[0.05] blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-primary opacity-[0.05] blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

            {/* Main Content - flex-1 centers it vertically in remaining space */}
            <main
                className={`flex-1 flex flex-col items-center justify-center text-center px-6 sm:px-12 py-8 lg:py-12 max-w-4xl mx-auto w-full transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
                {/* Name / Brand */}
                <div className="mb-12">
                    <span className="text-primary font-sans font-medium tracking-[0.25em] uppercase text-xs sm:text-sm block mb-3">
                        Hervé Zossou
                    </span>
                    <div className="w-10 h-px bg-primary/40 mx-auto"></div>
                </div>

                {/* Heading */}
                <h1 className="text-2xl font-sora md:text-4xl lg:text-[3.5rem] font-semibold tracking-tight mb-8 leading-[1.1]">
                    I&apos;m a Frontend Engineer <br />
                    <span className="opacity-40 italic font-sans font-normal leading-tight tracking-tight">specialized in React & Next.js</span>
                </h1>

                {/* Business Pitch */}
                <p className="text-lg md:text-xl lg:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 font-sans font-light leading-relaxed">
                    I design and build <span className="text-white font-normal">fast</span>,
                    <span className="text-white font-normal"> scalable</span>, and
                    <span className="text-white font-normal"> conversion-focused</span> websites & applications.
                </p>

                {/* Status Badge */}
                <div className="flex items-center justify-center gap-3 mb-12">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <p className="text-xs text-primary/80 uppercase tracking-[0.2em] font-medium font-sans">
                        Full portfolio launching soon
                    </p>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                    <Link
                        href="mailto:contact@hervezossou.com"
                        className="group relative inline-flex items-center gap-3 px-12 py-4 bg-transparent border border-primary/30 text-primary hover:text-white transition-all duration-500 overflow-hidden rounded-lg"
                    >
                        <div className="absolute inset-0 w-0 bg-primary transition-all duration-500 ease-in-out group-hover:w-full -z-10"></div>
                        <span className="font-medium tracking-wide">Get in touch</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>
            </main>

            {/* Footer - natural bottom via flex column, no fixed/absolute */}
            <footer
                className={`w-full text-center py-4 transition-opacity duration-1000 delay-700 ${isVisible ? 'opacity-30' : 'opacity-0'}`}
            >
                <p className="text-[10px] uppercase tracking-[0.4em] font-light font-sans">
                    © {new Date().getFullYear()} Hervé Zossou — Digital Excellence
                </p>
            </footer>
        </div>
    );
};
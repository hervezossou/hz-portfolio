"use client";

import { useState, useEffect } from "react";
import { cn } from "@/components/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/ui/nav-link";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, Cancel01Icon, Mail01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Accueil", href: "/" },
        { label: "Projets", href: "/works" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "py-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
                        : "py-6 bg-transparent"
                )}
            >
                <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 bg-slate-900/40 px-6 py-2 rounded-full border border-white/5 backdrop-blur-md">
                        {navItems.map((item) => (
                            <NavLink key={item.label} href={item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Link href="/contact">
                            <Button
                                className="bg-azure-blue-600 hover:bg-azure-blue-500 text-white rounded-2xl px-7 py-4 h-auto text-sm font-medium transition-all shadow-lg shadow-azure-blue-500/20 cursor-pointer"
                            >
                                <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={2} />
                                Prendre contact
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="outline"
                        className="md:hidden p-2 text-slate-300 hover:text-azure-blue-600 transition-colors cursor-pointer"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <HugeiconsIcon icon={isMobileMenuOpen ? Cancel01Icon : Menu01Icon} size={24} />
                    </Button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-slate-950 px-8 pt-32 md:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-2xl font-sora font-medium text-slate-300 hover:text-azure-blue-600 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="mt-10">
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full max-w-xs mx-auto bg-azure-blue-600 py-6 text-lg rounded-2xl cursor-pointer">
                                        <HugeiconsIcon icon={Mail01Icon} size={20} strokeWidth={2} />
                                        Prendre contact
                                    </Button>
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

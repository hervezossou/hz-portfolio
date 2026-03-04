"use client";

import { useState, useEffect } from "react";
import { cn } from "@/components/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/ui/nav-link";
import { Button } from "@/components/ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Menu01Icon,
    Cancel01Icon,
    Mail01Icon,
} from "@hugeicons/core-free-icons";
import Link from "next/link";
import { TypographyBody } from "@/components/ui/typography";

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
        { label: "À propos", href: "/about" },
        { label: "Projets", href: "/works" },
        { label: "Contact", href: "/contact" },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
                    isScrolled
                        ? "border-b border-white/5 bg-slate-950/80 py-6 shadow-2xl shadow-black/20 backdrop-blur-xl"
                        : "bg-transparent py-6"
                )}
            >
                <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8">
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-8 rounded-full border border-slate-50/20 bg-slate-900/40 px-6 py-2 backdrop-blur-md md:flex">
                        {navItems.map((item) => (
                            <NavLink key={item.label} href={item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:block">
                        <Link href="/contact">
                            <Button className="bg-azure-blue-600 hover:bg-azure-blue-500 shadow-azure-blue-500/20 h-auto cursor-pointer rounded-2xl px-7 py-4 text-sm font-medium text-white shadow-lg transition-all">
                                <HugeiconsIcon
                                    icon={Mail01Icon}
                                    size={24}
                                    strokeWidth={2}
                                />
                                <TypographyBody>Prendre contact</TypographyBody>
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="outline"
                        className="hover:text-azure-blue-600 cursor-pointer p-2 text-slate-300 transition-colors md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <HugeiconsIcon
                            icon={isMobileMenuOpen ? Cancel01Icon : Menu01Icon}
                            size={24}
                        />
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
                                    className="font-sora hover:text-azure-blue-600 text-2xl font-medium text-slate-300 transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="mt-10">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Button className="bg-azure-blue-600 mx-auto w-full max-w-xs cursor-pointer rounded-2xl py-6 text-lg">
                                        <HugeiconsIcon
                                            icon={Mail01Icon}
                                            size={20}
                                            strokeWidth={2}
                                        />
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

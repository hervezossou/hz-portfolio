"use client";

import { useState, useEffect } from "react";
import { cn } from "@/components/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "@/components/ui/logo";
import { NavLink } from "@/components/ui/nav-link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
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
                        ? "border-b border-border/50 bg-background/80 py-6 shadow-lg shadow-foreground/5 backdrop-blur-xl"
                        : "bg-transparent py-6"
                )}
            >
                <div className="mx-auto flex max-w-[1440px] items-center justify-between px-8">
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-6 rounded-full border border-border/50 bg-muted/50 px-4 py-2 backdrop-blur-md lg:flex">
                        {navItems.map((item) => (
                            <NavLink key={item.label} href={item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-4 lg:flex">
                        <ThemeToggle />
                        <Button
                            asChild
                            variant="default"
                            size="lg"
                        >
                            <Link href="/contact">
                                <HugeiconsIcon
                                    icon={Mail01Icon}
                                    size={24}
                                    strokeWidth={2}
                                />
                                <TypographyBody>Prendre contact</TypographyBody>
                            </Link>
                        </Button>
                    </div>
                    <Button
                        variant="outline"
                        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                        className="hover:text-azure-blue-600 cursor-pointer p-2 text-foreground rounded-2xl transition-colors lg:hidden"
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
                        className="fixed inset-0 z-40 bg-background px-8 pt-32 lg:hidden"
                    >
                        <nav className="flex flex-col gap-6 text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="font-sora hover:text-azure-blue-600 text-2xl font-medium text-foreground transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="mt-8 flex items-center justify-center gap-4">
                                <ThemeToggle />
                            </div>
                            <div className="mt-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="mx-auto w-full max-w-xs"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <HugeiconsIcon
                                            icon={Mail01Icon}
                                            size={20}
                                            strokeWidth={2}
                                        />
                                        Prendre contact
                                    </Link>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

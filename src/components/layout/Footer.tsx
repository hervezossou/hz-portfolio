"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
    GithubIcon,
    Linkedin01Icon,
    NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { TypographyBody } from "@/components/ui/typography";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";

import { cn } from "@/components/lib/utils";

interface FooterProps {
    variant?: "primary" | "secondary";
}

export const Footer = ({ variant = "primary" }: FooterProps) => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: GithubIcon,
            href: "https://github.com/hervezossou",
            label: "GitHub",
        },
        {
            icon: Linkedin01Icon,
            href: "https://linkedin.com/in/hervezossou",
            label: "LinkedIn",
        },
        {
            icon: NewTwitterIcon,
            href: "https://twitter.com/hervezossou",
            label: "Twitter",
        },
    ];

    return (
        <footer className={cn(
            "footer-container py-12 px-6 md:px-12 mt-auto border-t border-white/5",
            variant === "primary" ? "bg-slate-950" : "bg-slate-900"
        )}>
            <div className="max-w-6xl mx-auto flex flex-col gap-10">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Logo Side */}
                    <Logo />

                    {/* Socials Side */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-azure-blue-500/5 rounded-2xl border border-white/5 text-gray-400 hover:text-white hover:border-azure-blue-400/30 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition-all duration-300"
                                aria-label={social.label}
                            >
                                <HugeiconsIcon
                                    icon={social.icon}
                                    size={20}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

                {/* Bottom Section */}
                <div className="text-center">
                    <TypographyBody className="text-gray-500 font-medium tracking-widest text-xs uppercase">
                        © {currentYear} HERVÉ ZOSSOU. INDIE DEVELOPER
                    </TypographyBody>
                </div>
            </div>
        </footer>
    );
};

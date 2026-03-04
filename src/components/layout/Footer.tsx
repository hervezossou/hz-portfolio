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
        <footer
            className={cn(
                "footer-container mt-auto border-t border-white/5 px-6 py-12 md:px-12",
                variant === "primary" ? "bg-slate-900" : "bg-slate-800"
            )}
        >
            <div className="mx-auto flex max-w-6xl flex-col gap-10">
                {/* Top Section */}
                <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
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
                                className="bg-azure-blue-500/5 hover:border-azure-blue-400/30 rounded-2xl border border-white/5 p-3 text-gray-400 transition-all duration-300 hover:text-white hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)]"
                                aria-label={social.label}
                            >
                                <HugeiconsIcon icon={social.icon} size={20} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Divider Line */}
                <div className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                {/* Bottom Section */}
                <div className="text-center">
                    <TypographyBody className="text-xs font-medium tracking-widest text-gray-400 uppercase">
                        © {currentYear} HERVÉ ZOSSOU. INDIE DEVELOPER
                    </TypographyBody>
                </div>
            </div>
        </footer>
    );
};

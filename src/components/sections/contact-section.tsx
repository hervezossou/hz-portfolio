"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
    Mail01Icon,
    SentIcon,
    Linkedin01Icon,
    ArrowUpRight01Icon,
    Copy01Icon,
    CheckmarkBadge02Icon,
    WhatsappBusinessIcon,
    NewTwitterIcon,
} from "@hugeicons/core-free-icons";
import { cn } from "@/components/lib/utils";
import { BentoCard } from "@/components/ui/bento-card";
import {
    TypographyH3,
    TypographyBody,
    TypographyLabel,
} from "@/components/ui/typography";
import { copyToClipboard, openInNewTab } from "@/components/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

interface ContactSectionProps {
    variant?: "primary" | "secondary" | "accent";
}

export const ContactSection = ({ variant = "accent" }: ContactSectionProps) => {
    const [copied, setCopied] = useState(false);
    const emailAddress = "hervezossou@outlook.com";

    const handleCopyEmail = async () => {
        const success = await copyToClipboard(emailAddress);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleOpenWhatsApp = () => openInNewTab("https://wa.me/22967357646");
    const handleOpenLinkedIn = () =>
        openInNewTab("https://linkedin.com/in/hervezossou");
    const handleOpenTwitter = () =>
        openInNewTab("https://twitter.com/hervezossou");

    return (
        <section
            className={cn(
                "py-20 outline-none md:py-32",
                variant === "primary"
                    ? "bg-slate-950"
                    : variant === "secondary"
                        ? "bg-slate-900"
                        : "bg-azure-blue-900"
            )}
        >
            <div className="mx-auto max-w-6xl px-6">
                {/* Bento Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Main Card (Large) */}
                    <BentoCard className="flex min-h-[320px] flex-col justify-between bg-linear-to-br from-[#111827] via-[#111827] to-[#1e293b] md:col-span-2">
                        <div>
                            <TypographyH3 className="mb-4 leading-tight text-slate-200">
                                Construisons ensemble <br />
                                <span className="from-azure-blue-600 to-azure-blue-300 bg-linear-to-r bg-clip-text text-transparent">
                                    quelque chose de grand.
                                </span>
                            </TypographyH3>
                            <TypographyBody className="max-w-md text-slate-200">
                                Disponible pour des projets ambitieux, du
                                consulting ou simplement pour échanger sur le
                                développement.
                            </TypographyBody>
                        </div>

                        <div className="mt-8">
                            <Link
                                href={`mailto:${emailAddress}`}
                                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition-colors hover:bg-gray-200"
                            >
                                <HugeiconsIcon
                                    icon={SentIcon}
                                    size={18}
                                    strokeWidth={1.5}
                                />
                                <span>Envoyez-moi un email</span>
                            </Link>
                        </div>
                    </BentoCard>

                    {/* Email Card */}
                    <BentoCard
                        delay={0.1}
                        className="flex flex-col gap-6 justify-between"
                    >
                        <div className="flex items-start justify-between">
                            <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-400">
                                <HugeiconsIcon icon={Mail01Icon} size={24} />
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleCopyEmail}
                                className="relative flex items-center justify-center p-4 text-gray-500 transition-colors cursor-pointer hover:bg-azure-blue-500/20 hover:text-white"
                                title="Copier l'adresse"
                            >
                                <AnimatePresence mode="wait">
                                    {copied ? (
                                        <motion.div
                                            key="check"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                        >
                                            <HugeiconsIcon
                                                icon={CheckmarkBadge02Icon}
                                                size={20}
                                                className="text-green-400"
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="copy"
                                            initial={{ scale: 0.5, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.5, opacity: 0 }}
                                        >
                                            <HugeiconsIcon
                                                icon={Copy01Icon}
                                                size={24}
                                                className="text-slate-300"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </Button>
                        </div>
                        <div>
                            <TypographyLabel className="mb-1 block tracking-wider text-slate-300 uppercase">
                                Email
                            </TypographyLabel>
                            <TypographyBody className="text-xl font-medium break-all text-slate-100">
                                {emailAddress}
                            </TypographyBody>
                        </div>
                    </BentoCard>

                    {/* WhatsApp Card */}
                    <BentoCard
                        delay={0.2}
                        className="group flex cursor-pointer flex-col justify-between gap-6"
                        onClick={handleOpenWhatsApp}
                    >
                        <div className="flex items-start justify-between">
                            <div className="rounded-2xl bg-green-500/10 p-3 text-green-400">
                                <HugeiconsIcon
                                    icon={WhatsappBusinessIcon}
                                    size={24}
                                />
                            </div>
                            <HugeiconsIcon
                                icon={ArrowUpRight01Icon}
                                size={20}
                                className="text-gray-600 transition-colors group-hover:text-white"
                            />
                        </div>
                        <div>
                            <TypographyLabel className="mb-1 block tracking-wider text-slate-300 uppercase">
                                WhatsApp
                            </TypographyLabel>
                            <TypographyBody className="text-xl font-medium text-slate-100">
                                +229 01 67 35 76 46
                            </TypographyBody>
                            <span className="mt-2 inline-block rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                                Disponible en semaine, 9h-18h
                            </span>
                        </div>
                    </BentoCard>

                    {/* LinkedIn Card */}
                    <BentoCard
                        delay={0.3}
                        className="group flex cursor-pointer flex-col justify-between gap-6"
                        onClick={handleOpenLinkedIn}
                    >
                        <div className="flex items-start justify-between">
                            <div className="text-azure-blue-600 rounded-2xl bg-blue-600/10 p-3">
                                <HugeiconsIcon
                                    icon={Linkedin01Icon}
                                    size={24}
                                />
                            </div>
                            <HugeiconsIcon
                                icon={ArrowUpRight01Icon}
                                size={20}
                                className="text-gray-600 transition-colors group-hover:text-white"
                            />
                        </div>
                        <div>
                            <TypographyLabel className="mb-1 block tracking-wider text-slate-300 uppercase">
                                LinkedIn
                            </TypographyLabel>
                            <TypographyBody className="text-xl font-medium text-slate-100">
                                Actualités Pro
                            </TypographyBody>
                            <TypographyLabel className="mt-1 block text-slate-300">
                                Networking & réseau
                            </TypographyLabel>
                        </div>
                    </BentoCard>

                    {/* Twitter / X Card */}
                    <BentoCard
                        delay={0.4}
                        className="group flex cursor-pointer flex-col justify-between gap-6"
                        onClick={handleOpenTwitter}
                    >
                        <div className="flex items-start justify-between">
                            <div className="rounded-2xl bg-gray-400/10 p-3 text-gray-300">
                                <HugeiconsIcon
                                    icon={NewTwitterIcon}
                                    size={24}
                                />
                            </div>
                            <HugeiconsIcon
                                icon={ArrowUpRight01Icon}
                                size={20}
                                className="text-gray-600 transition-colors group-hover:text-white"
                            />
                        </div>
                        <div>
                            <TypographyLabel className="mb-1 block tracking-wider text-slate-300 uppercase">
                                Twitter / X
                            </TypographyLabel>
                            <TypographyBody className="text-xl font-medium text-slate-100">
                                Tech & Projets
                            </TypographyBody>
                            <TypographyLabel className="mt-1 block text-slate-300">
                                Veille et partages
                            </TypographyLabel>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
};

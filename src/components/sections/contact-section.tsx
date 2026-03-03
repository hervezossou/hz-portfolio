"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HugeiconsIcon } from '@hugeicons/react'
import {
    Mail01Icon,
    SentIcon,
    Linkedin01Icon,
    ArrowUpRight01Icon,
    Copy01Icon,
    CheckListIcon,
    WhatsappBusinessIcon,
    NewTwitterIcon
} from "@hugeicons/core-free-icons";
import { BentoCard } from "@/components/ui/bento-card";
import {
    TypographyH3,
    TypographyBody,
    TypographyLabel,
} from "@/components/ui/typography";
import { copyToClipboard } from "@/components/lib/utils";

export const ContactSection = () => {
    const [copied, setCopied] = useState(false);
    const emailAddress = "hello@indiedev.com";

    const handleCopyEmail = async () => {
        const success = await copyToClipboard(emailAddress);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <section className="bg-azure-blue-950 py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-6">
                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Main Card (Large) */}
                    <BentoCard className="md:col-span-2 flex flex-col justify-between min-h-[320px] bg-linear-to-br from-[#111827] via-[#111827] to-[#1e293b]">
                        <div>
                            <TypographyH3 className="mb-4 leading-tight">
                                Construisons ensemble <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-400">
                                    quelque chose de grand.
                                </span>
                            </TypographyH3>
                            <TypographyBody className="text-gray-400 max-w-md">
                                Disponible pour des projets ambitieux, du
                                consulting ou simplement pour échanger sur le
                                développement.
                            </TypographyBody>
                        </div>

                        <div className="mt-8">
                            <a
                                href={`mailto:${emailAddress}`}
                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                            >
                                <HugeiconsIcon
                                    icon={SentIcon}
                                    size={18}
                                    strokeWidth={1.5}
                                />
                                <span>Envoyez-moi un email</span>
                            </a>
                        </div>
                    </BentoCard>

                    {/* Email Card */}
                    <BentoCard delay={0.1} className="flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400">
                                <HugeiconsIcon icon={Mail01Icon} size={24} />
                            </div>
                            <button
                                onClick={handleCopyEmail}
                                className="text-gray-500 hover:text-white hover:cursor-pointer transition-colors relative"
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
                                                icon={CheckListIcon}
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
                                                size={20}
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                        <div>
                            <TypographyLabel className="text-gray-500 uppercase tracking-wider mb-1 block">
                                Email
                            </TypographyLabel>
                            <TypographyBody className="text-xl font-medium break-all">
                                {emailAddress}
                            </TypographyBody>
                        </div>
                    </BentoCard>

                    {/* WhatsApp Card */}
                    <BentoCard
                        delay={0.2}
                        className="flex flex-col justify-between group cursor-pointer gap-6"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-green-500/10 rounded-2xl text-green-400">
                                <HugeiconsIcon icon={WhatsappBusinessIcon} size={24} />
                            </div>
                            <HugeiconsIcon
                                icon={ArrowUpRight01Icon}
                                size={20}
                                className="text-gray-600 group-hover:text-white transition-colors"
                            />
                        </div>
                        <div>
                            <TypographyLabel className="text-gray-500 uppercase tracking-wider mb-1 block">
                                WhatsApp
                            </TypographyLabel>
                            <TypographyBody className="text-xl font-medium">
                                +33 6 00 00 00 00
                            </TypographyBody>
                            <span className="inline-block mt-2 px-3 py-1 bg-green-500/10 text-green-500 text-xs rounded-full font-medium">
                                Le moyen le plus rapide
                            </span>
                        </div>
                    </BentoCard>

                    {/* LinkedIn Card */}
                    <BentoCard
                        delay={0.3}
                        className="flex flex-col justify-between group cursor-pointer gap-6"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-blue-600/10 rounded-2xl text-blue-600">
                                <HugeiconsIcon icon={Linkedin01Icon} size={24} />
                            </div>
                            <HugeiconsIcon
                                icon={ArrowUpRight01Icon}
                                size={20}
                                className="text-gray-600 group-hover:text-white transition-colors"
                            />
                        </div>
                        <div>
                            <TypographyLabel className="text-gray-500 uppercase tracking-wider mb-1 block">
                                LinkedIn
                            </TypographyLabel>
                            <TypographyBody className="text-xl font-medium">
                                Actualités Pro
                            </TypographyBody>
                            <TypographyLabel className="text-gray-500 mt-1 block">
                                Networking & réseau
                            </TypographyLabel>
                        </div>
                    </BentoCard>

                    {/* Twitter / X Card */}
                    <BentoCard
                        delay={0.4}
                        className="flex flex-col justify-between group cursor-pointer gap-6"
                    >
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-gray-400/10 rounded-2xl text-gray-300">
                                <HugeiconsIcon icon={NewTwitterIcon} size={24} />
                            </div>
                            <HugeiconsIcon
                                icon={ArrowUpRight01Icon}
                                size={20}
                                className="text-gray-600 group-hover:text-white transition-colors"
                            />
                        </div>
                        <div>
                            <TypographyLabel className="text-gray-500 uppercase tracking-wider mb-1 block">
                                Twitter / X
                            </TypographyLabel>
                            <TypographyBody className="text-xl font-medium">
                                Tech & Projets
                            </TypographyBody>
                            <TypographyLabel className="text-gray-500 mt-1 block">
                                Veille et partages
                            </TypographyLabel>
                        </div>
                    </BentoCard>
                </div>

            </div>
        </section>
    );
};

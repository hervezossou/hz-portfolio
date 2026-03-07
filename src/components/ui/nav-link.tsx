"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/lib/utils";
import { motion } from "motion/react";
import { TypographyBody } from "./typography";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export function NavLink({ href, children, onClick }: NavLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            onClick={onClick}
            className={cn(
                "relative px-1 py-2 text-sm font-medium transition-colors duration-300",
                isActive ? "text-azure-blue-400" : "text-muted-foreground hover:text-azure-blue-400"
            )}
        >
            <TypographyBody>{children}</TypographyBody>
            {isActive && (
                <motion.div
                    layoutId="nav-underline"
                    className="bg-azure-blue-500 absolute right-0 bottom-0 left-0 h-px"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
            )}
        </Link>
    );
}

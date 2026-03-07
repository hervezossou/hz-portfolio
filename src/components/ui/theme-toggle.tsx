"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Sun01Icon, Moon01Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/components/lib/utils";

function useMounted() {
    return useSyncExternalStore(
        () => () => { },
        () => true,
        () => false
    );
}

export function ThemeToggle({ className }: { className?: string }) {
    const { theme, setTheme } = useTheme();
    const mounted = useMounted();

    if (!mounted) {
        return (
            <div className={cn("w-10 h-10 rounded-full", className)} />
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn(
                "relative cursor-pointer flex items-center justify-center rounded-2xl border border-border/50 p-4 bg-azure-blue-500/5 hover:border-azure-blue-400/30 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] backdrop-blur-sm transition-colors",
                className
            )}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
            <HugeiconsIcon
                icon={isDark ? Moon01Icon : Sun01Icon}
                size={20}
                strokeWidth={2}
            />
        </button>
    );
}

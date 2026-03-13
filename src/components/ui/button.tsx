import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/components/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-2xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default:
                    "bg-primary-600 text-white hover:bg-primary-700",
                destructive:
                    "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline:
                    "border border-slate-300 bg-slate-50 text-slate-900 hover:border-slate-400 hover:bg-slate-100 dark:border-white/30 dark:bg-transparent dark:text-white dark:hover:border-white/50 dark:hover:bg-white/5",
                secondary:
                    "bg-primary-600 text-white hover:bg-primary-700",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-11 px-6 has-[>svg]:px-5",
                xs: "h-8 gap-1.5 px-3 text-xs has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-3",
                sm: "h-9 gap-2 px-4 has-[>svg]:px-3.5",
                lg: "h-14 px-10 text-base has-[>svg]:px-8",
                icon: "size-11",
                "icon-xs":
                    "size-8 [&_svg:not([class*='size-'])]:size-3",
                "icon-sm": "size-9",
                "icon-lg": "size-14",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot.Root : "button";

    return (
        <Comp
            data-slot="button"
            data-variant={variant}
            data-size={size}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };

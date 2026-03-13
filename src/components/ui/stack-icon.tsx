import React from "react";
import { cn } from "@/components/lib/utils";

interface StackIconProps {
    children: React.ReactNode;
    className?: string;
    isLarge?: boolean;
    color?: string;
}

export function StackIcon({
    children,
    className,
    isLarge,
    color,
}: StackIconProps) {
    const size = isLarge ? 56 : 44;

    const clonedIcon = React.isValidElement(children)
        ? React.cloneElement(
              children as React.ReactElement<{
                  color?: string;
                  size?: number | string;
                  className?: string;
              }>,
              {
                  size: size,
                  ...(color && { color: color }),
              }
          )
        : children;

    return (
        <div
            className={cn(
                "flex items-center justify-start transition-all duration-350",
                isLarge ? "h-14 w-14" : "h-11 w-11",
                className
            )}
        >
            {clonedIcon}
        </div>
    );
}

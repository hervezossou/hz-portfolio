"use client";

import { useState } from "react";
import { ProcessItem } from "@/components/molecules/process-item";
import { PROCESS_STEPS } from "@/constants/process";

export function ProcessList() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <ul className="flex w-full flex-col">
            {PROCESS_STEPS.map((step, index) => (
                <ProcessItem
                    key={step.number}
                    {...step}
                    isActive={activeStep === index}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                />
            ))}
        </ul>
    );
}

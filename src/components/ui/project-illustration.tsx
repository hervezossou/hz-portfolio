"use client";

interface ProjectIllustrationProps {
    shape: "circle" | "grid" | "lines" | "cross";
    accent: string;
}

export function ProjectIllustration({
    shape,
    accent,
}: ProjectIllustrationProps) {
    const s = { width: "100%", height: "100%", display: "block" };

    if (shape === "circle")
        return (
            <svg viewBox="0 0 400 300" style={s}>
                <defs>
                    <radialGradient id="g1" cx="50%" cy="50%">
                        <stop
                            offset="0%"
                            stopColor={accent}
                            stopOpacity="0.3"
                        />
                        <stop
                            offset="100%"
                            stopColor={accent}
                            stopOpacity="0"
                        />
                    </radialGradient>
                </defs>
                <circle cx="200" cy="150" r="140" fill="url(#g1)" />
                <circle
                    cx="200"
                    cy="150"
                    r="100"
                    fill="none"
                    stroke={accent}
                    strokeWidth="0.7"
                    strokeOpacity="0.25"
                />
                <circle
                    cx="200"
                    cy="150"
                    r="60"
                    fill="none"
                    stroke={accent}
                    strokeWidth="0.7"
                    strokeOpacity="0.4"
                />
                <circle
                    cx="200"
                    cy="150"
                    r="22"
                    fill={accent}
                    fillOpacity="0.65"
                />
                <circle
                    cx="312"
                    cy="58"
                    r="7"
                    fill={accent}
                    fillOpacity="0.35"
                />
                <circle
                    cx="82"
                    cy="242"
                    r="5"
                    fill={accent}
                    fillOpacity="0.25"
                />
                <line
                    x1="200"
                    y1="150"
                    x2="312"
                    y2="58"
                    stroke={accent}
                    strokeWidth="0.5"
                    strokeOpacity="0.18"
                />
                <line
                    x1="200"
                    y1="150"
                    x2="82"
                    y2="242"
                    stroke={accent}
                    strokeWidth="0.5"
                    strokeOpacity="0.12"
                />
            </svg>
        );

    if (shape === "grid")
        return (
            <svg viewBox="0 0 400 300" style={s}>
                <defs>
                    <radialGradient id="g2" cx="50%" cy="50%">
                        <stop
                            offset="0%"
                            stopColor={accent}
                            stopOpacity="0.18"
                        />
                        <stop
                            offset="100%"
                            stopColor={accent}
                            stopOpacity="0"
                        />
                    </radialGradient>
                </defs>
                <rect x="0" y="0" width="400" height="300" fill="url(#g2)" />
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <line
                        key={`v${i}`}
                        x1={i * 50}
                        y1="0"
                        x2={i * 50}
                        y2="300"
                        stroke={accent}
                        strokeWidth="0.5"
                        strokeOpacity="0.15"
                    />
                ))}
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <line
                        key={`h${i}`}
                        x1="0"
                        y1={i * 50}
                        x2="400"
                        y2={i * 50}
                        stroke={accent}
                        strokeWidth="0.5"
                        strokeOpacity="0.15"
                    />
                ))}
                <rect
                    x="120"
                    y="70"
                    width="160"
                    height="160"
                    fill="none"
                    stroke={accent}
                    strokeWidth="1.5"
                    strokeOpacity="0.45"
                />
                <rect
                    x="152"
                    y="102"
                    width="96"
                    height="96"
                    fill={accent}
                    fillOpacity="0.12"
                    stroke={accent}
                    strokeWidth="1"
                    strokeOpacity="0.55"
                />
                <rect
                    x="184"
                    y="134"
                    width="32"
                    height="32"
                    fill={accent}
                    fillOpacity="0.55"
                />
            </svg>
        );

    if (shape === "lines")
        return (
            <svg viewBox="0 0 400 300" style={s}>
                <defs>
                    <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
                        <stop
                            offset="0%"
                            stopColor={accent}
                            stopOpacity="0.2"
                        />
                        <stop
                            offset="100%"
                            stopColor={accent}
                            stopOpacity="0.02"
                        />
                    </linearGradient>
                </defs>
                {[...Array(13)].map((_, i) => (
                    <line
                        key={i}
                        x1="0"
                        y1={23 * i}
                        x2="400"
                        y2={23 * i + 75}
                        stroke={accent}
                        strokeWidth={i === 6 ? "2" : "0.7"}
                        strokeOpacity={i === 6 ? "0.55" : "0.13"}
                    />
                ))}
                <ellipse
                    cx="200"
                    cy="150"
                    rx="85"
                    ry="58"
                    fill="url(#g3)"
                    stroke={accent}
                    strokeWidth="1"
                    strokeOpacity="0.38"
                />
                <circle
                    cx="200"
                    cy="150"
                    r="12"
                    fill={accent}
                    fillOpacity="0.75"
                />
            </svg>
        );

    return (
        <svg viewBox="0 0 400 300" style={s}>
            <defs>
                <radialGradient id="g4" cx="50%" cy="50%">
                    <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
                    <stop offset="100%" stopColor={accent} stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="200" cy="150" r="125" fill="url(#g4)" />
            <line
                x1="200"
                y1="25"
                x2="200"
                y2="275"
                stroke={accent}
                strokeWidth="0.8"
                strokeOpacity="0.35"
            />
            <line
                x1="75"
                y1="150"
                x2="325"
                y2="150"
                stroke={accent}
                strokeWidth="0.8"
                strokeOpacity="0.35"
            />
            <rect
                x="168"
                y="118"
                width="64"
                height="64"
                rx="4"
                fill="none"
                stroke={accent}
                strokeWidth="1.5"
                strokeOpacity="0.55"
            />
            <rect
                x="184"
                y="134"
                width="32"
                height="32"
                rx="2"
                fill={accent}
                fillOpacity="0.2"
            />
            {[
                [118, 78],
                [282, 78],
                [118, 222],
                [282, 222],
            ].map(([x, y], i) => (
                <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="5"
                    fill={accent}
                    fillOpacity="0.3"
                />
            ))}
        </svg>
    );
}

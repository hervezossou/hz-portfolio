import type { Metadata } from "next";
import { Sora, Rethink_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"

const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
    variable: "--font-rethink-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Hervé Zossou - Front-End Engineer",
    description: "Portfolio of Hervé Zossou - Front-End Engineer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="overflow-x-hidden overflow-y-auto">
            <body
                className={`${sora.variable} ${rethinkSans.variable} flex min-h-screen flex-col overflow-hidden bg-slate-950 antialiased`}
            >
                <Header />
                <PageWrapper>{children}</PageWrapper>
                <Footer />
                <SpeedInsights />
            </body>
        </html>
    );
}

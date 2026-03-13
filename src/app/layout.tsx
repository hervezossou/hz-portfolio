import type { Metadata } from "next";
import { Sora, Rethink_Sans } from "next/font/google";
import "@/styles/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/providers/theme-provider";

const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
    display: "swap",
});

const rethinkSans = Rethink_Sans({
    variable: "--font-rethink-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Hervé Zossou - Développeur Frontend",
    description: "Portfolio of Hervé Zossou - Développeur Frontend",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="overflow-x-hidden overflow-y-auto" data-scroll-behavior="smooth" suppressHydrationWarning>
            <body
                className={`${sora.variable} ${rethinkSans.variable} flex min-h-screen flex-col overflow-hidden bg-background antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem={true}
                    disableTransitionOnChange={false}
                >
                    <Header />
                    <PageWrapper>{children}</PageWrapper>
                    <Footer variant="secondary" />
                    <SpeedInsights />
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}

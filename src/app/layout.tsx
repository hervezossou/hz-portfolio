import type { Metadata } from "next";
import { Sora, Rethink_Sans } from "next/font/google";
import "@/styles/globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const rethinkSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
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
    <html lang="en" className="overflow-hidden">
      <body
        className={`${sora.variable} ${rethinkSans.variable} antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

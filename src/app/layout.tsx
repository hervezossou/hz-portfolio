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
        className={`${sora.variable} ${rethinkSans.variable} antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

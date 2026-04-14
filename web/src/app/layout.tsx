import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Import from google fonts wrapper
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
    title: "Lead Software Engineer | Systems Architect",
    description: "Lead Software Engineer and Systems Architect specializing in Django, React, and secure-by-design orchestrations for enterprise platforms.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://portfolio.example.com",
        title: "Lead Software Engineer | Systems Architect Portfolio",
        description: "Building secure, scalable enterprise platforms through hands-on leadership and architectural mastery.",
        siteName: "Zandro Narvaza | Lead Software Engineer",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lead Software Engineer | Systems Architect",
        description: "Enterprise platform orchestration and hands-on software engineering.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            try {
                                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                    document.documentElement.classList.add('dark');
                                } else {
                                    document.documentElement.classList.remove('dark');
                                }
                            } catch (_) {}
                        `,
                    }}
                />
            </head>
            <body
                className={cn(
                    inter.variable,
                    jetbrainsMono.variable,
                    "min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary flex flex-col transition-colors duration-300"
                )}
            >
                <ThemeProvider>
                    <Navbar />
                    <main className="flex-1">{children}</main>
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

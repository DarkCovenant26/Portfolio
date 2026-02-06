import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Import from google fonts wrapper
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
    title: "Portfolio | Director of Cyber R&D",
    description: "High-frequency security architect and platform engineering leader specializing in zero-trust ecosystems and autonomous defense grids.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://portfolio.example.com",
        title: "Director of Cyber R&D | Portfolio",
        description: "Architecting high-frequency security ecosystems and intelligent defense grids.",
        siteName: "Cyber R&D Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Director of Cyber R&D | Portfolio",
        description: "Zero-trust architectures and autonomous GRC systems.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body
                className={cn(
                    inter.variable,
                    jetbrainsMono.variable,
                    "min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary flex flex-col"
                )}
            >
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
            </body>
        </html>
    );
}

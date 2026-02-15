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
    title: "Portfolio | Senior Backend & Systems Architect",
    description: "Specializing in Django, FastAPI, DevOps automation, and security-driven architectures for scalable web systems.",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://portfolio.example.com",
        title: "Senior Backend & Systems Architect | Portfolio",
        description: "Helping teams build secure, scalable backend systems and intelligent defense grids.",
        siteName: "Zandro | Systems Architect",
    },
    twitter: {
        card: "summary_large_image",
        title: "Senior Backend & Systems Architect | Portfolio",
        description: "Building secure, scalable backend architectures.",
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

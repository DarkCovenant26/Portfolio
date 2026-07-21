import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

const BASE_URL = 'https://portfolio-j24wgc3sa-zandro-narvazas-projects.vercel.app';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: "Zandro E. Narvaza | Lead Software Engineer & Systems Architect",
        template: "%s | Zandro E. Narvaza"
    },
    description: "Lead Software Engineer and Systems Architect specializing in secure-by-design orchestrations for enterprise platforms.",
    openGraph: {
        title: "Zandro E. Narvaza | Lead Software Engineer & Systems Architect",
        description: "Lead Software Engineer and Systems Architect specializing in secure-by-design orchestrations for enterprise platforms.",
        url: BASE_URL,
        siteName: "Zandro E. Narvaza Portfolio",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Zandro E. Narvaza | Lead Software Engineer",
        description: "Lead Software Engineer and Systems Architect specializing in secure-by-design orchestrations for enterprise platforms.",
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Zandro E. Narvaza",
        "jobTitle": "Director of Cyber Development | Lead Full-Stack Architect",
        "url": BASE_URL,
        "sameAs": [
            "https://linkedin.com/in/zandro-narvaza-3a2863198/",
            "https://github.com/darkcovenant26",
            "https://gitlab.cytechint.io/zandron"
        ]
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    inter.variable,
                    jetbrainsMono.variable,
                    "min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary flex"
                )}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    <Sidebar />
                    <div className="flex-1 flex flex-col md:pl-64 min-h-screen w-full transition-all duration-300 ease-in-out">
                        <TopBar />
                        <main className="flex-1 overflow-x-hidden p-4 md:p-6">
                            {children}
                        </main>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}

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

export const metadata: Metadata = {
    title: "Lead Software Engineer | Systems Architect",
    description: "Lead Software Engineer and Systems Architect specializing in secure-by-design orchestrations for enterprise platforms.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    inter.variable,
                    jetbrainsMono.variable,
                    "min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary/20 selection:text-primary flex"
                )}
            >
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

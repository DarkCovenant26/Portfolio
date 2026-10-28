import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/Sidebar";
import { TopBar } from "@/components/layout/TopBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { cvData } from "@/data/cv-data";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
});

// Pages set their own title, canonical URL and share card through pageMetadata();
// the canonical is deliberately not set here, or every page would inherit "/"
export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: SITE_TITLE,
        template: `%s | ${SITE_NAME}`
    },
    description: SITE_DESCRIPTION,
    openGraph: {
        siteName: SITE_NAME,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
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
    const { personal, experience, education } = cvData;
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": personal.name,
        "jobTitle": experience[0].title,
        "url": SITE_URL,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Cagayan de Oro City",
            "addressCountry": "PH"
        },
        "worksFor": {
            "@type": "Organization",
            "name": experience[0].company
        },
        "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": education[0].institution
        },
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "Lead Auditor - ISO/IEC 27001:2022 (ISMS)",
            "recognizedBy": { "@type": "Organization", "name": "SIS CERT." }
        },
        "knowsAbout": [
            "Cyber Security",
            "Governance, Risk and Compliance (GRC)",
            "Attack Surface Management",
            "Event-Driven Architecture",
            "Multi-Tenant SaaS",
            "Django",
            "FastAPI",
            "Next.js",
            "Kubernetes"
        ],
        "sameAs": [personal.linkedin, personal.github, personal.gitlab]
            .filter(Boolean)
            .map((profile) => `https://${profile}`)
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

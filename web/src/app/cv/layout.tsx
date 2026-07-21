import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Curriculum Vitae",
    description: "View and download the CV of Zandro E. Narvaza, Lead Software Engineer and Systems Architect.",
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

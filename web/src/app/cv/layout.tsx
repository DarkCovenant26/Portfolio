import { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
    title: "Curriculum Vitae",
    description: "View and download the CV of Zandro E. Narvaza, Director of Cyber R&D and full-stack architect, in executive, developer and DevOps versions.",
    path: "/cv",
});

export default function CVLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

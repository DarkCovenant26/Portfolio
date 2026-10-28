import { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
    title: "Projects & Architecture",
    description: "Case studies by Zandro E. Narvaza: a cross-edition event fabric, attack surface management, GRC certification workflows, multi-tenant platforms and personal projects.",
    path: "/projects",
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

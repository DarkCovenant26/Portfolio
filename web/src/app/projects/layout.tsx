import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects & Architecture",
    description: "Explore enterprise platforms, system orchestrations, and technical problem-solving by Zandro E. Narvaza.",
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

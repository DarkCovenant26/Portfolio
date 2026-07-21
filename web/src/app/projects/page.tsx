"use client";

import { useState } from "react";
import { caseStudies, CaseStudy } from "@/data/case-studies";
import { CaseStudyHeader } from "@/components/work/CaseStudyHeader";
import { CaseStudyContent } from "@/components/work/CaseStudyContent";
import { TechnicalDeepDive } from "@/components/work/TechnicalDeepDive";
import { ProjectListPanel } from "@/components/projects/ProjectListPanel";

const featuredStudies = caseStudies.filter((s) => s.featured !== false);

export default function ProjectsPage() {
    const [selected, setSelected] = useState<CaseStudy>(featuredStudies[0]);

    return (
        <div className="w-full h-full flex flex-col gap-0 animate-fade-in-up">
            {/* Page header */}
            <div className="flex flex-col gap-1 border-b border-border pb-4 mb-6 shrink-0">
                <h1 className="text-2xl font-bold tracking-tight">Projects & Architecture</h1>
                <p className="text-sm text-muted-foreground">
                    Enterprise platforms, system orchestrations, and technical problem-solving.
                </p>
            </div>

            {/* Two-panel layout */}
            <div className="flex gap-4 min-h-0 flex-1">
                {/* Left: project selector */}
                <ProjectListPanel
                    studies={featuredStudies}
                    selected={selected}
                    onSelect={setSelected}
                />

                {/* Right: inline case study detail */}
                <div className="flex-1 min-w-0 overflow-y-auto space-y-6 pb-8 pr-1">
                    <CaseStudyHeader study={selected} showBackLink={false} />
                    <CaseStudyContent study={selected} />
                    {selected.technicalDeepDive && (
                        <TechnicalDeepDive data={selected.technicalDeepDive} />
                    )}
                </div>
            </div>
        </div>
    );
}

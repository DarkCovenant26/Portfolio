"use client";

import { CaseStudy } from "@/data/case-studies";
import { type LucideIcon, Cpu, Database, Server, ShieldCheck, GitBranch, Layers } from "lucide-react";

const CATEGORY_ICONS: Record<string, LucideIcon> = {
    Orchestration: GitBranch,
    Infrastructure: Server,
    Backend: Database,
    "R&D": Cpu,
    SaaS: Layers,
};


interface ProjectListPanelProps {
    studies: CaseStudy[];
    selected: CaseStudy;
    onSelect: (study: CaseStudy) => void;
}

export function ProjectListPanel({ studies, selected, onSelect }: ProjectListPanelProps) {
    return (
        <div className="w-64 shrink-0 flex flex-col gap-1.5 overflow-y-auto pb-8">
            {studies.map((study) => {
                const isActive = study.slug === selected.slug;
                const Icon = CATEGORY_ICONS[study.category ?? ""] ?? ShieldCheck;

                return (
                    <button
                        key={study.slug}
                        onClick={() => onSelect(study)}
                        className={`
                            w-full text-left px-3 py-3 rounded-lg border transition-all duration-200 group
                            ${isActive
                                ? "bg-primary/10 border-primary/40 shadow-sm"
                                : "widget-card hover:border-primary/30 hover:bg-primary/5"
                            }
                        `}
                    >
                        <div className="flex items-start gap-2.5">
                            <div className={`mt-0.5 shrink-0 ${isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition-colors`}>
                                <Icon size={14} />
                            </div>
                            <div className="flex flex-col gap-1 min-w-0">
                                <span className={`text-xs font-semibold leading-snug truncate ${isActive ? "text-primary" : "text-foreground"}`}>
                                    {study.title}
                                </span>
                                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted text-muted-foreground w-fit">
                                    {study.category}
                                </span>
                            </div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}

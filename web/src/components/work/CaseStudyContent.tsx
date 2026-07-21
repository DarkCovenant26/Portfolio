"use client";

import { motion } from "framer-motion";
import { CaseStudy } from "@/data/case-studies";
import { Terminal, Shield, Zap, Target } from "lucide-react";

export const CaseStudyContent = ({ study }: { study: CaseStudy }) => {
    const sections = [
        {
            id: "mission",
            title: "The Mission",
            icon: <Target className="w-5 h-5 text-primary" />,
            content: study.sections.mission,
        },
        {
            id: "architecture",
            title: "The Architecture",
            icon: <Shield className="w-5 h-5 text-primary" />,
            content: study.sections.architecture,
        },
        {
            id: "execution",
            title: "The Execution",
            icon: <Terminal className="w-5 h-5 text-primary" />,
            content: study.sections.execution,
        },
        {
            id: "baseline",
            title: "The Baseline",
            icon: <Zap className="w-5 h-5 text-primary" />,
            content: study.sections.baseline,
        },
    ];

    return (
        <div className="flex flex-col gap-4">
            {/* Technologies Used */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="widget-card p-5"
            >
                <h3 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                    <span className="w-6 h-px bg-primary/50" />
                    Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 bg-muted/50 border border-border/40 text-foreground rounded-md text-xs font-medium hover:border-primary/40 hover:text-primary transition-all duration-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Dossier Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sections.map((section, index) => (
                    <motion.div
                        key={section.id}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className="widget-card p-5 flex flex-col gap-3"
                    >
                        <div className="flex items-center gap-2.5">
                            <div className="p-1.5 bg-primary/10 rounded-md border border-primary/20">
                                {section.icon}
                            </div>
                            <h2 className="text-sm font-bold uppercase tracking-wide text-foreground">
                                {section.title}
                            </h2>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {section.content}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};


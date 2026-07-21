"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { CaseStudy } from "@/data/case-studies";
import { Badge } from "@/components/ui/badge";

interface CaseStudyHeaderProps {
    study: CaseStudy;
    backHref?: string;
    backLabel?: string;
    showBackLink?: boolean;
}

export const CaseStudyHeader = ({
    study,
    backHref = "/projects",
    backLabel = "Back to Projects",
    showBackLink = true,
}: CaseStudyHeaderProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-3 border-b border-border pb-5"
        >
            {showBackLink && (
                <Link
                    href={backHref}
                    className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors text-xs font-medium group w-fit"
                >
                    <ArrowLeft className="w-3.5 h-3.5 mr-1.5 group-hover:-translate-x-0.5 transition-transform" />
                    {backLabel}
                </Link>
            )}

            <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5 font-mono text-[10px] uppercase tracking-wider">
                    {study.clientType}
                </Badge>
                <Badge variant="outline" className="text-muted-foreground border-border/50 font-mono text-[10px] uppercase tracking-wider">
                    {study.period}
                </Badge>
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold tracking-tight">{study.title}</h1>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">{study.description}</p>
            </div>

            <div className="inline-flex items-center w-fit gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-md font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                ROLE: {study.role.toUpperCase()}
            </div>
        </motion.div>
    );
};

"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    problem: string;
    role: string;
    solution: string;
    impact: string;
    tags: string[];
    link?: string;
    className?: string;
    image?: string;
}

export const ProjectCard = ({
    title,
    problem,
    role,
    solution,
    impact,
    tags,
    link = "#",
    className,
    image,
}: ProjectCardProps) => {
    return (
        <motion.div
            className={cn(
                "group relative overflow-hidden rounded-lg border border-card-border bg-surface-card backdrop-blur-sm p-6 transition-all duration-300 h-full flex flex-col",
                "hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary),0.15)] shadow-sm dark:shadow-none",
                className
            )}
            whileHover={{ scale: 1.01 }}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <span className="text-xs font-mono text-primary/80 border border-primary/20 px-2 py-0.5 rounded mt-1 inline-block bg-primary/5">
                        {role}
                    </span>
                </div>
                <Link
                    href={link}
                    className="p-2 rounded-md border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/60 transition-all duration-300"
                >
                    <ArrowUpRight className="h-5 w-5" />
                </Link>
            </div>

            <div className="space-y-4 flex-grow">
                <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">The Problem</h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {problem}
                    </p>
                </div>

                <div>
                    <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">The Solution</h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {solution}
                    </p>
                </div>

                <div className="bg-surface-accent p-3 rounded-md border border-primary/10">
                    <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-1 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                        Impact
                    </h4>
                    <p className="text-sm font-medium leading-relaxed">
                        {impact}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-card-border">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono rounded bg-muted text-muted-foreground border border-transparent group-hover:border-primary/30 group-hover:text-primary transition-all"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

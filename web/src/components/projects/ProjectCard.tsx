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
                "group relative overflow-hidden rounded-lg border border-white/5 bg-card backdrop-blur-sm p-6 transition-all duration-300 h-full flex flex-col",
                "hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
                className
            )}
            whileHover={{ scale: 1.01 }}
        >
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <span className="text-xs font-mono text-primary/80 border border-primary/20 px-2 py-0.5 rounded mt-1 inline-block">
                        {role}
                    </span>
                </div>
                <Link
                    href={link}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary"
                >
                    <ArrowUpRight className="h-5 w-5" />
                </Link>
            </div>

            <div className="space-y-4 flex-grow">
                <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">The Problem</h4>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                        {problem}
                    </p>
                </div>

                <div>
                    <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">The Solution</h4>
                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                        {solution}
                    </p>
                </div>

                <div className="bg-primary/5 p-3 rounded-md border border-primary/10">
                    <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-1 flex items-center">
                        <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                        Impact
                    </h4>
                    <p className="text-sm text-white font-medium leading-relaxed">
                        {impact}
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono rounded bg-white/5 text-slate-400 border border-transparent group-hover:border-primary/30 group-hover:text-primary/90 transition-all"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

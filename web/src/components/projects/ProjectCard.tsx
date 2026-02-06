"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    className?: string;
}

export const ProjectCard = ({
    title,
    description,
    tags,
    link = "#",
    className,
}: ProjectCardProps) => {
    return (
        <motion.div
            className={cn(
                "group relative overflow-hidden rounded-lg border border-white/5 bg-card backdrop-blur-sm p-6 transition-all duration-300",
                "hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]",
                className
            )}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.2 }}
        >
            {/* Grid background effect on hover */}
            <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                        {title}
                    </h3>
                    <Link
                        href={link}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary"
                    >
                        <ArrowUpRight className="h-5 w-5" />
                    </Link>
                </div>

                <p className="text-muted-foreground mb-6 font-light leading-relaxed flex-grow">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs font-mono rounded bg-white/5 text-slate-300 border border-transparent group-hover:border-primary/30 group-hover:text-primary/90 transition-all"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

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
    image?: string;
}

export const ProjectCard = ({
    title,
    description,
    tags,
    link = "#",
    className,
    image,
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
            {/* Visual Header / Fallback */}
            <div className="absolute inset-x-0 top-0 h-32 w-full overflow-hidden mask-gradient-to-b from-black to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500">
                {image ? (
                    // Placeholder for real image implementation
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
                ) : (
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 50%), linear-gradient(0deg, transparent 49%, rgba(59,130,246,0.05) 50%, transparent 51%)",
                            backgroundSize: "100% 100%, 20px 20px"
                        }}
                    />
                )}
            </div>

            <div className="relative z-10 flex flex-col h-full mt-20">
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

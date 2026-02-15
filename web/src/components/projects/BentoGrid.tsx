"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

import { projects } from "@/data/projects";

export const BentoGrid = () => {
    return (
        <section id="projects" className="container mx-auto px-4 md:px-6 py-20 relative z-10">
            <h2 className="text-3xl font-bold mb-12 border-b border-primary/20 pb-4 inline-block">
                &gt; Systems_Architected
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={cn(project.className)}
                    >
                        <ProjectCard
                            title={project.title}
                            problem={project.problem}
                            role={project.role}
                            solution={project.solution}
                            impact={project.impact}
                            tags={project.tags}
                            className="h-full"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

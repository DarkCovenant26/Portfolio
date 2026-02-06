"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

const projects = [
    {
        title: "DevSecOps Pipeline Orchestration",
        description: "Automated secure deployment workflows ensuring code integrity from commit to production with integrated secret zero-trust management.",
        tags: ["Jenkins", "GitLab CI", "Docker", "Infisical"],
        className: "md:col-span-2",
    },
    {
        title: "Hybrid Cloud Infrastructure",
        description: "Scalable, resilient architecture leveraging AWS core services and self-hosted object storage for high-availability data retention.",
        tags: ["AWS EC2", "AWS S3", "MinIO", "Nginx"],
        className: "md:col-span-1",
    },
    {
        title: "Threat Data Aggregator",
        description: "High-performance backend service for ingesting, normalizing, and caching security logs for real-time analysis.",
        tags: ["FastAPI", "PostgreSQL", "Redis", "Python"],
        className: "md:col-span-1",
    },
    {
        title: "Virtualization R&D Lab",
        description: "Self-hosted high-density virtualization environment for malware analysis and network security simulation.",
        tags: ["Proxmox", "Django Ninja", "Docker", "Bash"],
        className: "md:col-span-2",
    },
];

export const BentoGrid = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 py-20 relative z-10">
            <h2 className="text-3xl font-bold mb-12 border-b border-primary/20 pb-4 inline-block">
                &gt; Systems_Architected
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={cn(project.className)}
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            className="h-full"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

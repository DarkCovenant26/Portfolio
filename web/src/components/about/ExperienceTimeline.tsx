"use client";

import { motion } from "framer-motion";

const timelineData = [
    {
        period: "2025 - Present",
        role: "Director of Cyber Development",
        company: "CyTech Development and Operations, Inc.",
        description:
            "Directing strategic technical roadmaps and product engineering for flagship cyber security platforms. Successfully executed technical replication and white-labeling for executive partners using GitLab CI/CD and Jenkins, demonstrating high-scale infrastructure deployment capabilities and secure-by-design architecture.",
    },
    {
        period: "2023 - 2025",
        role: "Senior Manager & Head of GRC",
        company: "CyTech Development and Operations, Inc.",
        description:
            "Mentored 10 junior developers from HTML/CSS baseline to full-stack capability within 6 months through exposure-based learning. Built reusable patterns and reduced environment setup from 2 weeks to 1-3 days. Developed 3 OJTs into full-time engineers with 1 promoted to team lead.",
    },
    {
        period: "2023",
        role: "Web Developer",
        company: "CyTech Development and Operations, Inc.",
        description:
            "Developed custom, responsive web applications resulting in tailored solutions for client needs. Maintained strict version control and optimization strategies.",
    },
    {
        period: "2021 - 2023",
        role: "IT Instructor / Program Head",
        company: "STI College",
        description:
            "Built a foundation in technical mentorship, training, and process improvement. Evaluated progress and adjusted instructional strategies for optimal learning outcomes.",
    },
];

export const ExperienceTimeline = () => {
    return (
        <section className="container mx-auto px-4 md:px-6 py-20 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-12 border-b border-primary/20 pb-4 inline-block">
                        &gt; Experience_Timeline
                    </h2>

                    <div className="relative border-l border-primary/20 ml-3 md:ml-6 space-y-12 pb-8">
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute w-6 h-6 bg-background border-2 border-primary rounded-full -left-[13px] top-1 group-hover:scale-125 group-hover:bg-primary transition-all duration-300 shadow-[0_0_10px_rgba(var(--primary),0.3)]"></div>

                                <div className="flex flex-col md:flex-row md:items-baseline mb-2">
                                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {item.role}
                                    </h3>
                                    <span className="hidden md:inline-block mx-3 text-slate-500">•</span>
                                    <span className="text-secondary font-medium tracking-wide text-sm mt-1 md:mt-0">
                                        {item.period}
                                    </span>
                                </div>
                                <h4 className="text-sm text-secondary font-medium mb-4 uppercase tracking-wider">
                                    {item.company}
                                </h4>
                                <p className="text-muted-foreground leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

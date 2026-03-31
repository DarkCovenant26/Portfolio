"use client";

import { motion } from "framer-motion";

import { cvData } from "@/data/cv-data";

export const ExperienceTimeline = () => {
    // Map cvData.experience to the timeline format
    const timelineItems = cvData.experience.slice(0, 4).map(item => ({
        period: item.period,
        role: item.title,
        company: item.company,
        // Create a punchy summary from the first 2-3 responsibilities
        description: item.responsibilities.length > 3 
            ? item.responsibilities.slice(0, 2).join(" ") + " Lead architectural initiatives including " + item.responsibilities[2].split(",")[0] + "."
            : item.responsibilities.join(" ")
    }));
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
                        {timelineItems.map((item, index) => (
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

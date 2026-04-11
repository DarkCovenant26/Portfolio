"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
    return (
        <section id="about" className="container mx-auto px-4 md:px-6 py-20 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-8 border-b border-primary/20 pb-4 inline-block">
                        &gt; About_Me
                    </h2>

                    <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                        <p>
                            I don’t just build software; I stabilize and rescue it. As a <span className="text-foreground font-medium text-primary">Director of Cyber R&D and Lead Architect</span>,
                            I specialize in transforming 'nightmare' legacy monoliths and unreferenced datasets into high-performance, <span className="text-foreground font-medium underline decoration-primary/30">Secure by Design</span> platforms.
                        </p>

                        <p>
                            My professional journey has been defined by <span className="text-secondary font-medium italic">"Trials by Fire"</span> — from manually reverse-engineering contextless SCF frameworks in weeks to assuming full-stack infrastructure ownership during critical resource transitions. I thrive in high-velocity environments where aggressive weekly delivery must coexist with rigorous architectural integrity.
                        </p>

                        <p>
                            Whether I am architecting <span className="text-foreground font-medium">physically isolated multi-tenant clusters</span> or engineering AI-augmented Pandas pipelines, my approach is always pragmatic, battle-tested, and rooted in <span className="text-primary font-medium">Extreme Ownership</span>. I bridge the gap between ambiguous stakeholder visions and rigid mathematical certainty.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

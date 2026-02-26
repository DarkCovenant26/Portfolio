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

                    <div className="space-y-6 text-lg text-slate-300 font-light leading-relaxed">
                        <p>
                            I’m a <span className="text-white font-medium">senior full-stack engineer and systems architect</span> with
                            experience building compliance, risk management, and high-performance backend systems.
                            I bridge the gap between complex technical requirements and scalable business solutions.
                        </p>

                        <p>
                            I enjoy solving <span className="text-secondary font-medium">complex architectural problems</span>,
                            optimizing backend workflows, and designing systems that are secure, scalable, and maintainable.
                            My focus is always on writing clean, robust code that stands the test of time.
                        </p>

                        <p>
                            I thrive in environments where <span className="text-primary font-medium">backend reliability and strong DevOps foundations</span> are
                            valued — from startups to enterprise SaaS teams. If you value security by design and
                            intuitive user experiences, we'll get along great.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

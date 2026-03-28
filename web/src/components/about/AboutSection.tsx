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
                            I’m a <span className="text-foreground font-medium">Director of Cyber Development and Lead Full-Stack Architect</span> with
                            a proven track record in building secure-by-design compliance platforms, high-performance distributed systems, and white-label SaaS ecosystems.
                        </p>

                        <p>
                            I enjoy solving <span className="text-secondary font-medium">complex architectural problems</span>,
                            optimizing backend workflows, and designing systems that are secure, scalable, and maintainable.
                            My focus is always on writing clean, robust code that stands the test of time.
                        </p>

                        <p>
                            I thrive in environments where <span className="text-primary font-medium">high-velocity shipping, security, and clear structure</span> are
                            valued — from startups to enterprise SaaS teams. My goal is to stay hands-on with emerging tech while
                            contributing to products through thoughtful technical decision-making.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

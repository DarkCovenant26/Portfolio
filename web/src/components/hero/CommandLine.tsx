"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const CommandLine = () => {
    const [text, setText] = useState("");
    const fullText = "> system_status: ONLINE // mode: READY";
    const controls = useAnimation();

    useEffect(() => {
        const typeText = async () => {
            await controls.start({ opacity: 1 });
            for (let i = 0; i <= fullText.length; i++) {
                setText(fullText.slice(0, i));
                await new Promise((resolve) => setTimeout(resolve, 50)); // Typing speed
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
            // Optional: Fade out or keep static
            // await controls.start({ opacity: 0.5 });
        };

        typeText();
    }, [controls]);

    return (
        <motion.div
            className="font-mono text-sm text-primary/70 mb-4 h-6 flex items-center"
            initial={{ opacity: 0 }}
            animate={controls}
        >
            {text}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-primary ml-1"
            />
        </motion.div>
    );
};

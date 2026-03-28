"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative h-9 w-9 flex items-center justify-center rounded-md border border-card-border hover:bg-muted transition-colors"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    {theme === "light" ? (
                        <Sun className="h-4 w-4 text-foreground" />
                    ) : (
                        <Moon className="h-4 w-4 text-foreground" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}

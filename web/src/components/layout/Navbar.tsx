"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navItems = [
    { name: "Architecture", href: "/work" },
    { name: "Philosophy", href: "/philosophy" },
    { name: "About", href: "/about" },
    { name: "CV", href: "/cv" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const isCVPage = pathname === "/cv";

    if (isCVPage) return null;

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-card-border bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/20">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                    <span className="font-mono font-bold tracking-tight text-lg text-foreground">
                        ARCHITECT.
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary relative group",
                                pathname === item.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                            {pathname === item.href && (
                                <motion.div
                                    layoutId="navbar-indicator"
                                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Button variant="cyber" size="sm" asChild>
                            <Link href="mailto:zandro.narvaza@gmail.com">Contact</Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        className="p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-16 left-0 right-0 border-b border-card-border bg-background/95 backdrop-blur-xl p-4"
                    >
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-base font-medium transition-colors hover:text-primary",
                                        pathname === item.href
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button variant="cyber" className="w-full" asChild>
                                <Link href="mailto:zandro.narvaza@gmail.com">Contact</Link>
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

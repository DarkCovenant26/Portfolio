"use client";

import { Wifi, Activity, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background/80 backdrop-blur-md py-4 fixed bottom-0 left-0 right-0 z-50 md:sticky md:bottom-auto">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">

                {/* Left: System Identity */}
                <div className="flex items-center gap-4 text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    <span className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        SYSTEM.OPERATIONAL
                    </span>
                    <span className="hidden md:inline text-white/10">|</span>
                    <span className="hover:text-primary transition-colors cursor-default">
                        VER_2.5.0
                    </span>
                </div>

                {/* Center: Social Links (Call to Action) */}
                <div className="flex items-center gap-6">
                    <SocialLink href="https://github.com/DarkCovenant26" icon={Github} label="GITHUB" />
                    <SocialLink href="https://linkedin.com/in/zandro-narvaza-3a2863198/" icon={Linkedin} label="LINKEDIN" />
                    <SocialLink href="mailto:contact@example.com" icon={Mail} label="EMAIL" />
                </div>

                {/* Right: Metrics */}
                <div className="hidden md:flex items-center gap-4 text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">
                    <div className="flex items-center gap-2 min-w-[80px]">
                        <Activity className="h-3 w-3 text-primary" />
                        <span>Latency: 24ms</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Wifi className="h-3 w-3 text-primary" />
                        <span>Uplink: SECURE</span>
                    </div>
                </div>
            </div>

            {/* Visual bottom line */}
            <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full opacity-50" />
        </footer>
    );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-muted-foreground transition-all duration-300 hover:text-white"
        >
            <div className="relative p-2 rounded-md bg-white/5 border border-white/5 group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                <Icon className="h-4 w-4 group-hover:text-primary transition-colors" />
            </div>
            <span className="sr-only md:not-sr-only text-[10px] font-mono opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 -ml-2 group-hover:ml-0">
                {label}
            </span>
        </Link>
    )
}

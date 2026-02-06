"use client";

import { Wifi, Activity, Globe, Disc } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/5 bg-background/80 backdrop-blur-md py-2 fixed bottom-0 left-0 right-0 z-50 md:sticky md:bottom-auto">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">

                {/* Left: System Identity */}
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        SYSTEM.OPERATIONAL
                    </span>
                    <span className="hidden md:inline text-white/10">|</span>
                    <span className="hover:text-primary transition-colors cursor-default">
                        VER_2.4.0
                    </span>
                </div>

                {/* Center: Location / Role */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Globe className="h-3 w-3" />
                        <span>CDO, PH</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Disc className="h-3 w-3" />
                        <span>Core_Logic: ACTIVE</span>
                    </div>
                </div>

                {/* Right: Metrics */}
                <div className="flex items-center gap-4">
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

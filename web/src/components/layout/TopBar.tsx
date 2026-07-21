"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Command, Github, Linkedin, Menu, X, LayoutDashboard, Briefcase, Code2, Layers, Mail, Terminal, Cpu } from "lucide-react";
import { cvData } from "@/data/cv-data";
import { CommandPalette } from "@/components/CommandPalette";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const mobileNavItems = [
  { href: "/", icon: <LayoutDashboard size={18} />, label: "Overview" },
  { href: "/experience", icon: <Briefcase size={18} />, label: "Experience" },
  { href: "/projects", icon: <Code2 size={18} />, label: "Projects" },
  { href: "/stack", icon: <Cpu size={18} />, label: "Stack" },
  { href: "/services", icon: <Layers size={18} />, label: "Services" },
  { href: "/uses", icon: <Terminal size={18} />, label: "Setup" },
  { href: "/contact", icon: <Mail size={18} />, label: "Contact" },
];

export function TopBar() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="topbar">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="topbar-icon-btn md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <div className="topbar-breadcrumbs">
            <span className="topbar-breadcrumb-link">Home</span>
            <span className="mx-2 text-border">/</span>
            <span className="text-foreground font-medium text-gradient-primary">Overview</span>
          </div>
        </div>

        <div className="topbar-search-container">
          <Button variant="outline" className="topbar-search-btn group" onClick={() => setIsCommandOpen(true)}>
            <span className="flex items-center gap-2">
              <Command className="topbar-search-icon" />
              <span>Search portfolio...</span>
            </span>
            <kbd className="topbar-search-kbd">
              <span className="text-xs">⌘</span>K
            </kbd>
          </Button>
        </div>

        <div className="topbar-actions">
          <ThemeToggle />
          <Button variant="ghost" size="icon" asChild className="topbar-icon-btn">
            <a href={`https://${cvData.personal.github}`} target="_blank" rel="noreferrer">
              <Github className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="topbar-icon-btn">
            <a href={`https://${cvData.personal.linkedin}`} target="_blank" rel="noreferrer">
              <Linkedin className="w-4 h-4" />
            </a>
          </Button>
          <Button className="btn-hire-me" asChild>
            <Link href="/contact">
              Hire Me
            </Link>
          </Button>
        </div>
        
        <CommandPalette isOpen={isCommandOpen} setIsOpen={setIsCommandOpen} />
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="fixed inset-y-0 left-0 z-50 w-3/4 max-w-sm border-r border-border/40 bg-background/95 backdrop-blur-xl p-6 shadow-xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-bold text-lg tracking-tight">Navigation</span>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
                {mobileNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3 rounded-md text-sm font-medium transition-colors",
                        isActive 
                          ? "bg-primary/10 text-primary shadow-[inset_2px_0_0_0_hsl(var(--primary))]" 
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                    >
                      <span className={cn(isActive ? "text-primary" : "text-muted-foreground")}>
                        {item.icon}
                      </span>
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-auto pt-6 border-t border-border/40 flex flex-col gap-4">
                <Button className="w-full btn-default" asChild>
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Hire Me
                  </Link>
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Command, Github, Linkedin, Menu } from "lucide-react";
import { cvData } from "@/data/cv-data";
import { CommandPalette } from "@/components/CommandPalette";
import Link from "next/link";

export function TopBar() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="flex items-center gap-4">
        {/* Mobile menu trigger could go here */}
        <Button variant="ghost" size="icon" className="topbar-icon-btn md:hidden">
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
  );
}

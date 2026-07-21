"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Home, FileText, Briefcase, Mail, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CommandPalette({ isOpen, setIsOpen }: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const router = useRouter();

  // Handle Cmd+K global shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setIsOpen]);

  // Handle Esc to close
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [isOpen, setIsOpen]);

  const closePalette = () => {
    setIsOpen(false);
    setSearch("");
  };

  const navigateTo = (path: string) => {
    router.push(path);
    closePalette();
  };

  const links = [
    { icon: <Home className="w-4 h-4" />, label: "Home / Overview", path: "/" },
    { icon: <FileText className="w-4 h-4" />, label: "Curriculum Vitae (CV)", path: "/cv" },
    { icon: <Briefcase className="w-4 h-4" />, label: "Projects", path: "/#projects" },
    { icon: <Mail className="w-4 h-4" />, label: "Contact", path: "/#contact" },
  ];

  const filteredLinks = links.filter((link) =>
    link.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
            onClick={closePalette}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed left-[50%] top-[20%] z-[101] w-[95%] max-w-lg translate-x-[-50%] overflow-hidden rounded-xl border border-border bg-card shadow-2xl"
          >
            <div className="flex items-center border-b border-border px-4 py-3">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <input
                autoFocus
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground text-foreground"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={closePalette} className="text-muted-foreground hover:text-foreground p-1 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[300px] overflow-y-auto p-2">
              {filteredLinks.length === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </div>
              ) : (
                <div className="flex flex-col gap-1">
                  <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">Navigation</div>
                  {filteredLinks.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => navigateTo(link.path)}
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground hover:bg-primary/10 hover:text-primary text-left transition-colors"
                    >
                      {link.icon}
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

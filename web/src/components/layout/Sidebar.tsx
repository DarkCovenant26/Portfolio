"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, Code2, Layers, Mail, Terminal, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="sidebar">
      <div className="sidebar-header flex justify-center items-center py-2">
        <div className="flex h-10 px-6 items-center justify-center rounded-full bg-primary/10 border border-primary/30 text-primary font-black text-sm tracking-widest shadow-[0_0_15px_hsl(var(--primary)/0.15)] relative overflow-hidden group cursor-default">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span>Z</span>
          <span className="mx-2 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/1)]" />
          <span>E</span>
          <span className="mx-2 w-1 h-1 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/1)]" />
          <span>N</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        <SidebarLink href="/" icon={<LayoutDashboard size={18} />} label="Overview" pathname={pathname} />
        <SidebarLink href="/experience" icon={<Briefcase size={18} />} label="Experience" pathname={pathname} />
        <SidebarLink href="/projects" icon={<Code2 size={18} />} label="Projects" pathname={pathname} />
        <SidebarLink href="/stack" icon={<Cpu size={18} />} label="Stack" pathname={pathname} />
        <SidebarLink href="/services" icon={<Layers size={18} />} label="Services" pathname={pathname} />
        <SidebarLink href="/uses" icon={<Terminal size={18} />} label="Setup" pathname={pathname} />
        <SidebarLink href="/contact" icon={<Mail size={18} />} label="Contact" pathname={pathname} />
      </nav>
      <div className="sidebar-footer">
        <div className="sidebar-footer-text">
          Enterprise Architect
        </div>
      </div>
    </aside>
  );
}

function SidebarLink({ href, icon, label, pathname }: { href: string; icon: React.ReactNode; label: string, pathname: string }) {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn("sidebar-link group", isActive && "sidebar-link-active")}
    >
      <span className="sidebar-link-content">
        <span className={cn("sidebar-link-icon", isActive && "sidebar-link-icon-active")}>
          {icon}
        </span>
        {label}
      </span>
      {isActive && (
        <span className="sidebar-link-bg" />
      )}
    </Link>
  );
}

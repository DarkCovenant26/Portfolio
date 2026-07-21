"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Briefcase, Code2, Layers, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span className="font-bold text-lg tracking-tight text-foreground">Z. Narvaza</span>
      </div>
      <nav className="sidebar-nav">
        <SidebarLink href="/" icon={<LayoutDashboard size={18} />} label="Overview" pathname={pathname} />
        <SidebarLink href="/experience" icon={<Briefcase size={18} />} label="Experience" pathname={pathname} />
        <SidebarLink href="/projects" icon={<Code2 size={18} />} label="Projects" pathname={pathname} />
        <SidebarLink href="/services" icon={<Layers size={18} />} label="Services" pathname={pathname} />
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

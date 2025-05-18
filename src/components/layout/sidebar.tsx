"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  LineChart,
  Database,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  BarChartBig,
  Newspaper,
  Briefcase,
  Wrench,
  Puzzle,
  FileText,
  MessageSquare,
  Tv2,
  HelpCircle,
  AccessibilityIcon as Accessibility,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: "Home", href: "/home", icon: Home },
    { name: "New recs", href: "/new-recs", icon: Sparkles },
    { name: "Rankings", href: "/rankings", icon: BarChartBig },
    { name: "My Stocks", href: "/mystocks", icon: LineChart },
    { name: "Coverage", href: "/coverage", icon: Newspaper },
    { name: "My Services", href: "/my-services", icon: Briefcase },
    { name: "Databases", href: "/databases/moneyball", icon: Database },
    { name: "Toolkit", href: "/toolkit", icon: Wrench },
    { name: "GamePlan+", href: "/gameplan-plus", icon: Puzzle },
    { name: "My Reports", href: "/my-reports", icon: FileText },
    { name: "Discuss", href: "/discuss", icon: MessageSquare },
    { name: "Fool24", href: "/fool24", icon: Tv2 },
    { name: "Help", href: "/help", icon: HelpCircle },
    { name: "Accessibility", href: "/accessibility", icon: Accessibility },
  ];

  return (
    <div
      className={cn(
        "h-screen bg-blue-950 text-white flex flex-col transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-48"
      )}
    >
      {/* Top section */}
      <div className="flex items-center justify-between h-16 px-4">
        <div
          className={cn(
            "text-xl font-semibold text-white transition-opacity duration-200",
            isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"
          )}
        >
          Full One
        </div>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col flex-1 space-y-1 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || 
                          (item.href.includes("/databases") && pathname.includes("/databases"));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center py-2 rounded-md hover:bg-white/10 transition-colors group",
                isCollapsed ? "justify-center" : "px-3",
                isActive ? "bg-black/20 font-medium" : ""
              )}
              title={isCollapsed ? item.name : undefined}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 transition-opacity",
                  isActive ? "text-white opacity-100" : "text-white opacity-60"
                )}
              />
              {!isCollapsed && (
                <span className="ml-2 text-sm transition-all">{item.name}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer/Profile */}
      <div className="p-4 mt-auto">
        <div className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white text-sm font-bold">
          N
        </div>
      </div>
    </div>
  );
}

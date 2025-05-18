"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import {
  DollarSign,
  Bitcoin,
  Microscope,
  Brain,
} from "lucide-react";

const databases = [
  {
    id: "moneyball",
    name: "MoneyBall",
    href: "/databases/moneyball",
    icon: DollarSign,
  },
  {
    id: "cryptoball",
    name: "Cryptoball",
    href: "/databases/cryptoball",
    icon: Bitcoin,
  },
  {
    id: "microball",
    name: "Microball",
    href: "/databases/microball",
    icon: Microscope,
  },
  {
    id: "alball",
    name: "Alball",
    href: "/databases/alball",
    icon: Brain,
  },
];

export function DatabaseTabs() {
  const pathname = usePathname();
  const activeTab = databases.find((db) => pathname.includes(db.id))?.id || "moneyball";

  return (
    <Tabs value={activeTab} className="w-auto">
      <TabsList className="bg-transparent gap-2">
        {databases.map((db) => {
          const Icon = db.icon;
          const isActive = pathname.includes(db.id);

          return (
            <Link href={db.href} key={db.id}>
              <TabsTrigger
                value={db.id}
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
                  "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100",
                  "hover:bg-gray-100 dark:hover:bg-gray-800",
                  "data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-700",
                  "data-[state=active]:text-black dark:data-[state=active]:text-white",
                  isActive && "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                )}
              >
                <Icon className="w-4 h-4" />
                {db.name}
              </TabsTrigger>
            </Link>
          );
        })}
      </TabsList>
    </Tabs>
  );
}

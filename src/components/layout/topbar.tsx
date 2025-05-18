"use client";

import { usePathname } from "next/navigation";
import { SearchBar } from "@/components/ui/search-bar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DatabaseTabs } from "@/components/database/database-tabs";

export function Topbar() {
  const pathname = usePathname();

  // Render different left content based on the current path
  const renderLeftContent = () => {
    if (pathname.startsWith("/databases")) {
      return <DatabaseTabs />;
    }

    // For home and mystocks, show appropriate title
    let title = "";
    if (pathname === "/home") {
      title = "Home";
    } else if (pathname === "/mystocks") {
      title = "My Stocks";
    }

    return title ? (
      <h1 className="text-xl font-semibold">{title}</h1>
    ) : null;
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 py-3 px-6">
      <div className="flex items-center justify-between w-full">
        <div className="flex-1">
          {renderLeftContent()}
        </div>
        <div className="flex items-center">
          <SearchBar 
            className="w-80" 
            placeholder="Search for stocks or articles..."
          />
          <div className="ml-4">
            <Avatar className="h-9 w-9 bg-blue-800">
              <AvatarFallback className="bg-blue-900 text-white">NB</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}

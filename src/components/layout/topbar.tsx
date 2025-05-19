"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Search, X } from "lucide-react";
import { SearchBar } from "@/components/ui/search-bar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { DatabaseTabs } from "@/components/database/database-tabs";
import { Notifications } from "@/components/ui/notifications";

export function Topbar() {
  const pathname = usePathname();
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  // Render different left content based on the current path
  const renderLeftContent = () => {
    if (pathname.startsWith("/databases")) {
      return <DatabaseTabs />;
    }

    // For home and other pages, show appropriate title
    let title = "";
    if (pathname === "/home") {
      title = "Home";
    } else if (pathname === "/mystocks") {
      title = "My Stocks";
    } else if (pathname === "/new-recs") {
      title = "New Recs";
    } else if (pathname === "/rankings") {
      title = "Rankings";
    } else if (pathname === "/coverage") {
      title = "Coverage";
    } else if (pathname === "/my-services") {
      title = "My Services";
    } else if (pathname === "/toolkit") {
      title = "Toolkit";
    } else if (pathname === "/gameplan-plus") {
      title = "GamePlan+";
    } else if (pathname === "/my-reports") {
      title = "My Reports";
    } else if (pathname === "/discuss") {
      title = "Discuss";
    } else if (pathname === "/fool24") {
      title = "Fool24";
    } else if (pathname === "/help") {
      title = "Help";
    } else if (pathname === "/accessibility") {
      title = "Accessibility";
    }

    return title ? (
      <h1 className="text-xl font-semibold">{title}</h1>
    ) : null;
  };

  return (
    <div className="w-full bg-white border-b border-gray-200 py-3 px-6 h-16 flex items-center relative">
      <div className="flex items-center justify-between w-full">
        <div className="flex-1">
          {!showMobileSearch && renderLeftContent()}
        </div>
        <div className="flex items-center">
          {pathname !== "/databases/moneyball" && (
            <SearchBar 
              className="w-80 hidden xl:flex"
              placeholder="Search for stocks or articles..."
            />
          )}
          <button
            onClick={() => setShowMobileSearch(true)}
            className="p-2 rounded-md hover:bg-gray-100 xl:hidden"
            aria-label="Open search"
          >
            <Search className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="ml-4">
            <Notifications />
          </div>
          <div className="ml-4">
            <Avatar className="h-9 w-9 bg-blue-800">
              <AvatarFallback className="bg-blue-900 text-white">NB</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      {showMobileSearch && (
        <div className="absolute top-0 left-0 w-full h-full bg-white flex items-center px-4 z-10 xl:hidden">
          <SearchBar
            className="flex-grow"
            placeholder="Search for stocks or articles..."
          />
          <button
            onClick={() => setShowMobileSearch(false)}
            className="ml-2 p-2 rounded-md hover:bg-gray-100"
            aria-label="Close search"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      )}
    </div>
  );
}

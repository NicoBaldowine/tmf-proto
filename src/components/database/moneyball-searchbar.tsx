"use client";

import { useState } from "react";
import { Search, X, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MoneyballSearchBarProps {
  placeholder?: string;
  className?: string;
}

export function MoneyballSearchBar({ placeholder = "Company search", className }: MoneyballSearchBarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Base container classes that are always applied
  const containerClasses = cn(
    "relative",
    // Default styles
    "w-full max-w-md h-8",
    className
  );

  // For 1024px and below
  const tabletView = (
    <div className={cn(containerClasses, "hidden [@media(max-width:1024px)]:block", !isExpanded && "max-w-[40px] w-8")}>
      {!isExpanded ? (
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsExpanded(true)}
          className="w-8 h-8 p-0 border-gray-200"
        >
          <Search className="h-4 w-4 text-gray-400" />
        </Button>
      ) : (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <Input
            type="search"
            className="w-full pl-10 pr-10 bg-gray-50 h-8"
            placeholder={placeholder}
          />
          <Button
            type="button"
            size="sm"
            onClick={() => setIsExpanded(false)}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-6 px-2 text-xs hover:bg-gray-100"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </>
      )}
    </div>
  );

  // For above 1024px
  const desktopView = (
    <div className={cn(containerClasses, "hidden [@media(min-width:1025px)]:block")}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <Input
        type="search"
        className="w-full pl-10 pr-16 bg-gray-50 h-8"
        placeholder={placeholder}
      />
      <Button
        type="submit"
        size="sm"
        className="absolute right-1 top-1/2 -translate-y-1/2 h-6 px-2 text-xs bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-1"
        variant="default"
      >
        <Sparkles className="h-3 w-3" />
        Ask AI
      </Button>
    </div>
  );

  return (
    <>
      {tabletView}
      {desktopView}
    </>
  );
} 
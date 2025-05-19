"use client";

import { Search } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MoneyballSearchBarProps {
  placeholder?: string;
  className?: string;
}

export function MoneyballSearchBar({ placeholder = "Company search", className }: MoneyballSearchBarProps) {
  return (
    <div className={cn("relative w-full max-w-md h-8", className)}>
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
} 
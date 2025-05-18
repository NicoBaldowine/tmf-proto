"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  className?: string;
}

export function SearchBar({ placeholder = "Search...", className }: SearchBarProps) {
  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-4 w-4 text-gray-400" />
      </div>
      <Input
        type="search"
        className="w-full pl-10 pr-4 bg-gray-50"
        placeholder={placeholder}
      />
    </div>
  );
} 
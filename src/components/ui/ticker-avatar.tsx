"use client";

import { cn } from "@/lib/utils";

interface TickerAvatarProps {
  symbol: string;
  logoUrl?: string;
  size?: "s" | "m" | "l";
  className?: string;
}

const sizeClasses = {
  s: "w-5 h-5 text-xs",   // 20x20
  m: "w-8 h-8 text-sm",   // 32x32
  l: "w-12 h-12 text-base" // 48x48
};

export function TickerAvatar({ symbol, logoUrl, size = "m", className }: TickerAvatarProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://ui-avatars.com/api/?name=${symbol}&background=random&size=${size === "l" ? "48" : size === "m" ? "32" : "24"}&bold=true`;
  };

  return (
    <div 
      className={cn(
        "relative rounded-full border border-gray-200 overflow-hidden flex items-center justify-center bg-white",
        sizeClasses[size],
        className
      )}
    >
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${symbol} logo`}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-600 font-semibold">
          {symbol.slice(0, 2)}
        </div>
      )}
    </div>
  );
} 
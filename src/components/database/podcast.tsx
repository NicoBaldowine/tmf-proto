"use client";

import { CirclePlay } from "lucide-react";
import React from "react";

export function Podcast() {
  // Determine icon color based on props
  const iconColor = "text-gray-400";

  return (
    <div className="flex items-center group cursor-pointer transition-opacity hover:opacity-80 relative">
      <CirclePlay className={`w-5 h-5 ${iconColor}`} strokeWidth={1.3} />
    </div>
  );
} 
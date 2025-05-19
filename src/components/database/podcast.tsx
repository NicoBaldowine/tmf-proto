"use client";

import { Play } from "lucide-react";
import React from "react";

interface PodcastProps {
  listened?: boolean;
}

export function Podcast({ listened = false }: PodcastProps) {
  // Determinar el color del icono
  const iconColor = listened ? "text-gray-400" : "text-blue-500";

  return (
    <div className="flex items-center group cursor-pointer transition-opacity hover:opacity-80 relative">
      <Play className={`h-4 w-4 ${iconColor} group-hover:scale-110 transition-transform`} />
    </div>
  );
} 
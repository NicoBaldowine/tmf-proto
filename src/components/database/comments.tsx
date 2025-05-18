"use client";

import { MessageSquare } from "lucide-react";
import React from "react";

interface CommentsProps {
  count: number;
  hasNew?: boolean;
  hasReplies?: boolean;
}

export function Comments({ count, hasNew = false, hasReplies = false }: CommentsProps) {
  // Determinar el color del icono
  const iconColor = (hasNew || hasReplies) ? "text-blue-500" : "text-gray-400";
  
  // Determinar el color del badge
  let badgeColor = "bg-gray-100 text-gray-700";
  if (hasReplies) {
    badgeColor = "bg-red-500 text-white";
  } else if (hasNew) {
    badgeColor = "bg-blue-50 text-blue-800"; // Azul claro con texto azul oscuro
  }

  return (
    <div className="flex items-center group cursor-pointer transition-opacity hover:opacity-80">
      <div className="relative">
        <MessageSquare className={`h-4 w-4 ${iconColor} group-hover:scale-110 transition-transform`} />
        
        {/* Indicador de respuesta (punto rojo) */}
        {hasReplies && (
          <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
        )}
      </div>
      
      {/* Badge con número de comentarios (si hay comentarios) */}
      {count > 0 && (
        <span className={`ml-1.5 px-2 py-0.5 text-xs rounded-full ${badgeColor} group-hover:shadow-sm transition-all`}>
          {count}
        </span>
      )}
    </div>
  );
} 
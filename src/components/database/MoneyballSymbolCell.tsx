import { Checkbox } from "@/components/ui/checkbox";
import { TickerAvatar } from "@/components/ui/ticker-avatar";
import React from "react";

interface MoneyballSymbolCellProps {
  stock: any;
  zebra: "bg-white" | "bg-gray-50";
}

export function MoneyballSymbolCell({ stock, zebra }: MoneyballSymbolCellProps) {
  return (
    <div
      className={`flex items-center gap-2 pl-2 pr-3 py-0.5 w-full h-full ${zebra} sticky left-0 z-20 border-r border-gray-200`}
      style={{ minWidth: 160 }}
    >
      <Checkbox />
      <TickerAvatar symbol={stock.symbol} logoUrl={stock.logoUrl} size="s" />
      <span className="text-blue-800 font-medium cursor-pointer hover:text-blue-900 transition-colors select-text">
        {stock.symbol}
      </span>
    </div>
  );
} 
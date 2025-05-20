"use client";

import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Eye, EyeOff, X } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef } from "react";
import { CustomTooltip } from "@/components/ui/custom-tooltip";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface CustomizationItem {
  id: string;
  label: string;
  type: 'slider' | 'select';
  value: number[] | string;
  visible: boolean;
  defaultValue: number[] | string;
  options?: string[];
}

interface CustomizePanelProps {
  isOpen: boolean;
  onClose: () => void;
  onDeviationsChange?: (deviationsCount: number) => void;
}

const customizationItemsData: CustomizationItem[] = [
  { id: "ai", label: "AI", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "divYield", label: "Dividend Yield", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "financial", label: "Financial", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "gapta", label: "GAPTA", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "garp", label: "GARP", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  {
    id: "industry",
    label: "Industry",
    type: 'select',
    value: "All Industries",
    defaultValue: "All Industries",
    visible: true,
    options: ["All Industries", "Technology", "Healthcare", "Finance", "Consumer Discretionary", "Consumer Staples", "Industrials", "Energy", "Utilities", "Real Estate", "Materials", "Communication Services"]
  },
  {
    id: "investingType",
    label: "Investing Type",
    type: 'select',
    value: "All Types",
    defaultValue: "All Types",
    visible: true,
    options: ["All Types", "Growth", "Value", "Dividend", "GARP", "Deep Value", "Momentum"]
  },
  { id: "leaders", label: "Leaders", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "marketCap", label: "Market Cap", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  {
    id: "myStocks",
    label: "My Stocks",
    type: 'select',
    value: "All Portfolios",
    defaultValue: "All Portfolios",
    visible: true,
    options: ["All Portfolios", "My Growth Portfolio", "My Dividend Portfolio", "Watchlist"]
  },
  { id: "payScore", label: "PayScore", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "price", label: "Price", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "product1Y", label: "Product: 1Y", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "product5Y", label: "Product: 5Y", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "quant5Y", label: "Quant: 5Y", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "rounta", label: "ROUNTA", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "superscore", label: "Superscore", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "surge", label: "Surge", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
  { id: "tech", label: "Tech", type: 'slider', value: [0, 100], defaultValue: [0, 100], visible: true },
];

// Helper to perform a deep copy of an item's value
const deepCopyValue = (value: number[] | string): number[] | string => {
  if (Array.isArray(value)) {
    return [...value];
  }
  return value;
};

export function CustomizePanel({ isOpen, onClose, onDeviationsChange }: CustomizePanelProps) {
  const [items, setItems] = useState<CustomizationItem[]>(customizationItemsData.map(item => ({...item, value: deepCopyValue(item.value) })));
  const panelRef = useRef<HTMLDivElement>(null);

  const resetItems = () => {
    setItems(customizationItemsData.map(item => ({...item, value: deepCopyValue(item.defaultValue) })));
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If click is inside the panel, do nothing
      if (panelRef.current && panelRef.current.contains(event.target as Node)) {
        return;
      }
      // If click is inside a Radix Select dropdown, do nothing
      let node = event.target as HTMLElement | null;
      while (node) {
        if (node.hasAttribute && node.hasAttribute('data-radix-popper-content-wrapper')) {
          return;
        }
        node = node.parentElement;
      }
      onClose();
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (onDeviationsChange) {
      const deviationsCount = items.filter(item => {
        if (!item.visible) return true;
        if (item.type === 'slider' && Array.isArray(item.value) && Array.isArray(item.defaultValue)) {
          return item.value[0] !== item.defaultValue[0] || item.value[1] !== item.defaultValue[1];
        }
        if (item.type === 'select' && typeof item.value === 'string' && typeof item.defaultValue === 'string') {
          return item.value !== item.defaultValue;
        }
        return false;
      }).length;
      onDeviationsChange(deviationsCount);
    }
  }, [items, onDeviationsChange]);

  const handleSliderChange = (id: string, newValue: number[]) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.type === 'slider' ? { ...item, value: newValue } : item
      )
    );
  };

  const handleSelectChange = (id: string, newValue: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.type === 'select' ? { ...item, value: newValue } : item
      )
    );
  };

  const toggleVisibility = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, visible: !item.visible } : item
      )
    );
  };

  if (!isOpen) return null;

  return (
    <div 
      ref={panelRef}
      className={cn(
        "fixed top-0 right-0 h-full bg-white shadow-xl z-30 transition-transform duration-300 ease-in-out",
        "w-[340px]",
        isOpen ? "translate-x-0" : "translate-x-full"
    )}>
      <div className="h-full flex flex-col">
        <div className="sticky top-0 z-10 bg-white pt-4 pl-4 pr-0 pb-0 mr-4 border-b border-gray-200">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">Customize</h2>
              <Button variant="outline" size="sm" className="h-7 px-2 text-xs ml-2" onClick={resetItems}>Reset</Button>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="h-7 w-7">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex-grow overflow-y-auto pr-4 mt-0 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-transparent">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              className={cn(
                "py-1.5 pr-4",
                index < items.length - 1 && "border-b border-gray-200"
              )}
            >
              {item.type === 'slider' && (
                <>
                  <div className={cn("flex items-center justify-between h-[22px]")}>
                    <label 
                      htmlFor={item.id} 
                      className={cn(
                        "text-sm font-medium truncate",
                        item.visible ? "text-gray-700" : "text-gray-400"
                      )}
                    >
                      {item.label}
                    </label>
                    <CustomTooltip 
                      content={item.visible ? "Hide column" : "Show column"}
                      side="bottom"
                      sideOffset={0}
                    >
                      <Button variant="ghost" size="icon" onClick={() => toggleVisibility(item.id)} className="h-6 w-6 flex-shrink-0">
                        {item.visible ? <EyeOff className="h-3.5 w-3.5 text-gray-500" /> : <Eye className="h-3.5 w-3.5 text-gray-400" />}
                      </Button>
                    </CustomTooltip>
                  </div>

                  {item.visible && Array.isArray(item.value) && (
                    <div className="flex items-center gap-2 h-[18px] mt-1">
                      <span className="text-xs text-gray-500 w-8 text-left flex-shrink-0">{item.value[0]}</span>
                      <Slider
                        id={item.id}
                        defaultValue={Array.isArray(item.defaultValue) ? item.defaultValue : [0,0]}
                        value={item.value}
                        max={100}
                        step={1}
                        onValueChange={(value) => handleSliderChange(item.id, value)}
                        className={cn("flex-grow")}
                      />
                      <span className="text-xs text-gray-500 w-8 text-right flex-shrink-0">{item.value[1]}</span>
                    </div>
                  )}
                </>
              )}
              {item.type === 'select' && (
                 <div className={cn("flex items-center justify-between", item.visible ? "h-[38px]" : "h-[22px]")}>
                    <label 
                      htmlFor={item.id} 
                      className={cn(
                        "text-sm font-medium truncate flex-1",
                        item.visible ? "text-gray-700" : "text-gray-400"
                      )}
                    >
                      {item.label}
                    </label>
                    <div className="flex items-center flex-shrink-0 gap-1">
                      {item.visible && typeof item.value === 'string' && item.options && (
                          <div className="max-w-[176px] w-full">
                            <Select
                              value={item.value}
                              onValueChange={(value) => handleSelectChange(item.id, value)}
                            >
                              <SelectTrigger className="h-7 text-sm font-medium w-full focus:ring-0 focus:ring-offset-0">
                                <SelectValue placeholder="Select..." />
                              </SelectTrigger>
                              <SelectContent>
                                {item.options.map(option => (
                                  <SelectItem key={option} value={option} className="text-sm font-medium">
                                    {option}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                      )}
                      <CustomTooltip 
                        content={item.visible ? "Hide column" : "Show column"}
                        side="bottom"
                        sideOffset={0}
                      >
                        <Button variant="ghost" size="icon" onClick={() => toggleVisibility(item.id)} className="h-6 w-6 flex-shrink-0">
                          {item.visible ? <EyeOff className="h-3.5 w-3.5 text-gray-500" /> : <Eye className="h-3.5 w-3.5 text-gray-400" />}
                        </Button>
                      </CustomTooltip>
                    </div>
                  </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
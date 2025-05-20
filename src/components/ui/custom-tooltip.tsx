"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cva, type VariantProps } from "class-variance-authority"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const tooltipVariants = cva(
  "z-50 text-balance max-w-[280px] bg-gray-900 text-white shadow-md rounded-md px-2 py-1.5 text-xs",
  {
    variants: {
      variant: {
        info: "",
        discovery: "",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

export interface CustomTooltipProps extends VariantProps<typeof tooltipVariants> {
  content: React.ReactNode
  children: React.ReactNode
  className?: string
  open?: boolean
  onOpenChange?: (open: boolean) => void
  sideOffset?: number
  delayDuration?: number
  autoShow?: boolean
  showDelay?: number
  side?: "top" | "right" | "bottom" | "left"
}

export function CustomTooltip({
  content,
  children,
  variant = "info",
  className,
  open,
  onOpenChange,
  sideOffset = 4,
  delayDuration = 200,
  autoShow = false,
  showDelay = 500,
  side,
  ...props
}: CustomTooltipProps) {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = React.useState(false)
  const [hasHovered, setHasHovered] = React.useState(false)
  
  React.useEffect(() => {
    if ((variant === "discovery" || autoShow) && !isDiscoveryOpen && !hasHovered) {
      const timer = setTimeout(() => {
        setIsDiscoveryOpen(true)
      }, showDelay)
      
      return () => clearTimeout(timer)
    }
  }, [variant, autoShow, isDiscoveryOpen, showDelay, hasHovered])
  
  const handleOpenChange = (newOpen: boolean) => {
    if (variant === "discovery") {
      setIsDiscoveryOpen(newOpen)
      if (!newOpen) {
        setHasHovered(true)
      }
    }
    
    onOpenChange?.(newOpen)
  }

  const isControlled = open !== undefined
  const showTooltip = isControlled ? open : variant === "discovery" ? isDiscoveryOpen : undefined

  return (
    <Tooltip open={showTooltip} onOpenChange={handleOpenChange} delayDuration={delayDuration}>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent 
        className={cn(
          "z-50 overflow-hidden rounded-md px-3 py-1.5 text-xs shadow-md",
          "bg-gray-900 text-white",
          className
        )}
        sideOffset={sideOffset + 2}
        side={side}
        {...props}
      >
        {content}
        <TooltipPrimitive.Arrow className="fill-gray-900" />
      </TooltipContent>
    </Tooltip>
  )
} 
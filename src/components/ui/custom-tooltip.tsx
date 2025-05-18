"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const tooltipVariants = cva(
  "z-50 text-balance max-w-[280px] bg-gray-900 text-white shadow-md border border-gray-800 px-1.5 py-1",
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
  ...props
}: CustomTooltipProps) {
  const [isDiscoveryOpen, setIsDiscoveryOpen] = React.useState(false)
  const [hasHovered, setHasHovered] = React.useState(false)
  
  React.useEffect(() => {
    // Para variante discovery o cuando autoShow es true, mostrar tooltip después de un breve retraso
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
          tooltipVariants({ variant }),
          className
        )}
        sideOffset={sideOffset}
        {...props}
      >
        {content}
        <div className="absolute left-1/2 bottom-[-6px] w-3 h-3 bg-gray-900 rotate-45 -translate-x-1/2"></div>
      </TooltipContent>
    </Tooltip>
  )
} 
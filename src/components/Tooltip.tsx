import { 
  Tooltip as ChakraTooltip, 
  TooltipProps as ChakraTooltipProps,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverProps,
} from "@chakra-ui/react"
import * as React from "react"

export interface TooltipProps extends Omit<ChakraTooltipProps, 'children'> {
  children: React.ReactNode
  // Allow Popover-specific props to be passed through
  popoverProps?: Omit<PopoverProps, 'children'>
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    children,
    label,
    bg,
    color,
    fontSize,
    p,
    maxW,
    hasArrow,
    placement,
    popoverProps,
    ...tooltipProps
  } = props

  // Detect if we're on mobile (typically < 768px) - client-side only
  const [isMobile, setIsMobile] = React.useState(false)
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Check on mount
    checkMobile()
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Styling props that apply to PopoverContent
  const contentStyle = {
    bg,
    color,
    fontSize,
    p,
    maxW,
  }

  if (isMobile) {
    // On mobile, use Popover (click/tap to open)
    return (
      <Popover {...popoverProps} placement={placement}>
        <PopoverTrigger>
          {children}
        </PopoverTrigger>
        <PopoverContent {...contentStyle}>
          {hasArrow && <PopoverArrow />}
          <PopoverBody>{label}</PopoverBody>
        </PopoverContent>
      </Popover>
    )
  }

  // On desktop, use Tooltip (hover to show)
  return (
    <ChakraTooltip
      label={label}
      hasArrow={hasArrow}
      placement={placement}
      bg={bg}
      color={color}
      fontSize={fontSize}
      p={p}
      maxW={maxW}
      {...tooltipProps}
    >
      {children}
    </ChakraTooltip>
  )
}

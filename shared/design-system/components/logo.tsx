import * as React from 'react'
import { cn } from '@/lib/utils'

export type LogoAnimation =
  | 'blink'
  | 'wink-left'
  | 'wink-right'
  | 'cute'
  | 'sleep'
  | 'taller'
  | 'shorter'

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  animation?: LogoAnimation
  animationClass?: string // Keep for backward compatibility
  duration?: string // Animation duration (e.g., '2s', '3s')
  loop?: boolean // Whether to loop the animation (default: true)
  trackMouse?: boolean // Whether eyes should follow the mouse (default: false)
  eyeFollowIntensity?: number // How much the eyes move (0-1, default: 0.3)
}

const animationClassMap: Record<LogoAnimation, string> = {
  blink: 'logo-animate-blink',
  'wink-left': 'logo-animate-wink-left',
  'wink-right': 'logo-animate-wink-right',
  cute: 'logo-animate-cute',
  sleep: 'logo-animate-sleep',
  taller: 'logo-animate-taller',
  shorter: 'logo-animate-shorter',
}

const defaultDurations: Record<LogoAnimation, string> = {
  blink: '2s',
  'wink-left': '2s',
  'wink-right': '2s',
  cute: '1s',
  sleep: '4s',
  taller: '3s',
  shorter: '3s',
}

export function Logo({
  animation,
  animationClass,
  duration,
  loop = true,
  trackMouse = false,
  eyeFollowIntensity = 0.3,
  className,
  style,
  ...props
}: LogoProps) {
  const svgRef = React.useRef<SVGSVGElement>(null)
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
  const [eyeOffsets, setEyeOffsets] = React.useState({ left: { x: 0, y: 0 }, right: { x: 0, y: 0 } })

  const resolvedAnimationClass = animation
    ? animationClassMap[animation]
    : animationClass

  const resolvedDuration = duration || (animation ? defaultDurations[animation] : '2s')
  const animationStyle = {
    '--logo-animation-duration': resolvedDuration,
    '--logo-animation-iteration': loop ? 'infinite' : '1',
    ...style,
  } as React.CSSProperties

  // Mouse tracking effect
  React.useEffect(() => {
    if (!trackMouse || !svgRef.current) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!svgRef.current) return

      const rect = svgRef.current.getBoundingClientRect()
      const svgX = rect.left + rect.width / 2
      const svgY = rect.top + rect.height / 2

      // Mouse position relative to SVG center - high sensitivity for responsiveness
      const relativeX = ((e.clientX - svgX) / rect.width) * 3 // High sensitivity multiplier
      const relativeY = ((e.clientY - svgY) / rect.height) * 3 // High sensitivity multiplier

      // Calculate offsets - very small radius but super responsive
      const maxOffsetX = 1.5 * eyeFollowIntensity // Very small horizontal max movement
      const maxOffsetYUp = 2 * eyeFollowIntensity // Upward max movement
      const maxOffsetYDown = 0.5 * eyeFollowIntensity // Downward max movement (very limited to prevent going below smile)
      
      // Clamp vertical movement - allow more upward movement, less downward
      const leftEyeOffsetX = relativeX * maxOffsetX
      const leftEyeOffsetY = relativeY > 0 
        ? Math.min(relativeY * maxOffsetYDown, maxOffsetYDown) // Clamp downward movement
        : Math.max(relativeY * maxOffsetYUp, -maxOffsetYUp) // Clamp upward movement
      const rightEyeOffsetX = relativeX * maxOffsetX
      const rightEyeOffsetY = relativeY > 0 
        ? Math.min(relativeY * maxOffsetYDown, maxOffsetYDown) // Clamp downward movement
        : Math.max(relativeY * maxOffsetYUp, -maxOffsetYUp) // Clamp upward movement

      setEyeOffsets({
        left: { x: leftEyeOffsetX, y: leftEyeOffsetY },
        right: { x: rightEyeOffsetX, y: rightEyeOffsetY },
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [trackMouse, eyeFollowIntensity])

  return (
    <svg
      ref={svgRef}
      width="214"
      height="275"
      viewBox="0 0 214 275"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(resolvedAnimationClass, className)}
      style={animationStyle}
      {...props}
    >
      {/* Left Eye */}
      <g 
        id="left-eye"
        style={{
          transform: trackMouse 
            ? `translate(${eyeOffsets.left.x}px, ${eyeOffsets.left.y}px)` 
            : undefined,
          transition: trackMouse ? 'transform 0.06s cubic-bezier(0.4, 0, 0.2, 1)' : undefined,
        }}
      >
        <rect id="left-eye-0-0" x="55.5" y="0" width="6" height="6" fill="black" />
        <rect id="left-eye-1-0" x="61.5" y="0" width="6" height="6" fill="black" />
        <rect id="left-eye-2-0" x="67.5" y="0" width="6" height="6" fill="black" />
        <rect id="left-eye-3-0" x="73.5" y="0" width="6" height="6" fill="black" />
        <rect id="left-eye-4-0" x="79.5" y="0" width="6" height="6" fill="black" />
        <rect id="left-eye-0-1" x="55.5" y="6" width="6" height="6" fill="black" />
        <rect id="left-eye-1-1" x="61.5" y="6" width="6" height="6" fill="black" />
        <rect id="left-eye-2-1" x="67.5" y="6" width="6" height="6" fill="black" />
        <rect id="left-eye-3-1" x="73.5" y="6" width="6" height="6" fill="black" />
        <rect id="left-eye-4-1" x="79.5" y="6" width="6" height="6" fill="black" />
        <rect id="left-eye-0-2" x="55.5" y="12" width="6" height="6" fill="black" />
        <rect id="left-eye-1-2" x="61.5" y="12" width="6" height="6" fill="black" />
        <rect id="left-eye-2-2" x="67.5" y="12" width="6" height="6" fill="black" />
        <rect id="left-eye-3-2" x="73.5" y="12" width="6" height="6" fill="black" />
        <rect id="left-eye-4-2" x="79.5" y="12" width="6" height="6" fill="black" />
        <rect id="left-eye-0-3" x="55.5" y="18" width="6" height="6" fill="black" />
        <rect id="left-eye-1-3" x="61.5" y="18" width="6" height="6" fill="black" />
        <rect id="left-eye-2-3" x="67.5" y="18" width="6" height="6" fill="black" />
        <rect id="left-eye-3-3" x="73.5" y="18" width="6" height="6" fill="black" />
        <rect id="left-eye-4-3" x="79.5" y="18" width="6" height="6" fill="black" />
        <rect id="left-eye-0-4" x="55.5" y="24" width="6" height="6" fill="black" />
        <rect id="left-eye-1-4" x="61.5" y="24" width="6" height="6" fill="black" />
        <rect id="left-eye-2-4" x="67.5" y="24" width="6" height="6" fill="black" />
        <rect id="left-eye-3-4" x="73.5" y="24" width="6" height="6" fill="black" />
        <rect id="left-eye-4-4" x="79.5" y="24" width="6" height="6" fill="black" />
        <rect id="left-eye-0-5" x="55.5" y="30" width="6" height="6" fill="black" />
        <rect id="left-eye-1-5" x="61.5" y="30" width="6" height="6" fill="black" />
        <rect id="left-eye-2-5" x="67.5" y="30" width="6" height="6" fill="black" />
        <rect id="left-eye-3-5" x="73.5" y="30" width="6" height="6" fill="black" />
        <rect id="left-eye-4-5" x="79.5" y="30" width="6" height="6" fill="black" />
        <rect id="left-eye-0-6" x="55.5" y="36" width="6" height="6" fill="black" />
        <rect id="left-eye-1-6" x="61.5" y="36" width="6" height="6" fill="black" />
        <rect id="left-eye-2-6" x="67.5" y="36" width="6" height="6" fill="black" />
        <rect id="left-eye-3-6" x="73.5" y="36" width="6" height="6" fill="black" />
        <rect id="left-eye-4-6" x="79.5" y="36" width="6" height="6" fill="black" />
        <rect id="left-eye-0-7" x="55.5" y="42" width="6" height="6" fill="black" />
        <rect id="left-eye-1-7" x="61.5" y="42" width="6" height="6" fill="black" />
        <rect id="left-eye-2-7" x="67.5" y="42" width="6" height="6" fill="black" />
        <rect id="left-eye-3-7" x="73.5" y="42" width="6" height="6" fill="black" />
        <rect id="left-eye-4-7" x="79.5" y="42" width="6" height="6" fill="black" />
        <rect id="left-eye-0-8" x="55.5" y="48" width="6" height="2" fill="black" />
        <rect id="left-eye-1-8" x="61.5" y="48" width="6" height="2" fill="black" />
        <rect id="left-eye-2-8" x="67.5" y="48" width="6" height="2" fill="black" />
        <rect id="left-eye-3-8" x="73.5" y="48" width="6" height="2" fill="black" />
        <rect id="left-eye-4-8" x="79.5" y="48" width="6" height="2" fill="black" />
      </g>

      {/* Left Eye Wink Curve - horizontal line with square tip below */}
      <g id="left-eye-wink-curve" opacity="0">
        <rect x="55.5" y="22" width="30" height="6" fill="black" />
        <rect x="55.5" y="28" width="30" height="6" fill="black" />
        {/* Square tip at the right end, positioned below the line */}
        <rect x="75.5" y="28" width="10" height="6" fill="black" />
        <rect x="75.5" y="34" width="10" height="6" fill="black" />
      </g>

      {/* Right Eye */}
      <g 
        id="right-eye"
        style={{
          transform: trackMouse 
            ? `translate(${eyeOffsets.right.x}px, ${eyeOffsets.right.y}px)` 
            : undefined,
          transition: trackMouse ? 'transform 0.06s cubic-bezier(0.4, 0, 0.2, 1)' : undefined,
        }}
      >
        <rect id="right-eye-0-0" x="128.5" y="0" width="6" height="6" fill="black" />
        <rect id="right-eye-1-0" x="134.5" y="0" width="6" height="6" fill="black" />
        <rect id="right-eye-2-0" x="140.5" y="0" width="6" height="6" fill="black" />
        <rect id="right-eye-3-0" x="146.5" y="0" width="6" height="6" fill="black" />
        <rect id="right-eye-4-0" x="152.5" y="0" width="6" height="6" fill="black" />
        <rect id="right-eye-0-1" x="128.5" y="6" width="6" height="6" fill="black" />
        <rect id="right-eye-1-1" x="134.5" y="6" width="6" height="6" fill="black" />
        <rect id="right-eye-2-1" x="140.5" y="6" width="6" height="6" fill="black" />
        <rect id="right-eye-3-1" x="146.5" y="6" width="6" height="6" fill="black" />
        <rect id="right-eye-4-1" x="152.5" y="6" width="6" height="6" fill="black" />
        <rect id="right-eye-0-2" x="128.5" y="12" width="6" height="6" fill="black" />
        <rect id="right-eye-1-2" x="134.5" y="12" width="6" height="6" fill="black" />
        <rect id="right-eye-2-2" x="140.5" y="12" width="6" height="6" fill="black" />
        <rect id="right-eye-3-2" x="146.5" y="12" width="6" height="6" fill="black" />
        <rect id="right-eye-4-2" x="152.5" y="12" width="6" height="6" fill="black" />
        <rect id="right-eye-0-3" x="128.5" y="18" width="6" height="6" fill="black" />
        <rect id="right-eye-1-3" x="134.5" y="18" width="6" height="6" fill="black" />
        <rect id="right-eye-2-3" x="140.5" y="18" width="6" height="6" fill="black" />
        <rect id="right-eye-3-3" x="146.5" y="18" width="6" height="6" fill="black" />
        <rect id="right-eye-4-3" x="152.5" y="18" width="6" height="6" fill="black" />
        <rect id="right-eye-0-4" x="128.5" y="24" width="6" height="6" fill="black" />
        <rect id="right-eye-1-4" x="134.5" y="24" width="6" height="6" fill="black" />
        <rect id="right-eye-2-4" x="140.5" y="24" width="6" height="6" fill="black" />
        <rect id="right-eye-3-4" x="146.5" y="24" width="6" height="6" fill="black" />
        <rect id="right-eye-4-4" x="152.5" y="24" width="6" height="6" fill="black" />
        <rect id="right-eye-0-5" x="128.5" y="30" width="6" height="6" fill="black" />
        <rect id="right-eye-1-5" x="134.5" y="30" width="6" height="6" fill="black" />
        <rect id="right-eye-2-5" x="140.5" y="30" width="6" height="6" fill="black" />
        <rect id="right-eye-3-5" x="146.5" y="30" width="6" height="6" fill="black" />
        <rect id="right-eye-4-5" x="152.5" y="30" width="6" height="6" fill="black" />
        <rect id="right-eye-0-6" x="128.5" y="36" width="6" height="6" fill="black" />
        <rect id="right-eye-1-6" x="134.5" y="36" width="6" height="6" fill="black" />
        <rect id="right-eye-2-6" x="140.5" y="36" width="6" height="6" fill="black" />
        <rect id="right-eye-3-6" x="146.5" y="36" width="6" height="6" fill="black" />
        <rect id="right-eye-4-6" x="152.5" y="36" width="6" height="6" fill="black" />
        <rect id="right-eye-0-7" x="128.5" y="42" width="6" height="6" fill="black" />
        <rect id="right-eye-1-7" x="134.5" y="42" width="6" height="6" fill="black" />
        <rect id="right-eye-2-7" x="140.5" y="42" width="6" height="6" fill="black" />
        <rect id="right-eye-3-7" x="146.5" y="42" width="6" height="6" fill="black" />
        <rect id="right-eye-4-7" x="152.5" y="42" width="6" height="6" fill="black" />
        <rect id="right-eye-0-8" x="128.5" y="48" width="6" height="2" fill="black" />
        <rect id="right-eye-1-8" x="134.5" y="48" width="6" height="2" fill="black" />
        <rect id="right-eye-2-8" x="140.5" y="48" width="6" height="2" fill="black" />
        <rect id="right-eye-3-8" x="146.5" y="48" width="6" height="2" fill="black" />
        <rect id="right-eye-4-8" x="152.5" y="48" width="6" height="2" fill="black" />
      </g>

      {/* Right Eye Wink Curve - horizontal line with square tip below (flipped - tip on left) */}
      <g id="right-eye-wink-curve" opacity="0">
        <rect x="128.5" y="22" width="30" height="6" fill="black" />
        <rect x="128.5" y="28" width="30" height="6" fill="black" />
        {/* Square tip at the LEFT end, positioned below the line (flipped) */}
        <rect x="128.5" y="28" width="10" height="6" fill="black" />
        <rect x="128.5" y="34" width="10" height="6" fill="black" />
      </g>

      {/* Smile Left Edge (Yellow) */}
      <g id="smile-left-edge">
        <rect id="smile-left-edge-0-0" x="0" y="59.8" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-1-0" x="6" y="59.8" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-2-0" x="12" y="59.8" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-3-0" x="18" y="59.8" width="2" height="6" fill="black" />
        <rect id="smile-left-edge-0-1" x="0" y="65.8" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-1-1" x="6" y="65.8" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-2-1" x="12" y="65.8" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-3-1" x="18" y="65.8" width="2" height="6" fill="black" />
        <rect id="smile-left-edge-0-2" x="0" y="71.8" width="6" height="2.2" fill="black" />
        <rect id="smile-left-edge-1-2" x="6" y="71.8" width="6" height="2.2" fill="black" />
        <rect id="smile-left-edge-2-2" x="12" y="71.8" width="6" height="2.2" fill="black" />
        <rect id="smile-left-edge-3-2" x="18" y="71.8" width="2" height="2.2" fill="black" />
        <rect id="smile-left-edge-0-3" x="0" y="74" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-1-3" x="6" y="74" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-2-3" x="12" y="74" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-3-3" x="18" y="74" width="2" height="6" fill="black" />
        <rect id="smile-left-edge-0-4" x="0" y="80" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-1-4" x="6" y="80" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-2-4" x="12" y="80" width="6" height="6" fill="black" />
        <rect id="smile-left-edge-3-4" x="18" y="80" width="2" height="6" fill="black" />
      </g>

      {/* Smile Right Edge (Cyan) */}
      <g id="smile-right-edge">
        <rect id="smile-right-edge-0-0" x="194" y="59.8" width="2" height="6" fill="black" />
        <rect id="smile-right-edge-1-0" x="196" y="59.8" width="6" height="6" fill="black" />
        <rect id="smile-right-edge-2-0" x="202" y="59.8" width="6" height="6" fill="black" />
        <rect id="smile-right-edge-3-0" x="208" y="59.8" width="6" height="6" fill="black" />
        <rect id="smile-right-edge-0-1" x="194" y="65.8" width="2" height="6" fill="black" />
        <rect id="smile-right-edge-1-1" x="196" y="65.8" width="6" height="6" fill="black" />
        <rect id="smile-right-edge-2-1" x="202" y="65.8" width="6" height="6" fill="black" />
        <rect id="smile-right-edge-3-1" x="208" y="65.8" width="6" height="6" fill="black" />
        <rect id="smile-right-edge-0-2" x="194" y="71.8" width="2" height="2.2" fill="black" />
        <rect id="smile-right-edge-1-2" x="196" y="71.8" width="6" height="2.2" fill="black" />
        <rect id="smile-right-edge-2-2" x="202" y="71.8" width="6" height="2.2" fill="black" />
        <rect id="smile-right-edge-3-2" x="208" y="71.8" width="6" height="2.2" fill="black" />
        <rect id="smile-right-edge-0-3" x="194" y="74" width="2" height="6" fill="black" />
        <rect id="smile-right-edge-1-3" x="196" y="74" width="6" height="6" fill="black" />
        <rect id="smile-right-edge-2-3" x="202" y="74" width="6" height="6" fill="black" />
        <rect id="smile-right-edge-3-3" x="208" y="74" width="6" height="6" fill="black" />
        <rect id="smile-right-edge-0-4" x="194" y="80" width="2" height="6" fill="black" />
        <rect id="smile-right-edge-1-4" x="196" y="80" width="6" height="6" fill="black" />
        <rect id="smile-right-edge-2-4" x="202" y="80" width="6" height="6" fill="black" />
        <rect id="smile-right-edge-3-4" x="208" y="80" width="6" height="6" fill="black" />
      </g>

      {/* Smile Left Side (Pink) */}
      <g id="smile-left-side">
        <rect id="smile-left-side-0-0" x="20" y="74" width="6" height="6" fill="black" />
        <rect id="smile-left-side-1-0" x="26" y="74" width="6" height="6" fill="black" />
        <rect id="smile-left-side-2-0" x="32" y="74" width="6" height="6" fill="black" />
        <rect id="smile-left-side-3-0" x="38" y="74" width="6" height="6" fill="black" />
        <rect id="smile-left-side-0-1" x="20" y="80" width="6" height="6" fill="black" />
        <rect id="smile-left-side-1-1" x="26" y="80" width="6" height="6" fill="black" />
        <rect id="smile-left-side-2-1" x="32" y="80" width="6" height="6" fill="black" />
        <rect id="smile-left-side-3-1" x="38" y="80" width="6" height="6" fill="black" />
        <rect id="smile-left-side-0-2" x="20" y="86" width="6" height="4.5" fill="black" />
        <rect id="smile-left-side-1-2" x="26" y="86" width="6" height="4.5" fill="black" />
        <rect id="smile-left-side-2-2" x="32" y="86" width="6" height="4.5" fill="black" />
        <rect id="smile-left-side-3-2" x="38" y="86" width="6" height="4.5" fill="black" />
        <rect id="smile-left-side-0-3" x="20" y="90.5" width="6" height="6" fill="black" />
        <rect id="smile-left-side-1-3" x="26" y="90.5" width="6" height="6" fill="black" />
        <rect id="smile-left-side-2-3" x="32" y="90.5" width="6" height="6" fill="black" />
        <rect id="smile-left-side-3-3" x="38" y="90.5" width="6" height="6" fill="black" />
        <rect id="smile-left-side-0-4" x="20" y="96.5" width="6" height="6" fill="black" />
        <rect id="smile-left-side-1-4" x="26" y="96.5" width="6" height="6" fill="black" />
        <rect id="smile-left-side-2-4" x="32" y="96.5" width="6" height="6" fill="black" />
        <rect id="smile-left-side-3-4" x="38" y="96.5" width="6" height="6" fill="black" />
        <rect id="smile-left-side-0-5" x="20" y="102.5" width="6" height="3.7" fill="black" />
        <rect id="smile-left-side-1-5" x="26" y="102.5" width="6" height="3.7" fill="black" />
        <rect id="smile-left-side-2-5" x="32" y="102.5" width="6" height="3.7" fill="black" />
        <rect id="smile-left-side-3-5" x="38" y="102.5" width="6" height="3.7" fill="black" />
      </g>

      {/* Smile Right Side (Rose) */}
      <g id="smile-right-side">
        <rect id="smile-right-side-0-0" x="170" y="74" width="6" height="6" fill="black" />
        <rect id="smile-right-side-1-0" x="176" y="74" width="6" height="6" fill="black" />
        <rect id="smile-right-side-2-0" x="182" y="74" width="6" height="6" fill="black" />
        <rect id="smile-right-side-3-0" x="188" y="74" width="6" height="6" fill="black" />
        <rect id="smile-right-side-0-1" x="170" y="80" width="6" height="6" fill="black" />
        <rect id="smile-right-side-1-1" x="176" y="80" width="6" height="6" fill="black" />
        <rect id="smile-right-side-2-1" x="182" y="80" width="6" height="6" fill="black" />
        <rect id="smile-right-side-3-1" x="188" y="80" width="6" height="6" fill="black" />
        <rect id="smile-right-side-0-2" x="170" y="86" width="6" height="4.5" fill="black" />
        <rect id="smile-right-side-1-2" x="176" y="86" width="6" height="4.5" fill="black" />
        <rect id="smile-right-side-2-2" x="182" y="86" width="6" height="4.5" fill="black" />
        <rect id="smile-right-side-3-2" x="188" y="86" width="6" height="4.5" fill="black" />
        <rect id="smile-right-side-0-3" x="170" y="90.5" width="6" height="6" fill="black" />
        <rect id="smile-right-side-1-3" x="176" y="90.5" width="6" height="6" fill="black" />
        <rect id="smile-right-side-2-3" x="182" y="90.5" width="6" height="6" fill="black" />
        <rect id="smile-right-side-3-3" x="188" y="90.5" width="6" height="6" fill="black" />
        <rect id="smile-right-side-0-4" x="170" y="96.5" width="6" height="6" fill="black" />
        <rect id="smile-right-side-1-4" x="176" y="96.5" width="6" height="6" fill="black" />
        <rect id="smile-right-side-2-4" x="182" y="96.5" width="6" height="6" fill="black" />
        <rect id="smile-right-side-3-4" x="188" y="96.5" width="6" height="6" fill="black" />
        <rect id="smile-right-side-0-5" x="170" y="102.5" width="6" height="3.7" fill="black" />
        <rect id="smile-right-side-1-5" x="176" y="102.5" width="6" height="3.7" fill="black" />
        <rect id="smile-right-side-2-5" x="182" y="102.5" width="6" height="3.7" fill="black" />
        <rect id="smile-right-side-3-5" x="188" y="102.5" width="6" height="3.7" fill="black" />
      </g>

      {/* Smile Fill (Purple) */}
      <g id="smile-fill">
        <rect id="smile-fill-row-0" x="44" y="90.5" width="126" height="6" fill="black" />
        <rect id="smile-fill-row-1" x="44" y="96.5" width="126" height="6" fill="black" />
        <rect id="smile-fill-row-2" x="44" y="102.5" width="126" height="3.7" fill="black" />
        <rect id="smile-fill-row-3" x="44" y="106" width="126" height="6" fill="black" />
        <rect id="smile-fill-row-4" x="44" y="112" width="126" height="6" fill="black" />
        <rect id="smile-fill-0-5" x="44" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-1-5" x="50" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-2-5" x="56" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-3-5" x="62" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-4-5" x="68" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-5-5" x="74" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-6-5" x="80" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-7-5" x="86" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-8-5" x="92" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-9-5" x="98" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-10-5" x="104" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-11-5" x="110" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-12-5" x="116" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-13-5" x="122" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-14-5" x="128" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-15-5" x="134" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-16-5" x="140" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-17-5" x="146" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-18-5" x="152" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-19-5" x="158" y="118" width="6" height="2" fill="black" />
        <rect id="smile-fill-20-5" x="164" y="118" width="6" height="2" fill="black" />
      </g>

      {/* Stem (Orange) */}
      <g id="stem">
        <rect id="stem-0-0" x="92" y="120" width="6" height="6" fill="black" />
        <rect id="stem-1-0" x="98" y="120" width="6" height="6" fill="black" />
        <rect id="stem-2-0" x="104" y="120" width="6" height="6" fill="black" />
        <rect id="stem-3-0" x="110" y="120" width="6" height="6" fill="black" />
        <rect id="stem-4-0" x="116" y="120" width="6" height="6" fill="black" />
        <rect id="stem-0-1" x="92" y="126" width="6" height="6" fill="black" />
        <rect id="stem-1-1" x="98" y="126" width="6" height="6" fill="black" />
        <rect id="stem-2-1" x="104" y="126" width="6" height="6" fill="black" />
        <rect id="stem-3-1" x="110" y="126" width="6" height="6" fill="black" />
        <rect id="stem-4-1" x="116" y="126" width="6" height="6" fill="black" />
        <rect id="stem-0-2" x="92" y="132" width="6" height="6" fill="black" />
        <rect id="stem-1-2" x="98" y="132" width="6" height="6" fill="black" />
        <rect id="stem-2-2" x="104" y="132" width="6" height="6" fill="black" />
        <rect id="stem-3-2" x="110" y="132" width="6" height="6" fill="black" />
        <rect id="stem-4-2" x="116" y="132" width="6" height="6" fill="black" />
        <rect id="stem-0-3" x="92" y="138" width="6" height="6" fill="black" />
        <rect id="stem-1-3" x="98" y="138" width="6" height="6" fill="black" />
        <rect id="stem-2-3" x="104" y="138" width="6" height="6" fill="black" />
        <rect id="stem-3-3" x="110" y="138" width="6" height="6" fill="black" />
        <rect id="stem-4-3" x="116" y="138" width="6" height="6" fill="black" />
        <rect id="stem-0-4" x="92" y="144" width="6" height="6" fill="black" />
        <rect id="stem-1-4" x="98" y="144" width="6" height="6" fill="black" />
        <rect id="stem-2-4" x="104" y="144" width="6" height="6" fill="black" />
        <rect id="stem-3-4" x="110" y="144" width="6" height="6" fill="black" />
        <rect id="stem-4-4" x="116" y="144" width="6" height="6" fill="black" />
        <rect id="stem-0-5" x="92" y="150" width="6" height="6" fill="black" />
        <rect id="stem-1-5" x="98" y="150" width="6" height="6" fill="black" />
        <rect id="stem-2-5" x="104" y="150" width="6" height="6" fill="black" />
        <rect id="stem-3-5" x="110" y="150" width="6" height="6" fill="black" />
        <rect id="stem-4-5" x="116" y="150" width="6" height="6" fill="black" />
        <rect id="stem-0-6" x="92" y="156" width="6" height="6" fill="black" />
        <rect id="stem-1-6" x="98" y="156" width="6" height="6" fill="black" />
        <rect id="stem-2-6" x="104" y="156" width="6" height="6" fill="black" />
        <rect id="stem-3-6" x="110" y="156" width="6" height="6" fill="black" />
        <rect id="stem-4-6" x="116" y="156" width="6" height="6" fill="black" />
        <rect id="stem-0-7" x="92" y="162" width="6" height="6" fill="black" />
        <rect id="stem-1-7" x="98" y="162" width="6" height="6" fill="black" />
        <rect id="stem-2-7" x="104" y="162" width="6" height="6" fill="black" />
        <rect id="stem-3-7" x="110" y="162" width="6" height="6" fill="black" />
        <rect id="stem-4-7" x="116" y="162" width="6" height="6" fill="black" />
        <rect id="stem-0-8" x="92" y="168" width="6" height="6" fill="black" />
        <rect id="stem-1-8" x="98" y="168" width="6" height="6" fill="black" />
        <rect id="stem-2-8" x="104" y="168" width="6" height="6" fill="black" />
        <rect id="stem-3-8" x="110" y="168" width="6" height="6" fill="black" />
        <rect id="stem-4-8" x="116" y="168" width="6" height="6" fill="black" />
        <rect id="stem-0-9" x="92" y="174" width="6" height="6" fill="black" />
        <rect id="stem-1-9" x="98" y="174" width="6" height="6" fill="black" />
        <rect id="stem-2-9" x="104" y="174" width="6" height="6" fill="black" />
        <rect id="stem-3-9" x="110" y="174" width="6" height="6" fill="black" />
        <rect id="stem-4-9" x="116" y="174" width="6" height="6" fill="black" />
        <rect id="stem-0-10" x="92" y="180" width="6" height="6" fill="black" />
        <rect id="stem-1-10" x="98" y="180" width="6" height="6" fill="black" />
        <rect id="stem-2-10" x="104" y="180" width="6" height="6" fill="black" />
        <rect id="stem-3-10" x="110" y="180" width="6" height="6" fill="black" />
        <rect id="stem-4-10" x="116" y="180" width="6" height="6" fill="black" />
        <rect id="stem-0-11" x="92" y="186" width="6" height="6" fill="black" />
        <rect id="stem-1-11" x="98" y="186" width="6" height="6" fill="black" />
        <rect id="stem-2-11" x="104" y="186" width="6" height="6" fill="black" />
        <rect id="stem-3-11" x="110" y="186" width="6" height="6" fill="black" />
        <rect id="stem-4-11" x="116" y="186" width="6" height="6" fill="black" />
        <rect id="stem-0-12" x="92" y="192" width="6" height="6" fill="black" />
        <rect id="stem-1-12" x="98" y="192" width="6" height="6" fill="black" />
        <rect id="stem-2-12" x="104" y="192" width="6" height="6" fill="black" />
        <rect id="stem-3-12" x="110" y="192" width="6" height="6" fill="black" />
        <rect id="stem-4-12" x="116" y="192" width="6" height="6" fill="black" />
        <rect id="stem-0-13" x="92" y="198" width="6" height="6" fill="black" />
        <rect id="stem-1-13" x="98" y="198" width="6" height="6" fill="black" />
        <rect id="stem-2-13" x="104" y="198" width="6" height="6" fill="black" />
        <rect id="stem-3-13" x="110" y="198" width="6" height="6" fill="black" />
        <rect id="stem-4-13" x="116" y="198" width="6" height="6" fill="black" />
        <rect id="stem-0-14" x="92" y="204" width="6" height="6" fill="black" />
        <rect id="stem-1-14" x="98" y="204" width="6" height="6" fill="black" />
        <rect id="stem-2-14" x="104" y="204" width="6" height="6" fill="black" />
        <rect id="stem-3-14" x="110" y="204" width="6" height="6" fill="black" />
        <rect id="stem-4-14" x="116" y="204" width="6" height="6" fill="black" />
        <rect id="stem-0-15" x="92" y="210" width="6" height="6" fill="black" />
        <rect id="stem-1-15" x="98" y="210" width="6" height="6" fill="black" />
        <rect id="stem-2-15" x="104" y="210" width="6" height="6" fill="black" />
        <rect id="stem-3-15" x="110" y="210" width="6" height="6" fill="black" />
        <rect id="stem-4-15" x="116" y="210" width="6" height="6" fill="black" />
        <rect id="stem-0-16" x="92" y="216" width="6" height="6" fill="black" />
        <rect id="stem-1-16" x="98" y="216" width="6" height="6" fill="black" />
        <rect id="stem-2-16" x="104" y="216" width="6" height="6" fill="black" />
        <rect id="stem-3-16" x="110" y="216" width="6" height="6" fill="black" />
        <rect id="stem-4-16" x="116" y="216" width="6" height="6" fill="black" />
        <rect id="stem-0-17" x="92" y="222" width="6" height="6" fill="black" />
        <rect id="stem-1-17" x="98" y="222" width="6" height="6" fill="black" />
        <rect id="stem-2-17" x="104" y="222" width="6" height="6" fill="black" />
        <rect id="stem-3-17" x="110" y="222" width="6" height="6" fill="black" />
        <rect id="stem-4-17" x="116" y="222" width="6" height="6" fill="black" />
        <rect id="stem-0-18" x="92" y="228" width="6" height="6" fill="black" />
        <rect id="stem-1-18" x="98" y="228" width="6" height="6" fill="black" />
        <rect id="stem-2-18" x="104" y="228" width="6" height="6" fill="black" />
        <rect id="stem-3-18" x="110" y="228" width="6" height="6" fill="black" />
        <rect id="stem-4-18" x="116" y="228" width="6" height="6" fill="black" />
        <rect id="stem-0-19" x="92" y="234" width="6" height="6" fill="black" />
        <rect id="stem-1-19" x="98" y="234" width="6" height="6" fill="black" />
        <rect id="stem-2-19" x="104" y="234" width="6" height="6" fill="black" />
        <rect id="stem-3-19" x="110" y="234" width="6" height="6" fill="black" />
        <rect id="stem-4-19" x="116" y="234" width="6" height="6" fill="black" />
        <rect id="stem-0-20" x="92" y="240" width="6" height="6" fill="black" />
        <rect id="stem-1-20" x="98" y="240" width="6" height="6" fill="black" />
        <rect id="stem-2-20" x="104" y="240" width="6" height="6" fill="black" />
        <rect id="stem-3-20" x="110" y="240" width="6" height="6" fill="black" />
        <rect id="stem-4-20" x="116" y="240" width="6" height="6" fill="black" />
        <rect id="stem-0-21" x="92" y="246" width="6" height="6" fill="black" />
        <rect id="stem-1-21" x="98" y="246" width="6" height="6" fill="black" />
        <rect id="stem-2-21" x="104" y="246" width="6" height="6" fill="black" />
        <rect id="stem-3-21" x="110" y="246" width="6" height="6" fill="black" />
        <rect id="stem-4-21" x="116" y="246" width="6" height="6" fill="black" />
        <rect id="stem-0-22" x="92" y="252" width="6" height="6" fill="black" />
        <rect id="stem-1-22" x="98" y="252" width="6" height="6" fill="black" />
        <rect id="stem-2-22" x="104" y="252" width="6" height="6" fill="black" />
        <rect id="stem-3-22" x="110" y="252" width="6" height="6" fill="black" />
        <rect id="stem-4-22" x="116" y="252" width="6" height="6" fill="black" />
        <rect id="stem-0-23" x="92" y="258" width="6" height="6" fill="black" />
        <rect id="stem-1-23" x="98" y="258" width="6" height="6" fill="black" />
        <rect id="stem-2-23" x="104" y="258" width="6" height="6" fill="black" />
        <rect id="stem-3-23" x="110" y="258" width="6" height="6" fill="black" />
        <rect id="stem-4-23" x="116" y="258" width="6" height="6" fill="black" />
        <rect id="stem-0-24" x="92" y="264" width="6" height="6" fill="black" />
        <rect id="stem-1-24" x="98" y="264" width="6" height="6" fill="black" />
        <rect id="stem-2-24" x="104" y="264" width="6" height="6" fill="black" />
        <rect id="stem-3-24" x="110" y="264" width="6" height="6" fill="black" />
        <rect id="stem-4-24" x="116" y="264" width="6" height="6" fill="black" />
        <rect id="stem-0-25" x="92" y="270" width="6" height="4.5" fill="black" />
        <rect id="stem-1-25" x="98" y="270" width="6" height="4.5" fill="black" />
        <rect id="stem-2-25" x="104" y="270" width="6" height="4.5" fill="black" />
        <rect id="stem-3-25" x="110" y="270" width="6" height="4.5" fill="black" />
        <rect id="stem-4-25" x="116" y="270" width="6" height="4.5" fill="black" />
      </g>

      {/* Left Eye Z-shape for sleep animation */}
      <g id="left-eye-z-shape" opacity="0">
        {/* Top horizontal line - 5 pixels wide, 2 rows thick */}
        <rect x="55.5" y="6" width="6" height="6" fill="black" />
        <rect x="61.5" y="6" width="6" height="6" fill="black" />
        <rect x="67.5" y="6" width="6" height="6" fill="black" />
        <rect x="73.5" y="6" width="6" height="6" fill="black" />
        <rect x="79.5" y="6" width="6" height="6" fill="black" />
        <rect x="55.5" y="12" width="6" height="6" fill="black" />
        <rect x="61.5" y="12" width="6" height="6" fill="black" />
        <rect x="67.5" y="12" width="6" height="6" fill="black" />
        <rect x="73.5" y="12" width="6" height="6" fill="black" />
        <rect x="79.5" y="12" width="6" height="6" fill="black" />
        {/* Diagonal (thick - 3 pixels wide) */}
        <rect x="73.5" y="18" width="6" height="6" fill="black" />
        <rect x="79.5" y="18" width="6" height="6" fill="black" />
        <rect x="67.5" y="18" width="6" height="6" fill="black" />
        <rect x="67.5" y="24" width="6" height="6" fill="black" />
        <rect x="73.5" y="24" width="6" height="6" fill="black" />
        <rect x="61.5" y="24" width="6" height="6" fill="black" />
        <rect x="61.5" y="30" width="6" height="6" fill="black" />
        <rect x="67.5" y="30" width="6" height="6" fill="black" />
        <rect x="55.5" y="30" width="6" height="6" fill="black" />
        {/* Bottom horizontal line - 5 pixels wide, 2 rows thick */}
        <rect x="55.5" y="36" width="6" height="6" fill="black" />
        <rect x="61.5" y="36" width="6" height="6" fill="black" />
        <rect x="67.5" y="36" width="6" height="6" fill="black" />
        <rect x="73.5" y="36" width="6" height="6" fill="black" />
        <rect x="79.5" y="36" width="6" height="6" fill="black" />
        <rect x="55.5" y="42" width="6" height="6" fill="black" />
        <rect x="61.5" y="42" width="6" height="6" fill="black" />
        <rect x="67.5" y="42" width="6" height="6" fill="black" />
        <rect x="73.5" y="42" width="6" height="6" fill="black" />
        <rect x="79.5" y="42" width="6" height="6" fill="black" />
      </g>

      {/* Right Eye Z-shape for sleep animation */}
      <g id="right-eye-z-shape" opacity="0">
        {/* Top horizontal line - 5 pixels wide, 2 rows thick */}
        <rect x="128.5" y="6" width="6" height="6" fill="black" />
        <rect x="134.5" y="6" width="6" height="6" fill="black" />
        <rect x="140.5" y="6" width="6" height="6" fill="black" />
        <rect x="146.5" y="6" width="6" height="6" fill="black" />
        <rect x="152.5" y="6" width="6" height="6" fill="black" />
        <rect x="128.5" y="12" width="6" height="6" fill="black" />
        <rect x="134.5" y="12" width="6" height="6" fill="black" />
        <rect x="140.5" y="12" width="6" height="6" fill="black" />
        <rect x="146.5" y="12" width="6" height="6" fill="black" />
        <rect x="152.5" y="12" width="6" height="6" fill="black" />
        {/* Diagonal (thick - 3 pixels wide) */}
        <rect x="146.5" y="18" width="6" height="6" fill="black" />
        <rect x="152.5" y="18" width="6" height="6" fill="black" />
        <rect x="140.5" y="18" width="6" height="6" fill="black" />
        <rect x="140.5" y="24" width="6" height="6" fill="black" />
        <rect x="146.5" y="24" width="6" height="6" fill="black" />
        <rect x="134.5" y="24" width="6" height="6" fill="black" />
        <rect x="134.5" y="30" width="6" height="6" fill="black" />
        <rect x="140.5" y="30" width="6" height="6" fill="black" />
        <rect x="128.5" y="30" width="6" height="6" fill="black" />
        {/* Bottom horizontal line - 5 pixels wide, 2 rows thick */}
        <rect x="128.5" y="36" width="6" height="6" fill="black" />
        <rect x="134.5" y="36" width="6" height="6" fill="black" />
        <rect x="140.5" y="36" width="6" height="6" fill="black" />
        <rect x="146.5" y="36" width="6" height="6" fill="black" />
        <rect x="152.5" y="36" width="6" height="6" fill="black" />
        <rect x="128.5" y="42" width="6" height="6" fill="black" />
        <rect x="134.5" y="42" width="6" height="6" fill="black" />
        <rect x="140.5" y="42" width="6" height="6" fill="black" />
        <rect x="146.5" y="42" width="6" height="6" fill="black" />
        <rect x="152.5" y="42" width="6" height="6" fill="black" />
      </g>

      {/* Left Eye white cross reflections for cute face */}
      {/* Larger cross reflection - center at x=67.5, y=12 */}
      <g id="left-eye-cute-reflection-large">
        <rect x="67.5" y="6" width="6" height="6" fill="white" />
        <rect x="61.5" y="12" width="6" height="6" fill="white" />
        <rect x="67.5" y="12" width="6" height="6" fill="white" />
        <rect x="73.5" y="12" width="6" height="6" fill="white" />
        <rect x="67.5" y="18" width="6" height="6" fill="white" />
      </g>
      {/* Smaller cross reflection - center at x=70.5, y=39 */}
      <g id="left-eye-cute-reflection-small">
        <rect x="73.5" y="36" width="6" height="6" fill="white" />
        <rect x="67.5" y="42" width="6" height="6" fill="white" />
        <rect x="73.5" y="42" width="6" height="6" fill="white" />
      </g>

      {/* Right Eye white cross reflections for cute face */}
      {/* Larger cross reflection - center at x=140.5, y=12 */}
      <g id="right-eye-cute-reflection-large">
        <rect x="140.5" y="6" width="6" height="6" fill="white" />
        <rect x="134.5" y="12" width="6" height="6" fill="white" />
        <rect x="140.5" y="12" width="6" height="6" fill="white" />
        <rect x="146.5" y="12" width="6" height="6" fill="white" />
        <rect x="140.5" y="18" width="6" height="6" fill="white" />
      </g>
      {/* Smaller cross reflection - center at x=143.5, y=39 */}
      <g id="right-eye-cute-reflection-small">
        <rect x="146.5" y="36" width="6" height="6" fill="white" />
        <rect x="140.5" y="42" width="6" height="6" fill="white" />
        <rect x="146.5" y="42" width="6" height="6" fill="white" />
      </g>
    </svg>
  )
}




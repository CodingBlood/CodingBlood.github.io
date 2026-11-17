import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Scroll choreography runs only where it can run well: a real desktop viewport
// and no reduced-motion preference. Everywhere else the sections are static.
export function motionAllowed() {
  if (typeof window === 'undefined') return false
  return (
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches &&
    window.matchMedia('(min-width: 768px)').matches
  )
}

export { gsap, ScrollTrigger }

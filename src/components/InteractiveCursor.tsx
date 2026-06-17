import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/**
 * Premium Interactive Physics Cursor Component
 * Provides luxury momentum cursor trailing using hardware-accelerated spring curves.
 * Adapts its size, opacity, and color elements dynamically on clickable hover states.
 * Uses a touch-device safety bypass to ensure absolute standard compliance on mobile/tablets.
 */
export function InteractiveCursor() {
  const [cursorType, setCursorType] = useState<"default" | "hover" | "text">("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  // Motion values for smooth hardware-accelerated tracking without triggering React re-renders
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Snappy, premium spring physics that ensure immediate alignment with zero sluggish feel
  const springConfigInner = { stiffness: 2200, damping: 65, mass: 0.05 }; 
  const springConfigOuter = { stiffness: 750, damping: 42, mass: 0.15 };
  
  // Staggered, luxury trailing motion blur weights
  const springConfigTrail1 = { stiffness: 450, damping: 32, mass: 0.25 };
  const springConfigTrail2 = { stiffness: 280, damping: 25, mass: 0.35 };

  const cursorXInner = useSpring(mouseX, springConfigInner);
  const cursorYInner = useSpring(mouseY, springConfigInner);

  const cursorXOuter = useSpring(mouseX, springConfigOuter);
  const cursorYOuter = useSpring(mouseY, springConfigOuter);

  const cursorXTrail1 = useSpring(mouseX, springConfigTrail1);
  const cursorYTrail1 = useSpring(mouseY, springConfigTrail1);

  const cursorXTrail2 = useSpring(mouseX, springConfigTrail2);
  const cursorYTrail2 = useSpring(mouseY, springConfigTrail2);

  useEffect(() => {
    // Always keep standard system cursor visible
    document.documentElement.style.cursor = "auto";
    return () => {
      document.documentElement.style.cursor = "auto";
    };
  }, []);

  useEffect(() => {
    // Touch detection layer
    const checkTouch = () => {
      const isTouch = 
        "ontouchstart" in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia("(pointer: coarse)").matches;
      setIsTouchDevice(isTouch);
    };
    checkTouch();

    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;

    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveMouse);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible, isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isClickable = 
        target.tagName === "BUTTON" || 
        target.tagName === "IMG" || 
        target.tagName === "A" || 
        target.closest("button") !== null || 
        target.closest("a") !== null || 
        target.closest(".cursor-pointer") !== null ||
        target.closest("[role='button']") !== null ||
        target.getAttribute("role") === "button" ||
        target.closest("#brand-logo") !== null;

      const isInput = 
        target.tagName === "INPUT" || 
        target.tagName === "TEXTAREA" || 
        target.tagName === "SELECT";

      if (isClickable) {
        setCursorType("hover");
      } else if (isInput) {
        setCursorType("text");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isTouchDevice]);

  // Safely avoid breaking viewports on coarse-pointers or touch screens
  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <div id="interactive-cursor-container" className="fixed inset-0 pointer-events-none z-[9999] select-none hidden md:block">
      {/* Motion Blur Trail Layer 2 (Soft, distant trail glow) */}
      <motion.div
        style={{
          x: cursorXTrail2,
          y: cursorYTrail2,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`fixed rounded-full pointer-events-none filter blur-[8px] opacity-15 transition-all duration-300 ease-out bg-blue-500/10 ${
          cursorType === "hover" 
            ? "w-16 h-16 scale-110" 
            : cursorType === "text"
              ? "w-5 h-9"
              : "w-8 h-8"
        }`}
      />

      {/* Motion Blur Trail Layer 1 (Subtle, near-trail halo shadow) */}
      <motion.div
        style={{
          x: cursorXTrail1,
          y: cursorYTrail1,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`fixed rounded-full pointer-events-none filter blur-[4px] opacity-35 transition-all duration-300 ease-out bg-blue-600/10 ${
          cursorType === "hover" 
            ? "w-14 h-14 scale-110" 
            : cursorType === "text"
              ? "w-4.5 h-8.5"
              : "w-6 h-6"
        }`}
      />

      {/* Dynamic Halo - Magnetic drift rings */}
      <motion.div
        style={{
          x: cursorXOuter,
          y: cursorYOuter,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`fixed rounded-full pointer-events-none flex items-center justify-center transition-all duration-300 ease-out border ${
          cursorType === "hover" 
            ? "w-12 h-12 bg-blue-500/10 border-blue-600/50 shadow-[0_0_20px_rgba(37,99,235,0.2)] scale-110" 
            : cursorType === "text"
              ? "w-4 h-8 bg-blue-500/5 border-blue-500/20 rounded-md"
              : "w-5 h-5 bg-transparent border-slate-400/25"
        }`}
      />

      {/* Pinpoint Core Center - instant alignment indicator */}
      <motion.div
        style={{
          x: cursorXInner,
          y: cursorYInner,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className={`fixed rounded-full pointer-events-none transition-all duration-200 ${
          cursorType === "hover" 
            ? "w-3 h-3 bg-[#0071e3] scale-115" 
            : cursorType === "text"
              ? "w-[2px] h-4 bg-[#0071e3]/80"
              : "w-1.5 h-1.5 bg-[#0071e3]"
        }`}
      />
    </div>
  );
}

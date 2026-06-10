import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState } from "react";

interface SleekPageShutterProps {
  currentPage: string;
}

/**
 * SleekPageShutter Component
 * Provides an elite, professional-grade camera-iris/laser-sweep transition 
 * effect whenever the page changes. Uses optimized hardware-accelerated 
 * CSS attributes to keep the experience completely lightweight and butter-smooth.
 */
export function SleekPageShutter({ currentPage }: SleekPageShutterProps) {
  const [triggerTransition, setTriggerTransition] = useState(false);
  const [transitionKey, setTransitionKey] = useState(currentPage);

  useEffect(() => {
    if (currentPage !== transitionKey) {
      setTriggerTransition(true);
      const timer = setTimeout(() => {
        setTransitionKey(currentPage);
        setTriggerTransition(false);
      }, 700); // Keep it ultra crisp (700ms total duration)
      return () => clearTimeout(timer);
    }
  }, [currentPage, transitionKey]);

  return (
    <AnimatePresence>
      {triggerTransition && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden select-none">
          {/* Elite Layer 1: Left-to-right deep slate glass panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-neutral-950/80 backdrop-blur-[4px] border-r border-blue-500/20"
          />

          {/* Elite Layer 2: Speed-staggered laser scan line */}
          <motion.div
            initial={{ x: "-110%" }}
            animate={{ x: "110%" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="absolute top-0 bottom-0 w-[4px] bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.8)]"
          />

          {/* Elite Layer 3: Secondary silver/blue reflection strip */}
          <motion.div
            initial={{ x: "-120%", skewX: -15 }}
            animate={{ x: "120%", skewX: -15 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent"
          />

          {/* Elite Layer 4: Minimal subtle geometric glass fragment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0.8, 1, 1.1],
              rotate: [5, 0, -5]
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
          >
            <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-blue-400/80 mb-2">
              DIGITAL YOUR
            </div>
            <div className="h-[1px] w-12 bg-white/30" />
            <div className="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-500 mt-2">
              REFORMATTING SHUTTER
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

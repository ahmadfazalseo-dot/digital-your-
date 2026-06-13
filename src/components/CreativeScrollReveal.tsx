import { motion } from "motion/react";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  variant?: "perspective" | "blur-clear" | "split-reveal" | "stagger-spring" | "lens-zoom-reveal" | "magnetic-lift";
}

/**
 * CreativeScrollReveal
 * A premium suite of elite, high-fidelity scroll animations that break away 
 * from common slide-up patterns, utilizing lens blur, 3D perspective folding,
 * and kinetic elastic spring dynamics.
 */
export function CreativeScrollReveal({ 
  children, 
  delay = 0, 
  variant = "blur-clear" 
}: RevealProps) {
  
  if (variant === "perspective") {
    return (
      <motion.div
        initial={{ 
          opacity: 0, 
          transform: "perspective(1200px) rotateX(16deg) translateY(40px) scale(0.96)",
          filter: "brightness(0.7) contrast(0.9)"
        }}
        whileInView={{ 
          opacity: 1, 
          transform: "perspective(1200px) rotateX(0deg) translateY(0px) scale(1)",
          filter: "brightness(1) contrast(1)"
        }}
        viewport={{ once: true, margin: "-15px" }}
        transition={{ 
          duration: 0.9, 
          ease: [0.16, 1, 0.3, 1], // Apple-grade Custom Bezier
          delay 
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "blur-clear") {
    return (
      <motion.div
        initial={{ 
          opacity: 0, 
          filter: "blur(18px)", 
          scale: 0.93, 
          y: 25 
        }}
        whileInView={{ 
          opacity: 1, 
          filter: "blur(0px)", 
          scale: 1, 
          y: 0 
        }}
        viewport={{ once: true, margin: "-15px" }}
        transition={{ 
          duration: 1.1, 
          ease: [0.25, 1, 0.5, 1], // Cinema Smooth ease Out
          delay 
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "split-reveal") {
    return (
      <motion.div
        initial={{ 
          opacity: 0, 
          clipPath: "inset(0% 100% 0% 0%)",
          x: -20
        }}
        whileInView={{ 
          opacity: 1, 
          clipPath: "inset(0% 0% 0% 0%)",
          x: 0
        }}
        viewport={{ once: true, margin: "-15px" }}
        transition={{ 
          duration: 1.0, 
          ease: [0.16, 1, 0.3, 1],
          delay 
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "lens-zoom-reveal") {
    return (
      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 1.05, 
          filter: "blur(25px) contrast(1.1)",
          y: 40
        }}
        whileInView={{ 
          opacity: 1, 
          scale: 1, 
          filter: "blur(0px) contrast(1)",
          y: 0
        }}
        viewport={{ once: true, margin: "-15px" }}
        transition={{ 
          duration: 1.25, 
          ease: [0.16, 1, 0.3, 1], // Cinematic decelerating curve
          delay 
        }}
      >
        {children}
      </motion.div>
    );
  }

  if (variant === "magnetic-lift") {
    return (
      <motion.div
        initial={{ 
          opacity: 0, 
          y: 60,
          rotate: -1,
          scale: 0.98
        }}
        whileInView={{ 
          opacity: 1, 
          y: 0,
          rotate: 0,
          scale: 1
        }}
        viewport={{ once: true, margin: "-15px" }}
        transition={{ 
          type: "spring", 
          stiffness: 45, 
          damping: 16, 
          mass: 1.2,
          delay 
        }}
        whileHover={{
          y: -4,
          scale: 1.005,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {children}
      </motion.div>
    );
  }

  // Elastic Staggered Spring
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 50, 
        scale: 0.98 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        scale: 1 
      }}
      viewport={{ once: true, margin: "-15px" }}
      transition={{ 
        type: "spring",
        stiffness: 55,
        damping: 14,
        mass: 1.1,
        delay 
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * CreativeStaggerContainer
 * Automatically staggers any children wrapped in CreativeScrollReveal
 */
export function CreativeStaggerContainer({ 
  children,
  speed = 0.1 
}: { 
  children: React.ReactNode;
  speed?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: speed
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

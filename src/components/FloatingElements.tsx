import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Code, 
  TrendingUp, 
  Search, 
  Calendar, 
  CheckCircle2, 
  Cpu, 
  ArrowUpRight, 
  ShieldCheck, 
  Award, 
  Globe 
} from "lucide-react";

interface FloatingCardProps {
  id: number;
  initialX: string;
  initialY: string;
  duration: number;
  delay: number;
  icon: React.ReactNode;
  label: string;
  sublabel?: string;
  badge?: string;
  customContent?: React.ReactNode;
  mobileVisible?: boolean;
}

export function FloatingElements() {
  const [isHoveredId, setIsHoveredId] = useState<number | null>(null);

  // High-density cosmic glowing dust particles drifting at various heights
  const dustParticles = [
    { id: 101, size: 4, top: "5%", left: "15%", speed: 18, delay: 0 },
    { id: 102, size: 6, top: "15%", left: "82%", speed: 28, delay: 1.5 },
    { id: 103, size: 3, top: "28%", left: "22%", speed: 22, delay: 0.5 },
    { id: 104, size: 5, top: "38%", left: "78%", speed: 24, delay: 2 },
    { id: 105, size: 4, top: "48%", left: "12%", speed: 30, delay: 1 },
    { id: 106, size: 3, top: "58%", left: "85%", speed: 19, delay: 3 },
    { id: 107, size: 7, top: "68%", left: "18%", speed: 26, delay: 2.5 },
    { id: 108, size: 5, top: "78%", left: "75%", speed: 21, delay: 0.8 },
    { id: 109, size: 4, top: "88%", left: "25%", speed: 25, delay: 1.2 },
    { id: 110, size: 6, top: "95%", left: "80%", speed: 27, delay: 3.2 }
  ];

  // Exquisite selection of 9 premium interactive glass-morphic indicator nodes
  const elements: FloatingCardProps[] = [
    // ---------------- [TOP LEVEL - HERO ZONE] ----------------
    {
      id: 1,
      initialX: "4%",
      initialY: "6%",
      duration: 18,
      delay: 0,
      icon: <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />,
      label: "Premium Interface",
      sublabel: "98%+ Delight Index",
      badge: "Pure UX",
      mobileVisible: true // Keep at the top of hero on mobile
    },
    {
      id: 2,
      initialX: "80%",
      initialY: "11%",
      duration: 22,
      delay: 1.5,
      icon: <Cpu className="w-4 h-4 text-indigo-600" />,
      label: "Vite + React.js Core",
      sublabel: "0% Legacy Overheads",
      customContent: (
        <div className="flex items-center gap-1 mt-1 font-mono text-[8px] text-slate-400 bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded-sm">
          <span className="inline-block w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
          <span>COMPILED ON-EDGE</span>
        </div>
      ),
      mobileVisible: true
    },
    // ---------------- [UPPER MIDDLE - BENTO / SERVICES ZONE] ----------------
    {
      id: 3,
      initialX: "6%",
      initialY: "25%",
      duration: 20,
      delay: 2.5,
      icon: <Search className="w-4 h-4 text-purple-600" />,
      label: "Crawl Map Scanner",
      sublabel: "Structured JSON-LD Schema",
      badge: "Lighthouse 100",
      mobileVisible: false
    },
    {
      id: 4,
      initialX: "84%",
      initialY: "34%",
      duration: 25,
      delay: 1.0,
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
      label: "Performance Seal",
      sublabel: "Instant Contentful Paint",
      customContent: (
        <div className="mt-1 flex items-center gap-2">
          <div className="w-full bg-slate-100 rounded-full h-1 relative overflow-hidden">
            <motion.div 
              style={{ width: "98%" }} 
              className="bg-blue-600 h-full rounded-full"
              animate={{ width: ["0%", "98%"] }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
          </div>
          <span className="font-mono text-[8px] font-bold text-slate-500">98%</span>
        </div>
      ),
      mobileVisible: false
    },
    // ---------------- [DEEP MIDDLE - ROI / FORECASTER ZONE] ----------------
    {
      id: 5,
      initialX: "5%",
      initialY: "48%",
      duration: 23,
      delay: 3.5,
      icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
      label: "Organic Lift Engine",
      sublabel: "Compounding Traffic Spikes",
      customContent: (
        <div className="mt-1.5 h-6 w-24 flex items-end gap-0.5">
          {[35, 60, 40, 80, 55, 95].map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ height: 0 }}
              animate={{ height: `${val}%` }}
              transition={{
                delay: idx * 0.15 + 1,
                duration: 1.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 5
              }}
              className="flex-1 bg-emerald-550/30 rounded-[1px] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-emerald-500" />
            </motion.div>
          ))}
        </div>
      ),
      mobileVisible: true // Sweet graph, keep on mobile!
    },
    {
      id: 6,
      initialX: "82%",
      initialY: "58%",
      duration: 24,
      delay: 0.8,
      icon: <ShieldCheck className="w-4 h-4 text-blue-500" />,
      label: "Enterprise Security",
      sublabel: "SSL Edge Distribution",
      badge: "SLA Guaranteed",
      mobileVisible: false
    },
    // ---------------- [LOWER HEIGHTS - EXPERTISE / TRUST PANEL] ----------------
    {
      id: 7,
      initialX: "3%",
      initialY: "72%",
      duration: 27,
      delay: 2.2,
      icon: <Code className="w-4 h-4 text-indigo-500 animate-pulse" />,
      label: "Zero-Bloat Pipelines",
      sublabel: "Hand-Crafted Components",
      mobileVisible: false
    },
    {
      id: 8,
      initialX: "85%",
      initialY: "82%",
      duration: 21,
      delay: 4.0,
      icon: <Award className="w-4 h-4 text-amber-500" />,
      label: "Honor Architecture",
      sublabel: "Fully verified core metrics",
      badge: "100% Core",
      mobileVisible: false
    },
    // ---------------- [BOTTOM - STRATEGY BANNER / FOOTER BOUNDS] ----------------
    {
      id: 9,
      initialX: "7%",
      initialY: "91%",
      duration: 26,
      delay: 1.8,
      icon: <Calendar className="w-4 h-4 text-blue-600" />,
      label: "Elite 1-on-1 Strategy",
      sublabel: "Bespoke blueprint consult",
      customContent: (
        <span className="font-mono text-[8px] uppercase font-bold text-amber-600 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded-sm block mt-1 w-max">
          DIRECT TALK
        </span>
      ),
      mobileVisible: true
    }
  ];

  return (
    <div className="absolute inset-0 w-full min-h-full overflow-hidden pointer-events-none z-0 select-none">
      
      {/* Absolute decorative atmospheric grid pattern wrapping scroll length */}
      <div className="absolute inset-x-0 top-0 h-full opacity-[0.025] pointer-events-none">
        <svg className="w-full h-full stroke-slate-900" fill="none">
          <defs>
            <pattern id="grid-pattern-parallax-scroll" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-parallax-scroll)" />
        </svg>
      </div>

      {/* Atmospheric glowing dust particles spread up and down the page */}
      {dustParticles.map((part) => (
        <motion.div
          key={part.id}
          style={{
            position: "absolute",
            top: part.top,
            left: part.left,
            width: part.size,
            height: part.size,
          }}
          animate={{
            y: [0, -45, 0],
            x: [0, 15, 0],
            opacity: [0.12, 0.45, 0.12],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: part.speed,
            delay: part.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="rounded-full bg-blue-500/20 filter blur-[1px] pointer-events-none"
        />
      ))}

      {/* Floating high-tech interactive glass-morphic indicator nodes */}
      {elements.map((item) => {
        const isHovered = isHoveredId === item.id;
        
        return (
          <motion.div
            key={item.id}
            style={{
              position: "absolute",
              left: item.initialX,
              top: item.initialY,
            }}
            // Slow elegant harmonic floating translation
            animate={{
              y: [0, -14, 10, -8, 0],
              x: [0, 10, -12, 6, 0],
              rotate: [0, 3, -3, 1, 0],
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: isHovered ? undefined : Infinity,
              ease: "easeInOut",
              scale: isHovered 
                ? { type: "spring", stiffness: 300, damping: 20 } 
                : { type: "tween", ease: "easeInOut" }
            }}
            onMouseEnter={() => setIsHoveredId(item.id)}
            onMouseLeave={() => setIsHoveredId(null)}
            className={`pointer-events-auto flex flex-col items-start gap-1 pb-2.5 pt-2 px-3.5 rounded-2xl border border-white/80 bg-white/95 md:bg-white/90 shadow-[0_4px_24px_-4px_rgba(148,163,184,0.12)] selection:bg-transparent cursor-default transition-all hover:bg-white hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/[0.04] z-10 w-[185px] sm:w-[210px] group overflow-hidden transform-gpu will-change-transform ${
              item.mobileVisible ? "flex" : "hidden md:flex"
            }`}
          >
            {/* Gloss shine shimmer effect on card hover */}
            <motion.div 
              initial={{ x: "-120%" }}
              animate={isHovered ? { x: "220%" } : { x: "-120%" }}
              transition={{ duration: 0.95, ease: "easeOut" }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/45 to-transparent skew-x-[25deg] pointer-events-none"
            />

            <div className="flex items-center justify-between w-full h-[22px]">
              <div className="p-1 rounded-lg bg-white/90 border border-slate-100 shadow-3xs shrink-0 flex items-center justify-center group-hover:border-blue-100 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              {item.badge ? (
                <span className="font-mono text-[8px] uppercase font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-sm">
                  {item.badge}
                </span>
              ) : (
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 opacity-0 group-hover:opacity-100 transition-all group-hover:text-blue-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </div>

            <div className="mt-1 space-y-0.5 text-left">
              <span className="font-sans font-extrabold text-[11px] text-slate-800 tracking-tight block leading-snug group-hover:text-blue-600 transition-colors">
                {item.label}
              </span>
              {item.sublabel && (
                <span className="font-sans font-medium text-[9px] text-slate-500 block leading-tight">
                  {item.sublabel}
                </span>
              )}
            </div>

            {item.customContent}
          </motion.div>
        );
      })}

      {/* Modern abstract glowing decorative circle blobs distributed downward */}
      <motion.div
        animate={{
          scale: [1, 1.12, 0.95, 1.05, 1],
          opacity: [0.14, 0.18, 0.11, 0.15, 0.14],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, rgba(255, 255, 255, 0) 70%)"
        }}
        className="absolute top-[8%] left-[25%] -translate-x-1/2 w-[320px] h-[320px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 0.95, 1.08, 0.98, 1],
          opacity: [0.08, 0.13, 0.06, 0.11, 0.08],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(circle, rgba(129, 140, 248, 0.12) 0%, rgba(255, 255, 255, 0) 70%)"
        }}
        className="absolute top-[35%] right-[20%] w-[380px] h-[380px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 0.9, 1.05, 1],
          opacity: [0.05, 0.12, 0.04, 0.09, 0.05],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, rgba(255, 255, 255, 0) 70%)"
        }}
        className="absolute top-[68%] left-[15%] w-[420px] h-[420px] rounded-full pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 0.9, 1.1, 0.92, 1],
          opacity: [0.06, 0.10, 0.05, 0.09, 0.06],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: "radial-gradient(circle, rgba(96, 165, 250, 0.08) 0%, rgba(255, 255, 255, 0) 70%)"
        }}
        className="absolute top-[85%] right-[10%] w-[360px] h-[360px] rounded-full pointer-events-none"
      />
    </div>
  );
}

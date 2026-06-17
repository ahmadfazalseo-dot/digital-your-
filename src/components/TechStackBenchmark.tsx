import React, { useState } from "react";
import { motion } from "motion/react";
import { Zap, AlertTriangle, HelpCircle, Activity, Server, Cpu, FileJson } from "lucide-react";

interface BenchmarkMetric {
  name: string;
  description: string;
  unit: string;
  icon: React.ReactNode;
  wpBase: number; // base value
  wpMultiplier: number; // how it scales with traffic/complexity
  wixBase: number;
  wixMultiplier: number;
  dyBase: number;
  dyMultiplier: number;
  isLowerBetter: boolean;
}

export function TechStackBenchmark() {
  const [trafficLoad, setTrafficLoad] = useState<number>(3); // 1 to 10 scale (represents 100 to 5000 concurrent list requests)
  const [complexity, setComplexity] = useState<number>(3); // 1 to 10 scale (represents content density, scripts, media assets)
  const [activeMetric, setActiveMetric] = useState<string>("lcp");

  const metrics: Record<string, BenchmarkMetric> = {
    lcp: {
      name: "Largest Contentful Paint (LCP)",
      description: "How long it takes for the main visual content to render in the user's viewport.",
      unit: "s",
      icon: <Cpu className="w-4 h-4 text-blue-600" />,
      wpBase: 3.2,
      wpMultiplier: 0.45,
      wixBase: 2.1,
      wixMultiplier: 0.22,
      dyBase: 0.22,
      dyMultiplier: 0.02,
      isLowerBetter: true,
    },
    ttfb: {
      name: "Time to First Byte (TTFB)",
      description: "Initial server response latency. Reflects database complexity and host speeds.",
      unit: "ms",
      icon: <Server className="w-4 h-4 text-indigo-600" />,
      wpBase: 850,
      wpMultiplier: 120,
      wixBase: 350,
      wixMultiplier: 45,
      dyBase: 28,
      dyMultiplier: 2,
      isLowerBetter: true,
    },
    fid: {
      name: "First Input Delay (FID)",
      description: "Page responsiveness under input. Sluggishness caused by main-thread blocking scripts.",
      unit: "ms",
      icon: <Activity className="w-4 h-4 text-emerald-600" />,
      wpBase: 120,
      wpMultiplier: 22,
      wixBase: 65,
      wixMultiplier: 10,
      dyBase: 1.5,
      dyMultiplier: 0.1,
      isLowerBetter: true,
    },
    weight: {
      name: "Initial Payload Asset Size",
      description: "Total Javascript, CSS, and structural code delivered to mobile browsers.",
      unit: "MB",
      icon: <FileJson className="w-4 h-4 text-purple-600" />,
      wpBase: 4.8,
      wpMultiplier: 0.5,
      wixBase: 2.8,
      wixMultiplier: 0.3,
      dyBase: 0.16,
      dyMultiplier: 0.01,
      isLowerBetter: true,
    },
  };

  const calculateValue = (metric: BenchmarkMetric, platform: "wp" | "wix" | "dy") => {
    const scaleFactor = (trafficLoad + complexity) / 2;
    if (platform === "wp") {
      return metric.wpBase + Math.pow(scaleFactor, 1.25) * metric.wpMultiplier;
    } else if (platform === "wix") {
      return metric.wixBase + Math.pow(scaleFactor, 1.1) * metric.wixMultiplier;
    } else {
      return metric.dyBase + scaleFactor * metric.dyMultiplier;
    }
  };

  const currentMetric = metrics[activeMetric];
  const wpValue = calculateValue(currentMetric, "wp");
  const wixValue = calculateValue(currentMetric, "wix");
  const dyValue = calculateValue(currentMetric, "dy");

  // Determine relative percentages for width rendering
  const maxCalcVal = Math.max(wpValue, wixValue, dyValue);
  const getWidthPercent = (val: number) => {
    return `${Math.max(8, (val / maxCalcVal) * 100)}%`;
  };

  const formatValue = (val: number, unit: string) => {
    if (unit === "s" || unit === "MB") {
      return val.toFixed(2) + unit;
    }
    return Math.round(val) + unit;
  };

  // Human-readable simulator text
  const getTrafficLabel = (num: number) => {
    if (num <= 2) return "Low Load (~200 visitors/min)";
    if (num <= 5) return "Healthy Peak (~1,500 visitors/min)";
    if (num <= 8) return "Heavy Surge (~5,000 visitors/min)";
    return "Ultra Spike (~10,000+ visitors/min)";
  };

  const getComplexityLabel = (num: number) => {
    if (num <= 2) return "Simple Contact Card or Lead Page";
    if (num <= 5) return "Standard Corporate Hub + Service Matrix";
    if (num <= 8) return "Rich Interactive Portfolio with Complex Queries";
    return "Heavy Multi-Integration Enterprise Catalog";
  };

  return (
    <section id="tech-benchmark-suite" className="py-20 max-w-7xl mx-auto px-6 select-none relative border-t border-slate-100">
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/[0.02] rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Interactive Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div>
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-bold bg-blue-550/10 border border-blue-600/10 px-2.5 py-0.5 rounded-full inline-block">
              Interactive Benchmark Suite
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-2">
              Bespoke Handcoding vs. Template Bloat
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-sans">
              Test how layout density and concurrent traffic spikes affect page performance on different frameworks. Drag the simulator controls on the right to see the performance charts react in real time.
            </p>
          </div>

          {/* Interactive sliders */}
          <div className="space-y-6 bg-slate-50 border border-slate-200/80 p-6 rounded-3xl">
            {/* Control 1: Traffic Load */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-800 font-sans">Simulated Concurrent Traffic</label>
                <span className="font-mono text-[10px] text-blue-600 font-bold bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">
                  Level {trafficLoad}/10
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={trafficLoad}
                onChange={(e) => setTrafficLoad(parseInt(e.target.value))}
                className="w-full text-blue-600 accent-blue-600 cursor-pointer h-1.5 bg-slate-200 rounded-lg outline-none"
              />
              <span className="font-mono text-[9px] text-slate-500 block">
                {getTrafficLabel(trafficLoad)}
              </span>
            </div>

            {/* Control 2: Asset Complexity */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-slate-800 font-sans">Page Layout &amp; Media Complexity</label>
                <span className="font-mono text-[10px] text-indigo-600 font-bold bg-indigo-50 border border-indigo-150 px-2 py-0.5 rounded-md">
                  Level {complexity}/10
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={complexity}
                onChange={(e) => setComplexity(parseInt(e.target.value))}
                className="w-full text-indigo-600 accent-indigo-605 cursor-pointer h-1.5 bg-slate-200 rounded-lg outline-none"
              />
              <span className="font-mono text-[9px] text-slate-500 block">
                {getComplexityLabel(complexity)}
              </span>
            </div>
          </div>

          {/* Metric selecting buttons */}
          <div className="grid grid-cols-2 gap-3 shrink-0">
            {Object.entries(metrics).map(([key, item]) => {
              const isActive = activeMetric === key;
              return (
                <button
                  id={`btn-bench-metric-${key}`}
                  key={key}
                  onClick={() => setActiveMetric(key)}
                  className={`p-4 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-between h-[100px] ${
                    isActive
                      ? "bg-white border-blue-200 ring-2 ring-blue-500/5 shadow-md"
                      : "bg-[#f8fafc]/50 border-slate-200/80 hover:bg-[#f8fafc]"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`p-1.5 rounded-lg ${isActive ? "bg-blue-50 border border-blue-200" : "bg-white border border-slate-200"}`}>
                      {item.icon}
                    </span>
                    <span className="font-sans text-[10px] font-bold text-slate-800">{item.unit === "s" ? "Seconds" : item.unit}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-800 line-clamp-2 leading-tight">
                    {item.name.split(" (")[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Side: Graph Board Display (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-md text-left space-y-8 select-text">
          <div className="flex justify-between items-start gap-4">
            <div className="space-y-1">
              <h3 className="font-display font-semibold text-lg text-slate-900 leading-tight">
                {currentMetric.name}
              </h3>
              <p className="text-xs text-slate-500 font-sans max-w-md">
                {currentMetric.description}
              </p>
            </div>
            <Zap className="w-5 h-5 text-amber-500 shrink-0 animate-bounce" />
          </div>

          {/* Custom fluid bar charts */}
          <div className="space-y-6 pt-2 select-none">
            {/* 1. Digital Your Custom React/Vite Stacks */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 block shadow-md" />
                  <span className="font-sans text-xs font-bold text-slate-900">Custom Code (Digital Your Website)</span>
                </div>
                <strong className="font-mono text-xs text-blue-600 font-bold bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">
                  {formatValue(dyValue, currentMetric.unit)}
                </strong>
              </div>
              <div className="w-full bg-slate-100 h-6 rounded-full overflow-hidden p-0.5 border border-slate-200/50">
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 h-full rounded-full flex items-center justify-end px-3 relative min-w-[32px]"
                  style={{ width: getWidthPercent(dyValue) }}
                  layoutId="bench-bar-dy"
                  transition={{ type: "spring", stiffness: 80, damping: 15 }}
                >
                  <span className="font-mono text-[9px] text-white font-bold tracking-wider uppercase">Vite Powered</span>
                </motion.div>
              </div>
            </div>

            {/* 2. Wix / Squarespace Template Builders */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 block" />
                  <span className="font-sans text-xs text-slate-655 font-medium">Standard Wix / Webflow Page</span>
                </div>
                <span className="font-mono text-xs text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-md font-bold">
                  {formatValue(wixValue, currentMetric.unit)}
                </span>
              </div>
              <div className="w-full bg-slate-100 h-6 rounded-full overflow-hidden p-0.5 border border-slate-205">
                <motion.div
                  className="bg-amber-400 h-full rounded-full min-w-[32px]"
                  style={{ width: getWidthPercent(wixValue) }}
                  layoutId="bench-bar-wix"
                  transition={{ type: "spring", stiffness: 80, damping: 15 }}
                />
              </div>
            </div>

            {/* 3. Bloated WordPress Stacks */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 block" />
                  <span className="font-sans text-xs text-slate-655 font-medium">Bloated WordPress &amp; Builders</span>
                </div>
                <span className="font-mono text-xs text-red-600 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-md font-bold">
                  {formatValue(wpValue, currentMetric.unit)}
                </span>
              </div>
              <div className="w-full bg-slate-100 h-6 rounded-full overflow-hidden p-0.5 border border-slate-205">
                <motion.div
                  className="bg-red-400 h-full rounded-full min-w-[32px]"
                  style={{ width: getWidthPercent(wpValue) }}
                  layoutId="bench-bar-wp"
                  transition={{ type: "spring", stiffness: 80, damping: 15 }}
                />
              </div>
            </div>
          </div>

          {/* Actionable summary details */}
          <div className="mt-8 p-4 bg-blue-50/50 border border-blue-100 rounded-2xl flex items-start gap-3">
            <AlertTriangle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed font-sans text-slate-600">
              <strong className="text-slate-800 block mb-0.5 font-bold">Compounding Conversion Disadvantage</strong>
              Under peak loads and content expansion, WordPress paint levels degrade by over <strong>{((wpValue - dyValue) / dyValue * 100).toFixed(0)}%</strong>. Modern search indexing engines apply automatic ranking decay penalties to domains exceeding a 2.5-second LCP benchmark. Custom-coded React stays consistently below <strong>0.30 seconds</strong>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

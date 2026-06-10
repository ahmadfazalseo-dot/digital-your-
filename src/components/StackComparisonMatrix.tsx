import { useState } from "react";
import { Sparkles, Check, X, ShieldAlert, Cpu, Award } from "lucide-react";

export function StackComparisonMatrix() {
  const [activeTab, setActiveTab] = useState<'speed' | 'seo' | 'security'>('speed');

  const comparisonData = {
    speed: [
      {
        feature: "Time to Interactive (TTI)",
        legacy: "4.8s - 7.5s (sluggish scripts)",
        dy: "0.2s - 0.5s (instant load)",
        status: "critical"
      },
      {
        feature: "Mobile Screen Refresh Rate",
        legacy: "30-45 FPS (flickering scroll)",
        dy: "Native 100-120 FPS (macOS fluid)",
        status: "advantage"
      },
      {
        feature: "Static Payload Distribution",
        legacy: "Fragmented heavy web servers",
        dy: "Global CDN Cloud Edge node networks",
        status: "advantage"
      },
      {
        feature: "Lighthouse Performance rating",
        legacy: "Failing range (24 - 48/100)",
        dy: "Pristine standard (98 - 100/100)",
        status: "critical"
      }
    ],
    seo: [
      {
        feature: "JSON-LD Semantic Schema Representation",
        legacy: "Generic basic headers",
        dy: "Custom board-certified schemas",
        status: "critical"
      },
      {
        feature: "Natural Language entity matching",
        legacy: "Simple keyword stuffing copy",
        dy: "Deep category & spatial mapping",
        status: "advantage"
      },
      {
        feature: "Indexing request latency",
        legacy: "Manual requests (days to weeks)",
        dy: "Instant search API triggers (30 mins)",
        status: "critical"
      },
      {
        feature: "Organic local citations",
        legacy: "Disconnected directory names",
        dy: "Pre-linked structural geolocations",
        status: "advantage"
      }
    ],
    security: [
      {
        feature: "System Core Attack Surface",
        legacy: "High risk (12+ vulnerable plugins)",
        dy: "Zero vulnerability headless static nodes",
        status: "critical"
      },
      {
        feature: "DDoS mitigation & bandwidth guard",
        legacy: "Standard server level boundaries",
        dy: "Autonomous continuous CDN shielding",
        status: "advantage"
      },
      {
        feature: "Patient / Client intake protection",
        legacy: "Generic forms storing text directly",
        dy: "TLS client-to-server encryption keys",
        status: "critical"
      },
      {
        feature: "Compliance specifications",
        legacy: "Unknown schema parameters",
        dy: "HIPAA, SOC2 & secure SSL certified",
        status: "advantage"
      }
    ]
  };

  return (
    <section id="stack-comparison-section" className="py-20 max-w-7xl mx-auto px-6 select-none relative">
      
      {/* Visual glowing light sources */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Header text */}
      <div className="max-w-xl mb-12 text-left">
        <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-1">Architecture Comparison Matrix</span>
        <h2 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
          How we challenge standard page builders.
        </h2>
        <p className="text-xs text-zinc-400 mt-2 font-sans font-medium">
          Whether you use WordPress, Wix, Squarespace, or generic template structures, you are losing up to 35% of traffic before the page translates to a visitor record. Check our direct comparison metrics below.
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="flex bg-zinc-950/80 p-1 rounded-full border border-white/5 max-w-sm mb-8 font-mono text-[10px]">
        <button
          id="btn-tab-speed"
          onClick={() => setActiveTab('speed')}
          className={`flex-1 py-2 rounded-full capitalize transition-all cursor-pointer ${
            activeTab === 'speed' 
              ? "bg-white text-black font-semibold shadow-sm" 
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Rendering Velocity
        </button>
        <button
          id="btn-tab-seo"
          onClick={() => setActiveTab('seo')}
          className={`flex-1 py-2 rounded-full capitalize transition-all cursor-pointer ${
            activeTab === 'seo' 
              ? "bg-white text-black font-semibold shadow-sm" 
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Organic SEO Schema
        </button>
        <button
          id="btn-tab-security"
          onClick={() => setActiveTab('security')}
          className={`flex-1 py-2 rounded-full capitalize transition-all cursor-pointer ${
            activeTab === 'security' 
              ? "bg-white text-black font-semibold shadow-sm" 
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Security & Access
        </button>
      </div>

      {/* Comparison Grid Board */}
      <div className="rounded-3xl border border-white/5 bg-[#050506]/80 backdrop-blur-md overflow-hidden text-left">
        
        {/* Table Column headers */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-zinc-950/80 p-6 border-b border-white/5 font-mono text-[10px] text-zinc-500 uppercase tracking-widest font-bold">
          <div className="md:col-span-4">Specification Dimension</div>
          <div className="md:col-span-4 flex items-center gap-1.5 text-rose-400/80">
            <ShieldAlert className="w-3.5 h-3.5" /> Legacy Builder Stacks
          </div>
          <div className="md:col-span-4 flex items-center gap-1.5 text-blue-400">
            <Cpu className="w-3.5 h-3.5 animate-pulse" /> Digital Your Platform
          </div>
        </div>

        {/* Data lines representing variables */}
        <div className="divide-y divide-white/5">
          {comparisonData[activeTab].map((item, idx) => (
            <div 
              key={idx} 
              className="grid grid-cols-1 md:grid-cols-12 gap-4 p-6 hover:bg-zinc-950/40 transition-colors"
            >
              {/* Feature column */}
              <div className="md:col-span-4 flex flex-col justify-center space-y-1">
                <span className="text-xs font-semibold text-white font-sans">{item.feature}</span>
                {item.status === "critical" && (
                  <span className="font-mono text-[8px] text-blue-500 uppercase tracking-widest font-bold flex items-center gap-1">
                    <Award className="w-2.5 h-2.5" /> Core conversion pillar
                  </span>
                )}
              </div>

              {/* Legacy column */}
              <div className="md:col-span-4 flex items-center gap-2 text-xs font-mono text-zinc-500">
                <X className="w-4 h-4 text-rose-500/60 shrink-0" />
                <span>{item.legacy}</span>
              </div>

              {/* Digital Your column */}
              <div className="md:col-span-4 flex items-center gap-2 text-xs font-semibold text-white">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-sans">{item.dy}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

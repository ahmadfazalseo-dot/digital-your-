import { useState } from "react";
import { 
  Terminal, Shield, Zap, RefreshCw, Cpu, Check, Users, 
  HelpCircle, HardDrive, Smartphone, AlertCircle, TrendingUp, 
  DollarSign, ArrowRight, Play, Server, Layers, Search, Code2, CheckCircle, Flame
} from "lucide-react";

// For Toast/App notifications
interface SpecializedProps {
  addToast?: (text: string, type?: "success" | "error" | "info") => void;
  selectedIndustryId?: string;
  key?: string;
}

// ---------------------------------------------------------
// 1. HOME: Interactive "Under the Hood" Blueprint Simulator
// ---------------------------------------------------------
export function SpecializedHomeSection() {
  const [activeTab, setActiveTab] = useState<"bloated" | "handcoded">("handcoded");

  return (
    <section id="special-home-section" className="py-20 max-w-7xl mx-auto px-6 select-none border-t border-slate-100">
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
        <span className="font-mono text-xs text-blue-600 uppercase tracking-widest inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full font-bold">
          <Cpu className="w-3.5 h-3.5" />
          Technical Telemetry
        </span>
        <h2 className="font-display font-semibold text-3xl text-slate-900 tracking-tight">
          How We Build vs. Standard Agency Bloat
        </h2>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto">
          95% of agencies rely on sluggish drag-and-drop page builders that inject excess nests of legacy code. We build clean, compiled React nodes for maximum Speed Index scores.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-xs">
        {/* Toggle Controls */}
        <div className="flex bg-slate-200/60 p-1.5 rounded-full max-w-md mx-auto mb-8 border border-slate-300/40">
          <button
            onClick={() => setActiveTab("bloated")}
            className={`flex-1 text-center py-2.5 rounded-full text-[11px] font-mono tracking-wider transition-all cursor-pointer ${
              activeTab === "bloated" 
                ? "bg-white border border-red-200 text-red-600 font-bold shadow-xs" 
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            WordPress / Theme Bloat
          </button>
          <button
            onClick={() => setActiveTab("handcoded")}
            className={`flex-1 text-center py-2.5 rounded-full text-[11px] font-mono tracking-wider transition-all cursor-pointer ${
              activeTab === "handcoded" 
                ? "bg-white border border-blue-200 text-blue-600 font-bold shadow-xs" 
                : "text-slate-500 hover:text-slate-800"
            }`}
          >
            Digital Your Handcoded DOM
          </button>
        </div>

        {/* Visual Engine Display */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Diagnostic Console Panel */}
          <div className="md:col-span-7 bg-slate-900 rounded-2xl border border-slate-950 p-5 font-mono text-[10px] flex flex-col justify-between space-y-4 shadow-md">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-slate-500" />
                  RENDER_FLOW_CONSOLES
                </span>
                <span className={`w-2 h-2 rounded-full ${activeTab === "handcoded" ? "bg-emerald-500 animate-pulse" : "bg-red-500"}`} />
              </div>

              {activeTab === "bloated" ? (
                <div className="space-y-2 text-red-400">
                  <div className="text-slate-500">[0.00s] HTTP REQUEST: waiting for MySQL DB query...</div>
                  <div className="text-slate-500 font-normal">[0.85s] PHP process compiled on server host.</div>
                  <div className="flex items-start gap-1">
                    <span className="text-red-500 font-bold">⚠️ FATAL:</span>
                    <span>Render-blocking CSS from theme styles & block builder plugins.</span>
                  </div>
                  <div>[1.50s] Loading Google Fonts, recaptcha.js, and fontawesome SVGs.</div>
                  <div className="text-red-500">[2.20s] JS-heap size exceeded 14.8MB due to elementor-frontend.js.</div>
                  <div className="text-slate-500">[3.10s] First Contentful Paint delivered.</div>
                  <div className="text-red-400 font-bold">[CRITICAL] Cumulative Layout Shift detected during image crawl.</div>
                </div>
              ) : (
                <div className="space-y-2 text-emerald-400">
                  <div className="text-slate-500">[0.00s] HTTP REQUEST: serving flat, pre-compiled static assets from edge CDN.</div>
                  <div className="text-emerald-400 font-normal">[0.05s] Time-To-First-Byte received. HTML parsed instantly.</div>
                  <div className="flex items-start gap-1">
                    <span className="text-emerald-400 font-bold">✓ SUCCESS:</span>
                    <span>Inline Critical CSS utilized. Zero external stylesheets blocking the preview.</span>
                  </div>
                  <div>[0.12s] Fast font handshake achieved. Layout stable.</div>
                  <div className="text-emerald-400">[0.18s] Total DOM tree size is under 350 nodes. Performance threshold clear.</div>
                  <div className="text-slate-500">[0.21s] Time-To-Interactive ready. JavaScript payload is under 15KB.</div>
                  <div className="text-emerald-400 font-bold">[PERFECT] 100/100 Mobile audit score dispatched.</div>
                </div>
              )}
            </div>

            {/* Performance Indicators */}
            <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl space-y-2">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-400">Time-To-Interactive (TTI)</span>
                <span className={activeTab === "handcoded" ? "text-emerald-400 font-bold" : "text-red-400 font-bold"}>
                  {activeTab === "handcoded" ? "0.2s" : "3.1s"}
                </span>
              </div>
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-700 ${activeTab === "handcoded" ? "bg-emerald-500 w-[100%]" : "bg-red-500 w-[20%]"}`} 
                />
              </div>
            </div>
          </div>

          {/* Core Takeaways */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-3 text-left">
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block font-bold">Performance Analytics</span>
              <h3 className="font-display font-semibold text-lg text-slate-900">
                {activeTab === "handcoded" ? "Lightning fast, native asset speeds" : "The high cost of heavy legacy builders"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {activeTab === "handcoded" 
                  ? "Because our pages are clean and compiled as native, lightweight DOM nodes, search engine spiders easily traverse your text schemas, boosting your organic keyword placement scores instantly."
                  : "Every time a customer visits an unoptimized template-built site, their browser must parse dozens of redundant plugins and bulky stylesheets, driving up bounce rates and killing qualified leads."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center font-mono text-[9px]">
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <span className="text-slate-500 block">BUNDLE SIZE</span>
                <strong className={`text-xs font-sans block mt-1 font-bold ${activeTab === "handcoded" ? "text-emerald-600" : "text-red-600"}`}>
                  {activeTab === "handcoded" ? "14 KB" : "4.2 MB"}
                </strong>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <span className="text-slate-500 block">SEO VISIBILITY</span>
                <strong className={`text-xs font-sans block mt-1 font-bold ${activeTab === "handcoded" ? "text-emerald-600" : "text-red-600"}`}>
                  {activeTab === "handcoded" ? "99/100" : "55/100"}
                </strong>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 2. SERVICES: Interactive Handcoded Stack Customizer Matrix
// -------------------------------------------------------------
export function SpecializedServicesSection() {
  const [selectedTech, setSelectedTech] = useState<"css" | "seo" | "images" | "cdn">("css");

  const techDetails = {
    css: {
      title: "Handcoded Critical Utilities",
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      description: "We don't load huge style files that browsers read line-by-line. Instead, our utility classes compile directly into inline fragments, meaning your typography and structures display within milliseconds of loading.",
      metric: "72% fewer style bytes blocking your structure"
    },
    seo: {
      title: "Perfect JSON-LD & OpenGraph Mapping",
      icon: <Search className="w-5 h-5 text-purple-400" />,
      description: "We hardcode rich custom schemas (Schema.org/JSON-LD, BreadcrumbLists, LocalBusiness, FAQ schemas) right inside the HTML code. This makes googlebot fall in love with your pages instantly.",
      metric: "Semantic schemas configured for search maps"
    },
    images: {
      title: "Multi-Format WebP Asset Bundler",
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      description: "Any photographic asset uploaded onto your site gets autocompiled on our build systems into Google WebP layout dimensions, serving pristine high-resolution visuals at an absolute fraction of regular PNG weights.",
      metric: "Automatic 85% compression with crisp visual alignment"
    },
    cdn: {
      title: "Static Edge Distribution Networks",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      description: "Instead of relying on a single, sluggish server that crashes, your static builds are cached on global servers around the world. A visitor from Tokyo gets the same instant response as one in Chicago.",
      metric: "Global Time-To-First-Byte is consistently under 80ms"
    }
  };

  return (
    <section id="special-services-section" className="py-20 max-w-7xl mx-auto px-6 select-none border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
        <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest inline-flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5" />
          The Modern Technical Engine
        </span>
        <h2 className="font-display font-medium text-3xl text-white tracking-tight">
          Pillars of Our Premium Code Quality
        </h2>
        <p className="text-xs text-zinc-400">
          Click an architectural node below to see technical implementation rules we program into every single project fileset.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
        {/* Tech Node List */}
        <div className="md:col-span-5 space-y-3 flex flex-col justify-center">
          {(Object.keys(techDetails) as Array<keyof typeof techDetails>).map((key) => {
            const isActive = selectedTech === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedTech(key)}
                className={`w-full p-4 rounded-xl text-left border flex items-center justify-between transition-all cursor-pointer ${
                  isActive 
                    ? "bg-blue-50 border-blue-200 shadow-md text-blue-700" 
                    : "bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg border ${isActive ? "bg-indigo-500/10 border-indigo-500/20" : "bg-zinc-900 border-white/5"}`}>
                    {techDetails[key].icon}
                  </div>
                  <div>
                    <span className="text-xs font-semibold block capitalize tracking-tight">{key} Architecture</span>
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">SYSTEM NODE</span>
                  </div>
                </div>
                <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? "translate-x-1 text-indigo-400" : "text-zinc-600"}`} />
              </button>
            );
          })}
        </div>

        {/* Node Deep Dive Details Card */}
        <div className="md:col-span-7 bg-zinc-900/40 p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-[9px] uppercase font-mono text-indigo-400">
              Active Spec: {selectedTech.toUpperCase()}_PIPELINE
            </div>

            <h3 className="font-display font-medium text-xl text-white">
              {techDetails[selectedTech].title}
            </h3>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              {techDetails[selectedTech].description}
            </p>
          </div>

          <div className="bg-zinc-950 p-4 rounded-xl border border-white/5 flex items-center gap-3">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs font-mono text-zinc-200">
              {techDetails[selectedTech].metric}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 3. AUDIT: Google Crawler Bot Simulator (Crawl Intelligence Playground)
// -------------------------------------------------------------
export function SpecializedAuditSection() {
  const [activeBot, setActiveBot] = useState<"google" | "bing" | "ahrefs">("google");

  const botResponses = {
    google: {
      name: "Googlebot (Desktop & Mobile-First)",
      agentName: "Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MHC19J) AppleWebKit/537.36... Chrome/W.X.Y.Z Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
      behavior: "Inspects LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift) instantly. Googlebot prioritizes light HTML streams and extracts semantic JSON-LD structures to format beautiful search snippets.",
      crawlSuccess: ["✓ Valid JSON-LD Schema Registered", "✓ 100% Core Web Vitals Pass", "✓ Semantic Header Hierarchy Compliant", "✓ Adaptive Mobile Viewport Configured"]
    },
    bing: {
      name: "Bingbot (Semantic Indexer)",
      agentName: "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)",
      behavior: "Relies heavily on precise heading hierarchies, anchor text attributes, and internal page flows. Bingbot ranks handcoded static content rapidly due to low crawl overhead and crisp URL structure paths.",
      crawlSuccess: ["✓ Inline Alt Tags Complete", "✓ Clean URL Parameter Formatting", "✓ Secure SSL Security Handshake Registered", "✓ Fast Resource Caching Indicators"]
    },
    ahrefs: {
      name: "AhrefsBot (Organic Backlink Crawler)",
      agentName: "Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)",
      behavior: "Crawl bot specialized in mapping outbound linking schemas, domain integrity, and semantic trust clusters. Runs frequently to document traffic spikes and index internal contextual authority zones.",
      crawlSuccess: ["✓ Clean Rel-Canonical Anchors", "✓ Instant Robots.txt Parser Agreement", "✓ Zero Recurrent Crawl Looping", "✓ Elite Interlinked Sitemap Matrix"]
    }
  };

  return (
    <section id="special-audit-section" className="py-20 max-w-7xl mx-auto px-6 select-none border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
        <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest inline-flex items-center gap-1.5">
          <Search className="w-3.5 h-3.5 animate-pulse" />
          The Crawl Intelligence Matrix
        </span>
        <h2 className="font-display font-medium text-3xl text-white tracking-tight">
          How Search Engines Crawl Your Site
        </h2>
        <p className="text-xs text-zinc-400">
          Our codebase is designed so search scraper bots can index your content within fractions of a second. Alternate the agents to study crawl behaviors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
        
        {/* Left Column: Selector */}
        <div className="md:col-span-4 space-y-2">
          {(Object.keys(botResponses) as Array<keyof typeof botResponses>).map((key) => {
            const isActive = activeBot === key;
            return (
              <button
                key={key}
                onClick={() => setActiveBot(key)}
                className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer ${
                  isActive 
                    ? "bg-emerald-50 border-emerald-250 shadow-md text-emerald-700" 
                    : "bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50/50"
                }`}
              >
                <div className="font-mono text-[9px] text-zinc-500 uppercase block mb-1">CRAWL SPIDER</div>
                <div className="text-xs font-semibold block">{botResponses[key].name}</div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Code Window Display */}
        <div className="md:col-span-8 bg-zinc-950 p-6 rounded-2xl border border-white/5 font-mono text-[10px] space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-zinc-400 flex items-center gap-1.5 uppercase font-semibold">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                ACTIVE_SPIDER_SHELL
              </span>
              <span className="text-zinc-500 text-[8px] tracking-wider font-mono">STATUS: SIM_OK</span>
            </div>

            <div className="space-y-2">
              <div className="text-zinc-500 uppercase text-[9px]">Request Headers:</div>
              <div className="bg-zinc-900/50 p-3 rounded-lg border border-white/5 text-zinc-300 break-all leading-relaxed">
                User-Agent: {botResponses[activeBot].agentName}
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed font-sans text-xs">
              {botResponses[activeBot].behavior}
            </p>

            <div className="space-y-2">
              <div className="text-zinc-500 uppercase text-[9px]">Verification Checklist:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-emerald-400 font-semibold font-sans">
                {botResponses[activeBot].crawlSuccess.map((item, id) => (
                  <div key={id} className="flex items-center gap-1.5 text-xs bg-emerald-500/5 p-2 rounded border border-emerald-500/10">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 4. PORTFOLIO: Interactive Speed & Connection Simulator Lab
// -------------------------------------------------------------
export function SpecializedPortfolioSection() {
  const [activeSpeed, setActiveSpeed] = useState<"fiber" | "lte" | "3g">("fiber");

  const loadSpeeds = {
    fiber: {
      name: "Fiber/5G Broadband Connection",
      latency: "12 ms",
      loadTime: "0.15 seconds",
      efficiency: "Instantaneous code handshake"
    },
    lte: {
      name: "Standard Mobile 4G LTE",
      latency: "45 ms",
      loadTime: "0.24 seconds",
      efficiency: "Visually stable layout under 1/4 second"
    },
    "3g": {
      name: "Slow Throttled 3G Mobile",
      latency: "240 ms",
      loadTime: "0.58 seconds",
      efficiency: "First Contentful Paint completed under 400ms"
    }
  };

  return (
    <section id="special-portfolio-section" className="py-20 max-w-7xl mx-auto px-6 select-none border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
        <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest inline-flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
          Prestige Speed Simulation Lab
        </span>
        <h2 className="font-display font-medium text-3xl text-white tracking-tight">
          How Our Sites Load Worldwide
        </h2>
        <p className="text-xs text-zinc-400">
          Digital Your sites are handcoded with flat static structures to ensure loading benchmarks stay consistent even in low-reception zones. Simulate connection speeds below.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bento-card-bg p-6 md:p-8 rounded-3xl border border-white/5 space-y-8">
        
        {/* Speed Toggles */}
        <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          {(["fiber", "lte", "3g"] as const).map((key) => {
            const isActive = activeSpeed === key;
            return (
              <button
                key={key}
                onClick={() => setActiveSpeed(key)}
                className={`py-3 rounded-lg text-center text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  isActive 
                    ? "bg-white border border-blue-250 text-blue-600 font-bold shadow-xs" 
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {key} SIM
              </button>
            );
          })}
        </div>

        {/* Loading Bar Simulator Visualization */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-zinc-200">{loadSpeeds[activeSpeed].name}</span>
            <span className="font-mono text-indigo-400 font-bold">{loadSpeeds[activeSpeed].loadTime}</span>
          </div>

          <div className="relative w-full h-4 bg-zinc-950 rounded-full border border-white/5 overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-700`}
              style={{
                width: activeSpeed === "fiber" ? "100%" : activeSpeed === "lte" ? "82%" : "45%"
              }}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 text-center font-mono text-[10px] pt-4 border-t border-white/5">
            <div>
              <span className="text-zinc-500 block uppercase">SERVER RESPONSE LATENCY</span>
              <strong className="text-white block mt-0.5">{loadSpeeds[activeSpeed].latency}</strong>
            </div>
            <div>
              <span className="text-zinc-500 block uppercase">USER EXPERIENCED EFFICIENCY</span>
              <strong className="text-white block mt-0.5">{loadSpeeds[activeSpeed].efficiency}</strong>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 5. ABOUT: The Zero-Bloat Manifesto Timeline
// -------------------------------------------------------------
export function SpecializedAboutSection() {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      label: "STEP 1: THE DISCOVERY",
      title: "An agency market flooded with slow, heavy template packages.",
      desc: "In 2021, we realized that 90% of local businesses were paying thousands for pages that took 4 seconds to load. We discarded heavy drag-builders to write pure static structures."
    },
    {
      label: "STEP 2: COGNITIVE MATCHING",
      title: "Aligning human copywriting directly with robot crawl schemas.",
      desc: "An organic lead page is empty words unless crawl bots can index it. On day one of production, we weave semantic schemas in real-time under custom layout patterns."
    },
    {
      label: "STEP 3: TRANSPARENT VALUE",
      title: "Zero technical jargon. Complete commercial ownership.",
      desc: "You own every single directory of code, your domain, and your data logs. No locked-in custom content management software, and definitely zero hidden service retainers."
    }
  ];

  return (
    <section id="special-about-section" className="py-20 max-w-7xl mx-auto px-6 select-none border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
        <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest inline-flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-blue-500" />
          The Zero-Bloat Manifesto
        </span>
        <h2 className="font-display font-medium text-3xl text-white tracking-tight">
          How Digital Your Redefined Web Design
        </h2>
        <p className="text-xs text-zinc-400">
          Our history, standards, and pure commitment to programmatic craftsmanship. Click each cornerstone to read our story.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Navigation Step Blocks */}
        <div className="md:col-span-5 space-y-3 flex flex-col justify-center">
          {pillars.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                activeStep === idx 
                  ? "bg-blue-50 border-blue-200 shadow-md text-blue-700 font-medium" 
                  : "bg-white border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-50/50"
              }`}
            >
              <div className="font-mono text-[9px] mb-1">{item.label}</div>
              <div className="text-xs font-semibold">{item.title.slice(0, 42)}...</div>
            </button>
          ))}
        </div>

        {/* Detailed Timeline Text Card */}
        <div className="md:col-span-7 bg-zinc-900/40 p-6 md:p-8 rounded-3xl border border-white/5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">
              Cornerstone Philosophy Node_{activeStep + 1}
            </span>
            <h3 className="font-display font-medium text-lg text-white leading-snug">
              {pillars[activeStep].title}
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              {pillars[activeStep].desc}
            </p>
          </div>

          <div className="border-t border-white/5 pt-4 flex justify-between items-center text-[10px] text-zinc-500 font-mono">
            <span>UNIFIED STUDIO STANDARD</span>
            <span>✓ VERIFIED STATUS: ACTIVE</span>
          </div>
        </div>

      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 6. CONTACT: SLA & Escrow Assurance Monitor Matrix
// -------------------------------------------------------------
export function SpecializedContactSection() {
  const guarantees = [
    {
      title: "Minimum 95 Performance Guarantee",
      desc: "If your finished mobile speed score crawls below 95 on official Google Lighthouse crawlers, you receive a complete structural refund, no questions asked."
    },
    {
      title: "Zero Jargon Direct Communication",
      desc: "You deal directly with technical software directors and graphic developers, not junior account agents quoting static decks. Perfect alignment instantly."
    },
    {
      title: "Full Code Repositories Handover",
      desc: "You have 100% full administrative clearance and intellectual rights of your files. Safe, portable, offline-first code. You own everything."
    }
  ];

  return (
    <section id="special-contact-section" className="py-20 max-w-7xl mx-auto px-6 select-none border-t border-white/5">
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
        <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest inline-flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5 text-blue-400" />
          Elite Service SLAs
        </span>
        <h2 className="font-display font-medium text-3xl text-white tracking-tight">
          Pragmatic Client Assurances
        </h2>
        <p className="text-xs text-zinc-400">
          We back our engineering frameworks with technical guarantees to keep the onboarding process stress-free and high-trust.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {guarantees.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bento-card-bg border border-white/5 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center font-mono text-indigo-400 text-xs font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-semibold text-xs text-zinc-100">{item.title}</h3>
              <p className="font-sans text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
            <div className="font-mono text-[9px] text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SLA CONTRACT_SECURED
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 7. INDUSTRY PAGES: Multiplier Calculators
// -------------------------------------------------------------
export function SpecializedIndustrySection({ selectedIndustryId }: SpecializedProps) {
  // Find custom parameters for all 10 specialized industries
  let label = "General Lead Acquisition Simulator";
  let metricLabel = "Estimated Customer Lifetime Value";
  let defaultValue = 2500;

  switch (selectedIndustryId) {
    case "med-spa":
      label = "Patient Booking Multiplier";
      metricLabel = "Avg Patient Program Value (LTV)";
      defaultValue = 1500;
      break;
    case "property-mgmt":
      label = "Leasing Lead Pipeline Estimator";
      metricLabel = "Avg Resident Contract LTV";
      defaultValue = 18000;
      break;
    case "commercial-janitorial":
      label = "Commercial Cleaning Contract Estimator";
      metricLabel = "Avg Annual Contract Placement Value";
      defaultValue = 24000;
      break;
    case "solar-install":
      label = "Solar Installer Assessment Simulator";
      metricLabel = "Avg Home Solar Contract Value";
      defaultValue = 16500;
      break;
    case "senior-home-care":
      label = "Home Care Placement Multiplier";
      metricLabel = "Avg Care Program Relationship LTV";
      defaultValue = 9500;
      break;
    case "custom-pool":
      label = "Custom Pool Excavation Profit Calculator";
      metricLabel = "Avg High-End Inground Build Value";
      defaultValue = 92000;
      break;
    case "commercial-security":
      label = "SLA Access Control ROI Multiplier";
      metricLabel = "Avg Commercial Surveillance System Setup";
      defaultValue = 45000;
      break;
    case "mobile-iv":
      label = "IV Therapy Booking Demand Multiplier";
      metricLabel = "Avg Hydration Party/Group Package Value";
      defaultValue = 750;
      break;
    case "epoxy-flooring":
      label = "Industrial Flooring Finish Profit Estimator";
      metricLabel = "Avg Coating Installation Value";
      defaultValue = 5500;
      break;
    case "weight-loss-clinic":
      label = "Patient Treatment Sign-up Multiplier";
      metricLabel = "Avg Weight Management Program LTV";
      defaultValue = 3800;
      break;
  }

  const [visitorCount, setVisitorCount] = useState<number>(3000);
  const [conversionRate, setConversionRate] = useState<number>(2.5); // Initial conversions percent
  const customerLtv = defaultValue;

  const estimatedConversions = Math.round((visitorCount * conversionRate) / 100);
  const totalRevenuePotential = estimatedConversions * customerLtv;

  return (
    <section id="special-industry-section" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 select-none border-t border-slate-100">
      <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
        <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full font-bold">
          <TrendingUp className="w-3.5 h-3.5" />
          {label}
        </span>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-slate-950 tracking-tight">
          Estimate Your Organic Sector Value
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
          Adjust the metrics below to calculate the potential financial return of funneling premium, purchase-ready keyword traffic into a bespoke handcoded static funnel.
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-blue-100 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-lg shadow-blue-500/5">
        {/* Slider Controls */}
        <div className="md:col-span-6 space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between font-mono text-[10px] tracking-wider text-slate-500">
              <span className="uppercase">ESTIMATED TRAFFIC/MO</span>
              <strong className="text-slate-800 font-bold">{visitorCount.toLocaleString()} VISITS</strong>
            </div>
            <input 
              type="range" 
              min="1000" 
              max="20000" 
              step="500"
              value={visitorCount} 
              onChange={(e) => setVisitorCount(Number(e.target.value))}
              className="w-full accent-blue-600 bg-slate-100 rounded-lg cursor-pointer h-1.5"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between font-mono text-[10px] tracking-wider text-slate-500">
              <span className="uppercase font-semibold">TARGET OPT-IN %</span>
              <strong className="text-slate-800 font-bold">{conversionRate}%</strong>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="0.5"
              value={conversionRate} 
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full accent-blue-600 bg-slate-100 rounded-lg cursor-pointer h-1.5"
            />
          </div>

          <div className="bg-blue-50/40 p-4 rounded-2xl border border-blue-100/50 space-y-1 text-left">
            <div className="font-mono text-[8px] text-blue-600 uppercase tracking-widest font-bold">PRESET REFERENCE METRIC: {metricLabel}</div>
            <div className="text-slate-900 font-sans font-extrabold text-base">${customerLtv.toLocaleString()} USD</div>
          </div>
        </div>

        {/* Results Matrix Block */}
        <div className="md:col-span-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/30 p-6 rounded-2xl border border-blue-100/60 text-center space-y-5">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block font-semibold">ESTIMATED LIVE LEADS GENERATED</span>
            <div className="text-3xl font-display font-semibold text-slate-900">{estimatedConversions}</div>
          </div>

          <div className="space-y-1">
            <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block font-bold">ADDITIONAL REVENUE POTENTIAL / MO</span>
            <div className="text-2xl sm:text-3xl font-display font-bold text-blue-600 tracking-tight">
              ${totalRevenuePotential.toLocaleString()}
            </div>
          </div>

          <div className="text-[10px] font-mono text-blue-500 bg-blue-100/40 px-3 py-1.5 rounded-lg border border-blue-100">
            *Compound impact achieved through fast, instant page load funnels.
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// 8. DEEP DIVE: Micro-Metric Infrastructure Benchmarks
// -------------------------------------------------------------
export function SpecializedDeepDiveSection() {
  return (
    <section id="special-deep-dive-section" className="py-12 max-w-7xl mx-auto px-4 sm:px-6 select-none border-t border-slate-200/50">
      <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
        <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full font-bold">
          <Layers className="w-3.5 h-3.5 text-blue-600" />
          TECHNICAL CORE BENCHMARKS
        </span>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-slate-950 tracking-tight">
          Case Study Infrastructure Speeds
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          The exact compile-time and caching performance metrics validated during our flagship case study deployments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto font-mono text-[10px] text-left">
        
        <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <span className="text-slate-500 uppercase block tracking-wider font-semibold">BUILD MEMORY FOOTPRINT</span>
          <div className="text-slate-900 font-sans text-lg font-bold">18.4 KB Flat file</div>
          <p className="text-slate-500 text-[11px] font-sans leading-relaxed">
            Zero heavy package lockups. Clean compiled HTML structure served directly via global CDN edge nodes.
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <span className="text-slate-500 uppercase block tracking-wider font-semibold">FIRST INPUT DELAY (FID)</span>
          <div className="text-emerald-600 font-sans text-lg font-bold">14 Milliseconds</div>
          <p className="text-slate-500 text-[11px] font-sans leading-relaxed">
            Immediate browser interface response upon user interaction, exceeding standard web accessibility thresholds.
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <span className="text-slate-500 uppercase block tracking-wider font-semibold">INTERACTIVE STABILITY</span>
          <div className="text-slate-900 font-sans text-lg font-bold">0.00% CLS Shift</div>
          <p className="text-slate-500 text-[11px] font-sans leading-relaxed">
            Layout elements stay perfectly fixed and aligned as asynchronous graphical visual assets render.
          </p>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-slate-200 space-y-3 shadow-xs">
          <span className="text-slate-500 uppercase block tracking-wider font-semibold">CRAWL SPIDER INDEX RATE</span>
          <div className="text-blue-600 font-sans text-lg font-bold">100% Crawl rate</div>
          <p className="text-slate-500 text-[11px] font-sans leading-relaxed">
            Search engine bots index all localized schema data directly without experiencing any client rendering timeouts.
          </p>
        </div>

      </div>
    </section>
  );
}

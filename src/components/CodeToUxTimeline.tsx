import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Compass, Paintbrush, Sliders, CheckCircle, ArrowRight, ArrowDown, HelpCircle, Sparkles } from "lucide-react";

interface TimelineStep {
  phase: number;
  label: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  diagnosticAdvice: string;
  checkpoint: string;
  before: string;
  after: string;
}

export function CodeToUxTimeline() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: TimelineStep[] = [
    {
      phase: 1,
      label: "Diagnostic Assessment",
      title: "Crawl Engine Security & Code Auditing",
      shortDesc: "Trace paint-blocking plugins, rendering leaks, bulky API payloads, and structural SEO blind spots.",
      icon: <Search className="w-5 h-5 text-blue-600" />,
      diagnosticAdvice: "Avoid basic page diagnostics that only log speed. Test indexable semantic headers and look for DOM depth constraints that confuse machine spider crawlers.",
      checkpoint: "90+ point initial gap mapping document across 3 critical viewport devices.",
      before: "Bloated DOM of 3,500+ nodes; blocking client scripts in head; unindexable services list.",
      after: "Sleek, streamlined structure; critical render items prioritized; clear crawler entity paths."
    },
    {
      phase: 2,
      label: "Visual Rhythm Mapping",
      title: "Negative Space & Negative-Inertia Grid Planning",
      shortDesc: "Map exact layout rhythm, content hierarchies, tactile button bounds, and editorial typography pairings.",
      icon: <Compass className="w-5 h-5 text-indigo-600" />,
      diagnosticAdvice: "Establish consistent spacing divisions (e.g. using a strict 4px or 8px baseline grid). Never stretch sections to fill width randomly, creating visual fatigue.",
      checkpoint: "High-contrast structural mockup detailing viewport transitions & component bounds.",
      before: "Squeezed content widgets, tiny tap boundaries, generic font sizing creating low readability.",
      after: "Breathable modern spacing; tap bounds >= 44px; premium typography hierarchy built with Inter."
    },
    {
      phase: 3,
      label: "Surgical Refactoring",
      title: "Custom Zero-Bloat Handwritten Styling",
      shortDesc: "Translate visual representations into lightweight Tailwind layouts, replacing standard builder frameworks.",
      icon: <Paintbrush className="w-5 h-5 text-purple-600" />,
      diagnosticAdvice: "Writing native CSS or lightweight Tailwind utility patterns eliminates rendering lags and ensures absolute consistency when visitors resize screens.",
      checkpoint: "100% component isolation with semantic class naming conventions & inline documentation.",
      before: "1.2MB of pre-packaged template CSS; nested page developer classes; rendering lag on scrolling.",
      after: "Zero-bloat utility styling compiling to less than 15KB total; flawless 120Hz mobile scroll rate."
    },
    {
      phase: 4,
      label: "Speed Engineering",
      title: "Server Performance & CDN Edge Routing",
      shortDesc: "Bypass typical hosting lags using pre-rendering nodes, edge routing headers, and resource preloading.",
      icon: <Sliders className="w-5 h-5 text-emerald-600" />,
      diagnosticAdvice: "Use static build-time rendering to deliver pages instantly. Serve dynamic values via lazy client requests after the layout is fully responsive.",
      checkpoint: "Automated pre-rendering asset configuration linked directly to global CDN Cloud nodes.",
      before: "850ms Time to First Byte waiting for bulky database loads; heavy images served in uncompressed formats.",
      after: "Sub-30ms initial server response; modern AVIF image formatting; instant view pre-rendering."
    },
    {
      phase: 5,
      label: "System Launch Guard",
      title: "Automated Reindexing & Metadata Deployment",
      shortDesc: "Embed board-certified Local JSON-LD Schemas and trigger immediate indexing crawls on search networks.",
      icon: <CheckCircle className="w-5 h-5 text-blue-600" />,
      diagnosticAdvice: "Manually checking schemas using search validation criteria ensures rich snippets and geographic metadata render perfectly in organic listings.",
      checkpoint: "Pristine Lighthouse optimization lock-in across Speed, SEO, and Security domains.",
      before: "No metadata markup; indexing latency of weeks; low rating recognition in search map widgets.",
      after: "Custom board-certified schemas; instant search crawler APIs; Google crawl triggered in minutes."
    }
  ];

  return (
    <section id="ux-timeline-section" className="py-20 max-w-7xl mx-auto px-6 select-none relative border-t border-slate-100">
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/[0.01] rounded-full filter blur-[100px] pointer-events-none" />
      
      {/* Header */}
      <div className="max-w-xl mb-16 text-left">
        <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full w-max">
          Code-to-UX Pipeline Milestone
        </span>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-2">
          Our Transformation Engine In Action
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 font-sans">
          Take a look at how we audit, write, and deploy high-performance codebases in real life. Select a phase on the left to review strategic benchmarks and actionable optimization advice.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Hand: Interactive Timeline Nodes (6 cols) */}
        <div className="lg:col-span-6 relative flex flex-col justify-between space-y-4">
          
          {/* Vertical progress background connection line */}
          <div className="absolute left-[29px] top-4 bottom-4 w-0.5 bg-slate-100 -z-10" />
          
          {/* Active progress tracker height overlay */}
          <motion.div 
            className="absolute left-[29px] top-4 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-500 -z-15 origin-top"
            style={{ 
              height: `${(activeStep / (steps.length - 1)) * 95}%`,
              transition: "height 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          />

          {steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                id={`ux-timeline-node-${idx}`}
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-3xl cursor-pointer transition-all duration-300 border flex items-start gap-5 group text-left ${
                  isSelected
                    ? "bg-white border-blue-200 ring-4 ring-blue-500/5 shadow-md"
                    : "bg-[#f8fafc]/40 border-slate-200/80 hover:bg-[#f8fafc] hover:border-slate-300"
                }`}
              >
                {/* Node Milestone Circle */}
                <div className="relative shrink-0">
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isSelected
                      ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/20"
                      : "bg-white border-slate-200 text-slate-400 group-hover:border-slate-350"
                  }`}>
                    {isSelected ? (
                      <span className="font-mono text-xs font-bold font-semibold">{step.phase}</span>
                    ) : (
                      step.icon
                    )}
                  </div>
                  {/* Small glowing micro point inside active item */}
                  {isSelected && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-ping" />
                  )}
                </div>

                {/* Content teaser */}
                <div className="space-y-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[8.5px] font-bold text-slate-450 uppercase tracking-wider">{step.label}</span>
                    <span className="font-mono text-[8px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      Phase {step.phase}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-xs sm:text-sm text-slate-805 group-hover:text-slate-900 transition-colors">
                    {step.title.split(" & ")[0]}
                  </h3>
                  <p className="font-sans text-[11px] text-slate-500 leading-normal line-clamp-2">
                    {step.shortDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Hand: Simulation Board Drawer / Deep Dive Detail (6 cols) */}
        <div className="lg:col-span-6 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col justify-between text-left space-y-6 select-text relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/[0.03] to-purple-500/[0.03] rounded-bl-3xl pointer-events-none" />

          {/* Title Header */}
          <div className="space-y-1.5 relative z-10">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="font-mono text-[10px] font-bold text-blue-600 uppercase tracking-widest leading-none">Aesthetic Pipeline Deep-Dive</span>
            </div>
            <h3 className="font-display font-semibold text-lg text-slate-900 leading-tight">
              {steps[activeStep].title}
            </h3>
            <p className="text-xs text-slate-600 font-sans leading-relaxed pt-1 select-text">
              {steps[activeStep].shortDesc}
            </p>
          </div>

          {/* Actionable Diagnostic advice section */}
          <div className="space-y-2.5 p-4 bg-slate-50 border border-slate-200/80 rounded-2xl relative z-10">
            <span className="font-mono text-[9px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-150 px-2 py-0.5 rounded uppercase leading-none">Advice Coordinator</span>
            <p className="font-sans text-xs text-slate-655 leading-relaxed selection:bg-indigo-50 select-text">
              {steps[activeStep].diagnosticAdvice}
            </p>
          </div>

          {/* Comparison Cards Before / After */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 relative z-10 select-none">
            {/* Before Column */}
            <div className="p-4 rounded-2xl border border-rose-100 bg-rose-50/15 space-y-2">
              <span className="font-mono text-[8.5px] font-bold text-rose-500 tracking-wider uppercase block">Standard Platforms</span>
              <p className="font-sans text-[11px] text-slate-600 leading-relaxed pr-1 select-text">
                {steps[activeStep].before}
              </p>
            </div>

            {/* After Column */}
            <div className="p-4 rounded-2xl border border-emerald-100 bg-emerald-50/15 space-y-2">
              <span className="font-mono text-[8.5px] font-bold text-emerald-600 tracking-wider uppercase block">Digital Your Platform</span>
              <p className="font-sans text-[11px] text-slate-800 leading-relaxed pr-1 font-medium select-text">
                {steps[activeStep].after}
              </p>
            </div>
          </div>

          {/* Progress Milepost Metric bar */}
          <div className="border-t border-slate-100 pt-5 flex flex-col sm:flex-row items-baseline gap-2 justify-between font-mono text-[10px] sm:text-xs">
            <div className="space-y-0.5">
              <span className="text-slate-400 block font-bold uppercase text-[9px]">Deliverable Blueprint Target</span>
              <strong className="text-slate-900 font-bold select-text font-sans leading-tight">
                {steps[activeStep].checkpoint}
              </strong>
            </div>
            
            <button
              id="ux-timeline-next-btn"
              onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
              className="mt-3 sm:mt-0 font-sans text-xs font-bold text-blue-600 flex items-center gap-1 cursor-pointer hover:text-blue-550 transition-colors bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 select-none"
            >
              Next Milestone
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

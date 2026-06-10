import { useState } from "react";
import { IndustryPageData, IndustryPortfolioProject } from "../industryData";
import { WebsiteAuditTool } from "./WebsiteAuditTool";
import { ProjectPlanner } from "./ProjectPlanner";
import { 
  ArrowRight, 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  Cpu, 
  AlertTriangle, 
  Heart, 
  Layers, 
  Clock, 
  Briefcase, 
  X,
  Code
} from "lucide-react";

interface IndustryPageProps {
  industry: IndustryPageData;
  addToast: (text: string, type: "success" | "error" | "info") => void;
  onViewDeepDive: () => void;
  onContactNav: () => void;
}

export function IndustryPage({ industry, addToast, onViewDeepDive, onContactNav }: IndustryPageProps) {
  const [selectedProject, setSelectedProject] = useState<IndustryPortfolioProject | null>(null);

  return (
    <div id="industry-page-container" className="space-y-20 selection:bg-zinc-800">
      
      {/* 1. Cinematic Outcome-Guaranteed Hero Section */}
      <section id="industry-hero" className="relative pt-24 pb-16 max-w-7xl mx-auto px-6 text-center select-none overflow-hidden">
        
        {/* Visual ambient glowing light sources */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full filter blur-[100px] pointer-events-none animate-pulse" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-[10px] uppercase font-mono text-blue-500 tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            Empirical Results Guaranteed
          </div>

          <h1 className="font-display font-medium text-4xl sm:text-6xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
            {industry.heroOffer}
          </h1>

          <p className="text-sm sm:text-base font-sans text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            {industry.heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <a
              href="#industry-audit-anchor"
              onClick={(e) => { e.preventDefault(); document.getElementById("industry-audit-anchor")?.scrollIntoView({ behavior: "smooth" }); }}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer shadow-lg flex items-center justify-center gap-1.5"
            >
              Analyze Your Domain
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#industry-case-study"
              onClick={(e) => { e.preventDefault(); document.getElementById("industry-case-study")?.scrollIntoView({ behavior: "smooth" }); }}
              className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/5 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              Examine Our Casework
              <Briefcase className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Core Specifications row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-20 text-left font-mono text-[10px]">
            <div className="p-5 rounded-2xl bento-card-bg">
              <span className="text-zinc-500 uppercase block mb-1">CRAWL ENGINE ACCESSIBILITY</span>
              <span className="text-white text-[11px] font-sans font-semibold">98+ Lighthouse Metric</span>
            </div>
            <div className="p-5 rounded-2xl bento-card-bg">
              <span className="text-zinc-500 uppercase block mb-1">SEO TRAFFIC INCREASE</span>
              <span className="text-white text-[11px] font-sans font-semibold">Custom localized schemas</span>
            </div>
            <div className="p-5 rounded-2xl bento-card-bg">
              <span className="text-zinc-500 uppercase block mb-1">DESIGN PRESTIGE LEVEL</span>
              <span className="text-white text-[11px] font-sans font-semibold">100% Handcoded React frameworks</span>
            </div>
            <div className="p-5 rounded-2xl bento-card-bg">
              <span className="text-zinc-500 uppercase block mb-1">STRATEGIC ALIGNMENT</span>
              <span className="text-white text-[11px] font-sans font-semibold">Tailored B2B outcomes</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Embedded Free Website Audit Tool Section */}
      <span id="industry-audit-anchor" className="block h-0" />
      <section className="bg-zinc-950/20 py-10 border-y border-white/5 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[70px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <WebsiteAuditTool addToast={addToast} />
        </div>
      </section>

      {/* 3. Personalized Industry Case Study Section */}
      <section id="industry-case-study" className="py-16 max-w-7xl mx-auto px-6 text-left select-none relative">
        <div className="absolute right-10 bottom-10 w-96 h-96 bg-indigo-600/5 rounded-full filter blur-[100px] pointer-events-none" />
        
        <div className="max-w-xl mb-12">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-2">VERIFIED SECTOR PROOF</span>
          <h2 className="font-display font-medium text-3xl text-white tracking-tight leading-none">
            Tailored Industry Case Study
          </h2>
          <p className="text-xs text-zinc-400 mt-2 font-sans font-medium">Explore how we delivered measurable conversions and lightning speed performance benchmarks for leading organizations in the {industry.name} workspace.</p>
        </div>

        {/* Bolder, highly custom Case Study Presentation Card */}
        <div className="p-8 sm:p-12 rounded-3xl bento-card-bg relative overflow-hidden border-blue-500/10">
          <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[80px]" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Case descriptive col */}
            <div className="lg:col-span-8 space-y-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block">ACTIVE METRIC SUMMARY</span>
              <h3 className="font-display font-semibold text-white text-xl sm:text-2xl leading-snug">
                {industry.caseStudy.title}
              </h3>

              <div className="space-y-4">
                <div className="border-l-2 border-rose-900/40 pl-4">
                  <span className="font-mono text-[9px] text-rose-400 uppercase tracking-widest block font-bold">Client Challenge</span>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-1">
                    {industry.caseStudy.challenge.substring(0, 240)}...
                  </p>
                </div>

                <div className="border-l-2 border-emerald-900/40 pl-4">
                  <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest block font-bold">Strategic Direct Solution</span>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans mt-1">
                    {industry.caseStudy.solution.substring(0, 240)}...
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  id="trigger-case-deep-dive"
                  onClick={onViewDeepDive}
                  className="px-6 py-3 rounded-xl text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer shadow-lg inline-flex items-center gap-2 group"
                >
                  Examine Deep Dive Case Study
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Quick Metrics columns */}
            <div className="lg:col-span-4 grid grid-cols-1 gap-4 font-mono text-[10px]">
              {industry.caseStudy.metrics.map((metric, idx) => (
                <div key={idx} className="bg-zinc-950 border border-white/5 p-5 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full filter blur-[20px]" />
                  <span className="text-zinc-500 uppercase block text-[8px] tracking-wider">{metric.label}</span>
                  <strong className="text-white text-xl mt-2 font-display block">{metric.value}</strong>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Specialized Industry Portfolio Section with at least 4 projects */}
      <section id="industry-portfolio" className="py-16 max-w-7xl mx-auto px-6 text-left select-none relative">
        
        <div className="max-w-xl mb-12">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-2">SECTOR REPERTOIRE</span>
          <h2 className="font-display font-medium text-3xl text-white tracking-tight leading-none">
            Tailored Industry Portfolio ({industry.portfolio.length} Projects)
          </h2>
          <p className="text-xs text-zinc-400 mt-2 font-sans font-medium">Handcrafted interfaces built specifically to acquire and convert qualified buyers in the {industry.name} marketplace.</p>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industry.portfolio.map((proj) => (
            <div
              id={`industry-project-${proj.id}`}
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bento-card-bg p-8 flex flex-col justify-between min-h-[280px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 bg-white" />
              
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">{proj.client}</span>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center p-1 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-black" />
                  </div>
                </div>

                <h3 className="font-display font-medium text-xl text-white group-hover:text-blue-400 transition-colors mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-md font-sans">
                  {proj.description}
                </p>
              </div>

              {/* Display metric info */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-end justify-between">
                <div>
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{proj.metricLabel}</div>
                  <div className="text-2xl font-display font-medium text-white tracking-tight mt-1">{proj.metric}</div>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase bg-zinc-900 border border-white/5 px-3 py-1 rounded-full">
                  Verified Result
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Connect with us - Project specifications compiler anchoring at the end */}
      <section id="industry-connection" className="py-16 bg-zinc-950/20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-xl mx-auto mb-10">
            <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-1">CONNECT WITH US</span>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">Configure Your Sector Specifications</h2>
            <p className="text-xs text-zinc-400 mt-2 font-sans font-medium">Provide details and connect instantly. Our system compiles specifications parameters to deliver bespoke high-velocity conversion channels.</p>
          </div>

          <div className="max-w-xl mx-auto">
            <ProjectPlanner addToast={addToast} />
          </div>
        </div>
      </section>

      {/* Dynamic Project Detail Modal Popup */}
      {selectedProject && (
        <div id="industry-project-modal" className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl rounded-3xl bg-zinc-950 border border-white/10 overflow-hidden shadow-2xl p-8 md:p-10 select-text">
            
            <button
              id="close-industry-modal"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6 text-left">
              <span className="font-mono text-xs text-blue-500">{selectedProject.client}</span>
              <h3 className="font-display font-semibold text-2xl text-white tracking-tight">{selectedProject.title}</h3>

              {/* Metric Callout Panel */}
              <div className="p-5 rounded-2xl bg-blue-600/5 border border-blue-500/10 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider block">{selectedProject.metricLabel}</span>
                  <strong className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mt-1">{selectedProject.metric}</strong>
                </div>
                <Cpu className="w-8 h-8 text-blue-500/20" />
              </div>

              {/* Strategy and Action Detail */}
              <div className="space-y-4">
                <h4 className="font-display font-semibold text-sm text-zinc-200">Execution Detail</h4>
                <p className="font-sans text-xs text-zinc-400 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="bg-zinc-900/30 p-5 rounded-xl border border-white/5 space-y-2">
                <span className="font-mono text-[10px] text-zinc-300 font-bold flex items-center gap-1">
                  <Code className="w-3.5 h-3.5 text-blue-400" /> IMPLEMENTED METHOD
                </span>
                <p className="font-sans text-[11px] text-zinc-400 leading-relaxed">{selectedProject.solution}</p>
              </div>

              {/* Bottom buttons */}
              <div className="border-t border-white/5 pt-6 flex justify-end">
                <button
                  id="close-industry-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer"
                >
                  Close Specification
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

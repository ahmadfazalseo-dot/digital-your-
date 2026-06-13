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
    <div id="industry-page-container" className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-10 select-none">
      
      {/* 1. Cinematic Outcome-Guaranteed Header / Hero */}
      <section id="industry-hero" className="relative text-center max-w-4xl mx-auto pt-10 pb-8 overflow-hidden">
        
        {/* Ambient glowing element backgrounds */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-blue-500/10 rounded-full filter blur-[100px] pointer-events-none" />
        
        <div className="space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/50 text-[10px] uppercase font-mono text-blue-600 tracking-wider">
            <Trophy className="w-3 h-3 text-blue-600" />
            Dedicated Growth Blueprint — {industry.name} Specialist Page
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-5xl text-slate-900 tracking-tight leading-tight max-w-3xl mx-auto">
            {industry.heroOffer}
          </h1>

          <p className="text-sm sm:text-base font-sans text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {industry.heroDesc}
          </p>
        </div>
      </section>

      {/* 2. PROOF CORNER (Case Study & Showcase Portfolio) - Positioned First under Hero for supreme instant evidence across devices */}
      <section id="industry-trust-block" className="pt-6 border-t border-slate-200/50 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Column Left/Mid: Case Proof Study */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-1 text-left">
              <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block">
                EXPERT SECTOR PROOF
              </span>
              <h3 className="font-display font-semibold text-slate-900 text-xl sm:text-2xl mt-1.5">
                Active Project Case Study: {industry.caseStudy.client}
              </h3>
              <p className="text-xs text-slate-500">
                Explore a unique, fully custom case study built specifically for the {industry.name} sector. Click below to view the entire separate deep-dive breakdown.
              </p>
            </div>

            <div className="p-6 bg-white border border-blue-100 rounded-3xl space-y-5 shadow-xs">
              <h4 className="font-display font-medium text-base sm:text-lg text-slate-800 leading-snug text-left">
                {industry.caseStudy.title}
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left bg-emerald-50/10 p-4 rounded-2xl border border-emerald-100/50">
                  <span className="font-mono text-[9px] text-emerald-600 uppercase tracking-wider block font-bold">THE CHALLENGE</span>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed font-sans">
                    {industry.caseStudy.challenge}
                  </p>
                </div>
                <div className="text-left bg-blue-50/10 p-4 rounded-2xl border border-blue-100/50">
                  <span className="font-mono text-[9px] text-blue-600 uppercase tracking-wider block font-bold">THE SOLUTION</span>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed font-sans">
                    {industry.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Metrics bar */}
              <div className="grid grid-cols-3 gap-2 bg-blue-50/10 p-4 rounded-xl border border-blue-100/50">
                {industry.caseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <span className="text-[9px] font-mono text-blue-600 uppercase block tracking-wider leading-none font-semibold">{metric.label}</span>
                    <strong className="text-slate-900 text-base font-display block mt-1.5 font-bold">{metric.value}</strong>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <span className="text-[11px] text-slate-500 font-mono text-left">
                  Separate Case Study report ready to inspect.
                </span>
                <button
                  id="deep-dive-trigger-case"
                  onClick={onViewDeepDive}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  Visit Full Separated Case Study Page
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Column Right: Specialized Repertoire Portfolio */}
          <div className="space-y-6 text-left">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block">
                SECTOR REPERTOIRE
              </span>
              <h3 className="font-display font-semibold text-slate-900 text-xl mt-1.5">
                Client Blueprint list
              </h3>
              <p className="text-xs text-slate-500">
                Tap on any client below to inspect custom specifications and metrics.
              </p>
            </div>

            <div className="space-y-3">
              {industry.portfolio.map((proj) => (
                <div
                  id={`project-click-${proj.id}`}
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="p-4 bg-white hover:bg-blue-50/20 hover:border-blue-300 border border-slate-200 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-4 shadow-2xs group"
                >
                  <div className="text-left space-y-1 min-w-0">
                    <span className="font-mono text-[9px] text-blue-600 uppercase tracking-wider font-semibold">{proj.client}</span>
                    <h4 className="font-display font-semibold text-xs text-slate-800 truncate">{proj.title}</h4>
                    <p className="text-[10px] text-slate-500 font-mono truncate">{proj.metricLabel}: <strong className="text-blue-600">{proj.metric}</strong></p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE CHOSEN ACTION PANELS (Dual-Choice Stacked Flow) - Positioned Below Case Evaluation */}
      <section id="industry-core-actions" className="relative z-10 pt-6 border-t border-slate-200/50">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full font-bold">
            CONVERSION PORTALS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 mt-2">What is your goal today?</h2>
          <p className="text-sm text-slate-600 mt-2 font-sans leading-relaxed">
            Run an interactive technical audit to analyze crawl latency, or map your system configurations directly inside the blueprint planner.
          </p>
        </div>

        {/* Stacked Layout: Full-width stacked components for ultimate readability */}
        <div className="space-y-12 max-w-4xl mx-auto">
          
          {/* Action A: The Website Diagnostic Crawler */}
          <div className="border border-blue-100 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(59,130,246,0.02)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full filter blur-[50px] pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-mono flex items-center justify-center font-bold">A</span>
                <span className="font-mono text-xs text-blue-600 uppercase font-semibold tracking-wider">OPTION A: RUN LIVE WEB DIAGNOSTIC COMPLIANCE CRAWLER</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 text-left">Analyze Your Existing Website</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans text-left">
                Our high-speed technical diagnostics crawler analyzes your page header metadata, core asset weights, responsive structure compliance, and organic SEO indexing gaps instantly.
              </p>

              {/* Embedded Diagnostic tool */}
              <div className="border-t border-slate-100 pt-6 mt-4">
                <WebsiteAuditTool addToast={addToast} />
              </div>
            </div>
          </div>

          {/* Action B: Specialized Project Specifications */}
          <div className="border border-emerald-100 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(16,185,129,0.01)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full filter blur-[50px] pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-emerald-500 text-white text-xs font-mono flex items-center justify-center font-bold">B</span>
                <span className="font-mono text-xs text-emerald-600 uppercase font-semibold tracking-wider">OPTION B: SPECIFICATION SPECIFIER &amp; CONTRACT DRAFTER</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 text-left">Interactive Specs &amp; Roadmap Planner</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans text-left">
                Define customized solution metrics, tech frameworks, required booking automation variables, or system parameters to instantly compile interactive specifications and route them directly to our experts.
              </p>

              {/* Embedded Specifications form */}
              <div className="border-t border-slate-100 pt-6 mt-4">
                <ProjectPlanner addToast={addToast} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Project Detail Modal Popup */}
      {selectedProject && (
        <div id="industry-project-modal" className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200/85 overflow-hidden shadow-2xl p-6 sm:p-8 select-text">
            
            <button
              id="close-industry-modal"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4 text-left">
              <span className="font-mono text-[10px] text-blue-600 font-bold uppercase">{selectedProject.client}</span>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-slate-900 leading-snug">{selectedProject.title}</h3>

              {/* Metric Callout Panel */}
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[8px] text-slate-500 uppercase tracking-wider block">{selectedProject.metricLabel}</span>
                  <strong className="text-xl font-display font-bold text-blue-600 tracking-tight mt-0.5 block">{selectedProject.metric}</strong>
                </div>
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>

              {/* Strategy and Action Detail */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">EXECUTION STRATEGY</span>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-1">
                <span className="font-mono text-[8px] text-slate-700 font-bold flex items-center gap-1 uppercase">
                  <Code className="w-3 h-3 text-blue-600" /> Implemented Framework
                </span>
                <p className="font-sans text-[11px] text-slate-600 leading-relaxed">{selectedProject.solution}</p>
              </div>

              {/* Bottom buttons */}
              <div className="pt-2 flex justify-end">
                <button
                  id="close-industry-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white transition-all cursor-pointer"
                >
                  Close Blueprint Specification
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

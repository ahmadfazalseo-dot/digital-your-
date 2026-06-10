import { IndustryPageData } from "../industryData";
import { ArrowLeft, Sparkles, AlertTriangle, ShieldCheck, CheckCircle, RefreshCw } from "lucide-react";
import { motion } from "motion/react";

interface CaseStudyDeepDiveProps {
  industry: IndustryPageData;
  onBack: () => void;
  onConnect: () => void;
}

export function CaseStudyDeepDive({ industry, onBack, onConnect }: CaseStudyDeepDiveProps) {
  const { caseStudy } = industry;

  return (
    <article id="case-study-deep-dive" className="py-20 max-w-5xl mx-auto px-6 select-none selection:bg-zinc-800">
      
      {/* Back navigation bar */}
      <div className="mb-10">
        <button
          id="back-to-industry-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to {industry.name} Overview
        </button>
      </div>

      {/* Editorial Header */}
      <header className="space-y-6 mb-14 text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-[10px] uppercase font-mono text-blue-500 tracking-wider">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          Prestige Case Study Spec
        </div>

        <h1 className="font-display font-medium text-3xl md:text-5xl text-white tracking-tight leading-tight max-w-4xl">
          {caseStudy.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-zinc-500 border-y border-white/5 py-3">
          <span>CLIENT: <strong className="text-zinc-300">{caseStudy.client}</strong></span>
          <span>●</span>
          <span>SECTOR: <strong className="text-zinc-300">{industry.name}</strong></span>
          <span>●</span>
          <span>STATUS: <strong className="text-emerald-400">DEPLOYED & AUDITED</strong></span>
        </div>
      </header>

      {/* Structured metrics grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {caseStudy.metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-2xl bg-zinc-950 border border-white/5 flex flex-col justify-between relative overflow-hidden group hover:border-white/10 transition-all"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full filter blur-[40px] pointer-events-none" />
            <h4 className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider">{metric.label}</h4>
            <div className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mt-3">{metric.value}</div>
          </div>
        ))}
      </section>

      {/* Challenge and Solution Summary */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
        <div className="p-8 rounded-3xl bento-card-bg border border-rose-500/10">
          <span className="font-mono text-[10px] text-rose-400 uppercase tracking-widest block mb-2 font-bold flex items-center gap-1">
            <AlertTriangle className="w-3.5 h-3.5" /> THE CHALLEGE
          </span>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">{caseStudy.challenge}</p>
        </div>

        <div className="p-8 rounded-3xl bento-card-bg border border-emerald-500/10">
          <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest block mb-2 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> IMPLEMENTED STRATEGY
          </span>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">{caseStudy.solution}</p>
        </div>
      </section>

      {/* Core Technical Narrative Text */}
      <section className="p-8 md:p-12 rounded-3xl bg-[#09090b] border border-white/5 text-left mb-12 relative overflow-hidden select-text">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />
        
        <h3 className="font-display font-medium text-lg text-white mb-8 border-b border-white/5 pb-4">
          Detailed Execution Methodology
        </h3>

        <div className="prose prose-invert prose-xs text-zinc-300 max-w-none space-y-6">
          {caseStudy.deepDiveMarkdown.split("\n\n").map((chunk, itemIdx) => {
            if (chunk.trim().startsWith("###")) {
              const cleanHeader = chunk.replace(/^###\s+/i, "");
              return (
                <h4 key={itemIdx} className="font-display font-medium text-base text-white tracking-tight mt-8 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  {cleanHeader}
                </h4>
              );
            }
            return (
              <p key={itemIdx} className="text-xs leading-relaxed text-zinc-400 mb-4 font-sans">
                {chunk}
              </p>
            );
          })}
        </div>
      </section>

      {/* Next steps CTA banner */}
      <footer id="case-study-conclusion" className="p-8 md:p-10 rounded-3xl bg-zinc-950 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative">
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-blue-500/5 rounded-full filter blur-[70px]" />
        
        <div className="space-y-2 text-left relative z-10 max-w-xl">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">Compounding Growth Standard</span>
          <h3 className="font-display font-semibold text-white text-base">Replicate Aurum parameters for your business.</h3>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            Every pipeline we construct uses the identical handcoded, sub-second optimization engine deployed here. Let’s configure yours today.
          </p>
        </div>

        <button
          id="deep-dive-contact-cta"
          onClick={onConnect}
          className="px-6 py-3 rounded-xl text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer whitespace-nowrap relative z-10 self-start sm:self-center"
        >
          Draft Specifications
        </button>
      </footer>

    </article>
  );
}

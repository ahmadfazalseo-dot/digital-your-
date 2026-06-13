import { IndustryPageData } from "../industryData";
import { 
  ArrowLeft, 
  Sparkles, 
  AlertTriangle, 
  ShieldCheck, 
  CheckCircle, 
  Activity, 
  Server, 
  Cpu, 
  Search, 
  Users, 
  Clock, 
  Heart,
  TrendingUp,
  FileCheck2
} from "lucide-react";
import { motion } from "motion/react";

interface CaseStudyDeepDiveProps {
  industry: IndustryPageData;
  onBack: () => void;
  onConnect: () => void;
}

export function CaseStudyDeepDive({ industry, onBack, onConnect }: CaseStudyDeepDiveProps) {
  const { caseStudy } = industry;

  // Additional customized blueprints/deliverables to make this page robust and highly detailed for each specific sector
  const getDeliverables = (id: string) => {
    switch (id) {
      case "med-spa":
        return [
          { phase: "Phase 1: Diagnostic Profile", title: "Patient Flow Friction Audit", duration: "Day 1-4", status: "Completed" },
          { phase: "Phase 2: Headless Architecture", title: "Custom React Scheduler Web App", duration: "Day 5-15", status: "Completed" },
          { phase: "Phase 3: Schema Infusion", title: "Local MedicalWebPage Schema Tags", duration: "Day 16-22", status: "Completed" },
          { phase: "Phase 4: Optimization & Deployment", title: "0.22s Max Page Speed Audit Lock", duration: "Day 23-30", status: "Completed" }
        ];
      case "property-mgmt":
        return [
          { phase: "Phase 1: Diagnostic Profile", title: "Corporate Tenant Flow Mapping", duration: "Day 1-4", status: "Completed" },
          { phase: "Phase 2: Interactive Grid", title: "Client-Side Filtered Listing Matrix", duration: "Day 5-15", status: "Completed" },
          { phase: "Phase 3: Schema Infusion", title: "RealEstateAgent Structured Metadata", duration: "Day 16-22", status: "Completed" },
          { phase: "Phase 4: Optimized Onboarding", title: "1-Click Secure Corporate App Flow", duration: "Day 23-30", status: "Completed" }
        ];
      default:
        return [
          { phase: "Phase 1: Diagnostic Profile", title: "Market Index Opportunity Audit", duration: "Day 1-4", status: "Completed" },
          { phase: "Phase 2: Layout Engineering", title: "Bespoke Sub-Second React Interface", duration: "Day 5-15", status: "Completed" },
          { phase: "Phase 3: Search Integration", title: "Localized Business Schema Payload", duration: "Day 16-22", status: "Completed" },
          { phase: "Phase 4: Live Optimization", title: "Edge CDN Routing & Core Vitals Lock", duration: "Day 23-30", status: "Completed" }
        ];
    }
  };

  const deliverables = getDeliverables(industry.id);

  return (
    <article id="case-study-deep-dive" className="py-12 max-w-6xl mx-auto px-4 sm:px-6 select-none bg-slate-50/50 rounded-3xl border border-slate-100">
      
      {/* 1. Back Navigation Bar */}
      <div className="mb-8 flex items-center justify-between col-span-full">
        <button
          id="back-to-industry-btn"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono font-bold text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full hover:bg-blue-100/80 transition-all cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to {industry.name} Overview
        </button>

        <span className="text-[10px] sm:text-xs font-mono text-slate-500 uppercase tracking-widest bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
          REPORT ID: #CS-DY-{industry.id.toUpperCase()}
        </span>
      </div>

      {/* 2. Editorial Top Header */}
      <header className="space-y-6 mb-12 text-left bg-white p-6 sm:p-10 rounded-3xl border border-blue-100/70 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/[0.02] rounded-full filter blur-[80px]" />
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] uppercase font-mono text-blue-600 font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          Prestige Practice Technical Whitepaper
        </div>

        <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight max-w-4xl">
          {caseStudy.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-slate-500 border-t border-slate-100 pt-6 mt-6">
          <span className="bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md text-left">
            CLIENT: <strong className="text-slate-800 font-bold">{caseStudy.client}</strong>
          </span>
          <span className="hidden sm:inline text-slate-350">•</span>
          <span className="bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-md text-left">
            SECTOR: <strong className="text-slate-800 font-bold">{industry.name}</strong>
          </span>
          <span className="hidden sm:inline text-slate-350">•</span>
          <span className="bg-emerald-50 border border-emerald-150 px-2.5 py-1 rounded-md text-emerald-700 font-bold text-left">
            STATUS: ACTIVE DEPLOYMENT &amp; AUDITED
          </span>
        </div>
      </header>

      {/* 3. Structured Metric Highlights Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        {caseStudy.metrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="p-6 sm:p-8 rounded-3xl bg-white border border-blue-100 flex flex-col justify-between relative overflow-hidden group hover:border-blue-200 transition-all shadow-xs text-left"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full filter blur-[40px] pointer-events-none" />
            <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold">{metric.label}</h4>
            <div className="text-3xl sm:text-4xl font-display font-extrabold text-blue-600 tracking-tight mt-4">{metric.value}</div>
            <p className="text-[10px] text-slate-400 font-sans mt-2">Verified independently via live diagnostic crawlers.</p>
          </div>
        ))}
      </section>

      {/* 4. Challenge and Solution Details Container */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 text-left">
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-amber-100 shadow-xs relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-amber-500/[0.02] rounded-full" />
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-amber-600 uppercase tracking-widest font-bold flex items-center gap-1.5 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full w-max">
              <AlertTriangle className="w-3.5 h-3.5" /> THE COMMERCIAL INEFFICIENCY
            </span>
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-slate-900">What held this enterprise back?</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{caseStudy.challenge}</p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 font-sans text-[11px] text-slate-450 italic">
            *Resulted in structural friction, high cost per acquisition, and client bounce leakage.
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-blue-200 shadow-xs relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-blue-500/[0.02] rounded-full" />
          <div className="space-y-4">
            <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-bold flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full w-max">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> IMPLEMENTED ARCHITECTURE
            </span>
            <div className="space-y-4">
              <h3 className="font-display font-bold text-lg text-slate-900">Our custom handcoded path</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{caseStudy.solution}</p>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-slate-100 font-sans text-[11px] text-blue-650 font-semibold">
            *Deployed 100% cloud-native with local SEO JSON structured schema bindings.
          </div>
        </div>
      </section>

      {/* 5. VISUAL SPECIFICATION STACK (Adding premium academic visuals for real evidence) */}
      <section className="mb-12 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 text-left">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block">
              SYSTEM TOPOLOGY
            </span>
            <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mt-1">
              Engineered High-Conversion Routing Scheme
            </h3>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-slate-50 border border-slate-250 px-2.5 py-1 rounded">
            ROUTING LAYOUT: STACK_V1.2
          </span>
        </div>

        {/* Visual pipeline representation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
          
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-4 h-4 text-blue-600" />
              <span className="font-mono text-[9px] font-bold text-slate-700">1. INPUT ACCELERATOR</span>
            </div>
            <strong className="text-xs font-display text-slate-800 block">Keyword Gravity Map</strong>
            <p className="text-[10px] text-slate-500 font-sans mt-1 leading-snug">
              User inputs highly localized intent coordinates. Google registers clean sitemap instantly.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50/20 border border-blue-105 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-blue-600" />
              <span className="font-mono text-[9px] font-bold text-blue-700">2. INTERACTIVE ROUTER</span>
            </div>
            <strong className="text-xs font-display text-slate-800 block">Vite Bundled Logic</strong>
            <p className="text-[10px] text-slate-500 font-sans mt-1 leading-snug">
              No heavy frames. Elements compile statically, eliminating delays on high-bounce mobile screens.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Server className="w-4 h-4 text-emerald-600" />
              <span className="font-mono text-[9px] font-bold text-emerald-700">3. IN-SUITE CONVERSION</span>
            </div>
            <strong className="text-xs font-display text-slate-800 block">1st-Party Safe Booking</strong>
            <p className="text-[10px] text-slate-500 font-sans mt-1 leading-snug">
              Frictionless scheduling APIs route inquiries with automatic text alerts directly to your phone.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/50 to-indigo-50/30 border border-blue-100 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-blue-600" />
              <span className="font-mono text-[9px] font-bold text-blue-600">4. TARGET POSITION</span>
            </div>
            <strong className="text-xs font-display text-slate-800 block">Rank Domination spots</strong>
            <p className="text-[10px] text-slate-500 font-sans mt-1 leading-snug">
              Structured Schema coordinates push you ahead of competitors into Local Map Packs automatically.
            </p>
          </div>

        </div>
      </section>

      {/* 6. Comprehensive Tactical Execution Roadmap & Timeline */}
      <section className="mb-12 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 text-left relative overflow-hidden">
        <h3 className="font-display font-bold text-lg text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600" />
          Technical Execution &amp; Sprint Log
        </h3>

        <div className="space-y-6">
          {deliverables.map((item, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row items-start justify-between gap-3 p-4 rounded-2xl border border-slate-100 bg-slate-50/30 hover:bg-slate-50 transition-colors">
              <div className="space-y-1.5 text-left">
                <span className="font-mono text-[9px] tracking-wider font-bold text-slate-400 block uppercase">
                  {item.phase} ({item.duration})
                </span>
                <strong className="text-slate-850 text-sm font-display block leading-snug font-semibold">
                  {item.title}
                </strong>
                <p className="text-[11px] text-slate-500 font-sans">
                  Completed utilizing pure CSS grid allocations, localized states caching, and fully validated schemas.
                </p>
              </div>
              <div className="flex items-center gap-1.5 self-start sm:self-center font-mono text-[10px] text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                {item.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Core Technical Narrative Text */}
      <section className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-300/85 text-left mb-12 relative overflow-hidden select-text shadow-xs">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/[0.01] rounded-full filter blur-[100px] pointer-events-none" />
        
        <h3 className="font-display font-bold text-lg text-slate-900 mb-6 border-b border-slate-100 pb-4 flex items-center gap-2">
          <FileCheck2 className="w-5 h-5 text-blue-600" />
          Detailed Technical Case Breakdown
        </h3>

        <div className="prose prose-xs text-slate-755 max-w-none space-y-6">
          {caseStudy.deepDiveMarkdown.split("\n\n").map((chunk, itemIdx) => {
            if (chunk.trim().startsWith("###")) {
              const cleanHeader = chunk.replace(/^###\s+/i, "");
              return (
                <h4 key={itemIdx} className="font-display font-semibold text-sm sm:text-base text-slate-900 tracking-tight mt-6 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0"></span>
                  {cleanHeader}
                </h4>
              );
            }
            return (
              <p key={itemIdx} className="text-xs sm:text-sm leading-relaxed text-slate-600 mb-4 font-sans select-all selection:bg-blue-100">
                {chunk}
              </p>
            );
          })}
        </div>
      </section>

      {/* 8. Conversion Drive CTA (Unified Elegant Light Theme) */}
      <footer id="case-study-conclusion" className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-105 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden relative shadow-xs">
        <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-blue-500/[0.03] rounded-full filter blur-[70px]" />
        
        <div className="space-y-2 text-left relative z-10 max-w-xl">
          <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest block font-bold">Compounding Growth Standard</span>
          <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">Replicate similar metrics for your enterprise directory and workflow.</h3>
          <p className="text-xs text-slate-600 font-sans leading-relaxed">
            Every technical layout we construct uses the identical bespoke performance and semantic optimization engine. Let’s configure yours today.
          </p>
        </div>

        <button
          id="deep-dive-contact-cta"
          onClick={onConnect}
          className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer whitespace-nowrap relative z-10 self-start sm:self-center shadow-md active:scale-95 text-center"
        >
          Draft Project Specifications
        </button>
      </footer>

    </article>
  );
}

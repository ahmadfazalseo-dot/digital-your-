import { useState, ChangeEvent, FormEvent } from "react";
import { ProjectConfig } from "../types";
import { ArrowRight, Sliders, CheckCircle2, HelpCircle, Calendar, Sparkles, Instagram, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProjectPlannerProps {
  addToast: (text: string, type: "success" | "error") => void;
}

export function ProjectPlanner({ addToast }: ProjectPlannerProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(["web"]);
  const [budgetRange, setBudgetRange] = useState<string>("Local Flagship (SEO Maps + Core Paints)");
  const [timeline, setTimeline] = useState<string>("Normal (4-8 weeks)");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: ""
  });

  const [submitting, setSubmitting] = useState(false);
  const [orderResult, setOrderResult] = useState<any | null>(null);

  const availableModules = [
    { id: "web", name: "High-Performance Web Design", desc: "Pixel-perfect interface build compiled at 98+ Speed rating" },
    { id: "seo", name: "Advanced Search Indexing (SEO)", desc: "Organic search maps targeting authority keywords" },
    { id: "brand", name: "Prestige Brand Architecture", desc: "Grids, vector logo symbols, and complete brand style folders" },
    { id: "growth", name: "Conversion Analytics Integration", desc: "Track conversions, flow maps, and source metrics securely" }
  ];

  const budgetOptions = [
    "Local Flagship (SEO Maps + Core Paints)",
    "Authority Expansion (Structured Schemas + Optimized Custom UX)",
    "Market Sovereign (Bespoke Systems, Fully-Linked Geos, Crawl Triggers)",
    "Custom Elite Framework (Fully Tailored Enterprise Integration)"
  ];

  const timelineOptions = [
    "Express (2-3 weeks)",
    "Normal (4-8 weeks)",
    "Flexible / Multi-Phase"
  ];

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== id));
      } else {
        addToast("Please choose at least one core service package.", "error");
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      addToast("Please provide your name and contact email to generate project logs.", "error");
      return;
    }

    setSubmitting(true);
    
    try {
      const payload: ProjectConfig = {
        services: selectedServices,
        budget: budgetRange,
        timeline: timeline,
        name: formData.name,
        email: formData.email,
        details: formData.details
      };

      const res = await fetch("/api/plan-project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        throw new Error("Local server was unable to save proposal logs.");
      }

      const data = await res.json();
      setOrderResult(data);
      addToast("Project blueprint compiled successfully!", "success");
    } catch (err: any) {
      addToast(err.message || "Something went wrong.", "error");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setOrderResult(null);
    setFormData({ name: "", email: "", details: "" });
    setSelectedServices(["web"]);
  };

  return (
    <section id="project-planner-view" className="py-12 max-w-7xl mx-auto px-6 font-sans">
      
      {/* Visual Header */}
      <div className="mb-14 text-center max-w-xl mx-auto">
        <span className="font-mono text-xs text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-3 font-semibold">
          <Sliders className="w-3 h-3 text-blue-600" />
          Interactive Customizer
        </span>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-2">
          Configure Your Solution
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
          Select your desired modules, define customized solution tiers, and register your specs to compile an instantaneous project design blueprint.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start select-none">
        
        {/* Interactive Customizer Setup (West Grid) */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="space-y-4">
            <h3 className="font-display font-bold text-xs text-slate-800 uppercase tracking-widest block">
              1. Choose Project Modules
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {availableModules.map((module) => {
                const isChecked = selectedServices.includes(module.id);
                return (
                  <div
                    id={`module-box-${module.id}`}
                    key={module.id}
                    onClick={() => toggleService(module.id)}
                    className={`p-4 sm:p-5 rounded-2xl cursor-pointer text-left transition-all duration-350 border-2 flex justify-between items-center ${
                      isChecked 
                        ? "bg-blue-50/40 border-blue-600 shadow-[0_8px_30px_rgba(59,130,246,0.06)]" 
                        : "bg-white border-slate-205 hover:border-slate-350 hover:bg-slate-50/25"
                    }`}
                  >
                    <div>
                      <h4 className="font-display text-sm font-bold text-slate-905">{module.name}</h4>
                      <p className="text-xs text-slate-550 leading-relaxed mt-1 font-sans">{module.desc}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      isChecked ? "bg-blue-600 border-blue-605" : "border-slate-300 bg-white"
                    }`}>
                      {isChecked && <div className="w-2 h-2 bg-white rounded-full animate-scale" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Solution Scope Tiers */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-xs text-slate-800 uppercase tracking-widest flex items-center gap-1.5 pt-1.2">
                <Sparkles className="w-3.5 h-3.5 text-blue-605 font-bold" /> Solution Scope
              </h3>
              <div className="flex flex-col gap-2">
                {budgetOptions.map((opt) => (
                  <button
                    id={`budget-opt-${opt.split(" ")[0].toLowerCase()}`}
                    type="button"
                    key={opt}
                    onClick={() => setBudgetRange(opt)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs transition-all cursor-pointer border-2 ${
                      budgetRange === opt 
                        ? "bg-blue-600 border-blue-600 text-white font-semibold shadow-md" 
                        : "bg-white border-slate-205 text-slate-700 hover:border-slate-300 hover:bg-slate-50/30"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline selector */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-xs text-slate-800 uppercase tracking-widest flex items-center gap-1 pt-1.2">
                <Calendar className="w-3.5 h-3.5 text-blue-605" /> Ideal Velocity
              </h3>
              <div className="flex flex-col gap-2">
                {timelineOptions.map((opt) => (
                  <button
                    id={`timeline-opt-${opt.replace(/\s/g, '')}`}
                    type="button"
                    key={opt}
                    onClick={() => setTimeline(opt)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs transition-all cursor-pointer border-2 ${
                      timeline === opt 
                        ? "bg-blue-600 border-blue-600 text-white font-semibold shadow-md" 
                        : "bg-white border-slate-205 text-slate-700 hover:border-slate-300 hover:bg-slate-50/30"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Client details form & configuration invoice (East Grid) */}
        <div id="planner-form" className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border-2 border-slate-200 shadow-[0_20px_50px_rgba(59,130,246,0.04)] relative overflow-hidden select-text">
          <div className="absolute right-0 bottom-0 w-60 h-60 bg-blue-500/5 rounded-full filter blur-[60px] pointer-events-none" />

          {/* Form details / configuration list */}
          <AnimatePresence mode="wait">
            {!orderResult ? (
              <form id="planner-submit-form" onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="text-slate-900 border-b border-slate-100 pb-4">
                  <h3 className="text-sm font-bold tracking-wide">Client Specifications</h3>
                  <p className="text-[11px] text-slate-500 mt-1 font-sans">Please provide connection details to anchor your plan.</p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="text-slate-700 font-semibold font-mono uppercase tracking-wider block">YOUR FULL NAME</label>
                    <input
                      id="planner-input-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Stephen Jobs"
                      className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 outline-none focus:ring-1 focus:ring-blue-600/10 focus:bg-white font-sans text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-700 font-semibold font-mono uppercase tracking-wider block">EMAIL ADDRESS</label>
                    <input
                      id="planner-input-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. jobs@apple.com"
                      className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 outline-none focus:ring-1 focus:ring-blue-600/10 focus:bg-white font-sans text-sm"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-slate-700 font-semibold font-mono uppercase tracking-wider block">PROJECT DESCRIPTION (OPTIONAL)</label>
                    <textarea
                      id="planner-text-details"
                      name="details"
                      rows={3}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Tell us what you are building, design goals, or existing assets."
                      className="w-full bg-slate-50/50 border border-slate-200 focus:border-blue-600 rounded-xl px-4 py-3 text-slate-900 outline-none focus:ring-1 focus:ring-blue-600/10 focus:bg-white font-sans text-xs block resize-none"
                    />
                  </div>
                </div>

                {/* Specification summary list */}
                <div className="bg-blue-50/20 p-4 rounded-xl border border-blue-105/50 space-y-2.5 font-mono text-[10px]">
                  <div className="text-blue-600 font-bold mb-2 flex items-center justify-between">
                    <span>SELECTION SUMMARY</span>
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 font-bold" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Modules:</span>
                    <span className="text-slate-800 font-sans font-semibold">{selectedServices.length} Selected</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Timeline:</span>
                    <span className="text-slate-800 font-sans font-semibold">{timeline.split(" ")[0]}</span>
                  </div>
                  <div className="flex flex-col gap-1 pt-1.5 border-t border-slate-100">
                    <span className="text-slate-500 font-bold uppercase text-[9px]">Solution Focus:</span>
                    <span className="text-slate-900 font-sans font-bold leading-tight mt-0.5">{budgetRange}</span>
                  </div>
                </div>

                <button
                  id="planner-submit-btn"
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 disabled:bg-blue-650 text-white transition-all cursor-pointer shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-95"
                >
                  {submitting ? "Booking System Logs..." : "Compile & Secure Bid"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <motion.div
                id="planner-success-view"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6 text-center py-6 select-text"
              >
                <div className="flex items-center justify-center mb-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center p-2 text-emerald-600">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                </div>

                <div className="space-y-1 font-mono">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Receipt Confirmed</span>
                  <div className="text-xl font-bold text-slate-950 tracking-tight">{orderResult.bookingId}</div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-bold text-sm text-slate-900">Plan Compiled Perfectly</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans px-2">
                    Thank you, <strong>{formData.name}</strong>. Your premium design contract configuration is registered under booking code <strong className="text-blue-650">{orderResult.bookingId}</strong>.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans px-2 pt-1">
                    An elite partner representative will reach out shortly within 24 business hours at <strong className="text-slate-950">{formData.email}</strong> to coordinate conceptual drafts.
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <button
                    id="planner-reset-btn"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold bg-slate-100 border border-slate-205 hover:bg-slate-200/80 text-slate-700 transition-all cursor-pointer inline-flex items-center gap-1 active:scale-95"
                  >
                    Adjust Configuration Layout
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* Confused / Contact Ahmad Social Anchor Module */}
      <div className="mt-16 border-t border-slate-200 pt-12">
        <div className="bg-blue-50/20 p-8 sm:p-10 rounded-3xl border-2 border-blue-500/10 relative overflow-hidden flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 max-w-5xl mx-auto shadow-sm">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />
          
          <div className="text-left space-y-2.5 max-w-xl">
            <span className="font-mono text-[9px] text-blue-700 uppercase tracking-widest font-bold bg-blue-100 px-3 py-1 rounded-full border border-blue-300 w-max whitespace-nowrap inline-block">Need Instant Clarity?</span>
            <h3 className="font-display font-bold text-xl text-slate-900 tracking-tight">Confused about which strategy drives the best growth?</h3>
            <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              Skip the forms entirely if you prefer! Support with Ahmad is directly accessible if you want—schedule an instant, customized consult session below.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:max-w-lg shrink-0 justify-start lg:justify-end font-sans text-xs">
            <a 
              href="https://calendly.com/digitalyour-seo/consultation" 
              target="_blank" 
              rel="noreferrer"
              className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer shadow-md text-center shadow-blue-500/15 active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 text-white shrink-0" />
              <span>Book via Calendly</span>
            </a>
            
            <a 
              href="mailto:info@digitalyour.com" 
              className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-all cursor-pointer text-center active:scale-95 whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <span>info@digitalyour.com</span>
            </a>

            <a 
              href="https://www.instagram.com/digitalyour.seo/" 
              target="_blank" 
              rel="noreferrer"
              className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-all cursor-pointer text-center active:scale-95 whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-slate-400 shrink-0" />
              <span>Instagram</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/company/digital-your-seo" 
              target="_blank" 
              rel="noreferrer"
              className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 transition-all cursor-pointer text-center active:scale-95 whitespace-nowrap"
            >
              <Linkedin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

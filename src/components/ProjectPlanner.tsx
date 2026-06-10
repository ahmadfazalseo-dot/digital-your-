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
    <section id="project-planner-view" className="py-20 max-w-7xl mx-auto px-6">
      
      {/* Visual Header */}
      <div className="mb-14 text-center max-w-xl mx-auto">
        <span className="font-mono text-xs text-blue-500 uppercase tracking-widest flex items-center justify-center gap-1.5 mb-2">
          <Sliders className="w-3.5 h-3.5" />
          Interactive Customizer
        </span>
        <h2 className="font-display font-medium text-3xl md:text-4xl text-white tracking-tight leading-none mb-3">
          Configure Your Solution
        </h2>
        <p className="text-xs text-zinc-400 font-sans leading-relaxed">
          Select your desired modules, define customized solution tiers, and register your specs to compile an instantaneous project design blueprint.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start select-none">
        
        {/* Interactive Customizer Setup (West Grid) */}
        <div className="md:col-span-7 space-y-8">
          
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-xs text-zinc-300 uppercase tracking-wider block">
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
                    className={`p-4 rounded-xl cursor-pointer text-left transition-all duration-300 border flex justify-between items-center ${
                      isChecked 
                        ? "bg-zinc-900 border-blue-500/30 shadow-[0_5px_15px_rgba(0,113,227,0.06)]" 
                        : "bg-zinc-950/40 border-white/5 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <div>
                      <h4 className="font-display text-sm font-medium text-zinc-100">{module.name}</h4>
                      <p className="text-[11px] text-zinc-400 leading-relaxed mt-0.5">{module.desc}</p>
                    </div>
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                      isChecked ? "bg-blue-600 border-blue-400" : "border-zinc-700 bg-transparent"
                    }`}>
                      {isChecked && <div className="w-1.5 h-1.5 bg-white rounded-full animate-scale" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Solution Scope Tiers */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-xs text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" /> Solution Scope
              </h3>
              <div className="flex flex-col gap-2">
                {budgetOptions.map((opt) => (
                  <button
                    id={`budget-opt-${opt.split(" ")[0].toLowerCase()}`}
                    type="button"
                    key={opt}
                    onClick={() => setBudgetRange(opt)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-[11px] transition-all cursor-pointer border ${
                      budgetRange === opt 
                        ? "bg-blue-600/10 border-blue-500/20 text-white font-medium shadow-sm" 
                        : "bg-zinc-900/30 border-white/5 text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Timeline selector */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-xs text-zinc-300 uppercase tracking-wider flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Ideal Velocity
              </h3>
              <div className="flex flex-col gap-2">
                {timelineOptions.map((opt) => (
                  <button
                    id={`timeline-opt-${opt.replace(/\s/g, '')}`}
                    type="button"
                    key={opt}
                    onClick={() => setTimeline(opt)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs transition-all cursor-pointer border ${
                      timeline === opt 
                        ? "bg-blue-600/10 border-blue-500/20 text-white font-medium shadow-sm" 
                        : "bg-zinc-900/30 border-white/5 text-zinc-400 hover:text-zinc-200"
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
        <div id="planner-form" className="md:col-span-5 p-6 rounded-2xl bento-card-bg relative overflow-hidden select-text">
          <div className="absolute right-0 bottom-0 w-60 h-60 bg-blue-600/5 rounded-full filter blur-[60px] pointer-events-none" />

          {/* Form details / configuration list */}
          <AnimatePresence mode="wait">
            {!orderResult ? (
              <form id="planner-submit-form" onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="text-zinc-300 border-b border-white/5 pb-4">
                  <h3 className="text-sm font-semibold tracking-wide">Client Specifications</h3>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Please provide connection details to anchor your plan.</p>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="space-y-1">
                    <label className="text-zinc-400">YOUR FULL NAME</label>
                    <input
                      id="planner-input-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Stephen Jobs"
                      className="w-full bg-zinc-900/80 border border-white/5 focus:border-blue-500 rounded-xl px-4 py-3 text-white outline-none focus:ring-1 focus:ring-blue-500/20 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-zinc-400 font-mono">EMAIL ADDRESS</label>
                    <input
                      id="planner-input-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. jobs@apple.com"
                      className="w-full bg-zinc-900/80 border border-white/5 focus:border-blue-500 rounded-xl px-4 py-3 text-white outline-none focus:ring-1 focus:ring-blue-500/20 font-sans"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-zinc-400 font-mono">PROJECT DESCRIPTION (OPTIONAL)</label>
                    <textarea
                      id="planner-text-details"
                      name="details"
                      rows={3}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder="Tell us what you are building, design goals, or existing assets."
                      className="w-full bg-zinc-900/80 border border-white/5 focus:border-blue-500 rounded-xl px-4 py-3 text-white outline-none focus:ring-1 focus:ring-blue-500/20 font-sans block resize-none"
                    />
                  </div>
                </div>

                {/* Simulated Order checkout summary list */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 space-y-2.5 font-mono text-[10px]">
                  <div className="text-zinc-500 font-semibold mb-2 flex items-center justify-between">
                    <span>SELECTION SUMMARY</span>
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Modules:</span>
                    <span className="text-zinc-200 font-sans">{selectedServices.length} Selected</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Timeline:</span>
                    <span className="text-zinc-200 font-sans">{timeline.split(" ")[0]}</span>
                  </div>
                  <div className="flex flex-col gap-1 pt-1.5 border-t border-white/5">
                    <span className="text-zinc-500 font-bold uppercase text-[9px]">Solution Focus:</span>
                    <span className="text-emerald-400 font-sans leading-tight mt-0.5">{budgetRange}</span>
                  </div>
                </div>

                <button
                  id="planner-submit-btn"
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white transition-all cursor-pointer shadow-lg hover:shadow-blue-500/20 active:scale-95"
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
                  <div className="w-12 h-12 rounded-full bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center p-2 text-emerald-400 animate-pulse">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                </div>

                <div className="space-y-1 font-mono">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Receipt Confirmed</span>
                  <div className="text-xl font-bold text-white tracking-tight">{orderResult.bookingId}</div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-display font-medium text-sm text-zinc-100">Plan Compiled Perfectly</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans px-4">
                    Thank you, <strong>{formData.name}</strong>. Your Apple-grade design contract configuration is registered under booking code <strong className="text-blue-400">{orderResult.bookingId}</strong>.
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed font-sans px-4 pt-1">
                    An elite partner representative will reach out shortly within 24 business hours at <strong className="text-zinc-100">{formData.email}</strong> to coordinate conceptual drafts.
                  </p>
                </div>

                <div className="border-t border-white/5 pt-6">
                  <button
                    id="planner-reset-btn"
                    onClick={handleReset}
                    className="px-6 py-2 rounded-full text-xs font-semibold bg-zinc-900 border border-white/5 hover:border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer"
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
      <div className="mt-16 border-t border-white/5 pt-12">
        <div className="bg-[#050506]/80 p-8 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />
          
          <div className="text-left space-y-2 max-w-xl">
            <span className="font-mono text-[9px] text-blue-500 uppercase tracking-widest font-bold bg-blue-600/10 px-2.5 py-1 rounded-full border border-blue-500/10">Need Instant Clarity?</span>
            <h3 className="font-display font-medium text-xl text-white tracking-tight">Confused about which strategy drives the best growth?</h3>
            <p className="text-xs text-zinc-400 font-sans leading-relaxed">
              Skip the forms entirely if you prefer! Support with Ahmad is directly accessible if you want—schedule an instant, customized consult session below.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0 font-sans text-xs">
            <a 
              href="https://calendly.com/digitalyour-seo/consultation" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer shadow-md text-center"
            >
              <Calendar className="w-4 h-4 text-black shrink-0" />
              Book via Calendly
            </a>
            
            <a 
              href="mailto:info@digitalyour.com" 
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold bg-zinc-900 border border-white/5 hover:border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer text-center"
            >
              <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
              info@digitalyour.com
            </a>

            <div className="grid grid-cols-2 gap-2 text-center text-xs">
              <a 
                href="https://www.instagram.com/digitalyour.seo/" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 p-3 rounded-xl font-semibold bg-zinc-900 border border-white/5 hover:border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer"
                title="Instagram Direct"
              >
                <Instagram className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="text-[10px]">Instagram</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/company/digital-your-seo" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 p-3 rounded-xl font-semibold bg-zinc-900 border border-white/5 hover:border-white/10 text-zinc-300 hover:text-white transition-all cursor-pointer"
                title="LinkedIn Corporate"
              >
                <Linkedin className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="text-[10px]">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

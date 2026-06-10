import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ChevronDown, Check, Rocket, Code, Search, ShieldCheck } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAndProcess() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "Strategic Blueprint & Schema Audit",
      timeline: "Days 1 - 7",
      desc: "We analyze competitor traffic gap profiles and map direct conversion funnels tailored explicitly to your regional footprint. We establish structured local schema tags prior to writing a single line of interface layout.",
      icon: <Search className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Zero-Latency Structural Coding",
      timeline: "Days 8 - 25",
      desc: "Our engineers construct clean custom React interfaces directly on lightweight, high-performance Vite bundlers. We bypass heavy site-builders, bloated scripts, and tracking blocks to maintain 100 FPS fluid mobile rendering.",
      icon: <Code className="w-5 h-5 text-indigo-400" />
    },
    {
      title: "Index Grounding & Live Deployment",
      timeline: "Days 26 - 35",
      desc: "We deploy systems to ultra-secure, fast content delivery network nodes. Next, we force instantaneous crawl reindexing, submitting deep site structure, certifications, and service license metadata maps directly to Search platforms.",
      icon: <Rocket className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Active Crawl Guard & Performance Scaling",
      timeline: "Ongoing Assurance",
      desc: "Our team monitors core web vitals and organic rank positions continuously. You receive direct live coordinate telemetry, performance maps, and regular metadata patches ensuring ongoing supremacy above competitor domains.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "Why does custom handcoded code convert better than Wix or WordPress?",
      answer: "WordPress and Wix rely on generic database queries, heavy pre-built templates, and outdated plugins that clog up browser loading. For every 1-second delay, average mobile conversion rates plummet by 20%. Custom handcoded React/Vite code loads instantly under 0.2 seconds and provides absolute creative freedom without visual clutter."
    },
    {
      question: "What exactly is localized Semantic Schema representation?",
      answer: "A Local Business or MedicalWebPage Schema is a machine-readable JSON-LD metadata payload embedded in your site's codebase. Instead of forcing Google's algorithm to guess what services you offer, schemas tell crawlers exact geographical latitudes, license registration parameters, and localized service categories directly. This forces top-shelf local map and structured results positions."
    },
    {
      question: "Do you buy or configure generic template libraries?",
      answer: "Never. Every interface and branding asset we compile is tailored in-house starting from an absolute blank canvas. This ensures your code is clean, high-performance, and matches your precise commercial objective with extreme structural cohesion."
    },
    {
      question: "How long does it take before we start ranking first organically?",
      answer: "Because we deploy ultra-clean codebases with pre-configured indexing structures and rich local schemas, Search platforms typically re-crawl and promote high-intent category terms within 14 to 45 days. This is significantly faster than standard SEO agencies that only write copy pages."
    }
  ];

  return (
    <section id="faq-and-process" className="py-20 max-w-7xl mx-auto px-6 select-none relative">
      
      {/* Visual lighting background */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Process Timeline Column (Left - 6 cols) */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div>
            <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-1">EXECUTION BENCHMARK</span>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
              Our Zero-Lag Delivery Blueprints
            </h2>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed max-w-md font-sans">
              We align analysis and implementation into a predictable, high-speed engineering pipeline. No guesswork, no communication blocks.
            </p>
          </div>

          <div className="space-y-4">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  id={`delivery-step-${idx}`}
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected 
                      ? "bg-zinc-900/60 border-white/10 ring-1 ring-blue-500/10 shadow-lg" 
                      : "bg-[#040405] border-white/5 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-xl shrink-0 ${isSelected ? "bg-blue-600/10 border border-blue-500/20" : "bg-zinc-900 border border-transparent"}`}>
                      {step.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-display font-semibold text-xs text-zinc-100">{step.title}</h3>
                        <span className="font-mono text-[9px] text-blue-400 bg-blue-600/5 px-2 py-0.5 rounded-full border border-blue-500/10">{step.timeline}</span>
                      </div>
                      <p className="font-sans text-[11px] text-zinc-400 leading-relaxed pt-1 select-text">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Disclosures Column (Right - 6 cols) */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div>
            <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-1">CLARIFYING SYSTEM SPECIFICATIONS</span>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight">
              Frequently Queried Specifications
            </h2>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed max-w-sm font-sans">
              Have questions about performance, pricing or SEO pipelines? Find clarifying system coordinates here.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  id={`faq-accordion-${idx}`}
                  key={idx}
                  className="bg-[#040405] border border-white/5 rounded-2xl overflow-hidden transition-all hover:border-white/10"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-xs font-semibold text-zinc-200 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-blue-400" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1 text-[11px] leading-relaxed text-zinc-400 font-sans select-text border-t border-white/5 bg-zinc-950/40">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

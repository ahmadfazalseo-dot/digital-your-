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
      icon: <Search className="w-5 h-5 text-blue-600" />
    },
    {
      title: "Zero-Latency Structural Coding",
      timeline: "Days 8 - 25",
      desc: "Our engineers construct clean custom React interfaces directly on lightweight, high-performance Vite bundlers. We bypass heavy site-builders, bloated scripts, and tracking blocks to maintain 100 FPS fluid mobile rendering.",
      icon: <Code className="w-5 h-5 text-indigo-600" />
    },
    {
      title: "Index Grounding & Live Deployment",
      timeline: "Days 26 - 35",
      desc: "We deploy systems to ultra-secure, fast content delivery network nodes. Next, we force instantaneous crawl reindexing, submitting deep site structure, certifications, and service license metadata maps directly to Search platforms.",
      icon: <Rocket className="w-5 h-5 text-purple-600" />
    },
    {
      title: "Active Crawl Guard & Performance Scaling",
      timeline: "Ongoing Assurance",
      desc: "Our team monitors core web vitals and organic rank positions continuously. You receive direct live coordinate telemetry, performance maps, and regular metadata patches ensuring ongoing supremacy above competitor domains.",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />
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
    <section id="faq-and-process" className="py-20 max-w-7xl mx-auto px-6 select-none relative border-t border-slate-100">
      
      {/* Visual lighting background */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Process Timeline Column (Left - 6 cols) */}
        <div className="lg:col-span-6 space-y-8 text-left">
          <div>
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block">
              EXECUTION BENCHMARK
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-2">
              Our Zero-Lag Delivery Blueprints
            </h2>
            <p className="text-xs sm:text-sm text-slate-655 mt-2 leading-relaxed max-w-md font-sans">
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
                  className={`p-5 rounded-3xl cursor-pointer transition-all duration-300 border ${
                    isSelected 
                      ? "bg-white border-blue-200 ring-2 ring-blue-500/5 shadow-md shadow-blue-500/2" 
                      : "bg-[#f8fafc]/60 border-slate-200/80 hover:bg-[#f8fafc] hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-2xl shrink-0 ${isSelected ? "bg-blue-50 border border-blue-200" : "bg-white border border-slate-200"}`}>
                      {step.icon}
                    </div>
                    <div className="space-y-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display font-bold text-sm text-slate-800">{step.title}</h3>
                        <span className="font-mono text-[9px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">{step.timeline}</span>
                      </div>
                      <p className="font-sans text-xs text-slate-600 leading-relaxed pt-1.5 select-text">
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
            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block">
              CLARIFYING SYSTEM SPECIFICATIONS
            </span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-2">
              Frequently Queried Specifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-655 mt-2 leading-relaxed max-w-sm font-sans">
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
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-blue-200 hover:shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-xs sm:text-sm font-semibold text-slate-800 hover:text-slate-900 transition-colors cursor-pointer"
                  >
                    <span className="leading-snug pr-2 text-slate-800 font-medium">{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${isOpen ? "rotate-180 text-blue-600" : ""}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-1.5 text-xs leading-relaxed text-slate-650 font-sans select-text border-t border-slate-100 bg-slate-50/50">
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

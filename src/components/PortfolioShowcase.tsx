import { useState } from "react";
import { PortfolioProject } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Search, Zap, X, Code, ShieldCheck, Mail, Instagram, Linkedin, Calendar, Cpu, Sparkles, Award } from "lucide-react";

export function PortfolioShowcase() {
  const [filter, setFilter] = useState<'all' | 'web' | 'seo' | 'brand'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const projects: PortfolioProject[] = [
    {
      id: "vortex",
      title: "Vortex Analytics Hub",
      category: "web",
      client: "Vortex SaaS Inc.",
      description: "A state-of-the-art interactive analytical platform redesigned for extreme loading speeds and cinematic client presentations.",
      metrics: { label: "TIME TO FIRST PAINT", value: "0.24s" },
      technologies: ["React / Vite", "Node / Express", "Custom WebGL Canvas", "Tailwind CSS"],
      workDone: [
        "Rebuilt complex canvas dashboards from heavy legacy bundles into streamlined, code-split views.",
        "Refured browser layouts with sub-second, eye-safe responsive layouts.",
        "Created an integrated interactive UI system optimized for client onboarding success."
      ],
      accentColor: "from-blue-600 to-indigo-600"
    },
    {
      id: "aura",
      title: "Aura Clinical Organic Search Jump",
      category: "seo",
      client: "Aura Wellness",
      description: "Complete organic search restructuring, technical index optimizations, and rich-snippet schema engineering.",
      metrics: { label: "ORGANIC CON_S JUMP", value: "312%" },
      technologies: ["Google Search Grounding", "Robots Metadata", "Structured JSON-LD", "SEO Technical Crawlers"],
      workDone: [
        "Audited 120 legacy indexing pathways, routing active link authorities cleanly.",
        "Constructed deep Schema.org representations for clinic locations and doctor profiles.",
        "Reconstructed on-page copy positioning for commercial high-converting keywords."
      ],
      accentColor: "from-emerald-500 to-teal-600"
    },
    {
      id: "solace",
      title: "Solace Law Corporate Identity System",
      category: "brand",
      client: "Solace Legal LLP",
      description: "Sophisticated brand alignment, mathematical vector logos, typography specifications, and a digital flagship home.",
      metrics: { label: "LIFETIME REVENUE ATTRIBUTION", value: "$4.2M" },
      technologies: ["Graphic Vector Grids", "Typography Systems", "Prisic Brand Books", "Tailwind Architecture"],
      workDone: [
        "Drafted a complete brand guideline book detailing color families, layout padding tolerances, and social templates.",
        "Architected a ultra-high prestige homepage featuring micro-interactions and gold/slate aesthetic pairings.",
        "Introduced digital lead tracking system connected to automated consultation schedules."
      ],
      accentColor: "from-amber-500 to-amber-700"
    },
    {
      id: "vertex",
      title: "Vertex Global E-Commerce",
      category: "web",
      client: "Vertex Watches Group",
      description: "High-conversion product showcases with immersive custom configuration utilities and standard Shopify/API checkout bridges.",
      metrics: { label: "CONVERSION PERCENTAGE JUMP", value: "48%" },
      technologies: ["Stripe Webhook Integrations", "Vite Bundlers", "Tailwind Fluid Systems", "Interactive Audio feedback"],
      workDone: [
        "Engineered the watches config engine, providing shoppers interactive dial customization.",
        "Accelerated page speed benchmarks, reducing shopping checkout friction.",
        "Embedded robust growth analytics to trace exact marketing coordinates and checkouts."
      ],
      accentColor: "from-rose-500 to-red-600"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio-section" className="py-20 max-w-7xl mx-auto px-6">
      
      {/* Visual Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="max-w-xl">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-2">Our Works</span>
          <h2 className="font-display font-medium text-3xl md:text-4xl text-white tracking-tight leading-tight">
            Designed to convert. Built to endure.
          </h2>
        </div>

        {/* Apple-Style Segmented Filters */}
        <div className="flex bg-zinc-900/60 p-1 rounded-full border border-white/5 self-start shrink-0 font-mono text-[10px]">
          {(['all', 'web', 'seo', 'brand'] as const).map((cat) => (
            <button
              id={`filter-${cat}`}
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full capitalize transition-all cursor-pointer ${
                filter === cat 
                  ? "bg-white text-black font-semibold shadow-sm" 
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {cat === 'all' ? 'show all' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              id={`project-card-${project.id}`}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative cursor-pointer overflow-hidden rounded-3xl bento-card-bg p-8 flex flex-col justify-between min-h-[300px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 bg-white" />
              
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-wider">{project.client}</span>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center p-1 group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-black" />
                  </div>
                </div>

                <h3 className="font-display font-medium text-xl text-white group-hover:text-blue-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>

              {/* Display High Metric Plate */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-end justify-between">
                <div>
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{project.metrics.label}</div>
                  <div className="text-2xl font-display font-bold text-white tracking-tight mt-1">{project.metrics.value}</div>
                </div>
                <span className="font-mono text-[10px] text-zinc-500 uppercase bg-zinc-900 border border-white/5 px-2.5 py-1 rounded-full capitalize">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* NEW SECTION 1: Audits & Benchmarks */}
      <div className="mt-24 border-t border-white/5 pt-16">
        <div className="max-w-xl text-left mb-12">
          <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-1">Crawl & Speed Benchmarks</span>
          <h3 className="font-display font-medium text-2xl text-white tracking-tight leading-tight">
            Our Standard Output: Zero-Latency Execution.
          </h3>
          <p className="text-xs text-zinc-400 mt-2 font-sans font-medium">
            We don't write slow templates. Every deployment is benchmarked against rigorous Lighthouse performance requirements, ensuring search robots index your assets first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {[
            { metric: "100/100", label: "Mobile Performance Index", desc: "Interactive latency is eliminated under 0.2s, resulting in a 24% lower drop-off rate.", color: "from-blue-600 to-indigo-600" },
            { metric: "100/100", label: "Semantic Search Scheme", desc: "Standardized JSON-LD schemas directly communicate specialized maps and services.", color: "from-emerald-500 to-teal-500" },
            { metric: "100/100", label: "Best Practice Guidelines", desc: "Compiled utilizing standard strict secure pipelines with zero console warnings.", color: "from-purple-500 to-pink-500" },
            { metric: "100/100", label: "Security & Access Control", desc: "Protected using Edge SSL, static routing endpoints, and compliance metrics.", color: "from-amber-500 to-yellow-500" }
          ].map((card, idx) => (
            <div key={idx} className="bg-[#050506] border border-white/5 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[180px] hover:border-white/10 transition-colors">
              <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${card.color}`} />
              <div className="space-y-3 font-sans">
                <div className="flex items-center gap-1.5 justify-between">
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">Standard Spec</span>
                  <Award className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <h4 className="font-display font-semibold text-xs text-zinc-100">{card.label}</h4>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">{card.desc}</p>
              </div>
              <div className="pt-4 flex items-baseline gap-1 mt-auto">
                <span className="text-2xl font-display font-bold text-white tracking-tight">{card.metric}</span>
                <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase">Perfect Score</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEW SECTION 2: Stack bento specs */}
      <div className="mt-16 bg-zinc-950/40 p-8 rounded-3xl border border-white/5 text-left relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-84 h-84 bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4 space-y-4">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">Absolute Architecture</span>
            <h3 className="font-display font-semibold text-xl text-white tracking-tight">Our Zero-Bloat Stack Philosophy</h3>
            <p className="text-xs text-zinc-400 leading-relaxed font-sans">
              Unlike legacy agencies that install multiple slow WordPress plugins, we write single-source codes manually compiled on edge distributions.
            </p>
            <div className="flex flex-wrap gap-1.5 pt-2">
              {["No Wordpress", "Zero Raw Node Queries", "Vite ESM Native", "Pre-Mapped Schemas", "Next-Gen CSS"].map((badge, i) => (
                <span key={i} className="font-mono text-[9px] px-2.5 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-400">{badge}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-400 shrink-0" />
                <h4 className="font-display font-semibold text-xs text-zinc-100">Compiled React/Vite Core</h4>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                Interface loads are calculated instantly under 100 milliseconds. Pages render with zero layout shifts (CLS), satisfying critical Core Web Vitals rankings.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/5 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
                <h4 className="font-display font-semibold text-xs text-zinc-100">Semantic Microdata (JSON-LD)</h4>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
                Instead of simple visual page text, your code includes pre-configured geographical latitudes, license specifications, and category lists.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW SECTION 3: Direct Ahmad Calendly & Social touchpoint panel */}
      <div className="mt-16 bg-[#040405] border border-zinc-900 rounded-3xl p-8 text-left relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-[80px] pointer-events-none" />

        <div className="space-y-2 max-w-xl">
          <span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest font-bold bg-emerald-600/10 px-2.5 py-1 rounded-full border border-emerald-500/10">Skip the Confusion</span>
          <h3 className="font-display font-medium text-xl text-white tracking-tight">Need a custom speed audit or direct SEO blueprints?</h3>
          <p className="text-xs text-zinc-400 font-sans leading-relaxed">
            If you are confused or prefer a raw 1-on-1 strategy overview, connect with Ahmad on Instagram, LinkedIn, or schedule an instant 15-minute Zoom call on Calendly.
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
            Book Calendly Call
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

      {/* High-End Immersive Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div id="project-detail-modal" className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-3xl rounded-3xl bg-zinc-950 border border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              
              {/* Header Gradient banner */}
              <div className={`h-3 bg-gradient-to-r ${selectedProject.accentColor}`} />

              <button
                id="close-modal-btn"
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:border-white/15 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 md:p-10 space-y-8 select-text">
                
                {/* Meta Headings */}
                <div className="space-y-2">
                  <div className="font-mono text-xs text-blue-500">{selectedProject.client}</div>
                  <h3 className="font-display font-bold text-2xl md:text-3xl text-white tracking-tight">{selectedProject.title}</h3>
                </div>

                {/* Big Metric Card */}
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${selectedProject.accentColor}/10 border border-white/5 flex items-center justify-between`}>
                  <div>
                    <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">{selectedProject.metrics.label}</span>
                    <h4 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight mt-1">{selectedProject.metrics.value}</h4>
                  </div>
                  <ShieldCheck className="w-10 h-10 text-white/20 shrink-0" />
                </div>

                {/* Detailed Narrative */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  
                  {/* Detailed Works Done (East Side) */}
                  <div className="md:col-span-8 space-y-4">
                    <h4 className="font-display font-semibold text-sm text-zinc-200">Execution Strategy & Actions Taken</h4>
                    <ul className="flex flex-col gap-3 font-sans text-xs text-zinc-400 leading-relaxed">
                      {selectedProject.workDone.map((work, idx) => (
                        <li key={idx} className="flex gap-2 items-start">
                          <CheckIcon />
                          <span>{work}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specification Stats (West Side) */}
                  <div className="md:col-span-4 space-y-4">
                    <h4 className="font-display font-semibold text-sm text-zinc-200">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.technologies.map((tech, idx) => (
                        <span key={idx} className="font-mono text-[9px] text-zinc-300 bg-zinc-900 border border-white/5 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Bottom buttons */}
                <div className="border-t border-white/5 pt-6 flex justify-end">
                  <button
                    id="modal-close-bottom-btn"
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer"
                  >
                    Alright, Close Detail
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

function CheckIcon() {
  return (
    <div className="w-4 h-4 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
      <Code className="w-2.5 h-2.5 text-blue-400" />
    </div>
  );
}

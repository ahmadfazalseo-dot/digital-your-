import { useState } from "react";
import { ServiceItem } from "../types";
import { 
  Laptop, 
  Search, 
  Shapes, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Settings, 
  Zap, 
  BarChart4 
} from "lucide-react";

interface BentoGridProps {
  onPlanProject: () => void;
}

export function BentoGrid({ onPlanProject }: BentoGridProps) {
  const [selectedService, setSelectedService] = useState<string | null>("web");

  const services: ServiceItem[] = [
    {
      id: "web",
      title: "High-Performance Web Design & Dev",
      shortDesc: "Sleek, fluid digital masterpieces built on light, responsive frameworks that render at up to 100 FPS.",
      longDesc: "We don't buy templates. We design pristine interfaces from a blank canvas, pairing Space Grotesk display headings with balanced layouts. Utilizing motion, static server optimizations, and cutting-edge CSS, your site will operate with the fluid latency of macOS system software.",
      iconName: "web",
      priceRange: "Bespoke Visual Flagship Tier",
      features: [
        "Dynamic interface layout & typography strategy",
        "W3C and Lighthouse 98+ performance guarantees",
        "Absolute fluid responsiveness for every iOS/Android resolution",
        "Immersive smooth-scroll kinetic micro-interactions"
      ],
      specs: {
        delivery: "3 to 5 weeks from conceptual approval",
        focus: "Visual Conversion & Pixel-Perfect Alignment",
        outcome: "An elite technical flagship representing your brand"
      }
    },
    {
      id: "seo",
      title: "Advanced Organic SEO Dominator",
      shortDesc: "High-authority indexing campaigns that place your brand at the absolute summit of local and global Google indexes.",
      longDesc: "SEO is an engineering discipline, not a guesswork hobby. We implement rigid technical crawling fixes, deep content schemas, keyword target routes, and index maps that force Search engines to treat your site as the definitive market authority. Stop paying for ads; command organic flow.",
      iconName: "seo",
      priceRange: "Organic Search Authority Tier",
      features: [
        "Comprehensive site crawlers & structural crawl maps",
        "Semantic schema integration (JSON-LD JSON structured)",
        "Competitive search gap intelligence reporting",
        "High-density commercial content copy layouts"
      ],
      specs: {
        delivery: "Ongoing, noticeable ranking jump in 45 days",
        focus: "Search Intent & Market Value Capture",
        outcome: "Predictable, compounding zero-CAC organic leads"
      }
    },
    {
      id: "brand",
      title: "Identity & Visual Brand Systems",
      shortDesc: "Impeccable visual elements, absolute guidelines, and logo architectures designed for elite luxury positioning.",
      longDesc: "The difference between an amateur setup and a premium asset is precision guidelines. We construct complete visual assets, customized grids, typography guidelines, vector logo signatures, and brand books that communicate prestige, stability, and high design standards.",
      iconName: "brand",
      priceRange: "Elite Identity & Styling Assets",
      features: [
        "Aesthetic logo systems & mathematical grids",
        "Complete typographic hierarchies & color palettes",
        "Brand style guide documentation books (PDF format)",
        "Social design assets and visual templates"
      ],
      specs: {
        delivery: "2 to 3 weeks of strict iteration",
        focus: "Emotional Value & Mathematical Elegance",
        outcome: "A cohesive, high-prestige brand identity"
      }
    },
    {
      id: "growth",
      title: "Integrated Performance Analytics",
      shortDesc: "Hyper-conversion strategies that align your design, SEO, and brand assets to funnel leads perfectly.",
      longDesc: "Creative works are meaningless without measurable scaling. We connect search pathways with custom interface hotspots, advanced form tracking, A/B landing modules, and pixel-tracking to trace exact source leads down to the cent, providing you complete capital allocation clarity.",
      iconName: "growth",
      priceRange: "Conversion Attribution Framework",
      features: [
        "Lead conversion mapping & event flow funnels",
        "Custom dashboards matching server logs",
        "Conversion optimization split experiments",
        "Hyper-targeted pipeline capture integrations"
      ],
      specs: {
        delivery: "Integrated directly alongside your build",
        focus: "Conversion Engineering & Lifetime Value",
        outcome: "Clarified growth loops and actionable intelligence"
      }
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case "web": return <Laptop className="w-5 h-5 text-blue-400" />;
      case "seo": return <Search className="w-5 h-5 text-indigo-400" />;
      case "brand": return <Shapes className="w-5 h-5 text-purple-400" />;
      case "growth": return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      default: return <Settings className="w-5 h-5" />;
    }
  };

  const activeService = services.find(s => s.id === selectedService) || services[0];

  return (
    <section id="services-grid" className="py-20 max-w-7xl mx-auto px-6 select-none">
      
      {/* Editorial Header */}
      <div className="mb-14 text-center md:text-left max-w-3xl">
        <span className="font-mono text-xs text-blue-500 uppercase tracking-widest flex items-center justify-center md:justify-start gap-1.5 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          Technical Specifications
        </span>
        <h2 className="font-display font-medium text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-4 text-center md:text-left">
          Our Architecture: Engineered to Dominate.
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed text-center md:text-left">
          Stop acting as a referee between unaligned freelancers, sluggish digital agencies, and detached graphic designers. We unify custom custom-handcoded engineering, semantic Google map search schemas, and high-prestige visual positioning under one clear contract.
        </p>
      </div>

      {/* Modern Bento Grid Selector */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Menu selectors (West side) */}
        <div id="services-selectors" className="md:col-span-5 flex flex-col gap-3">
          {services.map((service) => {
            const isSelected = selectedService === service.id;
            return (
              <div
                id={`service-select-${service.id}`}
                key={service.id}
                onClick={() => setSelectedService(service.id)}
                className={`p-5 rounded-2xl cursor-pointer text-left transition-all duration-300 bento-card-bg ${
                  isSelected 
                    ? "bg-zinc-900 border-white/10 ring-1 ring-blue-500/20 shadow-lg shadow-black/40" 
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-3.5 mb-2">
                  <div className={`p-2 rounded-xl ${isSelected ? "bg-blue-600/10 border border-blue-500/30" : "bg-zinc-800/50"}`}>
                    {getIcon(service.iconName)}
                  </div>
                  <h3 className="font-display font-semibold text-sm text-zinc-100">{service.title}</h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {service.shortDesc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Feature Detail presentation screen (East side) */}
        <div id="services-viewport" className="md:col-span-7 p-8 rounded-3xl bento-card-bg relative overflow-hidden flex flex-col justify-between min-h-[460px]">
          {/* Radial ambient glow decoration */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-blue-500/5 rounded-full filter blur-[80px] pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-zinc-500 bg-zinc-900/80 px-2.5 py-1 rounded-full border border-white/5 uppercase tracking-wide">
                Product Specs
              </span>
              <span className="font-mono text-[10px] text-blue-400 font-medium">
                {activeService.priceRange}
              </span>
            </div>

            <div className="space-y-1.5">
              <h3 className="font-display font-medium text-2xl text-white tracking-tight">
                {activeService.title}
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-sans max-w-xl">
                {activeService.longDesc}
              </p>
            </div>

            {/* Structured Specifications Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-white/5 py-5 text-[11px] font-mono">
              <div>
                <div className="text-zinc-500 flex items-center gap-1 mb-1">
                  <Zap className="w-3.5 h-3.5 text-zinc-400" /> TIMELINE
                </div>
                <div className="text-zinc-200">{activeService.specs.delivery}</div>
              </div>
              <div>
                <div className="text-zinc-500 flex items-center gap-1 mb-1">
                  <Settings className="w-3.5 h-3.5 text-zinc-400" /> STRATEGIC FOCUS
                </div>
                <div className="text-zinc-200">{activeService.specs.focus}</div>
              </div>
              <div>
                <div className="text-zinc-500 flex items-center gap-1 mb-1">
                  <BarChart4 className="w-3.5 h-3.5 text-zinc-400" /> KEY OUTCOME
                </div>
                <div className="text-zinc-200">{activeService.specs.outcome}</div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">Features Included</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {activeService.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-zinc-400">
                    <Check className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-5 mt-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-[11px] text-zinc-500 font-mono">Configure this module directly in our project customizer.</span>
            <button
              id="services-cta"
              onClick={onPlanProject}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer shadow-[0_4px_15px_rgba(255,255,255,0.1)] active:scale-95"
            >
              Configure Solution
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

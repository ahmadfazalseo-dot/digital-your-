import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Star, Sparkles, HelpCircle, Layers, ShieldCheck, ArrowRight, ChevronDown } from "lucide-react";

interface SchemaConfig {
  id: string;
  name: string;
  badge: string;
  description: string;
  snippetFields: string[];
}

export function SchemaSnippetPreviewer() {
  const [activeSchema, setActiveSchema] = useState<string>("local");
  const [brandName, setBrandName] = useState<string>("Aura Luxe Wellness");
  const [description, setDescription] = useState<string>("Premium, handcoded medical spa and facial therapy clinics. Experience ultra-luxury Botox, skincare, and organic hydration treatments.");
  const [rating, setRating] = useState<number>(4.9);
  const [reviews, setReviews] = useState<number>(142);
  const [priceRange, setPriceRange] = useState<string>("$$ - $$$");
  
  const [faq1Q, setFaq1Q] = useState<string>("What treatments do you specify?");
  const [faq1A, setFaq1A] = useState<string>("We specialize in custom Botox injectors, premium hydrafacials, skin tightening, and localized organic hydration therapy.");
  const [faq2Q, setFaq2Q] = useState<string>("Are consultations free of charge?");
  const [faq2A, setFaq2A] = useState<string>("Yes, we run comprehensive 3D skin audits and consultations prior to locking in any cosmetic blueprints.");

  const [faq1Open, setFaq1Open] = useState<boolean>(false);
  const [faq2Open, setFaq2Open] = useState<boolean>(false);
  const [showGenericComparison, setShowGenericComparison] = useState<boolean>(false);

  const schemas: SchemaConfig[] = [
    {
      id: "local",
      name: "Local Business / Medical Webpage",
      badge: "Local Geo-Citations",
      description: "Direct machine-readable geographic coordinates, service codes, licenses, and ratings.",
      snippetFields: ["brandName", "description", "rating", "reviews", "priceRange"]
    },
    {
      id: "faq",
      name: "Structured FAQ Accordion",
      badge: "FAQ Search Rich Snippets",
      description: "Embed dynamic collapsible answers below your meta summary, tripling search click-through space.",
      snippetFields: ["brandName", "description", "faq1", "faq2"]
    },
    {
      id: "product",
      name: "Medical Product & Pricing Catalog",
      badge: "Offer Price Marking",
      description: "Specify service price limits and availability markers directly on search maps and listing rows.",
      snippetFields: ["brandName", "description", "rating", "reviews", "priceRange"]
    }
  ];

  const getCleanDomain = () => {
    const slug = brandName.toLowerCase().replace(/[^a-z0-0]/g, "");
    return `https://${slug || "clinic"}.digitalyour.app`;
  };

  return (
    <section id="schema-snippet-sandbox" className="py-20 max-w-7xl mx-auto px-6 select-none relative border-t border-slate-100">
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-500/[0.01] rounded-full filter blur-[100px] pointer-events-none" />
      
      {/* Header */}
      <div className="max-w-xl mb-16 text-left">
        <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full w-max">
          Interactive Schema Previewer
        </span>
        <h2 className="font-display font-semibold text-2xl sm:text-3xl text-slate-900 tracking-tight mt-2">
          SERP Snippet Sandbox
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 font-sans">
          Test in real-time how clean machine-eligible JSON-LD structured schemas change your business layout directly on Google Search. Populate the interactive values on the left to see the Google SERP simulation adapt dynamically.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Schema Configurations and Inputs (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          
          {/* Tabs */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 font-sans uppercase tracking-wider block">1. Select Crawler Schema Type</label>
            <div className="flex flex-col gap-2">
              {schemas.map((s) => {
                const isActive = activeSchema === s.id;
                return (
                  <button
                    id={`btn-schema-tab-${s.id}`}
                    key={s.id}
                    onClick={() => setActiveSchema(s.id)}
                    className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                      isActive
                        ? "bg-white border-blue-200 ring-2 ring-blue-500/5 shadow-md"
                        : "bg-[#f8fafc]/50 border-slate-200/85 hover:bg-[#f8fafc]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <strong className="text-xs font-bold text-slate-800 font-sans">{s.name}</strong>
                      <span className="font-mono text-[8px] font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded uppercase">
                        {s.badge}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-450 leading-relaxed pt-1.5 font-sans">
                      {s.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Configuration Input Fields */}
          <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl space-y-4">
            <span className="text-[10px] font-mono font-bold text-slate-505 uppercase tracking-wide block">2. Customize Search Copy Inputs</span>
            
            {/* Standard Meta Brand + Description */}
            <div className="grid grid-cols-1 gap-3 font-sans text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-800">Business/Brand Name</label>
                <input
                  type="text"
                  maxLength={40}
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-blue-500 outline-none rounded-xl px-3 py-1.5 text-slate-800 text-[11px] font-semibold"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-800">Meta Description</label>
                <textarea
                  maxLength={150}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-white border border-slate-200 focus:border-blue-500 outline-none rounded-xl px-3 py-1.5 text-slate-800 text-[11px] h-14 resize-none leading-normal"
                />
              </div>

              {/* Dynamic Inputs depending on tabs */}
              {activeSchema !== "faq" ? (
                <div className="grid grid-cols-3 gap-2">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-800">Rating (Max 5)</label>
                    <input
                      type="number"
                      step="0.1"
                      min="1"
                      max="5"
                      value={rating}
                      onChange={(e) => setRating(parseFloat(e.target.value) || 5)}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 outline-none rounded-xl px-3 py-1.5 text-slate-800 text-[11px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-800">Reviews</label>
                    <input
                      type="number"
                      min="1"
                      value={reviews}
                      onChange={(e) => setReviews(parseInt(e.target.value) || 1)}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 outline-none rounded-xl px-3 py-1.5 text-slate-800 text-[11px]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-800">Price Tier</label>
                    <input
                      type="text"
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 outline-none rounded-xl px-3 py-1.5 text-slate-800 text-[11px]"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-3 pt-1">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-800">Accordion Q1</label>
                    <input
                      type="text"
                      value={faq1Q}
                      onChange={(e) => setFaq1Q(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 outline-none rounded-xl px-3 py-1 text-slate-800 text-[10.5px] font-medium"
                    />
                    <input
                      type="text"
                      value={faq1A}
                      onChange={(e) => setFaq1A(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 outline-none rounded-xl px-3 py-1 text-slate-500 text-[10px]"
                      placeholder="FAQ Answer 1"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-800">Accordion Q2</label>
                    <input
                      type="text"
                      value={faq2Q}
                      onChange={(e) => setFaq2Q(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 outline-none rounded-xl px-3 py-1 text-slate-800 text-[10.5px] font-medium"
                    />
                    <input
                      type="text"
                      value={faq2A}
                      onChange={(e) => setFaq2A(e.target.value)}
                      className="w-full bg-white border border-slate-200 focus:border-blue-500 outline-none rounded-xl px-3 py-1 text-slate-500 text-[10px]"
                      placeholder="FAQ Answer 2"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Google Mock SERP Display Dashboard (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-md flex flex-col justify-between text-left space-y-8 select-text">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-100 flex items-center justify-center p-1 border border-sky-200 text-sky-600">
                <Search className="w-3.5 h-3.5" />
              </span>
              <strong className="font-sans text-xs text-slate-800 font-bold">Mock Google Mobile/Desktop SERP Renderer</strong>
            </div>

            {/* Flat toggle to compare structural difference */}
            <button
              id="btn-schema-compare-mode"
              onClick={() => setShowGenericComparison(!showGenericComparison)}
              className="text-[10px] font-bold font-mono text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 hover:bg-blue-100/50 transition-colors select-none cursor-pointer"
            >
              Mode: {showGenericComparison ? "Organic View (Standard)" : "Premium Schema View (Digital Your)"}
            </button>
          </div>

          {/* Google SERP Card Outer Area */}
          <div className="p-5 bg-[#fafafa] border border-slate-200 rounded-2xl space-y-1 font-sans relative overflow-hidden select-none">
            
            {/* Organic domain path header */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="w-4 h-4 rounded-full bg-slate-200 font-serif font-black flex items-center justify-center text-[10px] leading-none shrink-0 border border-slate-300">
                {brandName ? brandName[0].toUpperCase() : "A"}
              </span>
              <div className="flex flex-col text-[11px] leading-tight text-slate-850">
                <span className="font-bold text-slate-800 leading-none pb-0.5">{brandName || "Company Title"}</span>
                <span className="text-[10px] text-zinc-550 leading-none">{getCleanDomain()}</span>
              </div>
            </div>

            {/* Primary blue link title of card */}
            <h4 className="text-[15px] sm:text-base text-[#1a0dab] hover:underline cursor-pointer leading-tight font-medium pt-1 font-serif pr-1">
              {brandName || "Local Clinic Specialists"} — Certified Hydrafacial, Skin Blueprints &amp; Spa Care
            </h4>

            {/* Simulated Rich Snippet Meta Items if NOT Generic comparison */}
            {!showGenericComparison ? (
              <AnimatePresence mode="wait">
                {/* Mode A: Local Business rating blocks */}
                {(activeSchema === "local" || activeSchema === "product") && (
                  <motion.div
                    key="rich-rating"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-wrap items-center gap-1.5 text-slate-600 text-[11.5px] pt-1"
                  >
                    {/* Stars row */}
                    <div className="flex text-amber-500 gap-0.5 shrink-0">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400 shrink-0" />
                      ))}
                    </div>
                    <span>Rating: <strong>{rating.toFixed(1)}</strong></span>
                    <span className="text-slate-300">·</span>
                    <span><strong>{reviews}</strong> reviews</span>
                    <span className="text-slate-300">·</span>
                    <span className="text-emerald-700 font-semibold">{priceRange}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            ) : null}

            {/* Description text */}
            <p className="text-xs text-slate-655 font-sans leading-normal pt-1 select-text">
              {description || "Meta description of page listings..."}
            </p>

            {/* Mode B: FAQ schema dynamic accordions */}
            {!showGenericComparison && activeSchema === "faq" ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-3.5 pt-2 border-t border-slate-200 divide-y divide-slate-150 space-y-2.5 font-sans text-xs"
              >
                {/* FAQ 1 Item */}
                <div className="space-y-1.5">
                  <div
                    onClick={() => setFaq1Open(!faq1Open)}
                    className="flex justify-between items-center text-[11px] font-semibold text-slate-800 hover:text-[#1a0dab] cursor-pointer"
                  >
                    <span>Q: {faq1Q || "FAQ Title 1"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${faq1Open ? "rotate-180" : ""}`} />
                  </div>
                  {faq1Open && (
                    <p className="text-[10.5px] text-slate-500 pl-3 leading-normal select-text">
                      {faq1A || "Answer body..."}
                    </p>
                  )}
                </div>

                {/* FAQ 2 Item */}
                <div className="space-y-1.5 pt-2">
                  <div
                    onClick={() => setFaq2Open(!faq2Open)}
                    className="flex justify-between items-center text-[11px] font-semibold text-slate-800 hover:text-[#1a0dab] cursor-pointer"
                  >
                    <span>Q: {faq2Q || "FAQ Title 2"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${faq2Open ? "rotate-180" : ""}`} />
                  </div>
                  {faq2Open && (
                    <p className="text-[10.5px] text-slate-500 pl-3 leading-normal select-text">
                      {faq2A || "Answer body..."}
                    </p>
                  )}
                </div>
              </motion.div>
            ) : null}
            
          </div>

          {/* Action indicator on search advantage */}
          <div className="mt-8 p-4 bg-purple-50/50 border border-purple-100 rounded-2xl flex items-start gap-3">
            <Layers className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed font-sans text-slate-600">
              <strong className="text-slate-800 block mb-0.5 font-bold">Search Real-Estate Supremacy</strong>
              Standard listings claim just <strong>65px</strong> of mobile display coordinates. Incorporating customized localized schema nodes expands your Google card height to over <strong>220px</strong> in search lists. This claims larger competitor visual real estate and forces up to a <strong>35% higher Click-Through Rate (CTR)</strong>.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

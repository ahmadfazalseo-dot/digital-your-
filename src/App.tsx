import { useState, useEffect } from "react";
import { PageType } from "./types";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Toast, ToastMessage } from "./components/Toast";
import { BentoGrid } from "./components/BentoGrid";
import { PortfolioShowcase } from "./components/PortfolioShowcase";
import { Philosophy } from "./components/Philosophy";
import { ProjectPlanner } from "./components/ProjectPlanner";
import { WebsiteAuditTool } from "./components/WebsiteAuditTool";
import { IndustryPage } from "./components/IndustryPage";
import { CaseStudyDeepDive } from "./components/CaseStudyDeepDive";
import { INDUSTRIES } from "./industryData";
import { TrafficRoiSimulator } from "./components/TrafficRoiSimulator";
import { FAQAndProcess } from "./components/FAQAndProcess";
import { StackComparisonMatrix } from "./components/StackComparisonMatrix";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sparkles, Star, Quote, ArrowUpRight, Zap, Trophy, ShieldCheck, Heart } from "lucide-react";
import { 
  SpecializedHomeSection, 
  SpecializedServicesSection, 
  SpecializedAuditSection, 
  SpecializedPortfolioSection, 
  SpecializedAboutSection, 
  SpecializedContactSection, 
  SpecializedIndustrySection, 
  SpecializedDeepDiveSection 
} from "./components/SpecializedSections";
import { CreativeScrollReveal, CreativeStaggerContainer } from "./components/CreativeScrollReveal";
import { SleekPageShutter } from "./components/SleekPageShutter";
import { AdminDashboardScreen } from "./components/AdminDashboardScreen";
import { FloatingObjects } from "./components/FloatingObjects";
import { FloatingElements } from "./components/FloatingElements";
import { InteractiveCursor } from "./components/InteractiveCursor";
import { TechStackBenchmark } from "./components/TechStackBenchmark";
import { CodeToUxTimeline } from "./components/CodeToUxTimeline";
import { SchemaSnippetPreviewer } from "./components/SchemaSnippetPreviewer";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>("med-spa");
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [routeProgress, setRouteProgress] = useState(0);
  const [animatingRoute, setAnimatingRoute] = useState(false);

  // Bidirectional Slug Routing Manager
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash || hash === "#/" || hash === "#" || hash === "#/overview") {
        setCurrentPage("home");
      } else if (hash.startsWith("#/specifications")) {
        setCurrentPage("services");
      } else if (hash.startsWith("#/free-audit")) {
        setCurrentPage("audit");
      } else if (hash.startsWith("#/portfolio")) {
        setCurrentPage("portfolio");
      } else if (hash.startsWith("#/company")) {
        setCurrentPage("about");
      } else if (hash.startsWith("#/contact")) {
        setCurrentPage("contact");
      } else if (hash.startsWith("#/admin")) {
        setCurrentPage("admin");
      } else if (hash.startsWith("#/expertise/")) {
        const indId = hash.replace("#/expertise/", "");
        if (INDUSTRIES.some(i => i.id === indId)) {
          setSelectedIndustryId(indId);
        } else {
          setSelectedIndustryId("med-spa");
        }
        setCurrentPage("industry");
      } else if (hash.startsWith("#/case-study/")) {
        const indId = hash.replace("#/case-study/", "");
        if (INDUSTRIES.some(i => i.id === indId)) {
          setSelectedIndustryId(indId);
        } else {
          setSelectedIndustryId("med-spa");
        }
        setCurrentPage("case-study-deep-dive");
      } else {
        setCurrentPage("home");
      }
    };

    // Initialize routing position
    handleHashChange();
    
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Update URL string when states alter synchronously
  useEffect(() => {
    let targetHash = "#/overview";
    if (currentPage === "home") targetHash = "#/overview";
    else if (currentPage === "services") targetHash = "#/specifications";
    else if (currentPage === "audit") targetHash = "#/free-audit";
    else if (currentPage === "portfolio") targetHash = "#/portfolio";
    else if (currentPage === "about") targetHash = "#/company";
    else if (currentPage === "contact") targetHash = "#/contact";
    else if (currentPage === "admin") targetHash = "#/admin";
    else if (currentPage === "industry") targetHash = `#/expertise/${selectedIndustryId}`;
    else if (currentPage === "case-study-deep-dive") targetHash = `#/case-study/${selectedIndustryId}`;

    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    }
  }, [currentPage, selectedIndustryId]);

  // Toast notifier helper
  const addToast = (text: string, type: "success" | "error" | "info" = "success") => {
    const id = `toast-${Date.now()}`;
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Auto-clean long tracking search queries (UTMs, fbclid, etc.) from address bar
  useEffect(() => {
    if (window.location.search) {
      const timer = setTimeout(() => {
        try {
          // Rebuild URL with only origin, path, and hash
          const cleanUrl = window.location.origin + window.location.pathname + window.location.hash;
          window.history.replaceState(null, "", cleanUrl);
        } catch (e) {
          console.error("URL cleaning failed:", e);
        }
      }, 1000); // 1s delay ensures analytics platforms register campaign parameters beautifully
      return () => clearTimeout(timer);
    }
  }, []);

  // Welcome interaction
  useEffect(() => {
    addToast("Welcome to Digital Your — Elite design and organic growth ecosystem.", "info");
  }, []);

  // Smooth top-scroll reset on every page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [currentPage]);

  // Elite modern micro-loader route change effect
  useEffect(() => {
    setRouteProgress(15);
    setAnimatingRoute(true);
    
    const t1 = setTimeout(() => {
      setRouteProgress(65);
    }, 70);

    const t2 = setTimeout(() => {
      setRouteProgress(100);
    }, 240);

    const t3 = setTimeout(() => {
      setAnimatingRoute(false);
      setRouteProgress(0);
    }, 500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [currentPage]);

  // Premium, buttery-smooth transition config for Apple-grade motion choreography
  const pageTransitionProps = {
    initial: { opacity: 0, y: 16, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -16, filter: "blur(6px)" },
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden relative">
      <InteractiveCursor />

      {/* Top horizontal browser loader indicator */}
      {animatingRoute && (
        <motion.div
          key="route-loader"
          style={{ width: `${routeProgress}%` }}
          className="fixed top-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 z-[99999] shadow-[0_1px_10px_rgba(37,99,235,0.45)] pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{ opacity: routeProgress === 100 ? 0 : 1 }}
          transition={{ duration: 0.25 }}
        />
      )}
      
      {/* Floating Animated Geometric Objects & Ambient Ambiance in Background */}
      <FloatingObjects />

      {/* Global Drift Floating Glassmorphic Components Background */}
      <FloatingElements />
      
      {/* Premium Camera-Iris Laser Shutter Page Transitions */}
      <SleekPageShutter currentPage={currentPage} />

      {/* Top Floating Glass Header */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        selectedIndustryId={selectedIndustryId} 
        setSelectedIndustryId={setSelectedIndustryId} 
      />

      {/* Primary Transitioning Content Body */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {currentPage === "home" && (
            <motion.div
              key="home"
              {...pageTransitionProps}
              className="space-y-16"
            >
              {/* Apple-grade Cinema Hero Section */}
              <section id="hero-panel" className="relative pt-24 pb-16 max-w-7xl mx-auto px-6 text-center select-none overflow-hidden">

                {/* Visual ambient light sources */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full filter blur-[100px] pointer-events-none animate-pulse" />

                <div className="max-w-3xl mx-auto space-y-5 relative z-10 select-text">
                  <h1 className="font-display font-black text-3xl sm:text-5xl text-slate-950 tracking-tight leading-[1.1]">
                    Handcoded Websites.
                    <span className="block text-blue-600 font-bold">
                      Zero Template Bloat.
                    </span>
                  </h1>

                  <p className="text-xs sm:text-sm font-sans text-slate-500 leading-relaxed max-w-lg mx-auto">
                    We build handcoded digital flagships engineered to load in 0.2 seconds, dominate search rankings, and convert cold traffic on autopilot.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <button
                      id="hero-audit-cta"
                      onClick={() => setCurrentPage("audit")}
                      className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-550 text-white transition-all cursor-pointer shadow-md shadow-blue-500/10 flex items-center justify-center gap-1.5 active:scale-95"
                    >
                      Analyze My Website
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </button>
                    <button
                      id="hero-planner-cta"
                      onClick={() => setCurrentPage("contact")}
                      className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95 animate-pulse"
                    >
                      Configure Specifications
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
                    </button>
                  </div>
                </div>

                {/* Micro bento highlights rows */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-24 text-left font-mono text-[10px]">
                  <div className="p-5 rounded-2xl bento-card-bg">
                    <span className="text-slate-500 uppercase block mb-1">CRAWL ENGINE ACCESSIBILITY</span>
                    <span className="text-slate-900 text-sm font-sans font-bold">98+ Lighthouse Guarantee</span>
                  </div>
                  <div className="p-5 rounded-2xl bento-card-bg">
                    <span className="text-slate-500 uppercase block mb-1">ORGANIC KEYWORD ACQUISITION</span>
                    <span className="text-slate-900 text-sm font-sans font-bold">Average 3.1x Traffic Gaps</span>
                  </div>
                  <div className="p-5 rounded-2xl bento-card-bg">
                    <span className="text-slate-500 uppercase block mb-1">INTERFACING SPEED LEVEL</span>
                    <span className="text-slate-900 text-sm font-sans font-bold">100% Custom handcoded code</span>
                  </div>
                  <div className="p-5 rounded-2xl bento-card-bg">
                    <span className="text-slate-500 uppercase block mb-1">CAPITAL EFFICIENCY LEVEL</span>
                    <span className="text-slate-900 text-sm font-sans font-bold">Pre-configured unified plans</span>
                  </div>
                </div>

              </section>

              {/* Slider continuous ribbon loop - Trusted Partners */}
              <section id="logos-banner" className="bg-slate-100/50 py-10 border-y border-slate-200/55 select-none overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-6">
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block font-bold">TRUSTED BY FORWARD-THINKING BRANDS</span>
                  <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-sm font-display font-medium text-slate-400 font-bold">
                    <span className="hover:text-blue-600 transition-colors cursor-default tracking-wider">ASTRUM VENTURES</span>
                    <span className="hover:text-blue-600 transition-colors cursor-default tracking-wider">KINETIC AI</span>
                    <span className="hover:text-blue-600 transition-colors cursor-default tracking-wider">VERTEX WEAR</span>
                    <span className="hover:text-blue-600 transition-colors cursor-default tracking-wider">SOLACE GROUP</span>
                    <span className="hover:text-blue-600 transition-colors cursor-default tracking-wider">NEON HOLDINGS</span>
                  </div>
                </div>
              </section>

              {/* Bento Grid services summary */}
              <CreativeScrollReveal variant="lens-zoom-reveal">
                <BentoGrid onPlanProject={() => setCurrentPage("contact")} />
              </CreativeScrollReveal>

              {/* Philosophy details */}
              <CreativeScrollReveal variant="magnetic-lift">
                <Philosophy />
              </CreativeScrollReveal>

              {/* Deliverable blueprints process & FAQs */}
              <CreativeScrollReveal variant="lens-zoom-reveal">
                <FAQAndProcess />
              </CreativeScrollReveal>

              {/* Interactive Telemetry Section */}
              <CreativeScrollReveal variant="magnetic-lift">
                <SpecializedHomeSection />
              </CreativeScrollReveal>

              {/* High end clients review loop cards */}
              <CreativeScrollReveal variant="blur-clear">
                <section id="reviews-board" className="py-16 max-w-7xl mx-auto px-6">
                  <div className="max-w-xl mb-12 text-left">
                    <span className="font-mono text-xs text-blue-600 uppercase tracking-widest block mb-2 font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full w-max">
                      PARTNERSHIP EVIDENCE
                    </span>
                    <h2 className="font-display font-semibold text-3xl text-slate-900 tracking-tight mt-2">
                      Praised by industry commanders.
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 text-left">
                      <div className="flex text-amber-400 gap-0.5">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-sans select-text">
                        &ldquo;Their integrated customizer helped us blueprint our law portal setup. Speed dropped by 1.9 seconds, which converted directly into daily phone inquiries.&rdquo;
                      </p>
                      <div className="border-t border-slate-100 pt-4 flex items-center justify-between font-mono text-[10px] sm:text-xs">
                        <div>
                          <div className="text-slate-800 font-bold">Aris Henderson</div>
                          <div className="text-slate-400 font-medium">Chief Executive, Solace LLB</div>
                        </div>
                        <span className="text-blue-600 font-bold">+112% Conversion</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 text-left">
                      <div className="flex text-amber-400 gap-0.5">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-sans select-text">
                        &ldquo;We ran their Free Core Audit out of curiosity. The technical Scraper and subsequent Gemini roadmap were so precise we discarded our legacy SEO retainer in hours.&rdquo;
                      </p>
                      <div className="border-t border-slate-100 pt-4 flex items-center justify-between font-mono text-[10px] sm:text-xs">
                        <div>
                          <div className="text-slate-800 font-bold">Marcia Vander</div>
                          <div className="text-slate-400 font-medium">Director of Branding, Kinetic</div>
                        </div>
                        <span className="text-emerald-700 font-bold">99 Speed rating</span>
                      </div>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 text-left">
                      <div className="flex text-amber-400 gap-0.5">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic font-sans select-text">
                        &ldquo;Unlike standard marketing groups that talk with flowery slide decks, Digital Your operates like a high-performance software lab. Outstanding attention to detail.&rdquo;
                      </p>
                      <div className="border-t border-slate-100 pt-4 flex items-center justify-between font-mono text-[10px] sm:text-xs">
                        <div>
                          <div className="text-slate-800 font-bold">Thomas Strøm</div>
                          <div className="text-slate-400 font-medium">Technology VP, Astrum</div>
                        </div>
                        <span className="text-indigo-600 font-bold">Compounding CAC</span>
                      </div>
                    </div>

                  </div>
                </section>
              </CreativeScrollReveal>

              {/* Editorial bottom conversion zone banner */}
              <CreativeScrollReveal variant="stagger-spring">
                <section id="bottom-cta-banner" className="py-20 max-w-7xl mx-auto px-6 relative select-none">
                  <div className="relative p-10 md:p-14 rounded-3xl bg-white border border-slate-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full filter blur-[90px] pointer-events-none" />
                    
                    <div className="space-y-4 max-w-lg text-left relative z-10">
                      <span className="font-mono text-xs text-blue-600 uppercase tracking-widest block font-bold">Start Your Journey</span>
                      <h3 className="font-display font-semibold text-2xl md:text-3xl text-slate-900 tracking-tight leading-none">
                        Ready to command absolute digital authority?
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                        Let's design a bespoke system that fits your exact commercial coordinates. Run our diagnostic scan tool now or configure specifications in our planner.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10 shrink-0 font-sans">
                      <button
                        id="bottom-audit-cta"
                        onClick={() => setCurrentPage("audit")}
                        className="px-6 py-3 rounded-full text-xs font-bold bg-blue-600 hover:bg-blue-550 text-white transition-all cursor-pointer text-center shadow-md shadow-blue-500/10 active:scale-95"
                      >
                        Inspect Website Quality
                      </button>
                      <button
                        id="bottom-planner-cta"
                        onClick={() => setCurrentPage("contact")}
                        className="px-6 py-3 rounded-full text-xs font-bold bg-white border-2 border-slate-200 text-slate-800 hover:bg-slate-50 transition-all cursor-pointer text-center active:scale-95"
                      >
                        Draft Project Contract
                      </button>
                    </div>
                  </div>
                </section>
              </CreativeScrollReveal>

            </motion.div>
          )}

          {currentPage === "services" && (
            <motion.div
              key="services"
              {...pageTransitionProps}
              className="space-y-12"
            >
              <CreativeScrollReveal variant="lens-zoom-reveal">
                <BentoGrid onPlanProject={() => setCurrentPage("contact")} />
              </CreativeScrollReveal>
              <CreativeScrollReveal variant="magnetic-lift">
                <StackComparisonMatrix />
              </CreativeScrollReveal>

              <CreativeScrollReveal variant="perspective">
                <TechStackBenchmark />
              </CreativeScrollReveal>
              
              {/* Special interactive services block */}
              <CreativeScrollReveal variant="lens-zoom-reveal">
                <SpecializedServicesSection />
              </CreativeScrollReveal>
            </motion.div>
          )}

          {currentPage === "audit" && (
            <motion.div
              key="audit"
              {...pageTransitionProps}
              className="space-y-12"
            >
              <CreativeScrollReveal variant="lens-zoom-reveal">
                <WebsiteAuditTool addToast={addToast} />
              </CreativeScrollReveal>

              <CreativeScrollReveal variant="perspective">
                <SchemaSnippetPreviewer />
              </CreativeScrollReveal>
              
              {/* Special interactive crawler audit block */}
              <CreativeScrollReveal variant="magnetic-lift">
                <SpecializedAuditSection />
              </CreativeScrollReveal>
            </motion.div>
          )}

          {currentPage === "portfolio" && (
            <motion.div
              key="portfolio"
              {...pageTransitionProps}
              className="space-y-12"
            >
              <CreativeScrollReveal variant="lens-zoom-reveal">
                <PortfolioShowcase />
              </CreativeScrollReveal>
              
              {/* Special interactive connectivity simulation */}
              <CreativeScrollReveal variant="magnetic-lift">
                <SpecializedPortfolioSection />
              </CreativeScrollReveal>
            </motion.div>
          )}

          {currentPage === "about" && (
            <motion.div
              key="about"
              {...pageTransitionProps}
              className="space-y-12"
            >
              <CreativeScrollReveal variant="magnetic-lift">
                <Philosophy />
              </CreativeScrollReveal>
              
               {/* Premium corporate team specification bento card */}
              <CreativeScrollReveal variant="lens-zoom-reveal">
                <section id="corporate-team" className="py-10 max-w-7xl mx-auto px-6 select-none">
                  <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm max-w-4xl mx-auto text-left relative overflow-hidden">
                    <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-blue-500/[0.03] rounded-full filter blur-[100px] pointer-events-none" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                      <div className="md:col-span-8 space-y-4">
                        <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest block font-bold bg-slate-100 border border-slate-200 px-2.5 py-0.5 rounded-full w-max">HOW WE DELIVER</span>
                        <h3 className="font-display font-semibold text-xl md:text-2xl text-slate-900 tracking-tight">The Unified Studio Standard</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          We don't count bodies, and we don't scale overhead. Digital Your operates as an elite team of technical directors, on-page search architects, and digital visual leads. 
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          By matching advanced programming logic with brand positioning design, we deliver digital flagships that operate with structural honor, flawless speeds, and predicting compounding traffic loops.
                        </p>
                      </div>

                      <div className="md:col-span-4 grid grid-cols-2 gap-3 text-center font-mono text-[10px]">
                        <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                          <Trophy className="w-5 h-5 text-amber-500 mx-auto mb-1.5" />
                          <span className="text-slate-500 block">Founded In</span>
                          <strong className="text-slate-900 text-xs mt-0.5 block font-sans">2021</strong>
                        </div>
                        <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                          <ShieldCheck className="w-5 h-5 text-blue-500 mx-auto mb-1.5" />
                          <span className="text-slate-500 block">Standard rating</span>
                          <strong className="text-slate-900 text-xs mt-0.5 block font-sans">98% Perfect</strong>
                        </div>
                        <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                          <Zap className="w-5 h-5 text-emerald-500 mx-auto mb-1.5" />
                          <span className="text-slate-500 block">Weekly Cap</span>
                          <strong className="text-slate-900 text-xs mt-0.5 block font-sans">4 Active Bills</strong>
                        </div>
                        <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl">
                          <Heart className="w-5 h-5 text-purple-500 mx-auto mb-1.5" />
                          <span className="text-slate-500 block">Framework Clones</span>
                          <strong className="text-slate-900 text-xs mt-0.5 block font-sans">0% (Handwritten)</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </CreativeScrollReveal>

              {/* Special interactive Zero-Bloat Manifesto Timeline */}
              <CreativeScrollReveal variant="perspective">
                <SpecializedAboutSection />
              </CreativeScrollReveal>

              <CreativeScrollReveal variant="lens-zoom-reveal">
                <CodeToUxTimeline />
              </CreativeScrollReveal>
            </motion.div>
          )}

          {currentPage === "contact" && (
            <motion.div
              key="contact"
              {...pageTransitionProps}
              className="space-y-12"
            >
              <CreativeScrollReveal variant="blur-clear">
                <ProjectPlanner addToast={addToast} />
              </CreativeScrollReveal>
              
              {/* Special interactive SLA assurances */}
              <CreativeScrollReveal variant="stagger-spring">
                <SpecializedContactSection />
              </CreativeScrollReveal>
            </motion.div>
          )}

          {currentPage === "industry" && (
            <motion.div
              key={`industry-${selectedIndustryId}`}
              {...pageTransitionProps}
              className="space-y-12"
            >
              {(() => {
                const ind = INDUSTRIES.find(i => i.id === selectedIndustryId) || INDUSTRIES[0];
                return (
                  <>
                    <IndustryPage 
                      industry={ind}
                      addToast={addToast}
                      onViewDeepDive={() => {
                        setCurrentPage("case-study-deep-dive");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      onContactNav={() => {
                        setCurrentPage("contact");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                    
                    {/* Special industry conversion calculator */}
                    <SpecializedIndustrySection 
                      key={`calculator-${selectedIndustryId}`}
                      selectedIndustryId={selectedIndustryId} 
                    />
                  </>
                );
              })()}
            </motion.div>
          )}

          {currentPage === "case-study-deep-dive" && (
            <motion.div
              key={`case-study-deep-dive-${selectedIndustryId}`}
              {...pageTransitionProps}
              className="space-y-12"
            >
              {(() => {
                const ind = INDUSTRIES.find(i => i.id === selectedIndustryId) || INDUSTRIES[0];
                return (
                  <>
                    <CaseStudyDeepDive 
                      industry={ind}
                      onBack={() => {
                        setCurrentPage("industry");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      onConnect={() => {
                        setCurrentPage("contact");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    />
                    
                    {/* Special micro-metric infrastructure benchmarks */}
                    <SpecializedDeepDiveSection />
                  </>
                );
              })()}
            </motion.div>
          )}

          {currentPage === "admin" && (
            <motion.div
              key="admin"
              {...pageTransitionProps}
              className="space-y-12"
            >
              <CreativeScrollReveal variant="lens-zoom-reveal">
                <AdminDashboardScreen addToast={addToast} />
              </CreativeScrollReveal>
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Premium Apple Sitemap Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Visual Floating Toasts Alerts */}
      <Toast toasts={toasts} removeToast={removeToast} />

    </div>
  );
}

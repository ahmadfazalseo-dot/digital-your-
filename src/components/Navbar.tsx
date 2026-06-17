import { useState } from "react";
import { PageType } from "../types";
import { Menu, X, ArrowUpRight, ChevronDown, Sparkles } from "lucide-react";
import { INDUSTRIES } from "../industryData";

interface NavbarProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  selectedIndustryId: string;
  setSelectedIndustryId: (id: string) => void;
}

export function Navbar({ currentPage, setCurrentPage, selectedIndustryId, setSelectedIndustryId }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deskDropdownOpen, setDeskDropdownOpen] = useState(false);
  const [mobDropdownOpen, setMobDropdownOpen] = useState(false);

  const navigationItems: { label: string; page: PageType }[] = [
    { label: "Overview", page: "home" },
    { label: "Specifications", page: "services" },
    { label: "Free Audit", page: "audit" },
    { label: "Portfolio", page: "portfolio" },
    { label: "Company", page: "about" },
    { label: "Get In Touch", page: "contact" },
  ];

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    setDeskDropdownOpen(false);
    setMobDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleIndustryClick = (id: string) => {
    setSelectedIndustryId(id);
    setCurrentPage("industry");
    setMobileMenuOpen(false);
    setDeskDropdownOpen(false);
    setMobDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header id="nav-header" className="sticky top-0 z-50 w-full h-14 border-b border-slate-200/80 glassmorphic transition-all duration-300">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between relative">
        
        {/* Brand Logo - Apple Inspired */}
        <div 
          id="brand-logo"
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 cursor-pointer group select-none"
        >
          <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center p-1 transition-all duration-300 group-hover:bg-blue-700">
            <span className="font-mono text-xs font-bold text-white leading-none">dy</span>
          </div>
          <span className="font-display font-medium text-sm tracking-tight text-slate-800 group-hover:text-blue-600 transition-colors">
            digital<span className="text-slate-500 font-light font-sans group-hover:text-blue-600">your.</span>
          </span>
        </div>

        {/* Desktop Menu - High End Refined Layout */}
        <nav id="desktop-menu" className="hidden md:flex items-center gap-1">
          {/* Overview button */}
          <button
            id="nav-home"
            onClick={() => handleNavClick("home")}
            className={`px-3.5 py-1 rounded-full text-xs font-normal tracking-wide transition-all duration-300 cursor-pointer ${
              currentPage === "home"
                ? "text-blue-600 bg-blue-50/80 font-semibold border border-blue-100"
                : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
            }`}
          >
            Overview
          </button>

          {/* Dynamic Expertise Dropdown Selector */}
          <div 
            id="expertise-dropdown-parent"
            className="relative"
            onMouseEnter={() => setDeskDropdownOpen(true)}
            onMouseLeave={() => setDeskDropdownOpen(false)}
          >
            <button
              id="expertise-trigger"
              onClick={() => setDeskDropdownOpen(!deskDropdownOpen)}
              className={`px-3.5 py-1 rounded-full text-xs font-normal tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-1 ${
                currentPage === "industry" || currentPage === "case-study-deep-dive"
                  ? "text-blue-600 bg-blue-50/80 border border-blue-100 font-semibold"
                  : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
              }`}
            >
              Expertise
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${deskDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Micro bento dropdown popup */}
            {deskDropdownOpen && (
              <div 
                id="expertise-menu-popup"
                className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[440px] bg-white border border-slate-200/80 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,113,227,0.08)] grid grid-cols-2 gap-1.5 z-50 transform origin-top transition-all"
              >
                <div className="col-span-2 pb-1.5 mb-1.5 border-b border-slate-100 flex items-center gap-1.5 px-2 select-none">
                  <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest font-semibold">Specialized Industries</span>
                </div>
                {INDUSTRIES.map((ind) => {
                  const isSelected = currentPage === "industry" && selectedIndustryId === ind.id;
                  return (
                    <button
                      id={`nav-ind-${ind.id}`}
                      key={ind.id}
                      onClick={() => handleIndustryClick(ind.id)}
                      className={`text-left px-3 py-2 rounded-lg text-[11px] font-sans transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected 
                          ? "bg-blue-50 text-blue-600 font-semibold border border-blue-100" 
                          : "text-slate-600 hover:text-blue-600 hover:bg-slate-50 border border-transparent"
                      }`}
                    >
                      <span>{ind.name}</span>
                      <ArrowUpRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Remaining navigation items */}
          {navigationItems.slice(1).map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                id={`nav-${item.page}`}
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`px-3.5 py-1 rounded-full text-xs font-normal tracking-wide transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? "text-blue-600 bg-blue-50/80 font-medium border border-blue-100" 
                    : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA Area */}
        <div className="flex items-center gap-4">
          <button
            id="nav-audit-cta"
            onClick={() => handleNavClick("audit")}
            className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-blue-500/20 active:scale-95 animate-pulse"
          >
            Run Free Audit
            <ArrowUpRight className="w-3 h-3" />
          </button>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-600 hover:text-blue-600 transition-colors cursor-pointer p-1"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-slate-800" /> : <Menu className="w-5 h-5 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Glassmorphic Overlay */}
      {mobileMenuOpen && (
        <div id="mobile-overlay" className="absolute top-14 left-0 w-full glassmorphic border-b border-slate-200/80 flex flex-col gap-1 p-4 md:hidden max-h-[calc(100vh-3.5rem)] overflow-y-auto">
          
          <button
            id="mob-nav-home"
            onClick={() => handleNavClick("home")}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all cursor-pointer ${
              currentPage === "home" 
                ? "text-blue-600 bg-blue-50/80 font-semibold" 
                : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
            }`}
          >
            Overview
          </button>

          {/* Expertise Accordion for Mobile */}
          <div className="border border-slate-200/50 rounded-xl bg-slate-50/50 p-1">
            <button
              id="mob-expertise-trigger"
              onClick={() => setMobDropdownOpen(!mobDropdownOpen)}
              className="w-full text-left px-3 py-2 rounded-lg text-sm transition-all cursor-pointer text-slate-800 flex items-center justify-between font-medium"
            >
              <span className="flex items-center gap-1.5 text-slate-800">
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                Expertise (10 Industries)
              </span>
              <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${mobDropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {mobDropdownOpen && (
              <div id="mob-expertise-list" className="pl-3 pr-1 py-1 space-y-0.5 border-t border-slate-200/60 mt-1">
                {INDUSTRIES.map((ind) => {
                  const isSelected = currentPage === "industry" && selectedIndustryId === ind.id;
                  return (
                    <button
                      id={`mob-ind-${ind.id}`}
                      key={ind.id}
                      onClick={() => handleIndustryClick(ind.id)}
                      className={`w-full text-left px-3 py-1.5 rounded-md text-xs transition-colors cursor-pointer block ${
                        isSelected 
                          ? "text-blue-600 font-semibold bg-blue-50" 
                          : "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                      }`}
                    >
                      {ind.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Remaining navbar items on mobile */}
          {navigationItems.slice(1).map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                id={`mob-nav-${item.page}`}
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all cursor-pointer ${
                  isActive 
                    ? "text-blue-600 bg-blue-50/80 font-semibold" 
                    : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </button>
            );
          })}
          
          <div className="border-t border-slate-200/60 mt-2 pt-3 px-3">
            <button
              id="mob-nav-cta"
              onClick={() => handleNavClick("audit")}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer"
            >
              Analyze My Site
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

import { PageType } from "../types";
import { ArrowUpRight, Linkedin, Instagram, ShieldCheck, Mail, MapPin } from "lucide-react";

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="global-footer" className="bg-slate-50 border-t border-slate-200/80 pt-20 pb-12 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Sitemap Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6 mb-16">
          
          <div className="col-span-2 space-y-5">
            <div className="flex items-center gap-2 cursor-pointer select-none text-left" onClick={() => handleNavClick("home")}>
              <div className="w-5 h-5 rounded-md bg-blue-600 flex items-center justify-center p-0.5 animate-pulse">
                <span className="font-mono text-[10px] font-bold text-white">dy</span>
              </div>
              <span className="font-display font-semibold text-sm tracking-tight text-slate-800">
                digital<span className="text-slate-500 font-light font-sans">your.</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm text-left">
              An elite custom engineering and organic growth collective. We design handcoded, light-speed digital flagships that convert high-intent traffic into qualified, high-ticket clients.
            </p>
            <div className="flex items-center gap-4 text-slate-500 font-sans">
              <a href="https://www.linkedin.com/company/digital-your-seo" target="_blank" rel="noreferrer" className="hover:text-blue-600 hover:scale-110 transition-all text-slate-400" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/digitalyour.seo/" target="_blank" rel="noreferrer" className="hover:text-blue-600 hover:scale-110 transition-all text-slate-400" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:info@digitalyour.com" className="hover:text-blue-600 transition-colors font-mono text-[10px] flex items-center gap-1.5" title="Email Direct">
                <Mail className="w-4 h-4 text-slate-450" />
                info@digitalyour.com
              </a>
            </div>
          </div>

          <div className="space-y-4 text-left">
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest">Ecosystem</h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-600">
              <li>
                <button onClick={() => handleNavClick("home")} className="hover:text-blue-600 transition-colors cursor-pointer text-left">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-blue-600 transition-colors cursor-pointer text-left">
                  Specifications
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("portfolio")} className="hover:text-blue-600 transition-colors cursor-pointer text-left">
                  Client Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("about")} className="hover:text-blue-600 transition-colors cursor-pointer text-left">
                  Our Philosophy
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-left">
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest">Specifications</h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-600 font-sans">
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-blue-600 transition-colors cursor-pointer text-left">
                  High-Performance Web
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-blue-600 transition-colors cursor-pointer text-left">
                  Advanced SEO Ranking
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-blue-600 transition-colors cursor-pointer text-left">
                  Brand Chemistry & Systems
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-blue-600 transition-colors cursor-pointer text-left">
                  Growth Analytics & Scale
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4 text-left">
            <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-widest">Diagnostics</h4>
            <ul className="flex flex-col gap-3 text-xs text-slate-600 font-mono">
              <li>
                <button onClick={() => handleNavClick("audit")} className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer flex items-center gap-1 font-semibold text-left">
                  Free Site Audit
                  <ArrowUpRight className="w-3 h-3 text-blue-600" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("contact")} className="text-slate-600 hover:text-blue-600 transition-colors cursor-pointer text-left">
                  Project Planner
                </button>
              </li>
              <li className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-2 text-left">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                Secure Sandbox
              </li>
            </ul>
          </div>

        </div>

        {/* Footnotes */}
        <div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8">
            <span>© {currentYear} Digital Your Inc. All specifications reserved.</span>
            <span className="hidden md:inline text-slate-200">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-blue-500" />
              World HQ — Silicon Valley & London
            </span>
            <span className="hidden md:inline text-slate-200">|</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-blue-500" />
              info@digitalyour.com
            </span>
          </div>
          <div className="flex items-center gap-5">
            <button onClick={() => handleNavClick("admin")} className="hover:text-blue-600 text-slate-500 font-bold transition-all cursor-pointer text-[11px] font-mono leading-none">Admin Access</button>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-blue-600 transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

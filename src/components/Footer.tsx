import { PageType } from "../types";
import { ArrowUpRight, Github, Twitter, Linkedin, Instagram, ShieldCheck, Mail, MapPin } from "lucide-react";

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
    <footer id="global-footer" className="bg-zinc-950 border-t border-white/5 pt-20 pb-12 mt-20 relative z-10 selection:bg-zinc-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Sitemap Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6 mb-16">
          
          <div className="col-span-2 space-y-5">
            <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => handleNavClick("home")}>
              <div className="w-5 h-5 rounded-md bg-white flex items-center justify-center p-0.5">
                <span className="font-mono text-[10px] font-bold text-black">dy</span>
              </div>
              <span className="font-display font-medium text-sm tracking-tight text-white/95">
                digital<span className="text-zinc-400 font-light font-sans">your.</span>
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              An elite design, organic traffic, and technology collective. We forge absolute digital brand experiences and engineered growth solutions modeled on Apple-grade product craftsmanship.
            </p>
            <div className="flex items-center gap-4 text-zinc-500">
              <a href="https://www.linkedin.com/company/digital-your-seo" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/digitalyour.seo/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="mailto:ahmadfazal.mubeen@gmail.com" className="hover:text-white transition-colors" title="Email Direct">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider">Ecosystem</h4>
            <ul className="flex flex-col gap-3 text-xs text-zinc-400">
              <li>
                <button onClick={() => handleNavClick("home")} className="hover:text-white transition-colors cursor-pointer">
                  Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors cursor-pointer">
                  Specifications
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("portfolio")} className="hover:text-white transition-colors cursor-pointer">
                  Client Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("about")} className="hover:text-white transition-colors cursor-pointer">
                  Our Philosophy
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider">Specifications</h4>
            <ul className="flex flex-col gap-3 text-xs text-zinc-400">
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors cursor-pointer">
                  High-Performance Web
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors cursor-pointer">
                  Advanced SEO Ranking
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors cursor-pointer">
                  Brand Chemistry & Systems
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("services")} className="hover:text-white transition-colors cursor-pointer">
                  Growth Analytics & Scale
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[11px] font-semibold text-zinc-300 uppercase tracking-wider">Diagnostics</h4>
            <ul className="flex flex-col gap-3 text-xs text-zinc-400 font-mono">
              <li>
                <button onClick={() => handleNavClick("audit")} className="text-zinc-400 hover:text-blue-400 transition-colors cursor-pointer flex items-center gap-1">
                  Free Site Audit
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick("contact")} className="text-zinc-400 hover:text-white transition-colors cursor-pointer">
                  Project Planner
                </button>
              </li>
              <li className="text-[11px] text-zinc-500 flex items-center gap-1.5 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                Secure Sandbox
              </li>
            </ul>
          </div>

        </div>

        {/* Footnotes */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500 font-mono">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8">
            <span>© {currentYear} Digital Your Inc. All specifications reserved.</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-zinc-600" />
              World HQ — Silicon Valley & London
            </span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-zinc-600" />
              ahmadfazal.mubeen@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

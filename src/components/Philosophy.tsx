import { Code, Award, Target, Sparkles, HelpCircle } from "lucide-react";

export function Philosophy() {
  const philosophies = [
    {
      icon: <Target className="w-5 h-5 text-blue-600" />,
      title: "Absolute Structural Alignment",
      description: "When copywriters, developers, and designers operate in silos, detail suffers. Our holistic execution maps design pixel placement directly to search engine parsing semantics, ensuring beautiful interfaces score 98+ on crawl engines."
    },
    {
      icon: <Code className="w-5 h-5 text-indigo-600" />,
      title: "True Engineering Integrity",
      description: "We hate bloated page builders, heavy frameworks, and template hacks. Every code line is handwritten with clean, fast structures configured to deliver native-app speeds and instant handshakes across small screens."
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-600" />,
      title: "Compound Growth Mentality",
      description: "Paid clicks vanish when budgets stop. Premium design coupled with engineered SEO generates a scalable growth asset. Over time, your search visibility compounds, turning into an automated organic funnel."
    }
  ];

  return (
    <section id="philosophy-section" className="py-20 max-w-7xl mx-auto px-6 select-none border-t border-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Info Box (West Column) */}
        <div className="md:col-span-5 space-y-5 text-left">
          <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block">
            <Sparkles className="w-3.5 h-3.5" />
            Vibe &amp; Brand Ideology
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
            Stop juggling freelancers. Unleash structural synergy.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            Most businesses hire one developer to write code, a designer to build elements, and an SEO specialist to guess labels. The result is a sluggish, fragmented site with conflicting priorities. 
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            At <strong>Digital Your</strong>, we align everything under a single, elite engineering umbrella. Your site is compiled for speed, designed for prestige, and indexed for organic superiority on day one.
          </p>
        </div>

        {/* Philosophy Deck (East Column) */}
        <div className="md:col-span-7 space-y-4">
          {philosophies.map((phil, idx) => (
            <div
              key={idx}
              id={`phil-card-${idx}`}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 flex gap-4 items-start hover:border-blue-300 hover:shadow-md transition-all duration-300 text-left"
            >
              <div className="p-3 rounded-2xl bg-blue-50 border border-blue-100 mt-1 shrink-0">
                {phil.icon}
              </div>
              <div className="space-y-1 min-w-0">
                <h3 className="font-display font-bold text-sm sm:text-base text-slate-800">{phil.title}</h3>
                <p className="font-sans text-xs sm:text-sm text-slate-605 leading-relaxed">{phil.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

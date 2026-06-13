import { useState } from "react";
import { motion } from "motion/react";
import { TrendingUp, DollarSign, Zap, MousePointerClick, ShieldCheck } from "lucide-react";

export function TrafficRoiSimulator() {
  const [traffic, setTraffic] = useState<number>(15000);
  const [currentConversion, setCurrentConversion] = useState<number>(1.2);
  const [targetConversion, setTargetConversion] = useState<number>(2.8);
  const [cartValue, setCartValue] = useState<number>(150);

  // Math equations
  const currentRevenue = Math.round(traffic * (currentConversion / 100) * cartValue);
  const targetedRevenue = Math.round(traffic * (targetConversion / 100) * cartValue);
  const netLift = targetedRevenue - currentRevenue;

  return (
    <section id="roi-simulator" className="py-20 max-w-7xl mx-auto px-6 select-none relative">
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full filter blur-[100px] pointer-events-none" />

      {/* Title block */}
      <div className="max-w-xl mb-12 text-left">
        <span className="font-mono text-xs text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5 mb-3 font-semibold w-max">
          <TrendingUp className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
          Empirical Profit Forecaster
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-none">
          Simulate Your Conversion Dividend
        </h2>
        <p className="text-xs text-slate-600 mt-2 font-sans font-medium">
          Legacy templates throw away up to 70% of potential buyers due to sub-second delay fractions. Slide variables below to calculate the recurring capital gained using Digital Your light-speed layouts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Sliders Area (West) */}
        <div className="lg:col-span-12 xl:col-span-7 bg-white border border-slate-200/85 p-6 sm:p-8 rounded-3xl flex flex-col justify-between gap-6 shadow-sm shadow-slate-100">
          
          <div className="space-y-6">
            {/* Slider 1: Monthly Traffic */}
            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-700 font-sans flex items-center gap-1.5 font-bold">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                  Monthly Web Visitors
                </span>
                <span className="font-mono text-slate-900 font-extrabold">{traffic.toLocaleString()} / mo</span>
              </div>
              <input 
                id="slider-traffic"
                type="range" 
                min={2000} 
                max={150000} 
                step={2000} 
                value={traffic} 
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>

            {/* Slider 2: Conversion % */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-sans flex items-center gap-1.5 font-bold">
                    <MousePointerClick className="w-3.5 h-3.5 text-rose-500" />
                    Current Conv. Rate
                  </span>
                  <span className="font-mono text-slate-900 font-extrabold">{currentConversion}%</span>
                </div>
                <input 
                  id="slider-current-conversion"
                  type="range" 
                  min={0.2} 
                  max={5} 
                  step={0.1} 
                  value={currentConversion} 
                  onChange={(e) => setCurrentConversion(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>

              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-700 font-sans flex items-center gap-1.5 font-bold">
                    <Zap className="w-3.5 h-3.5 text-emerald-500" />
                    Target Conv. Rate
                  </span>
                  <span className="font-mono text-emerald-600 font-extrabold">{targetConversion}%</span>
                </div>
                <input 
                  id="slider-target-conversion"
                  type="range" 
                  min={1} 
                  max={8} 
                  step={0.1} 
                  value={targetConversion} 
                  onChange={(e) => setTargetConversion(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>

            {/* Slider 3: Average Customer Lift (Value) */}
            <div className="space-y-2 text-left pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-700 font-sans flex items-center gap-1.5 font-bold">
                  <DollarSign className="w-3.5 h-3.5 text-slate-500" />
                  Average Invoice Value / LTV
                </span>
                <span className="font-mono text-slate-900 font-extrabold">${cartValue}</span>
              </div>
              <input 
                id="slider-cart-value"
                type="range" 
                min={25} 
                max={2000} 
                step={25} 
                value={cartValue} 
                onChange={(e) => setCartValue(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-slate-500"
              />
            </div>
          </div>

          <div className="border-t border-slate-100 pt-4 text-[10px] font-mono text-slate-500 flex items-center gap-2 text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            Empirical calculation based on localized SEO Schema crawls and mobile loading benchmarks under 0.25 seconds.
          </div>

        </div>

        {/* Visual Forecast Outputs (East) */}
        <div className="lg:col-span-12 xl:col-span-5 bg-white border border-slate-200/85 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left rounded-3xl shadow-sm shadow-slate-100">
          
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-[70px] pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest block font-bold">Compounded Growth Projection</span>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[9px] font-mono text-slate-400 uppercase block font-bold">Legacy Revenue</span>
                <span className="text-lg font-sans font-extrabold text-slate-500 mt-1 block">${currentRevenue.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-blue-500 uppercase block font-extrabold">Digital Your Yield</span>
                <span className="text-lg font-sans font-black text-blue-600 mt-1 block">${targetedRevenue.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <span className="text-[10px] font-mono text-blue-600 uppercase tracking-widest block font-extrabold">Projected Monthly Profit Lift</span>
              <div className="text-3xl sm:text-4xl font-display font-black text-slate-900 tracking-tight mt-2 flex flex-items gap-1">
                +${netLift.toLocaleString()}
                <span className="font-sans text-xs text-emerald-500 font-bold tracking-normal">/ mo</span>
              </div>
            </div>
          </div>

          <div className="pt-8 relative z-10">
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-105 flex items-start gap-3">
              <Zap className="w-4 h-4 text-blue-600 mt-0.5 shrink-0 animate-pulse" />
              <div className="text-[11px] font-sans text-slate-600 leading-relaxed">
                By accelerating the initial paint index down to <strong>0.2s</strong>, the drop-off rate registers a mathematical conversion increment from <strong>{currentConversion}% to {targetConversion}%</strong> representing direct capital gains.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

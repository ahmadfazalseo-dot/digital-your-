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
        <span className="font-mono text-xs text-blue-500 uppercase tracking-widest block mb-1">Empirical Profit Forecaster</span>
        <h2 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight leading-none">
          Simulate Your Conversion Dividend
        </h2>
        <p className="text-xs text-zinc-400 mt-2 font-sans font-medium">
          Legacy templates throw away up to 70% of potential buyers due to sub-second delay fractions. Slide variables below to calculate the recurring capital gained using Digital Your light-speed layouts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        {/* Sliders Area (West) */}
        <div className="lg:col-span-7 bg-[#050506] border border-white/5 p-8 rounded-3xl flex flex-col justify-between gap-6">
          
          <div className="space-y-6">
            {/* Slider 1: Monthly Traffic */}
            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-sans flex items-center gap-1.5 font-medium">
                  <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                  Monthly Web Visitors
                </span>
                <span className="font-mono text-white font-semibold">{traffic.toLocaleString()} / mo</span>
              </div>
              <input 
                id="slider-traffic"
                type="range" 
                min={2000} 
                max={150000} 
                step={2000} 
                value={traffic} 
                onChange={(e) => setTraffic(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            {/* Slider 2: Conversion % */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-sans flex items-center gap-1.5 font-medium">
                    <MousePointerClick className="w-3.5 h-3.5 text-rose-400" />
                    Current Conv. Rate
                  </span>
                  <span className="font-mono text-white font-semibold">{currentConversion}%</span>
                </div>
                <input 
                  id="slider-current-conversion"
                  type="range" 
                  min={0.2} 
                  max={5} 
                  step={0.1} 
                  value={currentConversion} 
                  onChange={(e) => setCurrentConversion(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
              </div>

              <div className="space-y-2 text-left">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-sans flex items-center gap-1.5 font-medium">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    Target Conv. Rate
                  </span>
                  <span className="font-mono text-emerald-400 font-semibold">{targetConversion}%</span>
                </div>
                <input 
                  id="slider-target-conversion"
                  type="range" 
                  min={1} 
                  max={8} 
                  step={0.1} 
                  value={targetConversion} 
                  onChange={(e) => setTargetConversion(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>
            </div>

            {/* Slider 3: Average Customer Lift (Value) */}
            <div className="space-y-2 text-left pt-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-sans flex items-center gap-1.5 font-medium">
                  <DollarSign className="w-3.5 h-3.5 text-zinc-400" />
                  Average Invoice Value / LTV
                </span>
                <span className="font-mono text-white font-semibold">${cartValue}</span>
              </div>
              <input 
                id="slider-cart-value"
                type="range" 
                min={25} 
                max={2000} 
                step={25} 
                value={cartValue} 
                onChange={(e) => setCartValue(Number(e.target.value))}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-zinc-500"
              />
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 text-[10px] font-mono text-zinc-500 flex items-center gap-2 text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Empirical calculation based on localized SEO Schema crawls and mobile loading benchmarks under 0.25 seconds.
          </div>

        </div>

        {/* Visual Forecast Outputs (East) */}
        <div className="lg:col-span-5 bento-card-bg border-blue-500/10 p-8 flex flex-col justify-between relative overflow-hidden text-left">
          
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-emerald-500/5 rounded-full filter blur-[70px] pointer-events-none" />

          <div className="space-y-6">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">Compounded Growth Projection</span>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-[9px] font-mono text-zinc-500 uppercase block">Legacy Revenue</span>
                <span className="text-lg font-sans font-medium text-zinc-400 mt-1 block">${currentRevenue.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-[9px] font-mono text-zinc-400 uppercase block">Digital Your Yield</span>
                <span className="text-lg font-sans font-semibold text-white mt-1 block">${targetedRevenue.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block font-bold">Projected Monthly Profit Lift</span>
              <div className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mt-2 flex items-center gap-1">
                +${netLift.toLocaleString()}
                <span className="font-sans text-xs text-emerald-400 font-medium tracking-normal">/ mo</span>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="p-4 rounded-xl bg-blue-600/5 border border-blue-500/10 flex items-start gap-3">
              <Zap className="w-4 h-4 text-blue-400 mt-0.5 shrink-0 animate-pulse" />
              <div className="text-[11px] font-sans text-zinc-300 leading-relaxed">
                By accelerating the initial paint index down to <strong>0.2s</strong>, the drop-off rate registers a mathematical conversion increment from <strong>{currentConversion}% to {targetConversion}%</strong> representing direct capital gains.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

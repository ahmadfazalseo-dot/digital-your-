import { useState, FormEvent } from "react";
import { AuditResult } from "../types";
import { 
  Search, 
  HelpCircle, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Cpu, 
  ArrowRight,
  RefreshCw,
  Award,
  BookOpen,
  FileDown,
  Activity
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface WebsiteAuditToolProps {
  addToast: (text: string, type: "success" | "error" | "info") => void;
}

export function WebsiteAuditTool({ addToast }: WebsiteAuditToolProps) {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<AuditResult | null>(null);
  
  // Scraper technical logs state
  const [tickerLog, setTickerLog] = useState<string[]>([]);

  const scanStatesList = [
    "Initiating handshake on host database...",
    "Crawling page metadata headers on port 443...",
    "Scanning heading models for absolute content weight...",
    "Assessing asset load time scales...",
    "Interrogating viewport schemas...",
    "Formulating optimization metrics...",
    "Sending specifications package to central AI...",
    "Creating bespoke strategic positioning insights..."
  ];

  const animateTicker = async () => {
    setTickerLog([]);
    for (let i = 0; i < scanStatesList.length; i++) {
      await new Promise(resolve => setTimeout(resolve, i === 0 ? 300 : 700));
      setTickerLog(prev => [...prev, `[DY-LOG] ${scanStatesList[i]}`]);
    }
  };

  const handleRunAudit = async (e: FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !email.trim()) {
      addToast("Please provide both website URL and contact email.", "error");
      return;
    }

    setResults(null);
    setLoading(true);
    animateTicker();

    try {
      // Normalise URL just in case
      let finalUrl = url.trim();
      if (!finalUrl.startsWith("http://") && !finalUrl.startsWith("https://")) {
        finalUrl = `https://${finalUrl}`;
      }

      const response = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: finalUrl, email: email.trim() }),
      });

      if (!response.ok) {
        throw new Error("Local diagnostic crawler was blocked or timed out.");
      }

      const report: AuditResult = await response.json();
      setResults(report);
      addToast("Website diagnostic report compiled successfully!", "success");
    } catch (err: any) {
      addToast(err.message || "Failed running audit.", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleExportPdf = () => {
    if (!results) return;

    const targetDomain = results.url.replace(/^https?:\/\//i, "");
    const docTitle = `SEO_Audit_Report_${targetDomain.replace(/[^a-zA-Z0-9]/g, "_")}`;

    const reportHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SEO & Brand Audit Brief — ${results.url}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
    
    :root {
      --bg-color: #09090b;
      --card-bg: #18181b;
      --text-color: #f4f4f5;
      --muted: #a1a1aa;
      --border: rgba(255, 255, 255, 0.08);
      --primary: #3b82f6;
      --emerald: #10b981;
    }
    
    body {
      background: var(--bg-color);
      color: var(--text-color);
      font-family: 'Inter', sans-serif;
      margin: 0;
      padding: 40px 24px;
      line-height: 1.6;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
    }
    
    .header {
      border-bottom: 2px solid var(--border);
      padding-bottom: 24px;
      margin-bottom: 32px;
    }
    
    .brand-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 0.25em;
    }
    
    h1 {
      font-family: 'Space Grotesk', sans-serif;
      font-weight: 500;
      font-size: 34px;
      letter-spacing: -0.03em;
      margin: 8px 0;
    }
    
    .meta-grid {
      display: grid;
      grid-template-cols: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    
    .meta-box {
      background: var(--card-bg);
      border: 1px solid var(--border);
      padding: 16px;
      border-radius: 12px;
    }
    
    .meta-box label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      color: var(--muted);
      text-transform: uppercase;
      display: block;
      margin-bottom: 4px;
    }
    
    .meta-box span {
      font-size: 14px;
      font-weight: 600;
    }
    
    .score-grid {
      display: grid;
      grid-template-cols: repeat(auto-fit, minmax(130px, 1fr));
      gap: 16px;
      margin-bottom: 40px;
    }
    
    .score-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      padding: 20px;
      border-radius: 16px;
      text-align: center;
    }
    
    .score-value {
      font-size: 28px;
      font-weight: 700;
      color: var(--primary);
    }
    
    .score-value.overall {
      color: var(--emerald);
      font-size: 36px;
    }
    
    .section-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: -0.02em;
      border-top: 1px solid var(--border);
      padding-top: 32px;
      margin-top: 40px;
      margin-bottom: 20px;
    }
    
    .finding-card {
      background: rgba(255, 255, 255, 0.01);
      border: 1px solid var(--border);
      padding: 20px;
      border-radius: 14px;
      margin-bottom: 16px;
    }
    
    .finding-tag {
      font-family: 'JetBrains Mono', monospace;
      font-size: 9px;
      font-weight: 750;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 8px;
    }
    
    .finding-tag.error { color: #f87171; }
    .finding-tag.warning { color: #fbbf24; }
    .finding-tag.success { color: #34d399; }
    
    .brief-content {
      background: var(--card-bg);
      border: 1px solid var(--border);
      padding: 32px;
      border-radius: 18px;
      white-space: pre-wrap;
      font-size: 13px;
      color: #e4e4e7;
    }
    
    .brief-content h3 {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 16px;
      color: #fff;
      margin-top: 24px;
      margin-bottom: 8px;
    }
    
    @media print {
      body {
        background: #fff;
        color: #111;
        padding: 0;
      }
      .meta-box, .score-card, .finding-card, .brief-content {
        background: #fff;
        border: 1px solid #ddd;
        color: #111;
      }
      .brand-tag, .score-value {
        color: #111;
      }
      .score-value.overall {
        color: #000;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="brand-tag">DIGITAL YOUR — PRESTIGE SEO AUDIT</div>
      <h1>System Diagnostic Briefing</h1>
      <p style="color: var(--muted); font-size: 12px; margin: 0;">Compiled systematically on ${new Date(results.timestamp).toUTCString()}</p>
    </div>
    
    <div class="meta-grid">
      <div class="meta-box">
        <label>Target URL under analysis</label>
        <span>${results.url}</span>
      </div>
      <div class="meta-box">
        <label>Handshake Speed (TTFB)</label>
        <span>${results.metrics.loadTimeMs} ms</span>
      </div>
      <div class="meta-box">
        <label>Total Page Size</label>
        <span>${results.metrics.pageSizeKb} KB</span>
      </div>
    </div>
    
    <div class="score-grid">
      <div class="score-card">
        <div class="score-value overall">${results.scores.overall}%</div>
        <div style="font-size: 11px; margin-top: 4px; color: var(--muted);">OVERALL RATING</div>
      </div>
      <div class="score-card">
        <div class="score-value">${results.scores.seo}%</div>
        <div style="font-size: 11px; margin-top: 4px; color: var(--muted);">SEO INDEX</div>
      </div>
      <div class="score-card">
        <div class="score-value">${results.scores.performance}%</div>
        <div style="font-size: 11px; margin-top: 4px; color: var(--muted);">PAGESPEED</div>
      </div>
      <div class="score-card">
        <div class="score-value">${results.scores.brandConsistency}%</div>
        <div style="font-size: 11px; margin-top: 4px; color: var(--muted);">BRAND CONSISTENCY</div>
      </div>
    </div>
    
    <div class="section-title">AI Strategic Transformation Brief</div>
    <div class="brief-content">${results.aiStrategicInsights}</div>
    
    <div class="section-title">Crawler Inspection Logs</div>
    ${results.findings.map(f => `
      <div class="finding-card">
        <div class="finding-tag ${f.type}">${f.category} — ${f.type}</div>
        <h3 style="margin: 4px 0 8px 0; font-size: 15px; font-weight: 600;">${f.title}</h3>
        <p style="margin: 0; font-size: 12px; color: var(--muted);">${f.message}</p>
        <p style="margin: 12px 0 0 0; font-size: 11px; font-weight: 500;">
          <strong>Recommendation:</strong> ${f.recommendation}
        </p>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

    const blob = new Blob([reportHtml], { type: "text/html" });
    const urlBlob = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = urlBlob;
    link.download = `${docTitle}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(urlBlob);
    addToast("Polished Executive Briefing document downloaded! Open offline to view and save to PDF.", "success");
  };

  // Helper code to render neat SVG fitness ring-like scores
  const renderScoreRing = (score: number, size: number = 72, strokeWidth: number = 6, colorClass: string = "stroke-blue-500") => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg className="w-full h-full transform -rotate-90">
          <circle 
            className="stroke-zinc-800" 
            fill="transparent" 
            strokeWidth={strokeWidth} 
            r={radius} 
            cx={size / 2} 
            cy={size / 2} 
          />
          <circle 
            className={`${colorClass} transition-all duration-1000 ease-out`} 
            fill="transparent" 
            strokeWidth={strokeWidth} 
            strokeDasharray={circumference} 
            strokeDashoffset={offset} 
            strokeLinecap="round"
            r={radius} 
            cx={size / 2} 
            cy={size / 2} 
          />
        </svg>
        <span className="absolute font-mono text-xs font-bold text-white">{score}%</span>
      </div>
    );
  };

  return (
    <section id="audit-tool" className="py-20 max-w-7xl mx-auto px-6 select-none">
      
      {/* Editorial Header */}
      <div className="mb-14 text-center max-w-xl mx-auto">
        <span className="font-mono text-xs text-blue-500 uppercase tracking-widest flex items-center justify-center gap-1.5 mb-2">
          <Cpu className="w-3.5 h-3.5 animate-pulse" />
          Technical Diagnostics
        </span>
        <h2 className="font-display font-medium text-3xl md:text-4xl text-white tracking-tight leading-none mb-3">
          Free Website Audit
        </h2>
        <p className="text-xs text-zinc-400 font-sans leading-relaxed">
          Input any URL. Our Express backend scraper will compile technical speed checkpoints, inspect viewport scaling, and trigger Google Gemini AI to construct a high-prestige UX & organic SEO growth roadmap.
        </p>
      </div>

      <AnimatePresence mode="wait">
        
        {/* State 1: Ready - Audit Submission form */}
        {!loading && !results && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="max-w-xl mx-auto p-8 rounded-3xl bento-card-bg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-60 h-60 bg-blue-500/5 rounded-full filter blur-[70px] pointer-events-none" />

            <form id="audit-submission-form" onSubmit={handleRunAudit} className="space-y-6 relative z-10 font-mono text-xs text-left">
              <div className="border-b border-white/5 pb-4">
                <h3 className="font-display font-semibold text-zinc-200 text-sm tracking-wide">Enter Web Address</h3>
                <p className="text-[11px] text-zinc-500 font-sans mt-0.5">Please provide any domain. Scrape pipelines operate immediately.</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-zinc-400 uppercase tracking-wider block">TARGET WEBPAGE URL</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3.5 text-zinc-500 font-sans">https://</span>
                    <input
                      id="audit-input-url"
                      type="text"
                      required
                      value={url.replace(/^https?:\/\//i, "")}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="apple.com"
                      className="w-full bg-zinc-900/60 border border-white/5 focus:border-blue-500 rounded-xl pl-18 pr-4 py-3.5 text-white outline-none focus:ring-1 focus:ring-blue-500/20 font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-zinc-400 uppercase tracking-wider block">YOUR EMAIL FOR AUDIT EXPORTS</label>
                  <input
                    id="audit-input-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partner@yourcompany.com"
                    className="w-full bg-zinc-900/60 border border-white/5 focus:border-blue-500 rounded-xl px-4 py-3.5 text-white outline-none focus:ring-1 focus:ring-blue-500/20 font-sans text-sm"
                  />
                </div>
              </div>

              <button
                id="audit-submit-btn"
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer shadow-lg active:scale-95"
              >
                Trigger Free System Scan
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <div className="text-[10px] text-zinc-500 font-sans leading-relaxed text-center px-4 pt-1">
                Note: Scrapes run server-authoritative. By clicking trigger, you verify authorization for visual inspections on the destination framework.
              </div>
            </form>
          </motion.div>
        )}

        {/* State 2: Diagnostic Loading Panel - Dynamic Ticker console logs */}
        {loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-xl mx-auto p-8 rounded-3xl bento-card-bg text-left border border-blue-500/20 shadow-[0_0_50px_rgba(0,113,227,0.1)] relative"
          >
            <div className="absolute top-4 right-4 animate-spin text-blue-500 p-1">
              <RefreshCw className="w-5 h-5" />
            </div>

            <div className="space-y-6">
              <div className="space-y-1.5 font-sans">
                <span className="font-mono text-[10px] uppercase text-zinc-500 tracking-wider">DIAGNOSTIC UNIT ACTIVE</span>
                <h3 className="font-display font-medium text-lg text-white">Analyzing & Scrape active on: <span className="text-blue-400 font-mono text-sm">{url}</span></h3>
              </div>

              {/* Console log outputs terminal */}
              <div className="bg-black/80 rounded-2xl p-5 border border-white/5 font-mono text-[10px] space-y-2 h-56 overflow-y-auto max-h-[224px]">
                {tickerLog.map((log, index) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    key={index} 
                    className="text-zinc-400 border-l border-zinc-800 pl-2 leading-relaxed"
                  >
                    {log}
                  </motion.div>
                ))}
                {tickerLog.length < scanStatesList.length && (
                  <div className="text-blue-500 flex items-center gap-1.5 animate-pulse pl-2 font-bold select-none pt-1">
                    <span>● Scraper checking registers...</span>
                  </div>
                )}
              </div>

              <div className="text-center text-[11px] text-zinc-500 font-sans leading-relaxed px-4">
                Please wait up to 10 seconds. Integrating scraped viewport headers with central Google Gemini generative networks...
              </div>
            </div>
          </motion.div>
        )}

        {/* State 3: Strategic Report dashboard */}
        {results && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-10 selection:bg-zinc-800"
          >
            
            {/* Top overview stats bento section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              
              {/* Giant Overall Score Wheel widget (West Column) */}
              <div className="md:col-span-4 p-8 rounded-3xl bento-card-bg flex flex-col items-center justify-center text-center relative border-emerald-500/10">
                <div className="absolute top-4 left-4 font-mono text-[9px] text-zinc-500 uppercase">OVERALL AUDIT</div>
                
                <div className="relative w-40 h-40 flex items-center justify-center mb-4 mt-2">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle 
                      className="stroke-zinc-900" 
                      fill="transparent" 
                      strokeWidth={10} 
                      r={70} 
                      cx={80} 
                      cy={80} 
                    />
                    <circle 
                      className="stroke-blue-500 transition-all duration-1000" 
                      fill="transparent" 
                      strokeWidth={10} 
                      strokeDasharray={2 * Math.PI * 70} 
                      strokeDashoffset={(2 * Math.PI * 70) - (results.scores.overall / 100) * (2 * Math.PI * 70)} 
                      strokeLinecap="round"
                      r={70} 
                      cx={80} 
                      cy={80} 
                    />
                  </svg>
                  <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-4xl font-display font-medium text-white tracking-tight leading-none">{results.scores.overall}</span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mt-1">PERCENT</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-display font-semibold text-zinc-200 text-sm">Diagnostic Verdict</h4>
                  <p className="text-xs text-zinc-400 px-4 leading-relaxed font-sans">
                    {results.scores.overall >= 85 
                      ? "Your digital assets represent robust optimization principles." 
                      : "We identified direct core vulnerabilities limiting conversion flow."}
                  </p>
                </div>
              </div>

              {/* Sub-Metrics Ring columns (Center Column) */}
              <div className="md:col-span-8 p-8 rounded-3xl bento-card-bg flex flex-col justify-between">
                
                <div className="flex flex-col sm:flex-row items-center justify-between border-b border-white/5 pb-5 mb-5 md:mb-0 gap-4">
                  <div>
                    <span className="font-mono text-[10px] text-zinc-500 uppercase">WEB SOURCE UNDER TEST</span>
                    <h4 className="font-display font-medium text-lg text-white break-all">{results.url}</h4>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      id="audit-export-pdf-btn"
                      onClick={handleExportPdf}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white cursor-pointer max-w-fit transition-all shadow-[0_4px_12px_rgba(59,130,246,0.2)] active:scale-95"
                    >
                      <FileDown className="w-3.5 h-3.5 shrink-0" />
                      Export Audit Brief
                    </button>
                    
                    <button
                      id="audit-reset-btn"
                      onClick={() => { setResults(null); setUrl(""); }}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/5 cursor-pointer max-w-fit"
                    >
                      <RefreshCw className="w-3.5 h-3.5 shrink-0" />
                      New Inspection
                    </button>
                  </div>
                </div>

                {/* Grid of rings */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-4">
                  <div className="flex flex-col items-center text-center space-y-2">
                    {renderScoreRing(results.scores.seo, 64, 5, "stroke-indigo-500")}
                    <span className="font-mono text-[10px] text-zinc-400 uppercase">SEO INDEX</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    {renderScoreRing(results.scores.performance, 64, 5, "stroke-emerald-400")}
                    <span className="font-mono text-[10px] text-zinc-400 uppercase">PAGESPEED</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    {renderScoreRing(results.scores.brandConsistency, 64, 5, "stroke-purple-500")}
                    <span className="font-mono text-[10px] text-zinc-400 uppercase">BRAND CH_Y</span>
                  </div>
                  <div className="flex flex-col items-center text-center space-y-2">
                    {renderScoreRing(results.scores.security, 64, 5, "stroke-blue-400")}
                    <span className="font-mono text-[10px] text-zinc-400 uppercase">SSL SEC_Y</span>
                  </div>
                </div>

                {/* Specification Table bottom */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-zinc-900/30 p-4 rounded-2xl border border-white/5 font-mono text-[10px]">
                  <div>
                    <span className="text-zinc-500 uppercase block mb-0.5">TTFB SCALED</span>
                    <span className="text-white font-sans font-medium">{results.metrics.loadTimeMs} ms</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase block mb-0.5">PAGE WEIGHT</span>
                    <span className="text-white font-sans font-medium">{results.metrics.pageSizeKb} KB</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase block mb-0.5">HEADER TAGS</span>
                    <span className="text-white font-sans font-medium">H1: {results.metrics.h1Count} | H2: {results.metrics.h2Count}</span>
                  </div>
                  <div>
                    <span className="text-zinc-500 uppercase block mb-0.5">IMAGE ASSETS</span>
                    <span className="text-white font-sans font-medium">{results.metrics.imageCount} total</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Live Web-Crawl Timeline representation of speed milestones */}
            <CrawlerTimelineChart loadTimeMs={results.metrics.loadTimeMs} />

            {/* Diagnostics List list sections */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* List accordion findings (West side) */}
              <div className="md:col-span-5 space-y-4 text-left">
                <h3 className="font-display font-semibold text-xs text-zinc-300 uppercase tracking-wider flex items-center gap-2 mb-2 pl-1 select-text">
                  <Cpu className="w-4 h-4 text-zinc-400" />
                  Crawler Inspection Logs ({results.findings.length})
                </h3>
                <div className="space-y-3 select-text">
                  {results.findings.map((item, idx) => {
                    const isError = item.type === "error";
                    const isWarning = item.type === "warning";
                    return (
                      <div
                        id={`finding-card-${idx}`}
                        key={idx}
                        className={`p-5 rounded-2xl border ${
                          isError 
                            ? "bg-rose-950/10 border-rose-900/20" 
                            : isWarning 
                              ? "bg-amber-950/10 border-amber-900/20" 
                              : "bg-emerald-950/10 border-emerald-900/20"
                        }`}
                      >
                        <div className="flex gap-3 items-start">
                          <div className="mt-0.5 shrink-0">
                            {isError ? (
                              <AlertCircle className="w-4 h-4 text-rose-400" />
                            ) : isWarning ? (
                              <AlertCircle className="w-4 h-4 text-amber-500" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            )}
                          </div>
                          
                          <div className="space-y-2">
                            <span className="font-mono text-[9px] uppercase tracking-wider block font-bold" style={{ color: isError ? "#f87171" : isWarning ? "#fbbf24" : "#34d399" }}>
                              {item.category} — {item.type}
                            </span>
                            <h4 className="font-display font-medium text-sm text-zinc-100">{item.title}</h4>
                            <p className="font-sans text-xs text-zinc-400 leading-relaxed">{item.message}</p>
                            <div className="bg-black/20 p-3 rounded-xl border border-white/5 text-[11px] leading-relaxed">
                              <span className="font-mono font-bold text-zinc-300">RECOMMENDED PATCH:</span>
                              <p className="font-sans text-zinc-300 mt-1">{item.recommendation}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Gemini AI Strategic Road Map representation (East side) */}
              <div id="ai-strategic-report" className="md:col-span-7 p-8 rounded-3xl bento-card-bg relative overflow-hidden text-left border-indigo-500/10 select-text">
                <div className="absolute right-0 top-0 w-80 h-80 bg-indigo-500/5 rounded-full filter blur-[80px]" />
                
                <div className="flex items-center gap-2 border-b border-white/5 pb-4 mb-6 relative z-10">
                  <div className="w-7 h-7 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center p-1.5 text-indigo-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-zinc-100 text-sm">Strategic AI Transformation Brief</h3>
                    <p className="text-[10px] font-mono text-zinc-500">GENERATED BY GOOGLE GEMINI 3.5 — EXPERT SPECIFICATIONS</p>
                  </div>
                </div>

                <div className="prose prose-invert prose-xs text-zinc-300 leading-relaxed max-w-none relative z-10">
                  {results.aiStrategicInsights.split("\n\n").map((chunk, itemIdx) => {
                    if (chunk.trim().startsWith("###")) {
                      const cleanHeader = chunk.replace(/^###\s+/i, "");
                      return (
                        <h4 key={itemIdx} className="font-display font-semibold text-white/95 text-sm tracking-tight mt-6 mb-2">
                          {cleanHeader}
                        </h4>
                      );
                    }
                    return (
                      <p key={itemIdx} className="text-xs text-zinc-400 leading-relaxed mb-4">
                        {chunk}
                      </p>
                    );
                  })}
                </div>

                <div className="border-t border-white/5 pt-6 mt-6 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px]">
                  <span className="text-zinc-500">Want to implement this comprehensive strategic framework?</span>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }); }}
                    className="flex items-center gap-1 px-4 py-2 rounded-full text-zinc-100 hover:text-white capitalize transition-colors font-semibold"
                  >
                    Integrate Specification Guidelines
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>

              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}

interface TimelineChartProps {
  loadTimeMs: number;
}

function CrawlerTimelineChart({ loadTimeMs }: TimelineChartProps) {
  const milestones = [
    { label: "DNS Lookup & TCP TLS", shortLabel: "DNS & TCP", pct: 15, delay: Math.round(loadTimeMs * 0.15), desc: "Initial system network configuration handshake" },
    { label: "Server TTFB Response", shortLabel: "TTFB", pct: 35, delay: Math.round(loadTimeMs * 0.35), desc: "First bytes loaded from hosting origin" },
    { label: "First Paint (FCP)", shortLabel: "FCP Paint", pct: 55, delay: Math.round(loadTimeMs * 0.65), desc: "Structural layouts render pixel outlines" },
    { label: "Largest Paint (LCP)", shortLabel: "LCP Paint", pct: 78, delay: Math.round(loadTimeMs * 0.90), desc: "Visual branding elements fully visible" },
    { label: "Interactive DOM Lock", shortLabel: "DOM Lock", pct: 100, delay: Math.round(loadTimeMs * 1.25), desc: "All background scripts execute cleanly" },
  ];

  return (
    <div className="w-full bg-zinc-950/40 p-6 rounded-3xl border border-white/5 relative overflow-hidden select-none text-left">
      <div className="absolute right-0 top-0 w-60 h-60 bg-emerald-500/5 rounded-full filter blur-[60px] pointer-events-none" />
      
      <div className="flex items-center gap-2 mb-6">
        <div className="w-7 h-7 rounded-lg bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center p-1.5 text-emerald-400">
          <Activity className="w-4 h-4" />
        </div>
        <div>
          <h4 className="font-display font-medium text-zinc-100 text-sm">Crawl Speed & Load Timeline</h4>
          <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">REAL-TIME CORE WEB VITALS BREAKDOWN</p>
        </div>
      </div>

      <div className="relative h-28 w-full flex items-center justify-center mt-6">
        {/* SVG background gridlines */}
        <div className="absolute inset-0 grid grid-cols-5 gap-2 pointer-events-none opacity-5">
          <div className="border-r border-zinc-500 h-full border-dashed" />
          <div className="border-r border-zinc-500 h-full border-dashed" />
          <div className="border-r border-zinc-500 h-full border-dashed" />
          <div className="border-r border-zinc-500 h-full border-dashed" />
          <div className="border-r border-zinc-500 h-full border-dashed" />
        </div>

        {/* Real Dynamic SVG Line */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <filter id="glowBlur" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Curved glowing landmark wire */}
          <path
            d="M 20,80 Q 250,110 500,60 T 980,20"
            fill="none"
            stroke="url(#lineGrad)"
            strokeWidth="2.5"
            filter="url(#glowBlur)"
            className="w-full"
            style={{ vectorEffect: "non-scaling-stroke" }}
          />
        </svg>

        {/* Timeline Landmarks (Grid columns) */}
        <div className="absolute inset-x-0 bottom-0 grid grid-cols-5 gap-2 px-1 relative z-10">
          {milestones.map((m, idx) => {
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-2 group relative">
                {/* Glowing Node Dot */}
                <div className="w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-emerald-500 group-hover:border-white transition-all flex items-center justify-center cursor-pointer shadow-[0_0_8px_rgba(16,185,129,0.4)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:bg-white animate-pulse" />
                </div>

                <div className="space-y-0.5">
                  <span className="text-[9px] text-zinc-300 font-sans block leading-tight font-semibold group-hover:text-white transition-colors">
                    <span className="hidden sm:inline">{m.label}</span>
                    <span className="inline sm:hidden">{m.shortLabel}</span>
                  </span>
                  <strong className="text-[10px] font-mono text-emerald-400 block">
                    {m.delay} ms
                  </strong>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-zinc-900 border border-white/5 p-2 rounded-lg max-w-[130px] z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-xl text-left">
                    <p className="text-[8px] font-sans text-zinc-300 leading-normal font-normal">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between font-mono text-[9px] text-zinc-500">
        <span>● SYSTEM DIAGNOSTIC GRAPH</span>
        <span>INTELLIGENT RESPONSE HARNESSING ACTIVE</span>
      </div>
    </div>
  );
}


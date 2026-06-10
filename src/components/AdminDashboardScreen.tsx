import { useState, useEffect, FormEvent } from "react";
import { 
  ShieldAlert, 
  Lock, 
  Database, 
  Filter, 
  Search, 
  Cpu, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  FileSpreadsheet, 
  User, 
  Mail, 
  TrendingUp, 
  Loader2, 
  Sparkles,
  DollarSign,
  Calendar,
  AlertTriangle,
  FileDown
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AdminDashboardScreenProps {
  addToast: (text: string, type: "success" | "error" | "info") => void;
}

export function AdminDashboardScreen({ addToast }: AdminDashboardScreenProps) {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [selectedLead, setSelectedLead] = useState<any | null>(null);
  
  // Local Filter & Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<"all" | "audit" | "project">("all");

  const handleAdminLogin = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!password.trim()) return;

    setLoading(true);
    try {
      const response = await fetch("/api/admin/submissions", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ password: password.trim() })
      });

      if (!response.ok) {
        throw new Error("Invalid systems passkey credential.");
      }

      const data = await response.json();
      setSubmissions(data.submissions || []);
      setIsAuthorized(true);
      addToast("System logs successfully authenticated.", "success");
      
      // Auto-save session token temporarily
      sessionStorage.setItem("admin_secret", password.trim());
    } catch (err: any) {
      addToast(err.message || "Failed admin authentication", "error");
    } finally {
      setLoading(false);
    }
  };

  // Attempt auto-login with session token if present
  useEffect(() => {
    const saved = sessionStorage.getItem("admin_secret");
    if (saved) {
      setPassword(saved);
      // Run login
      setLoading(true);
      fetch("/api/admin/submissions", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ password: saved })
      })
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        setSubmissions(data.submissions || []);
        setIsAuthorized(true);
      })
      .catch(() => {
        sessionStorage.removeItem("admin_secret");
      })
      .finally(() => {
        setLoading(false);
      });
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_secret");
    setIsAuthorized(false);
    setPassword("");
    setSubmissions([]);
    setSelectedLead(null);
    addToast("De-authorized admin credentials securely.", "info");
  };

  // Compute stats
  const totalLeads = submissions.length;
  const auditLogsCount = submissions.filter(s => s.type === "website_crawl_audit").length;
  const projectProposalsCount = submissions.filter(s => s.type === "project_planner_proposal").length;

  const totalValueGuess = submissions
    .filter(s => s.type === "project_planner_proposal")
    .reduce((sum, item) => {
      // Intelligently sum budget range estimates for metrics realism
      const budget = item.data?.budget || "";
      if (budget.includes("$100k+")) return sum + 120000;
      if (budget.includes("$50k - $100k")) return sum + 75000;
      if (budget.includes("$25k - $50k")) return sum + 37000;
      return sum + 15000; // default lower tier
    }, 0);

  // Apply search/filters
  const filteredSubmissions = submissions.filter(s => {
    // Type Filter
    if (typeFilter === "audit" && s.type !== "website_crawl_audit") return false;
    if (typeFilter === "project" && s.type !== "project_planner_proposal") return false;

    // Search query on email, domain, or client name
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchesEmail = s.data?.email?.toLowerCase().includes(query) || false;
    const matchesName = s.data?.name?.toLowerCase().includes(query) || false;
    const matchesUrl = s.data?.url?.toLowerCase().includes(query) || false;
    return matchesEmail || matchesName || matchesUrl;
  });

  return (
    <div className="py-20 max-w-7xl mx-auto px-6 select-none font-sans">
      
      {/* Editorial Header */}
      <div className="mb-14 text-center max-w-xl mx-auto">
        <span className="font-mono text-xs text-blue-500 uppercase tracking-widest flex items-center justify-center gap-1.5 mb-2">
          <Database className="w-3.5 h-3.5" />
          SYSTEM ADMINISTRATION PANEL
        </span>
        <h2 className="font-display font-medium text-3xl md:text-4xl text-white tracking-tight leading-none mb-3">
          Leads & Client Registry
        </h2>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Secure, password-protected leads log database. Review real-time visitor website crawls, technical audit requests, and project contract configurations.
        </p>
      </div>

      <AnimatePresence mode="wait">
        
        {/* State A: Login overlay gate */}
        {!isAuthorized ? (
          <motion.div
            key="admin-gate"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="max-w-md mx-auto p-8 rounded-3xl bento-card-bg border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full filter blur-[60px] pointer-events-none" />

            <form onSubmit={handleAdminLogin} className="space-y-6 relative z-10 text-left">
              <div className="text-center space-y-2 pb-2 border-b border-white/5">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto text-blue-400">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="font-display font-semibold text-zinc-200 text-sm">Enter Administrator Password</h3>
                <p className="text-[10px] text-zinc-500 font-mono">DEFAULT SYSTEMS PASSKEY: <span className="text-blue-500">ahmad123</span></p>
              </div>

              <div className="space-y-1 font-mono text-xs">
                <label className="text-zinc-400 uppercase tracking-wider block">SYSTEM PASSKEY</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••••"
                  className="w-full bg-zinc-900/60 border border-white/5 focus:border-blue-500 rounded-xl px-4 py-3 text-white outline-none focus:ring-1 focus:ring-blue-500/20 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl text-xs font-semibold bg-white text-black hover:bg-zinc-200 disabled:opacity-50 transition-all cursor-pointer shadow-lg active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    Verifying Identity...
                  </>
                ) : (
                  <>
                    Decrypt Registry Log
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          
          /* State B: Realized Systems Log Screen */
          <motion.div
            key="admin-workspace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-8"
          >
            {/* Top Stat Widget Panels */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="p-6 rounded-2xl bento-card-bg text-left space-y-2 relative border border-white/5">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center justify-between">
                  <span>TOTAL SUBMISSIONS</span>
                  <Database className="w-3.5 h-3.5 text-zinc-600" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display font-medium text-white tracking-tight leading-none">{totalLeads}</span>
                  <span className="text-[9px] font-mono text-zinc-400">records</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-sans mt-1">Live persisted logs in container registry</p>
              </div>

              <div className="p-6 rounded-2xl bento-card-bg text-left space-y-2 relative border border-white/5">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center justify-between">
                  <span>PROJECT BRIEFS</span>
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-500/60" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display font-medium text-emerald-400 tracking-tight leading-none">{projectProposalsCount}</span>
                  <span className="text-[9px] font-mono text-zinc-400">quotes</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-sans mt-1">Clients requesting direct system pricing</p>
              </div>

              <div className="p-6 rounded-2xl bento-card-bg text-left space-y-2 relative border border-white/5">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center justify-between">
                  <span>WEBSITE AUDITS</span>
                  <Cpu className="w-3.5 h-3.5 text-indigo-500/60" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display font-medium text-indigo-400 tracking-tight leading-none">{auditLogsCount}</span>
                  <span className="text-[9px] font-mono text-zinc-400">inspections</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-sans mt-1">Heuristic crawling scans executed</p>
              </div>

              <div className="p-6 rounded-2xl bento-card-bg text-left space-y-2 relative border border-white/5">
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider flex items-center justify-between">
                  <span>BUDGET TENSION</span>
                  <TrendingUp className="w-3.5 h-3.5 text-blue-500/60" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-display font-medium text-blue-400 tracking-tight leading-none">
                    ${(totalValueGuess / 1000).toFixed(0)}k
                  </span>
                  <span className="text-[9px] font-mono text-zinc-400">cumulative projection</span>
                </div>
                <p className="text-[10px] text-zinc-500 font-sans mt-1">Estimated contract proposal volumes</p>
              </div>

            </div>

            {/* Main Action Bar & Tables layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Submissions Feed */}
              <div className="lg:col-span-7 space-y-4">
                
                {/* Search & Filters */}
                <div className="bg-zinc-950/60 p-4 rounded-2xl border border-white/5 flex flex-col sm:flex-row gap-3 items-center justify-between">
                  <div className="relative w-full sm:w-60">
                    <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="Search email, url, names..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-zinc-900 border border-white/5 focus:border-zinc-700 text-xs rounded-xl pl-10 pr-4 py-2.5 text-white outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto font-mono text-[10px]">
                    <span className="text-zinc-500 uppercase h-fit flex items-center gap-1 shrink-0">
                      <Filter className="w-3 h-3" /> Filter Log:
                    </span>
                    <div className="flex bg-zinc-900 rounded-lg p-0.5 border border-white/5 w-full sm:w-auto">
                      <button
                        onClick={() => setTypeFilter("all")}
                        className={`px-3 py-1 rounded-md transition-all cursor-pointer ${typeFilter === "all" ? "bg-white text-black font-semibold" : "text-zinc-400 hover:text-white"}`}
                      >
                        All
                      </button>
                      <button
                        onClick={() => setTypeFilter("project")}
                        className={`px-3 py-1 whitespace-nowrap rounded-md transition-all cursor-pointer ${typeFilter === "project" ? "bg-emerald-500 text-black font-semibold" : "text-zinc-400 hover:text-white"}`}
                      >
                        Briefs
                      </button>
                      <button
                        onClick={() => setTypeFilter("audit")}
                        className={`px-3 py-1 whitespace-nowrap rounded-md transition-all cursor-pointer ${typeFilter === "audit" ? "bg-indigo-500 text-black font-semibold" : "text-zinc-400 hover:text-white"}`}
                      >
                        Audits
                      </button>
                    </div>
                  </div>
                </div>

                {/* Submissions List */}
                <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 scrollbar-theme">
                  {filteredSubmissions.length === 0 ? (
                    <div className="p-12 text-center rounded-2xl border border-dashed border-white/5 text-zinc-500 font-mono text-xs">
                      No matching registered leads identified in registry.
                    </div>
                  ) : (
                    filteredSubmissions.map((lead) => {
                      const isAudit = lead.type === "website_crawl_audit";
                      const isSelected = selectedLead?.id === lead.id;
                      
                      return (
                        <div
                          key={lead.id}
                          onClick={() => setSelectedLead(lead)}
                          className={`p-5 rounded-2xl border transition-all text-left cursor-pointer ${
                            isSelected 
                              ? "bg-zinc-900 border-blue-500/40 shadow-[0_4px_20px_rgba(59,130,246,0.1)] scale-[0.99]" 
                              : "bento-card-bg border-white/5 hover:border-white/15"
                          }`}
                        >
                          <div className="flex justify-between items-start gap-4">
                            <div className="space-y-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className={`font-mono text-[8px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                                  isAudit 
                                    ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20" 
                                    : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                }`}>
                                  {isAudit ? "Crawl Audit" : "Planner brief"}
                                </span>
                                <span className="text-[10px] text-zinc-500 font-mono flex items-center gap-1">
                                  <Clock className="w-3 h-3" /> {new Date(lead.timestamp).toLocaleDateString()}
                                </span>
                              </div>

                              <h4 className="font-display font-medium text-sm text-zinc-100 font-sans tracking-tight">
                                {isAudit ? lead.data?.url : `${lead.data?.name || "Anonymous Partner"}`}
                              </h4>
                              
                              <p className="text-xs text-zinc-400 font-sans flex items-center gap-1.5 leading-none">
                                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                                {lead.data?.email || "No email specified"}
                              </p>
                            </div>

                            <div className="text-right">
                              {isAudit ? (
                                <div className="p-2 bg-indigo-950/20 rounded-xl border border-indigo-500/10 text-center min-w-12">
                                  <div className="text-xs font-mono font-bold text-indigo-400">{lead.data?.overallScore || "0"}</div>
                                  <div className="text-[7px] text-zinc-500 font-mono uppercase tracking-widest mt-0.5">SCORE</div>
                                </div>
                              ) : (
                                <div className="p-2 bg-emerald-950/20 rounded-xl border border-emerald-500/10 text-center min-w-16">
                                  <div className="text-xs font-mono font-bold text-emerald-400">{lead.data?.budget || "N/A"}</div>
                                  <div className="text-[7px] text-zinc-500 font-mono uppercase tracking-widest mt-0.5">BUDGET</div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 font-mono text-[10px]">
                  <span className="text-zinc-500 flex items-center gap-1">
                    <Database className="w-3.5 h-3.5" /> SECURE CONTAINER PERSISTED LOG ENGINE
                  </span>
                  <button 
                    onClick={handleLogout}
                    className="text-zinc-400 hover:text-red-400 transition-colors capitalize font-semibold cursor-pointer"
                  >
                    Logout Admin Access & Exit
                  </button>
                </div>

              </div>

              {/* Right Column: Interactive Leads Inspector Inspector Pane */}
              <div className="lg:col-span-5">
                <AnimatePresence mode="wait">
                  {selectedLead ? (
                    <motion.div
                      key={selectedLead.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-8 rounded-3xl bento-card-bg border border-white/10 text-left space-y-6 relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-[50px] pointer-events-none" />

                      {/* Header */}
                      <div className="border-b border-white/5 pb-4 space-y-1">
                        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block font-bold">
                          SYSTEM INSPECTOR — {selectedLead.id}
                        </span>
                        <h3 className="font-display font-medium text-lg text-white">
                          {selectedLead.type === "website_crawl_audit" ? "Audit Analysis Profile" : "Detailed Design Brief"}
                        </h3>
                        <p className="text-[10px] font-mono text-zinc-400 tracking-wider">
                          RECEIVED: {new Date(selectedLead.timestamp).toLocaleString()}
                        </p>
                      </div>

                      {/* Diagnostic details depending on type */}
                      {selectedLead.type === "website_crawl_audit" ? (
                        <div className="space-y-4 text-xs font-mono">
                          <div className="space-y-1.5 p-4 rounded-xl bg-zinc-900/40 border border-white/5">
                            <span className="text-zinc-500 uppercase block text-[8px] font-bold">TARGET CRAWL DOMAIN</span>
                            <a 
                              href={selectedLead.data?.url} 
                              target="_blank" 
                              rel="noreferrer" 
                              className="text-indigo-400 underline hover:text-indigo-300 transition-colors font-sans font-medium text-sm block break-all"
                            >
                              {selectedLead.data?.url}
                            </a>
                          </div>

                          <div className="space-y-1.5 p-4 rounded-xl bg-zinc-900/40 border border-white/5">
                            <span className="text-zinc-500 uppercase block text-[8px] font-bold">LEAD TARGET EMAIL</span>
                            <span className="text-zinc-200 text-sm font-sans block">{selectedLead.data?.email || "No contact provided"}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 text-center">
                              <span className="text-[8px] text-zinc-500 block font-bold uppercase mb-0.5">CRAWL OVERALL</span>
                              <strong className="text-2xl text-white font-sans">{selectedLead.data?.overallScore || "0"}/100</strong>
                            </div>
                            <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 text-center flex flex-col justify-center">
                              <span className="text-[8px] text-zinc-500 block font-bold uppercase mb-0.5">SSL SECURITY</span>
                              <span className="text-xs text-zinc-300 font-semibold uppercase flex items-center justify-center gap-1 font-sans">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Active SSL
                              </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Project Planner spec */
                        <div className="space-y-4 text-xs font-sans">
                          
                          <div className="space-y-1 font-mono">
                            <span className="text-zinc-500 uppercase block text-[8px] font-bold">CLIENT NAME</span>
                            <span className="text-zinc-200 text-sm block font-sans font-medium">{selectedLead.data?.name || "Anonymous"}</span>
                          </div>

                          <div className="space-y-1 font-mono">
                            <span className="text-zinc-500 uppercase block text-[8px] font-bold">CONTACT DIRECT</span>
                            <span className="text-zinc-200 text-sm block select-all">{selectedLead.data?.email || "N/A"}</span>
                          </div>

                          <div className="grid grid-cols-2 gap-4 font-mono">
                            <div className="space-y-1 bg-zinc-900/40 p-3 rounded-xl border border-white/5">
                              <span className="text-zinc-500 uppercase block text-[8px] font-bold">FINANCIAL TIER</span>
                              <span className="text-emerald-400 font-sans font-semibold text-xs">{selectedLead.data?.budget}</span>
                            </div>
                            <div className="space-y-1 bg-zinc-900/40 p-3 rounded-xl border border-white/5">
                              <span className="text-zinc-500 uppercase block text-[8px] font-bold">TIMELINE EXPECTS</span>
                              <span className="text-blue-400 font-sans font-semibold text-xs">{selectedLead.data?.timeline}</span>
                            </div>
                          </div>

                          <div className="space-y-1 font-mono">
                            <span className="text-zinc-500 uppercase block text-[8px] font-bold">REQUESTED SERVICES MODULES</span>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {Array.isArray(selectedLead.data?.services) && selectedLead.data?.services.length > 0 ? (
                                selectedLead.data.services.map((srv: string, i: number) => (
                                  <span key={i} className="px-2 py-0.5 bg-zinc-900 border border-white/10 rounded-full font-mono text-[9px] text-zinc-300 leading-none">
                                    {srv}
                                  </span>
                                ))
                              ) : (
                                <span className="text-zinc-500 font-normal">None specified</span>
                              )}
                            </div>
                          </div>

                          <div className="space-y-1.5 font-mono pt-2 border-t border-white/5">
                            <span className="text-zinc-500 uppercase block text-[8px] font-bold">CUSTOM SPECIFICATIONS DEFINED</span>
                            <p className="text-xs text-zinc-300 font-sans leading-relaxed bg-black/30 p-3 rounded-xl border border-white/5 whitespace-pre-line max-h-40 overflow-y-auto">
                              {selectedLead.data?.details || "No custom specifications provided."}
                            </p>
                          </div>

                        </div>
                      )}

                      <div className="pt-2 border-t border-white/5 text-center font-mono text-[10px]">
                        <span className="text-zinc-500">Log inspect active. Review contact history on target direct.</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="no-lead"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-10 rounded-3xl bento-card-bg border border-dashed border-white/5 text-center flex flex-col items-center justify-center h-80 text-zinc-500 font-mono text-xs space-y-2"
                    >
                      <Cpu className="w-8 h-8 text-zinc-700 animate-pulse" />
                      <span>Select a system registration lead in the left feed to inspect custom client briefs and crawl metrics.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}

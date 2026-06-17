import React, { useState } from "react";
import { IndustryPageData, IndustryPortfolioProject, INDUSTRIES } from "../industryData";
import { WebsiteAuditTool } from "./WebsiteAuditTool";
import { ProjectPlanner } from "./ProjectPlanner";
import { 
  ArrowRight, 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  Cpu, 
  Clock, 
  Briefcase, 
  X,
  Code,
  HelpCircle,
  TrendingUp,
  ShieldCheck,
  Target,
  DollarSign,
  Layers
} from "lucide-react";

// Professional 20-Year Copywriting Veteran Headlines Map
export const getIndustryPackages = (id: string) => {
  switch (id) {
    case "med-spa":
      return {
        headline: "Book +35% more aesthetic treatment patients in 60 days. Guaranteed.",
        subheadline: "No slow booking widgets, no lost appointments. Our custom handcoded pipelines capture local beauty traffic with sub-0.2s prestige speeds.",
        basic: {
          name: "Aesthetic Launchpad Blueprint",
          badge: "Aesthetic Core",
          fitFor: "Clinics looking to solidify their base digital patient experience.",
          focus: "Local citation foundation & Core sub-0.3s page loading efficiency.",
          features: [
            "Bespoke single-page React visual treatments flagship",
            "Core high-intent Botox & CoolSculpting semantic schema mapping",
            "Direct secure callback intake funnel with zero page refresh",
            "100/100 Core Web Vitals speed compile checklist",
            "Secure HTTPS server routing & automated nightly state backup"
          ]
        },
        middle: {
          name: "High-Prestige Patient Pipeline",
          badge: "Most Popular - Growth Vector",
          fitFor: "Aesthetic centers aiming for absolute dominance of premium suburbs.",
          focus: "Interactive treatment concern mapping, active localized Google Map Pack takeover, and rapid digital checklists.",
          features: [
            "Everything in Basic, plus full localized Search Engine Optimization conquest",
            "Interactive Visual Patient Treatment Map (concerns mapped to services)",
            "Automatic regional review citation push integrations",
            "Optimized Treatment Menu schemas specifying license & pricing arrays",
            "Enhanced mobile-touch gesture navigation with 0.15s page shifters"
          ]
        },
        premium: {
          name: "The Clinical Authority Flagship",
          badge: "Absolute Supremacy",
          fitFor: "Multi-location medical spas or elite cosmetic centers with active advertising.",
          focus: "Headless Stripe recurring membership modules, HIPAA-aligned booking logs, and VIP lead qualification algorithms.",
          features: [
            "Everything in Middle, plus custom headless reservation scheduler API",
            "Secure GLP-1 candidate pre-qualification screening assistant",
            "Custom treatment customizer allowing users to self-filter concerns",
            "Dedicated weekly site speed telemetry and search pack monitoring",
            "Direct Salesforce/Hubspot clinic CRM database synchronization triggers"
          ]
        }
      };
    case "property-mgmt":
      return {
        headline: "Unlock +25% higher monthly leasing yields in 45 days. Guaranteed.",
        subheadline: "Our instant-load vacancy syndicator replaces laggy third-party widgets with lightning-fast, high-converting interactive tours.",
        basic: {
          name: "Leasing Foothold Engine",
          badge: "Essential Reach",
          fitFor: "Independent landlords or boutique real estate portfolios.",
          focus: "Fast index listing schemas, clean responsive layout, and direct vacancy request pathways.",
          features: [
            "Core single-page property listing framework in modern React",
            "Dedicated ApartmentComplex and RealEstateAgent schema arrays",
            "Secure rental enquiry capture forms",
            "100/100 Mobile responsive performance compile",
            "Clean contact mapping showing proximity landmarks"
          ]
        },
        middle: {
          name: "Asset Yield Maximizer",
          badge: "High Velocity Choice",
          fitFor: "Multi-family complexes and active agencies searching for 95%+ occupancy.",
          focus: "Sub-second client-side property filters, map pack ranking, and fast digital pre-qualification.",
          features: [
            "Everything in Basic, plus live search grids (filter by description, beds, price)",
            "Integrated preliminary credit & background verification checklists",
            "Localized SEO campaign targeting premium corporate relocations",
            "Automatic review stream syncs directly on property details boards",
            "Dynamic leasing proposal draft generators for enterprise inquiries"
          ]
        },
        premium: {
          name: "Institutional Multi-Family Fleet",
          badge: "Portfolio Powerhouse",
          fitFor: "Major asset groups, developers, or institutional syndicates.",
          focus: "Headless property API syndication, tenant dispatch log alerts, and bespoke ticketing integrations.",
          features: [
            "Everything in Middle, plus advanced headless API property listings sync",
            "Optimized resident portal frontend enabling instant service requests",
            "Bespoke real-time unit availability scheduling integration",
            "Multi-location corporate tenant targeting landing pages",
            "Unified property performance telemetry dashboard logs"
          ]
        }
      };
    case "commercial-janitorial":
      return {
        headline: "Secure +40% more commercial cleaning contracts in 90 days. Guaranteed.",
        subheadline: "Pre-screen and close high-ticket facility contracts directly with custom, automated square-footage space pricing simulators.",
        basic: {
          name: "B2B Contract Starter",
          badge: "B2B Base",
          fitFor: "Regional cleaning contractors seeking higher digital authority.",
          focus: "High-level service citation indexing and B2B client trust elements.",
          features: [
            "Premium single-page B2B janitorial showcase",
            "Foundational office-park geo-targeted Search Engine Optimization schemas",
            "Secure commercial estimate request funnel",
            "Background-checked team credential showcase blocks",
            "Automated proposal PDF download pathways"
          ]
        },
        middle: {
          name: "Enterprise Conquest System",
          badge: "Most Popular",
          fitFor: "Mid-scale cleaning agencies looking to capture corporate medical & clinical suites.",
          focus: "Interactive facility space estimation, certified chemical/sterilization standards, and RFP bid tools.",
          features: [
            "Everything in Basic, plus dynamic Square Footage Facility Cost Calculator",
            "Dedicated high-compliance medical facility disinfection showcase",
            "Bespoke regional SEO campaign matching 'ISO sterilization contractor'",
            "Custom B2B proposal dashboard tracking active quotes locally",
            "Direct commercial client testimonial portal module"
          ]
        },
        premium: {
          name: "Metropolitan Janitorial Sovereign",
          badge: "Industry Sovereign",
          fitFor: "Large-scale operators bidding on multi-center government or commercial contracts.",
          focus: "Multi-location dispatch sync, real-time client feedback portals, and dedicated SLA trackers.",
          features: [
            "Everything in Middle, plus custom client SLA feedback backend channels",
            "Dynamic real-time technician scheduling webhook integration",
            "Dedicated executive facility manager VIP inquiry gate",
            "Advanced security-clearance compliance credential dashboards",
            "Continuous technical SEO indexing audit logs"
          ]
        }
      };
    case "solar-install":
      return {
        headline: "Generate +30% more pre-qualified solar projects in 60 days. Guaranteed.",
        subheadline: "Qualify homeownership and energy offsets before dispatching your team with rapid savings assessments.",
        basic: {
          name: "Homeowner Spark Package",
          badge: "Foundational",
          fitFor: "Boutique local solar installation teams.",
          focus: "Localized neighborhood maps pack indexing and simple quote validator.",
          features: [
            "High-contrast React energy-savings portfolio",
            "Neighborhood geo-targeted solar search citation mapping",
            "Direct customer savings callback pipeline",
            "Microinverter & Battery backup technology showcase panel",
            "Instant load-speed optimizations achieving sub-0.2s stats"
          ]
        },
        middle: {
          name: "Energy Savings Accelerator",
          badge: "Engineered Growth",
          fitFor: "Growing solar teams aiming for 25+ residential installs monthly.",
          focus: "Interactive rooftop solar payback estimators, pre-qualifying homeowner logic, and direct CRM webhooks.",
          features: [
            "Everything in Basic, plus dynamic homeowner Solar payback simulator",
            "Multi-stage pre-qualification form verifying home title & bills",
            "State-specific tax credit & solar rebate mathematical calculators",
            "Instant API callback relay routing hot leads straight to local reps",
            "Google Maps local citations integration with verified projects"
          ]
        },
        premium: {
          name: "Sovereign Green Power House",
          badge: "Dominion Elite",
          fitFor: "Enterprise energy developers in commercial or high-end residential solar.",
          focus: "Advanced satellite lookup APIs, deep CRM automated databases, and commercial energy offsets.",
          features: [
            "Everything in Middle, plus satellite shade simulation intake triggers",
            "Bespoke Salesforce / HubSpot CRM database synchronization pipeline",
            "Sovereign multi-megawatt commercial solar proposal generator",
            "Dynamic solar system design component visualizer",
            "Dedicated local search packet indexing and optimization check logs"
          ]
        }
      };
    case "senior-home-care":
      return {
        headline: "Secure +25% more private-duty home care family matches in 90 days. Guaranteed.",
        subheadline: "Build immediate family trust with highly readable, calm medical coordinate systems and certified companion matches.",
        basic: {
          name: "Compassionate Presence Core",
          badge: "Core Care",
          fitFor: "Local companion care agencies seeking to build a professional digital face.",
          focus: "Legibility-first styling, calm visual rhythm, and easy click-to-dial paths.",
          features: [
            "Clean single-page senior care presentation with high contrast text",
            "Primary local map citation listing schemas (HomeAndConstructionBusiness index)",
            "Direct secure family inquiry callback system",
            "Caregiver background certification showcase badges",
            "Sub-0.25s load speed maintaining elder user engagement"
          ]
        },
        middle: {
          name: "Family Trust Guardian",
          badge: "Most Popular",
          fitFor: "Accredited home health services looking for private-duty care dominance.",
          focus: "Interactive family care planners, individual caregiver profiles, and HIPAA-compliant consultation pipelines.",
          features: [
            "Everything in Basic, plus Interactive Care Level Planner Assessment",
            "Dynamic Caregiver profiles with rating cards & license details",
            "Soothing accessible font resizing controls and touch targets",
            "Specialized search engine campaigns targeting 'dementia home care'",
            "Encrypted inquiry routing ensuring complete family privacy"
          ]
        },
        premium: {
          name: "The Lifeline Elite Syndicate",
          badge: "Elite Authority",
          fitFor: "Large-scale healthcare groups, franchise networks, or private clinics.",
          focus: "Bespoke nursing match APIs, secure healthcare data streams, and active multi-location directories.",
          features: [
            "Everything in Middle, plus headless caregiver schedule match database",
            "Secure TLS encrypted patient intake forms mapping medical needs",
            "Dedicated family care plan review dashboard locally synced",
            "SLA assurance system guaranteeing response under 15 minutes",
            "Premium local search engine compliance monitoring"
          ]
        }
      };
    case "custom-pool":
      return {
        headline: "Book +30% custom gunite luxury resort pool builds in 90 days. Guaranteed.",
        subheadline: "Frame your architectural gunite and infinity designs in pristine high-contrast, lightning-fast digital portfolios.",
        basic: {
          name: "Backyard Vision Starter",
          badge: "Elite Launch",
          fitFor: "Boutique pool excavation firms establishing premium digital presence.",
          focus: "Local high-income suburb map placements and beautiful aesthetic layouts.",
          features: [
            "High-contrast premium dark portfolio layout showcase",
            "Specialized local pool builder semantic schemas (HomeAndConstructionBusiness)",
            "Direct backyard consultation scheduling request pipeline",
            "Exquisite details detailing custom coping, shells, and plumbing",
            "Instant load speeds for luxurious rendering feels"
          ]
        },
        middle: {
          name: "Oceanic Resort Planner",
          badge: "Master Builder",
          fitFor: "Established pool designers looking to close luxury backyard commissions.",
          focus: "Interactive pools cost and options customizer, premium bento galleries, and design triggers.",
          features: [
            "Everything in Basic, plus Interactive Custom Pool Budget Planner",
            "Premium bento grid showing coping choices, fire pits & lights",
            "Geo-SEO luxury search campaigns in elite local zip codes",
            "Verification credentials and structural warranty panel components",
            "High-end contact capture capturing site surveys & lot scales"
          ]
        },
        premium: {
          name: "The Watercrest Masterpiece Fleet",
          badge: "Prestige Sovereign",
          fitFor: "Master pool architects building $250K+ infinity resort landscapes.",
          focus: "Headless file ingestion portals, virtual CAD previews, and comprehensive site customizers.",
          features: [
            "Everything in Middle, plus advanced site survey drag-and-drop file uploader",
            "Custom designer layout with premium video/image cinematic frames",
            "Sovereign multi-property pool asset showcase pages",
            "Direct structural engineer and utility permit tracking integrations",
            "VIP expedited client consultation request router"
          ]
        }
      };
    case "commercial-security":
      return {
        headline: "Secure +35% more enterprise security integration contracts within 90 days. Guaranteed.",
        subheadline: "Prove technical compliance and enterprise surveillance SLA excellence directly to facility operations leaders.",
        basic: {
          name: "Secure Shield Foundation",
          badge: "Security Core",
          fitFor: "Commercial lock, gate, or basic CCTV installers.",
          focus: "Fast index list schemas and security compliance document access.",
          features: [
            "Technical high-performance security system showcase webpage",
            "Local commercial SEO listing schemas built for fast indexing",
            "Direct B2B system assessment request form",
            "Hardware manufacturer warranty & license matrices",
            "Security clearance and insurance credential check boards"
          ]
        },
        middle: {
          name: "Risk Mitigation Sovereign",
          badge: "Sovereign Tier",
          fitFor: "Enterprise security and electronic access control contractors.",
          focus: "Multi-point facility access mapping grids, badges templates, and localized corporate search packs.",
          features: [
            "Everything in Basic, plus Interactive Multi-Location CCTV planner",
            "Electronic access control badging and door system calculators",
            "Authority search campaign targeting SOC2 and ISO compliance phrases",
            "Dynamic SLA response times statistics trackers",
            "Precompiled equipment manifests for executive bids"
          ]
        },
        premium: {
          name: "The Ironclad Enterprise Network",
          badge: "Corporate Elite",
          fitFor: "Nationwide security integrators or critical infrastructure defenders.",
          focus: "Headless device telemetry portals, instant CAD security uploads, and high-security API routes.",
          features: [
            "Everything in Middle, plus advanced facility blueprint CAD uploader",
            "Secure B2B service dispatch API integration pipeline",
            "Real-time SLA resolution tracking dashboard locally synced",
            "Bespoke multi-state corporate headquarters proposal engine",
            "Direct enterprise ERP record generation webhook"
          ]
        }
      };
    case "mobile-iv":
      return {
        headline: "Book +45% more mobile IV party and group sessions in 30 days. Guaranteed.",
        subheadline: "Eliminate booking friction with one-tap location checkouts and interactive symptom customization grids.",
        basic: {
          name: "Dehydration Relief Starter",
          badge: "Instant Recovery",
          fitFor: "Independent mobile IV nurses starting a localized brand.",
          focus: "Local zipcode eligibility lookup and rapid 3-step checkout menu.",
          features: [
            "Lighter-than-air mobile-first patient booking interface",
            "Instant localized Zip Code coverage validator",
            "Direct IV cocktail benefits menu listing",
            "Tap-to-call mobile integration buttons",
            "Super-compiled assets for 0.1s mobile rendering"
          ]
        },
        middle: {
          name: "Wellness Surge Vector",
          badge: "Most Popular",
          fitFor: "Active mobile teams managing 3+ nurses in regional metros.",
          focus: "Interactive IV Cocktail Customizer, bachelor group scheduler panel, and localized medical map packs.",
          features: [
            "Everything in Basic, plus Interactive IV Drip Cocktail Builder",
            "Specialized group and post-party event scheduling portal",
            "High-intent local map SEO campaigns (targeting local events & party spots)",
            "Preoccupied nurse route availability estimators",
            "Automatic review citation stream highlighting rapid response times"
          ]
        },
        premium: {
          name: "Total Vitality Sovereign",
          badge: "Medical Empire",
          fitFor: "Multicity medical hydration centers, wellness franchises, or executive clinics.",
          focus: "Headless subscription recurring APIs, custom triage questionnaires, and instant team trackers.",
          features: [
            "Everything in Middle, plus custom membership recurring billing pipeline",
            "HIPAA-compliant pre-treatment medical triage questionnaire database",
            "Nurse telemetry logistics integration pathways",
            "Exclusive corporate health and wellness booking gates",
            "Weekly local Search Engine Optimization schema diagnostic tuning"
          ]
        }
      };
    case "epoxy-flooring":
      return {
        headline: "Secure +30% more commercial overlay and epoxy floor contracts in 60 days. Guaranteed.",
        subheadline: "Let floor managers and homeowners instantly preview custom protective flake finishes inside dynamic showrooms.",
        basic: {
          name: "Protective Foothold Starter",
          badge: "Essential Coat",
          fitFor: "Boutique epoxy flooring technicians building residential brands.",
          focus: "Localized search engine tags and direct garage evaluation schedulers.",
          features: [
            "Prestige single-page garage coating display page",
            "Highly detailed Local service citations mapping targeted suburbs",
            "Direct project estimation submission pipelines",
            "Epoxy protection metrics (tensile, compression) showcase",
            "Primes sub-0.2s speed parameters matching mobile browsers"
          ]
        },
        middle: {
          name: "Visual Showroom Dominator",
          badge: "Most Popular - Heavy Duty",
          fitFor: "Established floor coaters looking to qualify B2B & premium garage installs.",
          focus: "Interactive Flake Customizer preview, fast square-footage price calculators, and active warranties.",
          features: [
            "Everything in Basic, plus Interactive Flake & Solid Color visualizer",
            "Dynamic Bay Calculator estimating substrate prep volume",
            "Geo-SEO campaign targeting premium home garages",
            "Interactive warranty & durability check component blocks",
            "Post-cure client evaluation and progress record dashboards"
          ]
        },
        premium: {
          name: "The Industrial Armor Syndicate",
          badge: "Industrial Ruler",
          fitFor: "Major concrete styling firms bidding on manufacturing and aerospace cleanrooms.",
          focus: "Substrate heavy-loading specifiers, B2B RFP proposal engines, and multi-location management links.",
          features: [
            "Everything in Middle, plus industrial heavy-duty chemical rating customizers",
            "Dynamic concrete moisture mitigation estimator",
            "B2B custom RFP checklist generator outputting professional specs",
            "Direct sales team dispatch and dispatcher notifications API",
            "Premium search packet mapping logs for priority local listing pack"
          ]
        }
      };
    case "weight-loss-clinic":
      return {
        headline: "Onboard +40% more private-pay weight loss patients in 90 days. Guaranteed.",
        subheadline: "Onboard medical patients seamlessly with an elegant, medically-compliant HIPAA eligibility screening portal.",
        basic: {
          name: "Clinical Gateway Starter",
          badge: "Core Intake",
          fitFor: "Aesthetic physicians and weight consult services starting out.",
          focus: "Local medical directories citation schemas and HIPAA-friendly consultation forms.",
          features: [
            "Professional clinical treatment overview and medical layout page",
            "Primary local citation SEO tags detailing physician licenses",
            "Direct HIPAA-friendly patient callback query capture",
            "Medical safety, boards certification, and credential blocks",
            "Optimum compile speeds of sub-0.22s to minimize search bounce"
          ]
        },
        middle: {
          name: "Board-Certified Patient Funnel",
          badge: "Clinical Standard",
          fitFor: "Medical weight loss clinics scaling active Semaglutide/GLP-1 cohorts.",
          focus: "Interactive patient eligibility screenings, medical authority maps, and automated doctor bookings.",
          features: [
            "Everything in Basic, plus Dynamic Secure Patient Eligibility Screen",
            "Interactive BMI calorie & dosage calculator wizards",
            "Targeted weight loss search query campaigns in local regions",
            "Encrypted email router verifying candidate safety indexes",
            "Online review stream displaying real patient weight loss milestones"
          ]
        },
        premium: {
          name: "Metabolic Life Sovereign",
          badge: "Medical Dominion",
          fitFor: "Elite clinic syndicates, wellness franchises, or tele-health platforms.",
          focus: "Custom patient progress trackers, EHR backend integrations, and exclusive doctor-to-nurse dispatch portals.",
          features: [
            "Everything in Middle, plus headless patient weight tracking database",
            "Secure EHR database synchronization webhook relay setup",
            "Custom weekly support checkin portal for active patients",
            "Expedited board-certified doctor appointment router",
            "Dynamic geo-targeted medical landing frameworks for metropolitan networks"
          ]
        }
      };
    default:
      return {
        headline: "Secure +30% more high-ticket organic customer bookings in 90 days. Guaranteed.",
        subheadline: "Zero slow templates, zero sluggish frameworks. We forge high-performance, conversion-optimized flagships.",
        basic: {
          name: "Launchpad Core",
          badge: "Core",
          fitFor: "Growing local companies.",
          focus: "Sub-0.2s load speed and map pack foundations.",
          features: [
            "Handcoded single page flagship",
            "Foundational local schemas",
            "Direct customer inquiry funnels",
            "100/100 Core Web vitals performance"
          ]
        },
        middle: {
          name: "Dominator Package",
          badge: "Dominator",
          fitFor: "Aggressive market capture.",
          focus: "Interactive sliders, map search takeovers, and secure calculators.",
          features: [
            "Everything in Basic",
            "Dynamic customized estimators/tools",
            "Enhanced regional search campaigns",
            "Reviews sync components"
          ]
        },
        premium: {
          name: "Enterprise Sovereignty",
          badge: "Sovereign",
          fitFor: "Market leader conquest.",
          focus: "Headless database connections, CRM pipeline automations, and weekly indexing review logs.",
          features: [
            "Everything in Middle",
            "Custom REST backend connectors",
            "Dedicated client tracking analytics",
            "SLA assurance priority tracking"
          ]
        }
      };
  }
};

const getGoalOptions = (industryId: string) => {
  switch (industryId) {
    case "med-spa":
      return [
        "Capture premium Botox, CoolSculpting & laser aesthetic procedures",
        "Deploy a highly intuitive visual concerns map linked to treatments",
        "Dominate local search engine map clusters within wealthy regional ZIPs"
      ];
    case "property-mgmt":
      return [
        "Eradicate high vacancy rates at institutional speed",
        "Syndicate vacancies in real-time through an interactive layout grid",
        "Directly capture corporate-lease long-term resident applications"
      ];
    case "commercial-janitorial":
      return [
        "Secure lucrative corporate office or medical-park cleaning SLA contracts",
        "Launch an automated B2B space volume pricing calculator for prospects",
        "Acquire organic placement priority over third-party lead aggregator brokers"
      ];
    case "solar-install":
      return [
        "Pre-qualify homeowners automatically based on roofs, title & utility bills",
        "Embed an dynamic consumer solar offset dividend savings calculator",
        "Deliver verified homeowner coordinates directly to active field estimators"
      ];
    case "senior-home-care":
      return [
        "Build deep trust and emotional relief for private companion health care requests",
        "Deploy a secure, accessible interactive Care Level Planner utility for families",
        "Secure absolute local search pack dominance matching companionship/senior indices"
      ];
    case "custom-pool":
      return [
        "Deconstruct $100K+ backyard design pool projects into custom luxury blueprints",
        "Launch a premium dark cinematic bento gallery demonstrating masonry craft",
        "Secure pre-qualified backyard excavation consultation designs without manual delays"
      ];
    case "commercial-security":
      return [
        "Win enterprise electronic badges or security CCTV site integration bids",
        "Enable facility risk officers to visually layout security monitors on-screen",
        "Build absolute regulatory SOC2 and ISO compliance trust among corporate directors"
      ];
    case "mobile-iv":
      return [
        "Book lucrative bachelor party and active athletic team group hydration runs",
        "Integrate instant-load local zipcode validation checkers prior to checkout",
        "Highlight certified nursing credentials and dynamic cocktail benefit elements"
      ];
    case "epoxy-flooring":
      return [
        "Book high-yield industrial warehouse solid floors or protective coatings",
        "Deploy a visual solid & flake color customizer option directly on-screen",
        "Evaluate client bay parameters prior to sending estimators to sites"
      ];
    case "weight-loss-clinic":
      return [
        "Onboard Semaglutide, Tirzepatide & GLP-1 clinic candidates securely under HIPAA",
        "Fill doctors weekly consultation schedules automatically with custom intake wizards",
        "Dominate clinical weight management organic search circles over regional pharmacies"
      ];
    default:
      return [
        "Pre-qualify inbound organic conversion coordinates",
        "Substitute slow page theme frameworks with compilation speed of sub-0.2s",
        "Target elite high-intent clients through structured local metadata schemas"
      ];
  }
};

interface IndustryPageProps {
  industry: IndustryPageData;
  addToast: (text: string, type: "success" | "error" | "info") => void;
  onViewDeepDive: () => void;
  onContactNav: () => void;
}

export function IndustryPage({ industry, addToast, onViewDeepDive, onContactNav }: IndustryPageProps) {
  const [selectedProject, setSelectedProject] = useState<IndustryPortfolioProject | null>(null);

  // Elite 20-Year Copywriting Veteran Content Lookup
  const packagesConfig = getIndustryPackages(industry.id);

  // Questionnaire / Plan Recommendation Wizard State
  const [wizardStep, setWizardStep] = useState<number>(0);
  const [wizardAnswers, setWizardAnswers] = useState({
    objective: "",
    revenue: "",
    roadblock: "",
    radius: ""
  });
  const [wizardRecommendedTier, setWizardRecommendedTier] = useState<"basic" | "middle" | "premium" | null>(null);

  // Lead Contact Credentials State
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const goalOptionsCustom = getGoalOptions(industry.id);
  const revenueOptions = [
    "Emerging Scale (<$15k/mo)",
    "Established Growth ($15k - $50k/mo)",
    "High-Yield Enterprise ($50k - $150k/mo)",
    "Prestige Sovereign ($150k+/mo)"
  ];
  const roadblockOptions = [
    "High page bounce rates (Prospects exit slow-loading templates or blocky calendars)",
    "Invisible local search (Local competitors hog absolute map pack rankings)",
    "Low-quality leads (Sales teams waste expensive hours chasing unverified prospects)"
  ];
  const radiusOptions = [
    "Single localized neighborhood (5-10 mile radius)",
    "Entire city & suburban circle (15-25 mile radius)",
    "Multi-county regional sector takeover or national reach"
  ];

  const handleSelectWizardAnswer = (key: keyof typeof wizardAnswers, value: string) => {
    setWizardAnswers(prev => ({ ...prev, [key]: value }));
    const nextStep = wizardStep + 1;
    if (nextStep < 4) {
      setWizardStep(nextStep);
    } else {
      // Calculate Recommendations Tier
      // Business Logic matching:
      // High revenue ($150k+) or multi-county radius = Premium
      // Mid-scale or severe roadblocks with medium radius = Middle
      // Emerging is basic
      let computedTier: "basic" | "middle" | "premium" = "middle";
      
      const isHighRevenue = value === "Prestige Sovereign ($150k+/mo)" || wizardAnswers.revenue.includes("Enterprise") || wizardAnswers.revenue.includes("Prestige");
      const isLargeRadius = value.includes("Multi-county") || wizardAnswers.radius.includes("Multi-county");
      const isEmerging = wizardAnswers.revenue.includes("Emerging");

      if (isHighRevenue || isLargeRadius) {
        computedTier = "premium";
      } else if (isEmerging) {
        computedTier = "basic";
      } else {
        computedTier = "middle";
      }

      setWizardRecommendedTier(computedTier);
      setWizardStep(4);
    }
  };

  const handleResetWizard = () => {
    setWizardStep(0);
    setWizardAnswers({
      objective: "",
      revenue: "",
      roadblock: "",
      radius: ""
    });
    setWizardRecommendedTier(null);
  };

  const handleLockInPlan = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!wizardRecommendedTier) return;
    if (!clientName.trim() || !clientEmail.trim()) {
      addToast("Please fill in your name and email to proceed.", "error");
      return;
    }

    const tierName = wizardRecommendedTier === "basic" 
      ? packagesConfig.basic.name 
      : wizardRecommendedTier === "middle" 
        ? packagesConfig.middle.name 
        : packagesConfig.premium.name;

    try {
      // Log lead specs directly to local leads telemetry so the Admin Dashboard catches it instantly
      const localSubs = JSON.parse(localStorage.getItem("audit_submissions") || "[]");
      
      const customDescription = `Client computed a custom, high-ticket blueprint for their ${industry.name} business.

Suggested Tier: [${tierName.toUpperCase()}]

--- DETAILED RESPONSES ---
Desired Objective: ${wizardAnswers.objective}
Monthly Recurring Revenue: ${wizardAnswers.revenue}
Primary Acquisition Bottleneck: ${wizardAnswers.roadblock}
Designated Target Search Radius: ${wizardAnswers.radius}
Phone Contact: ${clientPhone || "Not provided"}

--- CUSTOM SPECIFICATIONS GENERATED ---
• Architecture: Custom static-rendered React engine using high-prestige system styles.
• Core Web Vitals: Fully micro-optimized with sub-0.2s contentful paints for elite localized user experience indices.
• Search Integration: Priority local suburbs map-pack takeover tailored for a ${wizardAnswers.radius} coverage sphere.
• Client Acquisition Funnel: Tailor-made pre-screening portal engineered to address the bottleneck regarding: "${wizardAnswers.roadblock}".`;

      localSubs.push({
        id: `SUB-PLAN-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        type: "project_planner_proposal", // maps perfectly to lead card UI in admin
        timestamp: new Date().toISOString(),
        data: {
          name: clientName.trim(),
          email: clientEmail.trim(),
          budget: `Suggested Plan: ${tierName}`,
          timeline: "Immediate Project Launch Required",
          services: [`${industry.name} Plan Configurator`, `Custom Plan Optimizer`],
          details: customDescription
        }
      });
      localStorage.setItem("audit_submissions", JSON.stringify(localSubs.slice(-40)));
      setShowSuccessModal(true);
      addToast("Custom high-ticket blueprint compiled & queued for direct outreach!", "success");
    } catch (err) {
      setShowSuccessModal(true);
      addToast("Blueprint successfully cataloged.", "success");
    }
  };

  return (
    <div id="industry-page-container" className="space-y-16 max-w-7xl mx-auto px-4 sm:px-6 py-10 select-none">      {/* 1. Psychological Outcome-Guaranteed Header / Hero */}
      <section id="industry-hero" className="relative text-center max-w-4xl mx-auto pt-8 pb-6 overflow-hidden">
        
        {/* Ambient glowing element backgrounds */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] bg-blue-500/10 rounded-full filter blur-[80px] pointer-events-none" />
        
        <div className="space-y-3 relative z-10 font-sans">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/50 text-[9px] uppercase font-mono text-blue-600 tracking-wider font-semibold">
            <Trophy className="w-3 h-3 text-blue-600" />
            Bespoke {industry.name} Digital Architecture Specifications
          </div>

          <h1 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-slate-900 tracking-tight leading-snug max-w-3xl mx-auto select-text">
            {packagesConfig.headline}
          </h1>

          <p className="text-xs sm:text-sm font-sans text-slate-500 leading-relaxed max-w-2xl mx-auto select-text">
            {packagesConfig.subheadline}
          </p>
        </div>
      </section>

      {/* 2. THREE ELITE PACKAGES SECTION - No pricing displayed, visually breath-taking styling */}
      <section id="industry-bespoke-packages" className="space-y-8 border-t border-slate-200/50 pt-10">
        <div className="text-center max-w-3xl mx-auto space-y-1.5">
          <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md font-bold">
            SPECIALIZED SERVICE CODES
          </span>
          <h2 className="text-lg sm:text-xl font-display font-bold text-slate-950 tracking-tight">
            Tailormade {industry.name} Growth Architectures
          </h2>
          <p className="text-xs text-slate-500 font-sans max-w-xl mx-auto leading-relaxed">
            Select the high-performance tier calibrated for your commercial goals. To sustain pristine 0.2s speeds, we limit intake to three active clients per sector per quarter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto font-sans">
          
          {/* Package A: Basic */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 relative group overflow-hidden">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest bg-slate-100 px-2.5 py-0.5 rounded-full font-bold">
                  {packagesConfig.basic.badge}
                </span>
                <Sparkles className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
              </div>

              <div className="space-y-1 text-left">
                <h3 className="font-display font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                  {packagesConfig.basic.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium">No Retainers Needed • Zero Template Code</p>
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-2 text-left">
                <div className="inline-flex items-center gap-1 font-mono text-[8px] text-blue-600 uppercase tracking-wider bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded font-bold">
                  🎯 RECOMMENDED FOR:
                </div>
                <p className="text-xs text-slate-800 font-bold leading-relaxed bg-slate-100 p-2 rounded-xl border border-slate-100">
                  {packagesConfig.basic.fitFor}
                </p>
              </div>

              <div className="space-y-1.5 text-left bg-slate-50 p-3.5 rounded-xl border border-slate-200/50">
                <span className="font-mono text-[8px] text-slate-400 uppercase font-semibold">TIER FOCUS TARGET</span>
                <p className="text-xs text-slate-700 leading-relaxed font-mono">
                  {packagesConfig.basic.focus}
                </p>
              </div>

              <div className="space-y-3 pt-2 text-left">
                <span className="font-mono text-[8px] text-slate-400 uppercase font-bold tracking-wider block">INCLUDED ARCHITECTURE</span>
                <ul className="space-y-2.5">
                  {packagesConfig.basic.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onContactNav}
                className="w-full py-3 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                Inquire For This Tier
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Package B: Middle - Most Popular */}
          <div className="bg-white border-2 border-blue-600 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-blue-50/50 relative overflow-hidden ring-4 ring-blue-500/5">
            <div className="absolute top-0 right-0 bg-blue-600 text-white font-mono text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-bl-2xl">
              {packagesConfig.middle.badge}
            </div>

            <div className="space-y-6">
              <div className="pt-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>

              <div className="space-y-1 text-left">
                <h3 className="font-display font-bold text-slate-900 text-xl font-bold">
                  {packagesConfig.middle.name}
                </h3>
                <p className="text-xs text-blue-600 font-semibold">Compounding Regional Conquest Engine</p>
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-2 text-left">
                <div className="inline-flex items-center gap-1 font-mono text-[8px] text-blue-600 uppercase tracking-wider bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded font-bold">
                  🎯 RECOMMENDED FOR:
                </div>
                <p className="text-xs text-slate-900 font-bold leading-relaxed bg-blue-50 p-2 rounded-xl border border-blue-100/50">
                  {packagesConfig.middle.fitFor}
                </p>
              </div>

              <div className="space-y-1.5 text-left bg-blue-50 p-3.5 rounded-xl border border-blue-100/50">
                <span className="font-mono text-[8px] text-blue-600 uppercase font-bold">TIER FOCUS TARGET</span>
                <p className="text-xs text-blue-800 leading-relaxed font-mono font-medium">
                  {packagesConfig.middle.focus}
                </p>
              </div>

              <div className="space-y-3 pt-2 text-left">
                <span className="font-mono text-[8px] text-blue-600 uppercase font-bold tracking-wider block">INCLUDED ARCHITECTURE</span>
                <ul className="space-y-2.5">
                  {packagesConfig.middle.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onContactNav}
                className="w-full py-3 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
              >
                Assemble This Weapon
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Package C: Premium */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-[40px] pointer-events-none" />
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full font-bold">
                  {packagesConfig.premium.badge}
                </span>
                <ShieldCheck className="w-4 h-4 text-blue-600" />
              </div>

              <div className="space-y-1 text-left">
                <h3 className="font-display font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors">
                  {packagesConfig.premium.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium font-sans">Continuous Dedicated Monitoring • Max Capacity</p>
              </div>

              <div className="border-t border-slate-100 pt-4 space-y-2 text-left">
                <div className="inline-flex items-center gap-1 font-mono text-[8px] text-blue-600 uppercase tracking-wider bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded font-bold">
                  🎯 RECOMMENDED FOR:
                </div>
                <p className="text-xs text-slate-800 font-bold leading-relaxed bg-slate-100 p-2 rounded-xl border border-slate-100">
                  {packagesConfig.premium.fitFor}
                </p>
              </div>

              <div className="space-y-1.5 text-left bg-slate-50 p-3.5 rounded-xl border border-slate-200/50">
                <span className="font-mono text-[8px] text-slate-400 uppercase font-bold">TIER FOCUS TARGET</span>
                <p className="text-xs text-slate-700 leading-relaxed font-mono">
                  {packagesConfig.premium.focus}
                </p>
              </div>

              <div className="space-y-3 pt-2 text-left">
                <span className="font-mono text-[8px] text-slate-400 uppercase font-bold tracking-wider block">INCLUDED ARCHITECTURE</span>
                <ul className="space-y-2.5">
                  {packagesConfig.premium.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <button
                onClick={onContactNav}
                className="w-full py-3 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 shadow-md"
              >
                Inquire For Platinum Sovereign
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE PLAN CONFIGURATOR QUESTIONNAIRE WIZARD */}
      <section id="industry-plan-configurator" className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-10 max-w-4xl mx-auto shadow-xs relative overflow-hidden font-sans">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/[0.02] rounded-full filter blur-[60px] pointer-events-none" />
        
        {wizardStep < 4 ? (
          <div className="space-y-8 relative z-10 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-md">
                  <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
                  INTERACTIVE PLAN OPTIMIZER
                </div>
                <h3 className="font-display font-semibold text-slate-950 text-base sm:text-lg">
                  Calibrate Your High-Performance Digital Blueprint
                </h3>
              </div>
              <div className="flex items-center gap-1.5 tracking-wider font-mono text-[10px] text-slate-500">
                <span>QUESTION</span>
                <strong className="text-blue-600 text-xs px-2 py-0.5 bg-blue-50 border border-blue-100 rounded-sm">
                  {wizardStep + 1}
                </strong>
                <span>OF</span>
                <strong>4</strong>
              </div>
            </div>

            {/* Steps Progress Bar */}
            <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 transition-all duration-300" 
                style={{ width: `${((wizardStep + 1) / 4) * 100}%` }}
              />
            </div>

            {/* Stepper Wizard Render */}
            {wizardStep === 0 && (
              <div className="space-y-5">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-widest">
                  1. What is your primary business objective for your {industry.name} business?
                </label>
                <div className="grid grid-cols-1 gap-3.5">
                  {goalOptionsCustom.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectWizardAnswer("objective", opt)}
                      className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/15 text-xs text-slate-700 transition-all cursor-pointer font-medium hover:translate-x-1 duration-200 flex items-center justify-between"
                    >
                      <span>{opt}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {wizardStep === 1 && (
              <div className="space-y-5">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-widest">
                  2. What is your business's current monthly recurring revenue scale?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {revenueOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectWizardAnswer("revenue", opt)}
                      className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/15 text-xs text-slate-700 transition-all cursor-pointer font-medium hover:translate-x-1 duration-200 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                        {opt}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {wizardStep === 2 && (
              <div className="space-y-5">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-widest">
                  3. Which technical bottleneck is currently strangling your acquisition flow?
                </label>
                <div className="grid grid-cols-1 gap-3.5">
                  {roadblockOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectWizardAnswer("roadblock", opt)}
                      className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/15 text-xs text-slate-700 transition-all cursor-pointer font-medium hover:translate-x-1 duration-200 flex items-center justify-between"
                    >
                      <span className="flex items-start gap-2.5 pr-4">
                        <Layers className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{opt}</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {wizardStep === 3 && (
              <div className="space-y-5">
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase tracking-widest">
                  4. What is your designated target geographic search radius?
                </label>
                <div className="grid grid-cols-1 gap-3.5">
                  {radiusOptions.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectWizardAnswer("radius", opt)}
                      className="w-full text-left p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50/15 text-xs text-slate-700 transition-all cursor-pointer font-medium hover:translate-x-1 duration-200 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2.5">
                        <Target className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        {opt}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Stepper Footer Action */}
            <div className="flex justify-between items-center pt-2 border-t border-slate-200/60">
              <span className="font-mono text-[9px] text-slate-400">
                Confidential analysis calculated instantly using local state matrices.
              </span>
              {wizardStep > 0 && (
                <button
                  onClick={() => setWizardStep(prev => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-700 hover:bg-slate-100 duration-155 text-[10px] font-mono cursor-pointer"
                >
                  Back
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-8 relative z-10 text-left animate-fadeIn">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 rounded-md border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  PLAN RECOMMENDATION CALCULATED
                </div>
                <h3 className="font-display font-semibold text-slate-900 text-lg">
                  Strategic {industry.name} Blueprint Recommendation
                </h3>
              </div>
              <button 
                onClick={handleResetWizard}
                className="p-1.5 rounded-lg border border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100 text-xs font-mono cursor-pointer duration-150 inline-flex items-center gap-1"
              >
                Reset Analyzer
              </button>
            </div>

            {/* Recommended Tier Display Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              
              {/* User Selection Review Panel */}
              <div className="md:col-span-1 bg-slate-100 p-5 rounded-2xl border border-slate-250 space-y-4">
                <span className="text-xs font-mono font-bold text-slate-600 uppercase tracking-wider block">YOUR PROFILE INTPUT</span>
                
                <div className="space-y-3 font-sans text-xs">
                  <div>
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">OBJECTIVE</span>
                    <p className="text-slate-800 font-medium truncate mt-0.5">{wizardAnswers.objective}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">REVENUE RANGE</span>
                    <p className="text-slate-800 font-medium mt-0.5">{wizardAnswers.revenue}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">PRIMARY WEAKNESS</span>
                    <p className="text-slate-800 font-medium truncate mt-0.5">{wizardAnswers.roadblock}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">GEO-RAD TARGET</span>
                    <p className="text-slate-800 font-medium mt-0.5">{wizardAnswers.radius}</p>
                  </div>
                </div>
              </div>

              {/* Calculated Package Suggested Panel */}
              <div className="md:col-span-2 border border-blue-100 bg-white p-6 rounded-2xl space-y-5 shadow-xs relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/[0.03] rounded-full filter blur-[20px]" />
                
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-blue-600 font-bold uppercase tracking-wider block">IDEAL CALIBRATION TIER</span>
                  <h4 className="font-display font-semibold text-xl text-slate-950">
                    {wizardRecommendedTier === "basic" 
                      ? packagesConfig.basic.name 
                      : wizardRecommendedTier === "middle" 
                        ? packagesConfig.middle.name 
                        : packagesConfig.premium.name}
                  </h4>
                  
                  <p className="text-xs text-slate-500 leading-relaxed font-sans font-medium">
                    {wizardRecommendedTier === "basic" 
                      ? packagesConfig.basic.fitFor 
                      : wizardRecommendedTier === "middle" 
                        ? packagesConfig.middle.fitFor 
                        : packagesConfig.premium.fitFor}
                  </p>
                </div>

                {/* 20 Year Copywriting custom breakdown explanation */}
                <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/60 font-sans text-xs space-y-1 text-slate-700 select-text">
                  <strong className="text-slate-950 font-display block text-xs">
                    Copywriter Strategic Analysis: Why This Plan Fits Your Sector
                  </strong>
                  <p className="leading-relaxed">
                    Based on your active monthly revenue coordinates of <strong className="text-slate-900">{wizardAnswers.revenue}</strong>, your business needs structured technical leverage to circumvent your bottleneck regarding <strong className="text-slate-900">{wizardAnswers.roadblock.toLowerCase().split("(")[0]}</strong>. The <strong className="text-blue-700">
                      {wizardRecommendedTier === "basic" 
                        ? "Basic" 
                        : wizardRecommendedTier === "middle" 
                          ? "Growth Dominator" 
                          : "Premium Sovereignty"}
                    </strong> level is uniquely compiled to deploy robust, high-prestige semantic schema filters and sub-0.2s speed assets across your designated geographical target area of <strong className="text-slate-900">{wizardAnswers.radius}</strong>.
                  </p>
                </div>

                {/* Custom High-Ticket Form Capture */}
                <form onSubmit={handleLockInPlan} className="border-t border-slate-100 pt-5 mt-4 space-y-4 text-left">
                  <h4 className="font-display font-semibold text-sm text-slate-900">
                    📧 Secure & Lock In This Customized {industry.name} Plan
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Our copywriters, designers, and systems architects will compile your specific objectives into an active, exclusive development queue slot. Enter your secure contact details to authorize:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase font-bold block">YOUR FULL NAME *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Kenneth Vance" 
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 outline-none focus:border-blue-500 font-sans"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono text-slate-500 uppercase font-bold block">BEST EMAIL / CONTACT *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="e.g. kenneth@yourbusiness.com" 
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 outline-none focus:border-blue-500 font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] font-mono text-slate-500 uppercase font-bold block">PHONE NUMBER (OPTIONAL)</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. (555) 019-2834" 
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 outline-none focus:border-blue-500 font-sans"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 shadow-md hover:scale-[1.01] active:scale-95 text-center font-sans animate-pulse"
                    >
                      Lock In Custom Plan & Request Slots
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] text-slate-400 font-mono text-center sm:text-left leading-tight font-medium max-w-sm">
                      We limit custom slot development allocations to three clients as specified by quality SLA rules.
                    </span>
                  </div>
                </form>

              </div>

            </div>

          </div>
        )}
      </section>

      {/* 4. PROOF CORNER (Case Study & Showcase Portfolio) */}
      <section id="industry-trust-block" className="pt-6 border-t border-slate-200/50 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Column Left/Mid: Case Proof Study */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-1 text-left">
              <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block">
                EXPERT SECTOR PROOF
              </span>
              <h3 className="font-display font-semibold text-slate-900 text-xl sm:text-2xl mt-1.5">
                Active Project Case Study: {industry.caseStudy.client}
              </h3>
              <p className="text-xs text-slate-500">
                Explore a unique, fully custom case study built specifically for the {industry.name} sector. Click below to view the entire separate deep-dive breakdown.
              </p>
            </div>

            <div className="p-6 bg-white border border-blue-100 rounded-3xl space-y-5 shadow-xs">
              <h4 className="font-display font-medium text-base sm:text-lg text-slate-800 leading-snug text-left">
                {industry.caseStudy.title}
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-left bg-emerald-50/10 p-4 rounded-2xl border border-emerald-100/50">
                  <span className="font-mono text-[9px] text-emerald-600 uppercase tracking-wider block font-bold">THE CHALLENGE</span>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed font-sans">
                    {industry.caseStudy.challenge}
                  </p>
                </div>
                <div className="text-left bg-blue-50/10 p-4 rounded-2xl border border-blue-100/50">
                  <span className="font-mono text-[9px] text-blue-600 uppercase tracking-wider block font-bold">THE SOLUTION</span>
                  <p className="text-xs text-slate-700 mt-1.5 leading-relaxed font-sans">
                    {industry.caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Metrics bar */}
              <div className="grid grid-cols-3 gap-2 bg-blue-50/10 p-4 rounded-xl border border-blue-100/50">
                {industry.caseStudy.metrics.map((metric, idx) => (
                  <div key={idx} className="text-center">
                    <span className="text-[9px] font-mono text-blue-600 uppercase block tracking-wider leading-none font-semibold">{metric.label}</span>
                    <strong className="text-slate-900 text-base font-display block mt-1.5 font-bold">{metric.value}</strong>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-slate-100">
                <span className="text-[11px] text-slate-500 font-mono text-left">
                  Separate Case Study report ready to inspect.
                </span>
                <button
                  id="deep-dive-trigger-case"
                  onClick={onViewDeepDive}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer inline-flex items-center justify-center gap-1.5 shadow-sm active:scale-95"
                >
                  Visit Full Separated Case Study Page
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Column Right: Specialized Repertoire Portfolio */}
          <div className="space-y-6 text-left">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest font-bold bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full inline-block">
                SECTOR REPERTOIRE
              </span>
              <h3 className="font-display font-semibold text-slate-900 text-xl mt-1.5">
                Client Blueprint list
              </h3>
              <p className="text-xs text-slate-500">
                Tap on any client below to inspect custom specifications and metrics.
              </p>
            </div>

            <div className="space-y-3">
              {industry.portfolio.map((proj) => (
                <div
                  id={`project-click-${proj.id}`}
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="p-4 bg-white hover:bg-blue-50/20 hover:border-blue-300 border border-slate-200 rounded-2xl cursor-pointer transition-all flex items-center justify-between gap-4 shadow-2xs group"
                >
                  <div className="text-left space-y-1 min-w-0">
                    <span className="font-mono text-[9px] text-blue-600 uppercase tracking-wider font-semibold">{proj.client}</span>
                    <h4 className="font-display font-semibold text-xs text-slate-800 truncate">{proj.title}</h4>
                    <p className="text-[10px] text-slate-500 font-mono truncate">{proj.metricLabel}: <strong className="text-blue-600">{proj.metric}</strong></p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. THE CHOSEN ACTION PANELS (Dual-Choice Stacked Flow) */}
      <section id="industry-core-actions" className="relative z-10 pt-6 border-t border-slate-200/50">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="font-mono text-[10px] text-blue-600 uppercase tracking-widest inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full font-bold">
            CONVERSION PORTALS
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 mt-2">What is your goal today?</h2>
          <p className="text-sm text-slate-600 mt-2 font-sans leading-relaxed">
            Run an interactive technical audit to analyze crawl latency, or map your system configurations directly inside the blueprint planner.
          </p>
        </div>

        {/* Stacked Layout: Full-width stacked components for ultimate readability */}
        <div className="space-y-12 max-w-4xl mx-auto">
          
          {/* Action A: The Website Diagnostic Crawler */}
          <div className="border border-blue-100 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(59,130,246,0.02)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full filter blur-[50px] pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-mono flex items-center justify-center font-bold">A</span>
                <span className="font-mono text-xs text-blue-600 uppercase font-semibold tracking-wider">OPTION A: RUN LIVE WEB DIAGNOSTIC COMPLIANCE CRAWLER</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 text-left">Analyze Your Existing Website</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans text-left">
                Our high-speed technical diagnostics crawler analyzes your page header metadata, core asset weights, responsive structure compliance, and organic SEO indexing gaps instantly.
              </p>

              {/* Embedded Diagnostic tool */}
              <div className="border-t border-slate-100 pt-6 mt-4 font-mono">
                <WebsiteAuditTool addToast={addToast} />
              </div>
            </div>
          </div>

          {/* Action B: Specialized Project Specifications */}
          <div className="border border-emerald-100 bg-white rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(16,185,129,0.01)] relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full filter blur-[50px] pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-emerald-500 text-white text-xs font-mono flex items-center justify-center font-bold">B</span>
                <span className="font-mono text-xs text-emerald-600 uppercase font-semibold tracking-wider">OPTION B: SPECIFICATION SPECIFIER &amp; CONTRACT DRAFTER</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 text-left">Interactive Specs &amp; Roadmap Planner</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-sans text-left">
                Define customized solution metrics, tech frameworks, required booking automation variables, or system parameters to instantly compile interactive specifications and route them directly to our experts.
              </p>

              {/* Embedded Specifications form */}
              <div className="border-t border-slate-100 pt-6 mt-4">
                <ProjectPlanner addToast={addToast} />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Dynamic Project Detail Modal Popup */}
      {selectedProject && (
        <div id="industry-project-modal" className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-xl rounded-3xl bg-white border border-slate-200/85 overflow-hidden shadow-2xl p-6 sm:p-8 select-text">
            
            <button
              id="close-industry-modal"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4 text-left">
              <span className="font-mono text-[10px] text-blue-600 font-bold uppercase">{selectedProject.client}</span>
              <h3 className="font-display font-semibold text-lg sm:text-xl text-slate-900 leading-snug">{selectedProject.title}</h3>

              {/* Metric Callout Panel */}
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[8px] text-slate-500 uppercase tracking-wider block">{selectedProject.metricLabel}</span>
                  <strong className="text-xl font-display font-bold text-blue-600 tracking-tight mt-0.5 block">{selectedProject.metric}</strong>
                </div>
                <Cpu className="w-6 h-6 text-blue-400" />
              </div>

              {/* Strategy and Action Detail */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider block">EXECUTION STRATEGY</span>
                <p className="font-sans text-xs text-slate-600 leading-relaxed">{selectedProject.description}</p>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60 space-y-1">
                <span className="font-mono text-[8px] text-slate-700 font-bold flex items-center gap-1 uppercase">
                  <Code className="w-3 h-3 text-blue-600" /> Implemented Framework
                </span>
                <p className="font-sans text-[11px] text-slate-600 leading-relaxed">{selectedProject.solution}</p>
              </div>

              {/* Bottom buttons */}
              <div className="pt-2 flex justify-end">
                <button
                  id="close-industry-modal-btn"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer"
                >
                  Close Blueprint Specification
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* 6. POPUP CONFIRMATION MODAL */}
      {showSuccessModal && (
        <div id="blueprint-success-modal" className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-md rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-2xl p-6 sm:p-8 text-center animate-fadeIn font-sans">
            <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto text-emerald-500 mb-4">
              <CheckCircle2 className="w-6 h-6 animate-pulse" />
            </div>

            <h3 className="font-display font-semibold text-lg text-slate-900 mb-2">
              Blueprint Compiled! Outreaching Soon
            </h3>
            
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Thank you, <strong className="text-slate-800">{clientName}</strong>. Your custom high-ticket plan for <strong className="text-slate-800">{industry.name}</strong> has been successfully archived in our active slot engineering queue.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 text-left space-y-2 mb-6 font-mono text-[10px]">
              <span className="text-slate-400 uppercase font-bold tracking-wider block font-bold">SUBMISSION TELEMETRY</span>
              <div className="text-slate-600 space-y-1 leading-relaxed">
                <div>• SUGGESTED PLAN: <strong className="text-blue-600">{wizardRecommendedTier === "basic" ? packagesConfig.basic.name : wizardRecommendedTier === "middle" ? packagesConfig.middle.name : packagesConfig.premium.name}</strong></div>
                <div>• EMAIL ROUTING: <span className="text-slate-800">{clientEmail}</span></div>
                <div>• PRIORITY STATUS: <span className="text-emerald-600 font-bold">ACTIVE ASSIGNMENT SLOT</span></div>
              </div>
            </div>

            <p className="text-xs text-slate-600 font-medium mb-6">
              Our professional team will analyze these parameters and reach out to you shortly. Feel free to check the administrator panel to review your credentials!
            </p>

            <button
              onClick={() => {
                setShowSuccessModal(false);
                handleResetWizard();
                setClientName("");
                setClientEmail("");
                setClientPhone("");
              }}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer shadow-sm"
            >
              Perfect, Acknowledge
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

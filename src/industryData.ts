export interface IndustryCaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  deepDiveMarkdown: string;
}

export interface IndustryPortfolioProject {
  id: string;
  title: string;
  client: string;
  description: string;
  metric: string;
  metricLabel: string;
  solution: string;
}

export interface IndustryPageData {
  id: string;
  name: string;
  heroOffer: string;
  heroDesc: string;
  caseStudy: IndustryCaseStudy;
  portfolio: IndustryPortfolioProject[];
  auditFocus: string;
}

export const INDUSTRIES: IndustryPageData[] = [
  {
    id: "med-spa",
    name: "Medical Spa",
    heroOffer: "Stop Leaking High-Ticket Patients to Clunky Booking Systems. Command the Local Premium Aesthetics Market.",
    heroDesc: "You spend thousands driving premium beauty traffic to a website that drops 70% of hot prospects in the first 3 seconds due to hidden technical lag. We engineer high-prestige, custom-coded digital patient funnels that load instantly and guide clients directly into active bookings for premium Botox, CoolSculpting, and dermal procedures.",
    auditFocus: "MedSpa Treatment Booking Pipeline",
    caseStudy: {
      client: "Aura Luxe Medical Spa",
      title: "How Aura Luxe MedSpa Scaled High-Ticket Botox & CoolSculpting Bookings by 142% in Under 90 Days",
      challenge: "Aura Luxe had gorgeous clinical offices but their slow-loading, template-reliant WordPress site (5.8 seconds) was dropping 72% of mobile traffic arriving from local social media. Booking buttons regularly broke in the background, leading to leaked premium consultations and high frustration.",
      solution: "We scrapped their slow drag-and-drop frame and coded a ultra-light React frontend. We custom-engineered localized MedicalWebPage schemas and JSON-LD markup, forcing Google maps to index their aesthetic menu above all regional competitors.",
      metrics: [
         { label: "CLINICAL BOOKINGS JUMP", value: "+142%" },
         { label: "MOBILE LOADING SPEED", value: "0.22s" },
         { label: "AD CONVERSION IMPROVEMENT", value: "3.2x" }
      ],
      deepDiveMarkdown: `### Phase 1: High-Prestige React Architecture
We completely eliminated their bloated theme frameworks and heavy third-party plugins, substituting them with a bespoke single-view React build. This brought mobile page load from a failing 5.8s down to a pristine 0.22s, instantly ending bounce leakage.

### Phase 2: High-Intent Treatment Reduction
We created an elegant, multi-step treatment concern mapping utility. Patients can visually select concern spheres (e.g. skin laxity, volume loss, fine lines) and directly choose matching premium Botox packages with structured pricing without filling complex consultation sheets.

### Phase 3: Localized Medical Map Schemas
We integrated specialized MedicalWebPage schema coordinates, targeting local regional search maps. Aura Luxe gained rank #1 within their 15-mile service radius for botanical treatments, CoolSculpting, and laser therapies.

### Resulting Compounding Growth
Within 90 days, the unified system drove over 380 new appointment inquiries, scaling recurring customer lifetime bookings to unprecedented coordinates.`
    },
    portfolio: [
      {
        id: "lux-laser-med",
        title: "Ultra-Luxury Laser Clinic Redesign",
        client: "Vivid Glow Dermatology & Laser",
        description: "An elegant interactive aesthetics interface presenting high-ticket skin treatment guides.",
        metric: "+180%",
        metricLabel: "Web Booking Conversion Rate",
        solution: "Integrated a custom aesthetic concerns visual slider allowing users to self-filter laser treatments."
      },
      {
        id: "botox-seo-champ",
        title: "Botox Local Citation SEO Campaign",
        client: "Elevate Aesthetics Group",
        description: "Local SEO engineering and rich reviews schema mapping matching high-intent regional keywords.",
        metric: "#1 Spot",
        metricLabel: "For 14 Major Medical Spa Phrases",
        solution: "Wrote structured JSON-LD local schemas mapping 12 clinicians and active practice license details."
      },
      {
        id: "sculpt-body-brand",
        title: "Sculpt & Glow High-Prestige Identity",
        client: "Sculpt Body Contouring Spa",
        description: "Comprehensive luxury identity system, gold-pairing typography specifications, and digital flagship.",
        metric: "3.2x ROI",
        metricLabel: "On Rebranding Campaign Assets",
        solution: "Rebuilt the entire brand presentation, choosing Space Grotesk elegant headings and high-contrast styling."
      },
      {
        id: "cryo-api-checkout",
        title: "CryoSuite headless booking",
        client: "CryoSuite Performance Hub",
        description: "Light-speed single page scheduler, integrated into stripe recurring customer billing platforms.",
        metric: "62%",
        metricLabel: "Repeat Appointment Frequency",
        solution: "Engineered headless checkout API routes ensuring payment and time coordination under 0.1s."
      }
    ]
  },
  {
    id: "property-mgmt",
    name: "Property Management",
    heroOffer: "Secure Credit-Verified Premium Residents at Institutional Speed. Eliminate Vacancy Overhead.",
    heroDesc: "Every day an empty unit sits idle, your portfolio yield decays. Yet standard property platforms bury your luxury rentals inside slow, non-responsive frames that repel premium prospects. We deploy lightweight, handcoded listing gateways that capture high-scale corporate tenants in days, not months.",
    auditFocus: "Property Listing & Application Flow",
    caseStudy: {
      client: "Vanguard Residential Group",
      title: "How Vanguard Residencies Reduced Vacancy Days from 42 to 7 via Dynamic Responsive Portals",
      challenge: "Vanguard's multi-family listings relied on slow, non-responsive iframe embeds that performed horribly on mobile devices. Prospects couldn't sort properties by layout scale, location landmarks, or pet restrictions, causing them to bounce directly to rival property listing aggregators.",
      solution: "We constructed a sub-second interactive properties display using local state filters. We also integrated optimized structured micro-data (ApartmentComplex and RealEstateAgent schemas) to secure direct Google local map prominence.",
      metrics: [
        { label: "VACANCY WINDOW DROPPED", value: "-83%" },
        { label: "APPLICANT CONVERSION", value: "+44%" },
        { label: "MOBILE PORTAL SCORE", value: "98/100" }
      ],
      deepDiveMarkdown: `### Phase 1: Zero-Lag Interactive Search
We replaced Vanguard's static, iframe-wrapped listings page with an instant client-side filtered grid. Renters scan vacancies in real-time, instantly sorting by rent volume, bedrooms, and pet restrictions without reloading.

### Phase 2: Schema Listing Integration
We integrated RealEstateAgent and ApartmentComplex schemas. Google directly indexed real-time listings, securing high organic display positions for high-intent tenant lease searches.

### Phase 3: Frictionless Application Portal
By streamlining the application link structure, we removed secondary verification steps, letting tenants securely submit applications in under a single minute.

### Commercial Outcome
With average vacancy drop to 7 days, Vanguard saved $14,000+ per unit in annualized interest and asset holding costs.`
    },
    portfolio: [
      {
        id: "corporate-lease-ux",
        title: "Corporate Lease Suite Showcase",
        client: "Summit Property Partners",
        description: "Custom premium showcase showcasing premium high-ticket commercial leasing assets.",
        metric: "18 Days",
        metricLabel: "Average Lease Conversion Time",
        solution: "Created premium layout galleries showing immediate specifications, utilities, and floorplans."
      },
      {
        id: "rental-map-seo",
        title: "Geo-Targeted Rental Find Engine",
        client: "Metro Live Management",
        description: "Speed-focused real-property map and localized community citation booster.",
        metric: "+210%",
        metricLabel: "Inbound Qualified Inquiries",
        solution: "Built a React-based spatial selector querying local vacancies without server pagination friction."
      },
      {
        id: "highrise-lux-brand",
        title: "The Horizon Highrise Landing Hub",
        client: "Horizon Residential Tower",
        description: "Bespoke digital asset and ultra-high-end branding for luxury penthouse collections.",
        metric: "100%",
        metricLabel: "Leased Out Before Grand Opening",
        solution: "Designed visual bento boards detailing custom interior specifications, private club access, and virtual tours."
      },
      {
        id: "resident-ticketing-speed",
        title: "Resident Portal Speed Optimization",
        client: "Sentinel Housing Assets",
        description: "Complete frontend rebuild of legacy service application forms and payment APIs.",
        metric: "-35%",
        metricLabel: "Resident Service Call Vol",
        solution: "Streamlined data payloads, allowing residents to file maintenance tickets with speed-optimized file uploads."
      }
    ]
  },
  {
    id: "commercial-janitorial",
    name: "Commercial Janitorial",
    heroOffer: "Secure Lucrative Corporation Contracts directly. Bypass Aggregator Bidding Wars.",
    heroDesc: "Stop throwing money at low-quality lead brokers that sell the same leak information to 5 competing contractors. We design authoritative, certified B2B flagships demonstrating background-checked compliance, ISO safety standards, and structured estimation calculators that win enterprise confidence.",
    auditFocus: "Commercial Estimate Request Funnel",
    caseStudy: {
      client: "Nexus Commercial Cleaning",
      title: "How Nexus Janitorial Captured $861K in Recurring Corporate Cleaning Contracts via Technical Landing Pages",
      challenge: "Nexus lacked digital brand authority and depended on Thumbtack or Yelp leads, where they had to fight over razor-thin margin bids. They possessed no professional platform to prove their sanitization safety levels to corporate park directors.",
      solution: "We engineered an interactive, high-prestige B2B Cleaning Proposal Estimator. Facility managers could input room sizes, frequency patterns, and compliance requirements to receive immediate, official corporate estimates.",
      metrics: [
        { label: "RECURRING B2B REVENUE", value: "$861,000" },
        { label: "HIGH-VALUE INTAKE LIFT", value: "+280%" },
        { label: "PROPOSAL RESPONSE TIME", value: "3 Min" }
      ],
      deepDiveMarkdown: `### Phase 1: High-Authority Facility Planner
We created an interactive pricing estimator directly on the homepage, letting prospect facility VPs configure weekly contract volume based on square footage and specialization (e.g., sterilization).

### Phase 2: Compliance-Focused Search Engine optimization
Commercial facilities are heavily search-centric. We targeted search coordinates like 'commercial sanitization medical center' and 'ISO compliance floor maintenance' within local enterprise parks.

### Phase 3: Premium Trust Positioning
We established a high-trust layout using Deep Slate and Ocean accents. The design focuses on reliability, certifications, background checking compliance, and structured performance logs.

### Commercial Impact
Nexus landed 14 new multi-location agreements with healthcare suites and regional distribution centers under 90 days.`
    },
    portfolio: [
      {
        id: "clean-est-calculator",
        title: "Dynamic Facility Quote Engine",
        client: "Statewide Janitorial Solutions",
        description: "Bespoke contract planning tool calculating automated square footage disinfection quotes.",
        metric: "42%",
        metricLabel: "Friction to Consultation Savings",
        solution: "Integrated structured React hook flows mapping spaces from medical clinics to class-A tower offices."
      },
      {
        id: "med-clean-seo",
        title: "Medical Facility Sterilization SEO",
        client: "Aura Sterile Services",
        description: "High-compliance SEO infrastructure matching health safety requirements searching databases.",
        metric: "#1 Ranking",
        metricLabel: "For Surgical Cleaning Keywords",
        solution: "Crafted certified review integrations and deep technical documentation pages for strict health compliance."
      },
      {
        id: "enterprise-clean-brand",
        title: "Prestige Cleaners Visual Standard",
        client: "Enterprise Clean LLC",
        description: "Elite brand guidelines, clean vector imagery, typography, and professional service outline.",
        metric: "+64%",
        metricLabel: "B2B RFP Contract Win Rate",
        solution: "Designed custom visual assets presenting background-checked staff and technical equipment capabilities."
      },
      {
        id: "clean-tracker-app",
        title: "Headless Dispatch & Audit Portal",
        client: "Precision Cleaning Group",
        description: "High-efficiency web intake and dashboard tracking client feedback and service logs.",
        metric: "99.4%",
        metricLabel: "Contract SLA Satisfaction Guarantee",
        solution: "Built a customized serverless booking endpoint that updates technicians instantly on project specs."
      }
    ]
  },
  {
    id: "solar-install",
    name: "Solar Installation",
    heroOffer: "Capture Pre-Qualified High-Income Homeowners. Stop Burning cash on Bad Leads.",
    heroDesc: "Your outbound sales team is wasting expensive hours calling renters, apartments, or shaded homes generated by generic 'Get Quote' pages. We build high-tech Solar Rebate potential simulators that pre-qualify homeowner roofs and billing metrics automatically before scheduling assessments.",
    auditFocus: "Solar Savings Calculator & Intake",
    caseStudy: {
      client: "SunRidge Solar Systems",
      title: "How SunRidge Solar Boosted Booked Consultations by 75% via Bespoke Rebate Potential Estimators",
      challenge: "SunRidge were paying thousands to social media platforms, directing traffic to simplistic lead forms. 85% of leads generated were flat-out unqualified — renters or homes surrounded by thick trees, ruining sales efficiency.",
      solution: "We deployed an interactive Solar Savings Assessment tool. It checked homeownership and pre-evaluated localized utility costs, qualifying candidates automatically before scheduling engineer visits.",
      metrics: [
        { label: "CONSULTATION LIFT", value: "+75%" },
        { label: "DESK HOURS CLAWED BACK", value: "32 hrs/wk" },
        { label: "HOME-OWNER ACCURACY", value: "100%" }
      ],
      deepDiveMarkdown: `### Phase 1: Realistic Financial Payback Simulators
We built an interactive step-by-step calculator that uses homeowners' utility bills to estimate dynamic lifetime saving dividends and local tax incentive eligibility, securing immediate engagement.

### Phase 2: Instant Pre-Qualifying Protocols
The tool parses inputs, verifying homeownership status and average sunlight parameters prior to triggering sales consultations, ensuring zero wasted hours.

### Phase 3: High-Speed Mobile Conversions
With solar advertising heavily consumed over mobile networks, we streamlined static assets, reducing mobile site loading down to 0.25s for exceptional conversions.

### Commercial Impact
SunRidge increased conversion rates, scaling residential installs from 12 per month to 32 per month without adding marketing spend.`
    },
    portfolio: [
      {
        id: "solar-savings-calc",
        title: "Dynamic Solar ROI Calculators",
        client: "Apex Energy Solutions",
        description: "Bespoke rooftop assessment and energy bill offset calculators.",
        metric: "+230%",
        metricLabel: "Pre-Qualified Inbound Contacts",
        solution: "Integrated localized tax-credit equations calculating state-specific solar payback periods automatically."
      },
      {
        id: "solar-geo-seo",
        title: "Green Energy Organic Conquest",
        client: "TrueSun Power",
        description: "Geo-targeted solar neighborhood SEO campaigns focusing on county-level savings phrases.",
        metric: "Rank #1-3",
        metricLabel: "Across 22 Local Target Counties",
        solution: "Created individual community landing paths detailing completed local installation projects."
      },
      {
        id: "solar-brand-prestige",
        title: "VoltSolar Luxury Brand Presence",
        client: "VoltSolar Premium Systems",
        description: "Premium high-contrast brand styling and educational digital architecture describing solar components.",
        metric: "2.1x Margin",
        metricLabel: "Premium Over Standard Market Average",
        solution: "Designed elegant bento grids detailing Microinverter specs, backup storage batteries, and clean warranties."
      },
      {
        id: "solar-crm-integrator",
        title: "Headless CRM Booking Scheduler",
        client: "Lumina Energy Developers",
        description: "API automation integrating web estimator pipelines with localized field technician schedules.",
        metric: "90 Sec",
        metricLabel: "Average Outreach Dispatch Delay",
        solution: "Custom Webhook endpoints sending qualified roof metrics straight into Salesforce databases."
      }
    ]
  },
  {
    id: "senior-home-care",
    name: "Senior Home Care",
    heroOffer: "Establish Absolute Caregiver trust. Capture High-Ticket Private Care Inquiries Comfortably.",
    heroDesc: "When families seek care for aging parents, they do so under extreme psychological stress. Cold, hospital-like templates alienate them instantly. We blend comforting typography layouts with certified caregiver showcases that establish safety, vetting credentials, and warm authority.",
    auditFocus: "Family Trust Inquiry & Care Planner",
    caseStudy: {
      client: "Golden Years Companionship",
      title: "How Golden Years Care scaled home care consultation requests by 115% while building deep family authority",
      challenge: "Families seeking caregivers were deeply anxious about security and staff competence. Golden Years' legacy site felt sterile, lacked individual caregiver bios, and was difficult for older children to scan from tablets.",
      solution: "We designed a legibility-first digital Care Placement Planner. Anxious families could configure requested home tasks, specify health limitations (like dementia), and meet certified coordinators immediately.",
      metrics: [
        { label: "FAMILY INTAKE JUMP", value: "+115%" },
        { label: "USER TIME-ON-SITE TRUST", value: "4.8 Min" },
        { label: "TACTILE PHONE CALLS", value: "+92%" }
      ],
      deepDiveMarkdown: `### Phase 1: High-Empathy Scannability
Home care searches are executed under emotional stress. We formatted a soothing, spacious visual structure prioritizing human care coordinator profiles, security checks, and simple navigation paths.

### Phase 2: Senior-Friendly Typography
We styled large typography hierarchies, high-contrast buttons, and ultra-accessible tap-to-call integrations, ensuring ease-of-use for adult children and senior searchers alike.

### Phase 3: Structured Local Trust SEO
By establishing localized Care Service nodes in Google database listings, families searching 'home care companion near me' immediately see verified reviews and service credentials.

### Resulting Compounding Growth
Golden Years scaled monthly companion requests from 18 to 44, filling Caregiver rosters and securing market leadership.`
    },
    portfolio: [
      {
        id: "care-plane-system",
        title: "Dynamic Care Level Planner",
        client: "Heritage Home Care Group",
        description: "Bespoke digital assessments helping families configure hours, tasks, and caregiver specs.",
        metric: "49%",
        metricLabel: "Increase in Lead Pipeline Accuracy",
        solution: "Integrated a structured diagnostic flow tracking dementia care, companion services, and nursing requirements."
      },
      {
        id: "senior-local-seo",
        title: "Local Companionship Search Conq",
        client: "True Heart Care",
        description: "Structured medical, nursing, and companionship citations across 18 regional directories.",
        metric: "Front Page",
        metricLabel: "For Crucial Senior Care Queries",
        solution: "Wrote LocalService schemas representing caregiver vetting processes and localized service reviews."
      },
      {
        id: "caregivers-showcase-ux",
        title: "Certified Professional Care Showcase",
        client: "Aegis Senior Living Partners",
        description: "Highly humanized profile platform detailing safety clearances, caregiver bios, and client ratings.",
        metric: "+82%",
        metricLabel: "Initial Trust Consultation Success",
        solution: "Engineered elegant media components detailing caregiver backgrounds and family stars scores."
      },
      {
        id: "senior-head-intake",
        title: "Legacy Client Care Intake API",
        client: "Compassionate Caregivers Network",
        description: "HIPAA-compliant custom intake backend proxying private health requests to local teams.",
        metric: "0.15s",
        metricLabel: "Data Submission Response Speed",
        solution: "Crafted server-to-server TLS encrypted API pathways ensuring absolute client diagnostic sheet privacy."
      }
    ]
  },
  {
    id: "custom-pool",
    name: "Custom Pool Builder",
    heroOffer: "Lock in Premium $100K+ Backyard Commissions. Show Your Pools as Built Masterpieces.",
    heroDesc: "A custom gunite pool is an expensive, major lifestyle commitment. Generic visual websites with grainy social media snapshots ruin your prestige. We construct gorgeous bento-grid visual portfolios that present your excavations like luxury architecture, locking in high-net-worth design calls.",
    auditFocus: "Pool Visual Showcase & Quote Intake",
    caseStudy: {
      client: "Titan Custom Pools & Spas",
      title: "How Titan Pools Secured $1.2M in High-End Backyard Build Contracts via Immersive Visual Portfolios",
      challenge: "Titan possessed exceptional construction craft, but their digital face looked like a lawn service. Wealthy property owners looking to spend six figures on infinite-edge backyard resort retreats could not visualize the luxury.",
      solution: "We engineered an ultra-premium, cinematic bento portfolio organizing designs by high-end profiles (infinity-edge, modern geometric, stone Lagoons) integrated with an online Backyard Planner tool.",
      metrics: [
        { label: "SIGNED CONTRACT CAPITAL", value: "$1,280,000" },
        { label: "PREMIUM CONSULTATIONS", value: "+180%" },
        { label: "ESTIMATING DRICTION DECREASE", value: "-45%" }
      ],
      deepDiveMarkdown: `### Phase 1: High-Definition Bento Showcases
A pool purchase is highly emotional. We mapped incredible visual galleries focusing on high-end custom features (built-in spas, waterfalls, LED illumination arrays), presenting immediate visual luxury.

### Phase 2: Interactive Project Planners
We built a backyard planner allowing users to choose lot styles, choose custom pool dimensions, and estimate baseline timelines immediately prior to arranging onsite designer evaluations.

### Phase 3: Geo-SEO Luxury Pool Phrases
We targeted premium localized keywords like 'luxury infinity pool designer' and 'custom gunite pool excavation' in high-income regional suburbs, directing target buyers immediately to the layout.

### Commercial Result
Within 3 months, Titan booked over 22 pre-qualified consultations, translating into 6 high-ticket custom backyard excavating approvals.`
    },
    portfolio: [
      {
        id: "pool-planner-app",
        title: "Backyard Retreat Space Planner",
        client: "Apex Aquatics & Excavation",
        description: "Interactive visual planner mapping dimensions, water properties, and premium landscaping features.",
        metric: "34%",
        metricLabel: "Increase In Project Estimate Value",
        solution: "Developed an interactive digital dashboard that displays how secondary items (LEDs, fire-pits) scale overall valuation."
      },
      {
        id: "luxury-pool-seo",
        title: "High-Income Neighborhood SEO",
        client: "Veranda Custom Pools",
        description: "Search authority conquest targeting luxury gunite layout design terms in elite ZIP codes.",
        metric: "#1 Spot",
        metricLabel: "In All 9 Regional Wealth Circles",
        solution: "Engineered ultra-precise neighborhood-specific galleries optimized with structural pool schema tags."
      },
      {
        id: "cinematic-pool-brand",
        title: "Oasis Living Luxury Identity System",
        client: "Oasis Living Pool Architects",
        description: "High-end brand standard, visual asset pairing, and luxury portfolio presentation.",
        metric: "+55%",
        metricLabel: "Inbound Design Call Conversion",
        solution: "Designed high-contrast, premium dark layouts highlighting gorgeous, custom crystal-blue pool photography."
      },
      {
        id: "pool-render-api",
        title: "Headless Architect File Intake",
        client: "Prestige Pool Builders INC",
        description: "Optimized backend system allowing custom pool layout uploads and real-time review alerts.",
        metric: "100% Mobile",
        metricLabel: "Responsiveness Performance Rating",
        solution: "Custom-configured file pipelines enabling users to drop and upload site surveys directly on mobile."
      }
    ]
  },
  {
    id: "commercial-security",
    name: "Commercial Security",
    heroOffer: "Secure High-Value industrial SLA Contracts. Code corporate Confidence.",
    heroDesc: "Security VPs and Chief Risk Officers do not purchase enterprise access control systems from consumer-styled alarm websites. We engineer ultra-secure, technical platform designs exhibiting multi-location CCTV capabilities, electronic badge compliance protocols, and clear SLA response logs.",
    auditFocus: "Security System Assessment Funnel",
    caseStudy: {
      client: "Sentinel Cyber & Access Control",
      title: "How Sentinel Security Landed 18 Enterprise Warehouse Integration Campaigns in Under 60 Days",
      challenge: "Sentinel competed continually on price with domestic consumer alarm retail companies. They possessed no digital landing that spoke to industrial operations managers about fiber network compliance, corporate fire codes, or logistics hubs.",
      solution: "We handcoded an enterprise security systems architectural mapper. Technology officers could layout secure doors, badging levels, and remote diagnostic arrays to secure instant, tailored commercial proposal layouts.",
      metrics: [
        { label: "COMPLETED SLA SECURED", value: "18 Projects" },
        { label: "RFP PREPARATION REDUCTION", value: "14 Days" },
        { label: "SLA DEPOSIT TRUST LIFT", value: "+340%" }
      ],
      deepDiveMarkdown: `### Phase 1: Interactive Systems Architect
We created a sleek, technical panel allowing enterprise security directors to map facility counts, secure access doors, IP camera arrays, and secure monitoring stations.

### Phase 2: Enterprise SEO Grounding
We designed educational content and targeted authoritative keywords like 'multi-point access control systems' and 'hospital security compliance requirements' to bypass generic consumer searches.

### Phase 3: SOC2 Compliance Branding
The platform was styled with Space Grotesk and deep Slate accents, highlighting security clearances, field history, fast response SLA, and engineering credentials.

### Resulting Volume
Sentinel secured contracts with 18 large-scale fulfillment centers and executive corporate headquarters within 60 days.`
    },
    portfolio: [
      {
        id: "spec-sec-calc",
        title: "B2B Security SLA Proposal Planner",
        client: "Vanguard Guard & Badge",
        description: "Interactive system specifications generator for complex multi-location commercial facilities.",
        metric: "12 Days",
        metricLabel: "Cut From Sales Proposal Cycle",
        solution: "Built a customized form that generates localized equipment manifests and schedules onsite system walk-throughs."
      },
      {
        id: "industrial-sec-seo",
        title: "Industrial Access Control SEO Campaign",
        client: "Ironclad Security Group",
        description: "Technical SEO conquest matching regulatory requirements and industrial security procedures.",
        metric: "Position 1.4",
        metricLabel: "For Commercial Access Control Terms",
        solution: "Crafted deep technical whitepapers and structured schema listings representing active security clearances."
      },
      {
        id: "sec-brand-prestige",
        title: "Fortress B2B Corporate Identity",
        client: "Fortress Surveillance LLC",
        description: "Prestige B2B brand alignment, typography systems, and commercial digital storefront.",
        metric: "+85%",
        metricLabel: "Lead Quality Intake Standard",
        solution: "Designed high-contrast layouts featuring clean vector grids that present server security and system warranties."
      },
      {
        id: "sec-dispatch-api",
        title: "Headless SLA Ticket Distributor",
        client: "Sentinel Access Developers",
        description: "Bespoke high-reliability endpoint connecting digital security logs to nationwide monitoring teams.",
        metric: "0.11s",
        metricLabel: "Service Ingestion Response Speed",
        solution: "Engineered robust API proxy routes preventing data loss and matching enterprise firewalls."
      }
    ]
  },
  {
    id: "mobile-iv",
    name: "Mobile IV Therapy",
    heroOffer: "Book Wellness & Hangover Groups in 3 Clicks. Eliminate Mobile Booking Friction.",
    heroDesc: "Mobile IV hydration is a spontaneous, urgent, and highly mobile-driven purchase. If your scheduling flow forces dehydrated users through complex 9-step forms, they will exit and call a competitor. We build lighter-than-air 3-click schedulers with instant zip check to book nurses under 30 seconds.",
    auditFocus: "Mobile Hydration Booking Speed",
    caseStudy: {
      client: "Hydrate Now Therapy",
      title: "How Hydrate Now Scaled Mobile Group Bookings by 180% via Direct Lightning-Speed Web Schedulers",
      challenge: "Hydrate Now utilized booking software that required extensive client sign-ups and multiple load breaks. 68% of customers facing major hangover symptoms or dehydration collapsed out of the funnel due to technical lag.",
      solution: "We programmed a ultra-light client-side zip validator and menu scheduler. Patients instantly chose custom vitamin drips, mapped their address, and secured booking schedules in under 30 seconds flat.",
      metrics: [
        { label: "MOBILE BOOKING CONVERSION", value: "+180%" },
        { label: "STEPS TO BOOK NURSE", value: "3 Clicks" },
        { label: "TOTAL COMPLETED REVENUE", value: "2.4x" }
      ],
      deepDiveMarkdown: `### Phase 1: 3-Click Mobile Treatment Interface
IV customers are often searching for rapid relief. We designed a lightweight mobile layout that displays treatment benefits, nurse background clearances, and booking windows instantly.

### Phase 2: Zip Code Service Checker
To avoid dead leads, patients verify their service eligibility instantly on page load through an optimized client-side zip index before checkout.

### Phase 3: Localized Google Ad SEO Grounding
We structured IV treatment schema nodes, targeting search triggers like 'NAD therapy post-party recovery' and 'mobile hydration nurse' in regional metropolitan neighborhoods.

### Commercial Outcome
Hydrate Now scaled group bookings for luxury bachelor parties and athletic complexes, compounding team utilization by 180% in 1 month.`
    },
    portfolio: [
      {
        id: "iv-menu-app",
        title: "Dynamic Treatment Benefit Selector",
        client: "Cascade IV Hydration",
        description: "Clean interactive IV cocktail builder letting patients select custom vitamins, amino acids, and minerals.",
        metric: "+45%",
        metricLabel: "Inbound Average Cart Value",
        solution: "Developed an elegant visual widget that shows benefits (focus, glow, clean energy) based on vitamin levels selected."
      },
      {
        id: "iv-local-seo",
        title: "Mobile Hydration Near Me SEO",
        client: "Aura Hydration Nurses",
        description: "Local SEO citations mapping active nurse locations and coverage zipcodes.",
        metric: "Rank #1",
        metricLabel: "For Hangover Relief Queries",
        solution: "Optimized on-page Google citations with real-time nurse coordinates and verified reviews."
      },
      {
        id: "iv-brand-luxury",
        title: "Drip Oasis High-End Aesthetics",
        client: "Drip Oasis Wellness Spa",
        description: "Luxury digital asset design, brand books, color layouts, and clean online visual styling.",
        metric: "+60%",
        metricLabel: "Membership Care Program Signs",
        solution: "Styled the entire site using Inter sans paired with responsive motion animations mapping treatment safety."
      },
      {
        id: "iv-nurse-api",
        title: "Headless Nurse Dispatch API",
        client: "Elite Drips Medical",
        description: "Lightweight dispatch pipeline connecting site checkouts directly to mobile nursing team calendars.",
        metric: "99.8%",
        metricLabel: "Booking Fulfillment Efficiency Rate",
        solution: "Custom webhook routes parsing IV selections and locations instantly to field teams."
      }
    ]
  },
  {
    id: "epoxy-flooring",
    name: "Epoxy Flooring",
    heroOffer: "Lock Up high-Ticket Garage Coating Estimates. Eradicate Manual Travel Overhead.",
    heroDesc: "Concrete coating clients need visual proof of durability and finish quality. Standard quote forms are generic and boring. We develop intuitive Floor Showroom visualizers that let warehouse managers and homeowners simulate custom flake profiles and request precise valuations on-screen.",
    auditFocus: "Epoxy Visual Planner & Quote Funnel",
    caseStudy: {
      client: "IronClad Garage & Floor Coating",
      title: "How IronClad Epoxy Grew Inbound Estimating Requests by 140% via Bespoke Digital Showroom Planners",
      challenge: "IronClad's sales team spent endless hours driving around scheduling physical measurements for leads that didn't purchase. Prospects couldn't conceptualize protective flake patterns or metallic depth, leading to loss of potential contracts.",
      solution: "We engineered a digital Floor Customizer tool. Users could outline garage dimensions, select color flakes (like Terrazzo or Quartz), check substrate prep guides, and submit measurements instantly.",
      metrics: [
        { label: "REQUESTED ESTIMATES INTAKE", value: "+140%" },
        { label: "UNPRODUCTIVE DRIVE TIME", value: "-45%" },
        { label: "SALES CLOSING VALUE", value: "85/100" }
      ],
      deepDiveMarkdown: `### Phase 1: Interactive Flake Showroom
We designed an interactive designer tool allowing users to preview what Terrazzo and premium Metallic solid paints look like inside real garage layouts, increasing desire.

### Phase 2: Instant Automated Quotation Estimator
Prospects configure their bay sizes (1, 2, or 3-car garage) and substrate parameters, receiving customized estimate summaries to pre-value leads before scheduling onsite measurements.

### Phase 3: Localized Neighbor-SEO Launch
We targeted local residential search corridors like 'epoxy garage protective flooring expert' and 'metallic concrete coatings' in premium suburban communities.

### Real Commercial Growth
IronClad closed 22 high-ticket finishes over 60 days, reducing outbound sales friction while scaling profit margins.`
    },
    portfolio: [
      {
        id: "epoxy-viewer-app",
        title: "Custom Flake Visual Showroom",
        client: "Premium Epoxy Coat LLC",
        description: "Interactive floor customizer mapping colors, patterns, and safety coefficients.",
        metric: "52%",
        metricLabel: "Higher Booking Intention Rate",
        solution: "Built a customized canvas component showing paint patterns under variable light conditions."
      },
      {
        id: "epoxy-contract-seo",
        title: "Commercial Concrete Coating SEO",
        client: "Atlas Resilient Floors",
        description: "B2B search campaign targeting warehouse facility directors looking for chemical-resistant coatings.",
        metric: "Page 1 Top",
        metricLabel: "For 18 High-Volume Industry Phrases",
        solution: "Wrote exhaustive technical material guides detailing ISO compliance, tensile strength, and curing logs."
      },
      {
        id: "epoxy-brand-brutalist",
        title: "ToughCoat Brand Authority System",
        client: "ToughCoat Industrial Surfaces",
        description: "High-impact, premium industrial brand guidelines and high-resolution commercial asset layout.",
        metric: "2.4x ROI",
        metricLabel: "On First Campaign Launch Assets",
        solution: "Designed high-contrast layouts using charcoal slate tones and sharp typography detailing 10-year warranties."
      },
      {
        id: "epoxy-quote-api",
        title: "Headless Flooring estimator CRM",
        client: "Apex Coating Engineers",
        description: "Custom lightweight quote calculator and dispatch webhook matching regional sales directors.",
        metric: "12 Sec",
        metricLabel: "Lead Record Generation Velocity",
        solution: "Created API routing parsing client dimensions and flake materials directly to local reps."
      }
    ]
  },
  {
    id: "weight-loss-clinic",
    name: "Weight Loss Clinic",
    heroOffer: "Streamline secure Patient Qualifying Pathways. Maximize Doctor Consultation Occupancy.",
    heroDesc: "In weight-loss medicine, patient sensitivity and HIPAA compliance is paramount. Heavy paper PDF intake packets leak valuable patients to competing clinical programs. We custom-code encrypted, high-conviction health questionnaires that safely qualify GLP-1 (Semaglutide) candidates in 60 seconds.",
    auditFocus: "Clinical Intake & Assessment Stream",
    caseStudy: {
      client: "Metabolic Wellness Center",
      title: "How Metabolic Wellness Scaled Doctor Consultations by 165% with Safe Pre-Qualification Flows",
      challenge: "Metabolic Wellness was losing upwards of 70% of potential patients due to a cumbersome manual clinical intake process. Prospects found the paperwork exhausting and skipped booking their medical consultations.",
      solution: "We deployed an interactive, highly secure medical eligibility screening tool. Patients validated basic health indexes, and secured doctor's appointments instantly, with complete EHR encryption.",
      metrics: [
        { label: "CONSULTATIONS FILLED", value: "+165%" },
        { label: "PATIENT QUALIFY TIME LIFT", value: "-70%" },
        { label: "HIPAA COMPLIANCE RATING", value: "100%" }
      ],
      deepDiveMarkdown: `### Phase 1: Guided Healthcare Assessments
We replaced Metabolic's heavy PDF layouts with a responsive, secure interactive intake wizard. Patients verify BMI brackets, previous logs, and treatment goals safely.

### Phase 2: High Prestige Medical Authority Visuals
We redesigned the brand to project trust, cleanliness, and clinical medical authority. Layouts feature secure credential badges, board-certified logos, and clinic location maps.

### Phase 3: GLP-1 Specialized SEO Conquest
We targeted premium medical phrases like 'localized weight management physician' and 'Semaglutide weight clinic reviews' to target patients looking for premium, doctor-guided services.

### Commercial Outcome
With a restructured patient qualification backend, Metabolic Wellness generated 480 pre-screened patient accounts, driving maximum clinical slot occupancy.`
    },
    portfolio: [
      {
        id: "health-assess-app",
        title: "Doctor-Guided Treatment Planner",
        client: "Summit Clinical Weight Systems",
        description: "Secure health qualifiers helping users check treatment eligibility and dosage calculators.",
        metric: "59%",
        metricLabel: "Conversion Gains on Onboarding",
        solution: "Developed an elegant multi-stage React state intake verifying BMI and thyroid compliance checks."
      },
      {
        id: "clinic-local-seo",
        title: "GLP-1 Weight Management SEO",
        client: "Vigor Clinical Medical",
        description: "Local SEO citations mapping clinic offices and board-certified medical doctor credentials.",
        metric: "#1 Spot",
        metricLabel: "For Regional Semaglutide Inquiries",
        solution: "Designed local schema files representing clinical licenses, operating hours, and patient testimonials."
      },
      {
        id: "med-brand-clean",
        title: "Apex Clinical Branding Strategy",
        client: "Apex Metabolic Labs",
        description: "Elite visual guidelines, clinical blue-and-slate color pairings, and secure typography manuals.",
        metric: "+76%",
        metricLabel: "Initial Trust Evaluation Benchmark",
        solution: "Established pure, spacious interfaces with high-contrast elements that place patient success first."
      },
      {
        id: "clinic-hipaa-api",
        title: "Headless Encrypted Intake Proxy",
        client: "Core Wellness Clinics",
        description: "Bespoke secure endpoint encrypting health files before syncing to local clinic EHR databases.",
        metric: "0.18s",
        metricLabel: "Inbound Pipeline Response Speed",
        solution: "Wrote robust Node API proxies that securely handle private health records under TLS protocols."
      }
    ]
  }
];

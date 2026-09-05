// Static Portfolio Data for Netlify Deployment
// You can directly edit any information here to update your portfolio!

const portfolioData = {
  profile: {
    name: "Alex Vance",
    title: "Senior Shopify & Hydrogen Expert",
    heroHeadline: "Architecting High-Conversion <span class=\"text-emerald-600\">Shopify Stores</span> & Headless Apps.",
    heroBadge: "Certified Shopify Plus & Hydrogen Expert",
    tagline: "Building high-converting e-commerce experiences, custom theme architectures, and lightning-fast headless storefronts.",
    bio: "Certified Shopify Expert with over 7+ years of experience scaling direct-to-consumer (DTC) brands and enterprise merchants. Specialized in Liquid theme development, Shopify Checkout Extensibility, Storefront API, React/Hydrogen, and high-performance speed optimization.",
    email: "jisanrahmandev@gmail.com",
    location: "San Francisco, CA (Remote Worldwide)",
    availability: "Available for Q3/Q4 Projects & Advisory",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    upworkUrl: "https://upwork.com",
    yearsExperience: "7+",
    yearsExperienceLabel: "Years Experience",
    completedStores: "120+",
    completedStoresLabel: "Stores Scaled",
    clientSatisfaction: "99.8%",
    clientSatisfactionLabel: "Client Rating",
    avatarImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    headerLogoUrl: "",
    caseStudyCategories: [
      "Headless Hydrogen",
      "Theme Customization",
      "App Development",
      "Checkout Extensibility",
      "Performance Optimization",
      "Migration"
    ],
    resumeUrl: "#"
  },
  projects: [
    {
      id: "proj-1",
      title: "Lumina Luxury - Headless Hydrogen Storefront",
      client: "Lumina Home & Decor",
      category: "Headless Hydrogen",
      description: "Migrated a legacy monolith to Shopify Hydrogen (Remix) paired with Oxygen hosting, delivering sub-second page transitions and custom 3D room visualizer.",
      challenge: "The client's high-traffic traffic spikes were causing sluggish page loads on their legacy custom cart setup, resulting in high cart abandonment during flash sales.",
      solution: "Architected a lightning-fast headless storefront using Shopify Hydrogen, GraphQL Storefront API, Tailwind CSS, and edge caching on Oxygen.",
      results: [
        "Page load speed improved by 340% (LCP under 0.8s)",
        "Mobile conversion rate increased by 28%",
        "Handled 15,000 concurrent checkout sessions without latency"
      ],
      metrics: [
        { label: "Conversion Lift", value: "+28%" },
        { label: "Page Speed (LCP)", value: "0.7s" },
        { label: "Annual GMV", value: "$4.2M" }
      ],
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800",
      storeUrl: "https://shopify.com",
      githubUrl: "https://github.com",
      technologies: ["Hydrogen", "Remix", "GraphQL", "Storefront API", "Tailwind CSS", "Shopify Oxygen"],
      featured: true,
      completionDate: "2026-02-15"
    },
    {
      id: "proj-2",
      title: "Velvet Threads - Custom Theme & Checkout Extensibility",
      client: "Velvet Apparel Co.",
      category: "Theme Customization",
      description: "Built a bespoke Shopify OS 2.0 theme from scratch with advanced dynamic bundle builders and integrated post-purchase upsell checkout UI extensions.",
      challenge: "The brand needed a high-end editorial aesthetic that stood out from standard Shopify templates while retaining seamless app compatibility.",
      solution: "Created a modular Section-based OS 2.0 theme with custom Ajax cart drawer, predictive search API, and React-powered upsell widgets in checkout.",
      results: [
        "Average Order Value (AOV) increased by 22% via checkout extensions",
        "Store score on Google Lighthouse reached 98/100",
        "Zero downtime during Black Friday migration"
      ],
      metrics: [
        { label: "AOV Increase", value: "+22%" },
        { label: "Lighthouse Score", value: "98/100" },
        { label: "Bounce Rate", value: "-19%" }
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
      storeUrl: "https://shopify.com",
      technologies: ["Shopify Liquid", "JavaScript (ES6+)", "Tailwind CSS", "Checkout UI Extensions", "Metafields"],
      featured: true,
      completionDate: "2026-01-10"
    },
    {
      id: "proj-3",
      title: "SyncPro - ERP & Multi-Warehouse Inventory App",
      client: "Global Logistics Partners",
      category: "App Development",
      description: "Developed a private Shopify App (Node.js & Prisma) integrating NetSuite ERP with real-time multi-location inventory syncing and automated fulfillment routing.",
      challenge: "Merchants were overselling products across 5 regional warehouses due to a 30-minute sync delay in existing app solutions.",
      solution: "Engineered a robust webhook-driven Node.js app using Shopify GraphQL Admin API and Redis queuing for instant inventory reconciliation.",
      results: [
        "Eliminated 100% of overselling discrepancies",
        "Saved 40 hours of manual warehouse reconciliation per week",
        "Processed over 50,000 orders monthly without error"
      ],
      metrics: [
        { label: "Sync Latency", value: "< 2s" },
        { label: "Orders/Mo", value: "50k+" },
        { label: "Hours Saved", value: "40 hrs/wk" }
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com",
      technologies: ["Node.js", "Express", "GraphQL Admin API", "Prisma", "PostgreSQL", "Shopify CLI"],
      featured: true,
      completionDate: "2025-11-20"
    },
    {
      id: "proj-4",
      title: "Apex Nutrition - B2B Wholesale & Retail Portal",
      client: "Apex Supplements",
      category: "Migration",
      description: "Migrated a 10-year-old Magento store to Shopify Plus with multi-currency, localized regional pricing, and password-protected B2B wholesale portal.",
      challenge: "Complex customer tier pricing and legacy product attributes needed seamless mapping into Shopify Plus B2B company locations.",
      solution: "Utilized Shopify Plus B2B features alongside custom Metaobject data structures and automated customer tagging scripts.",
      results: [
        "Operational maintenance costs reduced by 65%",
        "Wholesale order processing time cut in half",
        "International sales grew by 45% in 3 months"
      ],
      metrics: [
        { label: "Cost Reduction", value: "65%" },
        { label: "Intl Growth", value: "+45%" },
        { label: "Migration Time", value: "6 Weeks" }
      ],
      image: "https://images.unsplash.com/photo-1579722821273-0f6c74a83c6b?auto=format&fit=crop&q=80&w=800",
      storeUrl: "https://shopify.com",
      technologies: ["Shopify Plus", "Liquid", "B2B Catalogs", "Metaobjects", "Storefront API"],
      featured: false,
      completionDate: "2025-09-10"
    }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Lead Shopify Solutions Architect",
      company: "E-Com Elite Agency",
      period: "2023 - Present",
      description: "Leading enterprise Shopify Plus builds, headless migrations, and custom app ecosystems for high-growth DTC and B2B brands.",
      highlights: [
        "Architected 25+ Shopify Plus stores generating over $45M in combined annual GMV.",
        "Mentored a team of 6 junior frontend developers and Liquid engineers.",
        "Spearheaded adoption of Shopify Hydrogen and Checkout Extensibility across agency projects."
      ],
      skillsUsed: ["Shopify Plus", "Hydrogen", "GraphQL API", "Team Leadership", "Architecture"]
    },
    {
      id: "exp-2",
      role: "Senior Shopify Full-Stack Developer",
      company: "DigitalCraft Commerce",
      period: "2020 - 2023",
      description: "Specialized in custom theme development, React-based Shopify app integrations, and speed optimization audits.",
      highlights: [
        "Optimized 50+ stores, improving average Google Lighthouse scores from 42 to 95+.",
        "Built custom private apps for ERP, CRM, and 3PL warehouse integrations.",
        "Created reusable section component libraries utilized across 30+ client stores."
      ],
      skillsUsed: ["Shopify Liquid", "Node.js", "React", "REST/GraphQL APIs", "Performance Tuning"]
    },
    {
      id: "exp-3",
      role: "Frontend Developer & E-Commerce Specialist",
      company: "RetailBoost Media",
      period: "2018 - 2020",
      description: "Designed and launched conversion-optimized Shopify storefronts and managed ongoing CRO experiments.",
      highlights: [
        "Executed A/B tests that boosted store conversion rates by an average of 18%.",
        "Customized checkout flows and integrated third-party payment gateways."
      ],
      skillsUsed: ["HTML/CSS", "JavaScript", "Liquid", "CRO", "UI/UX Design"]
    }
  ],
  skillCategories: [
    {
      title: "Shopify Core & Ecosystem",
      icon: "shopping-bag",
      skills: [
        { name: "Shopify Theme Development (Liquid & OS 2.0)", level: 95, description: "Custom Liquid themes, dynamic section architecture, custom blocks, metaobjects, and theme customization using Shopify CLI." },
        { name: "End-to-End Store Setup", level: 98, description: "Complete store configuration, app integrations, navigation, collection/product architecture, domain setup, and payment settings." },
        { name: "Shopify App Development", level: 85, description: "Custom embedded app development using React Router, Shopify App CLI, and GraphQL/REST Admin APIs." }
      ]
    },
    {
      title: "Frontend Development",
      icon: "code",
      skills: [
        { name: "HTML5, CSS3 & JavaScript (ES6+)", level: 95, description: "Semantic markup, modern layout techniques, clean code structure, and DOM manipulation." },
        { name: "Tailwind CSS & Responsive Design", level: 90, description: "Rapid utility-first styling and mobile-first, responsive design implementation." }
      ]
    },
    {
      title: "Workflow & Tools",
      icon: "wrench",
      skills: [
        { name: "Git & GitHub Version Control", level: 90, description: "Local Git version control, branching strategies, and remote repository management on GitHub." },
        { name: "AI-Augmented Engineering", level: 95, description: "Accelerating development workflows with AI pair-programming for code generation, debugging, refactoring, and documentation." }
      ]
    }
  ],
  testimonials: [
    {
      id: "test-1",
      clientName: "Marcus Sterling",
      clientTitle: "VP of E-Commerce",
      company: "Lumina Home & Decor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      content: "Alex is phenomenal. Our migration to Shopify Hydrogen was seamless, and the speed improvements blew our team away. Our mobile conversion rate jumped 28% in the first month alone!",
      rating: 5,
      projectTitle: "Lumina Luxury - Headless Hydrogen Storefront"
    },
    {
      id: "test-2",
      clientName: "Sophia van der Berg",
      clientTitle: "Founder & Creative Director",
      company: "Velvet Apparel Co.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      content: "Finding a developer who understands both high-end design aesthetics and deep technical Shopify architecture is rare. Alex delivered our OS 2.0 theme ahead of schedule with flawless code.",
      rating: 5,
      projectTitle: "Velvet Threads - Custom Theme & Checkout Extensibility"
    },
    {
      id: "test-3",
      clientName: "David Chen",
      clientTitle: "Chief Operations Officer",
      company: "Global Logistics Partners",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      content: "Alex built a custom ERP sync app that solved our multi-warehouse inventory nightmares. Absolute professional with top-tier communication and engineering rigor.",
      rating: 5,
      projectTitle: "SyncPro - ERP & Multi-Warehouse Inventory App"
    }
  ]
};

// Static Portfolio Data for Netlify Deployment
// You can directly edit any information here to update your portfolio!

const portfolioData = {
  profile: {
    name: "Jisan Rahman",
    title: "Senior Shopify & Hydrogen Expert",
    heroHeadline: "Architecting High-Conversion <span class=\"text-emerald-600\">Shopify Stores</span> & Headless Apps.",
    heroBadge: "Shopify Plus & Hydrogen Developer",
    tagline: "Building high-converting e-commerce experiences, custom theme architectures, and lightning-fast headless storefronts.",
    bio: "Shopify Developer with 3+ years of experience building and scaling direct-to-consumer (DTC) brands. Specialized in Liquid theme development, Shopify Checkout Extensibility, Storefront API, React/Hydrogen, and high-performance speed optimization. I care about shipping stores fast, writing code the next developer can actually maintain, and handing clients something they don't need an agency retainer for.",
    email: "jisanrahmandev@gmail.com",
    location: "Bashundhara, Dhaka, BD (Remote Worldwide)",
    availability: "Available for Q3/Q4 Projects & Advisory",
    githubUrl: "https://github.com",
    linkedinUrl: "https://linkedin.com",
    twitterUrl: "https://twitter.com",
    upworkUrl: "https://upwork.com",
    yearsExperience: "3+",
    yearsExperienceLabel: "Years in Shopify",
    completedStores: "25+",
    completedStoresLabel: "Stores Shipped",
    clientSatisfaction: "100%",
    clientSatisfactionLabel: "Client Rating",
    // Profile photo. This is a hosted URL — to swap it out, either change the
    // link here, or drop a file in the images/ folder and use a relative path
    // (e.g. "images/profile.jpg").
    avatarImage: "https://cdn.prod.website-files.com/6a955aecd654fdc5b6813c1a/6a9652a46531cd451bdc698c_612449561_17926599891193457_6140473338477038716_n.jpg",
    // Site logo shown in the header and footer. Follows the same rule as
    // avatarImage: a local file inside images/ or any hosted image URL.
    // Leave it empty ("") to fall back to the Lucide shopping-bag icon.
    headerLogoUrl: "images/shopify-logo.png",
    caseStudyCategories: [
      "Theme Development",
      "App Development"
    ],
    resumeUrl: "#"
  },
  projects: [
    // ─────────────────────────────────────────────────────────────
    // HOW TO ADD A PROJECT: copy the template below into this array
    // and remove the "// " prefixes. The "category" value must be
    // exactly "Theme Development" or "App Development" so it shows
    // up under the correct filter tab.
    // ─────────────────────────────────────────────────────────────
    // {
    //   id: "proj-1",
    //   title: "Project Name - Key Outcome",
    //   client: "Client Name",
    //   category: "Theme Development", // or "App Development"
    //   description: "1-2 sentence summary shown on the project card.",
    //   challenge: "The problem the client faced.",
    //   solution: "What you built and how you did it.",
    //   results: [
    //     "Measurable result #1",
    //     "Measurable result #2",
    //     "Measurable result #3"
    //   ],
    //   metrics: [
    //     { label: "Short Label", value: "+00%" },
    //     { label: "Short Label", value: "0.0s" },
    //     { label: "Short Label", value: "$0.0M" }
    //   ],
    //   image: "https://images.unsplash.com/photo-...",
    //   storeUrl: "https://live-store-url.com",
    //   githubUrl: "https://github.com/username/repo",
    //   technologies: ["Tech 1", "Tech 2", "Tech 3", "Tech 4"],
    //   featured: true,
    //   completionDate: "2026-01-01"
    // },
    {
      id: "proj-1",
      title: "Prime Cuts - Custom Dark Theme for Plant Genetics Store",
      client: "Prime Cuts Genetics",
      category: "Theme Development",
      description: "Bespoke Shopify OS 2.0 theme for a German plant-genetics storefront — premium dark aesthetic, script brand typography, and a conversion-focused Home / Shop / Blog architecture.",
      challenge: "The brand needed a moody, high-end dark storefront that stands out in a niche market while keeping every section fully editable for non-technical staff.",
      solution: "Built a custom section-based OS 2.0 theme with an editable hero, brand typography system, dynamic product landing blocks, and German-first content structure.",
      results: [
        "Premium dark brand experience delivered on Shopify OS 2.0",
        "Fully editable sections — no code needed for daily content updates",
        "Fast, responsive layout across home, shop, blog, and info pages"
      ],
      metrics: [
        { label: "Lighthouse", value: "95+" },
        { label: "Bounce Rate", value: "-24%" },
        { label: "Mobile CVR", value: "+18%" }
      ],
      image: "images/prime-cuts.png",
      githubUrl: "https://github.com/jisanaddicted/primecuts-theme-",
      previewUrl: "https://zindexstore.myshopify.com/",
      previewPassword: "1",
      technologies: ["Shopify Liquid", "OS 2.0 Sections", "JavaScript (ES6+)", "Tailwind CSS"],
      featured: true,
      completionDate: "2026-09-05"
    }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Senior Shopify & Hydrogen Developer",
      company: "E-Com Elite Agency",
      period: "2025 - Present",
      description: "Building custom Liquid themes and headless Hydrogen storefronts for DTC brands that need speed without giving up merchandising control.",
      highlights: [
        "Delivered 6+ headless Hydrogen migrations, with Lighthouse scores averaging 95+ at launch.",
        "Built embedded apps and private integrations for ERP, CRM, and 3PL warehouse clients.",
        "Work directly with founders on scoping and shipping — no agency sales layer, no handoff to a junior team after the pitch."
      ],
      skillsUsed: ["Shopify Plus", "Hydrogen", "GraphQL API", "React", "Theme Architecture"]
    },
    {
      id: "exp-2",
      role: "Shopify Developer",
      company: "DigitalCraft Commerce",
      period: "2024 - 2025",
      description: "Custom theme development, app integrations, and speed optimization audits for mid-market DTC merchants.",
      highlights: [
        "Optimized 15+ stores, lifting average Google Lighthouse performance scores from 45 to 95+.",
        "Created reusable section component libraries adopted across 12+ client stores.",
        "Led OS 2.0 migrations that meaningfully cut daily editing time for non-technical marketing teams."
      ],
      skillsUsed: ["Shopify Liquid", "Node.js", "React", "REST/GraphQL APIs", "Performance Tuning"]
    },
    {
      id: "exp-3",
      role: "Frontend Developer (E-Commerce)",
      company: "RetailBoost Media",
      period: "2023 - 2024",
      description: "Where it started — designing conversion-focused Shopify storefronts and running CRO experiments for growing brands.",
      highlights: [
        "Executed A/B tests that lifted store conversion rates by an average of 18%.",
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
        { name: "Shopify Liquid (Templating)", level: 95, description: "Shopify's frontend templating language — objects, tags, filters, and control-flow logic for building dynamic storefront sections." },
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
      content: "Jisan is phenomenal. Our migration to Shopify Hydrogen was seamless, and the speed improvements blew our team away. Our mobile conversion rate jumped 28% in the first month alone!",
      rating: 5,
      projectTitle: "Lumina Luxury - Headless Hydrogen Storefront"
    },
    {
      id: "test-2",
      clientName: "Sophia van der Berg",
      clientTitle: "Founder & Creative Director",
      company: "Velvet Apparel Co.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      content: "Finding a developer who understands both high-end design aesthetics and deep technical Shopify architecture is rare. Jisan delivered our OS 2.0 theme ahead of schedule with flawless code.",
      rating: 5,
      projectTitle: "Velvet Threads - Custom Theme & Checkout Extensibility"
    },
    {
      id: "test-3",
      clientName: "David Chen",
      clientTitle: "Chief Operations Officer",
      company: "Global Logistics Partners",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      content: "Jisan built a custom ERP sync app that solved our multi-warehouse inventory nightmares. Absolute professional with top-tier communication and engineering rigor.",
      rating: 5,
      projectTitle: "SyncPro - ERP & Multi-Warehouse Inventory App"
    }
  ]
};

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCode, FaRocket, FaChevronRight, 
  FaShieldAlt, FaChartBar, FaBrain, FaCloud 
} from 'react-icons/fa';
import SpotlightCard from '../ui/SpotlightCard';

const services = [
  { 
    id: "ai",
    category: "AI & CLOUD",
    title: "AI & AUTONOMOUS SYSTEMS", 
    icon: FaBrain,
    color: "from-[#ccff00] to-emerald-500",
    path: "/services/ai-automation",
    desc: "We bridge the gap between reactive models and predictive powerhouses. Our neural networks learn, adapt, and optimize high-stakes business logic with sub-millisecond precision.",
    features: ["Predictive Analytics", "NLP & Computer Vision", "Cognitive Automation"]
  },
  { 
    id: "cloud",
    category: "AI & CLOUD",
    title: "CLOUD FORGE & INFRASTRUCTURE", 
    icon: FaCloud,
    color: "from-cyan-400 to-blue-500",
    path: "/services/software",
    desc: "Designing zero-latency, infinitely scalable environments. We treat infrastructure as code, deploying hardened multi-cloud orchestrations that eliminate downtime globally.",
    features: ["Serverless Architecture", "Kubernetes Orchestration", "Multi-Cloud Security"]
  },
  { 
    id: "data",
    category: "ENGINEERING",
    title: "DATA INTEL & ANALYTICS", 
    icon: FaChartBar,
    color: "from-purple-500 to-pink-500",
    path: "/services/data-intelligence",
    desc: "Data is raw material; we refine it into strategic fuel. We build high-speed ETL pipelines and real-time telemetry dashboards that process petabytes into actionable insights.",
    features: ["Big Data Processing", "Real-time Telemetry", "Decision Support Systems"]
  },
  { 
    id: "security",
    category: "SECURITY",
    title: "CYBER-DEFENSE & PROTOCOLS", 
    icon: FaShieldAlt,
    color: "from-red-500 to-orange-500",
    path: "/services/security",
    desc: "Security is our foundation. We implement zero-trust frameworks and AES-256 encryption standards to neutralize threats before they reach your network perimeter.",
    features: ["Zero-Trust Architectures", "AES-256 Hardening", "Penetration Testing"]
  },
  { 
    id: "web",
    category: "ENGINEERING",
    title: "HIGH-CLASS WEB ENGINEERING", 
    icon: FaCode,
    color: "from-indigo-500 to-blue-700",
    path: "/services/web-dev",
    desc: "Developing high-performance software that doesn't just work—it dominates. We build bespoke ERP, CRM, and SaaS products using a performance-first engineering DNA.",
    features: ["Performance WebApps", "Bespoke ERP/CRM", "API Ecosystems"]
  },
  { 
    id: "products",
    category: "ENGINEERING",
    title: "PRODUCT FORGE & STRATEGY", 
    icon: FaRocket,
    color: "from-amber-400 to-orange-600",
    path: "/services/consulting",
    desc: "Digital transformation isn't a buzzword; it's our roadmap. We take ownership of the entire product lifecycle from initial MVP prototyping to global release management.",
    features: ["Full Lifecycle Ownership", "Agile DevOps Integration", "Iterative ROI Cycles"]
  }
];

const categories = ["ALL", "AI & CLOUD", "SECURITY", "ENGINEERING"];

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredServices = activeCategory === "ALL" 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <section className="py-12 sm:py-20 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-[#ccff00] font-mono tracking-[0.4em] text-[9px] sm:text-[10px] mb-4 uppercase font-bold">
              <span className="w-8 h-px bg-[#ccff00]" /> SYSTEM_CAPABILITIES
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white uppercase italic leading-[0.9]">
              THE <span className="text-zinc-600">ARSENAL.</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-[9px] font-mono uppercase tracking-widest transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#ccff00] text-black font-black shadow-[0_0_15px_rgba(204,255,0,0.3)]'
                    : 'bg-zinc-950/80 text-zinc-400 border border-white/5 hover:border-white/20 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        {/* Animated Services Grid with Spotlight Cards */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link to={service.path} className="block h-full">
                    <SpotlightCard className="h-full flex flex-col justify-between group">
                      <div>
                        {/* Icon Cluster */}
                        <div className="flex justify-between items-start mb-6">
                          <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-black text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                            <Icon />
                          </div>
                          <span className="text-[10px] font-mono text-zinc-600">0{index + 1}</span>
                        </div>

                        <h3 className="text-lg sm:text-xl font-black text-white leading-tight mb-3 tracking-tight uppercase group-hover:text-[#ccff00] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                          {service.desc}
                        </p>
                      </div>

                      <div>
                        {/* Feature Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {service.features.map((feature, fIndex) => (
                            <span key={fIndex} className="text-[8px] sm:text-[9px] font-mono py-1 px-2.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/5">
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* Status Indicator */}
                        <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                            <span className="text-[8px] sm:text-[9px] uppercase tracking-widest font-black text-zinc-500">
                              DEPLOY_MODULE
                            </span>
                          </div>
                          <FaChevronRight className="text-zinc-600 group-hover:text-[#ccff00] group-hover:translate-x-1 transition-all" size={10} />
                        </div>
                      </div>
                    </SpotlightCard>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
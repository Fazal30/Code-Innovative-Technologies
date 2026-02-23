import { motion } from 'framer-motion';
import { 
  FaCode, FaLightbulb, FaRocket, FaChevronRight, 
  FaShieldAlt, FaChartBar, FaBrain, FaCloud 
} from 'react-icons/fa';

const services = [
  { 
    title: "AI & AUTONOMOUS SYSTEMS", 
    icon: <FaBrain />,
    color: "from-[#ccff00] to-emerald-500",
    glow: "shadow-[#ccff00]/10",
    desc: "We bridge the gap between reactive models and predictive powerhouses. Our neural networks learn, adapt, and optimize high-stakes business logic with sub-millisecond precision.",
    features: ["Predictive Analytics", "NLP & Computer Vision", "Cognitive Automation"]
  },
  { 
    title: "CLOUD FORGE & INFRASTRUCTURE", 
    icon: <FaCloud />,
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-400/10",
    desc: "Designing zero-latency, infinitely scalable environments. We treat infrastructure as code, deploying hardened multi-cloud orchestrations that eliminate downtime globally.",
    features: ["Serverless Architecture", "Kubernetes Orchestration", "Multi-Cloud Security"]
  },
  { 
    title: "DATA INTEL & ANALYTICS", 
    icon: <FaChartBar />,
    color: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/10",
    desc: "Data is raw material; we refine it into strategic fuel. We build high-speed ETL pipelines and real-time telemetry dashboards that process petabytes into actionable insights.",
    features: ["Big Data Processing", "Real-time Telemetry", "Decision Support Systems"]
  },
  { 
    title: "CYBER-DEFENSE & PROTOCOLS", 
    icon: <FaShieldAlt />,
    color: "from-red-500 to-orange-500",
    glow: "shadow-red-500/10",
    desc: "Security is our foundation. We implement zero-trust frameworks and AES-256 encryption standards to neutralize threats before they reach your network perimeter.",
    features: ["Zero-Trust Architectures", "AES-256 Data Hardening", "Penetration Testing"]
  },
  { 
    title: "HIGH-CLASS ENGINEERING", 
    icon: <FaCode />,
    color: "from-indigo-500 to-blue-700",
    glow: "shadow-indigo-500/10",
    desc: "Developing high-performance software that doesn't just work—it dominates. We build bespoke ERP, CRM, and SaaS products using a performance-first engineering DNA.",
    features: ["Performance-First WebApps", "Bespoke ERP/CRM", "API Ecosystems"]
  },
  { 
    title: "PRODUCT FORGE & STRATEGY", 
    icon: <FaRocket />,
    color: "from-amber-400 to-orange-600",
    glow: "shadow-amber-400/10",
    desc: "Digital transformation isn't a buzzword; it's our roadmap. We take ownership of the entire product lifecycle from initial MVP prototyping to global release management.",
    features: ["Full Lifecycle Ownership", "Agile DevOps Integration", "Iterative ROI Cycles"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function ServicesGrid() {
  return (
    <section className="py-24 bg-transparent relative">
      
      {/* SECTION LABEL IN BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none -z-10 overflow-hidden">
        <h2 className="text-[25vw] font-black text-white/[0.01] select-none tracking-tighter uppercase leading-none">
          ARSENAL
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER AREA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-[#ccff00] font-mono tracking-[0.4em] text-[10px] mb-6 uppercase"
            >
              <span className="w-8 h-px bg-[#ccff00]" /> SYSTEM_CAPABILITIES
            </motion.div>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-[0.85]">
              DOMINATE THE <br />
              <span className="text-zinc-700">DIGITAL</span> FRONTIER.
            </h2>
          </div>
          <div className="hidden lg:block text-right">
             <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest leading-loose">
               Total Protocols: 06 <br /> Status: Ready_for_Deployment <br /> Version: 2026.4
             </p>
          </div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`relative bg-zinc-950 border border-white/5 p-8 rounded-[2rem] transition-all duration-500 group overflow-hidden hover:border-[#ccff00]/20`}
            >
              {/* Subtle Scanning Light Effect on Hover */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#ccff00]/20 animate-scan-slow" />
              </div>

              {/* Icon Cluster */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-black text-xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <span className="text-[10px] font-mono text-zinc-700">0{index + 1}</span>
              </div>

              <h3 className="text-xl font-black text-white leading-tight mb-4 tracking-tight uppercase group-hover:text-[#ccff00] transition-colors relative z-10">
                {service.title}
              </h3>

              <p className="text-zinc-500 text-sm leading-relaxed mb-8 relative z-10">
                {service.desc}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                {service.features.map((feature, fIndex) => (
                  <span key={fIndex} className="text-[9px] font-mono py-1 px-3 rounded-full bg-white/[0.03] text-zinc-400 border border-white/5 group-hover:border-white/10 transition-colors">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Status Indicator */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                  <span className="text-[9px] uppercase tracking-widest font-black text-zinc-600">Active_Protocol</span>
                </div>
                <FaChevronRight className="text-zinc-700 group-hover:text-[#ccff00] transition-colors" size={12} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scan-slow {
          0% { transform: translateY(0); }
          100% { transform: translateY(400px); }
        }
        .animate-scan-slow {
          animation: scan-slow 4s linear infinite;
        }
      `}</style>
    </section>
  );
}
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCode, FaRobot, FaMicrochip, FaDatabase, 
  FaUserShield, FaAppStoreIos, FaEthereum, FaLightbulb,
  FaTerminal, FaLongArrowAltRight
} from 'react-icons/fa';
import SpotlightCard from '../components/ui/SpotlightCard';

const techSectors = [
  {
    title: "Web Engineering",
    path: "/services/web-dev",
    icon: FaCode,
    desc: "Next-gen web architectures using React, Next.js, and high-performance V8 optimization.",
    tags: ["React", "TypeScript", "SSR", "Edge"],
    color: "#3b82f6"
  },
  {
    title: "AI & Automation",
    path: "/services/ai-automation",
    icon: FaRobot,
    desc: "Autonomous RPA workflows and LLM integrations that remove human friction from scale.",
    tags: ["LLMs", "Python", "PyTorch", "RPA"],
    color: "#ccff00"
  },
  {
    title: "Software Core",
    path: "/services/software",
    icon: FaMicrochip,
    desc: "Enterprise-grade system software built for high-concurrency and mission-critical uptime.",
    tags: ["Rust", "Go", "C++", "Architecture"],
    color: "#a855f7"
  },
  {
    title: "Data Intelligence",
    path: "/services/data-intelligence",
    icon: FaDatabase,
    desc: "Real-time telemetry and predictive analytics to turn raw data into strategic dominance.",
    tags: ["Big Data", "Spark", "NoSQL", "ETL"],
    color: "#f97316"
  },
  {
    title: "Strategic Consulting",
    path: "/services/consulting",
    icon: FaLightbulb,
    desc: "Digital transformation roadmaps for businesses ready to override legacy limitations.",
    tags: ["Audit", "Scale", "Roadmap", "UX"],
    color: "#06b6d4"
  },
  {
    title: "Cyber Defense",
    path: "/services/security",
    icon: FaUserShield,
    desc: "Zero-trust encryption and AES-256 hardening to keep digital assets invisible to threats.",
    tags: ["Pentest", "SSL", "E2E", "IAM"],
    color: "#ef4444"
  },
  {
    title: "Mobile Protocols",
    path: "/services/app-dev",
    icon: FaAppStoreIos,
    desc: "Native-performance mobile applications with fluid UX for iOS and Android ecosystems.",
    tags: ["Flutter", "Swift", "Kotlin", "Native"],
    color: "#10b981"
  },
  {
    title: "Web3 & Blockchain",
    path: "/services/web3",
    icon: FaEthereum,
    desc: "Decentralized protocols and smart contract engineering for the future of ownership.",
    tags: ["Solidity", "dApps", "IPFS", "DeFi"],
    color: "#ec4899"
  }
];

export default function TechHub() {
  return (
    <div className="min-h-screen bg-transparent text-white pt-32 sm:pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-[#ccff00] font-mono text-[9px] sm:text-xs tracking-[0.4em] uppercase mb-4 font-bold">
            <FaTerminal /> System_Stack_v4.2
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-[0.85]">
            Technological <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-[#ccff00] to-zinc-600">
              Superiority.
            </span>
          </h1>
        </div>

        {/* TECH GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {techSectors.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <Link 
                key={idx}
                to={tech.path}
                className="block group h-full"
              >
                <SpotlightCard className="h-full flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div 
                        className="w-11 h-11 rounded-xl bg-zinc-900 flex items-center justify-center text-lg group-hover:scale-110 transition-transform"
                        style={{ color: tech.color }}
                      >
                        <Icon />
                      </div>
                      <span className="text-[8px] font-mono text-zinc-600">ID:00{idx + 1}</span>
                    </div>

                    <h3 className="text-lg font-black uppercase tracking-tight mb-2 group-hover:text-[#ccff00] transition-colors">
                      {tech.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light">
                      {tech.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {tech.tags.map(tag => (
                        <span key={tag} className="text-[8px] font-mono border border-white/5 bg-white/[0.02] px-2 py-0.5 rounded-md uppercase text-zinc-500">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action */}
                    <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-[#ccff00] pt-3 border-t border-white/5">
                      <span>Deploy Sector</span>
                      <FaLongArrowAltRight className="group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            );
          })}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-zinc-950/80 border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 shadow-2xl">
          <div>
            <h4 className="text-2xl sm:text-3xl font-black uppercase italic mb-2 text-white">Need a Custom Protocol?</h4>
            <p className="text-zinc-400 font-mono text-xs sm:text-sm">Our labs are open for bespoke enterprise architecture development.</p>
          </div>
          <Link 
            to="/contact"
            className="w-full md:w-auto text-center px-8 py-4 bg-[#ccff00] text-black font-black uppercase tracking-[0.25em] text-xs rounded-xl hover:bg-white transition-all shadow-xl active:scale-95 whitespace-nowrap"
          >
            Initiate Consultation
          </Link>
        </div>

      </div>
    </div>
  );
}
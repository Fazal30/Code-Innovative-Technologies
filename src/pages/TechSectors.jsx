import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCode, FaRobot, FaMicrochip, FaDatabase, 
  FaUserShield, FaAppStoreIos, FaEthereum, FaLightbulb,
  FaTerminal, FaLongArrowAltRight
} from 'react-icons/fa';

const techSectors = [
  {
    title: "Web Engineering",
    path: "/services/web-dev",
    icon: <FaCode />,
    desc: "Next-gen web architectures using React, Next.js, and high-performance V8 optimization.",
    tags: ["React", "TypeScript", "SSR", "Edge"],
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "AI & Automation",
    path: "/services/ai-automation",
    icon: <FaRobot />,
    desc: "Autonomous RPA workflows and LLM integrations that remove human friction from scale.",
    tags: ["LLMs", "Python", "PyTorch", "RPA"],
    color: "from-[#ccff00]/20 to-transparent"
  },
  {
    title: "Software Core",
    path: "/services/software",
    icon: <FaMicrochip />,
    desc: "Enterprise-grade system software built for high-concurrency and mission-critical uptime.",
    tags: ["Rust", "Go", "C++", "Architecture"],
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Data Intelligence",
    path: "/services/data-intelligence",
    icon: <FaDatabase />,
    desc: "Real-time telemetry and predictive analytics to turn raw data into strategic dominance.",
    tags: ["Big Data", "Spark", "NoSQL", "ETL"],
    color: "from-orange-500/20 to-transparent"
  },
  {
    title: "Strategic Consulting",
    path: "/services/consulting",
    icon: <FaLightbulb />,
    desc: "Digital transformation roadmaps for businesses ready to override legacy limitations.",
    tags: ["Audit", "Scale", "Roadmap", "UX"],
    color: "from-cyan-500/20 to-transparent"
  },
  {
    title: "Cyber Defense",
    path: "/services/security",
    icon: <FaUserShield />,
    desc: "Zero-trust encryption and AES-256 hardening to keep digital assets invisible to threats.",
    tags: ["Pentest", "SSL", "E2E", "IAM"],
    color: "from-red-500/20 to-transparent"
  },
  {
    title: "Mobile Protocols",
    path: "/services/app-dev",
    icon: <FaAppStoreIos />,
    desc: "Native-performance mobile applications with fluid UX for iOS and Android ecosystems.",
    tags: ["Flutter", "Swift", "Kotlin", "Native"],
    color: "from-green-500/20 to-transparent"
  },
  {
    title: "Web3 & Blockchain",
    path: "/services/web3",
    icon: <FaEthereum />,
    desc: "Decentralized protocols and smart contract engineering for the future of ownership.",
    tags: ["Solidity", "dApps", "IPFS", "DeFi"],
    color: "from-pink-500/20 to-transparent"
  }
];

export default function TechHub() {
  return (
    <div className="min-h-screen bg-[#020202] text-white pt-32 pb-20 px-6 overflow-hidden">
      
      {/* --- BACKGROUND HUD ELEMENTS --- */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#1a1a1a_0%,_transparent_70%)]" />
        <div className="absolute w-full h-px bg-white/5 top-1/4" />
        <div className="absolute w-full h-px bg-white/5 top-2/4" />
        <div className="absolute w-full h-px bg-white/5 top-3/4" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER SECTION */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 text-[#ccff00] font-mono text-xs tracking-[0.5em] uppercase mb-6"
          >
            <FaTerminal /> System_Stack_v4.0
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase leading-[0.85]">
            Technological <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-700">Superiority.</span>
          </h1>
        </div>

        {/* TECH GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {techSectors.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={tech.path}
                className="group block relative h-full p-8 rounded-[2rem] bg-zinc-900/40 border border-white/5 hover:border-[#ccff00]/40 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Glow Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Icon & Title */}
                <div className="relative z-10">
                  <div className="text-3xl text-zinc-500 group-hover:text-[#ccff00] transition-colors mb-6 group-hover:scale-110 duration-500 inline-block">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {tech.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-8 font-medium">
                    {tech.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {tech.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono border border-white/10 px-2 py-1 rounded-md uppercase tracking-widest text-zinc-600 group-hover:text-zinc-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Deploy Sector <FaLongArrowAltRight className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 text-[8px] font-mono text-white/10 group-hover:text-[#ccff00]/40">
                  ID:00{idx + 1}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CALL TO ACTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-zinc-900 to-transparent border border-white/5 flex flex-col md:flex-row justify-between items-center gap-10"
        >
          <div>
            <h4 className="text-3xl font-black uppercase italic italic mb-2">Need a Custom Protocol?</h4>
            <p className="text-zinc-500 font-mono text-sm">Our labs are open for bespoke architecture development.</p>
          </div>
          <Link 
            to="/contact"
            className="px-10 py-5 bg-[#ccff00] text-black font-black uppercase tracking-[0.3em] text-xs rounded-2xl hover:bg-white transition-colors"
          >
            Initiate Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaCube, FaLink, FaVoteYea, FaHandHoldingUsd, FaLayerGroup, 
  FaShieldAlt, FaTerminal, FaNetworkWired, FaCoins, FaLock 
} from 'react-icons/fa';

const Web3 = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVars = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const protocols = [
    "ERC-20", "ERC-721", "ERC-1155", "EIP-1559", "SOLIDITY_0.8.20", 
    "ZK_PROOFS", "LAYER_2_SCALING", "IPFS_STORAGE", "HARDHAT_V2"
  ];

  return (
    <div className="bg-[#020202] text-white min-h-screen pt-40 pb-20 selection:bg-[#ccff00] selection:text-black overflow-hidden">
      
      {/* 1. BACKGROUND KINETIC GRID */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
        <motion.div style={{ y: yRange }} className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#06b6d415_0%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. HERO SECTION WITH STAGGERED REVEAL */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={containerVars}
          className="mb-32"
        >
          <motion.span variants={itemVars} className="text-cyan-500 font-mono text-[10px] tracking-[0.6em] uppercase mb-6 block font-black">
            // PROTOCOL_DECENTRAL_MESH_ACTIVE
          </motion.span>
          <motion.h1 variants={itemVars} className="text-[12vw] md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-10 italic uppercase">
            BLOCKCHAIN <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 animate-gradient-x">
              ENGINEERING.
            </span>
          </motion.h1>
          <motion.p variants={itemVars} className="text-zinc-500 text-xl md:text-2xl font-light max-w-4xl leading-relaxed border-l-2 border-cyan-900 pl-8">
            Deploying immutable logic for the next generation of value exchange. We architect 
            <span className="text-white"> Layer-1 protocols</span>, 
            <span className="text-white"> DeFi liquidity engines</span>, and 
            <span className="text-white"> Cross-chain bridges</span> that process mission-critical transactions at global scale.
          </motion.p>
        </motion.div>

        {/* 3. LIVE PROTOCOL TICKER */}
        <div className="mb-40 py-6 border-y border-white/5 flex overflow-hidden whitespace-nowrap bg-zinc-950/50 backdrop-blur-sm">
          <motion.div 
            animate={{ x: [0, -1000] }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-12 items-center"
          >
            {[...protocols, ...protocols].map((p, i) => (
              <span key={i} className="font-mono text-[9px] text-cyan-500/50 tracking-widest flex items-center gap-2">
                <FaCube className="text-[6px]" /> {p}
              </span>
            ))}
          </motion.div>
        </div>

        {/* 4. CORE CAPABILITIES (GRID) */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVars}
          className="grid md:grid-cols-3 gap-8 mb-40"
        >
          {[
            { 
              title: "Smart Contracts", 
              icon: <FaLink />, 
              color: "cyan", 
              desc: "Security-first Solidity & Rust development with formal verification and exhaustive Gas optimization." 
            },
            { 
              title: "DeFi Liquidity", 
              icon: <FaHandHoldingUsd />, 
              color: "blue", 
              desc: "Automated Market Makers (AMM), Lending Protocols, and Yield Aggregators engineered for stability." 
            },
            { 
              title: "DAO Governance", 
              icon: <FaVoteYea />, 
              color: "indigo", 
              desc: "Decentralized autonomous organizational structures with on-chain voting and treasury management." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={itemVars}
              whileHover={{ y: -10, borderColor: 'rgba(6, 182, 212, 0.4)' }} 
              className="p-12 bg-zinc-950/50 border border-white/5 rounded-[2.5rem] relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <FaNetworkWired className="text-8xl text-cyan-500" />
              </div>
              <div className={`text-3xl mb-8 flex text-${item.color}-400 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter italic">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">{item.desc}</p>
              <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest">Audited_By_Core</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 5. DEEP TECH SECTION (MISSION CRITICAL) */}
        <section className="mb-40 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
              SECURITY <br /> BY <span className="text-cyan-500">DEFAULT.</span>
            </h2>
            <div className="space-y-6">
              {[
                { label: "Formal Verification", val: "Mathematical proof of contract logic." },
                { label: "ZK-Rollups", val: "L2 scaling without compromising L1 security." },
                { label: "Multi-Sig Ops", val: "Institutional-grade treasury controls." }
              ].map((spec, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <FaLock />
                  </div>
                  <div>
                    <h5 className="font-black uppercase text-sm tracking-widest">{spec.label}</h5>
                    <p className="text-zinc-500 text-sm italic">{spec.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
            <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[3rem]">
              <div className="bg-[#050505] p-12 rounded-[2.9rem] border border-white/5">
                <div className="flex justify-between items-center mb-10">
                  <FaTerminal className="text-zinc-800" />
                  <span className="text-[10px] font-mono text-cyan-500">UPLINK_STATUS: SECURE</span>
                </div>
                <div className="font-mono text-[11px] space-y-3 text-zinc-400">
                  <p className="text-green-500 font-bold">&gt; INITIALIZING_SMART_CONTRACT_AUDIT...</p>
                  <p>&gt; RUNNING_STATIC_ANALYSIS... (SLITHER_V0.1)</p>
                  <p>&gt; DETECTING_REENTRANCY_VULNS... [0_FOUND]</p>
                  <p>&gt; CHECKING_OWNERSHIP_PRIVILEGES... [VERIFIED]</p>
                  <p className="text-cyan-500 font-bold">&gt; DEPLOYMENT_READY: MAINNET_BETA_V4</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 6. ECOSYSTEM STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Value Managed", val: "$1.2B+" },
            { label: "Contract Audits", val: "250+" },
            { label: "Average Gas Savings", val: "35%" },
            { label: "Uptime Protocol", val: "99.99%" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              className="p-8 border border-white/5 rounded-3xl text-center"
            >
              <h4 className="text-3xl md:text-5xl font-black mb-2 tracking-tighter italic">{stat.val}</h4>
              <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-move 5s ease infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Web3;
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCube, FaLink, FaVoteYea, FaHandHoldingUsd, 
  FaShieldAlt, FaTerminal, FaNetworkWired, FaCoins, FaLock, FaChevronRight 
} from 'react-icons/fa';
import SpotlightCard from '../../components/ui/SpotlightCard';
import Counter from '../../components/ui/Counter';

const web3Pillars = [
  { 
    title: "Smart Contracts & Verification", 
    icon: FaLink, 
    desc: "Security-first Solidity, Rust (Solana/Near), and Vyper development with mathematical formal verification and exhaustive gas optimization.",
    color: "#00e5ff"
  },
  { 
    title: "DeFi Liquidity Protocols", 
    icon: FaHandHoldingUsd, 
    desc: "Automated Market Makers (AMM), non-custodial lending pools, and cross-chain yield aggregators engineered for extreme state stability.",
    color: "#3b82f6"
  },
  { 
    title: "DAO Governance & Treasuries", 
    icon: FaVoteYea, 
    desc: "Decentralized autonomous organization architectures with multi-sig execution, quadratic voting, and automated on-chain treasury controls.",
    color: "#a855f7"
  },
  { 
    title: "Zero-Knowledge & L2 Rollups", 
    icon: FaShieldAlt, 
    desc: "ZK-SNARK and Optimistic rollup integrations delivering massive horizontal throughput without sacrificing Layer-1 cryptographic security.",
    color: "#ccff00"
  }
];

export default function Web3() {
  return (
    <article className="bg-transparent text-white min-h-screen pt-32 sm:pt-40 pb-20 selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="mb-20 sm:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-cyan-500 rounded-full" />
            <span className="text-cyan-400 font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-bold">
              Service_Dossier // Blockchain_Mesh
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
            DECENTRALIZED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-[#ccff00]">
              PROTOCOLS.
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-8 text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Deploying immutable state logic for the next generation of value exchange. We architect <span className="text-white font-bold">Layer-1 protocols, DeFi engines, and Cross-Chain bridges</span> that process mission-critical transactions globally.
            </p>

            <div className="md:col-span-4 flex gap-4">
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-cyan-400 text-2xl sm:text-3xl font-black font-mono">
                  $1.2B+
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">TVL Processed</div>
              </div>
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-[#ccff00] text-2xl sm:text-3xl font-black font-mono">
                  250+
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Smart Audits</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. CAPABILITIES GRID --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Protocol <span className="text-cyan-400 italic">Engineering.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Audited, formally verified decentralized architecture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {web3Pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard key={idx} className="group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div 
                        className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-lg"
                        style={{ color: item.color }}
                      >
                        <Icon />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500 bg-zinc-900/80 px-2.5 py-1 rounded border border-white/5 uppercase">
                        WEB3_0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* --- 3. ACTION CALLOUT --- */}
        <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-[#080808] to-black border border-white/10 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase italic text-white">
            Architect Your <span className="text-cyan-400">Web3 Protocol.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-widest mb-8 uppercase text-zinc-400 max-w-md mx-auto">
            Book a smart contract architecture review with our lead blockchain engineers.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ccff00] text-black rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.25)]"
          >
            Initiate Protocol Build <FaChevronRight size={10} />
          </Link>
        </div>

      </div>
    </article>
  );
}
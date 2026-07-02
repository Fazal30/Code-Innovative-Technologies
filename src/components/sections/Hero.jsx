import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowRight, FaCode, FaMicrochip, FaGlobe, 
  FaSatellite, FaShieldAlt, FaBolt, FaTerminal, FaNetworkWired
} from 'react-icons/fa';
import { MdSettingsInputComponent, MdSecurity, MdMemory, MdDataExploration } from 'react-icons/md';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('sys_log');
  const [glitchText, setGlitchText] = useState('SUPREMACY.');

  // Subtle title glitch effect matrix
  useEffect(() => {
    const phrases = ['SUPREMACY.', 'SOVEREIGNTY.', 'PERMANENCE.', 'SUPREMACY.'];
    let i = 0;
    const interval = setInterval(() => {
      setGlitchText(phrases[i % phrases.length]);
      i++;
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-36 pb-24 px-4 md:px-12 bg-[#020202] selection:bg-[#ccff00] selection:text-black">
      
      {/* --- LAYER 0: QUANTUM MATRIX TECH GRID --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,#ccff0007_0%,transparent_70%)]" />
        
        {/* Multilingual Sub-Nodes */}
        <div className="absolute right-6 top-1/4 space-y-12 text-[7px] font-mono text-zinc-800 tracking-[0.4em] uppercase vertical-text hidden xl:block select-none">
          <span className="hover:text-[#ccff00]/30 transition-colors cursor-default">システム初期化 // SYS_INIT</span>
          <span className="hover:text-cyan-500/30 transition-colors cursor-default">NET_STACK_SECURE [AES_256]</span>
          <span className="hover:text-emerald-400/30 transition-colors cursor-default">KONTROLLE_ERLAUBT // DE_NODE</span>
        </div>

        <div className="absolute left-6 bottom-1/4 space-y-12 text-[7px] font-mono text-zinc-800 tracking-[0.4em] uppercase vertical-text hidden xl:block select-none">
          <span>LATENCY_STABLE_0.8MS</span>
          <span>QUANTUM_ENCRYPTION_LAYER</span>
        </div>
      </div>

      {/* --- MAIN BACKBONE CONTAINER --- */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* --- LEFT HAND: STRATEGIC TERMINAL CONTROLS (Col 1-7) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-10 order-2 lg:order-1"
        >
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-2 font-mono text-[8px] tracking-[0.4em] text-[#ccff00] bg-[#ccff00]/5 px-4 py-1.5 rounded-sm border border-[#ccff00]/20 backdrop-blur-md">
                <FaTerminal className="animate-pulse" /> CORE_INIT_v4.2.0_STABLE
              </span>
              <span className="font-mono text-[8px] tracking-[0.4em] text-zinc-500 border border-white/5 px-3 py-1.5 rounded-sm uppercase">
                Node: Asia_North
              </span>
            </div>

            <h1 className="text-[12vw] sm:text-[14vw] lg:text-[5.5rem] xl:text-[6.2rem] font-black leading-[0.85] tracking-tighter uppercase italic text-white">
              ARCHITECTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-emerald-400 to-cyan-400 drop-shadow-[0_0_30px_rgba(204,255,0,0.15)]">
                {glitchText}
              </span>
            </h1>
          </div>

          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl leading-relaxed border-l-2 border-[#ccff00]/40 pl-6 text-justify font-light tracking-wide">
            We build sovereign distributed ledger protocols and ultra-low latency infrastructure modules. Through hyper-optimized custom kernel design and complete technical simplification, we unlock enterprise compute scale that feels mathematically impossible.
          </p>

          {/* Action Interface Hub */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-md pt-2">
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(204,255,0,0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#ccff00] text-black font-mono font-black text-[10px] tracking-[0.3em] uppercase rounded-sm flex items-center justify-center gap-3 transition-all"
            >
              EXECUTE_PROJECT <FaBolt className="text-sm" />
            </motion.a>
            
            <a 
              href="/career"
              className="px-8 py-4 border border-white/10 text-zinc-300 font-mono font-black text-[10px] tracking-[0.3em] uppercase rounded-sm bg-white/[0.01] hover:bg-white/5 hover:text-white hover:border-[#ccff00]/30 transition-all flex items-center justify-center gap-3 group"
            >
              DECONSTRUCT_STACK <FaArrowRight size={8} className="text-[#ccff00] group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>

          {/* Core Hardware Metrics Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/5">
            {[
              { label: "Core_Throughput", val: "40 Gb/sec", icon: FaSatellite, color: "text-[#ccff00]" },
              { label: "Fail_Protection", val: "Active_SLA", icon: FaShieldAlt, color: "text-emerald-400" },
              { label: "Network_Topology", val: "Mesh_Edge", icon: FaNetworkWired, color: "text-cyan-400" },
              { label: "Compute_Efficiency", val: "99.997%", icon: FaMicrochip, color: "text-purple-400" }
            ].map((stat, i) => (
              <div key={i} className="p-3 bg-zinc-900/10 border border-white/[0.02] rounded-sm group hover:border-white/5 transition-colors">
                <div className="flex items-center gap-2 text-zinc-600 mb-2">
                  <stat.icon size={10} className={stat.color} />
                  <span className="text-[7.5px] font-mono uppercase tracking-widest block truncate">{stat.label}</span>
                </div>
                <p className="text-sm font-black text-white font-mono tracking-tight">{stat.val}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT HAND: INTERACTIVE MACHINE MATRICES (Col 8-12) --- */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:col-span-5 relative order-1 lg:order-2"
        >
          {/* Main Visual Terminal Wrapper */}
          <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto group z-10">
            
            {/* Structural Reticle Brackets */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-[3px] border-l-[3px] border-[#ccff00] z-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-[3px] border-r-[3px] border-cyan-400 z-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />

            {/* Micro Laser Sweep Bar */}
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-2xl">
               <motion.div 
                animate={{ y: ["-20%", "450%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#ccff00] to-transparent shadow-[0_0_20px_#ccff00]"
               />
            </div>

            {/* Image Canvas Frame */}
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-1000 shadow-2xl bg-zinc-950">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
                alt="Main Secure Infrastructure Node" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[3s]" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-black/30" />
            </div>

            {/* FLOAT INFRASTRUCTURE DATA WIDGET */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-6 p-4 bg-black/90 backdrop-blur-xl border border-white/10 rounded-sm shadow-2xl z-40 hidden sm:block w-48 font-mono"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[8px] text-zinc-400">
                  <span className="flex items-center gap-1"><MdMemory className="text-[#ccff00]" /> NODE_RAM</span>
                  <span className="text-white">14.2%</span>
                </div>
                <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["15%", "45%", "22%", "88%", "15%"] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-[#ccff00] to-emerald-400" 
                  />
                </div>
                <div className="flex justify-between items-center text-[7px] text-zinc-500 pt-1 border-t border-white/5">
                  <span>CORE_TEMP</span>
                  <span className="text-emerald-400 font-bold">34°C_NORM</span>
                </div>
              </div>
            </motion.div>

            {/* FOOTER TERMINAL ENGINE CONTROLLER */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[92%] bg-black/95 backdrop-blur-xl border border-white/10 rounded-sm z-40 font-mono text-[8px] overflow-hidden hidden sm:block shadow-2xl">
              <div className="flex border-b border-white/5 bg-zinc-950 px-3 py-1.5 gap-4">
                <button 
                  onClick={() => setActiveTab('sys_log')} 
                  className={`tracking-widest uppercase transition-colors ${activeTab === 'sys_log' ? 'text-[#ccff00]' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  [SYSTEM_LOG]
                </button>
                <button 
                  onClick={() => setActiveTab('net_spec')} 
                  className={`tracking-widest uppercase transition-colors ${activeTab === 'net_spec' ? 'text-cyan-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  [NET_SPEC]
                </button>
              </div>
              
              <div className="p-3 min-h-[64px] text-zinc-400 leading-normal">
                <AnimatePresence mode="wait">
                  {activeTab === 'sys_log' ? (
                    <motion.div
                      key="log"
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-0.5"
                    >
                      <p><span className="text-zinc-600">#</span> await cluster.verifyIntegrity();</p>
                      <p><span className="text-emerald-400">✓</span> <span className="text-zinc-300">INTEGRITY_PASSED // SHIELD_LEVEL_4</span></p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="spec"
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-0.5"
                    >
                      <p><span className="text-zinc-600">#</span> topology --map-edge-nodes</p>
                      <p><span className="text-cyan-400">»</span> <span className="text-zinc-300">24 ROUTING TARGETS STABLE // 0.8ms LATENCY</span></p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>

          {/* Geometric Tech Rings Background Accent */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-[#ccff00]/[0.02] rounded-full pointer-events-none animate-[spin_120s_linear_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-white/[0.01] rounded-full pointer-events-none animate-[spin_60s_linear_infinite_reverse]" />
        </motion.div>

      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </section>
  );
}
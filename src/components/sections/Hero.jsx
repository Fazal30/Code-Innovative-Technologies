import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, FaMicrochip, FaSatellite, 
  FaShieldAlt, FaBolt, FaTerminal, FaNetworkWired, FaCheckCircle
} from 'react-icons/fa';
import { MdMemory } from 'react-icons/md';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('sys_log');
  const [glitchText, setGlitchText] = useState('SUPREMACY.');

  // Smooth rotating tech keywords
  useEffect(() => {
    const phrases = ['SUPREMACY.', 'SOVEREIGNTY.', 'PERMANENCE.', 'INNOVATION.'];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % phrases.length;
      setGlitchText(phrases[i]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-12 bg-transparent selection:bg-[#ccff00] selection:text-black">
      
      {/* --- BACKGROUND ACCENTS --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(204,255,0,0.06)_0%,transparent_70%)]" />
      </div>

      {/* --- MAIN BACKBONE CONTAINER --- */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        
        {/* --- LEFT: STRATEGIC TERMINAL CONTROLS (Col 1-7) --- */}
        <motion.div 
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8 order-2 lg:order-1"
        >
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="flex items-center gap-2 font-mono text-[8px] sm:text-[9px] tracking-[0.3em] text-[#ccff00] bg-[#ccff00]/10 px-3.5 py-1.5 rounded-md border border-[#ccff00]/30 backdrop-blur-md">
                <FaTerminal className="animate-pulse" /> CORE_INIT_v4.2_STABLE
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.3em] text-zinc-400 border border-white/10 px-3 py-1.5 rounded-md uppercase">
                LATENCY: 0.02ms
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter uppercase italic text-white">
              ARCHITECTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-emerald-400 to-cyan-400">
                {glitchText}
              </span>
            </h1>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed border-l-2 border-[#ccff00]/50 pl-4 sm:pl-6 font-light">
            We build sovereign distributed systems, AI-driven automation architectures, and ultra-low latency infrastructure modules for forward-thinking enterprises.
          </p>

          {/* Action Interface Hub */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-md pt-2">
            <Link 
              to="/contact"
              className="px-7 py-4 bg-[#ccff00] text-black font-mono font-black text-[10px] tracking-[0.25em] uppercase rounded-xl flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(204,255,0,0.25)] hover:bg-white transition-all active:scale-95"
            >
              EXECUTE_PROJECT <FaBolt className="text-xs" />
            </Link>
            
            <Link 
              to="/tech"
              className="px-7 py-4 border border-white/10 text-zinc-300 font-mono font-black text-[10px] tracking-[0.25em] uppercase rounded-xl bg-white/[0.02] hover:bg-white/5 hover:text-white hover:border-[#ccff00]/40 transition-all flex items-center justify-center gap-2.5 group active:scale-95"
            >
              EXPLORE_ARSENAL <FaArrowRight size={8} className="text-[#ccff00] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Core Hardware Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-white/5">
            {[
              { label: "Core_Throughput", val: "40 Gb/sec", icon: FaSatellite, color: "text-[#ccff00]" },
              { label: "Fail_Protection", val: "Active_SLA", icon: FaShieldAlt, color: "text-emerald-400" },
              { label: "Network_Mesh", val: "Edge_Routed", icon: FaNetworkWired, color: "text-cyan-400" },
              { label: "Compute_SLA", val: "99.997%", icon: FaMicrochip, color: "text-purple-400" }
            ].map((stat, i) => (
              <div key={i} className="p-3.5 bg-zinc-950/80 border border-white/5 rounded-xl group hover:border-[#ccff00]/30 transition-all">
                <div className="flex items-center gap-2 text-zinc-500 mb-1.5">
                  <stat.icon size={10} className={stat.color} />
                  <span className="text-[8px] font-mono uppercase tracking-widest block truncate">{stat.label}</span>
                </div>
                <p className="text-xs sm:text-sm font-black text-white font-mono tracking-tight">{stat.val}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- RIGHT: INTERACTIVE MACHINE MATRICES (Col 8-12) --- */}
        <motion.div 
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 relative order-1 lg:order-2"
        >
          {/* Main Visual Terminal Wrapper */}
          <div className="relative aspect-[4/5] w-full max-w-[420px] mx-auto group z-10">
            
            {/* Structural Reticle Brackets */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-[#ccff00] z-20 group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan-400 z-20 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />

            {/* Image Canvas Frame */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" 
                alt="Main Secure Infrastructure Node" 
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-black/40" />
            </div>

            {/* FLOATING INFRASTRUCTURE DATA WIDGET */}
            <motion.div 
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 sm:-right-6 p-3.5 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-40 hidden sm:block w-44 font-mono"
            >
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-[8px] text-zinc-400">
                  <span className="flex items-center gap-1.5"><MdMemory className="text-[#ccff00]" /> NODE_LOAD</span>
                  <span className="text-white font-bold">14.2%</span>
                </div>
                <div className="h-[2px] w-full bg-zinc-900 rounded-full overflow-hidden">
                  <motion.div 
                    animate={{ width: ["15%", "55%", "30%", "75%", "15%"] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="h-full bg-gradient-to-r from-[#ccff00] to-cyan-400" 
                  />
                </div>
                <div className="flex justify-between items-center text-[7px] text-zinc-500 pt-1 border-t border-white/5">
                  <span>SYSTEM_HEALTH</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <FaCheckCircle size={7} /> OPTIMAL
                  </span>
                </div>
              </div>
            </motion.div>

            {/* FOOTER TERMINAL CONTROLLER */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[92%] bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl z-40 font-mono text-[8px] overflow-hidden shadow-2xl">
              <div className="flex border-b border-white/5 bg-zinc-950 px-3 py-1.5 gap-4">
                <button 
                  onClick={() => setActiveTab('sys_log')} 
                  className={`tracking-widest uppercase transition-colors cursor-pointer ${activeTab === 'sys_log' ? 'text-[#ccff00] font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  [SYSTEM_LOG]
                </button>
                <button 
                  onClick={() => setActiveTab('net_spec')} 
                  className={`tracking-widest uppercase transition-colors cursor-pointer ${activeTab === 'net_spec' ? 'text-cyan-400 font-bold' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  [NET_SPEC]
                </button>
              </div>
              
              <div className="p-3 min-h-[58px] text-zinc-400 leading-normal">
                <AnimatePresence mode="wait">
                  {activeTab === 'sys_log' ? (
                    <motion.div
                      key="log"
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-0.5"
                    >
                      <p className="text-zinc-500">&gt; cluster.verifySecurityLevel(4);</p>
                      <p><span className="text-[#ccff00]">✓</span> <span className="text-zinc-200">INTEGRITY_CHECK_PASSED // MIL_SPEC</span></p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="spec"
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-0.5"
                    >
                      <p className="text-zinc-500">&gt; mesh.getEdgeRoutingTargets();</p>
                      <p><span className="text-cyan-400">»</span> <span className="text-zinc-200">24 ROUTING TARGETS ACTIVE // 0.02ms</span></p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
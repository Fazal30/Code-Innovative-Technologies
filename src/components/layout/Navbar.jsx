import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaBars, FaTimes, FaCode, FaMicrochip, 
  FaShieldAlt, FaTerminal, FaMobileAlt, FaLongArrowAltRight, FaBrain, 
  FaDatabase, FaNetworkWired, FaCube, FaChevronDown, FaSearch, FaRocket,
  FaArrowRight, FaGlobe, FaBolt, FaInfoCircle
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { MdGraphicEq, MdSettingsInputComponent, MdOutlineMonitorHeart } from 'react-icons/md';

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const navBackground = useTransform(scrollY, [0, 50], ["rgba(2, 2, 2, 0)", "rgba(2, 2, 2, 0.95)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["rgba(204, 255, 0, 0)", "rgba(204, 255, 0, 0.15)"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation Variants for Mobile
  const containerVars = {
    initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
    animate: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } }
  };

  const itemVars = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { ease: [0.6, 0.01, 0.05, 0.95] } }
  };

  const serviceLinks = [
    { title: "Web Engineering", desc: "Edge-delivery platforms.", icon: <FaRocket />, path: "/services/web-dev", tag: "CORE", color: "#3b82f6" },
    { title: "Software Systems", desc: "Enterprise SaaS logic.", icon: <FaTerminal />, path: "/services/software", tag: "ARCH", color: "#ccff00" },
    { title: "Neural Core", desc: "Autonomous AI agents.", icon: <FaBrain />, path: "/services/ai-automation", tag: "AGENTS", color: "#a855f7" },
    { title: "Data Intelligence", desc: "Predictive telemetry.", icon: <FaDatabase />, path: "/services/data-intelligence", tag: "DATA", color: "#ec4899" },
    { title: "Cyber Strategy", desc: "Technical audits.", icon: <FaMicrochip />, path: "/services/consulting", tag: "ADVISORY", color: "#f59e0b" },
    { title: "Protocol Security", desc: "Hardened defense.", icon: <FaShieldAlt />, path: "/services/security", tag: "DEFENSE", color: "#ef4444" },
    { title: "App Forge", desc: "Native mobile sync.", icon: <FaMobileAlt />, path: "/services/app-dev", tag: "MOBILE", color: "#10b981" },
    { title: "Blockchain Mesh", desc: "Web3 protocols.", icon: <FaCube />, path: "/services/web3", tag: "DECENTRAL", color: "#6366f1" }
  ];

  return (
    <header className="fixed top-0 w-full z-[100] transition-colors duration-500">
      {/* 1. DIAGNOSTICS BAR (DESKTOP) */}
      <div className="hidden lg:flex bg-[#050505] text-zinc-600 py-2 px-10 justify-between items-center text-[7px] font-mono tracking-[0.4em] border-b border-white/5">
        <div className="flex gap-12 items-center">
          <div className="flex items-center gap-2 text-[#ccff00]">
            <span className="flex h-1.5 w-1.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ccff00]"></span>
            </span>
            <span>SYSTEM_STATUS: OPERATIONAL</span>
          </div>
          <div className="flex items-center gap-4 border-l border-white/10 pl-12 uppercase">
            <FaGlobe className="text-zinc-800" /> <span>Cluster: Global-Edge-01</span>
          </div>
        </div>
        <div className="flex gap-8">
          <span className="flex items-center gap-2"><FaBolt className="text-yellow-500" /> Latency: 12ms</span>
          <span className="text-zinc-800 italic">Auth: RSA_4096</span>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION */}
      <motion.nav 
        style={{ backgroundColor: navBackground, borderBottomColor: navBorder }}
        className={`relative backdrop-blur-xl border-b transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="group flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ccff00]/20 blur-xl group-hover:bg-[#ccff00]/40 transition-all rounded-full" />
              <div className="relative w-10 h-10 bg-black rounded-lg flex items-center justify-center border border-white/10 group-hover:border-[#ccff00]/50 transition-all duration-500 overflow-hidden">
                <MdSettingsInputComponent className="text-[#ccff00] text-xl relative z-10" />
                <motion.div animate={{ y: [-40, 40] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="absolute inset-0 w-full h-[1px] bg-[#ccff00]/30 shadow-[0_0_10px_#ccff00]" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tighter text-white uppercase leading-none">CODE<span className="text-[#ccff00]">_</span>INNOVATIVE</span>
              <span className="text-[6px] font-mono tracking-[0.6em] text-zinc-500 uppercase mt-1 italic">Advanced_Software_Forge</span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-12 font-bold text-[9px] tracking-[0.3em] uppercase text-zinc-500">
            {['Home', 'About', 'Career'].map((name) => (
              <li key={name} className="relative overflow-hidden group py-2 px-1">
                <Link to={name === 'Home' ? '/' : `/${name.toLowerCase()}`} className="transition-all hover:text-white">{name}</Link>
                <motion.span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#ccff00] translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500" />
              </li>
            ))}
            <li className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className={`flex items-center gap-2 transition-all py-2 ${isServicesOpen ? 'text-white' : 'hover:text-white'}`}>
                Solutions <IoIosArrowDown className={`transition-transform duration-500 ${isServicesOpen ? 'rotate-180 text-[#ccff00]' : ''}`} />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] pt-6">
                    <div className="bg-[#080808]/95 backdrop-blur-2xl border border-white/10 p-6 rounded-[2rem] grid grid-cols-2 gap-3">
                      {serviceLinks.map((s, idx) => (
                        <Link key={idx} to={s.path} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-all group border border-transparent hover:border-white/10">
                          <div className="w-8 h-8 rounded-lg bg-zinc-900 flex-shrink-0 flex items-center justify-center text-sm" style={{ color: s.color }}>{s.icon}</div>
                          <div>
                            <div className="text-[9px] font-bold text-white tracking-widest uppercase">{s.title}</div>
                            <p className="text-[7px] text-zinc-500 uppercase">{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button onClick={() => setIsSearchOpen(true)} className="w-10 h-10 flex items-center justify-center bg-white/5 text-zinc-500 rounded-xl border border-white/10 hover:border-[#ccff00]/30 transition-all">
              <FaSearch size={12} />
            </button>
            <Link to="/contact">
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="hidden md:flex px-6 py-3 bg-[#ccff00] text-black rounded-xl text-[8px] font-black tracking-widest uppercase items-center gap-3">
                Start_Build <FaArrowRight />
              </motion.button>
            </Link>
            <button className="lg:hidden flex flex-col items-end gap-1.5 p-3 bg-white/5 rounded-xl border border-white/10" onClick={() => setIsMobileMenuOpen(true)}>
              <div className="w-6 h-[1.5px] bg-white" />
              <div className="w-4 h-[1.5px] bg-[#ccff00]" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* --- MOBILE FULLSCREEN COMMAND CENTER --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 90% 10%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 90% 10%)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#020202] z-[1000] flex flex-col overflow-hidden"
          >
            {/* Moving Grid Background Animation */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `linear-gradient(#ccff00 1px, transparent 1px), linear-gradient(90deg, #ccff00 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            {/* Mobile Header */}
            <div className="p-6 flex justify-between items-center border-b border-white/5 relative z-10">
              <div className="flex flex-col font-mono">
                <span className="text-white text-xs font-bold uppercase tracking-widest animate-pulse">Interface_Active</span>
                <span className="text-[8px] text-[#ccff00] opacity-70">Node: {location.pathname}</span>
              </div>
              <motion.button 
                whileTap={{ scale: 0.9, rotate: 90 }}
                onClick={() => setIsMobileMenuOpen(false)} 
                className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#ccff00] border border-white/10"
              >
                <FaTimes />
              </motion.button>
            </div>

            {/* Scrollable Content */}
            <motion.div 
              variants={containerVars} initial="initial" animate="animate"
              className="flex-1 overflow-y-auto px-8 py-10 space-y-12 relative z-10"
            >
              {/* Primary Links + ABOUT */}
              <nav className="space-y-4">
                {['Home', 'About', 'Career', 'Contact'].map((name) => (
                  <motion.div key={name} variants={itemVars}>
                    <Link 
                      to={name === 'Home' ? '/' : `/${name.toLowerCase()}`} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between"
                    >
                      <span className="text-5xl font-black text-white tracking-tighter uppercase group-hover:text-[#ccff00] transition-colors">
                        {name}<span className="text-[#ccff00]">.</span>
                      </span>
                      <FaLongArrowAltRight className="opacity-0 group-hover:opacity-100 text-[#ccff00] transition-all -translate-x-4 group-hover:translate-x-0" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Enhanced About Section for Mobile */}
              <motion.div variants={itemVars} className="bg-[#ccff00]/5 border border-[#ccff00]/20 p-6 rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <FaInfoCircle className="text-[#ccff00]" />
                  <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">Executive_Brief</span>
                </div>
                <p className="text-[10px] text-zinc-400 font-mono leading-relaxed uppercase">
                  Code_Innovative is a high-performance software forge specializing in AI-driven architecture and hardened enterprise systems.
                </p>
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex items-center gap-2 mt-4 text-[9px] font-bold text-[#ccff00] uppercase tracking-widest">
                  View_Manifesto <FaArrowRight size={8} />
                </Link>
              </motion.div>

              {/* Service Grid with Staggered Fade */}
              <div className="space-y-6">
                <h3 className="text-[8px] font-mono text-zinc-600 tracking-[0.5em] uppercase border-b border-white/5 pb-4 italic">Deployable_Modules</h3>
                <div className="grid grid-cols-1 gap-3">
                  {serviceLinks.slice(0, 6).map((s, i) => (
                    <motion.div key={i} variants={itemVars}>
                      <Link to={s.path} onClick={() => setIsMobileMenuOpen(false)} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center justify-between hover:bg-white/5 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="text-lg" style={{ color: s.color }}>{s.icon}</div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-white tracking-widest uppercase">{s.title}</span>
                            <span className="text-[7px] font-mono text-zinc-600 uppercase">{s.tag}</span>
                          </div>
                        </div>
                        <FaChevronDown className="-rotate-90 text-zinc-800" size={10} />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Actions */}
              <motion.div variants={itemVars} className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-6 bg-zinc-900/50 rounded-3xl border border-white/5 flex flex-col gap-1">
                  <span className="text-[#ccff00] text-xl font-bold font-mono">12ms</span>
                  <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">Ping_Rate</span>
                </div>
                <div className="p-6 bg-[#ccff00] rounded-3xl flex flex-col gap-1">
                  <span className="text-black text-xl font-bold font-mono">99%</span>
                  <span className="text-black/60 text-[7px] font-mono uppercase tracking-widest font-bold">Uptime_Ratio</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SEARCH OVERLAY (Omitted for brevity, keep as per original) */}
    </header>
  );
}
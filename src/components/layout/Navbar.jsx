import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  FaRocket, FaTerminal, FaBrain, FaDatabase, 
  FaMicrochip, FaShieldAlt, FaMobileAlt, FaCube, 
  FaSearch, FaArrowRight, FaGlobe, FaBolt, FaTimes, 
  FaChevronRight
} from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import SearchModal from '../ui/SearchModal';
import AnimatedLogo from '../ui/AnimatedLogo';

const serviceLinks = [
  { title: "Web Engineering", desc: "Edge-delivery platforms", icon: FaRocket, path: "/services/web-dev", tag: "CORE", color: "#3b82f6" },
  { title: "Software Systems", desc: "Enterprise SaaS logic", icon: FaTerminal, path: "/services/software", tag: "ARCH", color: "#ccff00" },
  { title: "Neural Core", desc: "Autonomous AI agents", icon: FaBrain, path: "/services/ai-automation", tag: "AGENTS", color: "#a855f7" },
  { title: "Data Intelligence", desc: "Predictive telemetry", icon: FaDatabase, path: "/services/data-intelligence", tag: "DATA", color: "#ec4899" },
  { title: "Cyber Strategy", desc: "Technical audits", icon: FaMicrochip, path: "/services/consulting", tag: "ADVISORY", color: "#f59e0b" },
  { title: "Protocol Security", desc: "Hardened defense", icon: FaShieldAlt, path: "/services/security", tag: "DEFENSE", color: "#ef4444" },
  { title: "App Forge", desc: "Native mobile sync", icon: FaMobileAlt, path: "/services/app-dev", tag: "MOBILE", color: "#10b981" },
  { title: "Blockchain Mesh", desc: "Web3 protocols", icon: FaCube, path: "/services/web3", tag: "DECENTRAL", color: "#6366f1" }
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const navBackground = useTransform(scrollY, [0, 50], ["rgba(2, 2, 2, 0.4)", "rgba(2, 2, 2, 0.95)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["rgba(255, 255, 255, 0.05)", "rgba(204, 255, 0, 0.2)"]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] transition-colors duration-500">
        {/* 1. TOP DIAGNOSTICS BAR (DESKTOP) */}
        <div className="hidden lg:flex bg-[#050505]/90 backdrop-blur-md text-zinc-500 py-1.5 px-8 justify-between items-center text-[8px] font-mono tracking-[0.3em] border-b border-white/5">
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-2 text-[#ccff00]">
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ccff00]" />
              </span>
              <span>SYSTEMS_ONLINE // ENTERPRISE_CORE</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/10 pl-8 uppercase">
              <FaGlobe className="text-zinc-700" />
              <span>CLUSTER: BENGALURU_HUB_01</span>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1.5 text-zinc-400">
              <FaBolt className="text-[#ccff00]" /> LATENCY: 0.02ms
            </span>
            <span className="text-zinc-700">|</span>
            <span className="text-zinc-500">AUTH: SECP256K1</span>
          </div>
        </div>

        {/* 2. MAIN NAVIGATION */}
        <motion.nav 
          style={{ backgroundColor: navBackground, borderBottomColor: navBorder }}
          className={`backdrop-blur-xl border-b transition-all duration-300 ${scrolled ? 'py-2.5 sm:py-3' : 'py-3.5 sm:py-4'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            
            {/* ANIMATED LOGO BRANDING */}
            <Link to="/" className="inline-flex">
              <AnimatedLogo size="md" showSlogan={true} />
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden lg:flex items-center gap-8 xl:gap-10 font-bold text-[10px] tracking-[0.25em] uppercase text-zinc-400">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Arsenal', path: '/tech' },
                { name: 'Careers', path: '/career' }
              ].map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name} className="relative group py-2">
                    <Link 
                      to={item.path} 
                      className={`transition-colors ${isActive ? 'text-[#ccff00]' : 'hover:text-white'}`}
                    >
                      {item.name}
                    </Link>
                    <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#ccff00] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </li>
                );
              })}

              {/* Mega Dropdown */}
              <li 
                className="relative py-2"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button 
                  className={`flex items-center gap-1.5 transition-colors cursor-pointer ${
                    isServicesOpen || location.pathname.startsWith('/services') ? 'text-white' : 'hover:text-white'
                  }`}
                >
                  Solutions
                  <IoIosArrowDown className={`transition-transform duration-300 text-xs ${isServicesOpen ? 'rotate-180 text-[#ccff00]' : ''}`} />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 12, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[620px] pt-4"
                    >
                      <div className="bg-[#080808]/95 backdrop-blur-2xl border border-white/10 p-5 rounded-3xl shadow-2xl grid grid-cols-2 gap-2.5">
                        {serviceLinks.map((s, idx) => {
                          const Icon = s.icon;
                          return (
                            <Link 
                              key={idx} 
                              to={s.path}
                              onClick={() => setIsServicesOpen(false)}
                              className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10"
                            >
                              <div 
                                className="w-8 h-8 rounded-xl bg-zinc-900/90 flex-shrink-0 flex items-center justify-center text-sm group-hover:scale-110 transition-transform" 
                                style={{ color: s.color }}
                              >
                                <Icon />
                              </div>
                              <div>
                                <div className="text-[10px] font-black text-white tracking-widest uppercase group-hover:text-[#ccff00] transition-colors">
                                  {s.title}
                                </div>
                                <p className="text-[8px] text-zinc-500 uppercase mt-0.5 line-clamp-1">{s.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>

            {/* ACTIONS */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search site"
                className="flex items-center gap-2 px-3 py-2 bg-white/5 text-zinc-400 hover:text-white rounded-xl border border-white/10 hover:border-[#ccff00]/40 transition-all text-xs font-mono cursor-pointer"
              >
                <FaSearch size={11} className="text-[#ccff00]" />
                <span className="hidden sm:inline text-[9px] uppercase tracking-widest text-zinc-500">
                  Search <kbd className="text-[8px] bg-black/50 px-1 py-0.5 rounded border border-white/10">⌘K</kbd>
                </span>
              </button>

              <Link to="/contact" className="hidden sm:block">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2.5 bg-[#ccff00] text-black rounded-xl text-[9px] font-black tracking-widest uppercase flex items-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.2)] hover:bg-white transition-colors cursor-pointer"
                >
                  Start_Build <FaArrowRight size={8} />
                </motion.button>
              </Link>

              <button 
                className="lg:hidden p-2.5 bg-white/5 rounded-xl border border-white/10 text-white hover:border-[#ccff00]/40 transition-all cursor-pointer"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile navigation"
              >
                <div className="w-5 flex flex-col items-end gap-1">
                  <span className="w-5 h-[2px] bg-white rounded-full" />
                  <span className="w-3.5 h-[2px] bg-[#ccff00] rounded-full" />
                </div>
              </button>
            </div>

          </div>
        </motion.nav>

        {/* --- MOBILE FULLSCREEN COMMAND CENTER --- */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 bg-[#020202]/98 backdrop-blur-3xl z-[1000] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 flex justify-between items-center border-b border-white/10">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  <AnimatedLogo size="sm" showSlogan={false} />
                </Link>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ccff00] border border-white/10 active:scale-95 transition-transform"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Scrollable Mobile Content */}
              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-8">
                {/* Primary Navigation Links */}
                <nav className="space-y-3">
                  {[
                    { name: 'Home', path: '/' },
                    { name: 'About', path: '/about' },
                    { name: 'Arsenal & Stack', path: '/tech' },
                    { name: 'Careers', path: '/career' },
                    { name: 'Contact Uplink', path: '/contact' }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                    >
                      <span className="text-2xl sm:text-3xl font-black text-white tracking-tighter uppercase group-hover:text-[#ccff00] transition-colors">
                        {item.name}
                      </span>
                      <FaChevronRight className="text-zinc-600 group-hover:text-[#ccff00] transition-colors" size={12} />
                    </Link>
                  ))}
                </nav>

                {/* Service Modules Accordion */}
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <h3 className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.4em]">
                    Deployable_Protocols
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {serviceLinks.map((s, idx) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={idx}
                          to={s.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#ccff00]/30 transition-all flex items-center gap-3"
                        >
                          <div className="text-base" style={{ color: s.color }}>
                            <Icon />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-white uppercase tracking-wider">{s.title}</span>
                            <span className="text-[7px] font-mono text-zinc-500 uppercase">{s.tag}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Direct Action Button */}
                <div className="pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full py-4 bg-[#ccff00] text-black font-black uppercase text-xs tracking-widest rounded-2xl flex items-center justify-center gap-3 shadow-xl"
                  >
                    Initiate Project Build <FaArrowRight size={10} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Command Palette / Search Dialog */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
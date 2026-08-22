import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes, FaRocket, FaShieldAlt, FaBrain, FaDatabase, FaMobileAlt, FaTerminal, FaCube, FaMicrochip, FaArrowRight } from 'react-icons/fa';

const quickLinks = [
  { title: "Web Engineering", category: "Solutions", path: "/services/web-dev", icon: FaRocket, desc: "High-performance edge platforms" },
  { title: "Software Systems", category: "Solutions", path: "/services/software", icon: FaTerminal, desc: "Enterprise SaaS architecture" },
  { title: "Neural Core & AI", category: "Solutions", path: "/services/ai-automation", icon: FaBrain, desc: "Autonomous AI agents & workflows" },
  { title: "Data Intelligence", category: "Solutions", path: "/services/data-intelligence", icon: FaDatabase, desc: "Real-time telemetry & analytics" },
  { title: "Cyber Strategy", category: "Solutions", path: "/services/consulting", icon: FaMicrochip, desc: "Technical audits & roadmaps" },
  { title: "Protocol Security", category: "Solutions", path: "/services/security", icon: FaShieldAlt, desc: "Hardened zero-trust defense" },
  { title: "App Forge", category: "Solutions", path: "/services/app-dev", icon: FaMobileAlt, desc: "Native iOS & Android development" },
  { title: "Blockchain Mesh", category: "Solutions", path: "/services/web3", icon: FaCube, desc: "Smart contracts & Web3 protocols" },
  { title: "About Company", category: "Core", path: "/about", icon: FaTerminal, desc: "Our manifesto & leadership" },
  { title: "Careers & Hiring", category: "Core", path: "/career", icon: FaRocket, desc: "Join our high-stakes engineering squad" },
  { title: "Contact Uplink", category: "Core", path: "/contact", icon: FaShieldAlt, desc: "Initiate direct communication" },
  { title: "Technology Hub", category: "Core", path: "/tech", icon: FaMicrochip, desc: "Explore our full technical arsenal" }
];

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filtered = quickLinks.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.desc.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path) => {
    navigate(path);
    onClose();
    setQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 sm:pt-28 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-4 px-6 py-4 border-b border-white/10 bg-zinc-900/50">
              <FaSearch className="text-[#ccff00] text-lg flex-shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search modules, protocols, pages... (ESC to exit)"
                className="w-full bg-transparent text-white font-mono text-sm sm:text-base outline-none placeholder:text-zinc-600"
              />
              <button
                onClick={onClose}
                className="p-2 text-zinc-500 hover:text-white rounded-lg transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Results Container */}
            <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
              {filtered.length === 0 ? (
                <div className="py-12 text-center text-zinc-600 font-mono text-xs uppercase tracking-widest">
                  No matching protocols found for "{query}"
                </div>
              ) : (
                filtered.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(item.path)}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-[#ccff00] group-hover:scale-110 group-hover:bg-[#ccff00]/10 transition-all">
                          <Icon size={16} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-white font-bold text-sm tracking-tight group-hover:text-[#ccff00] transition-colors">
                              {item.title}
                            </span>
                            <span className="text-[8px] font-mono uppercase tracking-widest text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded border border-white/5">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-zinc-500 line-clamp-1">{item.desc}</p>
                        </div>
                      </div>
                      <FaArrowRight className="text-zinc-600 group-hover:text-[#ccff00] group-hover:translate-x-1 transition-all text-xs mr-2" />
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer / Shortcuts */}
            <div className="px-6 py-3 bg-zinc-900/80 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
              <span>Navigation Terminal</span>
              <span className="flex items-center gap-2">
                <kbd className="px-1.5 py-0.5 bg-black border border-white/10 rounded text-zinc-400">ESC</kbd> to close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

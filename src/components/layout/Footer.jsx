import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowUp, FaShieldAlt, FaLongArrowAltRight, 
  FaPhoneAlt, FaInstagram, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope,
  FaServer, FaCheckCircle, FaLock, FaBolt, FaTerminal, FaGlobe, FaRocket, FaCheck
} from 'react-icons/fa';
import AnimatedLogo from '../ui/AnimatedLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutionLinks = [
    { name: "Web Engineering", path: "/services/web-dev", tag: "NEXT.JS" },
    { name: "Software Systems", path: "/services/software", tag: "RUST/GO" },
    { name: "Neural AI Core", path: "/services/ai-automation", tag: "RAG/LLM" },
    { name: "Data Intelligence", path: "/services/data-intelligence", tag: "ETL" },
    { name: "Cyber Strategy", path: "/services/consulting", tag: "AUDIT" },
    { name: "Protocol Security", path: "/services/security", tag: "ZERO-TRUST" },
    { name: "App Forge", path: "/services/app-dev", tag: "MOBILE" },
    { name: "Blockchain Mesh", path: "/services/web3", tag: "DAPPS" }
  ];

  const companyLinks = [
    { name: "About Unit", path: "/about" },
    { name: "Arsenal & Stack", path: "/tech" },
    { name: "Careers (Live Nodes)", path: "/career" },
    { name: "Contact Uplink", path: "/contact" },
    { name: "Proof of Execution", path: "/#cases" }
  ];

  const complianceBadges = [
    "SOC2 TYPE II", "ISO 27001", "AES-256", "GDPR COMPLIANT"
  ];

  return (
    <footer className="relative bg-[#020202] text-white pt-16 sm:pt-24 pb-8 overflow-hidden border-t border-white/10 selection:bg-[#ccff00] selection:text-black">
      
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-[radial-gradient(ellipse_at_bottom,_rgba(204,255,0,0.06)_0%,_transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 1. TOP CALLOUT BANNER: STRATEGIC UPLINK --- */}
        <div className="mb-16 sm:mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-zinc-950 via-[#080808] to-zinc-950 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ccff00]/5 blur-[100px] pointer-events-none" />
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-[#ccff00] font-mono text-[9px] uppercase tracking-[0.3em] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
                INITIATE_TACTICAL_DEPLOYMENT
              </div>
              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-white">
                Ready to Architect the <span className="text-[#ccff00] italic">Unbreakable?</span>
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm font-light max-w-xl">
                Schedule a direct architecture consultation with our engineering squad. We review all technical requirements within 4 hours.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link 
                to="/contact"
                className="px-6 py-3.5 bg-[#ccff00] text-black font-black uppercase text-xs tracking-widest rounded-xl text-center hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] active:scale-95 flex items-center justify-center gap-2"
              >
                Schedule Architecture Review <FaRocket size={11} />
              </Link>
              <a 
                href="https://wa.me/919620996689"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-zinc-900 border border-white/10 text-zinc-300 font-mono text-xs uppercase tracking-wider rounded-xl text-center hover:text-white hover:border-[#ccff00]/40 transition-all flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-[#25D366]" /> Direct WhatsApp Uplink
              </a>
            </div>
          </div>
        </div>

        {/* --- 2. MAIN NAVIGATION & BRANDING GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand, Slogan, Bio & Compliance (Col 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-block">
              <AnimatedLogo size="lg" showSlogan={true} />
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-md font-light">
              Code Innovative Technologies is an elite software forge and tactical deployment center. We engineer zero-latency cloud architectures, autonomous AI workflows, and military-grade cybersecurity systems globally.
            </p>

            {/* Compliance Badges */}
            <div className="space-y-2">
              <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest block">
                Security & Compliance Standards
              </span>
              <div className="flex flex-wrap gap-2">
                {complianceBadges.map((badge) => (
                  <span 
                    key={badge}
                    className="px-2.5 py-1 bg-zinc-950 border border-white/10 rounded-md text-[8px] font-mono text-zinc-400 flex items-center gap-1.5"
                  >
                    <FaCheckCircle className="text-[#ccff00] text-[8px]" /> {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Infrastructure Hardware Nodes */}
            <div className="grid grid-cols-2 gap-3 max-w-md pt-2">
              <div className="p-3 bg-zinc-950/80 border border-white/5 rounded-xl flex items-center gap-3">
                <div className="p-2 bg-zinc-900 rounded-lg text-[#ccff00] text-xs">
                  <FaServer />
                </div>
                <div>
                  <span className="block text-[7px] font-mono tracking-widest text-zinc-500 uppercase">Uplink_Node</span>
                  <span className="text-xs font-mono font-bold text-white">ACTIVE.42_STABLE</span>
                </div>
              </div>

              <div className="p-3 bg-zinc-950/80 border border-white/5 rounded-xl flex items-center gap-3">
                <div className="p-2 bg-zinc-900 rounded-lg text-cyan-400 text-xs">
                  <FaShieldAlt />
                </div>
                <div>
                  <span className="block text-[7px] font-mono tracking-widest text-zinc-500 uppercase">Security_Chain</span>
                  <span className="text-xs font-mono font-bold text-white">MIL_SPEC_EAL6</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Deployable Solutions (Col 6-8) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ccff00] flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full" /> Deployable_Solutions
            </h4>
            <ul className="space-y-2.5">
              {solutionLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-zinc-400 text-xs font-mono uppercase hover:text-white transition-colors flex items-center justify-between group py-0.5"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-0 group-hover:w-1.5 h-[1px] bg-[#ccff00] transition-all duration-300" />
                      {item.name}
                    </span>
                    <span className="text-[7.5px] text-zinc-600 group-hover:text-[#ccff00] transition-colors">
                      {item.tag}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company & Ecosystem (Col 9-10) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" /> Ecosystem
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path}
                    className="text-zinc-400 text-xs font-mono uppercase hover:text-white transition-colors flex items-center gap-2 group py-0.5"
                  >
                    <span className="w-0 group-hover:w-1.5 h-[1px] bg-cyan-400 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Dispatch Terminal & Location (Col 11-12) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-white rounded-full" /> Dispatch_Feed
            </h4>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="AGENT@CORP.SYS"
                  className="w-full bg-zinc-950 border border-white/10 p-3 pr-10 rounded-xl text-[10px] font-mono text-white focus:border-[#ccff00]/60 transition-all outline-none"
                />
                <button 
                  type="submit" 
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-zinc-900 rounded-lg flex items-center justify-center text-[#ccff00] hover:bg-[#ccff00] hover:text-black transition-all cursor-pointer"
                >
                  {isSubscribed ? <FaCheck size={9} /> : <FaLongArrowAltRight size={10} />}
                </button>
              </div>

              <AnimatePresence>
                {isSubscribed && (
                  <motion.p 
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[8px] font-mono text-[#ccff00] uppercase tracking-wider flex items-center gap-1"
                  >
                    <FaCheckCircle size={8} /> Credentials verified. Connected.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            <div className="pt-2 text-[8px] font-mono text-zinc-500 space-y-1">
              <p className="text-zinc-400 font-bold uppercase">// Base Station</p>
              <p>Electronic City, Bengaluru, Karnataka 560100</p>
            </div>
          </div>

        </div>

        {/* --- 3. MIDDLE BAR: DIRECT COMMS & SOCIAL CHANNELS --- */}
        <div className="py-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-wrap gap-4 sm:gap-8 text-xs font-mono">
            <a href="tel:+919620996689" className="text-zinc-300 hover:text-[#ccff00] transition-colors flex items-center gap-2">
              <FaPhoneAlt size={11} className="text-[#ccff00]" /> +91 96209 96689
            </a>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <a href="mailto:Info@codeinnovativetechnologies.com" className="text-zinc-300 hover:text-[#ccff00] transition-colors flex items-center gap-2 truncate">
              <FaEnvelope size={11} className="text-cyan-400" /> Info@codeinnovativetechnologies.com
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { icon: FaInstagram, link: "https://www.instagram.com/code_innovativetechnologies", label: "Instagram", color: "hover:text-[#E4405F] hover:border-[#E4405F]/40" },
              { icon: FaWhatsapp, link: "https://wa.me/919620996689", label: "WhatsApp", color: "hover:text-[#25D366] hover:border-[#25D366]/40" },
              { icon: FaLinkedin, link: "https://www.linkedin.com/company/code-innovative-technologies", label: "LinkedIn", color: "hover:text-[#0077B5] hover:border-[#0077B5]/40" },
              { icon: FaGithub, link: "https://github.com/AppNest-Dev", label: "GitHub", color: "hover:text-white hover:border-white/40" },
              { icon: FaEnvelope, link: "mailto:info@codeinnovativetechnologies.com", label: "Email", color: "hover:text-[#ccff00] hover:border-[#ccff00]/40" },
              { icon: FaPhoneAlt, link: "tel:+919620996689", label: "Call", color: "hover:text-cyan-400 hover:border-cyan-400/40" }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a 
                  key={i}
                  href={item.link}
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  title={item.label}
                  className={`w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-zinc-400 transition-all bg-zinc-950 shadow-md ${item.color} active:scale-95`}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        {/* --- 4. BOTTOM HUD BAR: TELEMETRY & STATUS --- */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
              SYSTEMS_100%_NOMINAL
            </span>
            <span>CLUSTER: BENGALURU_HUB_01</span>
            <span>LATENCY: 0.02ms</span>
            <span className="text-zinc-400">SYS_TIME: {time} IST</span>
          </div>

          <div className="flex items-center gap-6">
            <span>© {currentYear} Code Innovative Technologies. All rights reserved.</span>
            
            <button 
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-9 h-9 bg-zinc-950 rounded-xl border border-white/10 text-[#ccff00] hover:border-[#ccff00]/60 hover:bg-[#ccff00]/10 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-lg"
            >
              <FaArrowUp size={11} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
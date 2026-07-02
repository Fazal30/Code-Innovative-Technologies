import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowUp, FaShieldAlt, FaLongArrowAltRight, 
  FaPhoneAlt, FaInstagram, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope,
  FaMemory, FaServer, FaChartBar, FaGlobe
} from 'react-icons/fa';
import { MdSettingsInputComponent, MdGraphicEq, MdCellTower } from 'react-icons/md';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [activeSegment, setActiveSegment] = useState('LOG_A');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const footerLinks = [
    { 
      title: "Core_System", 
      items: [
        { name: "Terminal_Home", path: "/" },
        { name: "About_Unit", path: "/about" },
        { name: "Service_Protocols", path: "/services/software" },
        { name: "Web_Dev", path: "/services/web-dev" }
      ] 
    },
    { 
      title: "Ecosystem", 
      items: [
        { name: "Career_Nodes", path: "/career" },
        { name: "Security", path: "/services/security" },
        { name: "Tech_Stack", path: "/tech" },
        { name: "Neural_Community", path: "/services/ai-automation" }
      ] 
    }
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-[#020202] text-white pt-24 lg:pt-36 pb-6 overflow-hidden border-t border-[#ccff00]/10">
      
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,#ccff0005_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-white/5">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 bg-zinc-950 rounded-2xl flex items-center justify-center border border-[#ccff00]/20 shadow-[0_0_25px_rgba(204,255,0,0.05)] overflow-hidden group">
                <MdSettingsInputComponent className="text-[#ccff00] text-2xl animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 bg-[#ccff00]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter uppercase italic">Code<span className="text-[#ccff00]">_INNOVATIVE</span></h3>
                <p className="text-[8px] font-mono tracking-[0.4em] text-zinc-500 uppercase mt-1">Industrial Intelligence Unit</p>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-md font-light text-justify">
              We engineer the friction-less future. Our custom protocols and hardened kernel modules power high-frequency autonomous infrastructure stacks across 4 continents simultaneously.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-950 border border-white/5 rounded-xl flex items-center gap-4">
                <div className="p-2.5 bg-zinc-900 rounded-lg text-[#ccff00]">
                  <FaServer size={14} />
                </div>
                <div>
                  <span className="block text-[8px] font-mono tracking-widest text-zinc-500 uppercase">Uplink_Node</span>
                  <span className="text-sm font-mono font-bold tracking-tight text-white">ACTIVE.42_STABLE</span>
                </div>
              </div>

              <div className="p-4 bg-zinc-950 border border-white/5 rounded-xl flex items-center gap-4">
                <div className="p-2.5 bg-zinc-900 rounded-lg text-cyan-400">
                  <FaShieldAlt size={14} />
                </div>
                <div>
                  <span className="block text-[8px] font-mono tracking-widest text-zinc-500 uppercase">Security_Chain</span>
                  <span className="text-sm font-mono font-bold tracking-tight text-white">MIL_SPEC_EAL6</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8">
            {footerLinks.map((group, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#ccff00] flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#ccff00] rounded-full" /> {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.items.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path}
                        className="text-zinc-400 text-xs font-mono uppercase hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-0 group-hover:w-2 h-[1px] bg-[#ccff00] transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-6">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500 flex items-center gap-2">
                <span className="w-1 h-1 bg-zinc-500 rounded-full" /> Subscribe_Feed
              </h4>
              <div className="space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="USER@DOMAIN.SYS"
                    className="w-full bg-zinc-950 border border-white/10 p-3.5 pr-12 rounded-xl text-[10px] font-mono tracking-widest text-white focus:border-[#ccff00]/40 transition-all outline-none"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center text-[#ccff00] hover:bg-[#ccff00] hover:text-black transition-all border border-white/5">
                    <FaLongArrowAltRight size={10} />
                  </button>
                </div>
                <p className="text-[8px] font-mono text-zinc-600 uppercase leading-normal">
                  // Submit credentials to bind into real-time telemetry updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12 border-b border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-12">
            <div className="p-5 bg-zinc-950 rounded-xl border border-white/5 flex-1 sm:flex-none">
              <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">// HQ_BASE_BENGALURU_IN</p>
              <a href="tel:+919620996689" className="text-base font-bold tracking-tight font-mono hover:text-[#ccff00] transition-colors">+91 96209 96689</a>
            </div>
            <div className="p-5 bg-zinc-950 rounded-xl border border-white/5 flex-1 sm:flex-none">
              <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-1.5">// SECURE_ROUTING_MAIL</p>
              <a href="mailto:Info@codeinnovativetechnologies.com" className="text-base font-bold tracking-tight font-mono hover:text-[#ccff00] transition-colors truncate block max-w-xs sm:max-w-none">Info@codeinnovativetechnologies.com</a>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            {[
              { icon: FaInstagram, link: "https://www.instagram.com/code_innovativetechnologies?igsh=c2h2cmVreHBnY3Y5&utm_source=qr", label: "Instagram", color: "hover:text-[#E4405F] hover:border-[#E4405F]/30" },
              { icon: FaWhatsapp, link: "https://wa.me/919620996689", label: "WhatsApp", color: "hover:text-[#25D366] hover:border-[#25D366]/30" },
              { icon: FaLinkedin, link: "#", label: "LinkedIn", color: "hover:text-[#0077B5] hover:border-[#0077B5]/30" },
              { icon: FaGithub, link: "https://github.com/Fazal30", label: "GitHub", color: "hover:text-white hover:border-white/30" },
              { icon: FaEnvelope, link: "mailto:info@codeinnovativetechnologies.com", label: "Email", color: "hover:text-[#c93939] hover:border-[#c93939]/30" },
              { icon: FaPhoneAlt, link: "tel:+919620996689", label: "Call", color: "hover:text-[#ccff00] hover:border-[#ccff00]/30" }
            ].map((item, i) => (
              <motion.a 
                key={i}
                whileHover={{ y: -4, backgroundColor: "rgba(0,0,0,0.8)" }}
                whileTap={{ scale: 0.95 }}
                href={item.link}
                target={item.link.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                title={item.label}
                className={`w-11 h-11 rounded-xl border border-white/5 flex items-center justify-center text-zinc-500 transition-all bg-zinc-950 shadow-lg ${item.color}`}
              >
                <item.icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-8">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[9px] font-mono text-zinc-500">
            <span className="flex items-center gap-2 bg-zinc-950 px-3 py-1.5 rounded-md border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
              SYSTEMS_NOMINAL
            </span>
            <span>LATENCY: 12MS</span>
            <span className="text-zinc-400">SYS_TIME: {time}</span>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-8">
            <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
              © {currentYear} Code Innovative Technologies. <span className="text-[#ccff00]">v4.0.2</span>
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, borderColor: "rgba(204,255,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="w-10 h-10 bg-zinc-950 rounded-xl border border-white/5 text-[#ccff00] flex items-center justify-center shadow-lg transition-colors"
            >
              <FaArrowUp size={12} />
            </motion.button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-950 overflow-hidden">
        <motion.div 
          animate={{ x: ['-100%', '300%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          className="w-48 h-full bg-gradient-to-r from-transparent via-[#ccff00]/40 to-transparent"
        />
      </div>
    </footer>
  );
}
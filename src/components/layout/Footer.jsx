import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowUp, FaShieldAlt, FaLongArrowAltRight, 
  FaPhoneAlt, FaInstagram, FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope
} from 'react-icons/fa';
import { MdSettingsInputComponent, MdGraphicEq, MdCellTower } from 'react-icons/md';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isHovered, setIsHovered] = useState(null);

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
    <footer className="relative bg-[#020202] text-white pt-20 lg:pt-32 overflow-hidden border-t border-[#ccff00]/10">
      
      {/* --- CYBERNETIC BACKGROUND LAYER --- */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#ccff00]/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
        
        {/* UPPER SECTION: BRAND & NEWSLETTER */}
        <div className="grid lg:grid-cols-12 gap-12 pb-20 border-b border-white/5">
          
          <div className="lg:col-span-5 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-[#ccff00] rounded-2xl flex items-center justify-center text-black shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                <MdSettingsInputComponent size={32} className="animate-spin-slow" />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tighter uppercase italic italic">Code<span className="text-[#ccff00]">_INNOVATIVE</span></h3>
                <p className="text-[9px] font-mono tracking-[0.4em] text-zinc-500 uppercase">Industrial Intelligence Unit</p>
              </div>
            </motion.div>

            <p className="text-zinc-500 text-sm sm:text-base leading-relaxed max-w-md font-medium">
              We engineer the friction-less future. Our protocols power high-frequency infrastructures across 4 continents.
            </p>

            {/* RESPONSIVE STATUS HUD */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-[#ccff00] mb-2">
                  <MdCellTower className="animate-pulse" />
                  <span className="text-[8px] font-black tracking-widest uppercase">Uplink_Status</span>
                </div>
                <div className="text-xl font-mono font-bold tracking-tighter text-white">ACTIVE.42</div>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-xl backdrop-blur-md">
                <div className="flex items-center gap-2 text-cyan-400 mb-2">
                  <FaShieldAlt />
                  <span className="text-[8px] font-black tracking-widest uppercase">Security_Lv</span>
                </div>
                <div className="text-xl font-mono font-bold tracking-tighter text-white">MIL_SPEC</div>
              </div>
            </div>
          </div>

          {/* DYNAMIC NAVIGATION LINKS */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {footerLinks.map((group, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ccff00]">{group.title}</h4>
                <ul className="space-y-3">
                  {group.items.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.path}
                        className="text-zinc-500 text-xs sm:text-sm hover:text-white transition-all flex items-center gap-2 group"
                      >
                        <span className="w-0 group-hover:w-3 h-px bg-[#ccff00] transition-all" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* NEWSLETTER NODE (Responsive Transformation) */}
            <div className="col-span-2 sm:col-span-1 space-y-6">
               <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500">Subscribe_Feed</h4>
               <div className="relative group">
                 <input 
                   type="text" 
                   placeholder="USER@DOMAIN"
                   className="w-full bg-zinc-900 border border-white/10 p-3 rounded-lg text-[10px] font-mono focus:border-[#ccff00] transition-all outline-none"
                 />
                 <button className="absolute right-2 top-1/2 -translate-y-1/2 text-[#ccff00]">
                   <FaLongArrowAltRight />
                 </button>
               </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: CONTACT & SOCIALS */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="text-center md:text-left">
              <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest mb-1">HQ_BASE_ Bengaluru, IN</p>
              <p className="text-lg font-black tracking-tight">+91 96209 96689</p>
            </div>
            <div className="hidden md:block w-px h-10 bg-white/10" />
            <div className="text-center md:text-left">
              <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest mb-1">SECURE_MAIL</p>
              <p className="text-lg font-black tracking-tight">Info@codeinnovativetechnologies.com</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
  {[
    { 
      icon: FaInstagram, 
      link: "https://www.instagram.com/code_innovativetechnologies?igsh=c2h2cmVreHBnY3Y5&utm_source=qr",
      label: "Instagram" 
    },
    { 
      icon: FaWhatsapp, 
      link: "https://wa.me/919620996689",
      label: "WhatsApp" 
    },
    { 
      icon: FaLinkedin, 
      link: "#", 
      label: "LinkedIn" 
    },
    { 
      icon: FaGithub, 
      link: "https://github.com/Fazal30", 
      label: "GitHub" 
    },
    { 
      icon: FaEnvelope, 
      link: "mailto:info@codeinnovativetechnologies.com",
      label: "Email" 
    },
    { 
      icon: FaPhoneAlt, 
      link: "tel:+919620996689",
      label: "Call" 
    }
  ].map((item, i) => (
    <motion.a 
      key={i}
      whileHover={{ 
        y: -5, 
        borderColor: '#ccff00', 
        color: '#ccff00',
        boxShadow: "0 0 15px rgba(204, 255, 0, 0.3)"
      }}
      whileTap={{ scale: 0.9 }}
      href={item.link}
      target={item.link.startsWith('http') ? "_blank" : "_self"}
      rel="noopener noreferrer"
      title={item.label}
      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-500 transition-all bg-zinc-900/50 backdrop-blur-sm"
    >
      <item.icon size={18} />
    </motion.a>
  ))}
</div>
        </div>

        {/* LOWER BAR: GLOBAL TELEMETRY */}
        <div className="border-t border-white/5 py-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              SYSTEMS_NOMINAL
            </span>
            <span className="hidden sm:block">|</span>
            <span className="uppercase">Latency: 12ms</span>
            <span className="hidden sm:block">|</span>
            <span className="text-white">SYS_TIME: {time}</span>
          </div>

          <div className="flex items-center gap-8">
            <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
              © {currentYear} Code Innovative Technologies. <span className="text-[#ccff00]">v4.0.2</span>
            </p>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              onClick={scrollToTop}
              className="p-3 bg-zinc-900 rounded-lg border border-white/10 text-[#ccff00] hover:bg-[#ccff00] hover:text-black transition-all"
            >
              <FaArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* FOOTER SCAN-BEAM ANIMATION */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-900">
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="w-64 h-full bg-[#ccff00] shadow-[0_0_15px_#ccff00]"
        />
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
}
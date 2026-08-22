import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaWhatsapp, FaEnvelope, FaGithub, FaInstagram,
  FaLinkedin, FaPaperPlane, FaShieldAlt, 
  FaFingerprint, FaLock, FaBroadcastTower, FaMicrochip, FaGlobe, FaPhoneAlt 
} from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Core_System_Development',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const msg = `*⚡ INITIATE TRANSMISSION - CONTACT ⚡*
Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}
Brief: ${formData.message}`;

    const url = `https://api.whatsapp.com/send?phone=919620996689&text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      setStatus('success');
      window.open(url, '_blank');
    }, 1200);
  };
  
  return (
    <div className="bg-transparent text-white min-h-screen pt-32 sm:pt-40 pb-20 selection:bg-[#ccff00] selection:text-black overflow-hidden relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. HUD STATUS BAR */}
        <div className="flex flex-wrap justify-between items-center mb-10 border-b border-white/5 pb-5 font-mono text-[8px] sm:text-[9px] tracking-[0.25em] text-zinc-500 uppercase">
          <div className="flex flex-wrap gap-4 sm:gap-8 items-center">
            <span className="flex items-center gap-2 text-[#ccff00] font-black">
              <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full animate-pulse shadow-[0_0_8px_#ccff00]" /> 
              UPLINK_READY
            </span>
            <span className="flex items-center gap-2">
              <FaGlobe className="text-[10px]" /> BENGALURU_STATION
            </span>
            <span>LATENCY: 0.02ms</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="flex items-center gap-1.5"><FaShieldAlt className="text-[#ccff00]" /> SECP256K1</span>
            <span className="bg-[#ccff00]/10 text-[#ccff00] px-2 py-0.5 rounded border border-[#ccff00]/20">v4.2.0</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* 2. LEFT COLUMN: MISSION BRIEFING */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-[#ccff00] font-mono text-[9px] tracking-[0.4em] font-black uppercase">
                <FaBroadcastTower /> <span>Secure_Transmission</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] italic">
                INITIATE <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ccff00] to-zinc-500">
                  HANDSHAKE.
                </span>
              </h1>
              <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-md">
                Deploy your mission parameters. Our engineering core monitors this frequency 24/7 for high-stakes digital deployments.
              </p>
            </div>

            {/* LOCATION HUB */}
            <div className="p-5 sm:p-6 rounded-3xl bg-zinc-950/80 border border-white/5 space-y-4">
              <div>
                <h4 className="text-[8px] font-mono font-black uppercase tracking-[0.3em] text-[#ccff00] mb-1">
                  Base_Coordinates
                </h4>
                <p className="text-white text-sm sm:text-base font-bold">
                  Electronic City, Bengaluru, Karnataka 560100
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a href="mailto:Info@codeinnovativetechnologies.com" className="p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#ccff00]/40 transition-all">
                  <FaEnvelope className="text-[#ccff00] text-xs mb-2" />
                  <p className="text-[7px] font-mono text-zinc-500 uppercase">Email</p>
                  <p className="text-[9px] font-bold text-zinc-300 truncate">Info@codeinnovativetechnologies.com</p>
                </a>
                <a href="tel:+919620996689" className="p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-400/40 transition-all">
                  <FaPhoneAlt className="text-cyan-400 text-xs mb-2" />
                  <p className="text-[7px] font-mono text-zinc-500 uppercase">Phone</p>
                  <p className="text-[9px] font-bold text-zinc-300 truncate">+91 96209 96689</p>
                </a>
              </div>
            </div>

            {/* SOCIAL DOCK */}
            <div className="flex flex-wrap gap-2.5">
              {[
                { icon: FaInstagram, link: "https://www.instagram.com/code_innovativetechnologies", label: "Instagram" },
                { icon: FaWhatsapp, link: "https://wa.me/919620996689", label: "WhatsApp" },
                { icon: FaLinkedin, link: "https://www.linkedin.com/company/code-innovative-technologies", label: "LinkedIn" },
                { icon: FaGithub, link: "https://github.com/AppNest-Dev", label: "GitHub" },
                { icon: FaEnvelope, link: "mailto:info@codeinnovativetechnologies.com", label: "Email" },
                { icon: FaPhoneAlt, link: "tel:+919620996689", label: "Call" }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a 
                    key={i}
                    href={item.link}
                    target={item.link.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    title={item.label}
                    className="w-10 h-10 rounded-xl border border-white/5 flex items-center justify-center text-zinc-400 hover:text-[#ccff00] hover:border-[#ccff00]/40 transition-all bg-zinc-950"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* 3. RIGHT COLUMN: ENCRYPTED TERMINAL */}
          <div className="lg:col-span-7">
            <div className="bg-[#050505] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-6 py-3.5 bg-zinc-950 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ccff00]/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/30" />
                </div>
                <div className="text-[8px] font-mono text-zinc-500 tracking-widest uppercase flex items-center gap-1.5">
                  <FaLock className="text-[#ccff00]" /> 256_BIT_SSL_TUNNEL
                </div>
              </div>

              <div className="p-6 sm:p-10">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-16 text-center space-y-4"
                    >
                      <div className="w-16 h-16 bg-[#ccff00] rounded-full flex items-center justify-center mx-auto text-black text-2xl shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                        <FaPaperPlane />
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white">Packet Transmitted</h3>
                      <p className="font-mono text-xs text-zinc-400 max-w-sm mx-auto">
                        Your parameters have been packaged and sent into WhatsApp uplink.
                      </p>
                      <button 
                        onClick={() => setStatus('idle')} 
                        className="text-[#ccff00] font-mono text-[10px] uppercase tracking-widest border-b border-[#ccff00] pb-0.5 hover:text-white transition-all cursor-pointer"
                      >
                        Initiate_New_Transmission
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest block">01_Agent_Identity</label>
                          <div className="relative">
                            <FaFingerprint className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-600" />
                            <input 
                              required 
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full bg-zinc-950 border border-white/10 rounded-xl pl-10 pr-3 py-3 focus:border-[#ccff00] outline-none transition-all text-xs sm:text-sm text-white placeholder:text-zinc-700 font-mono" 
                              placeholder="Alex Morgan" 
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest block">02_Return_Address</label>
                          <input 
                            required 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-zinc-950 border border-white/10 rounded-xl px-3 py-3 focus:border-[#ccff00] outline-none transition-all text-xs sm:text-sm text-white placeholder:text-zinc-700 font-mono" 
                            placeholder="alex@enterprise.com" 
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest block">03_Service_Focus</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-zinc-950 border border-white/10 rounded-xl px-3 py-3 focus:border-[#ccff00] outline-none transition-all text-xs sm:text-sm text-zinc-300 font-mono cursor-pointer"
                        >
                          <option value="Core_System_Development">Core System Development</option>
                          <option value="AI_Agent_Automation">AI & Neural Systems</option>
                          <option value="Security_Infrastructure_Audit">Security & Infrastructure Audit</option>
                          <option value="Web_App_Engineering">Web & App Engineering</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest block">04_Mission_Briefing</label>
                        <textarea 
                          required 
                          rows="4" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3 focus:border-[#ccff00] outline-none transition-all text-xs sm:text-sm text-white placeholder:text-zinc-700 resize-none font-mono" 
                          placeholder="Describe technical objectives..."
                        />
                      </div>

                      <div className="pt-2">
                        <button 
                          type="submit"
                          disabled={status === 'sending'}
                          className="w-full bg-[#ccff00] text-black py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(204,255,0,0.2)] hover:bg-white transition-all active:scale-98 cursor-pointer disabled:opacity-50"
                        >
                          <span>{status === 'sending' ? 'ENCRYPTING...' : 'TRANSMIT_PACKET'}</span>
                          <FaPaperPlane size={10} />
                        </button>
                      </div>
                      
                      <p className="text-center text-[7.5px] font-mono text-zinc-600 tracking-widest uppercase">
                        ENCRYPTED VIA AES_256 SECURITY PROTOCOL
                      </p>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTerminal, FaEnvelope, FaMapMarkerAlt, FaDiscord, FaGithub, 
  FaLinkedin, FaPaperPlane, FaShieldAlt, FaTwitter, FaSatellite, 
  FaFingerprint, FaLock, FaWifi, FaBroadcastTower, FaMicrochip, FaGlobe
} from 'react-icons/fa';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [latency, setLatency] = useState('24ms');

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      setLatency(`${Math.floor(Math.random() * (40 - 20) + 20)}ms`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 2500);
  };

  const socialLinks = [
    { icon: FaLinkedin, link: "https://linkedin.com/company/codeinnovative", label: "LinkedIn" },
    { icon: FaGithub, link: "https://github.com/codeinnovative", label: "GitHub" },
    { icon: FaTwitter, link: "https://twitter.com/codeinnovative", label: "X_Terminal" },
    { icon: FaDiscord, link: "https://discord.gg/codeinnovative", label: "Comms_Node" }
  ];

  return (
    <div className="bg-[#020202] text-white min-h-screen pt-40 pb-20 selection:bg-[#ccff00] selection:text-black overflow-hidden relative">
      
      {/* 1. CYBERNETIC OVERLAY (GRID & SCANLINES) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,#ccff000a_0%,transparent_70%)]" />
        <div className="w-full h-[2px] bg-[#ccff00]/5 absolute top-0 animate-scanline" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* 2. HUD STATUS BAR */}
        <div className="flex flex-wrap justify-between items-center mb-12 border-b border-white/5 pb-6 font-mono text-[9px] md:text-[10px] tracking-[0.3em] text-zinc-600 uppercase">
          <div className="flex flex-wrap gap-4 md:gap-8 items-center">
            <span className="flex items-center gap-2 text-[#ccff00] font-black">
              <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full animate-pulse shadow-[0_0_8px_#ccff00]" /> 
              UPLINK_ESTABLISHED
            </span>
            <span className="flex items-center gap-2">
              <FaGlobe className="text-[10px]" /> NODE: NOIDA_STATION_01
            </span>
            <span className="hidden sm:block">LATENCY: {latency}</span>
            <span className="text-[#ccff00]/60">{time}</span>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <span className="flex items-center gap-2 italic"><FaShieldAlt /> ENCRYPTION: SECP256K1</span>
            <span className="bg-[#ccff00]/10 text-[#ccff00] px-2 py-0.5 rounded border border-[#ccff00]/20">v4.0.2-STABLE</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* 3. LEFT COLUMN: MISSION BRIEFING */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-[#ccff00] font-mono text-[10px] tracking-[0.5em] font-black uppercase"
              >
                <FaBroadcastTower /> <span>Secure_Transmission_Request</span>
              </motion.div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] italic">
                INITIATE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ccff00] to-zinc-700">HANDSHAKE.</span>
              </h1>
              <p className="text-zinc-500 text-sm md:text-base font-light leading-relaxed max-w-md">
                Deploy your mission parameters. Our engineering core monitors this frequency 24/7 for high-stakes infrastructure deployments.
              </p>
            </div>

            {/* INTERACTIVE LOCATION HUB */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-1 border border-white/5 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent overflow-hidden"
            >
              <div className="bg-[#050505] rounded-[2.4rem] p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-[9px] font-black uppercase tracking-[0.3em] text-[#ccff00] mb-1">Base_Coordinates</h4>
                    <p className="text-white text-lg font-bold tracking-tight">Noida Sector 62, IN</p>
                  </div>
                  <FaSatellite className="text-zinc-800 text-2xl" />
                </div>
                
                <div className="h-44 w-full bg-zinc-950 rounded-2xl border border-white/5 relative group cursor-crosshair overflow-hidden">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                  {/* Digital Map Grid Effect */}
                  <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(to_right,#ccff0005_1px,transparent_1px),linear-gradient(to_bottom,#ccff0005_1px,transparent_1px)]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-[#ccff00]/10 rounded-full animate-ping absolute -top-4 -left-4" />
                    <div className="w-4 h-4 bg-[#ccff00] rounded-full shadow-[0_0_15px_#ccff00] relative z-10">
                        <div className="absolute -top-10 -left-10 text-[8px] font-mono text-[#ccff00] bg-black/80 px-2 py-1 border border-[#ccff00]/30 whitespace-nowrap">
                          ID: HQ_PRIMARY
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CONNECTIVITY CHANNELS */}
            <div className="grid grid-cols-2 gap-4">
              <a href="mailto:hr@codeinnovative.tech" className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#ccff00]/50 transition-all">
                <FaEnvelope className="text-[#ccff00] text-xs mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[8px] font-mono text-zinc-600 uppercase mb-1">E_Mail</p>
                <p className="text-[10px] font-bold text-zinc-300 group-hover:text-white truncate">hr@codeinnovativetechnologies.com</p>
              </a>
              <a href="tel:+918042213489" className="group p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-blue-500/50 transition-all">
                <FaMicrochip className="text-blue-500 text-xs mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-[8px] font-mono text-zinc-600 uppercase mb-1">Analog</p>
                <p className="text-[10px] font-bold text-zinc-300 group-hover:text-white truncate">+91 80 4221 3489</p>
              </a>
            </div>

            {/* SOCIAL DOCK */}
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, backgroundColor: 'rgba(204,255,0,0.1)', borderColor: '#ccff00' }}
                  className="w-10 h-10 rounded-lg border border-white/5 bg-zinc-900/50 flex items-center justify-center text-zinc-500 transition-all"
                  title={social.label}
                >
                  <social.icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* 4. RIGHT COLUMN: THE ENCRYPTED TERMINAL */}
          <div className="lg:col-span-7 relative pt-10 lg:pt-0">
            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#ccff00]/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="bg-[#050505] border border-white/10 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-8 py-4 bg-zinc-950 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ccff00]/20 border border-[#ccff00]/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500/20 border border-blue-500/40" />
                </div>
                <div className="text-[9px] font-mono text-zinc-600 tracking-widest uppercase flex items-center gap-2">
                  <FaLock className="text-[#ccff00]" /> 256_BIT_SSL_TUNNEL
                </div>
              </div>

              <div className="p-8 md:p-12">
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-24 text-center space-y-6"
                    >
                      <div className="w-20 h-20 bg-[#ccff00] rounded-full flex items-center justify-center mx-auto shadow-[0_0_40px_#ccff0044]">
                        <FaPaperPlane className="text-black text-2xl animate-pulse" />
                      </div>
                      <h3 className="text-3xl font-black uppercase tracking-tighter">Packet_Delivered.</h3>
                      <div className="bg-black/50 p-6 rounded-2xl border border-white/5 inline-block text-left">
                        <p className="font-mono text-[10px] text-zinc-500 space-y-1">
                          &gt; STATUS: RECEIVED_BY_CORE <br />
                          &gt; TRACE_ID: {Math.random().toString(36).substr(2, 9).toUpperCase()} <br />
                          &gt; ACTION: SCHEDULING_RECON
                        </p>
                      </div>
                      <br />
                      <button onClick={() => setStatus('idle')} className="text-[#ccff00] font-mono text-[10px] uppercase tracking-widest border-b border-[#ccff00] pb-1 hover:text-white hover:border-white transition-all">
                        Initiate_New_Protocol
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      onSubmit={handleSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] font-mono text-zinc-500 uppercase ml-2 tracking-widest">User_Identity</label>
                          <div className="relative">
                            <FaFingerprint className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700" />
                            <input required className="w-full bg-zinc-950 border border-white/5 rounded-xl pl-12 pr-4 py-4 focus:border-[#ccff00]/50 outline-none transition-all text-xs text-white placeholder:text-zinc-800" placeholder="Agent Name" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] font-mono text-zinc-500 uppercase ml-2 tracking-widest">Return_Path</label>
                          <input required type="email" className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-4 focus:border-[#ccff00]/50 outline-none transition-all text-xs text-white placeholder:text-zinc-800" placeholder="secure@network.com" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] font-mono text-zinc-500 uppercase ml-2 tracking-widest">Service_Frequency</label>
                        <select className="w-full bg-zinc-950 border border-white/5 rounded-xl px-4 py-4 focus:border-[#ccff00]/50 outline-none transition-all text-xs text-zinc-500 appearance-none">
                          <option>Core_System_Development</option>
                          <option>Blockchain_Protocol_Design</option>
                          <option>Security_Infrastructure_Audit</option>
                          <option>AI_Agent_Deployment</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[9px] font-mono text-zinc-500 uppercase ml-2 tracking-widest">Mission_Briefing</label>
                        <textarea required rows="4" className="w-full bg-zinc-950 border border-white/5 rounded-2xl px-4 py-4 focus:border-[#ccff00]/50 outline-none transition-all text-xs text-white placeholder:text-zinc-800 resize-none" placeholder="Enter tactical requirements..."></textarea>
                      </div>

                      <div className="pt-4">
                        <motion.button 
                          disabled={status === 'sending'}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-[#ccff00] text-black py-5 rounded-xl font-black uppercase text-[10px] tracking-[0.4em] flex items-center justify-center gap-3 shadow-[0_10px_30px_-10px_#ccff0066] relative overflow-hidden group"
                        >
                          <span className="relative z-10 flex items-center gap-3">
                            {status === 'sending' ? 'ENCRYPTING...' : 'TRANSMIT_PACKET'} 
                            <FaPaperPlane className="text-[10px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </span>
                          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                      </div>
                      
                      <p className="text-center text-[8px] font-mono text-zinc-700 tracking-widest">
                        BY TRANSMITTING, YOU AGREE TO OUR SECURITY_PROTOCOLS_V4
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        .animate-scanline {
          animation: scanline 6s linear infinite;
        }
      `}</style>
    </div>
  );
}
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaTerminal, 
  FaShieldAlt, FaWifi, FaLock, FaMicrochip, FaGlobe, FaGhost
} from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

export default function ContactForm() {
  const [logs, setLogs] = useState([]);
  const [focusedField, setFocusedField] = useState(null);

  useEffect(() => {
    const messages = [
      "ESTABLISHING_HANDSHAKE...", "BYPASSING_FIREWALL_v2", "ENCRYPTING_PACKETS", 
      "TUNNEL_STABLE_AES256", "UPLINK_READY", "NODES_ACTIVE: 142", "LATENCY_0.02ms"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-5), `[${new Date().toLocaleTimeString()}] ${messages[i % messages.length]}`]);
      i++;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-20 lg:py-44 px-4 sm:px-10 overflow-hidden bg-[#020202] text-zinc-300">
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.05, 0.15, 0.05], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#ccff00]/10 blur-[120px] rounded-full" 
        />
        <div className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: `linear-gradient(#ccff00 1px, transparent 1px), linear-gradient(90deg, #ccff00 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Responsive Header */}
              <div className="flex items-center gap-3 text-[#ccff00] font-mono tracking-[0.4em] text-[10px] sm:text-xs mb-6 uppercase font-black">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]"></span>
                </span>
                <span>COMMS_PROTOCOL_ENCRYPTED</span>
              </div>
              
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase italic">
                Get <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-zinc-100 to-zinc-500">In Touch.</span>
              </h2>
              
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed max-w-md border-l border-[#ccff00]/20 pl-6">
                Direct channel to our lead engineers. Response window: <span className="text-white">{'< 4 Hours'}</span>. 
                Data integrity guaranteed via proprietary zero-trust tunneling.
              </p>
            </motion.div>

            {/* LIVE CONSOLE - Responsive: Hidden on small mobile, flex on others */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="hidden sm:block bg-zinc-950/80 backdrop-blur-xl border border-white/5 p-5 rounded-2xl font-mono text-[9px] md:text-[11px] text-zinc-600 shadow-2xl group overflow-hidden"
            >
              <div className="flex justify-between items-center border-b border-white/5 pb-3 mb-3">
                <div className="flex gap-1.5">
                   <div className="w-2 h-2 rounded-full bg-zinc-800" />
                   <div className="w-2 h-2 rounded-full bg-zinc-800" />
                </div>
                <span className="text-[10px] font-black tracking-widest text-[#ccff00]">LIVE_TERMINAL</span>
              </div>
              <div className="space-y-1.5 min-h-[100px]">
                {logs.map((log, i) => (
                  <motion.p 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    key={i} 
                    className={i === logs.length - 1 ? "text-[#ccff00]" : ""}
                  >
                    {log}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* CONTACT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
               {[
                 { icon: <FaEnvelope />, label: 'Neural Link', val: 'Info@codeinnovativetechnologies.com', color: '#ccff00' },
                 { icon: <FaGlobe />, label: 'Base Station', val: 'Electronic City, BLR', color: '#00e5ff' }
               ].map((card, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-5 bg-white/[0.03] p-5 rounded-2xl border border-white/5 hover:border-zinc-500 transition-all cursor-crosshair"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-lg" style={{ color: card.color }}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 font-bold">{card.label}</p>
                    <p className="text-white text-sm font-bold">{card.val}</p>
                  </div>
                </motion.div>
               ))}
            </div>
          </div>

          {/* --- RIGHT: THE SECURE INPUT HUB --- */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-7 relative group"
          >
            {/* Cyber Frame Decor */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#ccff00]/20 rounded-tr-3xl pointer-events-none group-hover:border-[#ccff00]/50 transition-all duration-500" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#ccff00]/20 rounded-bl-3xl pointer-events-none group-hover:border-[#ccff00]/50 transition-all duration-500" />

            <div className="bg-[#080808]/90 backdrop-blur-3xl p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border border-white/10 shadow-3xl overflow-hidden relative">
              
              <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Name Input */}
                  <div className="relative">
                    <label className={`text-[9px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${focusedField === 'name' ? 'text-[#ccff00]' : 'text-zinc-600'}`}>01_Identity_Header</label>
                    <input 
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      type="text" 
                      placeholder="ENTER NAME" 
                      className="w-full mt-2 bg-transparent border-b-2 border-white/10 p-3 text-white outline-none focus:border-[#ccff00] transition-all font-mono text-sm placeholder:text-zinc-800"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="relative">
                    <label className={`text-[9px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${focusedField === 'type' ? 'text-[#ccff00]' : 'text-zinc-600'}`}>02_Sector_Selection</label>
                    <select 
                      onFocus={() => setFocusedField('type')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full mt-2 bg-transparent border-b-2 border-white/10 p-3 text-white outline-none focus:border-[#ccff00] transition-all font-mono text-sm appearance-none"
                    >
                      <option className="bg-[#080808]">AI_AUTONOMY</option>
                      <option className="bg-[#080808]">CYBER_HARDENING</option>
                      <option className="bg-[#080808]">NEURAL_ARCH</option>
                    </select>
                  </div>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className={`text-[9px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${focusedField === 'email' ? 'text-[#ccff00]' : 'text-zinc-600'}`}>03_Communication_Node</label>
                  <input 
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    type="email" 
                    placeholder="ENTER EMAIL ADDRESS" 
                    className="w-full mt-2 bg-transparent border-b-2 border-white/10 p-3 text-white outline-none focus:border-[#ccff00] transition-all font-mono text-sm placeholder:text-zinc-800"
                  />
                </div>

                {/* Message Input */}
                <div className="relative">
                  <label className={`text-[9px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${focusedField === 'msg' ? 'text-[#ccff00]' : 'text-zinc-600'}`}>04_Requirement_Manifesto</label>
                  <textarea 
                    onFocus={() => setFocusedField('msg')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="DEFINE OBJECTIVES..." 
                    className="w-full mt-2 bg-transparent border-b-2 border-white/10 p-3 text-white outline-none focus:border-[#ccff00] transition-all font-mono text-sm placeholder:text-zinc-800 h-32 resize-none"
                  />
                </div>

                {/* Submit Sequence */}
                <div className="pt-6">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full group relative py-6 bg-[#ccff00] text-black font-black uppercase tracking-[0.5em] text-[10px] sm:text-xs rounded-xl overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      INITIATE_UPLINK <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                    </span>
                    <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                  </motion.button>
                </div>

                {/* Secure Tags */}
                <div className="flex flex-wrap justify-between gap-4 pt-6 opacity-30 group-hover:opacity-100 transition-opacity">
                   <div className="flex items-center gap-2 text-[8px] font-mono uppercase font-black tracking-widest">
                     <FaShieldAlt className="text-[#ccff00]" /> E2E_HARDENED
                   </div>
                   <div className="flex items-center gap-2 text-[8px] font-mono uppercase font-black tracking-widest">
                     <FaLock className="text-[#ccff00]" /> AES_ENCRYPTED
                   </div>
                   <div className="flex items-center gap-2 text-[8px] font-mono uppercase font-black tracking-widest">
                     <FaGhost className="text-[#ccff00]" /> NO_LOGS_KEPT
                   </div>
                </div>

              </form>

              {/* Decorative Scanline */}
              <motion.div 
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-[#ccff00]/10 z-0 pointer-events-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 
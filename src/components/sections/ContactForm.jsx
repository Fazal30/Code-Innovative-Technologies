import { motion } from 'framer-motion';
import { 
  FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaTerminal, 
  FaShieldAlt, FaWifi, FaLock, FaMicrochip 
} from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [logs, setLogs] = useState([]);

  // Simulated System Log
  useEffect(() => {
    const messages = [
      "SYSTEM_READY", "ENCRYPTING_CHANNEL...", "ESTABLISHING_SECURE_TUNNEL", 
      "READY_FOR_TRANSMISSION", "LATENCY_0.04ms"
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogs(prev => [...prev.slice(-4), `> ${messages[i % messages.length]}`]);
      i++;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 lg:py-40 px-6 overflow-hidden bg-transparent">
      
      {/* 1. CYBER BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ccff00]/5 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: SYSTEM STATUS (5 Columns) */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 text-[#ccff00] font-mono tracking-[0.4em] text-[10px] mb-6 uppercase font-black">
                <FaTerminal className="animate-pulse" /> <span>Uplink_Initiation_v4.0</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase italic">
                SECURE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-800">UPLINK.</span>
              </h2>
              
              <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
                Deploy your requirements to our tactical engineering core. We specialize in high-stakes digital infrastructure and autonomous systems.
              </p>
            </motion.div>

            {/* LIVE SYSTEM LOGS */}
            <div className="bg-black border border-white/5 p-6 rounded-2xl font-mono text-[10px] text-zinc-500 space-y-2">
              <div className="flex justify-between border-b border-white/5 pb-2 mb-4">
                <span className="text-zinc-400">CONNECTIVITY_LOG</span>
                <span className="text-[#ccff00] animate-pulse">● LIVE</span>
              </div>
              {logs.map((log, i) => (
                <p key={i} className={i === logs.length - 1 ? "text-[#ccff00]" : ""}>{log}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="flex items-center gap-5 group cursor-pointer bg-white/[0.02] p-4 rounded-2xl border border-white/5 hover:border-[#ccff00]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-[#ccff00] shadow-[0_0_15px_rgba(204,255,0,0.1)]">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-zinc-600 font-black">Secure Mail</p>
                  <p className="text-white text-sm font-bold">hr@codeinnovativetechnologies.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-5 group cursor-pointer bg-white/[0.02] p-4 rounded-2xl border border-white/5 hover:border-cyan-400/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-[8px] uppercase tracking-[0.3em] text-zinc-600 font-black">Base Station</p>
                  <p className="text-white text-sm font-bold">Global Distributed Hub</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: SECURE TERMINAL (7 Columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-[#050505] p-1 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden"
          >
            {/* Top Bar Decoration */}
            <div className="flex items-center justify-between px-8 py-4 bg-zinc-950/50 border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
              </div>
              <span className="text-[9px] font-mono text-zinc-600 tracking-widest uppercase">Encrypted_Packet_v4</span>
            </div>

            <div className="p-8 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-zinc-500 ml-2 uppercase">Full_Identity</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe" 
                      className="w-full p-4 bg-black border border-white/5 rounded-xl outline-none focus:border-[#ccff00]/50 transition-all text-white placeholder:text-zinc-800"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-mono text-zinc-500 ml-2 uppercase">Service_Protocol</label>
                    <select className="w-full p-4 bg-black border border-white/5 rounded-xl outline-none focus:border-[#ccff00]/50 transition-all text-zinc-500 appearance-none">
                      <option>AI_&_Automation</option>
                      <option>Cloud_Forge</option>
                      <option>Cyber_Defense</option>
                      <option>Product_Engineering</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-zinc-500 ml-2 uppercase">Return_Frequency (Email)</label>
                  <input 
                    type="email" 
                    placeholder="user@network.com" 
                    className="w-full p-4 bg-black border border-white/5 rounded-xl outline-none focus:border-[#ccff00]/50 transition-all text-white placeholder:text-zinc-800"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-zinc-500 ml-2 uppercase">Mission_Parameters</label>
                  <textarea 
                    placeholder="Briefly describe your technical objectives..." 
                    className="w-full p-4 bg-black border border-white/5 rounded-xl h-32 outline-none focus:border-[#ccff00]/50 transition-all text-white placeholder:text-zinc-800 resize-none"
                  />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4">
                   <div className="flex items-center gap-2 text-zinc-600">
                      <FaShieldAlt className="text-[10px]" /> <span className="text-[8px] font-mono uppercase">E2E_Encrypted</span>
                   </div>
                   <div className="flex items-center gap-2 text-zinc-600">
                      <FaWifi className="text-[10px]" /> <span className="text-[8px] font-mono uppercase">Priority_Sync</span>
                   </div>
                   <div className="flex items-center gap-2 text-zinc-600">
                      <FaLock className="text-[10px]" /> <span className="text-[8px] font-mono uppercase">GDPR_Compliant</span>
                   </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.01, boxShadow: "0 0 40px rgba(204, 255, 0, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative overflow-hidden group bg-[#ccff00] text-black py-5 rounded-xl font-black text-xs uppercase tracking-[0.3em] transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Transmit Mission <FaPaperPlane className="text-xs group-hover:translate-x-2 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaMicrochip, FaUsers, FaGlobe, FaShieldAlt, FaRocket, FaCogs } from 'react-icons/fa';

const coreValues = [
  { word: 'Trust', color: 'text-amber-500', bg: 'bg-amber-500/10', icon: <FaShieldAlt />, desc: 'End-to-end data integrity' },
  { word: 'Agility', color: 'text-[#ccff00]', bg: 'bg-[#ccff00]/10', icon: <FaMicrochip />, desc: 'Rapid sprint cycles' },
  { word: 'Success', color: 'text-cyan-400', bg: 'bg-cyan-400/10', icon: <FaRocket />, desc: 'ROI-focused deployment' },
  { word: 'Quality', color: 'text-fuchsia-500', bg: 'bg-fuchsia-500/10', icon: <FaCogs />, desc: 'Clean architecture standards' }
];

const stats = [
  { label: 'Lines Scanned', value: '4.2M+', color: 'text-[#ccff00]' },
  { label: 'Uptime Rate', value: '99.9%', color: 'text-white' },
  { label: 'Active Nodes', value: '142+', color: 'text-cyan-400' }
];

export default function WhoWeAre() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateImg = useTransform(scrollYProgress, [0, 1], [-1, 1]);

  return (
    <section ref={containerRef} className="relative py-32 lg:py-56 overflow-hidden bg-[#020202]">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full whitespace-nowrap text-[15rem] font-black text-white/[0.01] select-none -translate-y-1/2 tracking-tighter">
          CODE_MISSION_v2.0 // INNOVATE_OR_EXPIRE // CORE_PROTOCOL
        </div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ccff00]/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT: VISUAL TERMINAL --- */}
          <motion.div 
            style={{ y: yText, rotate: rotateImg }}
            className="relative group hidden lg:block sticky top-32"
          >
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/5] bg-zinc-950">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="Mainframe" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              />
              
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,4px_100%]" />

              <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/80 backdrop-blur-xl border border-white/5 rounded-2xl">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[8px] font-mono text-[#ccff00] tracking-[0.4em] mb-2 uppercase">Core_Values_Index</p>
                    <h4 className="text-white font-bold text-lg">Engineering Sovereignty</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[14px] font-black text-white">EST. 2021</p>
                    <p className="text-[7px] font-mono text-zinc-500 uppercase tracking-widest">System_Active</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: THE NARRATIVE --- */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="h-[1px] w-12 bg-[#ccff00]/40" />
                <span className="text-[#ccff00] text-[9px] font-black uppercase tracking-[0.5em]">Identity_Protocol_01</span>
              </div>
              
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.85] uppercase italic">
                Beyond Code. <br />
                <span className="text-zinc-700">Intelligent</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Foundry.</span>
              </h3>

              <div className="space-y-6 text-sm md:text-base text-zinc-400 font-medium leading-relaxed max-w-xl">
                <p>
                  At <span className="text-white font-bold">CODE Innovative Technologies</span>, we bridge the gap between radical AI innovation and industrial-scale reliability. Our journey began with a single mission: to eliminate technical debt by architecting <span className="text-[#ccff00]">digital legacies</span> that never expire.
                </p>
                <p>
                  We are not just a service provider; we are your tactical technology partner. From predictive analytics to zero-latency cloud infrastructure, our engineering standards are built on high-class precision and measurable ROI.
                </p>
              </div>
            </motion.div>

            {/* MISSION & VISION SUB-GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div className="space-y-3">
                <h5 className="text-[#ccff00] text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#ccff00] rounded-full" /> Our Vision
                </h5>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  To become the global benchmark for technical excellence, where code becomes the catalyst for industrial evolution.
                </p>
              </div>
              <div className="space-y-3">
                <h5 className="text-cyan-400 text-[10px] font-black tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" /> Our Mission
                </h5>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  Combining advanced AI, strategic thinking, and zero-trust security to drive impactful digital growth globally.
                </p>
              </div>
            </div>

            {/* STRATEGIC CORE VALUES */}
            <div className="grid grid-cols-2 gap-4">
              {coreValues.map((item, i) => (
                <motion.div
                  key={item.word}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="p-5 rounded-xl border border-white/5 bg-zinc-950/50 flex flex-col gap-4 group transition-all"
                >
                  <div className={`w-10 h-10 rounded-lg ${item.bg} ${item.color} flex items-center justify-center text-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-black uppercase tracking-tight">{item.word}</h4>
                    <p className="text-[9px] text-zinc-500 uppercase tracking-widest mt-1 font-mono">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LIVE DATA STATS */}
            <div className="flex justify-between items-center py-6 px-8 bg-[#ccff00] rounded-2xl">
              {stats.map((stat, i) => (
                <div key={i} className="text-black">
                  <p className="text-2xl font-black leading-none">{stat.value}</p>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] mt-1 opacity-70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
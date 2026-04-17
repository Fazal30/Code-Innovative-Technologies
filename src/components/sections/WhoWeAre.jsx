import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaMicrochip, FaUsers, FaGlobe, FaShieldAlt, FaRocket, FaCogs, FaChevronRight } from 'react-icons/fa';

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
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets for mobile depth
  const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const bgTextX = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 lg:py-56 overflow-hidden bg-[#020202]">
      
      {/* --- RESPONSIVE BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ x: bgTextX }}
          className="absolute top-1/2 left-0 w-full whitespace-nowrap text-[8rem] md:text-[15rem] font-black text-white/[0.02] select-none -translate-y-1/2 tracking-tighter"
        >
          CODE_MISSION_v2.0 // INNOVATE_OR_EXPIRE // CORE_PROTOCOL
        </motion.div>
        
        {/* Animated Glows - Adjusted for Mobile viewports */}
        <div className="absolute -top-24 -right-24 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#ccff00]/10 blur-[100px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-0 -left-24 w-[250px] h-[250px] bg-cyan-500/5 blur-[80px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
          
          {/* --- LEFT: VISUAL TERMINAL (Responsive: Hidden on small mobile, parallax on desktop) --- */}
          <motion.div 
            style={{ y: yText }}
            className="relative group hidden md:block lg:sticky lg:top-32"
          >
            <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 aspect-[4/5] bg-zinc-950">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
                alt="Mainframe" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%),linear-gradient(90deg,rgba(204,255,0,0.05),rgba(0,0,0,0),rgba(0,255,255,0.05))] bg-[length:100%_4px,4px_100%]" />

              <div className="absolute bottom-6 left-6 right-6 p-5 md:bottom-8 md:left-8 md:right-8 md:p-6 bg-black/80 backdrop-blur-xl border border-white/5 rounded-2xl">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[7px] md:text-[8px] font-mono text-[#ccff00] tracking-[0.4em] mb-2 uppercase">Core_Values_Index</p>
                    <h4 className="text-white font-bold text-base md:text-lg tracking-tight">Engineering Sovereignty</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] md:text-[14px] font-black text-white leading-none">EST. 2021</p>
                    <p className="text-[6px] md:text-[7px] font-mono text-zinc-500 uppercase tracking-widest mt-1">System_Active</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT: THE NARRATIVE (Responsive: Staggered Fade In) --- */}
          <div className="space-y-10 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              <div className="flex items-center gap-4">
                <motion.span 
                   initial={{ width: 0 }} 
                   whileInView={{ width: 48 }} 
                   className="h-[1px] bg-[#ccff00]/40" 
                />
                <span className="text-[#ccff00] text-[8px] md:text-[9px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em]">Identity_Protocol_01</span>
              </div>
              
              <h3 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase italic">
                Beyond Code. <br />
                <span className="text-zinc-800">Intelligent</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">Foundry.</span>
              </h3>

              <div className="space-y-5 text-sm md:text-base text-zinc-400 font-medium leading-relaxed max-w-xl">
                <p>
                  At <span className="text-white font-bold">CODE Innovative Technologies</span>, we bridge the gap between radical AI innovation and industrial-scale reliability. Our journey began with a single mission: to eliminate technical debt.
                </p>
                <p className="hidden sm:block">
                  We are not just a service provider; we are your tactical technology partner. From predictive analytics to zero-latency cloud infrastructure, our engineering standards are built on high-class precision.
                </p>
              </div>
            </motion.div>

            {/* MISSION & VISION SUB-GRID (Responsive: Stays 2 cols on tablet, 1 on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-8 border-t border-white/5">
              {[
                { label: 'Our Vision', color: 'text-[#ccff00]', dot: 'bg-[#ccff00]', text: 'To become the global benchmark for technical excellence.' },
                { label: 'Our Mission', color: 'text-cyan-400', dot: 'bg-cyan-400', text: 'Combining advanced AI and zero-trust security to drive growth.' }
              ].map((box, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <h5 className={`${box.color} text-[10px] font-black tracking-widest uppercase flex items-center gap-2`}>
                    <span className={`w-1.5 h-1.5 ${box.dot} rounded-full animate-pulse`} /> {box.label}
                  </h5>
                  <p className="text-[11px] text-zinc-500 leading-relaxed font-mono uppercase italic">
                    {box.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* STRATEGIC CORE VALUES (Responsive: 2x2 grid always) */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {coreValues.map((item, i) => (
                <motion.div
                  key={item.word}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 md:p-5 rounded-xl md:rounded-2xl border border-white/5 bg-zinc-950/50 flex flex-col gap-3 md:gap-4 hover:border-[#ccff00]/20 transition-all active:bg-zinc-900"
                >
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${item.bg} ${item.color} flex items-center justify-center text-base md:text-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-[12px] md:text-sm font-black uppercase tracking-tight">{item.word}</h4>
                    <p className="text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest mt-1 font-mono leading-tight">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* LIVE DATA STATS (Responsive: Stacked on tiny mobile, row on others) */}
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-between items-center py-6 sm:py-8 px-8 md:px-10 bg-[#ccff00] rounded-[1.5rem] md:rounded-[2rem] gap-6 sm:gap-0 relative overflow-hidden"
            >
              {/* HUD Element for Stat Bar */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '12px 12px' }} />

              {stats.map((stat, i) => (
                <div key={i} className="text-black text-center sm:text-left relative z-10">
                  <motion.p 
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    className="text-3xl md:text-4xl font-black leading-none tracking-tighter"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-[0.2em] mt-1.5 opacity-80">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
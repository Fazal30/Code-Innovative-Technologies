import { motion } from 'framer-motion';
import { FaMicrochip, FaShieldAlt, FaRocket, FaCogs } from 'react-icons/fa';
import Counter from '../ui/Counter';

const coreValues = [
  { word: 'Trust', color: 'text-amber-400', bg: 'bg-amber-400/10', icon: FaShieldAlt, desc: 'End-to-end data integrity' },
  { word: 'Agility', color: 'text-[#ccff00]', bg: 'bg-[#ccff00]/10', icon: FaMicrochip, desc: 'Rapid sprint cycles' },
  { word: 'Success', color: 'text-cyan-400', bg: 'bg-cyan-400/10', icon: FaRocket, desc: 'ROI-focused deployment' },
  { word: 'Quality', color: 'text-fuchsia-400', bg: 'bg-fuchsia-400/10', icon: FaCogs, desc: 'Clean architecture standards' }
];

export default function WhoWeAre() {
  return (
    <div className="relative">
      <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
        
        {/* --- LEFT: VISUAL TERMINAL --- */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] bg-zinc-950 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800" 
              alt="Mainframe" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-75 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 p-5 sm:bottom-6 sm:left-6 sm:right-6 sm:p-6 bg-black/85 backdrop-blur-xl border border-white/10 rounded-2xl">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[7px] sm:text-[8px] font-mono text-[#ccff00] tracking-[0.3em] mb-1 uppercase font-bold">
                    Core_Values_Index
                  </p>
                  <h4 className="text-white font-bold text-sm sm:text-base tracking-tight">
                    Engineering Sovereignty
                  </h4>
                </div>
                <div className="text-right">
                  <p className="text-xs sm:text-sm font-black text-white font-mono">EST. 2021</p>
                  <p className="text-[7px] font-mono text-emerald-400 uppercase mt-0.5">ACTIVE</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT: THE NARRATIVE --- */}
        <div className="lg:col-span-7 space-y-8 sm:space-y-10">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] uppercase italic">
              Beyond Code. <br />
              <span className="text-zinc-600">Intelligent</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                Foundry.
              </span>
            </h3>

            <div className="space-y-4 text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed font-light">
              <p>
                At <span className="text-white font-bold">Code Innovative Technologies</span>, we bridge the gap between radical AI innovation and industrial-scale reliability.
              </p>
              <p>
                We are your tactical technology partner. From predictive analytics to zero-latency cloud infrastructure, our engineering standards are built on high-precision rigor.
              </p>
            </div>
          </div>

          {/* MISSION & VISION SUB-GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 border-t border-white/5">
            {[
              { label: 'Our Vision', color: 'text-[#ccff00]', dot: 'bg-[#ccff00]', text: 'To become the benchmark for technical excellence and resilient systems.' },
              { label: 'Our Mission', color: 'text-cyan-400', dot: 'bg-cyan-400', text: 'Combining advanced AI and zero-trust security to accelerate growth.' }
            ].map((box, i) => (
              <div key={i} className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5 space-y-2">
                <h5 className={`${box.color} text-[9px] sm:text-[10px] font-black tracking-widest uppercase flex items-center gap-2`}>
                  <span className={`w-1.5 h-1.5 ${box.dot} rounded-full animate-pulse`} /> {box.label}
                </h5>
                <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-relaxed font-mono">
                  {box.text}
                </p>
              </div>
            ))}
          </div>

          {/* STRATEGIC CORE VALUES (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {coreValues.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.word}
                  className="p-3.5 sm:p-4 rounded-2xl border border-white/5 bg-zinc-950/60 flex flex-col gap-2.5 hover:border-[#ccff00]/30 transition-all"
                >
                  <div className={`w-8 h-8 rounded-xl ${item.bg} ${item.color} flex items-center justify-center text-sm`}>
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-white text-xs sm:text-sm font-black uppercase">{item.word}</h4>
                    <p className="text-[8px] sm:text-[9px] text-zinc-500 uppercase tracking-wider mt-0.5 font-mono">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* LIVE DATA STATS WITH ANIMATED COUNTERS */}
          <div className="grid grid-cols-3 gap-3 p-5 sm:p-7 bg-[#ccff00] rounded-2xl sm:rounded-3xl shadow-xl text-black">
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-4xl font-black font-mono leading-none tracking-tighter">
                <Counter from={0} to={4.2} duration={2} suffix="M+" />
              </p>
              <p className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider mt-1 opacity-80">
                Lines Scanned
              </p>
            </div>

            <div className="text-center sm:text-left border-x border-black/10 px-2 sm:px-4">
              <p className="text-2xl sm:text-4xl font-black font-mono leading-none tracking-tighter">
                <Counter from={0} to={99.9} duration={2.2} suffix="%" />
              </p>
              <p className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider mt-1 opacity-80">
                Uptime Target
              </p>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-4xl font-black font-mono leading-none tracking-tighter">
                <Counter from={0} to={142} duration={2.5} suffix="+" />
              </p>
              <p className="text-[7px] sm:text-[8px] font-black uppercase tracking-wider mt-1 opacity-80">
                Active Nodes
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaSync, FaHeadset, FaTerminal, 
  FaFingerprint, FaCodeBranch, FaLayerGroup, FaRobot 
} from 'react-icons/fa';
import { MdGraphicEq } from 'react-icons/md';

const features = [
  { 
    title: 'Precision Logic', 
    desc: 'Architecting business DNA through deep dependency mapping to eliminate technical debt before deployment.',
    icon: <FaTerminal />, 
    color: 'text-[#ccff00]',
    glow: 'hover:shadow-[#ccff00]/20',
    border: 'group-hover:border-[#ccff00]/50' 
  },
  { 
    title: 'Velocity Protocol', 
    desc: 'Rapid-Pulse CI/CD pipelines enabling feature deployment at the speed of thought without downtime.',
    icon: <FaCodeBranch />, 
    color: 'text-[#ccff00]',
    glow: 'hover:shadow-[#ccff00]/20',
    border: 'group-hover:border-[#ccff00]/50' 
  },
  { 
    title: 'Ghost Security', 
    desc: 'Bespoke zero-trust encryption layers and AES-256 hardening to keep assets invisible to external threats.',
    icon: <FaShieldAlt />, 
    color: 'text-[#ccff00]',
    glow: 'hover:shadow-[#ccff00]/20',
    border: 'group-hover:border-[#ccff00]/50' 
  },
  { 
    title: 'Predictive Ops', 
    desc: 'Real-time telemetry and monitoring. If a node flinches, our tactical team has already neutralized the lag.',
    icon: <FaHeadset />, 
    color: 'text-[#ccff00]',
    glow: 'hover:shadow-[#ccff00]/20',
    border: 'group-hover:border-[#ccff00]/50' 
  },
  { 
    title: 'Infinite Scale', 
    desc: 'Cloud-native architectures that expand dynamically with your user base, ensuring zero performance drop.',
    icon: <FaLayerGroup />, 
    color: 'text-[#ccff00]',
    glow: 'hover:shadow-[#ccff00]/20',
    border: 'group-hover:border-[#ccff00]/50' 
  },
  { 
    title: 'AI Automation', 
    desc: 'Integrating RPA and machine learning to remove human friction from complex data-heavy workflows.',
    icon: <FaRobot />, 
    color: 'text-[#ccff00]',
    glow: 'hover:shadow-[#ccff00]/20',
    border: 'group-hover:border-[#ccff00]/50' 
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-40 px-6 relative overflow-hidden bg-[#020202]">
      
      {/* --- CYBER BACKGROUND ELEMENTS --- */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />
      
      {/* Background Vertical Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 flex flex-col gap-20 opacity-5 pointer-events-none select-none">
         <span className="text-[12vw] font-black text-white leading-none rotate-90 origin-left">RELIABILITY</span>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start relative z-10">
        
        {/* LEFT: THE BLUEPRINT VISUAL (COL 1-5) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 rounded-[2.5rem] p-px bg-gradient-to-b from-[#ccff00]/40 via-white/5 to-transparent overflow-hidden group shadow-2xl">
            <div className="bg-[#080808] rounded-[2.4rem] overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000" 
                alt="Datacenter Architecture" 
                className="w-full h-[500px] lg:h-[750px] object-cover grayscale opacity-30 group-hover:opacity-50 transition-all duration-1000" 
              />
              
              {/* HUD ELEMENTS OVER IMAGE */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-[#ccff00]/20">
                     <p className="text-[#ccff00] font-mono text-[9px] tracking-widest uppercase mb-1">Packet_Loss_Rate</p>
                     <p className="text-white text-xl font-black">0.0001%</p>
                  </div>
                  <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white text-xs font-mono animate-spin-slow">
                    SYNC
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-black/80 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Load_Balancer_Status</span>
                       <span className="text-[#ccff00] text-[10px] font-bold">OPTIMIZED</span>
                    </div>
                    <div className="flex gap-1 h-8 items-end">
                      {[40, 70, 45, 90, 65, 80, 30, 95, 70, 50].map((h, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }}
                          transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.1 }}
                          className="flex-1 bg-[#ccff00]/40 rounded-sm"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Laser Scanline */}
              <motion.div 
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-[2px] bg-[#ccff00] shadow-[0_0_15px_#ccff00] z-20 pointer-events-none"
              />
            </div>
          </div>

          {/* FLOAT BADGE */}
          <div className="absolute -bottom-6 -right-6 bg-[#ccff00] p-8 rounded-3xl text-black shadow-2xl z-30 hidden lg:block">
             <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">SLA_Guarantee</p>
             <h4 className="text-6xl font-black italic tracking-tighter">99.9%</h4>
          </div>
        </motion.div>

        {/* RIGHT: THE CONTENT (COL 6-12) */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex items-center gap-4 text-[#ccff00] font-mono text-[10px] tracking-[0.5em] uppercase"
            >
              <span className="w-12 h-px bg-[#ccff00]/40" /> Efficiency_Matrix
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] uppercase italic">
              Industrial <br /> 
              <span className="text-zinc-800">Precision.</span> <br /> 
              Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">Dominance.</span>
            </h2>

            <p className="text-zinc-500 text-lg leading-relaxed max-w-xl">
              We specialize in complex system overrides. CODE Innovative Technologies builds the infrastructure that keeps the world’s most ambitious businesses running without friction.
            </p>
          </div>

          {/* THE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#ccff00]/30 transition-all group"
              >
                <div className="text-[#ccff00] text-2xl mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-white text-sm font-black uppercase tracking-widest mb-2">{item.title}</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-mono uppercase tracking-tight">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* STRATEGIC ADVANTAGES DATA STRIP */}
          <div className="pt-10 border-t border-white/5 flex flex-wrap gap-8">
            <div className="flex-1 min-w-[200px] p-6 rounded-2xl bg-zinc-950/50 border border-white/5">
               <p className="text-[9px] text-zinc-600 uppercase tracking-widest mb-4">Development_Cycle</p>
               <div className="flex items-end gap-2">
                  <span className="text-white text-3xl font-black">40%</span>
                  <span className="text-[#ccff00] text-[10px] font-bold mb-1 uppercase tracking-tighter italic">Faster Deployment</span>
               </div>
            </div>
            <div className="flex-1 min-w-[200px] p-6 rounded-2xl bg-zinc-950/50 border border-white/5">
               <p className="text-[9px] text-zinc-600 uppercase tracking-widest mb-4">Security_Standard</p>
               <div className="flex items-end gap-2">
                  <span className="text-white text-3xl font-black">ZERO</span>
                  <span className="text-cyan-400 text-[10px] font-bold mb-1 uppercase tracking-tighter italic">Critical Failures</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
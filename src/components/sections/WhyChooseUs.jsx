import { motion } from 'framer-motion';
import { 
  FaShieldAlt, FaTerminal, FaCodeBranch, FaRobot, FaMicrochip, FaCogs, FaFingerprint
} from 'react-icons/fa';
import SpotlightCard from '../ui/SpotlightCard';

const features = [
  { 
    title: 'Precision Logic', 
    desc: 'Architecting business DNA through deep dependency mapping to eliminate technical debt before deployment.',
    icon: FaTerminal, 
    color: 'text-[#ccff00]'
  },
  { 
    title: 'Velocity Protocol', 
    desc: 'Rapid-Pulse CI/CD pipelines enabling feature deployment at the speed of thought without downtime.',
    icon: FaCodeBranch, 
    color: 'text-cyan-400'
  },
  { 
    title: 'Ghost Security', 
    desc: 'Bespoke zero-trust encryption layers and AES-256 hardening to keep assets invisible to threats.',
    icon: FaShieldAlt, 
    color: 'text-emerald-400'
  },
  { 
    title: 'AI Automation', 
    desc: 'Integrating cognitive models to remove human friction from complex enterprise data workflows.',
    icon: FaRobot, 
    color: 'text-purple-400'
  }
];

export default function WhyChooseUs() {
  return (
    <div className="relative">
      
      {/* SECTION HEADER */}
      <div className="mb-12 sm:mb-16">
        <div className="flex items-center gap-3 text-black font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-3 font-bold">
          <span className="w-8 h-px bg-black" /> Engineering_Excellence
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-black leading-[0.9] uppercase">
          Built for <br /> 
          <span className="italic">Extreme</span> Scale.
        </h2>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* LEFT: BLUEPRINT & METRICS */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl border border-black/10 bg-black/90 backdrop-blur-2xl overflow-hidden p-3 shadow-2xl">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                alt="Microchip Architecture" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-all duration-700" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-ping" />
                      <span className="text-[9px] font-mono text-[#ccff00] uppercase tracking-widest">
                        Core_Temp: 32°C
                      </span>
                    </div>
                    <div className="text-white text-2xl sm:text-3xl font-black font-mono tracking-tighter">
                      8.4 THz
                    </div>
                  </div>
                  <FaMicrochip className="text-[#ccff00]/40 text-3xl" />
                </div>

                <div className="bg-black/80 border border-white/10 backdrop-blur-xl p-4 sm:p-5 rounded-xl">
                  <p className="text-[8px] font-mono text-zinc-400 uppercase tracking-[0.2em] mb-3">
                    Neural_Network_Throughput
                  </p>
                  <div className="flex items-end gap-1.5 h-10">
                    {[50, 75, 40, 90, 65, 80, 45, 95, 70, 85].map((h, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: [`${h}%`, `${Math.max(20, h - 30)}%`, `${h}%`] }}
                        transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.12 }}
                        className="flex-1 bg-[#ccff00] rounded-t-sm opacity-75"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: FEATURE CARDS GRID */}
        <div className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i}
                  className="p-6 rounded-2xl border border-black/10 bg-black/90 text-white hover:border-[#ccff00]/50 transition-all group shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-lg mb-4 text-[#ccff00] border border-white/5 group-hover:scale-110 transition-transform">
                    <Icon />
                  </div>
                  <h4 className="text-white text-base font-black uppercase tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* TACTICAL METRIC BAR */}
          <div className="bg-black text-white p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl border border-white/5">
            <div className="text-center sm:text-left">
              <p className="text-zinc-500 text-[8px] font-mono uppercase tracking-widest mb-0.5">Global_Uptime</p>
              <h5 className="text-[#ccff00] text-3xl sm:text-4xl font-black italic tracking-tighter">
                99.99%
              </h5>
            </div>
            <div className="h-px sm:h-12 w-full sm:w-px bg-white/10" />
            <div className="text-center sm:text-left">
              <p className="text-zinc-500 text-[8px] font-mono uppercase tracking-widest mb-0.5">Response_Window</p>
              <h5 className="text-cyan-400 text-3xl sm:text-4xl font-black italic tracking-tighter">
                &lt;4h
              </h5>
            </div>
            <a 
              href="/contact"
              className="w-full sm:w-auto text-center bg-[#ccff00] text-black px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all active:scale-95"
            >
              Get Started
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
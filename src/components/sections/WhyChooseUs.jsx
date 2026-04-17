import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaShieldAlt, FaSync, FaHeadset, FaTerminal, 
  FaFingerprint, FaCodeBranch, FaLayerGroup, FaRobot, FaMicrochip, FaCogs
} from 'react-icons/fa';

const features = [
  { 
    title: 'Precision Logic', 
    desc: 'Architecting business DNA through deep dependency mapping to eliminate technical debt before deployment.',
    icon: <FaTerminal />, 
    color: 'text-[#ccff00]'
  },
  { 
    title: 'Velocity Protocol', 
    desc: 'Rapid-Pulse CI/CD pipelines enabling feature deployment at the speed of thought without downtime.',
    icon: <FaCodeBranch />, 
    color: 'text-[#ccff00]'
  },
  { 
    title: 'Ghost Security', 
    desc: 'Bespoke zero-trust encryption layers and AES-256 hardening to keep assets invisible to threats.',
    icon: <FaShieldAlt />, 
    color: 'text-[#ccff00]'
  },
  { 
    title: 'AI Automation', 
    desc: 'Integrating RPA and machine learning to remove human friction from complex data workflows.',
    icon: <FaRobot />, 
    color: 'text-[#ccff00]'
  }
];

export default function WhyChooseUs() {
  const [temp, setTemp] = useState(32);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  useEffect(() => {
  const storedTemp = localStorage.getItem('system_temp');
  if (storedTemp) {
    setTemp(storedTemp);
  }
}, []);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <section ref={containerRef} className="py-20 lg:py-48 px-4 md:px-10 relative overflow-hidden bg-[#020202]">

      <div className="absolute inset-0 z-0 opacity-20" 
        style={{ 
          backgroundImage: `linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
        }} 
      />
      
      {/* 2. Floating Parallax HUD Text */}
      <motion.div style={{ y: y1 }} className="absolute top-20 right-10 text-[10vw] font-black text-white/[0.02] select-none whitespace-nowrap hidden lg:block">
        PRECISION_ENGINEERING
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-20 left-10 text-[10vw] font-black text-white/[0.02] select-none whitespace-nowrap hidden lg:block">
        ZERO_FAILURE_POLICY
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-20 lg:mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 text-[#ccff00] font-mono text-[10px] tracking-[0.5em] uppercase mb-6"
          >
            <span className="w-12 h-px bg-[#ccff00]" /> Hardware_Software_Synthesis
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[0.85] uppercase">
            Built for <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-white">Extreme</span> <br /> 
            Performance.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-center">
          
          {/* LEFT: THE INTERACTIVE BLUEPRINT */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div 
              style={{ rotateY: 10 }}
              className="relative z-10 rounded-[2rem] border border-white/10 bg-zinc-900/50 backdrop-blur-3xl overflow-hidden p-2"
            >
              <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden">
                 <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
                  alt="Microchip Architecture" 
                  className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-all duration-700" 
                />
                
                {/* HUD SCANNER EFFECT */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
                
                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
  <div className="space-y-1">
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-[#ccff00] rounded-full animate-ping" />
      <span className="text-[10px] font-mono text-[#ccff00] uppercase tracking-widest">
        Core_Temp: {temp}°C
      </span>
    </div>
    <div className="text-white text-3xl font-black font-mono tracking-tighter">8.4 THz</div>
  </div>
  <FaMicrochip className="text-white/20 text-4xl" />
</div>

                  <div className="bg-black/40 border border-white/10 backdrop-blur-xl p-6 rounded-2xl">
                    <p className="text-[8px] font-mono text-zinc-500 uppercase tracking-[0.3em] mb-4">Neural_Network_Load</p>
                    <div className="flex items-end gap-1.5 h-12">
                      {[60, 40, 90, 70, 50, 80, 40, 60, 90, 30].map((h, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: [`${h}%`, `${h-20}%`, `${h}%`] }}
                          transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                          className="flex-1 bg-[#ccff00] rounded-t-sm opacity-60"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* DECORATIVE ELEMENTS */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-2 border-l-2 border-[#ccff00]/30 rounded-tl-3xl hidden md:block" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b-2 border-r-2 border-[#ccff00]/30 rounded-br-3xl hidden md:block" />
          </div>

          {/* RIGHT: FEATURE CARDS GRID */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {features.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-8 rounded-3xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.07] hover:border-[#ccff00]/40 transition-all group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    {item.icon}
                  </div>
                  <div className="text-[#ccff00] text-3xl mb-6 bg-[#ccff00]/10 w-14 h-14 rounded-2xl flex items-center justify-center border border-[#ccff00]/20">
                    {item.icon}
                  </div>
                  <h4 className="text-white text-xl font-bold uppercase tracking-tight mb-3">{item.title}</h4>
                  <p className="text-sm text-zinc-500 leading-relaxed font-mono uppercase italic tracking-tighter">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* TACTICAL METRIC BAR */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#ccff00] p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-center gap-8 shadow-[0_20px_50px_rgba(204,255,0,0.2)]"
            >
              <div className="text-center md:text-left">
                <p className="text-black/50 text-[10px] font-black uppercase tracking-widest mb-1">Global_Uptime</p>
                <h5 className="text-black text-6xl font-black italic tracking-tighter">99.99<span className="text-[20px]">%</span></h5>
              </div>
              <div className="h-px md:h-20 w-full md:w-px bg-black/10" />
              <div className="text-center md:text-left">
                <p className="text-black/50 text-[10px] font-black uppercase tracking-widest mb-1">Response_Time</p>
                <h5 className="text-black text-6xl font-black italic tracking-tighter">14<span className="text-[20px]">ms</span></h5>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-[#ccff00] px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em]"
              >
                Audit_Now
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* STRATEGIC PARTNERS / LOGO STRIP */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-wrap justify-center lg:justify-between items-center gap-12 grayscale opacity-30">
           <span className="text-white font-mono text-xs tracking-[0.5em] uppercase">Trusted By Heavy Industry:</span>
           <div className="flex gap-12 items-center">
              <FaCogs size={30} className="text-white" />
              <FaFingerprint size={30} className="text-white" />
              <FaTerminal size={30} className="text-white" />
              <FaCodeBranch size={30} className="text-white" />
           </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          from { transform: translateY(-100%); }
          to { transform: translateY(1000%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
}
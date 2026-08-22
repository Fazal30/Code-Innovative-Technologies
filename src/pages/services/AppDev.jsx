import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaMobileAlt, FaLayerGroup, FaBolt, FaMicrochip, 
  FaDatabase, FaServer, FaCodeBranch, FaShieldAlt, FaChevronRight 
} from 'react-icons/fa';
import { SiFlutter, SiKotlin, SiSwift, SiReact, SiApple, SiAndroid } from 'react-icons/si';
import SpotlightCard from '../../components/ui/SpotlightCard';
import Counter from '../../components/ui/Counter';

const techDetails = [
  { 
    title: "Native iOS & Android Engineering", 
    icon: FaMobileAlt, 
    text: "Bespoke Swift, Kotlin, and React Native platforms engineered for 120Hz fluid gesture responsiveness and zero memory leaks.",
    color: "#10b981"
  },
  { 
    title: "Edge Sync & Offline Architecture", 
    icon: FaBolt, 
    text: "Offline-first databases (WatermelonDB, SQLite) with conflict-free replicated data types (CRDT) for instantaneous synchronization.",
    color: "#ccff00"
  },
  { 
    title: "Biometric Hardened Security", 
    icon: FaShieldAlt, 
    text: "Hardware KeyStore and Secure Enclave tokenization protecting user authentication, cryptographic keys, and sensitive financial data.",
    color: "#00e5ff"
  },
  { 
    title: "High-Frequency Real-time SDKs", 
    icon: FaLayerGroup, 
    text: "Type-safe gRPC and WebSocket streams delivering sub-15ms telemetry updates for high-stakes trading, messaging, and IoT control.",
    color: "#a855f7"
  }
];

const developmentPhases = [
  { id: "01", name: "User Journey & Architecture", desc: "Deconstructing core workflows and designing offline-first state machines." },
  { id: "02", name: "High-Fidelity UI/UX Systems", desc: "Crafting micro-interactions, responsive typography, and tactile haptic feedback." },
  { id: "03", name: "Sprint Execution & Testing", desc: "Bi-weekly release cycles with automated Device Farm testing across 100+ screen sizes." },
  { id: "04", name: "Store Deployment & Monitoring", desc: "Automated App Store and Google Play releases with real-time crash and ANR analytics." }
];

export default function AppDev() {
  return (
    <article className="bg-transparent min-h-screen text-white selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden pt-32 sm:pt-40 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="mb-20 sm:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-emerald-500 rounded-full" />
            <span className="text-emerald-400 font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-bold">
              Service_Dossier // Mobile_App_Forge
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
            NATIVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-[#ccff00]">
              MOBILE_FORGE.
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-8 text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              We forge industrial-grade mobile applications. No templates, no bloat. Just <span className="text-white font-bold">pure architectural integrity</span>, 120 FPS fluid interaction, and offline-first state synchronization.
            </p>

            <div className="md:col-span-4 flex gap-4">
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-emerald-400 text-2xl sm:text-3xl font-black font-mono">
                  120 FPS
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Fluid Render</div>
              </div>
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-[#ccff00] text-2xl sm:text-3xl font-black font-mono">
                  &lt;0.01%
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Crash Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. CAPABILITIES GRID --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Mobile <span className="text-emerald-400 italic">Protocols.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              High-performance iOS and Android architectures engineered for scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {techDetails.map((item, idx) => {
              const Icon = item.icon;
              return (
                <SpotlightCard key={idx} className="group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div 
                        className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-lg"
                        style={{ color: item.color }}
                      >
                        <Icon />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500 bg-zinc-900/80 px-2.5 py-1 rounded border border-white/5 uppercase">
                        MOBILE_0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      {item.text}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* --- 3. DEVELOPMENT PIPELINE --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              The Mobile <span className="text-zinc-600 italic">Pipeline.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Engineering lifecycle from wireframe to global store launch
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {developmentPhases.map((phase) => (
              <div 
                key={phase.id}
                className="p-6 rounded-2xl bg-zinc-950/80 border border-white/5 hover:border-emerald-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-emerald-400 font-mono text-3xl font-black mb-2 block group-hover:translate-x-1 transition-transform">
                    {phase.id}
                  </span>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                    {phase.name}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">
                    {phase.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. ACTION CALLOUT --- */}
        <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-[#080808] to-black border border-white/10 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase italic text-white">
            Build Your <span className="text-emerald-400">Next-Gen Mobile App.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-widest mb-8 uppercase text-zinc-400 max-w-md mx-auto">
            Schedule a mobile technical consultation with our lead mobile architects.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ccff00] text-black rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.25)]"
          >
            Initiate Mobile Forge <FaChevronRight size={10} />
          </Link>
        </div>

      </div>
    </article>
  );
}
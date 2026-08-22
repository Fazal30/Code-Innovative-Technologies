import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaUserShield, FaFingerprint, FaNetworkWired, 
  FaLock, FaEye, FaMicrochip, FaShieldVirus, FaChevronRight 
} from 'react-icons/fa';
import SpotlightCard from '../../components/ui/SpotlightCard';

const securityFeatures = [
  {
    title: "Zero Trust Architecture",
    icon: FaFingerprint,
    desc: "Eliminating implicit trust. Every user, device, and network flow is authenticated and encrypted in real-time.",
    tags: ["Identity-First", "Micro-segmentation", "MFA"],
    color: "#ccff00"
  },
  {
    title: "Offensive Penetration Drills",
    icon: FaNetworkWired,
    desc: "Aggressive red-team simulations to discover hidden memory corruptions and logic flaws before malicious actors do.",
    tags: ["Vulnerability Scans", "Exploit Analysis", "Post-Mortem"],
    color: "#ef4444"
  },
  {
    title: "Post-Quantum Cryptography",
    icon: FaLock,
    desc: "Deploying AES-256 and post-quantum cryptographic primitives to protect long-lived institutional data from quantum decryption.",
    tags: ["Data at Rest", "In-Transit", "End-to-End"],
    color: "#00e5ff"
  },
  {
    title: "AI Threat Intelligence",
    icon: FaShieldVirus,
    desc: "Autonomous neural monitoring that detects lateral movement and credential abuse in real-time across cloud clusters.",
    tags: ["SIEM Integration", "EDR", "24/7 Monitoring"],
    color: "#a855f7"
  }
];

export default function Products() {
  return (
    <article className="pt-32 pb-20 bg-transparent min-h-screen relative overflow-hidden text-white selection:bg-[#ccff00] selection:text-black font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HERO SECTION */}
        <section className="mb-20 sm:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-red-600 rounded-full" />
            <span className="text-red-500 font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-bold">
              Service_Dossier // Sovereign_Protocols
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter mb-8 uppercase italic leading-[0.85]">
            SOVEREIGN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-[#ccff00]">
              DEFENSE_SYSTEMS.
            </span>
          </h1>
          
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Architecture hardened against the unknown. We don't just protect data; we build <span className="text-white font-bold">impenetrable digital fortresses</span> for global enterprise systems.
          </p>
        </section>

        {/* SECURITY FEATURE GRID */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Sovereign <span className="text-red-500 italic">Defense.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Hardened perimeters and zero-trust cryptographic layers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <SpotlightCard key={i} className="group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div 
                        className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-lg"
                        style={{ color: item.color }}
                      >
                        <Icon />
                      </div>
                      <span className="text-[9px] font-mono text-zinc-500 bg-zinc-900/80 px-2.5 py-1 rounded border border-white/5 uppercase">
                        PROT_0{i + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
                      {item.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-zinc-950 text-zinc-400 text-[8px] font-mono border border-white/5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-[#080808] to-black border border-white/10 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase italic text-white">
            Fortify Your <span className="text-red-500">Core Systems.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-widest mb-8 uppercase text-zinc-400 max-w-md mx-auto">
            Book an offensive security audit with our Red-Team engineers.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ccff00] text-black rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.25)]"
          >
            Initiate Security Audit <FaChevronRight size={10} />
          </Link>
        </div>

      </div>
    </article>
  );
}
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaShieldAlt, FaUserShield, FaLock, FaSearchPlus, 
  FaNetworkWired, FaEye, FaTerminal, FaChevronRight, FaCheckCircle, FaBolt 
} from 'react-icons/fa';
import SpotlightCard from '../../components/ui/SpotlightCard';
import Counter from '../../components/ui/Counter';

const securityCapabilities = [
  {
    title: "Offensive Penetration Testing",
    desc: "Simulated adversary warfare and red-team drills to uncover hidden business logic flaws, memory corruptions, and injection attack vectors.",
    icon: FaSearchPlus,
    color: "#ef4444"
  },
  {
    title: "Zero-Trust Mesh & Identity",
    desc: "Strict micro-segmentation where every packet, API request, and user token is authenticated and cryptographically validated in real-time.",
    icon: FaLock,
    color: "#ccff00"
  },
  {
    title: "Continuous Threat Monitoring (SIEM)",
    desc: "AI-driven automated threat hunting that detects lateral movements, anomalous API behavior, and credential stuffing attacks within milliseconds.",
    icon: FaEye,
    color: "#00e5ff"
  },
  {
    title: "Automated Regulatory Compliance",
    desc: "Continuous auditing frameworks ensuring full compliance with SOC2 Type II, ISO 27001, HIPAA, and GDPR standards with zero audit friction.",
    icon: FaUserShield,
    color: "#a855f7"
  }
];

export default function Security() {
  return (
    <article className="bg-transparent text-white min-h-screen pt-32 sm:pt-40 pb-20 selection:bg-red-600 selection:text-white font-sans overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="mb-20 sm:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-red-600 rounded-full" />
            <span className="text-red-500 font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-bold">
              Service_Dossier // Cyber_Defense
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
            HARDENED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-[#ccff00]">
              DEFENSE_PROTOCOLS.
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-8 text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              We don’t just discover vulnerabilities; we eliminate the attack surface. Our <span className="text-white font-bold">Red-Team engineers</span> conduct surgical infrastructure strikes to guarantee zero-day readiness and complete data sovereignty.
            </p>

            <div className="md:col-span-4 flex gap-4">
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-red-500 text-2xl sm:text-3xl font-black font-mono">
                  <Counter from={0} to={500} duration={2} suffix="+" />
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Audits Executed</div>
              </div>
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-[#ccff00] text-2xl sm:text-3xl font-black font-mono">
                  100%
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Sovereign Posture</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. CAPABILITIES GRID --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Defensive <span className="text-red-600 italic">Arsenal.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Military-grade cybersecurity frameworks for enterprise systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityCapabilities.map((item, idx) => {
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
                        SECURITY_0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* --- 3. HARDENING CHECKLIST & SPECIFICATIONS --- */}
        <section className="mb-24 sm:mb-36 p-8 sm:p-12 bg-zinc-950/80 border border-white/10 rounded-3xl shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
                Battle-Tested <span className="text-red-500 italic">Standards.</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Every software system and cloud cluster we build undergoes automated cryptographic verification and multi-layered red-team stress testing.
              </p>
              <ul className="space-y-3 font-mono text-xs text-zinc-300">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#ccff00]" /> AES-256-GCM Hardware Encrypted Storage
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#ccff00]" /> TLS 1.3 & mTLS Ephemeral Key Exchange
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#ccff00]" /> Multi-Factor & Passkey Cryptographic Identity
                </li>
              </ul>
            </div>

            <div className="p-6 bg-black rounded-2xl border border-white/10 font-mono text-xs text-zinc-400 space-y-2">
              <div className="text-red-500 pb-2 border-b border-white/10 flex justify-between">
                <span>SECURITY_TELEMETRY</span>
                <span className="text-[#ccff00]">SECURE_STATUS</span>
              </div>
              <p>&gt; RUNNING_PORT_AUDIT: [22, 80, 443, 5432, 6379]</p>
              <p>&gt; ATTACK_SURFACE_INDEX: 0.00%_EXPOSED</p>
              <p>&gt; LATERAL_MOVEMENT_BLOCK: ACTIVE</p>
              <p className="text-[#ccff00]">&gt; ZERO_VULNERABILITIES_CONFIRMED</p>
            </div>
          </div>
        </section>

        {/* --- 4. ACTION CALLOUT --- */}
        <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-[#080808] to-black border border-white/10 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase italic text-white">
            Fortify Your <span className="text-red-500">Enterprise Infrastructure.</span>
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
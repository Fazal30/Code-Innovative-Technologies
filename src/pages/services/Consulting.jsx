import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaMicrochip, FaCogs, FaProjectDiagram, 
  FaShieldAlt, FaUserTie, FaCloud, FaSync, FaChartLine, 
  FaChevronRight, FaTerminal, FaCheckCircle, FaBolt 
} from 'react-icons/fa';
import SpotlightCard from '../../components/ui/SpotlightCard';
import Counter from '../../components/ui/Counter';

const consultingModules = [
  { 
    title: "Monolith Refactoring & Migration", 
    icon: FaSync, 
    tag: "REFACTOR", 
    desc: "Decomposing legacy monoliths into high-performance microservices and event-driven domains with zero business downtime.",
    color: "#10b981"
  },
  { 
    title: "vCTO & Technical Governance", 
    icon: FaUserTie, 
    tag: "LEADERSHIP", 
    desc: "Executive technical guidance on technology roadmaps, team orchestration, architectural standards, and investor due diligence.",
    color: "#ccff00"
  },
  { 
    title: "Sovereign Security Audits", 
    icon: FaShieldAlt, 
    tag: "DEFENSE", 
    desc: "Full-spectrum penetration testing, codebase vulnerability scans, and regulatory compliance mapping for SOC2 and GDPR.",
    color: "#ef4444"
  },
  { 
    title: "Multi-Cloud FinOps Optimization", 
    icon: FaCloud, 
    tag: "EFFICIENCY", 
    desc: "Optimizing cloud compute spend across AWS, GCP, and Azure to eliminate waste while maximizing infrastructure resilience.",
    color: "#00e5ff"
  }
];

export default function Consulting() {
  return (
    <article className="bg-transparent text-white min-h-screen pt-32 sm:pt-40 pb-20 selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="mb-20 sm:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-emerald-500 rounded-full" />
            <span className="text-emerald-400 font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-bold">
              Service_Dossier // Cyber_Strategy
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
            TECHNICAL <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-[#ccff00]">
              STRATEGY_CORE.
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-8 text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Navigate technical evolution with senior architects. We deliver <span className="text-white font-bold">IT architecture audits, legacy refactoring, and AI-readiness roadmaps</span> that turn technical debt into massive market leverage.
            </p>

            <div className="md:col-span-4 flex gap-4">
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-emerald-400 text-2xl sm:text-3xl font-black font-mono">
                  <Counter from={0} to={45} duration={2} suffix="%" />
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Cost Cut Avg</div>
              </div>
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-[#ccff00] text-2xl sm:text-3xl font-black font-mono">
                  2.4x
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Velocity Boost</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. CAPABILITIES GRID --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Advisory <span className="text-emerald-400 italic">Pillars.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Surgical technical interventions designed for exponential business scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingModules.map((item, idx) => {
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
                      <span className="text-[8px] font-mono text-zinc-500 bg-zinc-900/80 px-2 py-0.5 rounded border border-white/5 uppercase">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white uppercase tracking-tight mb-3 group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* --- 3. AUDIT PROTOCOL FLOW --- */}
        <section className="mb-24 sm:mb-36 p-8 sm:p-12 bg-zinc-950/80 border border-white/10 rounded-3xl shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              The Strategic <span className="text-emerald-400 italic">Intervention.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-1.5">
              TRANSFORMATION_ROADMAP
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { phase: "PHASE 01", title: "Tactical Reconnaissance", desc: "Comprehensive technical audit of codebases, databases, cloud architecture, and security bottlenecks." },
              { phase: "PHASE 02", title: "Target Architecture Blueprint", desc: "Defining the scalable 'North Star' target architecture and multi-stage migration milestones." },
              { phase: "PHASE 03", title: "Embedded Leadership & Execution", desc: "Hands-on senior engineering leadership to oversee transition, code reviews, and production release." }
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-black/60 border border-white/5 space-y-3">
                <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest">{p.phase}</span>
                <h4 className="text-base font-black text-white uppercase tracking-tight">{p.title}</h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. ACTION CALLOUT --- */}
        <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-[#080808] to-black border border-white/10 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase italic text-white">
            Schedule a <span className="text-emerald-400">Strategic Audit.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-widest mb-8 uppercase text-zinc-400 max-w-md mx-auto">
            Book an architecture consultation with our Principal Advisory Architects.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ccff00] text-black rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.25)]"
          >
            Initiate Advisory Session <FaChevronRight size={10} />
          </Link>
        </div>

      </div>
    </article>
  );
}
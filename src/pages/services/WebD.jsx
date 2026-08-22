import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaCode, FaRocket, FaLayerGroup, FaServer, 
  FaDatabase, FaBolt, FaShieldAlt, FaCheckCircle, FaChevronRight 
} from 'react-icons/fa';
import { SiVercel, SiTailwindcss, SiTypescript, SiNextdotjs, SiPostgresql, SiDocker } from 'react-icons/si';
import SpotlightCard from '../../components/ui/SpotlightCard';
import Counter from '../../components/ui/Counter';

const capabilities = [
  {
    title: "Isomorphic SSR & Edge Rendering",
    desc: "Sub-50ms TTFB (Time to First Byte) with dynamic server-side rendering, streaming HTML, and worldwide edge CDN distribution.",
    icon: FaRocket,
    color: "#3b82f6"
  },
  {
    title: "Micro-Frontend Orchestration",
    desc: "Decoupled frontend modules that allow independent deployments without monolithic build bottlenecks or deployment cross-locks.",
    icon: FaLayerGroup,
    color: "#00e5ff"
  },
  {
    title: "Type-Safe API & GraphQL Mesh",
    desc: "End-to-end TypeScript contracts connecting frontend state to backend microservices with real-time WebSocket telemetry.",
    icon: FaCode,
    color: "#ccff00"
  },
  {
    title: "Zero-Vulnerability Hardening",
    desc: "Strict Content Security Policies (CSP), automated XSS/CSRF mitigations, JWT session rotation, and SOC2 compliance.",
    icon: FaShieldAlt,
    color: "#ef4444"
  }
];

const roadmapSteps = [
  { step: "01", title: "Information Architecture & Logic", desc: "Mapping user journeys, state structures, and API dependencies to eliminate technical debt before design." },
  { step: "02", title: "Atomic Component Engineering", desc: "Constructing high-performance, accessible, themeable UI design systems in React and Tailwind." },
  { step: "03", title: "API Integration & Edge Caching", desc: "Connecting secure GraphQL/REST pipelines with Redis caching and sub-millisecond edge data distribution." },
  { step: "04", title: "Load Hardening & CI/CD Deployment", desc: "Simulating heavy traffic concurrency, Lighthouse 100/100 optimization, and automated multi-region deployment." }
];

export default function WebD() {
  return (
    <article className="bg-transparent text-white min-h-screen selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden pt-32 sm:pt-40 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="mb-20 sm:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-blue-500 rounded-full" />
            <span className="text-blue-400 font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-bold">
              Service_Dossier // Web_Engineering
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
            HIGH-THROUGHPUT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-[#ccff00]">
              WEB_SYSTEMS.
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-8 text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              We eliminate the compromise between visual grandeur and raw execution speed. Our web platforms are engineered for <span className="text-white font-bold">global scale</span>, sub-second interactions, and bulletproof reliability.
            </p>

            <div className="md:col-span-4 flex gap-4">
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-[#ccff00] text-2xl sm:text-3xl font-black font-mono">
                  <Counter from={0} to={99.9} duration={2} suffix="%" />
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Uptime Target</div>
              </div>
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-blue-400 text-2xl sm:text-3xl font-black font-mono">
                  &lt;100ms
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">TTFB Latency</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. CAPABILITIES GRID --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Core <span className="text-blue-500 italic">Capabilities.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Engineered for extreme concurrency and modern web performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((item, idx) => {
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
                        PROTOCOL_0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-blue-400 transition-colors">
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

        {/* --- 3. PERFORMANCE AUDIT METRICS --- */}
        <section className="mb-24 sm:mb-36">
          <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950/80 border border-white/10 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
                Lighthouse <span className="text-[#ccff00] italic">Core Vitals.</span>
              </h2>
              <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-1.5">
                VERIFIED_COMPLIANCE_STANDARD
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Performance", value: "100", color: "text-[#ccff00]" },
                { label: "Accessibility", value: "100", color: "text-blue-400" },
                { label: "Best Practices", value: "100", color: "text-cyan-400" },
                { label: "SEO Authority", value: "100", color: "text-emerald-400" },
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-black/60 border border-white/5 rounded-2xl text-center group hover:border-[#ccff00]/40 transition-all">
                  <div className={`text-4xl sm:text-6xl font-black mb-2 tracking-tighter ${stat.color} font-mono`}>
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 4. DEPLOYMENT PIPELINE --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              The Engineering <span className="text-zinc-600 italic">Pipeline.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              From concept to multi-region global deployment
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmapSteps.map((step) => (
              <div 
                key={step.step}
                className="p-6 rounded-2xl bg-zinc-950/80 border border-white/5 hover:border-blue-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-blue-500 font-mono text-3xl font-black mb-2 block group-hover:translate-x-1 transition-transform">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                    {step.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 5. ACTION CALLOUT --- */}
        <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-[#080808] to-black border border-white/10 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase italic text-white">
            Ready to Build <span className="text-blue-400">The Machine?</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-widest mb-8 uppercase text-zinc-400 max-w-md mx-auto">
            Schedule an architecture scoping session with our lead web engineers.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ccff00] text-black rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.25)]"
          >
            Initiate Project Build <FaChevronRight size={10} />
          </Link>
        </div>

      </div>
    </article>
  );
}
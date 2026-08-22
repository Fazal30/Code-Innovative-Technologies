import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaTerminal, FaCubes, FaServer, 
  FaSync, FaDatabase, FaShieldAlt, FaChevronRight, FaCheckCircle, FaBolt
} from 'react-icons/fa';
import { SiKubernetes, SiDocker, SiAmazonwebservices, SiRedis, SiPostgresql } from 'react-icons/si';
import SpotlightCard from '../../components/ui/SpotlightCard';
import Counter from '../../components/ui/Counter';

const architecturePillars = [
  {
    title: "Decoupled Microservices",
    desc: "Event-driven, asynchronous architectures designed in Go and Rust for total fault isolation and infinite horizontal scalability.",
    icon: FaCubes,
    color: "#ccff00"
  },
  {
    title: "Stateless Cloud Execution",
    desc: "Kubernetes-orchestrated compute nodes that spin up and scale dynamically across multi-cloud regions with zero state conflicts.",
    icon: FaServer,
    color: "#00e5ff"
  },
  {
    title: "ACID-Compliant Data Mesh",
    desc: "Multi-region distributed SQL and document storage clusters with sub-millisecond read replication and automated failover.",
    icon: FaDatabase,
    color: "#a855f7"
  },
  {
    title: "Military-Grade Defense",
    desc: "Zero-trust identity verification, cryptographic payload signing, and encrypted in-memory caches to protect enterprise transactions.",
    icon: FaShieldAlt,
    color: "#ef4444"
  }
];

const lifecyclePhases = [
  { step: "01", title: "Domain & Flow Modeling", desc: "Mapping event schemas, domain boundaries, and data pipelines before writing code." },
  { step: "02", title: "High-Concurrency Core", desc: "Constructing core engines in Go/Rust with rigorous unit testing and profiling." },
  { step: "03", title: "Automated CI/CD & QA", desc: "Bi-weekly sprint releases with continuous integration, automated fuzzing, and linting." },
  { step: "04", title: "Kubernetes Mesh Deployment", desc: "Zero-downtime blue-green rollouts with Prometheus & Grafana real-time telemetry." }
];

export default function Software() {
  return (
    <article className="bg-transparent text-white min-h-screen selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden pt-32 sm:pt-40 pb-20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="mb-20 sm:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-[#ccff00] rounded-full" />
            <span className="text-[#ccff00] font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-bold">
              Service_Dossier // Software_Forge
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
            ENTERPRISE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ccff00] to-emerald-400">
              SOFTWARE_CORE.
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-8 text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              We engineer mission-critical systems and bespoke SaaS logic designed for <span className="text-white font-bold">continuous throughput</span>, extreme data concurrency, and military-grade resilience.
            </p>

            <div className="md:col-span-4 flex gap-4">
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-[#ccff00] text-2xl sm:text-3xl font-black font-mono">
                  <Counter from={0} to={99.99} duration={2.2} suffix="%" />
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Verified SLA</div>
              </div>
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-cyan-400 text-2xl sm:text-3xl font-black font-mono">
                  40Gb/s
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Throughput</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. ARCHITECTURE PILLARS --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              System <span className="text-[#ccff00] italic">Governance.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Architectural blueprints for scalable enterprise logic
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {architecturePillars.map((item, idx) => {
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
                        ARCH_0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-[#ccff00] transition-colors">
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

        {/* --- 3. LIFECYCLE DEPLOYMENT FLOW --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Engineering <span className="text-zinc-600 italic">Lifecycle.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Battle-tested Continuous Integration & Deployment (CI/CD)
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {lifecyclePhases.map((phase) => (
              <div 
                key={phase.step}
                className="p-6 rounded-2xl bg-zinc-950/80 border border-white/5 hover:border-[#ccff00]/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[#ccff00] font-mono text-3xl font-black mb-2 block group-hover:translate-x-1 transition-transform">
                    {phase.step}
                  </span>
                  <h4 className="text-base font-bold text-white uppercase tracking-tight mb-2">
                    {phase.title}
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
            Ready to Build <span className="text-[#ccff00]">Unbreakable Systems?</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-widest mb-8 uppercase text-zinc-400 max-w-md mx-auto">
            Connect with our systems architects to design your enterprise backend.
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
import { motion } from 'framer-motion';
import { 
  FaFingerprint, FaMicrochip, FaShieldAlt, FaChevronRight, FaQuoteLeft, 
  FaRocket, FaBolt, FaBrain, FaLayerGroup, FaServer, FaCheckCircle, 
  FaGlobeAmericas, FaCode, FaCogs, FaUsers, FaLock, FaTerminal
} from 'react-icons/fa';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiGo, SiRust, 
  SiPython, SiPytorch, SiDocker, SiKubernetes, SiPostgresql, SiAmazonwebservices 
} from 'react-icons/si';
import { Link } from 'react-router-dom';
import CEOImage from '../assets/CEO.jpg';
import SpotlightCard from '../components/ui/SpotlightCard';
import Counter from '../components/ui/Counter';

const pillars = [
  {
    number: "01",
    title: "Architectural Supremacy",
    desc: "We engineer systems with uncompromising sub-millisecond response times, fault-tolerant state orchestration, and complete zero-downtime scalability.",
    icon: FaBolt,
    color: "#ccff00"
  },
  {
    number: "02",
    title: "Autonomous Intelligence",
    desc: "Bridging the gap between frontier AI models and high-stakes enterprise workflows. Custom neural networks, RAG pipelines, and automated agent clusters.",
    icon: FaBrain,
    color: "#00e5ff"
  },
  {
    number: "03",
    title: "Sovereign Defense",
    desc: "Military-grade data protection, AES-256-GCM encryption at rest and in transit, and continuous compliance with global SOC2 and GDPR standards.",
    icon: FaShieldAlt,
    color: "#a855f7"
  }
];

const engineeringCode = [
  { 
    title: "Radical Transparency", 
    desc: "We eliminate the 'Black Box'. Direct access to our lead architects, automated daily telemetry feeds, and real-time staging environments are your default right.",
    icon: FaFingerprint,
    tag: "TRUST_PROTOCOL"
  },
  { 
    title: "Sub-Millisecond Latency", 
    desc: "If it's not sub-second, it's broken. Every line of code is optimized for extreme V8 execution speed, minimal bundle footprints, and edge caching.",
    icon: FaBolt,
    tag: "SPEED_PROTOCOL"
  },
  { 
    title: "Zero-Trust Security", 
    desc: "Security is not an afterthought; it is our foundation. Continuous vulnerability scanning, cryptographic session management, and hardened network perimeters.",
    icon: FaShieldAlt,
    tag: "SECURITY_PROTOCOL"
  },
  { 
    title: "Autonomous Scalability", 
    desc: "Kubernetes-orchestrated microservices that dynamically auto-scale with real-time traffic spikes and self-heal during localized cloud outages.",
    icon: FaServer,
    tag: "INFRA_PROTOCOL"
  },
  { 
    title: "Zero Technical Debt", 
    desc: "Self-documenting, modular codebases with 100% type safety and comprehensive automated test suites to guarantee decades of painless maintainability.",
    icon: FaCode,
    tag: "STANDARDS_PROTOCOL"
  },
  { 
    title: "Full Lifecycle Ownership", 
    desc: "From initial tactical discovery and wireframe prototyping to global cloud provisioning, monitoring, and post-launch scaling support.",
    icon: FaRocket,
    tag: "DELIVERY_PROTOCOL"
  }
];

const roadmap = [
  { 
    year: "2021", 
    title: "Genesis & Foundation",
    event: "Founded in Bengaluru as an elite engineering forge with a singular mission: eliminate technical debt and architect enterprise-scale software." 
  },
  { 
    year: "2023", 
    title: "Global Edge Infrastructure",
    event: "Expanded operations across North America, Europe, and Asia Pacific with over 12 high-throughput distributed edge nodes." 
  },
  { 
    year: "2025", 
    title: "Autonomous AI Integration",
    event: "Launched proprietary Neural AI workflow engines, multi-modal LLM integrations, and cognitive automation pipelines for enterprise clients." 
  },
  { 
    year: "2026", 
    title: "Quantum-Ready Protocols",
    event: "Pioneering post-quantum cryptographic security, hardened distributed ledger tech, and sovereign cloud ecosystems." 
  }
];

const techArsenal = [
  { name: "React 19", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js 15", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Golang", icon: SiGo, color: "#00ADD8" },
  { name: "Rust", icon: SiRust, color: "#DEA584" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "AWS Cloud", icon: SiAmazonwebservices, color: "#FF9900" }
];

export default function About() {
  return (
    <article className="bg-transparent text-white min-h-screen relative selection:bg-[#ccff00] selection:text-black">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 sm:pt-40 pb-24">
        
        {/* --- 1. HERO: THE MANIFESTO --- */}
        <section className="mb-20 sm:mb-32">
          <div className="grid lg:grid-cols-12 gap-10 sm:gap-16 items-end">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-1 w-12 bg-[#ccff00] rounded-full" />
                <span className="text-[#ccff00] font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-bold">
                  About_Unit // Code_Innovative_Technologies
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                FORGED <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#ccff00] to-white italic">
                  IN CODE.
                </span>
              </h1>

              <p className="text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                <span className="text-white font-bold">Code Innovative Technologies</span> is not a generic agency. We are a tactical software forge and digital deployment center engineered for mission-critical enterprise systems.
              </p>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 rounded-3xl bg-zinc-950/80 border border-white/10 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] uppercase tracking-widest font-bold">
                  <FaTerminal /> Operational_Doctrine
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                  "Innovate. Automate. Elevate. We bridge the gap between frontier AI intelligence and industrial-scale engineering reliability to help enterprises outpace competition."
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-zinc-500 uppercase">
                  <span>Headquarters: Bengaluru, IN</span>
                  <span className="text-emerald-400">STATUS: GLOBAL_ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. THREE CORE PILLARS --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              The Three <span className="text-zinc-600 italic">Pillars.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Foundational principles behind every architecture we deploy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <SpotlightCard key={p.number} className="flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div 
                        className="w-12 h-12 rounded-2xl bg-zinc-900 flex items-center justify-center text-xl group-hover:scale-110 transition-transform shadow-lg"
                        style={{ color: p.color }}
                      >
                        <Icon />
                      </div>
                      <span className="text-2xl font-black font-mono text-white/10 group-hover:text-[#ccff00]/40 transition-colors">
                        {p.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-[#ccff00] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* --- 3. FOUNDER & LEADERSHIP PROFILE --- */}
        <section className="mb-24 sm:mb-36">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative group">
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] bg-zinc-900 group-hover:border-[#ccff00]/40 transition-all duration-500 shadow-2xl">
                <img 
                  src={CEOImage} 
                  alt="Founder & CEO of Code Innovative Technologies" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-700"
                />
                
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase">The Founder</h3>
                      <p className="text-[#ccff00] font-mono text-[9px] tracking-widest uppercase mt-0.5">LEAD_ARCHITECT_RANK_01</p>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-6 bg-[#ccff00]/30 rounded-full" />
                      <div className="w-1.5 h-6 bg-[#ccff00]/60 rounded-full" />
                      <div className="w-1.5 h-6 bg-[#ccff00] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <FaQuoteLeft className="text-[#ccff00] text-4xl sm:text-5xl opacity-30" />
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[0.95] uppercase">
                "Architecture is the <span className="text-[#ccff00] italic">Destiny</span> of Software."
              </h2>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
                Directing elite squads of high-performance engineers, our leadership guides every deployment through the lens of <span className="text-white font-bold">Hardened Reliability</span>. We eliminate the guesswork from software scalability.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5 font-mono">
                <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5">
                  <p className="text-[8px] text-zinc-500 uppercase mb-1">Core Competency</p>
                  <p className="text-white font-black uppercase text-xs sm:text-sm">Distributed Systems & AI</p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-950/60 border border-white/5">
                  <p className="text-[8px] text-zinc-500 uppercase mb-1">Guiding Doctrine</p>
                  <p className="text-white font-black uppercase text-xs sm:text-sm">Zero-Latency Logic</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. GLOBAL IMPACT STATS --- */}
        <section className="mb-24 sm:mb-36">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#ccff00] text-black shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <p className="text-3xl sm:text-5xl font-black font-mono leading-none tracking-tighter">
                  <Counter from={0} to={120} duration={2} suffix="+" />
                </p>
                <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider mt-2 opacity-80">
                  Global Deployments
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-5xl font-black font-mono leading-none tracking-tighter">
                  <Counter from={0} to={99.99} duration={2.2} suffix="%" />
                </p>
                <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider mt-2 opacity-80">
                  Historical SLA Uptime
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-5xl font-black font-mono leading-none tracking-tighter">
                  <Counter from={0} to={40} duration={2} suffix="+" />
                </p>
                <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider mt-2 opacity-80">
                  Enterprise Partners
                </p>
              </div>

              <div>
                <p className="text-3xl sm:text-5xl font-black font-mono leading-none tracking-tighter">
                  <Counter from={0} to={4} duration={1.5} suffix=" Continents" />
                </p>
                <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider mt-2 opacity-80">
                  Edge Operations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. THE 6-TENET ENGINEERING CODE --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12 text-center sm:text-left">
            <div className="flex items-center gap-2 text-[#ccff00] font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-2 font-bold justify-center sm:justify-start">
              <FaCheckCircle /> ENGINEERING_STANDARDS
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
              The Engineering <span className="text-zinc-600 italic">Code.</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light mt-2 max-w-lg">
              Six uncompromising protocols that govern every sprint, code review, and cloud deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engineeringCode.map((v, i) => {
              const Icon = v.icon;
              return (
                <SpotlightCard key={i} className="group flex flex-col justify-between h-full">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-lg text-[#ccff00] group-hover:scale-110 transition-transform">
                        <Icon />
                      </div>
                      <span className="text-[7.5px] font-mono text-zinc-500 bg-zinc-900/80 px-2 py-0.5 rounded border border-white/5 uppercase">
                        {v.tag}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-black mb-3 text-white group-hover:text-[#ccff00] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                      {v.desc}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </section>

        {/* --- 6. TECHNICAL ARSENAL --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-10 text-center">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Our Core <span className="text-[#ccff00] italic">Arsenal.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Industry-standard languages, frameworks, and cloud orchestration tools
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {techArsenal.map((tech) => {
              const Icon = tech.icon;
              return (
                <div 
                  key={tech.name}
                  className="p-4 rounded-2xl bg-zinc-950/80 border border-white/5 hover:border-[#ccff00]/30 transition-all flex flex-col items-center justify-center text-center group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform" style={{ color: tech.color }}>
                    <Icon />
                  </div>
                  <span className="text-xs font-mono font-bold text-zinc-300 group-hover:text-white uppercase tracking-tight">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- 7. CHRONOLOGY & ROADMAP --- */}
        <section className="mb-24 sm:mb-36">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase">Evolutionary Chronology</h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">Our technical trajectory from genesis to the future</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {roadmap.map((item, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl bg-zinc-950/80 border border-white/5 hover:border-[#ccff00]/30 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[#ccff00] font-mono text-3xl font-black mb-1 block group-hover:translate-x-1 transition-transform">
                    {item.year}
                  </span>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 8. ACTION CALLOUT --- */}
        <div className="rounded-3xl sm:rounded-[3rem] bg-gradient-to-br from-zinc-950 via-[#080808] to-black border border-white/10 p-8 sm:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(204,255,0,0.08)_0%,_transparent_70%)] pointer-events-none" />
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase italic leading-[0.9] text-white relative z-10">
            Ready to Build <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-cyan-400 to-white">
              The Unbreakable?
            </span>
          </h2>
          
          <p className="font-mono text-xs sm:text-sm tracking-widest mb-8 uppercase text-zinc-400 max-w-lg mx-auto relative z-10">
            Connect directly with our lead architects to engineer your next technological leap.
          </p>
          
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ccff00] text-black rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all active:scale-95 shadow-[0_0_25px_rgba(204,255,0,0.25)] relative z-10"
          >
            INITIATE_UPLINK <FaChevronRight size={10} />
          </Link>
        </div>

      </div>
    </article>
  );
}
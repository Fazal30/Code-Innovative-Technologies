import { motion } from 'framer-motion';
import { 
  FaMicrochip, FaCogs, FaProjectDiagram, FaLightbulb, 
  FaShieldAlt, FaUserTie, FaCloud, FaSync, FaChartLine, 
  FaSearch, FaChevronRight, FaTerminal 
} from 'react-icons/fa';

const Consulting = () => {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <div className="bg-[#020202] text-white min-h-screen pt-40 pb-20 selection:bg-[#ccff00] selection:text-black overflow-hidden">
      
      {/* 1. AMBIENT BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-600/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. HERO SECTION */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={containerVars}
          className="mb-32 text-center lg:text-left"
        >
          <motion.span variants={fadeInUp} className="text-emerald-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-4 block font-black">
            // PROTOCOL_STRATEGIC_ADVISORY
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-8 italic uppercase">
            TECHNICAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-500 to-white">SUPERIORITY.</span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-zinc-500 text-xl md:text-2xl font-light max-w-4xl leading-relaxed mx-auto lg:mx-0 border-l-2 border-emerald-900 pl-8">
            Navigate the complexity of digital transformation with battle-hardened architects. We provide <span className="text-white">IT audits, legacy refactoring, and AI-readiness roadmaps</span> that turn technical debt into competitive leverage.
          </motion.p>
        </motion.div>

        {/* 3. CORE ADVISORY BLOCKS */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVars}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-48"
        >
          {[
            { 
              title: "Legacy Migration", 
              icon: <FaSync />, 
              tag: "REFACTOR", 
              desc: "Decomposing monoliths into high-performance microservices without downtime." 
            },
            { 
              title: "vCTO Services", 
              icon: <FaUserTie />, 
              tag: "LEADERSHIP", 
              desc: "Executive technical guidance for fundraising, scaling, and team architecture." 
            },
            { 
              title: "Security Audit", 
              icon: <FaShieldAlt />, 
              tag: "DEFENSE", 
              desc: "Full-spectrum penetration testing and compliance mapping (SOC2/GDPR)." 
            },
            { 
              title: "Cloud Strategy", 
              icon: <FaCloud />, 
              tag: "EFFICIENCY", 
              desc: "Cost optimization and multi-cloud orchestration for maximum resilience." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="p-10 bg-zinc-950 border border-white/5 rounded-[2rem] hover:border-emerald-500/30 transition-all group"
            >
              <div className="text-emerald-500 text-3xl mb-12 group-hover:scale-110 transition-transform">{item.icon}</div>
              <p className="text-[9px] font-mono text-zinc-600 tracking-[0.3em] mb-3">{item.tag}</p>
              <h3 className="text-2xl font-black uppercase italic mb-4 group-hover:text-emerald-400 transition-colors">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light italic">"{item.desc}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. TRANSFORMATION ROADMAP (HIGH CONTENT) */}
        <section className="mb-48 bg-zinc-900/20 rounded-[4rem] border border-white/5 p-12 md:p-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-[0.02]">
            <FaTerminal className="text-[20rem]" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 italic">The Strategic <br /> <span className="text-emerald-500">Uplink.</span></h2>
              <p className="text-zinc-400 mb-12 text-lg">Our advisory process is a surgical intervention designed to align your tech stack with aggressive business growth.</p>
              
              <div className="space-y-8">
                {[
                  { step: "Phase 01: Reconnaissance", text: "Deep-dive audit of current architecture and bottlenecks." },
                  { step: "Phase 02: Tactical Roadmap", text: "Defining the 'North Star' architecture and migration path." },
                  { step: "Phase 03: Execution", text: "Embedded engineering leadership to drive the transition." }
                ].map((phase, i) => (
                  <div key={i} className="flex gap-6 border-l border-emerald-500/30 pl-8 py-2">
                    <div>
                      <h4 className="font-black uppercase text-sm text-white mb-1">{phase.step}</h4>
                      <p className="text-zinc-500 text-sm italic">{phase.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#050505] p-10 rounded-[3rem] border border-white/5 flex flex-col justify-center">
              <h4 className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-10">// KPI_IMPACT_REPORT</h4>
              <div className="space-y-8">
                {[
                  { label: "Cost Efficiency", val: "+45%", desc: "Cloud spend optimization via serverless migration." },
                  { label: "Agility Score", val: "2.4x", desc: "Faster deployment cycles through CI/CD automation." },
                  { label: "Security Readiness", val: "100%", desc: "Full compliance with modern data protection laws." }
                ].map((stat, i) => (
                  <div key={i} className="flex items-end justify-between border-b border-white/5 pb-4 group">
                    <div>
                      <p className="text-2xl font-black italic uppercase">{stat.label}</p>
                      <p className="text-[10px] text-zinc-600 italic">{stat.desc}</p>
                    </div>
                    <span className="text-4xl font-black text-emerald-500 group-hover:text-[#ccff00] transition-colors">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. CASE STUDY (ENHANCED) */}
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-emerald-900/30 via-zinc-950 to-transparent p-12 md:p-24 rounded-[4rem] border border-emerald-500/20 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.4em] mb-6 block">PROJECT_RECAP: FINTECH_2025</span>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] mb-8 italic">The 20% <br /> Efficiency Protocol.</h2>
              <p className="text-zinc-400 italic font-light text-xl leading-relaxed max-w-2xl">
                "We audited a Tier-1 fintech infrastructure, identifying $400k in annual cloud waste. By implementing a <span className="text-white">multi-region Kubernetes mesh</span>, we reduced expenditure by 40% while increasing transaction throughput by 240%."
              </p>
            </div>
            <div className="lg:col-span-4 w-full">
              <button className="w-full py-8 bg-white text-black font-black uppercase text-sm tracking-[0.2em] rounded-2xl hover:bg-[#ccff00] transition-all flex items-center justify-center gap-4 group">
                Full Technical Case Study <FaChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* 6. EXPERTISE FOOTER */}
        <div className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-opacity">
          {["Fintech", "Healthtech", "E-Commerce", "SaaS Infrastructure"].map((exp, i) => (
            <div key={i} className="text-center">
              <p className="font-mono text-[10px] uppercase tracking-widest text-emerald-500 mb-2 font-black">{exp}</p>
              <div className="h-px w-full bg-zinc-800" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Consulting;
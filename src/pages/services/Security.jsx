import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaShieldAlt, FaUserShield, FaLock, FaSearchPlus, 
  FaNetworkWired, FaBiohazard, FaEye, FaTerminal, FaSkullCrossbones 
} from 'react-icons/fa';

const Security = () => {
  const { scrollYProgress } = useScroll();
  const scanLineY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-[#020202] text-white min-h-screen pt-40 pb-20 selection:bg-red-600 selection:text-white overflow-hidden font-sans">
      
      {/* 1. DEFENSE GRID OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#300_1px,transparent_1px),linear-gradient(to_bottom,#300_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div 
          style={{ top: scanLineY }}
          className="absolute left-0 w-full h-[2px] bg-red-600 shadow-[0_0_20px_red] z-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. HERO SECTION */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={containerVars}
          className="mb-32"
        >
          <motion.span variants={fadeInUp} className="text-red-600 font-mono text-[10px] tracking-[0.6em] uppercase mb-6 block font-black">
            // PROTOCOL_DEFENSE_GRID_ENGAGED
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-[10vw] md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-10 italic uppercase">
            FORTIFIED <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-white">
              INFRASTRUCTURE.
            </span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-zinc-500 text-xl md:text-2xl font-light max-w-4xl leading-relaxed border-l-2 border-red-900 pl-8">
            We don't just find vulnerabilities; we eliminate the attack surface. Our <span className="text-white">Red-Team engineers</span> conduct surgical strikes against your systems to ensure zero-day readiness and total data sovereignty.
          </motion.p>
        </motion.div>

        {/* 3. CORE SERVICES MESH */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVars}
          className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 rounded-[3.5rem] overflow-hidden mb-48 shadow-[0_0_50px_rgba(220,38,38,0.1)]"
        >
          {[
            { 
              title: "Penetration Testing", 
              icon: <FaSearchPlus />, 
              tag: "OFFENSIVE", 
              desc: "Simulated cyber-warfare scenarios to identify exploitable logic flaws before hackers do." 
            },
            { 
              title: "Zero Trust Mesh", 
              icon: <FaLock />, 
              tag: "DEFENSIVE", 
              desc: "Identity-centric micro-segmentation that treats every internal packet as potentially hostile." 
            },
            { 
              title: "Compliance Engineering", 
              icon: <FaUserShield />, 
              tag: "GOVERNANCE", 
              desc: "Automated auditing for SOC2, HIPAA, and GDPR to maintain continuous regulatory posture." 
            },
            { 
              title: "Threat Hunting", 
              icon: <FaEye />, 
              tag: "TACTICAL", 
              desc: "AI-driven SIEM/SOAR monitoring to detect and neutralize lateral movement in real-time." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              className="p-16 bg-zinc-950 hover:bg-red-950/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                <FaBiohazard className="text-9xl text-red-600" />
              </div>
              <div className="text-red-600 text-4xl mb-10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <p className="text-[9px] font-mono text-zinc-600 tracking-[0.4em] mb-4 uppercase">{item.tag}</p>
              <h3 className="text-3xl font-black mb-6 uppercase italic tracking-tighter text-white">{item.title}</h3>
              <p className="text-zinc-500 text-lg leading-relaxed font-light italic">"{item.desc}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 4. TECHNICAL SPECIFICATIONS (BATTLE READY) */}
        
        <section className="mb-48 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none italic">
                    THE <span className="text-red-600">RED-TEAM</span> <br /> OPERATIVE.
                </h2>
                <div className="space-y-8">
                    {[
                        { label: "Kernel Hardening", val: "Customized Linux kernels with minimized attack surfaces." },
                        { label: "Quantum Encryption", val: "AES-256 and post-quantum algorithms for data at rest." },
                        { label: "DDoS Mitigation", val: "Multi-layered scrubbing for TB-scale volumetric attacks." }
                    ].map((spec, i) => (
                        <div key={i} className="flex gap-8 group">
                            <div className="h-14 w-1 bg-red-600/30 group-hover:bg-red-600 transition-colors" />
                            <div>
                                <h5 className="font-black uppercase text-sm tracking-widest text-white">{spec.label}</h5>
                                <p className="text-zinc-500 text-sm italic">{spec.val}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-red-600/5 blur-[100px] rounded-full animate-pulse" />
                <div className="bg-[#050505] p-12 rounded-[4rem] border border-white/5 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                        <FaTerminal className="text-red-600" />
                        <span className="text-[10px] font-mono text-red-500/50">SECURE_SHELL_ACTIVE</span>
                    </div>
                    <div className="font-mono text-[11px] space-y-3 text-zinc-400">
                        <p className="text-red-600">&gt; EXEC_PEN_TEST_V4.0</p>
                        <p>&gt; SCANNING_PORTS... [80, 443, 22, 5432]</p>
                        <p>&gt; BRUTE_FORCE_PROTECTION: [ENABLED]</p>
                        <p>&gt; SQL_INJECTION_SHIELD: [ACTIVE]</p>
                        <p className="text-green-500">&gt; ZERO_VULNERABILITIES_DETECTED_IN_CORE</p>
                        <div className="pt-6 mt-6 border-t border-white/5">
                            <div className="flex justify-between">
                                <span>UPTIME_METRIC</span>
                                <span className="text-white">99.9999%</span>
                            </div>
                            <div className="flex justify-between">
                                <span>THREAT_LEVEL</span>
                                <span className="text-green-500">LOW_STABLE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 5. STRATEGIC STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { label: "Successful Mitigations", val: "10M+" },
                { label: "Security Audits", val: "500+" },
                { label: "Response Time", val: "< 15min" },
                { label: "Compliance Rate", val: "100%" }
            ].map((stat, i) => (
                <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(220,38,38,0.05)' }}
                    className="p-10 border border-white/5 rounded-3xl text-center"
                >
                    <h4 className="text-3xl md:text-5xl font-black mb-2 tracking-tighter italic">{stat.val}</h4>
                    <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
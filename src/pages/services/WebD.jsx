import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaCode, FaRocket, FaLayerGroup, FaServer, 
  FaCloudUploadAlt, FaDatabase, FaBolt, 
  FaReact, FaNodeJs, FaDocker, FaGithub, FaShieldAlt
} from 'react-icons/fa';
import { SiVercel, SiTailwindcss, SiTypescript, SiNextdotjs, SiPostgresql } from 'react-icons/si';

const WebD = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // FIXED: Easing is now a String to prevent WAAPI errors
  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.8, 
        ease: "cubic-bezier(0.6, 0.05, -0.01, 0.9)" 
      } 
    }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-[#020202] text-white min-h-screen selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden">
      
      {/* --- 1. SYSTEM BACKGROUND GRID --- */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
      </div>

      {/* --- 2. HERO SECTION --- */}
      <section className="relative pt-44 pb-32 px-6 max-w-7xl mx-auto z-10">
        <motion.div initial="initial" animate="animate" variants={staggerContainer}>
          <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-blue-500" />
            <span className="text-blue-500 font-mono text-[10px] tracking-[0.6em] uppercase font-black">
              System_Deployment_v4.0
            </span>
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-[12vw] md:text-[8.5rem] font-black tracking-tighter leading-[0.8] mb-12 uppercase italic">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-cyan-400">
              THE_FUTURE.
            </span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              We eliminate the gap between complex business logic and high-performance execution. Our stacks are built for <span className="text-white">horizontal scale</span>, military-grade security, and sub-second interaction.
            </p>
            <div className="flex gap-4">
              <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-md">
                <div className="text-[#ccff00] text-2xl font-black">99.9%</div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase">Uptime_Target</div>
              </div>
              <div className="p-4 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-md">
                <div className="text-blue-500 text-2xl font-black">&lt;200ms</div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase">TTFB_Latency</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- 3. TECHNICAL ARCHITECTURE (NEW SECTION) --- */}
      
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div 
            whileHover={{ y: -10 }}
            className="lg:col-span-2 p-12 bg-zinc-950 border border-white/5 rounded-[3rem] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <FaLayerGroup size={200} />
            </div>
            <h3 className="text-3xl font-black uppercase italic mb-6">Full-Stack Architecture</h3>
            <p className="text-zinc-500 mb-8 max-w-lg leading-relaxed text-sm">
              Modular microservices engineered to handle millions of requests. We utilize Isomorphic Rendering to ensure your SEO is bulletproof while maintaining the speed of a Single Page Application.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Microservices', 'GraphQL', 'WebSockets', 'Edge-Caching'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-white/5 rounded-full font-mono text-[9px] text-blue-400 border border-blue-500/20">{tag}</span>
              ))}
            </div>
          </motion.div>

          <div className="p-12 bg-blue-600 rounded-[3rem] flex flex-col justify-between group">
            <FaShieldAlt className="text-4xl text-white/50" />
            <div>
              <h3 className="text-3xl font-black uppercase italic text-white mb-4">Hardened Security</h3>
              <p className="text-blue-100 text-xs leading-relaxed">
                Zero-trust architecture implementation with JWT-based authentication and encrypted data persistence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. THE TECH STACK MARQUEE --- */}
      <div className="py-20 bg-zinc-950/50 border-y border-white/5 overflow-hidden flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {[<SiNextdotjs />, <SiTypescript />, <FaNodeJs />, <FaDocker />, <SiTailwindcss />, <SiVercel />, <SiPostgresql />, <FaGithub />].map((icon, i) => (
            <div key={i} className="text-5xl text-zinc-700 hover:text-blue-500 transition-colors cursor-pointer">
              {icon}
            </div>
          ))}
          {/* Duplicate for infinite feel */}
          {[<SiNextdotjs />, <SiTypescript />, <FaNodeJs />, <FaDocker />, <SiTailwindcss />, <SiVercel />, <SiPostgresql />, <FaGithub />].map((icon, i) => (
            <div key={i + 10} className="text-5xl text-zinc-700 hover:text-blue-500 transition-colors cursor-pointer">
              {icon}
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- 5. PERFORMANCE AUDIT DASHBOARD --- */}
      <section className="py-40 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">The Performance <span className="text-blue-500 text-outline">Audit.</span></h2>
          <p className="text-zinc-500 font-mono text-[10px] tracking-[0.4em]">CHECKING_CORE_VITALS_COMPLIANCE</p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: "Performance", value: "100", color: "text-[#ccff00]" },
            { label: "Accessibility", value: "98", color: "text-blue-400" },
            { label: "Best Practices", value: "100", color: "text-purple-500" },
            { label: "SEO Score", value: "100", color: "text-cyan-400" },
          ].map((stat, i) => (
            <div key={i} className="p-10 bg-zinc-900/30 border border-white/5 rounded-3xl text-center group hover:bg-zinc-900/60 transition-all">
              <div className={`text-6xl font-black mb-4 tracking-tighter ${stat.color}`}>{stat.value}</div>
              <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- 6. DEVELOPMENT ROADMAP --- */}
      
      <section className="py-40 px-6 max-w-7xl mx-auto z-10 relative">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none mb-10">
              From <span className="text-blue-500">Wireframe</span> <br /> to Production.
            </h2>
            <div className="space-y-12">
              {[
                { step: "01", title: "Discovery & Logic Mapping", desc: "We define the technical roadmap, choosing the right stack for your specific scale requirements." },
                { step: "02", title: "Atomic Design Engineering", desc: "Building modular, reusable component libraries that ensure consistency across the entire platform." },
                { step: "03", title: "Deployment Pipelines", desc: "Automated CI/CD workflows that test, lint, and deploy code to global edge locations in seconds." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-8 group">
                  <span className="text-2xl font-mono text-zinc-800 group-hover:text-blue-500 transition-colors">{item.step}</span>
                  <div>
                    <h4 className="text-xl font-black uppercase mb-2">{item.title}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="aspect-square bg-blue-600/10 border border-blue-500/20 rounded-[4rem] p-8 flex items-center justify-center relative overflow-hidden">
                <FaRocket className="text-[15rem] text-blue-500/20 absolute -bottom-10 -left-10 rotate-12" />
                <div className="relative z-10 text-center">
                   <div className="text-8xl font-black mb-4 uppercase italic">Start_</div>
                   <p className="font-mono text-[10px] text-blue-400 tracking-[0.3em]">EXECUTE_BUILD_SEQUENCE</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- 7. FINAL CALL TO ACTION --- */}
      <section className="px-6 pb-40">
        <div className="max-w-7xl mx-auto p-12 md:p-24 bg-gradient-to-br from-zinc-900 to-black border border-white/5 rounded-[4rem] text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-10 relative z-10">
            Let's build <br /> <span className="text-blue-500">The Machine.</span>
          </h2>
          <button className="relative z-10 px-16 py-8 bg-[#ccff00] text-black font-black uppercase text-xs tracking-[0.4em] rounded-full hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(204,255,0,0.2)]">
            Contact_Engineer
          </button>
        </div>
      </section>

    </div>
  );
};

export default WebD;
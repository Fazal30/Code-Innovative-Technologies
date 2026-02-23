import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaTerminal, FaFingerprint, FaShieldAlt, FaBolt, FaCircle } from 'react-icons/fa';
import Hero from '../components/sections/Hero';
import WhoWeAre from '../components/sections/WhoWeAre';
import ServicesGrid from '../components/sections/ServicesGrid';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ContactForm from '../components/sections/ContactForm';

const sectionVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [systemTime, setSystemTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date().toISOString().slice(11, 19));
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const bgColor = useTransform(smoothProgress, [0, 0.5, 1], ["#020202", "#05010d", "#010505"]);

  return (
    <motion.div
      ref={containerRef}
      style={{ backgroundColor: bgColor }}
      className="text-white selection:bg-[#ccff00] selection:text-black transition-colors duration-1000 font-sans overflow-x-hidden"
    >
      {/* --- 1. GLOBAL HUD (SIDE) --- */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-10">
        {['01_ARCHIVE', '02_INTEL', '03_ARSENAL', '04_FORGE', '05_UPLINK'].map((label, i) => (
          <div key={label} className="group flex flex-col items-start gap-2 cursor-pointer">
            <span className="text-[7px] font-mono tracking-[0.4em] text-zinc-700 group-hover:text-[#ccff00] transition-colors">
              {label}
            </span>
            <div className="h-[1px] w-4 bg-zinc-900 group-hover:w-12 group-hover:bg-[#ccff00] transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* --- 2. PROGRESS & STATUS BAR --- */}
      <div className="fixed top-0 left-0 w-full h-[1px] z-[101] bg-white/5">
        <motion.div 
          style={{ scaleX: smoothProgress }}
          className="h-full bg-gradient-to-r from-[#ccff00] to-emerald-500 origin-left shadow-[0_0_15px_#ccff00]"
        />
        <div className="absolute top-4 left-8 right-8 flex justify-between font-mono text-[8px] text-zinc-600 tracking-tighter uppercase">
          <span>CODE_INNOVATIVE_TECH // CORE_OS_v4.0</span>
          <span className="text-[#ccff00]">LOCAL_TIME: {systemTime} // LATENCY: 0.02ms</span>
        </div>
      </div>

      <div className="pt-20">
        {/* --- 3. HERO SECTION --- */}
        <Hero />

        <div className="relative z-10 px-6 md:px-12 lg:px-24">
          
          {/* --- 4. WHO WE ARE (CODE VISION) --- */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative py-24 mb-32 border-l border-white/5 pl-8 md:pl-20"
          >
            <div className="flex items-center gap-3 text-[#ccff00] text-[8px] font-black tracking-[0.6em] mb-10 uppercase">
              <FaFingerprint className="text-sm" /> IDENTITY_PROTOCOL_01
            </div>
            {/* The "CODE" Large Backdrop */}
            <h2 className="absolute -top-10 -left-10 text-[20vw] font-black text-white/[0.01] select-none pointer-events-none">
              VISION
            </h2>
            <WhoWeAre />
          </motion.section>

          {/* --- 5. TECHNICAL MARQUEE (TECH STACK) --- */}
          <div className="py-6 border-y border-white/5 overflow-hidden whitespace-nowrap mb-32 rotate-[-1deg] bg-zinc-950">
            <motion.div 
              animate={{ x: [0, -1200] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex gap-24 text-[9px] font-mono text-zinc-500 uppercase tracking-[0.6em] items-center"
            >
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-24">
                  <span className="flex items-center gap-4"><FaCircle className="text-[3px] text-[#ccff00]" /> AI_NEURAL_MODELS</span>
                  <span className="flex items-center gap-4"><FaCircle className="text-[3px] text-[#ccff00]" /> RUST_BACKENDS</span>
                  <span className="flex items-center gap-4"><FaCircle className="text-[3px] text-[#ccff00]" /> KUBERNETES_ORCHESTRATION</span>
                  <span className="flex items-center gap-4"><FaCircle className="text-[3px] text-[#ccff00]" /> ZERO_TRUST_SECURITY</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* --- 6. SERVICES (THE ARSENAL) --- */}
          <section className="relative py-20 mb-40">
            <div className="mb-16">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic">
                 THE <span className="text-zinc-700">ARSENAL.</span>
               </h2>
               <p className="text-[10px] font-mono text-zinc-500 mt-4 tracking-widest max-w-sm uppercase leading-relaxed">
                 Deploying high-performance digital protocols for the next evolution of industry.
               </p>
            </div>
            

[Image of Microservices Architecture Diagram]

            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServicesGrid />
            </motion.div>
          </section>

          {/* --- 7. WHY CHOOSE CODE (CONTRAST BLOCK) --- */}
          <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="my-40 rounded-[2rem] bg-[#ccff00] text-black p-10 md:p-24 overflow-hidden relative"
          >
            <div className="absolute top-6 right-10 flex gap-10 font-mono text-[8px] font-bold opacity-40 uppercase tracking-widest">
              <span>REF: CODE_INTEL_2026</span>
              <span>VERIFIED_SLA: 99.99%</span>
            </div>
            <WhyChooseUs />
          </motion.section>

          {/* --- 8. CONTACT (UPLINK) --- */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative py-24 mb-20 rounded-[4rem] border border-white/5 bg-gradient-to-br from-zinc-950 to-black p-2 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-8 left-12 flex items-center gap-4">
               <div className="w-10 h-10 bg-[#ccff00]/10 rounded-full flex items-center justify-center text-[#ccff00]">
                  <FaShieldAlt className="animate-pulse" />
               </div>
               <span className="font-mono text-[8px] text-zinc-600 tracking-[0.4em] uppercase">Secure_Terminal_v4</span>
            </div>
            <ContactForm />
          </motion.section>

        </div>
      </div>

      {/* --- 9. FOOTER STRIP --- */}
      <footer className="border-t border-white/5 py-12 px-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-black">
        <div className="space-y-2">
          <h3 className="text-lg font-black tracking-tighter uppercase italic text-white">CODE<span className="text-[#ccff00]">.</span></h3>
          <p className="text-[8px] font-mono text-zinc-700 tracking-[0.3em] uppercase">Innovating Beyond Constraints</p>
        </div>
        
        <div className="flex gap-12 text-[8px] font-black tracking-[0.4em] text-zinc-500 uppercase">
          <span className="hover:text-[#ccff00] cursor-pointer transition-colors flex items-center gap-2"><FaBolt className="text-[10px]" /> Infrastructure</span>
          <span className="hover:text-[#ccff00] cursor-pointer transition-colors">Compliance</span>
          <span className="hover:text-[#ccff00] cursor-pointer transition-colors">System_Status</span>
        </div>

        <div className="text-[8px] font-mono text-zinc-800 tracking-widest uppercase">
          © 2026 CODE INNOVATIVE TECHNOLOGIES // PRIVACY_ENCRYPTED
        </div>
      </footer>

      {/* --- SCROLL HINT --- */}
      <motion.div 
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="fixed bottom-10 left-10 flex items-center gap-4 text-[7px] tracking-[0.6em] uppercase text-[#ccff00] font-bold z-50 mix-blend-difference vertical-text"
      >
        <span className="w-[1px] h-12 bg-[#ccff00]/30" /> SCROLL_EXPLORE
      </motion.div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
    </motion.div>
  );
}
import { motion } from 'framer-motion';
import { FaFingerprint, FaShieldAlt, FaBolt, FaCircle } from 'react-icons/fa';
import Hero from '../components/sections/Hero';
import WhoWeAre from '../components/sections/WhoWeAre';
import ServicesGrid from '../components/sections/ServicesGrid';
import CaseStudies from '../components/sections/CaseStudies';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import FAQSection from '../components/sections/FAQSection';
import ContactForm from '../components/sections/ContactForm';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Home() {
  return (
    <article className="text-white selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden">
      
      {/* --- 1. GLOBAL HUD (SIDE) - Ultra-wide screen tech indicator --- */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-[50] hidden 2xl:flex flex-col gap-8 pointer-events-none" aria-hidden="true">
        {['01_ARCHIVE', '02_INTEL', '03_ARSENAL', '04_FORGE', '05_KNOWLEDGE', '06_UPLINK'].map((label) => (
          <div key={label} className="group flex flex-col items-start gap-1.5">
            <span className="text-[7px] font-mono tracking-[0.4em] text-zinc-700">
              {label}
            </span>
            <div className="h-[1px] w-4 bg-zinc-900" />
          </div>
        ))}
      </aside>

      <div className="pt-16 sm:pt-20">
        {/* --- 2. HERO SECTION --- */}
        <Hero />

        <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
          
          {/* --- 3. WHO WE ARE (IDENTITY & MISSION) --- */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative py-16 sm:py-24 mb-20 sm:mb-28 border-l border-white/5 pl-4 sm:pl-8 md:pl-16"
          >
            <div className="flex items-center gap-3 text-[#ccff00] text-[8px] sm:text-[9px] font-black tracking-[0.5em] mb-8 uppercase">
              <FaFingerprint className="text-sm" /> IDENTITY_PROTOCOL_01
            </div>
            
            <WhoWeAre />
          </motion.section>

          {/* --- 4. TECHNICAL MARQUEE (TECH STACK) --- */}
          <div className="py-4 sm:py-5 border-y border-white/5 overflow-hidden whitespace-nowrap mb-20 sm:mb-28 bg-zinc-950/80 rounded-2xl" aria-hidden="true">
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="flex gap-16 sm:gap-24 text-[8px] sm:text-[9px] font-mono text-zinc-400 uppercase tracking-[0.4em] items-center"
            >
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex gap-16 sm:gap-24 items-center">
                  <span className="flex items-center gap-3"><FaCircle className="text-[4px] text-[#ccff00]" /> AI_NEURAL_AGENTS</span>
                  <span className="flex items-center gap-3"><FaCircle className="text-[4px] text-cyan-400" /> DISTRIBUTED_SYSTEMS</span>
                  <span className="flex items-center gap-3"><FaCircle className="text-[4px] text-emerald-400" /> KUBERNETES_MESH</span>
                  <span className="flex items-center gap-3"><FaCircle className="text-[4px] text-[#ccff00]" /> ZERO_TRUST_SECURITY</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* --- 5. SERVICES (THE ARSENAL) --- */}
          <motion.section 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative py-10 sm:py-16 mb-20 sm:mb-28"
          >
            <ServicesGrid />
          </motion.section>

          {/* --- 6. CASE STUDIES & CLIENT DEPLOYMENTS --- */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative py-10 sm:py-16 mb-20 sm:mb-28"
          >
            <CaseStudies />
          </motion.section>

          {/* --- 7. WHY CHOOSE CODE (CONTRAST BLOCK) --- */}
          <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.15 }}
            className="my-20 sm:my-28 rounded-3xl sm:rounded-[2.5rem] bg-[#ccff00] text-black p-6 sm:p-12 md:p-20 overflow-hidden relative shadow-2xl"
          >
            <div className="absolute top-4 sm:top-6 right-6 sm:right-10 flex gap-6 sm:gap-10 font-mono text-[7px] sm:text-[8px] font-black opacity-60 uppercase tracking-widest">
              <span>REF: INTEL_CORE_2026</span>
              <span>VERIFIED_SLA: 99.99%</span>
            </div>
            <WhyChooseUs />
          </motion.section>

          {/* --- 8. FREQUENTLY ASKED QUESTIONS (FAQ & KNOWLEDGE BASE) --- */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mb-20 sm:mb-28"
          >
            <FAQSection />
          </motion.section>

          {/* --- 9. CONTACT (UPLINK) --- */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative py-16 sm:py-24 mb-16 sm:mb-24 rounded-3xl sm:rounded-[3rem] border border-white/5 bg-gradient-to-br from-zinc-950 via-[#050505] to-black p-4 sm:p-8 overflow-hidden shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-6 sm:mb-8 ml-2 sm:ml-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#ccff00]/10 rounded-xl flex items-center justify-center text-[#ccff00]">
                <FaShieldAlt className="animate-pulse text-sm sm:text-base" />
              </div>
              <span className="font-mono text-[8px] sm:text-[9px] text-zinc-500 tracking-[0.4em] uppercase font-bold">
                Secure_Terminal_v4.2 // Encrypted
              </span>
            </div>
            <ContactForm />
          </motion.section>

        </div>
      </div>

    </article>
  );
}
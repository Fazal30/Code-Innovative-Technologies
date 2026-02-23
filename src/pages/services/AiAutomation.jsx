import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaBrain, FaRobot, FaMicrochip, FaCogs, FaProjectDiagram, 
  FaDatabase, FaNetworkWired, FaEye, FaBolt, FaTerminal 
} from 'react-icons/fa';

const AiAutomation = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax and scroll-based values
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Animation Variants
  const containerVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const capabilities = [
    "NEURAL_NET_TRAINING", "NATURAL_LANGUAGE_UNDERSTANDING", "COMPUTER_VISION",
    "AUTONOMOUS_AGENTS", "PREDICTIVE_MAINTENANCE", "SENTIMENT_ANALYSIS",
    "CUSTOM_LLM_FINE_TUNING", "VECTOR_EMBEDDINGS"
  ];

  return (
    <div className="bg-[#020202] text-white min-h-screen pt-40 pb-20 selection:bg-[#ccff00] selection:text-black overflow-hidden font-sans">
      
      {/* 1. KINETIC BACKGROUND CORE */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#7e22ce10_0%,transparent_50%)]" />
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] border border-purple-500/5 rounded-full" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. HERO SECTION WITH PARALLAX */}
        <motion.div 
          style={{ y: textY, opacity: opacityFade }}
          initial="initial"
          animate="animate"
          variants={containerVars}
          className="mb-40"
        >
          <motion.span variants={fadeInUp} className="text-purple-500 font-mono text-[10px] tracking-[0.7em] uppercase mb-6 block font-black">
            // NEURAL_LINK_ESTABLISHED
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-[10vw] md:text-[8.5rem] font-black tracking-tighter leading-[0.8] mb-12 italic uppercase">
            COGNITIVE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-white">
              AUTOMATION.
            </span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-zinc-500 text-xl md:text-3xl font-light max-w-4xl leading-relaxed italic">
            Transitioning from reactive software to <span className="text-white">proactive intelligence</span>. We deploy agentic frameworks that learn, adapt, and execute.
          </motion.p>
        </motion.div>

        {/* 3. HORIZONTAL CAPABILITY TICKER */}
        <div className="mb-48 -mx-6 overflow-hidden border-y border-white/5 py-8 bg-zinc-950/20 backdrop-blur-xl">
          <motion.div 
            animate={{ x: [0, -1500] }} 
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center whitespace-nowrap"
          >
            {[...capabilities, ...capabilities].map((cap, i) => (
              <span key={i} className="font-mono text-[10px] text-zinc-500 tracking-[0.3em] flex items-center gap-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" /> {cap}
              </span>
            ))}
          </motion.div>
        </div>

        {/* 4. THE INTELLIGENCE GRID (ENHANCED) */}
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVars}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-60"
        >
          {[
            { 
              title: "LLM Orchestration", 
              icon: <FaBrain />, 
              desc: "Building proprietary RAG (Retrieval-Augmented Generation) systems that leverage your internal data with enterprise-grade privacy.",
              metric: "99.8% Context Accuracy"
            },
            { 
              title: "Agentic Swarms", 
              icon: <FaRobot />, 
              desc: "Multi-agent systems where AI instances collaborate to solve complex multi-step problems without human intervention.",
              metric: "24/7 Autonomous Ops"
            },
            { 
              title: "Computer Vision", 
              icon: <FaEye />, 
              desc: "Deep learning models for real-time object detection, OCR, and anomaly detection in industrial environments.",
              metric: "Sub-10ms Inference"
            },
            { 
              title: "Data Pipelines", 
              icon: <FaDatabase />, 
              desc: "Automated ETL processes that feed clean, high-dimensional data into your training models continuously.",
              metric: "TB-Scale Processing"
            },
            { 
              title: "Neural Search", 
              icon: <FaProjectDiagram />, 
              desc: "Vector-based semantic search engines that understand intent rather than just keywords.",
              metric: "10x Relevancy Boost"
            },
            { 
              title: "Edge Intelligence", 
              icon: <FaMicrochip />, 
              desc: "Quantized model deployment on ARM/NVIDIA edge hardware for offline, low-latency intelligence.",
              metric: "Zero-Cloud Latency"
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              variants={fadeInUp}
              whileHover={{ y: -15, scale: 1.02 }}
              className="p-12 bg-[#080808] border border-white/5 rounded-[3rem] group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                {item.icon}
              </div>
              <div className="text-purple-500 text-4xl mb-10 group-hover:scale-110 group-hover:text-pink-500 transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase italic tracking-tighter text-white">{item.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-10 font-light italic">"{item.desc}"</p>
              <div className="pt-6 border-t border-white/5">
                <span className="text-[#ccff00] font-mono text-[9px] tracking-widest uppercase">{item.metric}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 5. TECH STACK HUD (MISSION CRITICAL) */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-40">
           <motion.div 
            initial={{ x: -100, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            transition={{ duration: 1 }}
           >
              <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase italic leading-none">The Neural <br /> Architecture.</h2>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="h-16 w-1 bg-gradient-to-b from-purple-500 to-transparent" />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <FaCogs className="text-purple-500" /> Model Fine-Tuning
                    </h4>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-md">Utilizing PEFT and LoRA techniques to adapt foundation models (Llama 3, GPT-4) to your specific industry nomenclature.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="h-16 w-1 bg-gradient-to-b from-pink-500 to-transparent" />
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                      <FaNetworkWired className="text-pink-500" /> Vector Infrastructure
                    </h4>
                    <p className="text-zinc-500 text-sm leading-relaxed max-w-md">Scalable Milvus and Weaviate clusters designed for low-latency retrieval of high-dimensional embeddings.</p>
                  </div>
                </div>
              </div>
           </motion.div>

           <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            className="relative p-1 bg-gradient-to-br from-purple-500/20 to-transparent rounded-[4rem]"
           >
              <div className="bg-zinc-950 p-12 rounded-[3.9rem] border border-white/5 relative overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-[10px] font-mono text-purple-400">CORE_AI_PROCESSOR</span>
                </div>
                <div className="space-y-4 font-mono text-[11px] text-zinc-400">
                  <p className="text-purple-500 italic">&gt; LOAD_MODEL: MISTRAL_7B_V0.3</p>
                  <p>&gt; STATUS: OPTIMIZING_WEIGHTS...</p>
                  <p>&gt; QUANTIZATION: INT8_ACTIVATED</p>
                  <p>&gt; PIPELINE: RAG_ENABLED</p>
                  <p className="text-[#ccff00]">&gt; SYSTEM_READY: 99.4% ACCURACY ATTAINED</p>
                  <div className="h-[2px] w-full bg-white/5 mt-6" />
                  <div className="flex justify-between pt-4">
                    <span>MEMORY_USAGE</span>
                    <span className="text-white">4.2GB / 16GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LATENCY_API</span>
                    <span className="text-white">142ms</span>
                  </div>
                </div>
                {/* Decorative scanning line */}
                <motion.div 
                  animate={{ top: ['0%', '100%', '0%'] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-1 bg-purple-500/20 shadow-[0_0_15px_purple] z-20" 
                />
              </div>
           </motion.div>
        </section>

        {/* 6. BOTTOM CTA / STATS */}
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { label: "Models Deployed", val: "120+" },
            { label: "Data Processed", val: "4.8PB" },
            { label: "Accuracy Avg", val: "99.2%" },
            { label: "Cost Reduced", val: "65%" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ backgroundColor: 'rgba(168, 85, 247, 0.05)' }}
              className="p-10 border border-white/5 rounded-[2rem] text-center"
            >
              <h5 className="text-4xl font-black mb-2 tracking-tighter italic">{stat.val}</h5>
              <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiAutomation;
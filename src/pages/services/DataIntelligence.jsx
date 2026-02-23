import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  FaDatabase, FaChartLine, FaStream, FaProjectDiagram, 
  FaServer, FaMicrochip, FaSearchDollar, FaBolt, FaTerminal 
} from 'react-icons/fa';

const DataIntelligence = () => {
  const { scrollYProgress } = useScroll();
  
  // Dynamic background scaling based on scroll
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);

  const containerVars = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
  };

  const fadeInUp = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <div className="bg-[#020202] text-white min-h-screen pt-40 pb-20 selection:bg-[#ccff00] selection:text-black overflow-hidden font-sans">
      
      {/* 1. DATA STREAM BACKGROUND */}
      <motion.div 
        style={{ scale: bgScale, opacity: 0.15 }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f59e0b10_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 2. HERO SECTION */}
        <motion.div 
          initial="initial"
          animate="animate"
          variants={containerVars}
          className="mb-32"
        >
          <motion.span variants={fadeInUp} className="text-amber-500 font-mono text-[10px] tracking-[0.6em] uppercase mb-6 block font-black">
            // PROTOCOL_DATA_STREAM_ESTABLISHED
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-[10vw] md:text-[8rem] font-black tracking-tighter leading-[0.85] mb-10 italic uppercase">
            PREDICTIVE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-200">
              INSIGHTS.
            </span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-zinc-500 text-xl md:text-2xl font-light max-w-4xl leading-relaxed italic border-l-2 border-amber-900/50 pl-8">
            Data is the new telemetry. We build <span className="text-white">real-time streaming architectures</span> that turn raw logs into actionable market advantages using high-throughput engines like Spark and Flink.
          </motion.p>
        </motion.div>

        {/* 3. CORE INFRASTRUCTURE GRID */}
        <section className="grid lg:grid-cols-2 gap-20 items-start mb-48">
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
            >
                {[
                    { label: "Data Warehousing", val: "Scalable Snowflake, BigQuery & Redshift Architectures", desc: "Enterprise-grade storage optimized for complex analytical queries." },
                    { label: "Streaming ETL", val: "High-throughput streams with Apache Kafka & Pulsar", desc: "Processing millions of events per second with millisecond latency." },
                    { label: "Visualization", val: "Command-center Dashboards & Custom BI", desc: "Turning high-dimensional data into intuitive executive HUDs." },
                    { label: "MLOps Integration", val: "Automated Model Deployment Pipelines", desc: "Continuous training and monitoring for production-ready AI." }
                ].map((s, i) => (
                    <div key={i} className="group cursor-default">
                        <h4 className="text-[10px] font-mono text-amber-500 uppercase mb-3 tracking-widest">{s.label}</h4>
                        <p className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-[#ccff00] transition-colors">{s.val}</p>
                        <p className="text-zinc-500 text-sm italic font-light">"{s.desc}"</p>
                    </div>
                ))}
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative sticky top-40"
            >
                <div className="absolute -inset-10 bg-amber-500/5 blur-[120px] rounded-full animate-pulse" />
                <div className="relative p-16 bg-zinc-950/80 backdrop-blur-md border border-white/5 rounded-[4rem] text-center overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-30" />
                    <FaDatabase className="text-amber-500 text-8xl mx-auto mb-10 group-hover:rotate-12 transition-transform" />
                    <h3 className="text-6xl font-black italic tracking-tighter mb-4">TB_SCALE</h3>
                    <p className="text-zinc-500 text-xs font-mono uppercase tracking-[0.3em] mb-12">Total_Daily_Telemetry</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-left border-t border-white/5 pt-10">
                        <div>
                            <p className="text-[9px] font-mono text-zinc-600 uppercase">Latency</p>
                            <p className="text-xl font-black text-white">&lt; 50ms</p>
                        </div>
                        <div>
                            <p className="text-[9px] font-mono text-zinc-600 uppercase">Reliability</p>
                            <p className="text-xl font-black text-white">99.999%</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>

        {/* 4. THE DATA PIPELINE FLOW (VISUALIZATION) */}
        
        <div className="mb-48 p-12 md:p-24 bg-[#050505] border border-white/5 rounded-[4rem]">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-4">The Pipeline <span className="text-amber-500">Protocol.</span></h2>
                <p className="text-zinc-500 font-mono text-xs">END_TO_END_ENCRYPTION_ENABLED</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
                {[
                    { step: "INGEST", icon: <FaStream />, items: ["Log Collection", "IoT Sensors", "User Events"] },
                    { step: "PROCESS", icon: <FaServer />, items: ["Spark Cleaning", "Schema Mapping", "Anonymization"] },
                    { step: "DELIVER", icon: <FaChartLine />, items: ["OLAP Storage", "BI Export", "Real-time Alerts"] }
                ].map((item, i) => (
                    <div key={i} className="relative z-10 bg-zinc-900/30 p-10 rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all">
                        <div className="text-amber-500 text-3xl mb-8">{item.icon}</div>
                        <h5 className="text-xl font-black uppercase mb-6 italic tracking-widest">{item.step}</h5>
                        <ul className="space-y-3">
                            {item.items.map((li, idx) => (
                                <li key={idx} className="text-zinc-500 text-xs font-mono flex items-center gap-2">
                                    <span className="w-1 h-1 bg-amber-500 rounded-full" /> {li}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        {/* 5. TECHNICAL SPECIFICATIONS TERMINAL */}
        <section className="mb-20">
            <div className="bg-black rounded-3xl p-1 border border-white/10 overflow-hidden">
                <div className="bg-zinc-900/50 p-4 flex items-center justify-between border-b border-white/10">
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">SYS_LOG_ANALYZER_V3.0</span>
                </div>
                <div className="p-10 font-mono text-[11px] md:text-sm leading-relaxed text-zinc-400">
                    <p className="text-amber-500 mb-2">&gt; STARTING_CLUSTER_SCAN...</p>
                    <p>&gt; NODES_ONLINE: 128_DISTRIBUTED_INSTANCES</p>
                    <p>&gt; IO_READ_SPEED: 12.4 GB/s</p>
                    <p>&gt; PARQUET_COMPRESSION_RATIO: 4.2x</p>
                    <p>&gt; CURRENT_BATCH_ID: #FF90021_DL</p>
                    <motion.p 
                        animate={{ opacity: [1, 0] }} 
                        transition={{ duration: 0.8, repeat: Infinity }}
                        className="text-[#ccff00] mt-4 font-bold"
                    >
                        &gt; SYSTEM_NOMINAL: ANALYZING_REAL_TIME_MARKET_TRENDS...
                    </motion.p>
                </div>
            </div>
        </section>

        {/* 6. STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { label: "Data Integrity", val: "99.9%" },
                { label: "Query Speed", val: "0.8s" },
                { label: "Supported Sources", val: "500+" },
                { label: "Cost Optimized", val: "30%" }
            ].map((stat, i) => (
                <div key={i} className="p-8 border border-white/5 rounded-2xl text-center group hover:bg-amber-500/5 transition-all">
                    <h6 className="text-3xl font-black italic mb-2 tracking-tighter">{stat.val}</h6>
                    <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DataIntelligence;
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaDatabase, FaChartLine, FaStream, FaProjectDiagram, 
  FaServer, FaMicrochip, FaBolt, FaTerminal, FaChevronRight 
} from 'react-icons/fa';
import SpotlightCard from '../../components/ui/SpotlightCard';
import Counter from '../../components/ui/Counter';

const dataFeatures = [
  {
    title: "High-Throughput Streaming ETL",
    desc: "Real-time event processing with Apache Kafka, Flink, and Spark Streaming processing millions of events per second with sub-50ms latency.",
    icon: FaStream,
    color: "#f59e0b"
  },
  {
    title: "Distributed Data Warehouses",
    desc: "Cloud-native analytical storage architectures on Snowflake, BigQuery, and ClickHouse optimized for petabyte-scale real-time SQL execution.",
    icon: FaDatabase,
    color: "#ccff00"
  },
  {
    title: "Executive BI HUD & Telemetry",
    desc: "Low-latency visualization dashboards that translate complex high-dimensional business data into predictive actionable insights.",
    icon: FaChartLine,
    color: "#00e5ff"
  },
  {
    title: "Automated MLOps Pipelines",
    desc: "Continuous model retraining and drift monitoring pipelines to ensure your AI algorithms stay sharp against changing market patterns.",
    icon: FaProjectDiagram,
    color: "#a855f7"
  }
];

export default function DataIntelligence() {
  return (
    <article className="bg-transparent text-white min-h-screen pt-32 sm:pt-40 pb-20 selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="mb-20 sm:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-amber-500 rounded-full" />
            <span className="text-amber-400 font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-bold">
              Service_Dossier // Data_Intelligence
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
            PREDICTIVE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-[#ccff00]">
              TELEMETRY_ENGINE.
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-8 text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Data is your most strategic fuel. We build <span className="text-white font-bold">real-time streaming pipelines</span> and predictive telemetry architectures that process petabytes into immediate tactical market dominance.
            </p>

            <div className="md:col-span-4 flex gap-4">
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-amber-400 text-2xl sm:text-3xl font-black font-mono">
                  <Counter from={0} to={4.8} duration={2} suffix="PB" />
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Data Processed</div>
              </div>
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-[#ccff00] text-2xl sm:text-3xl font-black font-mono">
                  &lt;50ms
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Query Latency</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. CAPABILITIES GRID --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Data <span className="text-amber-400 italic">Capabilities.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Processing, streaming, and predictive analytics at planetary scale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {dataFeatures.map((item, idx) => {
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
                        DATA_0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-amber-400 transition-colors">
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

        {/* --- 3. PIPELINE ARCHITECTURE (INGEST -> PROCESS -> DELIVER) --- */}
        <section className="mb-24 sm:mb-36 p-8 sm:p-12 bg-zinc-950/80 border border-white/10 rounded-3xl shadow-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              The Data Pipeline <span className="text-amber-400 italic">Protocol.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-1.5">
              END_TO_END_ENCRYPTED_STREAMING
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01_INGEST", title: "Omnichannel Ingestion", items: ["Kafka Stream Sinks", "IoT & Telemetry Probes", "Event Webhook Buses"] },
              { step: "02_PROCESS", title: "Real-Time Transformation", items: ["Spark Distributed Engine", "Parquet Columnar Cleanse", "Automated Tokenization"] },
              { step: "03_DELIVER", title: "Predictive Analytics", items: ["Sub-second OLAP Storage", "Executive BI Dashboards", "Automated Action Triggers"] }
            ].map((p, i) => (
              <div key={i} className="p-6 rounded-2xl bg-black/60 border border-white/5 space-y-4">
                <span className="text-[9px] font-mono text-amber-400 font-bold uppercase tracking-widest">{p.step}</span>
                <h4 className="text-lg font-black text-white uppercase tracking-tight">{p.title}</h4>
                <ul className="space-y-2 font-mono text-xs text-zinc-400">
                  {p.items.map((it, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-amber-400" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* --- 4. ACTION CALLOUT --- */}
        <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-[#080808] to-black border border-white/10 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase italic text-white">
            Transform Your <span className="text-amber-400">Data Architecture.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-widest mb-8 uppercase text-zinc-400 max-w-md mx-auto">
            Build high-throughput streaming pipelines with our big data architects.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ccff00] text-black rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.25)]"
          >
            Initiate Data Consultation <FaChevronRight size={10} />
          </Link>
        </div>

      </div>
    </article>
  );
}
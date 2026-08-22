import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaBrain, FaRobot, FaMicrochip, FaCogs, FaProjectDiagram, 
  FaDatabase, FaEye, FaBolt, FaTerminal, FaShieldAlt, FaChevronRight 
} from 'react-icons/fa';
import SpotlightCard from '../../components/ui/SpotlightCard';
import Counter from '../../components/ui/Counter';

const aiModules = [
  { 
    title: "Enterprise LLM & RAG Pipelines", 
    icon: FaBrain, 
    desc: "Building proprietary Retrieval-Augmented Generation systems that securely index internal corporate databases with zero data leakage.",
    metric: "99.8% Context Accuracy",
    color: "#a855f7"
  },
  { 
    title: "Autonomous Agent Swarms", 
    icon: FaRobot, 
    desc: "Multi-agent systems where cognitive AI instances collaborate to solve multi-step operational workflows without human bottlenecks.",
    metric: "24/7 Autonomous Ops",
    color: "#ec4899"
  },
  { 
    title: "Computer Vision & OCR", 
    icon: FaEye, 
    desc: "High-speed convolutional neural networks for real-time defect classification, anomaly detection, and automated document analysis.",
    metric: "Sub-10ms Inference",
    color: "#00e5ff"
  },
  { 
    title: "Automated Data Streams & ETL", 
    icon: FaDatabase, 
    desc: "Self-optimizing data ingestion pipelines that clean, tokenize, and feed high-dimensional vector embeddings into model clusters.",
    metric: "TB-Scale Daily Ingest",
    color: "#ccff00"
  },
  { 
    title: "Neural Semantic Search", 
    icon: FaProjectDiagram, 
    desc: "Vector-based embedding search engines (Milvus/Weaviate/Pinecone) that understand nuanced user intent rather than keyword matches.",
    metric: "10x Relevancy Boost",
    color: "#f59e0b"
  },
  { 
    title: "Edge Quantized Models", 
    icon: FaMicrochip, 
    desc: "Quantized 4-bit/8-bit neural model deployments on ARM and NVIDIA edge clusters for offline, ultra-low latency compute.",
    metric: "Zero-Cloud Latency",
    color: "#10b981"
  }
];

export default function AiAutomation() {
  return (
    <article className="bg-transparent text-white min-h-screen pt-32 sm:pt-40 pb-20 selection:bg-[#ccff00] selection:text-black font-sans overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="mb-20 sm:mb-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-1 w-12 bg-purple-500 rounded-full" />
            <span className="text-purple-400 font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-bold">
              Service_Dossier // Neural_Core
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
            AUTONOMOUS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-[#ccff00]">
              AI_SYSTEMS.
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-8 items-end">
            <p className="md:col-span-8 text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              Transition from reactive software to <span className="text-white font-bold">proactive cognitive intelligence</span>. We engineer autonomous agent swarms, enterprise RAG frameworks, and domain-adapted LLMs that execute complex operations 24/7.
            </p>

            <div className="md:col-span-4 flex gap-4">
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-purple-400 text-2xl sm:text-3xl font-black font-mono">
                  <Counter from={0} to={120} duration={2} suffix="+" />
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Models Deployed</div>
              </div>
              <div className="p-4 bg-zinc-950/80 border border-white/10 rounded-2xl flex-1 text-center">
                <div className="text-[#ccff00] text-2xl sm:text-3xl font-black font-mono">
                  &lt;15ms
                </div>
                <div className="text-[8px] font-mono text-zinc-500 uppercase mt-1">Inference Speed</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. CAPABILITIES GRID --- */}
        <section className="mb-24 sm:mb-36">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Neural <span className="text-purple-400 italic">Arsenal.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-2">
              Advanced machine intelligence architectures for enterprise automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiModules.map((item, idx) => {
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
                      <span className="text-[9px] font-mono text-purple-400 bg-purple-950/40 px-2.5 py-1 rounded border border-purple-500/20 uppercase font-bold">
                        {item.metric}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-purple-400 transition-colors">
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

        {/* --- 3. NEURAL ARCHITECTURE SIMULATOR --- */}
        <section className="mb-24 sm:mb-36 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
              Model Fine-Tuning & <br />
              <span className="text-purple-400 italic">Vector Scale.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light">
              Utilizing Parameter-Efficient Fine-Tuning (PEFT) and LoRA methodologies, we train custom models on your private domain knowledge without exposing sensitive IP to public API endpoints.
            </p>
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-zinc-950/80 rounded-xl border border-white/5 flex items-center justify-between">
                <span className="text-zinc-400">Context Window Expansion</span>
                <span className="text-purple-400 font-bold">128k Tokens Native</span>
              </div>
              <div className="p-3 bg-zinc-950/80 rounded-xl border border-white/5 flex items-center justify-between">
                <span className="text-zinc-400">Embedding Engine</span>
                <span className="text-[#ccff00] font-bold">Milvus / Weaviate Cluster</span>
              </div>
            </div>
          </div>

          <div className="bg-zinc-950 p-8 rounded-3xl border border-white/10 font-mono text-xs text-zinc-400 space-y-3 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center pb-3 border-b border-white/5 text-[9px] text-zinc-500">
              <span>CORE_AI_TELEMETRY</span>
              <span className="text-[#ccff00]">LIVE_INFERENCE_ACTIVE</span>
            </div>
            <p className="text-purple-400">&gt; MODEL_INSTANCE: LLAMA_3_70B_QUANTIZED</p>
            <p>&gt; PIPELINE: SECURE_ENTERPRISE_RAG</p>
            <p>&gt; EMBEDDING_MATCH_SCORE: 0.994_VERIFIED</p>
            <p>&gt; LATENCY_PER_TOKEN: 4.8ms</p>
            <p className="text-[#ccff00]">&gt; AGENT_SWARM_STATE: 100% OPERATIONAL</p>
          </div>
        </section>

        {/* --- 4. ACTION CALLOUT --- */}
        <div className="rounded-3xl bg-gradient-to-br from-zinc-950 via-[#080808] to-black border border-white/10 p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden">
          <h2 className="text-3xl sm:text-5xl font-black mb-4 tracking-tighter uppercase italic text-white">
            Deploy Custom <span className="text-purple-400">AI Intelligence.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm tracking-widest mb-8 uppercase text-zinc-400 max-w-md mx-auto">
            Schedule an AI architecture scoping session with our neural systems team.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ccff00] text-black rounded-xl font-black uppercase text-xs tracking-widest hover:bg-white transition-all active:scale-95 shadow-[0_0_20px_rgba(204,255,0,0.25)]"
          >
            Initiate AI Deployment <FaChevronRight size={10} />
          </Link>
        </div>

      </div>
    </article>
  );
}
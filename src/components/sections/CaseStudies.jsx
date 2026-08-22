import { motion } from 'framer-motion';
import { FaArrowRight, FaShieldAlt, FaBrain, FaBolt, FaChartLine } from 'react-icons/fa';
import SpotlightCard from '../ui/SpotlightCard';

const caseStudies = [
  {
    title: "Global FinTech Ledger & Payment Engine",
    client: "Tier-1 Payment Gateway",
    tag: "FINTECH // DISTRIBUTED ARCHITECTURE",
    metrics: "40M+ Daily Trans / <12ms Latency",
    desc: "Engineered a high-concurrency transaction pipeline in Go and Rust with zero-loss distributed state management and real-time fraud telemetry.",
    icon: FaBolt,
    color: "#ccff00"
  },
  {
    title: "Autonomous Healthcare Diagnostic Engine",
    client: "MedTech Innovations Lab",
    tag: "HEALTHCARE // NEURAL AI",
    metrics: "99.4% Accuracy / HIPAA Hardened",
    desc: "Deployed HIPAA-compliant Computer Vision and multi-modal LLMs for real-time pathology anomaly detection and automated report synthesis.",
    icon: FaBrain,
    color: "#00e5ff"
  },
  {
    title: "Zero-Trust Cloud Migration & Kubernetes Mesh",
    client: "Global SaaS Enterprise",
    tag: "CLOUD FORGE // CYBERSECURITY",
    metrics: "99.999% Uptime / 60% Infra Cost Cut",
    desc: "Orchestrated full cloud-native infrastructure transition into self-healing multi-region Kubernetes clusters with automated zero-trust authorization.",
    icon: FaShieldAlt,
    color: "#a855f7"
  }
];

export default function CaseStudies() {
  return (
    <section className="py-16 sm:py-24 relative" aria-label="Case Studies & Proof of Execution">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-[#ccff00] font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-3 font-bold">
              <FaChartLine /> PROOF_OF_EXECUTION // PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
              Featured <span className="text-zinc-600 italic">Deployments.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-xs sm:text-sm font-mono max-w-sm">
            High-stakes software and cloud systems engineered for uncompromising speed, compliance, and industrial scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SpotlightCard key={idx} className="flex flex-col justify-between group h-full">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div 
                      className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-base group-hover:scale-110 transition-transform"
                      style={{ color: item.color }}
                    >
                      <Icon />
                    </div>
                    <span className="text-[8px] font-mono text-zinc-500 bg-zinc-900/80 px-2 py-0.5 rounded border border-white/5 uppercase">
                      CASE_0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[8px] font-mono text-[#ccff00] uppercase tracking-widest block mb-2 font-bold">
                    {item.tag}
                  </span>

                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-[#ccff00] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="p-3 rounded-xl bg-zinc-900/60 border border-white/5 mb-3">
                    <span className="text-[7.5px] font-mono text-zinc-500 uppercase block">Impact_Telemetry</span>
                    <span className="text-xs font-mono font-bold text-white tracking-tight">{item.metrics}</span>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

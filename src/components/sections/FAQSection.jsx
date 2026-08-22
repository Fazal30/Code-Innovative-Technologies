import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    q: "What technological capabilities does Code Innovative Technologies specialize in?",
    a: "We specialize in autonomous AI neural workflows, enterprise cloud engineering (Kubernetes, AWS, GCP, Azure), high-concurrency software architectures (Rust, Go, Node.js), zero-trust cybersecurity protocols, and mission-critical web applications with sub-millisecond interaction speeds."
  },
  {
    q: "How does Code Innovative Technologies ensure high performance and zero downtime?",
    a: "We enforce performance budgets, edge-caching networks, distributed microservices, automated CI/CD failover testing, and military-grade AES-256 data hardening. All architecture is designed for 99.99% SLA availability."
  },
  {
    q: "What is your typical project delivery and sprint methodology?",
    a: "We operate on rapid-pulse agile sprints measured in hours and days rather than weeks. Clients receive direct real-time access to our engineering leads, continuous deployment staging environments, and daily automated telemetry logs."
  },
  {
    q: "Can you integrate custom AI models and LLMs into existing legacy infrastructure?",
    a: "Yes. Our AI & Automation squads engineer custom Retrieval-Augmented Generation (RAG) pipelines, fine-tuned domain LLMs, and cognitive RPA bots that integrate seamlessly with existing enterprise databases, CRMs, and ERP systems."
  },
  {
    q: "How can we initiate a project or technical audit with your engineering core?",
    a: "You can initiate a transmission through our Contact Uplink page or directly via WhatsApp (+91 96209 96689). Our senior architects review all parameters within a 4-hour response window."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 sm:py-24 relative" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-[#ccff00] font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-3 font-bold">
            <FaQuestionCircle /> KNOWLEDGE_BASE // FAQ
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-white">
            Frequently Asked <span className="text-zinc-500 italic">Questions.</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-light mt-3 max-w-lg mx-auto">
            Everything you need to know about our engineering standards, deployment timelines, and security protocols.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'bg-zinc-950/90 border-[#ccff00]/40 shadow-xl' : 'bg-zinc-950/50 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex justify-between items-center gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs border border-white/10 transition-colors ${
                    isOpen ? 'bg-[#ccff00] text-black' : 'bg-zinc-900 text-zinc-400'
                  }`}>
                    {isOpen ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed font-light border-t border-white/5 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRocket, FaCloudUploadAlt, FaCheckCircle, FaGithub, 
  FaLinkedin, FaGlobe, FaPlus, FaMinus, FaBolt,
  FaBrain, FaCode, FaShieldAlt, FaLayerGroup, FaCoffee, 
  FaLaptopCode, FaHeartbeat, FaChevronRight, FaTerminal, FaFire
} from 'react-icons/fa';
import SpotlightCard from '../components/ui/SpotlightCard';
import Counter from '../components/ui/Counter';

const jobList = [
  { 
    id: "ENG-01", 
    title: "Distributed Systems Architect", 
    dept: "Engineering", 
    type: "Full-Time // Remote",
    salary: "$140k - $210k + Equity",
    perks: ["Equity Pool", "100% Remote", "Unlimited PTO", "Hardware Stipend"],
    description: "Lead our core protocol development using Go, Rust, and Next.js 15. You will architect high-throughput microservices and distributed state engines handling millions of transactions with sub-50ms latency."
  },
  { 
    id: "AI-02", 
    title: "Principal AI / RAG Engineer", 
    dept: "AI & Research", 
    type: "Full-Time // Remote",
    salary: "$150k - $230k + Equity",
    perks: ["AI Compute Credits", "Research Budget", "100% Remote"],
    description: "Bridge the gap between foundation LLM research and low-latency production pipelines. Fine-tune open-weight models (Llama 3, Mistral) and build high-dimensional vector search engines on Milvus and Weaviate."
  },
  { 
    id: "OPS-03", 
    title: "DevSecOps & Cloud Architect", 
    dept: "Infrastructure", 
    type: "Full-Time // Remote",
    salary: "$130k - $190k + Equity",
    perks: ["SOC2 Hardening", "Global Cluster Root", "100% Remote"],
    description: "Orchestrate multi-region Kubernetes clusters across AWS and GCP. Implement automated zero-trust security policies, ephemeral mTLS networking, and real-time Prometheus/Grafana telemetry."
  },
  { 
    id: "SEC-04", 
    title: "Red-Team Protocol Security Researcher", 
    dept: "Security", 
    type: "Full-Time // Remote",
    salary: "$140k - $200k + Equity",
    perks: ["Bounty Multipliers", "Zero-Day Budget", "100% Remote"],
    description: "Conduct offensive security audits, memory safety reviews, and cryptographic verification on mission-critical client infrastructure and smart contract protocols."
  },
  { 
    id: "DES-05", 
    title: "Senior Product & Systems Designer", 
    dept: "Design", 
    type: "Full-Time // Remote",
    salary: "$110k - $160k + Equity",
    perks: ["Design Lab Setup", "Flexible Hours", "100% Remote"],
    description: "Craft futuristic cyber interfaces and intuitive telemetry dashboards. You understand atomic design tokens, high-density data visualizations, and fluid Framer Motion micro-interactions."
  }
];

const perksList = [
  { icon: FaLaptopCode, title: "M3 Max Workstation", desc: "Top-tier Apple Silicon hardware setup or custom Linux workstation stipend." },
  { icon: FaHeartbeat, title: "Global Health Shield", desc: "Comprehensive international health, dental, and wellness coverage." },
  { icon: FaGlobe, title: "100% Remote Freedom", desc: "Work from anywhere on Earth. We evaluate pure output, not seat time." },
  { icon: FaBrain, title: "Unlimited AI Compute", desc: "Dedicated H100/A100 cloud GPU clusters for experimentation and research." },
  { icon: FaCoffee, title: "Workspace & Coworking", desc: "Monthly allowance for premier coworking spaces, high-speed fiber, and caffeine." },
  { icon: FaFire, title: "Annual Hacker House", desc: "All-expenses-paid global team retreats in Tokyo, Bali, and Bengaluru." }
];

const hiringSteps = [
  { step: "01", title: "Telemetry Ingest", desc: "Initial codebase & portfolio audit by our senior partners." },
  { step: "02", title: "Technical Siege", desc: "Real-world engineering simulation (Zero whiteboard trivia)." },
  { step: "03", title: "Founders Sync", desc: "Direct mission and architectural alignment with executive leadership." },
  { step: "04", title: "Cluster Deployment", desc: "Immediate onboarding and active squad project allocation." }
];

export default function Career() {
  const [activeJob, setActiveJob] = useState(null);
  const [selectedDept, setSelectedDept] = useState("ALL");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Controlled application form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    github: '',
    linkedin: '',
    portfolio: '',
    experience: 'Select Experience',
    selectedRole: '',
    salary: '',
    noticePeriod: '',
    stack: '',
    philosophy: '',
    fileName: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, fileName: e.target.files[0].name }));
    }
  };

  const selectJobToApply = (jobTitle) => {
    setFormData(prev => ({ ...prev, selectedRole: jobTitle }));
    const applySection = document.getElementById('apply');
    if (applySection) {
      applySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredJobs = selectedDept === "ALL" 
    ? jobList 
    : jobList.filter(j => j.dept.toUpperCase().includes(selectedDept));

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Structure text dynamically for WhatsApp
    const whatsappMessage = `*⚡ NEW TALENT PACKET ACQUIRED ⚡*
----------------------------------------
*01. CANDIDATE PROFILE*
• *Name:* ${formData.fullName}
• *Target Role:* ${formData.selectedRole || 'General Application'}
• *Email:* ${formData.email}
• *Phone:* ${formData.phone || 'N/A'}
• *Location:* ${formData.location || 'N/A'}

*02. DIGITAL FOOTPRINT*
• *GitHub:* ${formData.github || 'N/A'}
• *LinkedIn:* ${formData.linkedin || 'N/A'}
• *Portfolio:* ${formData.portfolio || 'N/A'}

*03. ARSENAL & LOGISTICS*
• *Experience:* ${formData.experience}
• *Expected Salary:* $${formData.salary || 'N/A'}
• *Notice Period:* ${formData.noticePeriod || 'N/A'}
• *Primary Tech Stack:* ${formData.stack}

*04. ARCHITECTURAL PHILOSOPHY*
_"${formData.philosophy || 'No statement provided.'}"_

*05. ATTACHMENT*
• *Resume:* ${formData.fileName ? `Yes (${formData.fileName})` : 'Not attached'}
----------------------------------------
_// Transmitted via Code Innovative Technologies Career Terminal_`;

    const phoneNumber = "919620996689";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    setIsSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);

    setTimeout(() => setIsSubmitted(false), 6000);
  };

  return (
    <article className="bg-[#020202] text-white min-h-screen pt-32 sm:pt-40 font-sans selection:bg-[#ccff00] selection:text-black overflow-x-hidden">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl mx-auto flex flex-col items-center overflow-hidden">
        
        <div className="relative z-10 text-center max-w-4xl">
          <div className="flex items-center justify-center gap-2 text-[#ccff00] font-mono text-[9px] sm:text-[10px] tracking-[0.4em] uppercase mb-4 font-bold">
            <FaTerminal /> RECRUITMENT_FORGE // TOP_1%_ENGINEERING
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.85] mb-8 uppercase italic">
            WE ONLY HIRE <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#ccff00] to-emerald-400">
              BUILDERS.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-400 text-base sm:text-lg md:text-xl font-light mb-12 leading-relaxed">
            <span className="text-white font-bold">Code Innovative Technologies</span> is a high-stakes engineering forge for elite engineers. We build software architectures that define global industries.
          </p>
          
          {/* Key Stats HUD */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto border-t border-white/10 pt-10">
            {[
              { label: "Remote Native", val: "100%", icon: FaGlobe },
              { label: "Founding Equity", val: "Yes", icon: FaRocket },
              { label: "Hiring Acceptance", val: "0.8%", icon: FaBrain },
              { label: "Sprint Deployment", val: "<48h", icon: FaBolt }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="p-4 bg-zinc-950/80 rounded-2xl border border-white/5 flex flex-col items-center group hover:border-[#ccff00]/40 transition-all">
                  <Icon className="text-[#ccff00] text-xl mb-2 group-hover:scale-125 transition-transform" />
                  <span className="text-2xl sm:text-3xl font-black font-mono text-white">{stat.val}</span>
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-widest text-zinc-500 mt-1">{stat.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- 2. LIVE NODES (JOB BOARD) --- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-[#ccff00] font-mono text-[9px] uppercase tracking-[0.4em] mb-2 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-ping" />
              ACTIVE_RECRUITMENT_SLOTS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-white">
              Open <span className="text-zinc-600 italic">Nodes.</span>
            </h2>
          </div>

          {/* Department Filters */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "ENGINEERING", "AI", "INFRASTRUCTURE", "SECURITY", "DESIGN"].map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3 py-1.5 rounded-lg text-[9px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-[#ccff00] text-black font-bold shadow-[0_0_10px_rgba(204,255,0,0.3)]'
                    : 'bg-zinc-950 text-zinc-400 border border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job) => {
            const isOpen = activeJob === job.id;
            return (
              <div 
                key={job.id} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-zinc-950/90 border-[#ccff00]/50 shadow-2xl' 
                    : 'bg-zinc-950/50 border-white/5 hover:border-white/20'
                }`}
              >
                <button 
                  type="button"
                  onClick={() => setActiveJob(isOpen ? null : job.id)}
                  className="w-full p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center text-left gap-4 cursor-pointer"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-[#ccff00] font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 border border-[#ccff00]/30 rounded bg-[#ccff00]/5 font-bold">
                        {job.id}
                      </span>
                      <span className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest">
                        {job.dept}
                      </span>
                      <span className="text-zinc-700 font-mono text-[9px]">|</span>
                      <span className="text-cyan-400 font-mono text-[9px] uppercase">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#ccff00]">
                      {job.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center">
                    <span className="hidden sm:inline font-mono text-xs text-zinc-400">{job.salary}</span>
                    <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-sm transition-transform ${isOpen ? 'bg-[#ccff00] text-black rotate-180' : 'bg-zinc-900 text-zinc-400'}`}>
                      {isOpen ? <FaMinus /> : <FaPlus />}
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/5 space-y-6"
                    >
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.perks.map(p => (
                          <span key={p} className="px-3 py-1 bg-black border border-white/10 rounded-full text-[8.5px] font-mono uppercase tracking-wider text-[#ccff00]">
                            ✓ {p}
                          </span>
                        ))}
                      </div>

                      <div>
                        <button 
                          onClick={() => selectJobToApply(job.title)}
                          className="px-8 py-3.5 bg-[#ccff00] text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.2)] cursor-pointer"
                        >
                          Apply For This Node <FaChevronRight size={9} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- 3. BENEFITS & ENGINEERING CULTURE --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-white">
            Digital Nomad <span className="text-[#ccff00] italic">Infrastructure.</span>
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-light mt-2 max-w-xl mx-auto">
            We don't care where you work. We care about architectural brilliance. Our benefits are designed for high-intensity, high-freedom builders.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perksList.map((perk, i) => {
            const Icon = perk.icon;
            return (
              <SpotlightCard key={i} className="group flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-lg text-[#ccff00] group-hover:scale-110 transition-transform mb-4">
                    <Icon />
                  </div>
                  <h4 className="text-lg font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#ccff00] transition-colors">
                    {perk.title}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">
                    {perk.desc}
                  </p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </section>

      {/* --- 4. THE HIRING PROTOCOL --- */}
      <section className="py-20 border-y border-white/5 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-widest italic text-white">
              The Recruitment <span className="text-cyan-400">Pipeline.</span>
            </h2>
            <p className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest mt-1">
              RAPID_4_STAGE_VERIFICATION
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hiringSteps.map((s, i) => (
              <div key={i} className="bg-[#050505] p-6 rounded-2xl border border-white/5 relative group hover:border-[#ccff00]/40 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-3xl font-black text-[#ccff00] font-mono block mb-2 group-hover:translate-x-1 transition-transform">
                    {s.step}
                  </span>
                  <h4 className="text-white font-black mb-2 uppercase text-sm tracking-wide">{s.title}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. APPLICATION FORM TERMINAL --- */}
      <section id="apply" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="bg-zinc-950 p-6 sm:p-12 md:p-16 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-1 w-8 bg-[#ccff00] rounded-full" />
              <span className="text-[#ccff00] font-mono text-[9px] uppercase tracking-[0.3em] font-bold">Recruitment_Terminal_v4.2</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-white leading-tight">
              Submit <span className="text-zinc-500 italic">Credentials.</span>
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm font-light mt-2 max-w-md">
              Complete the uplink below. All parameters formatted into encrypted WhatsApp transmission packets for executive review.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            
            {/* SECTION 01: BIOMETRICS */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-2">
                <span className="text-[#ccff00]">01 //</span> Personal_Biometrics
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-zinc-400 uppercase">Target Role / Node</label>
                  <input 
                    name="selectedRole" 
                    value={formData.selectedRole} 
                    onChange={handleInputChange} 
                    className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#ccff00] outline-none transition-colors" 
                    placeholder="e.g. Distributed Systems Architect" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-zinc-400 uppercase">Full Name *</label>
                  <input 
                    required 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleInputChange} 
                    className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#ccff00] outline-none transition-colors" 
                    placeholder="Alex Mercer" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-zinc-400 uppercase">Secure Email *</label>
                  <input 
                    required 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#ccff00] outline-none transition-colors" 
                    placeholder="alex@forge.protocol" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-zinc-400 uppercase">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#ccff00] outline-none transition-colors" 
                    placeholder="+91 96209 96689" 
                  />
                </div>
              </div>
            </div>

            {/* SECTION 02: DIGITAL PROFILES */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-2">
                <span className="text-[#ccff00]">02 //</span> Digital_Profiles
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-zinc-400 uppercase">GitHub Profile</label>
                  <input 
                    name="github" 
                    value={formData.github} 
                    onChange={handleInputChange} 
                    className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#ccff00] outline-none transition-colors" 
                    placeholder="github.com/alex" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-zinc-400 uppercase">LinkedIn Profile</label>
                  <input 
                    name="linkedin" 
                    value={formData.linkedin} 
                    onChange={handleInputChange} 
                    className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#ccff00] outline-none transition-colors" 
                    placeholder="linkedin.com/in/alex" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-zinc-400 uppercase">Portfolio / Live URL</label>
                  <input 
                    name="portfolio" 
                    value={formData.portfolio} 
                    onChange={handleInputChange} 
                    className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#ccff00] outline-none transition-colors" 
                    placeholder="https://alex.dev" 
                  />
                </div>
              </div>
            </div>

            {/* SECTION 03: LOGISTICS & STACK */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-2">
                <span className="text-[#ccff00]">03 //</span> Experience & Tech Arsenal
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-zinc-400 uppercase">Experience Level</label>
                  <select 
                    name="experience" 
                    value={formData.experience} 
                    onChange={handleInputChange} 
                    className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#ccff00] outline-none transition-colors cursor-pointer"
                  >
                    <option className="bg-zinc-950">Select Experience</option>
                    <option className="bg-zinc-950">Junior (1-3 Years)</option>
                    <option className="bg-zinc-950">Mid-Level (3-6 Years)</option>
                    <option className="bg-zinc-950">Senior (6-10 Years)</option>
                    <option className="bg-zinc-950">Principal / Architect (10+ Years)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-mono text-zinc-400 uppercase">Primary Stack *</label>
                  <input 
                    required 
                    name="stack" 
                    value={formData.stack} 
                    onChange={handleInputChange} 
                    className="w-full bg-black/60 border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#ccff00] outline-none transition-colors" 
                    placeholder="e.g. Go, Rust, React, Kubernetes" 
                  />
                </div>
              </div>
            </div>

            {/* SECTION 04: PHILOSOPHY */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-2">
                <span className="text-[#ccff00]">04 //</span> Architectural Statement
              </h4>
              <textarea 
                rows="4" 
                name="philosophy" 
                value={formData.philosophy} 
                onChange={handleInputChange} 
                className="w-full bg-black/60 border border-white/10 rounded-2xl p-4 text-xs font-mono text-zinc-300 focus:border-[#ccff00] outline-none transition-colors resize-none" 
                placeholder="Describe a complex software system you designed that scaled effortlessly under heavy load..."
              />
            </div>

            {/* SECTION 05: RESUME DROP */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center gap-2 border-b border-white/5 pb-2">
                <span className="text-[#ccff00]">05 //</span> Resume Upload
              </h4>
              <div className="relative group">
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx" 
                  onChange={handleFileChange} 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" 
                />
                <div className="py-12 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center group-hover:border-[#ccff00]/40 transition-all bg-black/40">
                  <FaCloudUploadAlt className={`text-4xl mb-3 ${formData.fileName ? 'text-[#ccff00]' : 'text-zinc-600 group-hover:text-[#ccff00]'}`} />
                  <p className="text-[9px] font-mono uppercase tracking-widest text-zinc-400">
                    {formData.fileName ? `LOADED: ${formData.fileName}` : 'Drop Resume / CV here (PDF preferred)'}
                  </p>
                </div>
              </div>
            </div>

            {/* SUBMISSION */}
            <div>
              <button 
                type="submit"
                className="w-full py-4 bg-[#ccff00] text-black rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(204,255,0,0.25)] cursor-pointer active:scale-98"
              >
                Transmit Candidate Dossier
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* SUCCESS POPUP */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
          >
            <div className="text-center p-8 bg-zinc-950 border border-white/10 rounded-3xl max-w-md">
              <div className="w-16 h-16 bg-[#ccff00] rounded-full flex items-center justify-center text-black text-2xl mx-auto mb-6 shadow-xl">
                <FaCheckCircle />
              </div>
              <h3 className="text-2xl font-black tracking-tight uppercase mb-3 text-white">Dossier Transmitted</h3>
              <p className="text-zinc-400 font-mono text-xs uppercase tracking-wider mb-6">
                Packet encrypted and forwarded to WhatsApp for rapid partner review.
              </p>
              <button 
                type="button" 
                onClick={() => setIsSubmitted(false)} 
                className="px-6 py-2.5 border border-white/10 rounded-xl font-mono text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all cursor-pointer"
              >
                Close Terminal
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </article>
  );
}
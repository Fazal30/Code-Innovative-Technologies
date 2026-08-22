import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPaperPlane, FaEnvelope, FaShieldAlt, FaLock, FaGlobe, FaPhoneAlt, FaCheckCircle
} from 'react-icons/fa';

export default function ContactForm() {
  const [focusedField, setFocusedField] = useState(null);
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    sector: 'AI_AUTONOMY',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const msg = `*⚡ INITIATE TRANSMISSION - UPLINK ⚡*
Name: ${formData.name}
Email: ${formData.email}
Sector: ${formData.sector}
Brief: ${formData.message}`;

    const url = `https://api.whatsapp.com/send?phone=919620996689&text=${encodeURIComponent(msg)}`;

    setTimeout(() => {
      setStatus('success');
      window.open(url, '_blank');
    }, 1200);
  };

  return (
    <div className="text-zinc-300">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.9] mb-4 tracking-tighter uppercase italic">
              Get <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-zinc-100 to-zinc-500">
                In Touch.
              </span>
            </h2>
            
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed border-l border-[#ccff00]/30 pl-4">
              Direct channel to our lead engineering team. Standard response window: <span className="text-[#ccff00] font-bold">&lt; 4 Hours</span>.
            </p>
          </div>

          {/* CONTACT INFO CARDS */}
          <div className="space-y-3">
            {[
              { icon: FaEnvelope, label: 'Secure Email', val: 'Info@codeinnovativetechnologies.com', href: 'mailto:Info@codeinnovativetechnologies.com', color: '#ccff00' },
              { icon: FaPhoneAlt, label: 'Direct Line', val: '+91 96209 96689', href: 'tel:+919620996689', color: '#00e5ff' },
              { icon: FaGlobe, label: 'Engineering Base', val: 'Electronic City, Bengaluru', href: '#', color: '#a855f7' }
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <a 
                  key={i}
                  href={card.href}
                  className="flex items-center gap-4 bg-zinc-950/80 p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-sm group-hover:scale-110 transition-transform" style={{ color: card.color }}>
                    <Icon />
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-zinc-500 font-mono font-bold">{card.label}</p>
                    <p className="text-white text-xs sm:text-sm font-bold group-hover:text-[#ccff00] transition-colors truncate max-w-[240px] sm:max-w-xs">{card.val}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: SECURE INPUT FORM */}
        <div className="lg:col-span-7">
          <div className="bg-[#080808]/90 backdrop-blur-2xl p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 bg-[#ccff00] text-black rounded-full flex items-center justify-center mx-auto text-2xl shadow-[0_0_30px_rgba(204,255,0,0.3)]">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white">Transmission Initiated</h3>
                  <p className="text-xs text-zinc-400 font-mono max-w-sm mx-auto">
                    Data packet compiled and routed through secure uplink.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-zinc-900 border border-white/10 rounded-xl text-xs font-mono uppercase tracking-widest text-[#ccff00] hover:bg-zinc-800 transition-all"
                  >
                    Send New Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className={`text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.2em] block mb-1.5 transition-colors ${focusedField === 'name' ? 'text-[#ccff00]' : 'text-zinc-500'}`}>
                        01_Your_Name
                      </label>
                      <input 
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        type="text" 
                        placeholder="Alex Morgan" 
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3 text-white text-xs sm:text-sm outline-none focus:border-[#ccff00] transition-colors placeholder:text-zinc-700 font-mono"
                      />
                    </div>

                    {/* Sector */}
                    <div>
                      <label className={`text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.2em] block mb-1.5 transition-colors ${focusedField === 'sector' ? 'text-[#ccff00]' : 'text-zinc-500'}`}>
                        02_Project_Sector
                      </label>
                      <select 
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('sector')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3 text-white text-xs sm:text-sm outline-none focus:border-[#ccff00] transition-colors font-mono cursor-pointer"
                      >
                        <option value="AI_AUTONOMY">AI & Neural Systems</option>
                        <option value="WEB_ENGINEERING">Web & SaaS Platforms</option>
                        <option value="CYBER_SECURITY">Cyber Defense & Audits</option>
                        <option value="MOBILE_APPS">Mobile Applications</option>
                        <option value="CLOUD_INFRA">Cloud & Microservices</option>
                      </select>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className={`text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.2em] block mb-1.5 transition-colors ${focusedField === 'email' ? 'text-[#ccff00]' : 'text-zinc-500'}`}>
                      03_Email_Address
                    </label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      type="email" 
                      placeholder="alex@enterprise.com" 
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3 text-white text-xs sm:text-sm outline-none focus:border-[#ccff00] transition-colors placeholder:text-zinc-700 font-mono"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className={`text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.2em] block mb-1.5 transition-colors ${focusedField === 'msg' ? 'text-[#ccff00]' : 'text-zinc-500'}`}>
                      04_Project_Brief
                    </label>
                    <textarea 
                      required
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('msg')}
                      onBlur={() => setFocusedField(null)}
                      rows="4"
                      placeholder="Describe your technical requirements and objectives..." 
                      className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3 text-white text-xs sm:text-sm outline-none focus:border-[#ccff00] transition-colors placeholder:text-zinc-700 font-mono resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-4 bg-[#ccff00] text-black font-black uppercase tracking-[0.3em] text-[10px] sm:text-xs rounded-xl flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(204,255,0,0.2)] hover:bg-white transition-all active:scale-98 cursor-pointer disabled:opacity-50"
                    >
                      <span>{status === 'sending' ? 'ENCRYPTING PACKET...' : 'INITIATE_UPLINK'}</span>
                      <FaPaperPlane size={11} />
                    </button>
                  </div>

                  {/* Secure Tags */}
                  <div className="flex flex-wrap justify-between gap-2 pt-2 text-[8px] font-mono text-zinc-600 uppercase">
                    <span className="flex items-center gap-1.5"><FaShieldAlt className="text-[#ccff00]" /> E2E_HARDENED</span>
                    <span className="flex items-center gap-1.5"><FaLock className="text-cyan-400" /> AES_256</span>
                    <span>NO_LOGS_SAVED</span>
                  </div>
                </form>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </div>
  );
}
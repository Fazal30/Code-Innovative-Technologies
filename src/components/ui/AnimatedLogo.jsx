import { motion } from 'framer-motion';

export default function AnimatedLogo({ size = "md", showSlogan = true, className = "" }) {
  const isSm = size === "sm";
  const isLg = size === "lg";

  return (
    <div className={`group inline-flex items-center gap-3 select-none ${className}`}>
      
      {/* 1. KINETIC CYBER CHIP ICON */}
      <div className="relative flex items-center justify-center">
        {/* Ambient Neon Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ccff00]/30 via-cyan-400/20 to-amber-400/30 rounded-xl blur-md group-hover:blur-lg group-hover:scale-125 transition-all duration-500 opacity-60" />
        
        {/* Outer Tech Frame with Rotating Corner Brackets */}
        <motion.div
          whileHover={{ rotate: 90 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`relative ${
            isSm ? 'w-8 h-8' : isLg ? 'w-12 h-12' : 'w-10 h-10'
          } rounded-xl bg-[#050505] border border-white/15 group-hover:border-[#ccff00]/60 flex items-center justify-center overflow-hidden shadow-2xl transition-colors duration-500`}
        >
          {/* Micro Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ccff0015_1px,_transparent_1px)] bg-[size:6px_6px] pointer-events-none" />

          {/* Sweeping Laser Scan Line */}
          <motion.div 
            animate={{ y: ["-120%", "220%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ccff00] to-transparent shadow-[0_0_8px_#ccff00]"
          />

          {/* Core Cyber Code Icon */}
          <div className="relative z-10 font-mono font-black tracking-tighter text-white flex items-center justify-center">
            <span className="text-[#ccff00] text-xs sm:text-sm">&lt;</span>
            <motion.span 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-white text-xs font-bold mx-0.5"
            >
              /
            </motion.span>
            <span className="text-cyan-400 text-xs sm:text-sm">&gt;</span>
          </div>

          {/* Corner Tech Reticle Dots */}
          <div className="absolute top-1 left-1 w-1 h-1 bg-[#ccff00] rounded-full opacity-60" />
          <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-400 rounded-full opacity-60" />
        </motion.div>
      </div>

      {/* 2. KINETIC BRAND TYPOGRAPHY */}
      <div className="flex flex-col">
        {/* Main "CODE" Wordmark with Metallic Shimmer */}
        <div className="flex items-center gap-1.5">
          <span className={`font-black tracking-tighter uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-[#ccff00] to-emerald-400 group-hover:from-white group-hover:via-amber-300 group-hover:to-[#ccff00] transition-all duration-700 ${
            isSm ? 'text-base sm:text-lg' : isLg ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
          }`}>
            CODE
          </span>
          <motion.span 
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "steps(2, start)" }}
            className={`font-mono text-[#ccff00] font-black ${isSm ? 'text-xs' : 'text-sm'}`}
          >
            _
          </motion.span>
        </div>

        {/* Subtitle "INNOVATIVE TECHNOLOGIES" */}
        <div className="flex items-center gap-1 mt-0.5">
          <span className={`font-mono font-bold tracking-[0.25em] text-zinc-300 uppercase leading-none group-hover:text-white transition-colors duration-300 ${
            isSm ? 'text-[6.5px]' : isLg ? 'text-[9px]' : 'text-[7.5px] sm:text-[8px]'
          }`}>
            INNOVATIVE TECHNOLOGIES
          </span>
        </div>

        {/* Motto Slogan: "INNOVATE • AUTOMATE • ELEVATE" */}
        {showSlogan && (
          <div className="hidden sm:flex items-center gap-1.5 mt-1 font-mono text-[6px] tracking-[0.3em] uppercase text-zinc-500 group-hover:text-[#ccff00]/80 transition-colors duration-300">
            <span>INNOVATE</span>
            <span className="w-1 h-1 rounded-full bg-[#ccff00]/60 inline-block" />
            <span>AUTOMATE</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400/60 inline-block" />
            <span>ELEVATE</span>
          </div>
        )}
      </div>

    </div>
  );
}

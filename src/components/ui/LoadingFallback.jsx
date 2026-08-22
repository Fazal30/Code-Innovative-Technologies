import { motion } from 'framer-motion';

export default function LoadingFallback() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center relative z-20">
      <div className="relative flex items-center justify-center">
        {/* Glowing Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 rounded-full border-2 border-transparent border-t-[#ccff00] border-r-cyan-400"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 rounded-full border-2 border-transparent border-b-[#ccff00] border-l-emerald-400 absolute"
        />
        <div className="w-3 h-3 bg-[#ccff00] rounded-full shadow-[0_0_15px_#ccff00] animate-ping absolute" />
      </div>

      <div className="mt-8 font-mono text-[10px] tracking-[0.4em] uppercase text-[#ccff00] flex items-center gap-2">
        <span className="inline-block w-1.5 h-1.5 bg-[#ccff00] rounded-full animate-pulse" />
        LOADING_SYSTEM_MODULE...
      </div>
    </div>
  );
}

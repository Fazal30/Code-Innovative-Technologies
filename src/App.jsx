import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingFallback from './components/ui/LoadingFallback';
import InteractiveCanvas from './components/ui/InteractiveCanvas';

// Lazy Loaded Page Components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Career = lazy(() => import('./pages/Career'));
const Contact = lazy(() => import('./pages/Contact'));
const TechHub = lazy(() => import('./pages/TechSectors'));

// Lazy Loaded Service Dossiers
const AppDev = lazy(() => import('./pages/services/AppDev'));
const Consulting = lazy(() => import('./pages/services/Consulting'));
const Products = lazy(() => import('./pages/services/Products'));
const AiAutomation = lazy(() => import('./pages/services/AiAutomation'));
const Security = lazy(() => import('./pages/services/Security'));
const Web3 = lazy(() => import('./pages/services/Web3'));
const DataIntelligence = lazy(() => import('./pages/services/DataIntelligence'));
const WebD = lazy(() => import('./pages/services/WebD'));
const Software = lazy(() => import('./pages/services/Software'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

// Zero React re-render high performance hardware-accelerated cursor
const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        ['BUTTON', 'A', 'SELECT', 'INPUT', 'TEXTAREA'].includes(target.tagName) ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.6 : 1,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 w-8 h-8 border border-[#ccff00]/40 rounded-lg pointer-events-none z-[9999] hidden lg:block"
      >
        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#ccff00]" />
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#ccff00]" />
      </motion.div>

      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#ccff00] rounded-full pointer-events-none z-[9999] hidden lg:block shadow-[0_0_12px_#ccff00]"
      />
    </>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      
      <div className="min-h-screen bg-[#020202] text-white font-sans overflow-x-hidden selection:bg-[#ccff00] selection:text-black relative">
        
        {/* INTERACTIVE BACKGROUND CANVAS */}
        <InteractiveCanvas />

        {/* PROGRESS BAR */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ccff00] via-cyan-400 to-[#ccff00] z-[1000] origin-left shadow-[0_0_20px_#ccff00]"
          style={{ scaleX }}
        />

        <Navbar />
        
        <main className="relative z-10 min-h-screen">
          <Suspense fallback={<LoadingFallback />}>
            <AnimatedRoutes />
          </Suspense>
        </main>

        <Footer />

        {/* WHATSAPP FLOATING ACTION */}
        <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group">
          <motion.a
            href="https://wa.me/919620996689"
            target="_blank"
            rel="noreferrer"
            aria-label="Direct WhatsApp Contact"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-2xl shadow-[0_0_30px_rgba(37,211,102,0.35)] relative"
          >
            <FaWhatsapp className="w-6 h-6 sm:w-7 sm:h-7" />
            <span className="absolute inset-0 rounded-2xl bg-[#25D366] animate-ping opacity-25" />
          </motion.a>
          
          <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0">
            <div className="bg-zinc-900 border border-white/10 px-3.5 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
              <p className="text-[9px] font-mono text-[#ccff00] tracking-widest uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                Direct_Channel_Active
              </p>
            </div>
          </div>
        </div>

      </div>
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Routes location={location}>
          {/* Core Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />

          {/* Service Dossiers */}
          <Route path="/services/web-dev" element={<WebD />} />
          <Route path="/services/app-dev" element={<AppDev />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/products" element={<Products />} />
          <Route path="/services/ai-automation" element={<AiAutomation />} />
          <Route path="/services/security" element={<Security />} />
          <Route path="/services/web3" element={<Web3 />} />
          <Route path="/services/software" element={<Software />} />
          <Route path="/services/data-intelligence" element={<DataIntelligence />} />
          <Route path="/tech" element={<TechHub />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default App;
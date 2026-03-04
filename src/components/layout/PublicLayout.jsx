import { Home, Sparkles } from 'lucide-react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';


export default function PublicLayout() {
  const location = useLocation();

  // Animation Variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3, ease: "easeIn" } }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#030712] text-slate-200 selection:bg-blue-500/30">
      
      {/* Floating Glass Navigation */}
      <motion.nav 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed w-full top-0 z-50 bg-[#030712]/50 backdrop-blur-2xl border-b border-white/[0.05] shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight text-white">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
              <Home size={20} className="text-white" />
            </div>
            <span>Skyline</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 font-medium text-sm">
            {['Home', 'About', 'Pricing', 'Features'].map((item) => (
              <Link 
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                className="relative text-slate-400 hover:text-white transition-colors duration-300 group py-2"
              >
                {item}
                {/* Animated Underline */}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            ))}
          </div>

          {/* Auth Actions */}
          <div className="flex items-center gap-4">
            <Link 
              to="/login" 
              className="hidden sm:block text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Sign in
            </Link>
            <Link 
              to="/signup" 
              className="relative group bg-white/5 border border-white/10 text-white px-6 py-2.5 rounded-full hover:bg-white/10 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-2 text-sm font-semibold">
                <span>Get Started</span>
                <Sparkles className="w-4 h-4 text-blue-400" />
              </div>
            </Link>
          </div>
          
        </div>
      </motion.nav>

      {/* Main Content with Route Transitions */}
      {/* Note: pt-20 offsets the fixed navbar */}
      <main className="flex-grow pt-20 flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="flex-grow flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Footer */}
      <footer className="relative border-t border-white/[0.05] bg-[#030712] overflow-hidden pt-16 pb-8">
        {/* Footer Ambient Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-xl font-bold text-white">
              <Home size={20} className="text-blue-500" />
              <span>Skyline Engine</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
          
          <div className="text-center md:text-left border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-600">
              © 2026 Skyline Real Estate Platform. All rights reserved.
            </p>
            <p className="text-sm flex items-center gap-1 text-slate-600">
              Powered by <span className="text-blue-500 font-semibold">AI Arbitrage</span>
            </p>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
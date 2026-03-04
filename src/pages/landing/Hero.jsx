import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Sparkles, TrendingUp, ExternalLink, Activity } from 'lucide-react';

export default function Hero() {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#030712] overflow-hidden selection:bg-blue-500/30">
      {/* Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[150px] pointer-events-none" />
      {/* New subtle purple glow for the secondary tool area */}
      <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-0">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Search */}
          <motion.div 
            className="lg:col-span-7"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-md mb-8">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-slate-300">Skyline AI Engine 2.0 Live</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl leading-[1.1]">
              Find your next <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                dream home
              </span> <br />
              without the hassle.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-slate-400 max-w-2xl">
              Skyline uses high-frequency market data to ensure you never overpay. 
              Browse thousands of listings with real-time "Convenience Tax" insights.
            </motion.p>
            
        

            {/* Secondary CTA: AI Analyzer Link */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="text-sm text-slate-500 font-medium">Power user?</span>
              <a 
                href=" https://ecorate-predictor.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/50 text-slate-300 hover:text-white transition-all duration-300 overflow-hidden"
              >
                {/* Subtle hover background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <Activity className="w-5 h-5 text-purple-400 relative z-10" />
                <span className="font-semibold text-sm relative z-10">Try the Advanced AI Analyzer</span>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 transition-colors relative z-10" />
              </a>
            </motion.div>

          </motion.div>
          
          {/* Right Column: Hero Image & Floating Elements */}
          <motion.div 
            className="mt-20 sm:mt-24 lg:col-span-5 lg:mt-0 relative"
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-800/50 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent z-10" />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" 
                alt="Modern House" 
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating UI Widget 1: Price Alert */}
            <motion.div 
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-8 sm:-left-12 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center gap-4 hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="text-emerald-400 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">AI Forecast</p>
                <p className="text-lg font-bold text-white">+4.2% Value in 6mo</p>
              </div>
            </motion.div>

            {/* Floating UI Widget 2: Status */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-12 -right-6 sm:-right-8 z-20 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <p className="text-sm font-medium text-white">Live Arbitrage Found</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
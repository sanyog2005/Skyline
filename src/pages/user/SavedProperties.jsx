import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Zap, TrendingUp, ArrowRight, Activity, RefreshCw, Layers, BarChart2 } from 'lucide-react';

// Enhanced Mock Data with AI Confidence Scores
const initialSaved = [
  { 
    id: 1, 
    title: 'Mountain Retreat', 
    price: '$850,000', 
    loc: 'Aspen, CO', 
    roi: '6.5%',
    capRate: '5.2%',
    aiSignal: 'Strong Buy',
    signalColor: 'emerald',
    confidence: 94,
    img: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 2, 
    title: 'Beachfront Condo', 
    price: '$1,200,000', 
    loc: 'Miami, FL', 
    roi: '8.1%',
    capRate: '7.4%',
    aiSignal: 'High Yield',
    signalColor: 'purple',
    confidence: 88,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    id: 3, 
    title: 'Urban Tech Duplex', 
    price: '$1,450,000', 
    loc: 'Austin, TX', 
    roi: '9.2%',
    capRate: '8.0%',
    aiSignal: 'Arbitrage Found',
    signalColor: 'amber',
    confidence: 76,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' 
  },
];

const getBadgeStyles = (color) => {
  const styles = {
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
  };
  return styles[color] || styles.emerald;
};

const getConfidenceColor = (score) => {
  if (score >= 90) return 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]';
  if (score >= 80) return 'bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]';
  return 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]';
};

export default function SavedProperties() {
  const [saved, setSaved] = useState(initialSaved);

  const removeProperty = (id) => {
    setSaved((prev) => prev.filter((item) => item.id !== id));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { opacity: 0, scale: 0.9, filter: "blur(4px)", transition: { duration: 0.2 } }
  };

  return (
    <div className="space-y-8 relative w-full min-h-[60vh] rounded-[2.5rem] p-8 overflow-hidden bg-[#030712] border border-slate-800/60 shadow-2xl">
      
      {/* Architectual Background Grid (Trendy in modern dev/AI tools) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      
      {/* Header Section */}
      <div className="relative z-10 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 pb-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/50 text-slate-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Heart size={14} className="fill-rose-500 text-rose-500" /> Watchlist Active
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-full border border-slate-800/50">
              <RefreshCw size={12} className="animate-spin-slow text-blue-400" />
              <span>Live Market Sync</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">Saved Opportunities</h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">Tracking {saved.length} verified listings.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full xl:w-auto">
          <button className="flex-1 xl:flex-none flex items-center justify-center gap-2 bg-[#0a0f1c] text-slate-400 px-5 py-3 rounded-xl text-sm font-semibold hover:text-white transition-colors border border-slate-800 hover:border-slate-600 shadow-inner">
            <Layers size={18} /> View Matrix
          </button>
          <button className="flex-1 xl:flex-none relative group px-6 py-3 rounded-xl text-sm font-bold text-white overflow-hidden transition-all shadow-lg shadow-blue-900/20">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform group-hover:scale-105" />
            <span className="relative flex items-center justify-center gap-2">
              <BarChart2 size={18} /> Compare ROI
            </span>
          </button>
        </div>
      </div>

      {/* Property Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {saved.map((item) => (
            <motion.div 
              key={item.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="group relative bg-[#0a0f1c]/90 backdrop-blur-xl rounded-3xl border border-slate-800/80 overflow-hidden hover:border-slate-600 transition-all duration-500 flex flex-col hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]"
            >
              {/* Subtle interactive glow that follows the card */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Image Header */}
              <div className="h-48 relative overflow-hidden p-3 pb-0">
                <div className="w-full h-full relative rounded-2xl overflow-hidden">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    alt={item.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent" />
                  
                  {/* Un-save Button */}
                  <button 
                    onClick={() => removeProperty(item.id)}
                    className="absolute top-3 right-3 p-2.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 hover:bg-rose-500/20 hover:border-rose-500/50 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0"
                  >
                    <Heart size={16} className="text-white fill-white hover:fill-rose-500 hover:text-rose-500 transition-all" />
                  </button>

                  {/* AI Badge */}
                  <div className={`absolute bottom-3 left-3 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 ${getBadgeStyles(item.signalColor)}`}>
                    <Zap size={12} className="fill-current" /> {item.aiSignal}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col relative z-10">
                <h3 className="text-lg font-bold text-white leading-tight group-hover:text-blue-400 transition-colors line-clamp-1 mb-1">{item.title}</h3>
                
                <p className="text-xs text-slate-500 font-medium flex items-center gap-1 mb-5">
                  <MapPin size={12} className="text-slate-400" /> {item.loc}
                </p>

                {/* Visual Data Section */}
                <div className="space-y-4 mb-6">
                  {/* Confidence Bar */}
                  <div>
                    <div className="flex justify-between items-end mb-1.5">
                      <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Model Confidence</span>
                      <span className="text-xs font-bold text-slate-300">{item.confidence}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.confidence}%` }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className={`h-full rounded-full ${getConfidenceColor(item.confidence)}`} 
                      />
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-800/50 group-hover:bg-slate-800/30 transition-colors">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Est. ROI</p>
                      <p className="text-sm font-black text-emerald-400 flex items-center gap-1">
                        <TrendingUp size={14} /> {item.roi}
                      </p>
                    </div>
                    <div className="bg-slate-900/50 rounded-xl p-3 border border-slate-800/50 group-hover:bg-slate-800/30 transition-colors">
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Cap Rate</p>
                      <p className="text-sm font-bold text-slate-200">{item.capRate}</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-slate-800/60">
                  <div>
                    <span className="text-2xl font-bold text-white tabular-nums tracking-tight">
                      {item.price}
                    </span>
                  </div>
                  <button className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                    <ArrowRight size={16} className="group-hover:-rotate-45 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
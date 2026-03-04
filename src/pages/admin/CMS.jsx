import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutTemplate, 
  Save, 
  Type, 
  Image as ImageIcon, 
  Globe, 
  Mail, 
  Phone, 
  CheckCircle, 
  Loader2,
  AlertCircle,
  TerminalSquare
} from 'lucide-react';

export default function CMS() {
  const [isSaving, setIsSaving] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Form State
  const [heroTitle, setHeroTitle] = useState('Find your next dream home without the hassle.');
  const [heroSub, setHeroSub] = useState('Skyline uses AI-driven market data to ensure you never overpay. Browse thousands of listings with real-time "Convenience Tax" insights.');
  const [heroImage, setHeroImage] = useState('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800');

  // Track changes to light up the "Deploy" button
  useEffect(() => {
    setHasChanges(true);
  }, [heroTitle, heroSub, heroImage]);

  const handlePublish = () => {
    if (!hasChanges) return;
    setIsSaving(true);
    
    // Simulate deployment delay
    setTimeout(() => {
      setIsSaving(false);
      setIsPublished(true);
      setHasChanges(false);
      
      // Reset success state after a few seconds
      setTimeout(() => setIsPublished(false), 3000);
    }, 1500);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <div className="w-full space-y-6 pb-12">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
      >
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">Content Engine</h1>
            {/* Live Status Badge */}
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border transition-colors ${
              hasChanges ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
            }`}>
              {hasChanges ? <AlertCircle size={12} /> : <CheckCircle size={12} />}
              {hasChanges ? 'Unsaved Draft' : 'Production Synced'}
            </div>
          </div>
          <p className="text-slate-500 font-medium flex items-center gap-2">
            <Globe size={14} className="text-cyan-400" /> Manage public-facing marketing copy and global assets.
          </p>
        </div>

        {/* Dynamic Deploy Button */}
        <motion.button 
          whileHover={hasChanges ? { scale: 1.02 } : {}}
          whileTap={hasChanges ? { scale: 0.98 } : {}}
          onClick={handlePublish}
          disabled={!hasChanges || isSaving}
          className={`relative px-6 py-3 rounded-xl text-sm font-bold text-white overflow-hidden transition-all flex items-center gap-2 min-w-[180px] justify-center ${
            !hasChanges && !isPublished ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' : 'shadow-lg shadow-cyan-900/20 cursor-pointer'
          }`}
        >
          {hasChanges && (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform hover:scale-105" />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-40 blur transition-opacity" />
            </>
          )}
          {isPublished && <div className="absolute inset-0 bg-emerald-600" />}
          
          <span className="relative z-10 flex items-center gap-2">
            {isSaving ? (
              <><Loader2 size={18} className="animate-spin" /> Deploying...</>
            ) : isPublished ? (
              <><CheckCircle size={18} /> Deployed Successfully</>
            ) : (
              <><Save size={18} /> Deploy to Production</>
            )}
          </span>
        </motion.button>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {/* Module 1: Hero Section Edit */}
        <motion.div variants={itemVariants} className="bg-[#0a0f1c]/80 backdrop-blur-2xl p-8 rounded-[2rem] border border-slate-800/80 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <h2 className="text-lg font-bold text-white flex items-center gap-3 border-b border-slate-800/60 pb-4 mb-6">
            <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 text-cyan-400">
              <LayoutTemplate size={18} />
            </div>
            Landing Page Hero
          </h2>

          <div className="space-y-6">
            {/* Headline Input */}
            <div className="relative group/input">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Main Headline</label>
              <Type className="absolute left-4 top-[38px] text-slate-500 group-focus-within/input:text-cyan-400 transition-colors z-10" size={18} />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-focus-within/input:opacity-10 blur-md transition duration-300" />
              <input 
                type="text" 
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
                className="relative w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#030712]/50 border border-slate-800 text-white placeholder:text-slate-600 focus:border-cyan-500/50 focus:bg-[#030712]/80 outline-none transition-all font-medium shadow-inner" 
              />
            </div>

            {/* Sub-headline Textarea */}
            <div className="relative group/input">
              <div className="flex justify-between items-end mb-2">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Sub-headline Copy</label>
                <span className={`text-[10px] font-mono ${heroSub.length > 150 ? 'text-amber-400' : 'text-slate-500'}`}>{heroSub.length}/200</span>
              </div>
              <TerminalSquare className="absolute left-4 top-[38px] text-slate-500 group-focus-within/input:text-cyan-400 transition-colors z-10" size={18} />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-focus-within/input:opacity-10 blur-md transition duration-300" />
              <textarea 
                rows={3} 
                value={heroSub}
                onChange={(e) => setHeroSub(e.target.value)}
                className="relative w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#030712]/50 border border-slate-800 text-slate-300 placeholder:text-slate-600 focus:border-cyan-500/50 focus:bg-[#030712]/80 outline-none transition-all resize-none shadow-inner leading-relaxed"
              />
            </div>

            {/* Image URL with Preview */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Hero Image Asset (URL)</label>
              <div className="flex gap-4 items-start">
                <div className="relative group/input flex-1">
                  <ImageIcon className="absolute left-4 top-3.5 text-slate-500 group-focus-within/input:text-cyan-400 transition-colors z-10" size={18} />
                  <input 
                    type="text" 
                    value={heroImage}
                    onChange={(e) => setHeroImage(e.target.value)}
                    className="relative w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#030712]/50 border border-slate-800 text-slate-400 placeholder:text-slate-600 focus:border-cyan-500/50 focus:bg-[#030712]/80 outline-none transition-all font-mono text-sm shadow-inner" 
                  />
                </div>
                {/* Live Thumbnail Preview */}
                <div className="w-16 h-12 shrink-0 rounded-xl overflow-hidden border border-slate-700 bg-slate-900 shadow-md">
                  <img src={heroImage} alt="Hero Preview" className="w-full h-full object-cover" onError={(e) => e.target.style.display='none'} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Module 2: Footer / Contact Info Edit */}
        <motion.div variants={itemVariants} className="bg-[#0a0f1c]/80 backdrop-blur-2xl p-8 rounded-[2rem] border border-slate-800/80 shadow-2xl relative overflow-hidden group">
          <h2 className="text-lg font-bold text-white flex items-center gap-3 border-b border-slate-800/60 pb-4 mb-6">
            <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20 text-indigo-400">
              <Globe size={18} />
            </div>
            Global Footer Configuration
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group/input">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Support Router Email</label>
              <Mail className="absolute left-4 top-[38px] text-slate-500 group-focus-within/input:text-indigo-400 transition-colors z-10" size={18} />
              <input 
                type="email" 
                defaultValue="support@skyline.com" 
                className="relative w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#030712]/50 border border-slate-800 text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:bg-[#030712]/80 outline-none transition-all shadow-inner" 
              />
            </div>
            
            <div className="relative group/input">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Global Dispatch Phone</label>
              <Phone className="absolute left-4 top-[38px] text-slate-500 group-focus-within/input:text-indigo-400 transition-colors z-10" size={18} />
              <input 
                type="text" 
                defaultValue="+1 (800) 555-0199" 
                className="relative w-full pl-12 pr-4 py-3.5 rounded-xl bg-[#030712]/50 border border-slate-800 text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:bg-[#030712]/80 outline-none transition-all shadow-inner font-mono" 
              />
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
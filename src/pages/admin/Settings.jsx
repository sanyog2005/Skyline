import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings as SettingsIcon, 
  Globe, 
  DollarSign, 
  ShieldAlert, 
  Save, 
  Cpu, 
  Key, 
  Database,
  AlertTriangle,
  Loader2,
  CheckCircle,
  Terminal
} from 'lucide-react';

// Sidebar Configuration
const TABS = [
  { id: 'general', label: 'Global Variables', icon: Globe },
  { id: 'financials', label: 'Financial & Fiat', icon: DollarSign },
  { id: 'security', label: 'Security & Auth', icon: ShieldAlert },
  { id: 'ai', label: 'AI & Telemetry', icon: Cpu },
  { id: 'api', label: 'API Keys', icon: Key },
  { id: 'database', label: 'Database Routing', icon: Database },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState('general');
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  // Form State (Mocking a few fields to trigger the "Save" button)
  const [platformName, setPlatformName] = useState('Skyline Engine');
  const [currency, setCurrency] = useState('USD ($)');
  const [timezone, setTimezone] = useState('UTC-5 (Eastern Time)');

  // Track changes to light up the "Save Configuration" button
  useEffect(() => {
    setHasChanges(true);
  }, [platformName, currency, timezone, maintenanceMode]);

  const handleSave = () => {
    if (!hasChanges) return;
    setIsSaving(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsSaving(false);
      setIsSaved(true);
      setHasChanges(false);
      
      setTimeout(() => setIsSaved(false), 3000);
    }, 1500);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    enter: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  return (
    <div className="w-full space-y-6 pb-12">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">System Configuration</h1>
          <p className="text-slate-500 font-medium mt-1 flex items-center gap-2">
            <SettingsIcon size={14} className="text-cyan-400" /> Manage core platform variables and security protocols.
          </p>
        </div>

        {/* Dynamic Save Button */}
        <motion.button 
          whileHover={hasChanges ? { scale: 1.02 } : {}}
          whileTap={hasChanges ? { scale: 0.98 } : {}}
          onClick={handleSave}
          disabled={!hasChanges || isSaving}
          className={`relative px-6 py-3 rounded-xl text-sm font-bold text-white overflow-hidden transition-all flex items-center gap-2 min-w-[200px] justify-center ${
            !hasChanges && !isSaved ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' : 'shadow-lg shadow-cyan-900/20 cursor-pointer'
          }`}
        >
          {hasChanges && (
            <>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform hover:scale-105" />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-40 blur transition-opacity" />
            </>
          )}
          {isSaved && <div className="absolute inset-0 bg-emerald-600" />}
          
          <span className="relative z-10 flex items-center gap-2">
            {isSaving ? (
              <><Loader2 size={18} className="animate-spin" /> Committing...</>
            ) : isSaved ? (
              <><CheckCircle size={18} /> Config Saved</>
            ) : (
              <><Save size={18} /> Commit Configuration</>
            )}
          </span>
        </motion.button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Settings Navigation/Sidebar */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-3 space-y-2 sticky top-28"
        >
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                variants={itemVariants}
                onClick={() => setActiveTab(tab.id)}
                className={`relative w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-semibold transition-all duration-300 text-left group ${
                  isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="settings-active-tab"
                    className="absolute inset-0 bg-slate-800/80 border border-slate-700 rounded-xl"
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
                <span className={`relative z-10 transition-colors ${isActive ? 'text-cyan-400' : 'group-hover:text-cyan-500'}`}>
                  <tab.icon size={18} />
                </span>
                <span className="relative z-10">{tab.label}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Settings Form Content Container */}
        <div className="lg:col-span-9 relative">
          <AnimatePresence mode="wait">
            {activeTab === 'general' && (
              <motion.div 
                key="general"
                variants={contentVariants}
                initial="hidden"
                animate="enter"
                exit="exit"
                className="bg-[#0a0f1c]/80 backdrop-blur-2xl rounded-[2rem] border border-slate-800/80 shadow-2xl p-8 lg:p-10 space-y-8"
              >
                <div className="flex items-center gap-3 border-b border-slate-800/60 pb-6">
                  <div className="p-2.5 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                    <Terminal size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">Global Variables</h2>
                    <p className="text-sm text-slate-500 font-medium">Core application identity and localization parameters.</p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Platform Name */}
                  <div className="relative group/input">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Platform Master Name</label>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-focus-within/input:opacity-10 blur-md transition duration-300" />
                    <input 
                      type="text" 
                      value={platformName}
                      onChange={(e) => setPlatformName(e.target.value)}
                      className="relative w-full px-4 py-3.5 rounded-2xl bg-[#030712]/50 border border-slate-800 text-white placeholder:text-slate-600 focus:border-cyan-500/50 focus:bg-[#030712]/80 outline-none transition-all font-bold shadow-inner" 
                    />
                  </div>
                  
                  {/* Localization Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative group/input">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Base Currency</label>
                      <select 
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        className="relative w-full px-4 py-3.5 rounded-2xl bg-[#030712]/50 border border-slate-800 text-white focus:border-cyan-500/50 outline-none transition-all shadow-inner appearance-none cursor-pointer"
                      >
                        <option value="USD ($)">USD ($) - US Dollar</option>
                        <option value="EUR (€)">EUR (€) - Euro</option>
                        <option value="GBP (£)">GBP (£) - British Pound</option>
                      </select>
                      {/* Custom dropdown arrow */}
                      <div className="absolute right-4 top-[38px] pointer-events-none text-slate-500">▼</div>
                    </div>

                    <div className="relative group/input">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">System Timezone</label>
                      <select 
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="relative w-full px-4 py-3.5 rounded-2xl bg-[#030712]/50 border border-slate-800 text-white focus:border-cyan-500/50 outline-none transition-all shadow-inner appearance-none cursor-pointer"
                      >
                        <option value="UTC-5 (Eastern Time)">UTC-5 (Eastern Time)</option>
                        <option value="UTC-8 (Pacific Time)">UTC-8 (Pacific Time)</option>
                        <option value="UTC+0 (London)">UTC+0 (London)</option>
                        <option value="UTC+5:30 (IST)">UTC+5:30 (India Standard)</option>
                      </select>
                      <div className="absolute right-4 top-[38px] pointer-events-none text-slate-500">▼</div>
                    </div>
                  </div>

                  {/* Danger Zone */}
                  <div className="pt-8 border-t border-slate-800/60 mt-8">
                    <h3 className="text-xs font-black text-rose-500 mb-4 uppercase tracking-widest flex items-center gap-2">
                      <AlertTriangle size={14} /> Danger Zone
                    </h3>
                    
                    <div className="relative overflow-hidden flex items-center justify-between p-6 bg-rose-500/5 rounded-2xl border border-rose-500/20">
                      {/* Warning Glow Background */}
                      {maintenanceMode && (
                        <div className="absolute inset-0 bg-rose-500/10 blur-xl transition-all duration-1000" />
                      )}
                      
                      <div className="relative z-10">
                        <p className="font-bold text-white flex items-center gap-2">
                          Maintenance Mode 
                          {maintenanceMode && (
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                            </span>
                          )}
                        </p>
                        <p className="text-sm text-slate-400 mt-1 max-w-sm">
                          Halt all frontend traffic. Users will see a 503 Service Unavailable page. Admins bypass this block.
                        </p>
                      </div>

                      {/* Custom Animated Toggle Switch */}
                      <button 
                        onClick={() => setMaintenanceMode(!maintenanceMode)}
                        className={`relative z-10 w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a0f1c] focus:ring-rose-500 ${
                          maintenanceMode ? 'bg-rose-600 shadow-[0_0_15px_rgba(225,29,72,0.4)]' : 'bg-slate-700'
                        }`}
                      >
                        <motion.div 
                          layout
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className={`w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center ${
                            maintenanceMode ? 'ml-auto' : 'ml-0'
                          }`}
                        >
                          {maintenanceMode && <div className="w-2 h-2 rounded-full bg-rose-500" />}
                        </motion.div>
                      </button>

                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* Placeholder for other tabs sliding in */}
            {activeTab !== 'general' && (
              <motion.div 
                key="other"
                variants={contentVariants}
                initial="hidden"
                animate="enter"
                exit="exit"
                className="bg-[#0a0f1c]/80 backdrop-blur-2xl rounded-[2rem] border border-slate-800/80 shadow-2xl p-16 flex flex-col items-center justify-center text-center h-[500px]"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-6 border border-slate-700/50">
                  <Database size={28} className="text-slate-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Module Offline</h3>
                <p className="text-slate-400 max-w-sm">This configuration module is currently locked in your environment. Connect to the master database to unlock.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
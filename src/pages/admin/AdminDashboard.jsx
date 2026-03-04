import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, TrendingUp, AlertTriangle, ArrowUpRight, ArrowDownRight, Activity, MoreHorizontal, Download } from 'lucide-react';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

// Upgraded Glassmorphic Stat Card
const AdminStatCard = ({ title, value, trend, isPositive, icon, color, glow }) => (
  <motion.div 
    variants={itemVariants}
    className="relative group bg-[#0a0f1c]/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-800/80 hover:border-slate-700 transition-all duration-500 overflow-hidden flex flex-col justify-between h-40"
  >
    {/* Hover Glow */}
    <div className={`absolute -inset-0.5 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl ${glow}`} />
    
    <div className="relative z-10 flex justify-between items-start">
      <div className={`p-3 rounded-2xl ${color} bg-opacity-10 border border-white/5 shadow-inner`}>
        {icon}
      </div>
      <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
        isPositive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
      }`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {trend}
      </div>
    </div>

    <div className="relative z-10 mt-4">
      <h3 className="text-3xl font-black text-white tabular-nums tracking-tight">{value}</h3>
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{title}</p>
    </div>
  </motion.div>
);

export default function AdminDashboard() {
  const recentSignups = [
    { id: 'USR-892', name: 'Elena Rostova', role: 'Investor', time: '2m ago', status: 'verified' },
    { id: 'USR-891', name: 'Marcus Chen', role: 'Agent', time: '14m ago', status: 'pending' },
    { id: 'USR-890', name: 'Sarah Jenkins', role: 'Investor', time: '1h ago', status: 'verified' },
    { id: 'USR-889', name: 'David Mueller', role: 'Buyer', time: '3h ago', status: 'verified' },
    { id: 'USR-888', name: 'Alara Vance', role: 'Investor', time: '5h ago', status: 'flagged' },
  ];

  return (
    <div className="w-full space-y-8 pb-12">
      
      {/* Header Actions */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">System Telemetry</h1>
          <p className="text-slate-500 font-medium mt-1 flex items-center gap-2">
            <Activity size={14} className="text-cyan-400" /> Live network metrics and platform activity.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors">
            Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600/10 border border-cyan-500/30 rounded-xl text-sm font-bold text-cyan-400 hover:bg-cyan-600 hover:text-white transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Download size={16} /> Export Data
          </button>
        </div>
      </motion.div>

      {/* KPI Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <AdminStatCard 
          title="Total Users" value="12,450" trend="12.5%" isPositive={true}
          icon={<Users size={22} className="text-blue-400" />} 
          color="bg-blue-500" glow="bg-blue-500" 
        />
        <AdminStatCard 
          title="Active Listings" value="3,820" trend="5.2%" isPositive={true}
          icon={<Home size={22} className="text-emerald-400" />} 
          color="bg-emerald-500" glow="bg-emerald-500" 
        />
        <AdminStatCard 
          title="Revenue (MTD)" value="$45,200" trend="18.1%" isPositive={true}
          icon={<TrendingUp size={22} className="text-purple-400" />} 
          color="bg-purple-500" glow="bg-purple-500" 
        />
        <AdminStatCard 
          title="System Alerts" value="14" trend="2.4%" isPositive={false}
          icon={<AlertTriangle size={22} className="text-amber-400" />} 
          color="bg-amber-500" glow="bg-amber-500" 
        />
      </motion.div>

      {/* Main Content Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {/* High-End Chart Placeholder */}
        <motion.div variants={itemVariants} className="lg:col-span-2 bg-[#0a0f1c]/80 backdrop-blur-xl p-6 rounded-[2rem] border border-slate-800/80 shadow-2xl relative overflow-hidden flex flex-col">
          <div className="flex justify-between items-center mb-8 relative z-10">
            <div>
              <h3 className="text-lg font-bold text-white">Network Growth Vector</h3>
              <p className="text-xs text-slate-500 font-medium">User acquisition vs. AI model utilization</p>
            </div>
            <button className="w-8 h-8 rounded-full hover:bg-slate-800 flex items-center justify-center text-slate-400 transition-colors">
              <MoreHorizontal size={18} />
            </button>
          </div>
          
          {/* Mock Vector Chart Area */}
          <div className="flex-1 relative w-full rounded-xl border border-slate-800/50 bg-slate-900/20 overflow-hidden flex items-end">
            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Mock SVG Line Chart (Pure CSS/SVG for visual flair before Recharts is added) */}
            <svg className="absolute inset-0 w-full h-full preserve-3d" preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="gradientArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
                  <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
                </linearGradient>
              </defs>
              <path d="M0,100 C20,80 30,90 50,50 C70,10 80,40 100,20 L100,100 Z" fill="url(#gradientArea)" />
              <path d="M0,100 C20,80 30,90 50,50 C70,10 80,40 100,20" fill="none" stroke="#06b6d4" strokeWidth="2" vectorEffect="non-scaling-stroke" />
              
              {/* Secondary Line */}
              <path d="M0,100 C20,95 40,70 60,60 C80,50 90,80 100,60" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/80 backdrop-blur-md border border-slate-700 text-slate-300 text-xs px-4 py-2 rounded-lg font-mono">
              [ Recharts / Chart.js Canvas Mount ]
            </div>
          </div>
        </motion.div>

        {/* Live Telemetry Feed (Recent Signups) */}
        <motion.div variants={itemVariants} className="bg-[#0a0f1c]/80 backdrop-blur-xl p-6 rounded-[2rem] border border-slate-800/80 shadow-2xl flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live Feed
            </h3>
            <button className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors">View All</button>
          </div>
          
          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            <ul className="space-y-4">
              {recentSignups.map((user, i) => (
                <li key={i} className="group flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700/50 cursor-pointer">
                  
                  {/* Dynamic Avatar */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                    i % 2 === 0 ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-sm font-bold text-slate-200 truncate group-hover:text-cyan-400 transition-colors">{user.name}</p>
                      <span className="text-[10px] font-mono text-slate-500 whitespace-nowrap">{user.time}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-xs text-slate-400 font-medium">{user.role}</p>
                      
                      {/* Status Badge */}
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        user.status === 'verified' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
                        user.status === 'flagged' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 
                        'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      }`}>
                        {user.status}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
      
    </div>
  );
}
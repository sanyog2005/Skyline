import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Wallet, Bell, TrendingUp, MapPin, ArrowRight, Activity, Sparkles } from 'lucide-react';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

// Sub-component for Investor Stats
const StatCard = ({ icon, label, value, trend, color, glow }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ y: -5, scale: 1.02 }}
    className="relative group bg-slate-900/40 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 hover:border-slate-700 transition-all duration-300 overflow-hidden"
  >
    <div className={`absolute -inset-0.5 opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl ${glow}`} />
    <div className="relative z-10 flex justify-between items-start">
      <div>
        <div className={`w-12 h-12 rounded-2xl ${color} flex items-center justify-center mb-4 shadow-inner border border-white/5`}>
          {icon}
        </div>
        <p className="text-slate-400 text-sm font-medium">{label}</p>
        <h3 className="text-3xl font-bold text-white mt-1">{value}</h3>
      </div>
      <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
        <TrendingUp size={12} /> {trend}
      </div>
    </div>
  </motion.div>
);

export default function BuyerDashboard() {
  const recommendations = [
    {
      id: 1,
      title: "Silicon Avenue Duplex",
      location: "San Jose, CA",
      price: "$1.25M",
      roi: "8.4%",
      arbitrage: "12% Under Market",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Waterfront Condo",
      location: "Miami, FL",
      price: "$850k",
      roi: "7.1%",
      arbitrage: "High Rental Yield",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] p-6 lg:p-10 selection:bg-blue-500/30">
      
      {/* Ambient Background Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-10 relative z-10"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="flex justify-between items-end">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 uppercase tracking-wider">
              <Activity size={14} /> Live Market Status: Favorable
            </div>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Investor Dashboard
            </h1>
            <p className="mt-2 text-slate-400 text-lg">Your AI-curated buying opportunities for today.</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
            <Wallet size={18} /> Connect Funds
          </button>
        </motion.div>

        {/* Investor KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            icon={<Target className="text-blue-400" />} 
            label="AI Property Matches" value="14" trend="+3 New"
            color="bg-blue-500/10" glow="bg-blue-500"
          />
          <StatCard 
            icon={<Wallet className="text-emerald-400" />} 
            label="Active Offers" value="2" trend="Reviewing"
            color="bg-emerald-500/10" glow="bg-emerald-500"
          />
          <StatCard 
            icon={<Heart className="text-rose-400" />} 
            label="Saved Opportunities" value="8" trend="-1 Sold"
            color="bg-rose-500/10" glow="bg-rose-500"
          />
          <StatCard 
            icon={<Bell className="text-purple-400" />} 
            label="Market Alerts" value="5" trend="High Urgency"
            color="bg-purple-500/10" glow="bg-purple-500"
          />
        </div>

        {/* Main Dashboard Area */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          
          {/* Left Column: Urgent Recommendations */}
          <motion.div variants={itemVariants} className="xl:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="text-blue-400" size={24} /> 
                Top Picks to Buy
              </h3>
              <button className="text-blue-400 text-sm font-semibold hover:text-blue-300 flex items-center gap-1 transition-colors">
                View All <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recommendations.map((rec) => (
                <div key={rec.id} className="group bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="h-48 relative overflow-hidden">
                    <img src={rec.image} alt={rec.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-90" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                        <TrendingUp size={14} /> Est. ROI {rec.roi}
                      </div>
                      <h4 className="text-lg font-bold text-white leading-tight">{rec.title}</h4>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-slate-400 text-sm flex items-center gap-1">
                        <MapPin size={14} /> {rec.location}
                      </div>
                      <div className="text-white font-bold text-lg">{rec.price}</div>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold px-3 py-2 rounded-lg text-center mb-4">
                      {rec.arbitrage}
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all flex items-center justify-center gap-2">
                      Review & Make Offer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Buying Power / Market Pulse */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px]" />
            
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Buying Power</h3>
              <p className="text-slate-400 text-sm mb-6">Based on your connected accounts & pre-approvals.</p>
              
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight mb-2">
                $2.4M
              </div>
              <p className="text-emerald-400 text-sm font-semibold flex items-center gap-1 mb-8">
                <Activity size={14} /> Ready to deploy
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#0a0f1c]/50 border border-slate-800 rounded-2xl p-4">
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Pre-Approval Status</p>
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Verified</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,1)]" />
                </div>
              </div>
              <button className="w-full bg-slate-800 text-white py-4 rounded-xl font-bold hover:bg-slate-700 transition-colors border border-slate-700">
                Update Financials
              </button>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
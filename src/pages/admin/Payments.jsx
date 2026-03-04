import React from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  DollarSign, 
  TrendingUp, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Activity,
  Receipt
} from 'lucide-react';

// Enhanced Mock Data
const transactions = [
  { id: 'TXN-9901', user: 'Sarah Jenkins', amount: '$49.00', plan: 'Pro Agent', date: 'Oct 24, 2026', time: '14:32:01', status: 'Success' },
  { id: 'TXN-9902', user: 'Michael Chen', amount: '$49.00', plan: 'Pro Agent', date: 'Oct 23, 2026', time: '09:15:44', status: 'Success' },
  { id: 'TXN-9903', user: 'David Ross', amount: '$49.00', plan: 'Pro Agent', date: 'Oct 21, 2026', time: '18:45:12', status: 'Failed' },
  { id: 'TXN-9904', user: 'Elena Rostova', amount: '$199.00', plan: 'Investor Pro', date: 'Oct 21, 2026', time: '11:20:05', status: 'Pending' },
  { id: 'TXN-9905', user: 'James Wilson', amount: '$199.00', plan: 'Investor Pro', date: 'Oct 20, 2026', time: '16:05:33', status: 'Success' },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

// High-End Stat Card Component
const FinancialStatCard = ({ title, value, trend, isPositive, icon, color, glow }) => (
  <motion.div 
    variants={itemVariants}
    className="relative group bg-[#0a0f1c]/80 backdrop-blur-xl p-6 rounded-[2rem] border border-slate-800/80 hover:border-slate-700 transition-all duration-500 overflow-hidden flex flex-col justify-between"
  >
    {/* Hover Glow */}
    <div className={`absolute -inset-0.5 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl ${glow}`} />
    
    <div className="relative z-10 flex justify-between items-start mb-6">
      <div className={`p-3.5 rounded-2xl ${color} bg-opacity-10 border border-white/5 shadow-inner`}>
        {icon}
      </div>
      <div className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
        isPositive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
      }`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {trend}
      </div>
    </div>

    <div className="relative z-10">
      <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{title}</p>
      <h3 className="text-3xl font-black text-white tabular-nums tracking-tight">{value}</h3>
    </div>
  </motion.div>
);

export default function Payments() {
  // Helper for Status Badges
  const getStatusDisplay = (status) => {
    switch(status) {
      case 'Success': 
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border bg-emerald-500/10 text-emerald-400 border-emerald-500/20"><CheckCircle size={12} /> Settled</span>;
      case 'Failed': 
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border bg-rose-500/10 text-rose-400 border-rose-500/20"><XCircle size={12} /> Declined</span>;
      case 'Pending': 
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border bg-amber-500/10 text-amber-400 border-amber-500/20"><Clock size={12} /> Processing</span>;
      default: 
        return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border bg-slate-500/10 text-slate-400 border-slate-500/20">{status}</span>;
    }
  };

  return (
    <div className="w-full space-y-8 pb-12 relative">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">Ledger & Revenue</h1>
          <p className="text-slate-500 font-medium mt-1 flex items-center gap-2">
            <Activity size={14} className="text-emerald-400" /> Live transaction monitoring and MRR telemetry.
          </p>
        </div>
        
        <button className="relative group px-5 py-2.5 rounded-xl text-sm font-bold text-white overflow-hidden transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 transition-transform group-hover:scale-105" />
          <span className="relative z-10 flex items-center gap-2">
            <Download size={16} /> Export CSV Log
          </span>
        </button>
      </motion.div>

      {/* KPI Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
      >
        <FinancialStatCard 
          title="Monthly Recurring Revenue" value="$12,450" trend="12.5%" isPositive={true}
          icon={<DollarSign size={24} className="text-emerald-400" />} 
          color="bg-emerald-500" glow="bg-emerald-500" 
        />
        <FinancialStatCard 
          title="Active Subscriptions" value="254" trend="8.2%" isPositive={true}
          icon={<CreditCard size={24} className="text-blue-400" />} 
          color="bg-blue-500" glow="bg-blue-500" 
        />
        <FinancialStatCard 
          title="Churn Rate" value="1.2%" trend="0.4%" isPositive={false}
          icon={<TrendingUp size={24} className="text-rose-400" />} 
          color="bg-rose-500" glow="bg-rose-500" 
        />
      </motion.div>

      {/* Transactions Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="bg-[#0a0f1c]/80 backdrop-blur-2xl rounded-[2rem] border border-slate-800/80 shadow-2xl overflow-hidden relative z-10"
      >
        <div className="p-5 border-b border-slate-800/60 bg-slate-900/30 flex justify-between items-center">
          <h3 className="font-bold text-white flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Recent Transactions
          </h3>
          <div className="text-xs font-mono text-slate-500 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
            Sync: Real-time
          </div>
        </div>
        
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-900/50 border-b border-slate-800/80">
              <tr>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Transaction ID</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Client / Tier</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Timestamp</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Status</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Receipt</th>
              </tr>
            </thead>
            <motion.tbody 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="divide-y divide-slate-800/50"
            >
              {transactions.map((txn, index) => (
                <motion.tr 
                  key={txn.id} 
                  variants={rowVariants}
                  className="group hover:bg-slate-800/20 transition-colors duration-300"
                >
                  {/* ID */}
                  <td className="px-6 py-4">
                    <span className="inline-block font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md">
                      {txn.id}
                    </span>
                  </td>

                  {/* Client Info */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                        index % 2 === 0 ? 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white' : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        {txn.user.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="font-bold text-slate-200 group-hover:text-white transition-colors leading-tight">
                          {txn.user}
                        </p>
                        <p className="text-xs font-medium text-slate-500">{txn.plan}</p>
                      </div>
                    </div>
                  </td>

                  {/* Amount */}
                  <td className="px-6 py-4">
                    <span className="text-lg font-black text-white tabular-nums">{txn.amount}</span>
                  </td>

                  {/* Timestamp */}
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-slate-300">{txn.date}</p>
                    <p className="text-[10px] font-mono text-slate-500">{txn.time} UTC</p>
                  </td>

                  {/* Status Badge */}
                  <td className="px-6 py-4 text-right">
                    {getStatusDisplay(txn.status)}
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4 text-right">
                    <button 
                      disabled={txn.status === 'Failed'}
                      className="p-2 inline-flex items-center justify-center rounded-xl bg-slate-800/50 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <Receipt size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  MailOpen, 
  Reply, 
  CheckCircle, 
  Clock, 
  MessageSquare, 
  AlertTriangle,
  Headset,
  ArrowRight
} from 'lucide-react';

// Enhanced Mock Data
const initialInquiries = [
  { id: 'TKT-001', name: 'John Doe', subject: 'Billing Issue - Double Charged', type: 'Support', status: 'Open', date: '2 hours ago', priority: 'High' },
  { id: 'TKT-002', name: 'Alice Cooper', subject: 'Report: Fake Listing detected', type: 'Moderation', status: 'In Progress', date: '5 hours ago', priority: 'Urgent' },
  { id: 'TKT-003', name: 'Bob Smith', subject: 'How to upgrade to Investor Pro?', type: 'Sales', status: 'Resolved', date: '1 day ago', priority: 'Low' },
  { id: 'TKT-004', name: 'Elena Rostova', subject: 'Cannot access saved properties', type: 'Technical', status: 'Open', date: '10 mins ago', priority: 'Medium' },
];

export default function Inquiries() {
  const [tickets, setTickets] = useState(initialInquiries);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Filter Logic
  const filteredTickets = tickets.filter((t) => {
    const matchesSearch = t.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          t.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || t.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Animation Variants
  const tableVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { opacity: 0, scale: 0.95, filter: "blur(4px)", transition: { duration: 0.2 } }
  };

  // Helper styles
  const getStatusStyles = (status) => {
    switch(status) {
      case 'Open': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'In Progress': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Resolved': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'Support': return <Headset size={14} className="text-blue-400" />;
      case 'Moderation': return <AlertTriangle size={14} className="text-rose-400" />;
      case 'Sales': return <CheckCircle size={14} className="text-emerald-400" />;
      case 'Technical': return <MessageSquare size={14} className="text-cyan-400" />;
      default: return <MessageSquare size={14} />;
    }
  };

  return (
    <div className="w-full space-y-6 pb-12">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">Active Escalations</h1>
          <p className="text-slate-500 font-medium mt-1 flex items-center gap-2">
            <Headset size={14} className="text-cyan-400" /> Manage user tickets, moderation reports, and technical issues.
          </p>
        </div>

        {/* Status Filters (Replacing the <select>) */}
        <div className="flex bg-[#0a0f1c]/80 border border-slate-800/80 p-1.5 rounded-xl backdrop-blur-md">
          {['All', 'Open', 'In Progress', 'Resolved'].map((tab) => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                statusFilter === tab ? 'text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {statusFilter === tab && (
                <motion.div
                  layoutId="active-filter-pill"
                  className="absolute inset-0 bg-slate-800 border border-slate-700 rounded-lg"
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Main Glass Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-[#0a0f1c]/80 backdrop-blur-2xl rounded-[2rem] border border-slate-800/80 shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Terminal Search Bar */}
        <div className="p-4 border-b border-slate-800/60 bg-slate-900/30">
          <div className="relative group max-w-xl">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Query ticket ID, subject, or user name..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#030712]/50 border border-slate-700/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-sm text-white placeholder:text-slate-500 outline-none transition-all shadow-inner"
            />
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-900/50 border-b border-slate-800/80">
              <tr>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Ticket / Date</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Subject & User</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <motion.tbody 
              variants={tableVariants}
              initial="hidden"
              animate="show"
              className="divide-y divide-slate-800/50"
            >
              <AnimatePresence mode="popLayout">
                {filteredTickets.length > 0 ? (
                  filteredTickets.map((t) => (
                    <motion.tr 
                      key={t.id}
                      layout
                      variants={rowVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="group hover:bg-slate-800/20 transition-colors duration-300"
                    >
                      {/* Ticket ID & Time */}
                      <td className="px-6 py-4">
                        <span className="inline-block font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-md mb-1.5">
                          {t.id}
                        </span>
                        <p className="text-xs font-medium text-slate-500">{t.date}</p>
                      </td>

                      {/* Subject & Details */}
                      <td className="px-6 py-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 p-1.5 rounded-lg bg-slate-800 border border-slate-700 shrink-0">
                            {getTypeIcon(t.type)}
                          </div>
                          <div>
                            <p className="font-bold text-slate-200 group-hover:text-white transition-colors leading-tight mb-1">
                              {t.subject}
                            </p>
                            <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                              <span className="text-slate-400">{t.name}</span>
                              <span className="w-1 h-1 rounded-full bg-slate-700" />
                              {t.type}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Status Badge */}
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${getStatusStyles(t.status)}`}>
                          {t.status === 'Open' && <MailOpen size={12} />}
                          {t.status === 'In Progress' && <Clock size={12} />}
                          {t.status === 'Resolved' && <CheckCircle size={12} />}
                          {t.status}
                        </span>
                      </td>

                      {/* Action Button */}
                      <td className="px-6 py-4 text-right">
                        <button className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-slate-300 bg-slate-800/80 border border-slate-700 hover:text-white hover:bg-cyan-600 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300">
                          {t.status === 'Resolved' ? 'View Log' : 'Respond'}
                          {t.status !== 'Resolved' && <Reply size={16} />}
                        </button>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  /* Empty State */
                  <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <td colSpan="4" className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center justify-center text-slate-500">
                        <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-4 border border-slate-700/50">
                          <CheckCircle size={28} className="text-emerald-500/50" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-300 mb-1">Inbox Zero</h3>
                        <p className="text-sm font-medium text-slate-500">No tickets found matching your current filters.</p>
                      </div>
                    </td>
                  </motion.tr>
                )}
              </AnimatePresence>
            </motion.tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Eye, 
  Trash2, 
  CheckCircle, 
  XCircle, 
  Building2,
  AlertTriangle,
  Zap,
  MapPin,
  Clock
} from 'lucide-react';

// Enhanced Mock Data
const initialProperties = [
  { 
    id: 'PRP-091', 
    title: 'Skyline Penthouse Loft', 
    owner: 'Elena Rostova', 
    price: '$1.25M', 
    status: 'Pending', 
    aiScore: 94,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=200'
  },
  { 
    id: 'PRP-092', 
    title: 'Minimalist Suburban Villa', 
    owner: 'Marcus Chen', 
    price: '$850k', 
    status: 'Active', 
    aiScore: 88,
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=200'
  },
  { 
    id: 'PRP-093', 
    title: 'Suspicious Cheap Condo', 
    owner: 'Unknown Agent', 
    price: '$120k', 
    status: 'Flagged', 
    aiScore: 12, // Low score triggers warning
    img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=200'
  },
];

export default function AdminProperties() {
  const [properties, setProperties] = useState(initialProperties);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  // Handle Moderation Actions
  const handleAction = (id, newStatus) => {
    if (newStatus === 'Deleted') {
      setProperties(prev => prev.filter(p => p.id !== id));
    } else {
      setProperties(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
    }
  };

  // Filter Logic
  const filteredProperties = properties.filter((p) => {
    const matchesSearch = p.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.owner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Animation Variants
  const tableVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const rowVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { opacity: 0, scale: 0.9, x: -20, filter: "blur(4px)", transition: { duration: 0.2 } }
  };

  // UI Helpers
  const getStatusDisplay = (status) => {
    switch(status) {
      case 'Active': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Pending': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Flagged': return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
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
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">Property Oversight</h1>
          <p className="text-slate-500 font-medium mt-1 flex items-center gap-2">
            <Building2 size={14} className="text-cyan-400" /> Review listings and moderate AI-flagged assets.
          </p>
        </div>

        {/* Status Filters */}
        <div className="flex bg-[#0a0f1c]/80 border border-slate-800/80 p-1.5 rounded-xl backdrop-blur-md">
          {['All', 'Pending', 'Active', 'Flagged'].map((tab) => (
            <button
              key={tab}
              onClick={() => setStatusFilter(tab)}
              className={`relative px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                statusFilter === tab ? 'text-white' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {statusFilter === tab && (
                <motion.div
                  layoutId="property-filter-pill"
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
              placeholder="Query listing ID, title, or owner..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-[#030712]/50 border border-slate-700/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-sm text-white placeholder:text-slate-500 outline-none transition-all shadow-inner"
            />
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-slate-900/50 border-b border-slate-800/80">
              <tr>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Asset Details</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Owner / Asking</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Moderation Status</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Terminal Actions</th>
              </tr>
            </thead>
            <motion.tbody 
              variants={tableVariants}
              initial="hidden"
              animate="show"
              className="divide-y divide-slate-800/50"
            >
              <AnimatePresence mode="popLayout">
                {filteredProperties.length > 0 ? (
                  filteredProperties.map((p) => (
                    <motion.tr 
                      key={p.id}
                      layout
                      variants={rowVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="group hover:bg-slate-800/20 transition-colors duration-300"
                    >
                      {/* Asset Details (Image + Title) */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-12 rounded-lg overflow-hidden border border-slate-700 shrink-0 relative">
                            <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            {p.aiScore < 50 && (
                              <div className="absolute inset-0 bg-rose-500/20 flex items-center justify-center backdrop-blur-[1px]">
                                <AlertTriangle size={14} className="text-white" />
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-bold text-slate-200 group-hover:text-cyan-400 transition-colors leading-tight mb-1">
                              {p.title}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-[10px] font-bold text-slate-500 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded">
                                {p.id}
                              </span>
                              <span className={`flex items-center gap-1 text-[10px] font-bold ${p.aiScore >= 80 ? 'text-emerald-400' : p.aiScore >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                                <Zap size={10} /> AI Score: {p.aiScore}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Owner & Price */}
                      <td className="px-6 py-4">
                        <p className="font-bold text-white text-lg tabular-nums tracking-tight mb-0.5">{p.price}</p>
                        <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-slate-700" />
                          {p.owner}
                        </p>
                      </td>

                      {/* Status Badge */}
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${getStatusDisplay(p.status)}`}>
                          {p.status === 'Pending' && <Clock size={12} />}
                          {p.status === 'Active' && <CheckCircle size={12} />}
                          {p.status === 'Flagged' && <AlertTriangle size={12} />}
                          {p.status}
                        </span>
                      </td>

                      {/* Moderation Actions */}
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          
                          <button className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all" title="Review Asset">
                            <Eye size={16} />
                          </button>

                          {/* Contextual Actions based on Status */}
                          {(p.status === 'Pending' || p.status === 'Flagged') && (
                            <button 
                              onClick={() => handleAction(p.id, 'Active')}
                              className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20 transition-all" 
                              title="Approve Listing"
                            >
                              <CheckCircle size={16} />
                            </button>
                          )}

                          {p.status === 'Pending' && (
                            <button 
                              onClick={() => handleAction(p.id, 'Flagged')}
                              className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-amber-400 hover:bg-amber-500/10 border border-transparent hover:border-amber-500/20 transition-all" 
                              title="Flag for Review"
                            >
                              <AlertTriangle size={16} />
                            </button>
                          )}

                          <button 
                            onClick={() => handleAction(p.id, 'Deleted')}
                            className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all" 
                            title="Delete Asset"
                          >
                            <XCircle size={16} />
                          </button>

                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  /* Empty State */
                  <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <td colSpan="4" className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center justify-center text-slate-500">
                        <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-4 border border-slate-700/50">
                          <Building2 size={28} className="text-slate-600" />
                        </div>
                        <h3 className="text-lg font-bold text-slate-300 mb-1">Queue Empty</h3>
                        <p className="text-sm font-medium text-slate-500">No properties require moderation at this time.</p>
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
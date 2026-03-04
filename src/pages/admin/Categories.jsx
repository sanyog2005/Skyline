import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit2, Trash2, Search, Tag, Activity, ArrowUpRight, ArrowDownRight } from 'lucide-react';

// Enhanced Mock Data
const initialCategories = [
  { id: 'cat-1', name: 'Premium High-Rise', type: 'Residential', count: 1240, trend: '+12%', isPositive: true },
  { id: 'cat-2', name: 'Luxury Villa', type: 'Residential', count: 450, trend: '+5.4%', isPositive: true },
  { id: 'cat-3', name: 'Corporate Office', type: 'Commercial', count: 85, trend: '-2.1%', isPositive: false },
  { id: 'cat-4', name: 'Retail Space', type: 'Commercial', count: 120, trend: '+1.8%', isPositive: true },
  { id: 'cat-5', name: 'Logistics Warehouse', type: 'Industrial', count: 34, trend: '+14.2%', isPositive: true },
];

export default function Categories() {
  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDelete = (id) => {
    setCategories((prev) => prev.filter((c) => c.id !== id));
  };

  const filteredCategories = categories.filter((c) => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Animation Variants
  const tableVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
    exit: { opacity: 0, x: 20, filter: "blur(4px)", transition: { duration: 0.2 } }
  };

  // Helper for type badges
  const getTypeStyles = (type) => {
    switch(type) {
      case 'Residential': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Commercial': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Industrial': return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };

  return (
    <div className="w-full space-y-6 pb-12">
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
      >
        <div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 tracking-tight">Classification Engine</h1>
          <p className="text-slate-500 font-medium mt-1 flex items-center gap-2">
            <Tag size={14} className="text-cyan-400" /> Manage property tags and AI sorting categories.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          {/* Terminal Search Bar */}
          <div className="relative group">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Filter categories..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full sm:w-64 pl-10 pr-4 py-2.5 rounded-xl bg-[#0a0f1c]/80 border border-slate-700/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-sm text-white placeholder:text-slate-500 outline-none transition-all shadow-inner backdrop-blur-md"
            />
          </div>

          <button className="relative group px-5 py-2.5 rounded-xl text-sm font-bold text-white overflow-hidden transition-all shadow-lg shadow-cyan-900/20 flex items-center justify-center gap-2">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform group-hover:scale-105" />
            <span className="relative z-10 flex items-center gap-2">
              <Plus size={16} /> New Class
            </span>
          </button>
        </div>
      </motion.div>

      {/* Main Glass Table Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
        className="bg-[#0a0f1c]/80 backdrop-blur-2xl rounded-[2rem] border border-slate-800/80 shadow-2xl overflow-hidden"
      >
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-900/50 border-b border-slate-800/80">
              <tr>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Classification Name</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Sector Type</th>
                <th className="px-6 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Active Listings</th>
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
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((c) => (
                    <motion.tr 
                      key={c.id} 
                      layout
                      variants={rowVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="group hover:bg-slate-800/20 transition-colors duration-300"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                            <Tag size={14} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                          </div>
                          <span className="font-bold text-slate-200 group-hover:text-white transition-colors">{c.name}</span>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider border ${getTypeStyles(c.type)}`}>
                          {c.type}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-white font-mono font-bold">{c.count.toLocaleString()}</span>
                          <span className={`flex items-center gap-0.5 text-xs font-bold ${c.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {c.isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                            {c.trend}
                          </span>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all">
                            <Edit2 size={16} />
                          </button>
                          <button 
                            onClick={() => handleDelete(c.id)}
                            className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : (
                  <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <td colSpan="4" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center text-slate-500">
                        <Search size={32} className="mb-3 opacity-20" />
                        <p className="text-sm font-medium">No classifications found matching "{searchTerm}"</p>
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
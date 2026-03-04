import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  Building2, 
  BarChart3, 
  Settings, 
  LogOut,
  Tags,
  MessageSquare,
  CreditCard,
  FileText,
  Search,
  Bell,
  Activity,
  Terminal
} from 'lucide-react';

export default function AdminLayout() {
  const location = useLocation();

  // Comprehensive routing map based on your config
  const menuItems = [
    { name: 'Analytics Overview', path: '/admin/dashboard', icon: <BarChart3 size={20} /> },
    { name: 'User Management', path: '/admin/users', icon: <Users size={20} /> },
    { name: 'Property Database', path: '/admin/properties', icon: <Building2 size={20} /> },
    { name: 'Categories & Tags', path: '/admin/categories', icon: <Tags size={20} /> },
    { name: 'Active Inquiries', path: '/admin/inquiries', icon: <MessageSquare size={20} /> },
    { name: 'Payments & Ledger', path: '/admin/payments', icon: <CreditCard size={20} /> },
    { name: 'Content Engine (CMS)', path: '/admin/cms', icon: <FileText size={20} /> },
    { name: 'System Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  const checkIsActive = (itemPath) => {
    return location.pathname.startsWith(itemPath);
  };

  // Dynamic header title generation
  const getPageTitle = () => {
    const activeItem = menuItems.find(item => checkIsActive(item.path));
    return activeItem ? activeItem.name : 'System Overview';
  };

  // Page Transition Variants
  const pageVariants = {
    initial: { opacity: 0, y: 15, scale: 0.99 },
    enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -10, scale: 0.99, transition: { duration: 0.2 } }
  };

  return (
    <div className="flex h-screen bg-[#030712] text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden relative">
      
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Admin Sidebar (Glassmorphism) */}
      <aside className="w-72 bg-[#0a0f1c]/90 backdrop-blur-2xl border-r border-slate-800/80 flex flex-col relative z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
        
        {/* Brand Header */}
        <div className="h-24 px-6 flex items-center gap-4 border-b border-slate-800/60 bg-slate-900/50">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Terminal size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-extrabold text-white tracking-tight leading-tight">Skyline Root</h1>
            <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1 mt-0.5">
              <ShieldCheck size={10} /> Superadmin
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
          <p className="px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Command Modules</p>
          
          {menuItems.map((item) => {
            const isActive = checkIsActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {/* Gliding Active Background */}
                {isActive && (
                  <motion.div 
                    layoutId="admin-sidebar-active"
                    className="absolute inset-0 bg-blue-500/10 border border-blue-500/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
                
                {/* Icon & Text */}
                <span className={`relative z-10 transition-transform duration-300 ${isActive ? 'text-cyan-400' : 'group-hover:text-slate-300'}`}>
                  {item.icon}
                </span>
                <span className="relative z-10 font-semibold text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800/60 bg-slate-900/20">
          <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-rose-500/80 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors font-medium text-sm">
            <LogOut size={18} /> Terminate Session
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        
        {/* Admin Header */}
        <header className="h-24 px-10 bg-[#030712]/80 backdrop-blur-xl border-b border-slate-800/60 flex items-center justify-between sticky top-0 z-30">
          
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">{getPageTitle()}</h2>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-xs font-mono text-slate-400">
              {location.pathname}
            </div>
          </div>

          <div className="flex items-center gap-6">
            {/* Global Search */}
            <div className="relative group hidden lg:block">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Query database (⌘K)" 
                className="w-64 pl-10 pr-4 py-2 rounded-lg bg-[#0a0f1c] border border-slate-700 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-sm text-white placeholder:text-slate-500 outline-none transition-all"
              />
            </div>

            <div className="w-px h-6 bg-slate-800 hidden sm:block" />

            {/* Notifications */}
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            </button>

            {/* Server Status Widget */}
            <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 pl-3 pr-4 py-1.5 rounded-full cursor-help group">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div className="text-right">
                <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest leading-none mb-0.5">Cluster Status</p>
                <p className="text-xs font-semibold text-emerald-400 leading-none group-hover:text-emerald-300 transition-colors">99.9% Optimal</p>
              </div>
            </div>
          </div>
        </header>
        
        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-10 custom-scrollbar relative">
          {/* Ambient center glow to make tables pop */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                variants={pageVariants}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  User, 
  Heart, 
  MessageSquare, 
  LogOut, 
  Building, 
  CreditCard,
  Home,
  Search,
  Bell,
  Sparkles,
  Settings
} from 'lucide-react';

export default function UserLayout() {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'My Profile', path: '/dashboard/profile', icon: <User size={20} /> },
    { name: 'My Properties', path: '/dashboard/properties', icon: <Building size={20} /> },
    { name: 'Saved Homes', path: '/dashboard/saved', icon: <Heart size={20} /> },
    { name: 'Messages', path: '/dashboard/messages', icon: <MessageSquare size={20} /> },
    { name: 'Subscription', path: '/dashboard/subscription', icon: <CreditCard size={20} /> },
  ];

  // Precise active check for nested routes
  const checkIsActive = (itemPath) => {
    if (itemPath === '/dashboard') return location.pathname === '/dashboard';
    return location.pathname.startsWith(itemPath);
  };

  // Route transition variants
  const pageVariants = {
    initial: { opacity: 0, y: 10, scale: 0.99 },
    enter: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -10, scale: 0.99, transition: { duration: 0.2 } }
  };

  return (
    <div className="flex h-screen bg-[#030712] text-slate-200 font-sans selection:bg-blue-500/30 overflow-hidden relative">
      
      {/* Global Ambient Glows */}
      <div className="absolute top-0 left-64 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Glassmorphic Sidebar */}
      <aside className="w-72 bg-[#0a0f1c]/80 backdrop-blur-2xl border-r border-slate-800/80 flex flex-col relative z-20">
        
        {/* Brand Header */}
        <div className="h-24 px-8 flex items-center gap-3 border-b border-slate-800/60">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <Home size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold text-white tracking-tight">Skyline</h1>
            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest flex items-center gap-1 mt-0.5">
              <Sparkles size={10} /> Investor Pro
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto custom-scrollbar">
          <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Main Menu</p>
          
          {menuItems.map((item) => {
            const isActive = checkIsActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                  isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {/* Gliding Active Background */}
                {isActive && (
                  <motion.div 
                    layoutId="sidebar-active-indicator"
                    className="absolute inset-0 bg-blue-600/10 border border-blue-500/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  />
                )}
                
                {/* Icon & Text */}
                <span className={`relative z-10 transition-transform duration-300 ${isActive ? 'scale-110 text-blue-400' : 'group-hover:scale-110 group-hover:text-slate-300'}`}>
                  {item.icon}
                </span>
                <span className="relative z-10 font-semibold">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer Actions */}
        <div className="p-4 border-t border-slate-800/60 space-y-2">
          <Link to="/settings" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-colors font-medium">
            <Settings size={20} /> Settings
          </Link>
          <Link to="/login" className="flex items-center gap-3 px-4 py-3 text-rose-500/80 hover:text-rose-400 hover:bg-rose-500/10 rounded-xl transition-colors font-medium">
            <LogOut size={20} /> Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative z-10">
        
        {/* Top Header */}
        <header className="h-24 px-8 bg-[#030712]/80 backdrop-blur-xl border-b border-slate-800/60 flex items-center justify-between sticky top-0 z-30">
          
          {/* Global Search */}
          <div className="relative group w-96 hidden md:block">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative flex items-center gap-3 bg-[#0a0f1c] border border-slate-800/80 rounded-2xl px-4 py-2.5">
              <Search size={18} className="text-slate-500" />
              <input 
                type="text" 
                placeholder="Search addresses, cities, or AI insights..." 
                className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-slate-500"
              />
              <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-800/50 px-2 py-1 rounded-md">
                ⌘K
              </div>
            </div>
          </div>

          {/* Right side utilities */}
          <div className="flex items-center gap-6 ml-auto">
            {/* Notification Bell */}
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.6)] border border-[#030712]" />
            </button>

            <div className="w-px h-8 bg-slate-800" />

            {/* User Profile Dropdown Trigger */}
            <button className="flex items-center gap-3 group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-white leading-none">Sanyog Sharma</p>
                <p className="text-xs text-slate-500 font-medium mt-1">sanyog@skyline.ai</p>
              </div>
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px] group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-shadow">
                  <div className="w-full h-full rounded-full bg-[#0a0f1c] flex items-center justify-center border border-transparent overflow-hidden">
                    {/* Placeholder for an actual image, using gradient initials for now */}
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                      SS
                    </div>
                  </div>
                </div>
                {/* Online Status Dot */}
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-[#030712]" />
              </div>
            </button>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto relative custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              className="h-full"
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        
      </div>
    </div>
  );
}
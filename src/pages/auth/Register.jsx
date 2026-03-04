import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, ShieldCheck, ArrowRight, Sparkles, Github, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Simple visual password strength calculator
  const getPasswordStrength = (pass) => {
    if (pass.length === 0) return 0;
    if (pass.length < 5) return 25;
    if (pass.length < 8) return 50;
    if (pass.length < 12) return 75;
    return 100;
  };

  const strength = getPasswordStrength(password);

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#030712] relative overflow-hidden selection:bg-blue-500/30 py-12">
      
      {/* Architectural Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[#0a0f1c]/80 backdrop-blur-2xl p-8 sm:p-10 rounded-[2.5rem] border border-slate-800/80 shadow-2xl shadow-blue-900/10 relative overflow-hidden group">
          
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50" />

          {/* Header */}
          <div className="text-center mb-10">
            <motion.div 
              initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}
              className="w-14 h-14 mx-auto bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/50"
            >
              <ShieldCheck size={28} className="text-indigo-400" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-3xl font-extrabold text-white tracking-tight"
            >
              Request Access
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-slate-400 mt-2 text-sm font-medium flex items-center justify-center gap-1.5"
            >
              <Sparkles size={14} className="text-indigo-400" /> Join the private investor network
            </motion.p>
          </div>

          <motion.form 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            onSubmit={handleRegister} 
            className="space-y-5"
          >
            {/* Name Input */}
            <motion.div variants={itemVariants} className="relative group/input">
              <User className="absolute left-4 top-4 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors z-10" size={20} />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-focus-within/input:opacity-20 blur transition duration-300" />
              <input 
                type="text" 
                placeholder="Full Legal Name"
                className="relative w-full pl-12 pr-4 py-4 rounded-2xl bg-[#030712]/50 border border-slate-800 text-white placeholder:text-slate-500 focus:border-indigo-500/50 focus:bg-[#030712]/80 outline-none transition-all font-medium"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </motion.div>

            {/* Email Input */}
            <motion.div variants={itemVariants} className="relative group/input">
              <Mail className="absolute left-4 top-4 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors z-10" size={20} />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-focus-within/input:opacity-20 blur transition duration-300" />
              <input 
                type="email" 
                placeholder="Work Email Address"
                className="relative w-full pl-12 pr-4 py-4 rounded-2xl bg-[#030712]/50 border border-slate-800 text-white placeholder:text-slate-500 focus:border-indigo-500/50 focus:bg-[#030712]/80 outline-none transition-all font-medium"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </motion.div>

            {/* Password Input */}
            <motion.div variants={itemVariants} className="relative group/input">
              <Lock className="absolute left-4 top-4 text-slate-500 group-focus-within/input:text-indigo-400 transition-colors z-10" size={20} />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-0 group-focus-within/input:opacity-20 blur transition duration-300" />
              <input 
                type="password" 
                placeholder="Create Password"
                className="relative w-full pl-12 pr-4 py-4 rounded-2xl bg-[#030712]/50 border border-slate-800 text-white placeholder:text-slate-500 focus:border-indigo-500/50 focus:bg-[#030712]/80 outline-none transition-all font-medium"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              {/* Dynamic Password Strength Indicator */}
              <AnimatePresence>
                {password.length > 0 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 flex items-center gap-2 px-1"
                  >
                    <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden flex">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${strength}%` }}
                        className={`h-full ${
                          strength < 50 ? 'bg-rose-500' : strength < 100 ? 'bg-amber-500' : 'bg-emerald-500'
                        }`}
                      />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 w-16 text-right">
                      {strength < 50 ? 'Weak' : strength < 100 ? 'Good' : 'Strong'}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Terms and Conditions */}
            <motion.div variants={itemVariants} className="flex items-start gap-3 px-1 mt-2">
              <input 
                type="checkbox" 
                required
                className="mt-1 rounded border-slate-700 bg-slate-800/50 text-indigo-500 focus:ring-indigo-500/20 focus:ring-offset-0 cursor-pointer" 
              />
              <p className="text-xs text-slate-400 leading-relaxed">
                I agree to the <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">Terms of Service</a> and <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium">Privacy Policy</a>. I understand this platform uses predictive AI models.
              </p>
            </motion.div>

            {/* Submit Button */}
            <motion.button 
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={isLoading || !name || !email || !password}
              className="relative w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-white overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 transition-transform group-hover/btn:scale-105" />
              <span className="relative z-10 flex items-center gap-2">
                {isLoading ? (
                  <><Loader2 className="animate-spin" size={20} /> Creating Profile...</>
                ) : (
                  <>Create Investor Account <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" /></>
                )}
              </span>
            </motion.button>
          </motion.form>

          {/* Single Sign-On Providers */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="mt-8 pt-8 border-t border-slate-800/60"
          >
            <p className="text-xs text-center text-slate-500 font-semibold uppercase tracking-wider mb-4">Or register with</p>
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#030712]/50 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors text-sm font-semibold group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                Google
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#030712]/50 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors text-sm font-semibold group">
                <Github size={18} className="group-hover:scale-110 transition-transform" />
                Github
              </button>
            </div>
          </motion.div>

        </div>

        {/* Footer Link Out */}
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
          className="text-center mt-8 text-slate-500 font-medium text-sm"
        >
          Already an investor? <Link to="/login" className="text-indigo-400 font-bold hover:text-indigo-300 transition-colors ml-1">Authenticate here</Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, CheckCircle, KeyRound, Eye, EyeOff, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  // Live Validation Rules
  const validations = [
    { id: 1, text: 'At least 8 characters', isMet: password.length >= 8 },
    { id: 2, text: 'Contains a number', isMet: /\d/.test(password) },
    { id: 3, text: 'Contains a special character', isMet: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
    { id: 4, text: 'Passwords match', isMet: password === confirmPassword && password.length > 0 },
  ];

  const isFormValid = validations.every((v) => v.isMet);

  const handleReset = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    
    setIsLoading(true);

    // Simulate API Call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 15 } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#030712] relative overflow-hidden selection:bg-blue-500/30 py-12">
      
      {/* Architectural Background Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[#0a0f1c]/80 backdrop-blur-2xl p-8 sm:p-10 rounded-[2.5rem] border border-slate-800/80 shadow-2xl shadow-blue-900/10 relative overflow-hidden">
          
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="w-full"
              >
                {/* Header */}
                <div className="text-center mb-10">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}
                    className="w-14 h-14 mx-auto bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/50"
                  >
                    <KeyRound size={28} className="text-cyan-400" />
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="text-3xl font-extrabold text-white tracking-tight"
                  >
                    Secure Vault
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                    className="text-slate-400 mt-2 text-sm font-medium"
                  >
                    Establish a new encryption key for your account.
                  </motion.p>
                </div>

                <motion.form 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  onSubmit={handleReset} 
                  className="space-y-5"
                >
                  {/* New Password Input */}
                  <motion.div variants={itemVariants} className="relative group/input">
                    <Lock className="absolute left-4 top-4 text-slate-500 group-focus-within/input:text-cyan-400 transition-colors z-10" size={20} />
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-focus-within/input:opacity-20 blur transition duration-300" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="New Password"
                      className="relative w-full pl-12 pr-12 py-4 rounded-2xl bg-[#030712]/50 border border-slate-800 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:bg-[#030712]/80 outline-none transition-all font-medium"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-4 text-slate-500 hover:text-slate-300 transition-colors z-10"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </motion.div>

                  {/* Confirm Password Input */}
                  <motion.div variants={itemVariants} className="relative group/input">
                    <ShieldCheck className="absolute left-4 top-4 text-slate-500 group-focus-within/input:text-cyan-400 transition-colors z-10" size={20} />
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-0 group-focus-within/input:opacity-20 blur transition duration-300" />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Confirm New Password"
                      className="relative w-full pl-12 pr-4 py-4 rounded-2xl bg-[#030712]/50 border border-slate-800 text-white placeholder:text-slate-500 focus:border-cyan-500/50 focus:bg-[#030712]/80 outline-none transition-all font-medium"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </motion.div>

                  {/* Live Security Validation Checklist */}
                  <motion.div variants={itemVariants} className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-4 space-y-2.5">
                    {validations.map((val) => (
                      <div key={val.id} className="flex items-center gap-2.5">
                        <div className={`flex items-center justify-center w-5 h-5 rounded-full border transition-all duration-300 ${val.isMet ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' : 'border-slate-700 text-slate-600'}`}>
                          <CheckCircle size={12} className={val.isMet ? 'opacity-100' : 'opacity-0'} />
                        </div>
                        <span className={`text-xs font-medium transition-colors duration-300 ${val.isMet ? 'text-slate-300' : 'text-slate-500'}`}>
                          {val.text}
                        </span>
                      </div>
                    ))}
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button 
                    variants={itemVariants}
                    whileHover={isFormValid ? { scale: 1.01 } : {}}
                    whileTap={isFormValid ? { scale: 0.98 } : {}}
                    disabled={!isFormValid || isLoading}
                    className="relative w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-white overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform group-hover/btn:scale-105" />
                    <span className="relative z-10 flex items-center gap-2">
                      {isLoading ? (
                        <><Loader2 className="animate-spin" size={20} /> Securing...</>
                      ) : (
                        <>Update Key <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" /></>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
                
                {/* Back Link */}
                <motion.div variants={itemVariants} className="text-center mt-6">
                  <Link to="/login" className="text-sm font-semibold text-slate-500 hover:text-cyan-400 transition-colors">
                    Cancel and return to login
                  </Link>
                </motion.div>
              </motion.div>
            ) : (
              /* Success State Overlay */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full text-center py-8"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
                  className="w-20 h-20 mx-auto bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]"
                >
                  <CheckCircle size={40} className="text-emerald-400" />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Vault Secured</h3>
                <p className="text-slate-400 text-sm mb-8">Your encryption key has been updated successfully. You can now access the investor network.</p>
                <Link 
                  to="/login"
                  className="inline-flex items-center justify-center w-full py-4 rounded-2xl font-bold text-slate-900 bg-white hover:bg-slate-200 transition-colors"
                >
                  Proceed to Login
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
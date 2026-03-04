import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ChevronLeft, Fingerprint, Loader2, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);

    // Simulate network request
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
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Glass Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[#0a0f1c]/80 backdrop-blur-2xl p-8 sm:p-10 rounded-[2.5rem] border border-slate-800/80 shadow-2xl shadow-blue-900/10 relative overflow-hidden group">
          
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-50" />

          {/* Back Navigation */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
            <Link 
              to="/login" 
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-blue-400 mb-8 transition-colors"
            >
              <ChevronLeft size={16} /> Return to Authentication
            </Link>
          </motion.div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                {/* Header */}
                <div className="mb-8">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.1 }}
                    className="w-14 h-14 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/50"
                  >
                    <Fingerprint size={28} className="text-blue-400" />
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="text-3xl font-extrabold text-white tracking-tight"
                  >
                    Account Recovery
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                    className="text-slate-400 mt-2 text-sm font-medium leading-relaxed"
                  >
                    Enter the email associated with your profile. We will securely transmit a reset link to your inbox.
                  </motion.p>
                </div>

                <motion.form 
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  {/* Email Input */}
                  <motion.div variants={itemVariants} className="relative group/input">
                    <Mail className="absolute left-4 top-4 text-slate-500 group-focus-within/input:text-blue-400 transition-colors z-10" size={20} />
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-focus-within/input:opacity-20 blur transition duration-300" />
                    <input 
                      type="email" 
                      placeholder="Registered Email Address"
                      className="relative w-full pl-12 pr-4 py-4 rounded-2xl bg-[#030712]/50 border border-slate-800 text-white placeholder:text-slate-500 focus:border-blue-500/50 focus:bg-[#030712]/80 outline-none transition-all font-medium"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button 
                    variants={itemVariants}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isLoading || !email}
                    className="relative w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 text-white overflow-hidden group/btn disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 transition-transform group-hover/btn:scale-105" />
                    <span className="relative z-10 flex items-center gap-2">
                      {isLoading ? (
                        <><Loader2 className="animate-spin" size={20} /> Transmitting...</>
                      ) : (
                        <>Transmit Recovery Link <Send size={16} className="group-hover/btn:translate-x-1 transition-transform ml-1" /></>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
              </motion.div>
            ) : (
              /* Success State Overlay */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full text-center py-6"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, duration: 0.6 }}
                  className="w-20 h-20 mx-auto bg-blue-500/10 border border-blue-500/20 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
                >
                  <CheckCircle size={40} className="text-blue-400" />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-white mb-2">Transmission Sent</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  We've dispatched a secure recovery link to <span className="text-slate-200 font-bold">{email}</span>. Please check your inbox and spam folder.
                </p>
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    setEmail('');
                  }}
                  className="inline-flex items-center justify-center w-full py-4 rounded-2xl font-bold text-slate-400 bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  Use a different email
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
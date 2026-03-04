import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Star, Send } from 'lucide-react';

export default function Contact() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative py-32 bg-[#030712] overflow-hidden selection:bg-blue-500/30">
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Copy & Details */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 variants={fadeRight} className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let's find your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                market advantage.
              </span>
            </motion.h2>
            <motion.p variants={fadeRight} className="mt-6 text-lg text-slate-400 max-w-md leading-relaxed">
              Have questions about a specific listing or our predictive AI tools? Drop us a line. Our data engineers and agents reply within hours.
            </motion.p>
            
            {/* Contact Details */}
            <motion.div variants={fadeRight} className="mt-8 space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center shadow-inner">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">Email us</p>
                  <p className="font-semibold text-white">hello@skyline.ai</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-12 h-12 rounded-2xl bg-slate-900/50 border border-slate-800 flex items-center justify-center shadow-inner">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-500">HQ Location</p>
                  <p className="font-semibold text-white">San Francisco, CA</p>
                </div>
              </div>
            </motion.div>

            {/* Premium Testimonial Card */}
            <motion.div 
              variants={fadeRight} 
              className="mt-12 p-6 rounded-3xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 backdrop-blur-md relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-slate-300 italic leading-relaxed">
                  "The 'Convenience Tax' scanner saved me $40k on a property that looked like a deal but had hidden HOA spikes. The most transparent platform I've ever used."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-xs font-bold text-white">
                    JD
                  </div>
                  <span className="text-sm font-semibold text-white">James D. — Investor</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Glassmorphism Form */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <form className="relative bg-slate-900/40 backdrop-blur-xl p-8 sm:p-10 rounded-[2rem] border border-slate-800 shadow-2xl overflow-hidden group">
              {/* Form Hover Glow Reveal */}
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-[#0a0f1c]/50 rounded-xl border border-slate-800 px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-[#0a0f1c]/50 rounded-xl border border-slate-800 px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-300" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">How can we help?</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your real estate goals..."
                    className="w-full bg-[#0a0f1c]/50 rounded-xl border border-slate-800 px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none" 
                  />
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
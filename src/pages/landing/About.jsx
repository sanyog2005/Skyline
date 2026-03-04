import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingDown, Cpu, ArrowRight } from 'lucide-react';

const features = [
  { 
    name: 'AI Price Prediction', 
    desc: 'Our proprietary neural networks analyze micro-local trends to forecast real estate shifts with 94% accuracy.', 
    icon: <Cpu className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-400"
  },
  { 
    name: 'Zero Hidden Fees', 
    desc: 'We aggregate granular delivery, tax, and service data to reveal the true cost of living before you sign.', 
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-400"
  },
  { 
    name: 'Market Arbitrage', 
    desc: 'Identify hyper-local price dislocations. Find properties priced below their neighborhood yield curve.', 
    icon: <TrendingDown className="text-blue-600" />, 
    icon: <TrendingDown className="w-6 h-6" />,
    color: "from-emerald-500 to-teal-400"
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function About() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#030712] selection:bg-blue-500/30">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20"
          >
            The Future of Real Estate
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            More than just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">listing site.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-slate-400"
          >
            We leverage high-frequency data and machine learning to give you an unfair advantage in the housing market.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.name}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Card Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className={`mb-6 inline-flex p-3 rounded-2xl bg-gradient-to-br ${f.color} text-white shadow-lg shadow-blue-500/20`}>
                {f.icon}
              </div>

              <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                {f.name}
              </h3>
              
              <p className="mt-4 text-slate-400 leading-relaxed">
                {f.desc}
              </p>

              <div className="mt-6 flex items-center text-sm font-medium text-blue-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
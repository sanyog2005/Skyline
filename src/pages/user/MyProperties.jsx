import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Bed, Bath, Square, Heart, TrendingUp, Filter, Sparkles } from 'lucide-react';

// Mock Data for Properties
const properties = [
  {
    id: 1,
    title: 'Penthouse Loft with Skyline View',
    address: '1423 Downtown Ave, San Francisco',
    price: '$5,200',
    type: 'Rent',
    beds: 2,
    baths: 2,
    sqft: 1450,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    aiInsight: 'Underpriced 8%',
    isFavorite: true,
  },
  {
    id: 2,
    title: 'Modern Minimalist Villa',
    address: '88 Tech Corridor, Palo Alto',
    price: '$2.4M',
    type: 'Buy',
    beds: 4,
    baths: 3.5,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
    aiInsight: 'High Yield Potential',
    isFavorite: false,
  },
  {
    id: 3,
    title: 'Renovated Historic Townhouse',
    address: '45 Artisan District, Brooklyn',
    price: '$3,800',
    type: 'Rent',
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200',
    aiInsight: 'Low Convenience Tax',
    isFavorite: false,
  }
];

export default function Listings() {
  const [filter, setFilter] = useState('All');

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  const filteredProperties = filter === 'All' 
    ? properties 
    : properties.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-32 px-6 lg:px-8 relative selection:bg-blue-500/30">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header & Filter Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Explore Properties</h1>
            <p className="mt-2 text-slate-400 text-lg">AI-vetted listings with verified market data.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-slate-900/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-800"
          >
            {['All', 'Rent', 'Buy'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  filter === tab 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {tab}
              </button>
            ))}
            <div className="w-px h-8 bg-slate-800 mx-2" />
            <button className="p-2.5 text-slate-400 hover:text-white transition-colors bg-slate-800/50 rounded-xl hover:bg-slate-700">
              <Filter size={18} />
            </button>
          </motion.div>
        </div>

        {/* Property Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={{ y: -8 }}
                className="group relative bg-slate-900/40 backdrop-blur-xl rounded-[2rem] border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                    <div className="flex flex-col gap-2">
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md text-white border border-white/20 uppercase tracking-wider">
                        {property.type}
                      </span>
                    </div>
                    <button className={`p-2.5 rounded-full backdrop-blur-md border transition-all duration-300 ${property.isFavorite ? 'bg-rose-500/20 border-rose-500/50 text-rose-500' : 'bg-white/10 border-white/20 text-white hover:bg-white/20'}`}>
                      <Heart size={18} className={property.isFavorite ? 'fill-rose-500' : ''} />
                    </button>
                  </div>

                  {/* AI Insight Badge */}
                  <div className="absolute bottom-5 left-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-400 text-xs font-semibold shadow-lg shadow-emerald-900/20">
                    <Sparkles size={12} />
                    {property.aiInsight}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">
                        {property.title}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-2 text-slate-400 text-sm">
                        <MapPin size={16} className="text-indigo-400 shrink-0" />
                        <span className="truncate">{property.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* Specs Row */}
                  <div className="flex items-center justify-between py-4 border-y border-slate-800/60 mb-6">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Bed size={18} className="text-slate-500" />
                      <span className="font-medium">{property.beds} <span className="text-slate-500 text-sm">Beds</span></span>
                    </div>
                    <div className="w-px h-4 bg-slate-800" />
                    <div className="flex items-center gap-2 text-slate-300">
                      <Bath size={18} className="text-slate-500" />
                      <span className="font-medium">{property.baths} <span className="text-slate-500 text-sm">Baths</span></span>
                    </div>
                    <div className="w-px h-4 bg-slate-800" />
                    <div className="flex items-center gap-2 text-slate-300">
                      <Square size={18} className="text-slate-500" />
                      <span className="font-medium">{property.sqft} <span className="text-slate-500 text-sm">Sqft</span></span>
                    </div>
                  </div>

                  {/* Footer / Action */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">Price</p>
                      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                        {property.price}
                        {property.type === 'Rent' && <span className="text-sm font-normal text-slate-500">/mo</span>}
                      </p>
                    </div>
                    <button className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </div>
  );
}
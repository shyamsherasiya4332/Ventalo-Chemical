'use client';

import React from 'react';
import { ArrowRight, Sparkles, Plus } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProductCard = ({ title, description, benefits, link, image }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm"
        >
            <Link href={link || '/products'} className="absolute inset-0 z-30" />
            
            {/* Image section with premium background */}
            <div className="relative aspect-[4/3] overflow-hidden bg-[#0A2540]/50 group-hover:bg-transparent transition-colors duration-700">
                {/* Abstract texture */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020617] to-transparent z-10" />
                
                {image ? (
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain p-12 relative z-20 group-hover:scale-110 transition-transform duration-1000"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/5 font-black text-6xl rotate-12 uppercase select-none">
                        Ventalo
                    </div>
                )}

                {/* Status Indicator */}
                <div className="absolute top-8 left-8 z-20">
                    <div className="px-4 py-1.5 rounded-full bg-ventalo-orange/10 border border-ventalo-orange/20 backdrop-blur-md">
                        <span className="text-[10px] font-black tracking-widest text-ventalo-orange uppercase">Industrial Grade</span>
                    </div>
                </div>

                {/* Floating Add Icon */}
                <div className="absolute top-8 right-8 z-20 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                        <Plus size={18} />
                    </div>
                </div>
            </div>

            {/* Content section */}
            <div className="p-8 flex flex-col flex-grow relative bg-[#020617] z-20">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-ventalo-orange transition-colors duration-300">
                        {title}
                    </h3>
                </div>

                <p className="text-white/40 text-sm mb-8 line-clamp-2 font-light leading-relaxed">
                    {description}
                </p>

                {benefits && (
                    <div className="mt-auto flex flex-wrap gap-2">
                        {benefits.slice(0, 2).map((benefit, i) => (
                            <span key={i} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60">
                                {benefit}
                            </span>
                        ))}
                    </div>
                )}

                {/* Footer Interaction */}
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black tracking-[0.2em] uppercase text-white/30 group-hover:text-ventalo-orange transition-all duration-500">
                        View Specifications
                    </span>
                    <ArrowRight size={16} className="text-white/20 group-hover:text-ventalo-orange group-hover:translate-x-1 transition-all duration-500" />
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;

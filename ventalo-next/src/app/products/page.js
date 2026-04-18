"use client";
import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '@/components/ProductCard';
import { Box, Package, Globe, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/data/products';

export default function Products() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div className="bg-[#020617] text-white min-h-screen">
            {/* Massive Cinematic Header */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent z-10" />
                <img 
                    src="https://images.unsplash.com/photo-1541888941295-184a621d90c5?q=80&w=2070&auto=format&fit=crop" 
                    alt="Industrial" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale"
                />
                
                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="subheading-premium">THE COLLECTION</span>
                        <h1 className="heading-jumbo mb-8 !text-7xl md:!text-9xl">Precision <span className="text-gradient-orange">Matrix</span></h1>
                        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                            Discover our comprehensive spectrum of molecular-engineered construction solutions. 
                            Strength, durability, and innovation in every bag.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Product Grid System */}
            <div className="container mx-auto px-6 pb-40">
                {products.map((category, idx) => (
                    <motion.div 
                        key={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                        className="mb-40 last:mb-0"
                    >
                        <motion.div variants={itemVariants} className="flex items-end justify-between mb-16 border-b border-white/5 pb-8">
                            <div>
                                <div className="flex items-center gap-4 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-ventalo-orange" />
                                    <span className="text-[10px] font-black tracking-[0.4em] uppercase text-white/30">CATEGORY {idx + 1}</span>
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">{category.category}</h2>
                            </div>
                            <div className="hidden md:block text-[10px] font-black tracking-widest text-white/20 uppercase">
                                {category.items.length} MODELS AVAILABLE
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {category.items.map((product, pIdx) => (
                                <ProductCard
                                    key={pIdx}
                                    title={product.title}
                                    description={product.description}
                                    benefits={product.benefits}
                                    image={product.image}
                                    link={`/products/${product.id}`}
                                />
                            ))}
                        </div>
                    </motion.div>
                ))}

                {/* Industrial Partnership CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-40 relative rounded-[3rem] overflow-hidden bg-white group cursor-default"
                >
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform origin-top-right transition-transform duration-1000 group-hover:translate-x-10" />
                    
                    <div className="relative z-10 p-12 md:p-24 flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="lg:w-2/3">
                            <span className="text-xs font-black tracking-[0.3em] uppercase text-ventalo-orange mb-4 block">OEM & EXPORT SOLUTIONS</span>
                            <h3 className="text-4xl md:text-6xl font-bold text-ventalo-blue mb-8 tracking-tighter leading-none">
                                Global Supply Chain <br /><span className="text-slate-400">Integration Available.</span>
                            </h3>
                            <p className="text-lg text-slate-500 max-w-xl mb-10 font-light leading-relaxed">
                                We offer white-label manufacturing and high-volume container logistics for 
                                international distributors. Partner with Morbi's technological leader.
                            </p>
                            <div className="flex flex-wrap gap-8">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-ventalo-orange" size={24} strokeWidth={1.5} />
                                    <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Certified Origin</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Zap className="text-ventalo-orange" size={24} strokeWidth={1.5} />
                                    <span className="text-sm font-bold text-slate-700 uppercase tracking-widest">Rapid Synthesis</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/3 flex justify-center lg:justify-end">
                            <Link href="/contact" className="group flex items-center gap-6">
                                <span className="text-sm font-black tracking-widest uppercase text-ventalo-blue group-hover:text-ventalo-orange transition-colors">Start Inquiry</span>
                                <div className="w-20 h-20 rounded-full bg-ventalo-blue flex items-center justify-center text-white group-hover:bg-ventalo-orange transition-all duration-500 shadow-2xl shadow-ventalo-blue/20">
                                    <ArrowRight size={32} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

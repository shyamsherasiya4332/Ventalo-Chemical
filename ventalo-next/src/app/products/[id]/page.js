'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Download, Share2, MessageSquare, ArrowRight, ShieldCheck, Zap, Droplets, ChevronRight, ExternalLink } from 'lucide-react';
import { products } from '@/data/products';

export default function ProductDetails() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id;

    const allProducts = products.flatMap(category => category.items);
    const product = allProducts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    const handleShare = async () => {
        const shareData = {
            title: product?.title,
            text: `Check out ${product?.title} by Ventalo Chemical`,
            url: window.location.href,
        };

        if (navigator.share) {
            try { await navigator.share(shareData); } catch (err) { console.log(err); }
        } else {
            window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`, '_blank');
        }
    };

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#020617] text-white">
                <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
                <Link href="/products" className="text-ventalo-orange hover:underline flex items-center gap-2">
                    <ArrowLeft size={20} /> Back to Matrix
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-[#020617] text-white min-h-screen selection:bg-ventalo-orange">
            {/* Header / Breadcrumb */}
            <div className="container mx-auto px-6 pt-32 pb-12">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-6"
                >
                    <button 
                        onClick={() => router.back()}
                        className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#020617] transition-all duration-500"
                    >
                        <ArrowLeft size={18} />
                    </button>
                    <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.2em] uppercase text-white/30">
                        <Link href="/products" className="hover:text-white transition-colors">MATRIX</Link>
                        <ChevronRight size={12} />
                        <span className="text-white/60">{product.title}</span>
                    </div>
                </motion.div>
            </div>

            <div className="container mx-auto px-6 pb-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    
                    {/* Visual Section */}
                    <div className="lg:col-span-6">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="sticky top-40"
                        >
                            <div className="aspect-square glass-card-dark rounded-[3rem] p-12 flex items-center justify-center relative group overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-ventalo-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                <img 
                                    src={product.image} 
                                    alt={product.title} 
                                    className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-1000 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <button onClick={handleShare} className="flex items-center justify-center gap-3 py-5 rounded-2xl bg-white/5 border border-white/10 text-xs font-black tracking-widest uppercase hover:bg-white/10 transition-all">
                                    <Share2 size={16} className="text-ventalo-orange" /> SHARE MODULE
                                </button>
                                <a href={product.image} target="_blank" className="flex items-center justify-center gap-3 py-5 rounded-2xl bg-white/5 border border-white/10 text-xs font-black tracking-widest uppercase hover:bg-white/10 transition-all">
                                    <Download size={16} className="text-ventalo-orange" /> BLUEPRINT PDF
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Meta Section */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="flex gap-3 mb-8">
                                <span className="text-[10px] font-black tracking-[0.2em] uppercase px-4 py-2 rounded-full bg-ventalo-orange/10 border border-ventalo-orange/20 text-ventalo-orange">HIGH PERFORMANCE</span>
                                <span className="text-[10px] font-black tracking-[0.2em] uppercase px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/40">INDUSTRIAL GRADE</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 leading-none">
                                {product.title}
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed mb-16 border-l-2 border-ventalo-orange pl-8">
                                {product.fullDescription || product.description}
                            </p>

                            {/* Core Benefits */}
                            <div className="mb-20">
                                <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-white/30 mb-8">TECHNICAL ADVANTAGES</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {product.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-all">
                                            <div className="w-8 h-8 rounded-full border border-ventalo-orange/30 flex items-center justify-center text-ventalo-orange group-hover:bg-ventalo-orange group-hover:text-white transition-all">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-bold tracking-tight text-white/60">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Specifications */}
                            {product.features && (
                                <div className="mb-20">
                                    <h3 className="text-[10px] font-black tracking-[0.4em] uppercase text-white/30 mb-8">SPECIFICATIONS</h3>
                                    <div className="rounded-[2rem] border border-white/5 overflow-hidden">
                                        {product.features.map((feature, i) => (
                                            <div key={i} className="flex justify-between items-center p-6 border-b border-white/5 last:border-0 hover:bg-white/5 transition-all group">
                                                <span className="text-xs font-bold text-white/20 uppercase tracking-widest">{feature.title}</span>
                                                <span className="text-sm font-black text-white">{feature.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Contact Action */}
                            <div className="pt-12 border-t border-white/10">
                                <Link
                                    href={`/contact?product=${encodeURIComponent(product.title)}`}
                                    className="group relative flex items-center justify-between p-8 rounded-[2rem] bg-white text-ventalo-blue overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-95"
                                >
                                    <div className="relative z-10">
                                        <span className="text-[10px] font-black tracking-[0.4em] uppercase text-ventalo-blue/40 block mb-1">INQUIRY LINE</span>
                                        <span className="text-xl font-black uppercase">Technical Consultation</span>
                                    </div>
                                    <div className="w-16 h-16 rounded-full bg-ventalo-blue text-white flex items-center justify-center group-hover:bg-ventalo-orange transition-all duration-500 relative z-10">
                                        <ArrowRight size={24} />
                                    </div>
                                    <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 transform origin-top-right transition-transform duration-1000 group-hover:translate-x-10" />
                                </Link>
                                
                                <div className="flex gap-8 mt-8 justify-center lg:justify-start">
                                    <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white/20">
                                        <ShieldCheck size={14} className="text-ventalo-orange" /> CERTIFIED
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white/20">
                                        <Droplets size={14} className="text-ventalo-orange" /> WATERPROOF
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-white/20">
                                        <Zap size={14} className="text-ventalo-orange" /> HIGH-SPEED
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Recommendation Matrix */}
                <div className="mt-40 pt-40 border-t border-white/5">
                    <div className="flex items-end justify-between mb-20">
                        <div>
                            <span className="subheading-premium">RELATED MODULES</span>
                            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Recommended Matrix</h2>
                        </div>
                        <Link href="/products" className="hidden md:flex items-center gap-4 text-xs font-black tracking-widest uppercase text-white/40 hover:text-ventalo-orange transition-all">
                            VIEW FULL COLLECTION <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {allProducts
                            .filter(p => p.id !== product.id)
                            .slice(0, 3)
                            .map((p, i) => (
                                <Link key={i} href={`/products/${p.id}`} className="group glass-card-dark p-8 rounded-[2.5rem] hover:shadow-[0_0_80px_-20px_rgba(249,115,22,0.2)] transition-all duration-700">
                                    <div className="aspect-square bg-[#0A2540]/50 rounded-[2rem] p-8 mb-8 flex items-center justify-center relative overflow-hidden">
                                        <img src={p.image} className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-1000" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-3 group-hover:text-ventalo-orange transition-colors">{p.title}</h4>
                                    <div className="flex items-center text-[10px] font-black tracking-widest text-white/20 transition-all group-hover:text-white group-hover:gap-4 gap-2 uppercase">
                                        SPECIFICATIONS <ArrowRight size={14} />
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

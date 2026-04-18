"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home, Building2, Factory, Bath, ArrowRight, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Applications() {
    const { scrollYProgress } = useScroll();
    const yOffset = useTransform(scrollYProgress, [0, 1], [0, -100]);

    const industries = [
        {
            icon: <Home size={32} strokeWidth={1} />,
            title: "RESIDENTIAL",
            subtitle: "DOMESTIC PRECISION",
            description: "High-spec bonding for modern living spaces. Engineered for durability in kitchens, luxury bathrooms, and high-finish tiling projects.",
            uses: ["Ceramic tiling", "Kitchen backsplashes", "Bathroom waterproofing"],
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
        },
        {
            icon: <Building2 size={32} strokeWidth={1} />,
            title: "COMMERCIAL",
            subtitle: "ENTERPRISE SCALE",
            description: "Maximum output infrastructure. Heavy-duty matrix systems for shopping malls, airports, and high-traffic corporate developments.",
            uses: ["Large format tiles", "High traffic flooring", "Facade cladding"],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        },
        {
            icon: <Factory size={32} strokeWidth={1} />,
            title: "INDUSTRIAL",
            subtitle: "EXTREME RESILIENCE",
            description: "Chemical-resistant molecular bonding for severe environments. Optimized for factories, hazardous storage, and heavy machinery zones.",
            uses: ["Acid resistant grouting", "Heavy machinery floors", "Vibration resistance"],
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
        },
        {
            icon: <Bath size={32} strokeWidth={1} />,
            title: "WET AREAS",
            subtitle: "AQUATIC INTEGRITY",
            description: "Zero-permeability solutions for water features and pools. Advanced waterproof matrixes that withstand constant immersion.",
            uses: ["Swimming pools", "Water tanks", "Spa & Sauna"],
            image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
        }
    ];

    return (
        <div className="bg-[#020617] text-white overflow-x-hidden selection:bg-ventalo-orange">
            {/* Cinematic Header */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: yOffset }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent z-10" />
                    <img 
                        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop" 
                        alt="Infrastructure" 
                        className="w-full h-[120%] object-cover opacity-20 filter grayscale scale-110"
                    />
                </motion.div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="subheading-premium">DEPLOYMENT SCOPE</span>
                        <h1 className="heading-jumbo !text-7xl md:!text-9xl tracking-tighter">Versatile <br /><span className="text-gradient-orange italic">Applications</span></h1>
                        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                            Engineered versatility for every architectural blueprint. 
                            Ventalo matrixes adapt to any structural requirement.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industry Matrix Grid */}
            <section className="py-40">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col gap-40">
                        {industries.map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1 }}
                                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20 group`}
                            >
                                {/* Media Section */}
                                <div className="lg:w-1/2 relative aspect-[4/3] rounded-[3rem] overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent z-10 opacity-60" />
                                    <img 
                                        src={item.image} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:scale-110 group-hover:grayscale-0" 
                                    />
                                    <div className="absolute top-10 left-10 z-20">
                                        <div className="w-20 h-20 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-ventalo-orange group-hover:bg-ventalo-orange group-hover:text-white transition-all duration-500 shadow-2xl">
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="lg:w-1/2">
                                    <span className="text-[10px] font-black tracking-[0.4em] text-white/20 uppercase mb-4 block group-hover:text-ventalo-orange transition-colors duration-500">{item.subtitle}</span>
                                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
                                        {item.title}
                                    </h2>
                                    <p className="text-lg text-white/40 font-light mb-12 leading-relaxed max-w-xl">
                                        {item.description}
                                    </p>
                                    
                                    <div className="space-y-6 mb-16">
                                        {item.uses.map((use, uIdx) => (
                                            <div key={uIdx} className="flex items-center gap-4 group/item">
                                                <div className="w-5 h-5 rounded-full border border-ventalo-orange/30 flex items-center justify-center text-ventalo-orange group-hover/item:bg-ventalo-orange group-hover/item:text-white transition-all">
                                                    <CheckCircle2 size={12} strokeWidth={3} />
                                                </div>
                                                <span className="text-sm font-bold tracking-widest text-white/50">{use}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link href="/products" className="group/btn inline-flex items-center gap-6">
                                        <span className="text-xs font-black tracking-[0.2em] uppercase text-white hover:text-ventalo-orange transition-all">Explore Solutions</span>
                                        <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover/btn:bg-ventalo-orange group-hover/btn:scale-110 transition-all">
                                            <ArrowRight size={20} />
                                        </div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Capability Bar */}
            <section className="py-24 bg-white text-ventalo-dark">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: ShieldCheck, title: "Precision", val: "ISO 9001" },
                            { icon: Zap, title: "Synthesis", val: "Rapid R&D" },
                            { icon: Factory, title: "Capacity", val: "Morbi HQ" },
                            { icon: Globe, title: "Logistics", val: "Pan India" }
                        ].map((stat, i) => (
                            <div key={i} className="flex items-center gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-ventalo-orange">
                                    <stat.icon size={24} strokeWidth={1} />
                                </div>
                                <div>
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block">{stat.title}</span>
                                    <span className="text-xl font-bold tracking-tight">{stat.val}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Matrix */}
            <section className="py-60 text-center relative overflow-hidden bg-noise">
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-6xl md:text-9xl font-black mb-12 tracking-tighter leading-none">Your Specs <br /><span className="text-gradient-orange italic">Our Bond.</span></h2>
                    <Link href="/contact" className="inline-flex items-center gap-6 px-16 py-8 rounded-full bg-white text-ventalo-blue font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-2xl">
                        Technical Inquiry
                        <ArrowRight size={20} />
                    </Link>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.1),transparent_70%)] pointer-events-none" />
            </section>
        </div>
    );
}

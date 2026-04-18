"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, Truck, Check, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
    const { scrollYProgress } = useScroll();
    const yOffset = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <div className="bg-[#020617] text-white overflow-x-hidden selection:bg-ventalo-orange">
            {/* Immersive Header */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: yOffset }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent z-10" />
                    <img 
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                        alt="Manufacturing Center" 
                        className="w-full h-[120%] object-cover opacity-30 grayscale"
                    />
                </motion.div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="subheading-premium">OUR LEGACY</span>
                        <h1 className="heading-jumbo !text-7xl md:!text-9xl mb-10 tracking-tighter">Molecular <br /><span className="text-gradient-orange italic">Strength</span></h1>
                        <p className="text-xl md:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed">
                            Established in 2022, Ventalo Chemical redefined the industrial standard for construction adhesives in Morbi. 
                            We don&apos;t just bond tiles; we blueprint stability.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[2px] h-20 bg-gradient-to-b from-ventalo-orange to-transparent opacity-50" />
            </section>

            {/* Core Narrative */}
            <section className="py-40 relative bg-noise">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="subheading-premium">The Innovation Hub</span>
                            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter leading-none">
                                Engineering The <br /><span className="text-ventalo-orange">Invisible.</span>
                            </h2>
                            <p className="text-lg text-white/40 font-light mb-8 leading-relaxed max-w-xl">
                                Ventalo Chemical is a catalyst for change in the ceramic heartland of Gujarat. 
                                We synthesize high-performance matrixes that transform standard construction into reinforced architecture.
                            </p>
                            <div className="space-y-6 mb-12">
                                {[
                                    "Hyper-reactive polymer synthesis",
                                    "Extreme tensile strength certifications",
                                    "Sustainable molecular architecture"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="w-6 h-6 rounded-full border border-ventalo-orange/30 flex items-center justify-center group-hover:bg-ventalo-orange transition-all">
                                            <Check size={12} className="text-ventalo-orange group-hover:text-white" />
                                        </div>
                                        <span className="text-sm font-bold tracking-widest text-white/60">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scale-95 lg:scale-100">
                            {[
                                { icon: Target, title: "Mission", desc: "Synthesizing strength for modern architecture." },
                                { icon: Eye, title: "Vision", desc: "Defining the global standard of bond integrity." },
                                { icon: ShieldCheck, title: "Precision", desc: "Uncompromising ISO-certified quality control." },
                                { icon: Zap, title: "Speed", desc: "Rapid innovation cycle and logistics." }
                            ].map((pillar, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass-card-dark p-10 group hover:shadow-[0_0_80px_-20px_rgba(249,115,22,0.2)]"
                                >
                                    <pillar.icon className="text-ventalo-orange mb-8 group-hover:scale-110 transition-transform duration-500" size={32} strokeWidth={1} />
                                    <h4 className="text-xl font-bold mb-4 tracking-tight">{pillar.title}</h4>
                                    <p className="text-xs text-white/30 leading-relaxed font-light">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Industrial Magnitude Section */}
            <section className="py-40 bg-white text-ventalo-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform origin-top-right -z-10" />
                
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="subheading-premium">Operational Scale</span>
                        <h2 className="text-5xl md:text-8xl font-black mb-24 tracking-tighter">Expanding <span className="text-ventalo-orange italic">Boundaries.</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { icon: Truck, label: "PAN INDIA", val: "50+ Cities", desc: "Integrated logistics matrix serving the nation." },
                            { icon: Globe, label: "GLOBAL EXPORT", val: "12+ Nations", desc: "Delivering Morbi's excellence to the world stage." },
                            { icon: Award, label: "ISO CERTIFIED", val: "100% Quality", desc: "Rigorous international manufacturing standards." }
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-24 h-24 rounded-[2rem] bg-slate-100 flex items-center justify-center text-ventalo-orange mb-8 shadow-xl shadow-black/5">
                                    <stat.icon size={40} strokeWidth={1} />
                                </div>
                                <span className="text-[10px] font-black tracking-[0.4em] text-slate-400 mb-2">{stat.label}</span>
                                <h4 className="text-4xl font-bold mb-4 tracking-tighter">{stat.val}</h4>
                                <p className="text-slate-500 font-light max-w-[200px]">{stat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Artifact CTA */}
            <section className="py-40 bg-noise relative text-center">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">Your Vision <br /><span className="text-gradient-orange">Our Matrix.</span></h2>
                        <Link href="/contact" className="inline-flex items-center gap-6 px-12 py-6 rounded-full bg-white text-ventalo-blue font-black tracking-[0.2em] uppercase text-xs hover:bg-white hover:shadow-[0_0_80px_-20px_rgba(255,255,255,0.4)] transition-all">
                            Partner With Us
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

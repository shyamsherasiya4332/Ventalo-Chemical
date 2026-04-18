"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Shield, Zap, Globe, CheckCircle, Award, Compass, Layers } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
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
    <div className="bg-[#020617] text-white selection:bg-ventalo-orange selection:text-white">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617] z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-transparent z-10" />
          <img 
            src="/assets/hero.png" 
            alt="Premium Architecture" 
            className="w-full h-[120%] object-cover opacity-60 mix-blend-luminosity"
          />
        </motion.div>

        {/* Floating Geometric Elements */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-ventalo-orange/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] animate-float" />

        <motion.div 
          style={{ opacity, scale }}
          className="container mx-auto px-6 relative z-20"
        >
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-5xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8 group cursor-default">
              <span className="flex h-2 w-2 rounded-full bg-ventalo-orange animate-pulse" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors">EST. 2022 | MORBI, INDIA</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="heading-jumbo mb-8">
              Bonding <br />
              <span className="text-gradient-orange">The Future</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-12 font-light tracking-wide">
              Ventalo Chemical pioneers the next generation of construction adhesives. 
              Engineering strength through molecular innovation and industrial precision.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6">
              <Link href="/products" className="relative group overflow-hidden bg-ventalo-orange text-white px-10 py-5 rounded-full font-black tracking-widest uppercase text-sm hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] transition-all flex items-center justify-center gap-3">
                <span className="relative z-10">Discover Collection</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out mix-blend-difference" />
              </Link>
              <Link href="/contact" className="px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-bold tracking-widest uppercase text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                Technical Inquiry
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase font-bold">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </section>

      {/* Trust Pillars */}
      <section className="py-32 relative bg-noise">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Precision", tag: "QUALITY FIRST", desc: "ISO 9001:2015 certified formulations delivering uncompromising bond strength." },
              { icon: Layers, title: "Performance", tag: "ADVANCED TECH", desc: "Polymer-modified matrix designed for extreme structural integrity." },
              { icon: Award, title: "Heritage", tag: "GLOBAL REACH", desc: "Merging technical innovation with the artisanal legacy of Morbi." }
            ].map((pillar, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="glass-card-dark p-10 group"
              >
                <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 w-fit group-hover:bg-ventalo-orange group-hover:text-white transition-all duration-500">
                  <pillar.icon size={32} strokeWidth={1} />
                </div>
                <span className="text-[10px] font-black tracking-[0.3em] text-ventalo-orange block mb-2">{pillar.tag}</span>
                <h3 className="text-3xl font-bold mb-4 tracking-tight">{pillar.title}</h3>
                <p className="text-white/40 leading-relaxed font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Innovation Section */}
      <section className="py-32 relative overflow-hidden bg-white text-ventalo-dark">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform origin-top-right -z-10" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group premium-border">
                <img 
                  src="/assets/factory.png" 
                  alt="Manufacturing Excellence" 
                  className="w-full h-auto transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-ventalo-blue/20 mix-blend-multiply" />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-3xl shadow-2xl hidden md:block border border-black/5">
                <div className="text-5xl font-black text-ventalo-orange">100%</div>
                <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">Quality Assurance</div>
              </div>
            </motion.div>

            <div className="lg:w-1/2">
              <span className="subheading-premium">Manufacturing Excellence</span>
              <h2 className="text-5xl md:text-7xl font-bold text-ventalo-blue mb-8 tracking-tighter leading-none">
                Science in Every <span className="text-ventalo-orange">Solution.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                Our Morbi facility leverages automated synthesis to create adhesives that perform under pressure. 
                Ventalo isn't just a chemical; it's the invisible infrastructure of your project.
              </p>
              
              <div className="space-y-4">
                {[
                  "Nano-polymer modification technology",
                  "Extreme weather structural testing",
                  "Automated chemical synthesis"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-ventalo-orange group-hover:bg-ventalo-orange group-hover:text-white transition-all">
                      <CheckCircle size={16} />
                    </div>
                    <span className="font-bold text-slate-700 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Link href="/about" className="inline-flex items-center gap-4 group">
                  <span className="text-sm font-black tracking-widest uppercase group-hover:text-ventalo-orange transition-colors">Our Innovation Story</span>
                  <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:border-ventalo-orange group-hover:bg-ventalo-orange/5 transition-all">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-32 bg-[#020617] relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-20">
            <div className="max-w-xl">
              <span className="subheading-premium">The Collection</span>
              <h2 className="text-5xl font-bold tracking-tighter">Engineered <br />For Professionals</h2>
            </div>
            <Link href="/products" className="hidden md:block text-xs font-bold tracking-widest uppercase underline underline-offset-8 hover:text-ventalo-orange transition-colors">
              Full Catalogue
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 'silver', title: "Silver Tech", tag: "CERAMIC CORE", img: "https://ventalochemical.com/upload/products/silver.png" },
              { id: 'gold', title: "Gold Matrix", tag: "VITRIFIED MAX", img: "https://ventalochemical.com/upload/products/gold.png" },
              { id: 'epoxy', title: "Titanium Epoxy", tag: "STAIN ZERO", img: "https://ventalochemical.com/upload/products/premium-epoxy.png" }
            ].map((p, i) => (
              <Link href={`/products`} key={i} className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 block">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover p-12 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10">
                  <span className="text-[10px] font-black tracking-[0.3em] text-ventalo-orange mb-2 block">{p.tag}</span>
                  <h4 className="text-3xl font-bold">{p.title}</h4>
                </div>
                <div className="absolute top-10 right-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                  <ArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Massive CTA */}
      <section className="py-40 relative overflow-hidden text-center bg-noise">
        <motion.div 
          style={{ y: y2 }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-black text-white/5 whitespace-nowrap hidden lg:block"
        >
          VENTALO
        </motion.div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-none">
              Start The <br />
              <span className="text-gradient-orange italic">Bond.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/40 mb-12 font-light">
              Elevate your next project with industrial grade precision. 
              Our technical consultants are ready to blueprint your solution.
            </p>
            <Link href="/contact" className="inline-block bg-white text-ventalo-blue px-12 py-6 rounded-full font-black tracking-widest uppercase text-sm hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] transition-all transform hover:-translate-y-1">
              Connect With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

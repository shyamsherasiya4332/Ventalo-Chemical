'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare, ArrowRight, Instagram, Linkedin, Facebook, Loader2, CheckCircle, XCircle, Globe, ShieldCheck } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { sendEmail } from '@/utils/emailService';

function ContactContent() {
    const searchParams = useSearchParams();
    const [subject, setSubject] = useState('Product Inquiry');
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        const product = searchParams.get('product');
        const type = searchParams.get('type');
        if (product) setSubject(`Inquiry for ${product}`);
        else if (type === 'quote') setSubject('Request for Quotation');
    }, [searchParams]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const result = await sendEmail(form.current);
        setSubmitStatus(result.success ? 'success' : 'error');
        if (result.success) form.current.reset();
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    return (
        <div className="bg-[#020617] text-white min-h-screen selection:bg-ventalo-orange">
            {/* Cinematic Header */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617] z-10" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ventalo-orange/50 to-transparent z-20" />
                
                <img 
                    src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop" 
                    alt="Contact" 
                    className="absolute inset-0 w-full h-full object-cover opacity-20 filter grayscale"
                />

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="subheading-premium">COMMUNICATION HUB</span>
                        <h1 className="heading-jumbo mb-8 !text-7xl md:!text-9xl tracking-tighter">Global <span className="text-gradient-orange">Nexus.</span></h1>
                        <p className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
                            Initialize a direct link with our technical engineering team. 
                            From bulk procurement to custom synthesis inquiries.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-6 pb-40">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    
                    {/* Information Sidebar */}
                    <div className="lg:col-span-5">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card-dark p-12 lg:p-16 h-full border border-white/5 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-ventalo-orange/5 rounded-full blur-[100px] group-hover:bg-ventalo-orange/10 transition-colors duration-1000" />
                            
                            <h3 className="text-4xl font-bold mb-12 tracking-tighter">Primary <br />Infrastructure.</h3>
                            
                            <div className="space-y-12 relative z-10">
                                <a href="#" className="flex gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-ventalo-orange group-hover/item:bg-ventalo-orange group-hover/item:text-white transition-all duration-500">
                                        <MapPin size={24} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/20 mb-2 block">GEOLOCALIZATION</span>
                                        <p className="text-lg font-light text-white/60 leading-relaxed group-hover/item:text-white transition-colors">
                                            Pipali - Jetpar Road,<br /> Morbi-2 363642, Gujarat, India.
                                        </p>
                                    </div>
                                </a>

                                <a href="tel:+919979999087" className="flex gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-ventalo-orange group-hover/item:bg-ventalo-orange group-hover/item:text-white transition-all duration-500">
                                        <Phone size={24} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/20 mb-2 block">ENCRYPTED LINE</span>
                                        <p className="text-2xl font-bold tracking-widest">+91 99799 99087</p>
                                        <p className="text-[10px] font-black text-white/20 mt-2 uppercase">24/7 Priority Support Available</p>
                                    </div>
                                </a>

                                <a href="mailto:info@ventalochemical.com" className="flex gap-6 group/item">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-ventalo-orange group-hover/item:bg-ventalo-orange group-hover/item:text-white transition-all duration-500">
                                        <Mail size={24} strokeWidth={1} />
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/20 mb-2 block">DATA TRANSMISSION</span>
                                        <p className="text-lg font-bold group-hover/item:text-ventalo-orange transition-colors">info@ventalochemical.com</p>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-20 pt-12 border-t border-white/5 flex gap-4">
                                {[Facebook, Instagram, Linkedin, Globe].map((Icon, i) => (
                                    <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 hover:text-white hover:border-ventalo-orange transition-all duration-500">
                                        <Icon size={18} strokeWidth={1.5} />
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[3rem] p-12 lg:p-20 text-ventalo-dark relative overflow-hidden"
                        >
                            <div className="relative z-10 mb-16">
                                <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Initialize <span className="text-slate-400">Request.</span></h3>
                                <p className="text-lg text-slate-500 font-light">Complete the protocol below to begin consultation.</p>
                            </div>

                            {submitStatus && (
                                <motion.div 
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`mb-12 p-6 rounded-2xl flex items-center gap-4 ${submitStatus === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-100'}`}
                                >
                                    {submitStatus === 'success' ? <CheckCircle size={24} /> : <XCircle size={24} />}
                                    <p className="font-bold text-sm tracking-tight">{submitStatus === 'success' ? 'TRANSMISSION COMPLETE. EXPECT RESPONSE SHORTLY.' : 'TRANSMISSION ERROR. VERIFY NETWORK PROTOCOLS.'}</p>
                                </motion.div>
                            )}

                            <form className="space-y-10" ref={form} onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase">First Identification</label>
                                        <input name="first_name" required className="bg-slate-50 border-b-2 border-slate-100 py-4 px-2 outline-none focus:border-ventalo-orange transition-all font-bold text-lg" placeholder="Given Name" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Last Identification</label>
                                        <input name="last_name" required className="bg-slate-50 border-b-2 border-slate-100 py-4 px-2 outline-none focus:border-ventalo-orange transition-all font-bold text-lg" placeholder="Surname" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Transmission Endpoint</label>
                                        <input name="user_email" type="email" required className="bg-slate-50 border-b-2 border-slate-100 py-4 px-2 outline-none focus:border-ventalo-orange transition-all font-bold text-lg" placeholder="Email Address" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Direct Frequency</label>
                                        <input name="user_phone" className="bg-slate-50 border-b-2 border-slate-100 py-4 px-2 outline-none focus:border-ventalo-orange transition-all font-bold text-lg" placeholder="Phone Number" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Consultation Objective</label>
                                    <select 
                                        name="subject" 
                                        value={subject} 
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="bg-slate-50 border-b-2 border-slate-100 py-4 px-2 outline-none focus:border-ventalo-orange transition-all font-bold text-lg appearance-none"
                                    >
                                        <option>Product Inquiry</option>
                                        <option>Request for Quotation</option>
                                        <option>Export / Dealership</option>
                                        <option>Technical Support</option>
                                        <option>Other</option>
                                        {subject.startsWith('Inquiry for') && <option>{subject}</option>}
                                    </select>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Inquiry Payload</label>
                                    <textarea name="message" required rows={4} className="bg-slate-50 border-b-2 border-slate-100 py-4 px-2 outline-none focus:border-ventalo-orange transition-all font-bold text-lg resize-none" placeholder="Elaborate request details..."></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-between p-8 rounded-[2rem] bg-ventalo-blue text-white overflow-hidden transition-all duration-500 hover:bg-[#0a2540] group relative"
                                >
                                    <div className="relative z-10 flex items-center gap-6">
                                        {isSubmitting ? <Loader2 size={24} className="animate-spin" /> : <Send size={24} />}
                                        <span className="text-xl font-black uppercase tracking-widest">{isSubmitting ? 'Transmitting...' : 'Send Transmission'}</span>
                                    </div>
                                    <ArrowRight size={32} className="relative z-10 group-hover:translate-x-2 transition-transform" />
                                    <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top-right transition-transform duration-1000 group-hover:translate-x-10" />
                                </button>
                            </form>
                            
                            <div className="mt-12 flex justify-center gap-8">
                                <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-300">
                                    <ShieldCheck size={14} className="text-ventalo-orange" /> ENCRYPTED
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-300">
                                    <CheckCircle size={14} className="text-ventalo-orange" /> VERIFIED
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Contact() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#020617] flex items-center justify-center"><Loader2 className="animate-spin text-ventalo-orange" size={48} /></div>}>
            <ContactContent />
        </Suspense>
    );
}

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight, CornerRightDown } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#020617] text-white pt-32 pb-12 relative overflow-hidden border-t border-white/5">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-noise opacity-[0.02]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-ventalo-orange/50 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">
                    {/* Brand Meta */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-4 mb-10">
                            <img
                                src="/assets/logo.png"
                                alt="Ventalo"
                                className="h-12 w-auto brightness-0 invert"
                            />
                            <span className="text-2xl font-black tracking-tighter uppercase self-end mb-1">
                                Ventalo<span className="text-ventalo-orange">.</span>
                            </span>
                        </div>
                        <p className="text-xl text-white/40 font-light leading-relaxed mb-10 max-w-lg">
                            Pioneering the next generation of molecularly engineered construction adhesives. 
                            Ventalo delivers high-performance solutions for the modern blueprint.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-ventalo-orange hover:bg-white/5 transition-all duration-500">
                                    <Icon size={18} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-ventalo-orange mb-8">Navigation</h4>
                            <ul className="space-y-4">
                                {['Home', 'About Us', 'Products', 'Applications', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="text-sm font-bold text-white/40 hover:text-white transition-colors duration-300 flex items-center group">
                                            <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-ventalo-orange font-black">/</span>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-ventalo-orange mb-8">Solutions</h4>
                            <ul className="space-y-4">
                                {['Tile Adhesives', 'Epoxy Grouts', 'Waterproofing', 'Industrial Coats', 'Cleaners'].map((item) => (
                                    <li key={item}>
                                        <Link href="/products" className="text-sm font-bold text-white/40 hover:text-white transition-colors duration-300">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] font-black tracking-[0.4em] uppercase text-ventalo-orange mb-8">Global HQ</h4>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <MapPin size={20} className="text-ventalo-orange shrink-0" strokeWidth={1.5} />
                                    <span className="text-sm font-light text-white/40 leading-relaxed">
                                        Pipali - Jetpar Road,<br />
                                        Morbi-2 363642, Gujarat,<br />
                                        India.
                                    </span>
                                </div>
                                <div className="flex gap-4">
                                    <Phone size={20} className="text-ventalo-orange shrink-0" strokeWidth={1.5} />
                                    <span className="text-sm font-bold text-white tracking-widest">+91 99799 99087</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sub-Footer */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] font-black tracking-[0.2em] uppercase text-white/20">
                        © {new Date().getFullYear()} Ventalo Chemical Systems Intl.
                    </p>
                    
                    <div className="flex items-center gap-3 group cursor-default">
                        <div className="w-1.5 h-1.5 rounded-full bg-ventalo-orange" />
                        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/20 group-hover:text-white transition-colors">
                            Built by <span className="text-white">Shyam S. Sherasiya</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

export default Footer;

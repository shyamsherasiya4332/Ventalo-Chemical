"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, PhoneCall } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Applications', href: '/applications' },
        { name: 'Contact', href: '/contact' },
    ];

    const isDarkPage = pathname === '/' || pathname.startsWith('/about');

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`relative flex items-center justify-between transition-all duration-700 ${scrolled ? 'bg-[#020617]/80 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-3 shadow-2xl' : 'bg-transparent'}`}>
                    
                    {/* Logo Area */}
                    <Link href="/" className="flex items-center gap-4 group">
                        <div className="relative">
                            <img
                                src="/assets/logo.png"
                                alt="Ventalo"
                                className="h-8 md:h-10 w-auto transition-all duration-500 group-hover:scale-110"
                                style={{ filter: (scrolled || !isDarkPage) ? 'none' : 'brightness(0) invert(1)' }}
                            />
                        </div>
                        <span className={`text-xl font-black tracking-tighter uppercase transition-colors duration-500 ${(scrolled || !isDarkPage) ? 'text-white' : 'text-white'}`}>
                            Ventalo<span className="text-ventalo-orange">.</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-6 py-2 rounded-full text-[13px] font-black tracking-widest uppercase transition-all duration-300 relative group ${pathname === item.href 
                                    ? 'text-ventalo-orange bg-white/5' 
                                    : 'text-white/60 hover:text-white'}`}
                            >
                                {item.name}
                                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-ventalo-orange rounded-full transition-all duration-500 ${pathname === item.href ? 'opacity-100' : 'opacity-0'}`} />
                            </Link>
                        ))}
                    </div>

                    {/* Action Area */}
                    <div className="hidden lg:flex items-center gap-6">
                        <div className="h-8 w-px bg-white/10" />
                        <Link 
                            href="tel:+919876543210" 
                            className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                        >
                            <PhoneCall size={16} className="text-ventalo-orange" />
                            <span className="text-[11px] font-black tracking-widest uppercase">Support</span>
                        </Link>
                        <Link
                            href="/contact"
                            className="bg-ventalo-orange text-white px-8 py-3 rounded-full text-[11px] font-black tracking-widest uppercase hover:bg-white hover:text-ventalo-blue transition-all duration-500 shadow-xl shadow-ventalo-orange/20 active:scale-95"
                        >
                            Get A Quote
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/5 rounded-full transition-all"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 p-6 lg:hidden"
                    >
                        <div className="bg-[#020617] border border-white/10 rounded-[2rem] p-4 shadow-2xl overflow-hidden">
                            {navigation.map((item, idx) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`flex items-center justify-between p-6 rounded-2xl transition-all ${pathname === item.href ? 'bg-white/5 text-ventalo-orange' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
                                >
                                    <span className="text-xl font-black tracking-tighter uppercase">{item.name}</span>
                                    <ChevronRight size={18} />
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="block w-full bg-ventalo-orange text-white text-center py-6 rounded-2xl mt-4 font-black tracking-widest uppercase"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

export default Navbar;

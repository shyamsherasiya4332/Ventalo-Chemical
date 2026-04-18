"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsOpen(false);
    }, [pathname]);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Applications', href: '/applications' },
        { name: 'Contact', href: '/contact' },
    ];

    // Check if we are on a product detail page (e.g. /products/some-id)
    // differentiating from the main products listing page (/products)
    const isProductDetail = pathname.startsWith('/products/') && pathname !== '/products';

    // Force "scrolled" style (solid/glass background, dark text) on product detail pages
    // or when actually scrolled
    const effectiveScrolled = scrolled || isProductDetail;

    // Dynamic classes based on scroll state
    const navBackground = effectiveScrolled
        ? 'glass py-3'
        : 'bg-transparent py-6';

    // Links should be white on transparent background (hero), and gray/dark on scrolled (white) background
    const linkColor = effectiveScrolled
        ? 'text-gray-600 hover:text-ventalo-blue hover:bg-gray-50/80'
        : 'text-white/90 hover:text-white hover:bg-white/10';

    const activeLinkColor = effectiveScrolled
        ? 'text-ventalo-orange bg-orange-50 font-bold shadow-sm ring-1 ring-orange-100'
        : 'text-white bg-white/20 font-bold backdrop-blur-md shadow-inner border border-white/10';

    // Logo text needs to switch too
    const logoTextColor = effectiveScrolled ? 'text-ventalo-blue' : 'text-white';

    // Logo box background
    const logoBoxClass = effectiveScrolled
        ? 'bg-gradient-to-br from-ventalo-orange to-orange-600 shadow-lg'
        : 'bg-white/10 backdrop-blur-md border border-white/20 shadow-lg';

    // Mobile menu button color
    const menuButtonColor = effectiveScrolled
        ? 'text-gray-700 hover:bg-orange-50 hover:text-ventalo-orange'
        : 'text-white hover:bg-white/10';

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform ${navBackground}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-14 md:h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <img
                                src="/assets/logo.png"
                                alt="Ventalo Chemical"
                                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                style={{ filter: effectiveScrolled ? 'none' : 'brightness(0) invert(1)' }}
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${pathname === item.href ? activeLinkColor : linkColor}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className={`ml-6 pl-6 border-l ${effectiveScrolled ? 'border-gray-200' : 'border-white/20'}`}>
                            <Link
                                href="/contact?type=quote"
                                className={`px-6 py-2.5 rounded-full font-semibold shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 group text-sm transition-all duration-300 ${effectiveScrolled ? 'bg-ventalo-blue text-white hover:bg-ventalo-dark shadow-ventalo-blue/20' : 'bg-white text-ventalo-blue hover:bg-gray-100 shadow-black/20'}`}
                            >
                                Get a Quote
                                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-lg focus:outline-none transition-colors ${menuButtonColor}`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl transition-all duration-500 ease-in-out origin-top overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}>
                <div className="px-4 pt-4 pb-6 space-y-2 mt-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${pathname === item.href
                                ? 'bg-orange-50 text-ventalo-orange translate-x-1'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-ventalo-blue'
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact?type=quote"
                        className="block w-full text-center bg-ventalo-blue text-white px-4 py-3 rounded-xl text-base font-bold mt-4 shadow-lg active:scale-95 transition-transform"
                    >
                        Get a Quote
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

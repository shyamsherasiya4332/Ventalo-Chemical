import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-ventalo-blue text-white pt-12 pb-6 relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ventalo-orange/5 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center gap-4">
                            <img
                                src="/assets/logo.png"
                                alt="Ventalo Chemical"
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Leading manufacturer of high-performance tile adhesives, grouts, and construction chemicals. Engineered for durability and strength in Morbi, Gujarat.
                        </p>
                        <div className="flex space-x-3">
                            {[
                                { Icon: Facebook, link: 'https://www.facebook.com/ventalochemical' },
                                { Icon: Instagram, link: 'https://www.instagram.com/ventalochemical' },
                                { Icon: Linkedin, link: 'https://www.linkedin.com/company/ventalochemical' }
                            ].map(({ Icon, link }, idx) => (
                                <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ventalo-orange transition-all duration-300 transform hover:-translate-y-1 border border-white/5">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h3 className="text-base font-bold mb-4 text-white flex items-center gap-2">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', path: '/' },
                                { name: 'About Us', path: '/about' },
                                { name: 'Our Products', path: '/products' },
                                { name: 'Applications', path: '/applications' },
                                { name: 'Contact Us', path: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className="text-gray-400 hover:text-ventalo-orange text-xs transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <ArrowRight size={12} className="text-gray-600 group-hover:text-ventalo-orange transition-colors" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="lg:col-span-3">
                        <Link href="/products" className="inline-block group">
                            <h3 className="text-base font-bold mb-4 text-white flex items-center gap-2 group-hover:text-ventalo-orange transition-colors">
                                Our Products <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </h3>
                        </Link>
                        <ul className="space-y-2">
                            {[
                                { name: 'Platinum Adhesive', path: '/products/platinum-tile-adhesive' },
                                { name: 'Gold Adhesive', path: '/products/gold-tile-adhesive' },
                                { name: 'Epoxy Grout', path: '/products/premium-epoxy-grout' },
                                { name: 'SBR Latex (Waterproofing)', path: '/products/sbr-premium-latex' },
                                { name: 'Tiles Cleaner', path: '/products/tiles-cleaner' }
                            ].map((product) => (
                                <li key={product.name}>
                                    <Link
                                        href={product.path}
                                        className="text-gray-400 hover:text-ventalo-orange text-xs transition-all duration-300 flex items-center gap-2 group"
                                    >
                                        <ArrowRight size={12} className="text-gray-600 group-hover:text-ventalo-orange transition-colors" />
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="text-base font-bold mb-4 text-white flex items-center gap-2">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="https://www.google.com/maps/search/?api=1&query=Ventalo+Chemical+Pipali+Jetpar+Road+Morbi" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-ventalo-orange/20 transition-colors border border-white/5">
                                        <MapPin size={16} className="text-ventalo-orange" />
                                    </div>
                                    <span className="text-gray-400 text-xs group-hover:text-gray-200 transition-colors leading-relaxed">
                                        Pipali - Jetpar Road,<br />
                                        Morbi-2 363642,<br />
                                        Gujarat, India.
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919979999087" className="flex items-center gap-3 group">
                                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-ventalo-orange/20 transition-colors border border-white/5">
                                        <Phone size={16} className="text-ventalo-orange" />
                                    </div>
                                    <span className="text-gray-400 text-xs group-hover:text-gray-200 transition-colors font-medium">+91 99799 99087</span>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@ventalochemical.com" className="flex items-center gap-3 group">
                                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-ventalo-orange/20 transition-colors border border-white/5">
                                        <Mail size={16} className="text-ventalo-orange" />
                                    </div>
                                    <span className="text-gray-400 text-xs group-hover:text-white transition-colors group-hover:underline">info@ventalochemical.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Ventalo Chemical. All rights reserved.</p>
                    <div className="flex items-center gap-2 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-ventalo-orange group-hover:scale-125 transition-transform duration-300"></span>
                        <p className="text-gray-400 text-[10px] tracking-[0.15em] uppercase font-semibold group-hover:text-gray-200 transition-colors cursor-default">
                            Designed & Developed by <span className="text-ventalo-orange group-hover:text-white transition-colors">Shyam S. Sherasiya</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import { Home, Building2, Factory, Bath, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function Applications() {
    const industries = [
        {
            icon: <Home size={32} />,
            title: "Residential",
            description: "Perfect for kitchens, bathrooms, living rooms, and balconies in modern homes.",
            uses: ["Ceramic tiling", "Kitchen backsplashes", "Bathroom waterproofing"],
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            color: "text-emerald-500",
            bg: "bg-emerald-50",
            gradient: "from-emerald-500/20 to-emerald-500/5"
        },
        {
            icon: <Building2 size={32} />,
            title: "Commercial",
            description: "Heavy-duty solutions for malls, offices, hotels, and high-traffic public spaces.",
            uses: ["Large format tiles", "High traffic flooring", "Facade cladding"],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
            color: "text-blue-500",
            bg: "bg-blue-50",
            gradient: "from-blue-500/20 to-blue-500/5"
        },
        {
            icon: <Factory size={32} />,
            title: "Industrial",
            description: "Chemical resistant and high-strength adhesives for factories and warehouses.",
            uses: ["Acid resistant grouting", "Heavy machinery floors", "Vibration resistance"],
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
            color: "text-orange-500",
            bg: "bg-orange-50",
            gradient: "from-orange-500/20 to-orange-500/5"
        },
        {
            icon: <Bath size={32} />,
            title: "Wet Areas",
            description: "Specialized water-resistant solutions for swimming pools and water tanks.",
            uses: ["Swimming pools", "Water tanks", "Spa & Sauna"],
            image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop",
            color: "text-cyan-500",
            bg: "bg-cyan-50",
            gradient: "from-cyan-500/20 to-cyan-500/5"
        }
    ];

    return (
        <div className="bg-ventalo-light min-h-screen">
            {/* Hero Section */}
            <div className="bg-ventalo-blue text-white relative overflow-hidden min-h-[50vh] flex items-center pt-20">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-ventalo-blue/95 via-ventalo-blue/70 to-ventalo-blue/30"></div>

                {/* Animated Background Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-ventalo-orange/10 rounded-full blur-[120px] animate-float opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-float opacity-40" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pb-32">
                    <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-ventalo-orange font-bold text-sm mb-8 animate-fade-in shadow-lg">
                        <Building2 size={16} /> Industry Solutions
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight animate-[slide-up_1s_ease-out_forwards] leading-none">
                        Applications & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-ventalo-orange to-orange-300 relative">
                            Industries
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-ventalo-orange opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7538 4.29085 86.6859 -1.60523 197.989 2.11587" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed animate-[slide-up_1.2s_ease-out_0.2s_both]">
                        Versatile, high-performance solutions engineered for every construction requirement.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 -mt-32 relative z-20">
                <div className="grid grid-cols-1 gap-20">
                    {industries.map((item, idx) => (
                        <div key={idx} className="group glass-card rounded-[3rem] overflow-hidden transition-all duration-700 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white/60 flex flex-col md:flex-row min-h-[500px] isolate">
                            {/* Overlay Link */}
                            <Link href="/products" className="absolute inset-0 z-20">
                                <span className="sr-only">View Products for {item.title}</span>
                            </Link>

                            {/* Image Section */}
                            <div className={`w-full md:w-1/2 relative overflow-hidden min-h-[300px] md:min-h-full ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                                <div className="absolute inset-0 bg-ventalo-blue/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[1.5s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 md:opacity-40 transition-opacity duration-700 group-hover:opacity-20 z-10"></div>

                                {/* Floating Icon */}
                                <div className="absolute top-8 left-8 z-20">
                                    <div className={`w-20 h-20 rounded-3xl ${item.bg} ${item.color} flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-transform duration-500 border border-white/50 backdrop-blur-md`}>
                                        {item.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className={`w-full md:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-white/80 backdrop-blur-3xl relative ${idx % 2 === 1 ? 'md:order-1' : ''} overflow-hidden`}>
                                {/* Gradient Background Blob */}
                                <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br ${item.gradient} rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                                <h3 className="text-5xl font-heading font-black text-ventalo-blue mb-8 group-hover:text-ventalo-orange transition-colors relative z-10 tracking-tight">{item.title}</h3>
                                <p className="text-gray-600 text-lg mb-12 leading-relaxed font-medium relative z-10">{item.description}</p>

                                <div className="space-y-8 relative z-10">
                                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">Ideal Applications</h4>
                                    <div className="flex flex-wrap gap-4">
                                        {item.uses.map((use, uIdx) => (
                                            <span key={uIdx} className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-gray-100 text-gray-700 font-semibold text-sm shadow-sm group-hover:shadow-md group-hover:-translate-y-1 transition-all duration-300" style={{ transitionDelay: `${uIdx * 50}ms` }}>
                                                <CheckCircle2 size={16} className={item.color} />
                                                {use}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-16 pt-10 border-t border-gray-100/50 relative z-10 flex items-center justify-between">
                                    <span className="inline-flex items-center text-ventalo-blue font-bold text-lg group-hover:text-ventalo-orange transition-colors">
                                        Explore Products <ArrowRight size={20} className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import { Target, Eye, Award, Users, Globe, Truck, Check } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-ventalo-light overflow-x-hidden">
            {/* Header */}
            <div className="bg-ventalo-blue text-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-ventalo-blue/50 via-ventalo-blue/80 to-ventalo-blue"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <span className="text-ventalo-orange font-bold tracking-widest text-sm uppercase mb-4 block animate-[fade-in_1s_ease-out]">Since 2022</span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tight animate-[slide-up_1s_ease-out_forwards]">About Ventalo</h1>
                    <div className="w-24 h-1.5 bg-ventalo-orange mx-auto rounded-full mb-8 animate-[slide-up_1s_ease-out_0.1s_both]"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light animate-[slide-up_1.2s_ease-out_0.2s_both]">
                        Building the future with superior bonding solutions. We are the new gold standard for quality in Morbi's ceramic industry.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div className="space-y-8 animate-[slide-up_1s_ease-out]">
                        <h2 className="text-4xl font-bold text-ventalo-blue leading-tight">
                            Innovating for <span className="text-ventalo-orange">Excellence</span>
                        </h2>
                        <div className="prose prose-lg text-gray-600 leading-relaxed">
                            <p className="mb-6">
                                Ventalo Chemical is a dynamic and innovative manufacturer of high-performance tile adhesives, grouts, and construction chemicals. Based in Morbi, Gujarat—the hub of India's ceramic industry—we have rapidly positioned ourselves as a trusted partner for contractors, builders, and distributors.
                            </p>
                            <p className="mb-6">
                                We believe that the strength of a structure lies in its details. That's why our products are formulated using cutting-edge technology to ensure exceptional bond strength, flexibility, and durability.
                            </p>
                            <p>
                                Our commitment goes beyond just manufacturing. We aim to be a driving force in the industry, setting new benchmarks for quality and sustainability.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {['ISO 9001:2015', 'Advanced R&D', 'Eco-Friendly', '24/7 Support'].map((item) => (
                                <div key={item} className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                        <Check size={14} strokeWidth={3} />
                                    </div>
                                    <span className="font-semibold text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: Target, title: "Our Mission", desc: "To elevate construction standards with cutting-edge adhesive solutions." },
                            { icon: Eye, title: "Our Vision", desc: "To be a global leader known for performance and innovation." },
                            { icon: Users, title: "Customer Focus", desc: "Empowering clients with reliable products and expert support." },
                            { icon: Award, title: "Quality First", desc: "Adhering to strict standards for consistent performance." }
                        ].map((item, idx) => (
                            <div key={idx} className="glass dark:bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group border border-gray-100">
                                <item.icon className="text-ventalo-orange mb-6 group-hover:scale-110 transition-transform" size={40} strokeWidth={1.5} />
                                <h3 className="font-bold text-xl text-ventalo-blue mb-3">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Global Reach Section */}
            <div className="bg-ventalo-dark text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-ventalo-blue/30 to-transparent skew-x-12"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h2 className="text-4xl font-bold mb-16">Expanding Horizons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                            <div className="w-20 h-20 mx-auto bg-ventalo-orange/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Truck size={40} className="text-ventalo-orange" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Pan India Network</h4>
                            <p className="text-gray-400 leading-relaxed">Serving major cities and construction hubs across the nation with established logistics.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-gradient-to-b from-ventalo-blue/50 to-transparent border border-ventalo-orange/30 transform scale-105 shadow-2xl relative">
                            <div className="absolute -top-4 -right-4 bg-ventalo-orange text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Top Priority</div>
                            <div className="w-20 h-20 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6">
                                <Globe size={40} className="text-white" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4">Global Exports</h4>
                            <p className="text-gray-300 leading-relaxed">Delivering high-quality adhesives to international markets, ensuring global standards.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                            <div className="w-20 h-20 mx-auto bg-ventalo-orange/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <Award size={40} className="text-ventalo-orange" />
                            </div>
                            <h4 className="text-2xl font-bold mb-4">ISO Certified</h4>
                            <p className="text-gray-400 leading-relaxed">Manufacturing processes rigorously certified for quality management systems.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

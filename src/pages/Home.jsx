import React from 'react';
import { ArrowRight, CheckCircle, Globe, Shield, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
    return (
        <div className="bg-ventalo-light overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center bg-ventalo-blue text-white overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-ventalo-blue via-ventalo-blue/90 to-ventalo-blue/40"></div>

                {/* Abstract Shapes */}
                <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-ventalo-orange/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-500/10 rounded-full blur-[100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
                    <div className="max-w-5xl">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-sm mb-10 animate-[fade-in_1s_ease-out_forwards]">
                            <span className="flex h-2 w-2 rounded-full bg-ventalo-orange animate-pulse"></span>
                            Premium Construction Chemicals
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-10 animate-[slide-up_1s_ease-out_forwards]">
                            Bonding The <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ventalo-orange to-orange-300">Future Together</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light animate-[slide-up_1.2s_ease-out_0.2s_both]">
                            Engineered for perfection. Ventalo Chemical delivers high-performance adhesives and grouts that define the new standard of durability.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 animate-[slide-up_1.2s_ease-out_0.4s_both]">
                            <Link to="/products" className="bg-ventalo-orange text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-[0_10px_40px_-10px_rgba(249,115,22,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(249,115,22,0.6)] transform hover:-translate-y-1 flex items-center justify-center gap-3 group">
                                Explore Products <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact?type=quote" className="group bg-white/5 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-ventalo-blue transition-all flex items-center justify-center gap-3">
                                Get a Quote <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators / Values */}
            <section className="-mt-24 relative z-20 pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Shield, title: "Premium Quality", desc: "ISO 9001:2015 certified manufacturing processes ensuring consistent output.", color: "text-blue-500", bg: "bg-blue-50", delay: "0s" },
                            { icon: Zap, title: "Advanced Tech", desc: "Innovative polymer-modified formulations for superior bonding strength.", color: "text-orange-500", bg: "bg-orange-50", delay: "0.1s" },
                            { icon: Globe, title: "Global Reach", desc: "Trusted by distributors and construction professionals across the region.", color: "text-emerald-500", bg: "bg-emerald-50", delay: "0.2s" }
                        ].map((item, idx) => (
                            <Link
                                to="/about"
                                key={idx}
                                className="glass-card p-10 rounded-[2rem] flex flex-col items-start gap-6 hover:-translate-y-3 transition-transform duration-500 group animate-[slide-up_1s_ease-out_both]"
                                style={{ animationDelay: item.delay }}
                            >
                                <div className={`p-5 rounded-2xl ${item.bg} ${item.color} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl text-ventalo-blue mb-3 group-hover:text-ventalo-orange transition-colors">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-ventalo-blue relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { label: "States Reached", value: "15+", delay: "0s" },
                            { label: "Distributors", value: "50+", delay: "0.1s" },
                            { label: "Premium Products", value: "25+", delay: "0.2s" },
                            { label: "Quality Focus", value: "100%", delay: "0.3s" }
                        ].map((stat, idx) => (
                            <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors animate-[slide-up_1s_ease-out_both]" style={{ animationDelay: stat.delay }}>
                                <div className="text-4xl md:text-5xl font-black text-ventalo-orange mb-2">{stat.value}</div>
                                <div className="text-blue-200 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-24 bg-white relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 transform origin-top-right"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-ventalo-orange font-bold tracking-widest text-sm uppercase mb-2 block">Our Collections</span>
                        <h2 className="text-4xl font-bold text-ventalo-blue mb-6">High-Performance Solutions</h2>
                        <div className="h-1.5 w-24 bg-ventalo-orange mx-auto rounded-full mb-8"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            From basic tile fixing to premium heavy-duty applications, we have the right solution for every technical challenge.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <ProductCard
                            title="Silver Tile Adhesive"
                            description="A high-polymer modified adhesive suitable for fixing ceramic and vitrified tiles on walls and floors. Excellent bond strength."
                            benefits={["High Bond Strength", "Slip Resistant", "Easy Application"]}
                            link="/products/silver-tile-adhesive"
                            image="https://ventalochemical.com/upload/products/silver.png"
                        />
                        <ProductCard
                            title="Gold Tile Adhesive"
                            description="High-performance adhesive for vitrified tiles, glass mosaics, and large format tiles. Superior flexibility and grab."
                            benefits={["High Strength", "Flexible", "Vertical Slip Resistant"]}
                            link="/products/gold-tile-adhesive"
                            image="https://ventalochemical.com/upload/products/gold.png"
                        />
                        <ProductCard
                            title="Premium Epoxy Grout"
                            description="Stain-free, hygienic, and chemical-resistant grout for ceramic tiles, vitrified tiles, and stone. Ideal for kitchens and bathrooms."
                            benefits={["Stain Free", "Chemical Resistant", "Hygienic"]}
                            link="/products/premium-epoxy-grout"
                            image="https://ventalochemical.com/upload/products/premium-epoxy.png"
                        />
                    </div>

                    <div className="text-center mt-16">
                        <Link to="/products" className="group inline-flex items-center gap-2 font-bold text-ventalo-blue text-lg hover:text-ventalo-orange transition-colors">
                            View Full Catalogue
                            <span className="w-8 h-8 rounded-full bg-ventalo-orange/10 flex items-center justify-center group-hover:bg-ventalo-orange group-hover:text-white transition-all">
                                <ArrowRight size={16} />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us / Company Overview */}
            <section className="bg-ventalo-dark text-white py-24 relative overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-ventalo-blue/50 via-ventalo-dark to-ventalo-dark"></div>
                <div className="absolute -left-20 top-20 w-80 h-80 bg-ventalo-orange opacity-10 rounded-full blur-[100px]"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-ventalo-orange font-bold tracking-widest text-sm uppercase mb-2 block">Why Choose Ventalo</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Building Trust Through <span className="text-ventalo-orange">Excellence</span></h2>
                            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                                Established in 2022, Ventalo Chemical has rapidly grown to become a leading name in the tile adhesive industry in Morbi. We are committed to manufacturing excellence, using state-of-the-art technology to produce adhesives that stand the test of time.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Rigorous Quality Control Testing",
                                    "Expert Technical Support Team",
                                    "Sustainable Manufacturing Practices"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-ventalo-orange/20 flex items-center justify-center text-ventalo-orange">
                                            <CheckCircle size={20} />
                                        </div>
                                        <span className="text-gray-200 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10">
                                <Link to="/about" className="inline-block bg-white text-ventalo-dark px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors transform hover:-translate-y-1">
                                    Read Our Story
                                </Link>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
                                <div className="absolute inset-0 bg-ventalo-blue/20 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
                                    alt="Factory Interior"
                                    className="w-full h-auto transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute bottom-0 right-0 z-20 bg-ventalo-orange p-8 rounded-tl-2xl rounded-br-2xl shadow-xl hidden md:block transform hover:scale-105 transition-transform">
                                <p className="text-white/90 text-sm tracking-widest uppercase mb-1">Certified</p>
                                <p className="text-white font-black text-4xl leading-none mb-1">ISO</p>
                                <p className="text-white/90 font-bold text-lg">9001:2015</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl font-bold text-ventalo-blue mb-6">Ready to start your project?</h2>
                    <p className="text-gray-600 mb-10 text-xl max-w-2xl mx-auto">
                        Whether you are a distributor looking for a reliable partner or a contractor needing technical advice, our team is here to help.
                    </p>
                    <Link to="/contact?type=quote" className="inline-block bg-ventalo-blue text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-ventalo-dark transition-all transform hover:-translate-y-1 hover:shadow-2xl">
                        Get a Quote Today
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;

import React from 'react';
import ProductCard from '@/components/ProductCard';
import { ArrowRight, Box, Package, Globe } from 'lucide-react';
import Link from 'next/link';
import { products } from '@/data/products';

export default function Products() {
    return (
        <div className="bg-ventalo-light min-h-screen">
            {/* Header */}
            <div className="bg-ventalo-blue text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-ventalo-blue to-blue-900"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-ventalo-orange opacity-10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-block p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-[fade-in_1s_ease-out]">
                        <Box size={32} className="text-ventalo-orange" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 tracking-tight animate-[slide-up_1s_ease-out_forwards]">Our Products</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-[slide-up_1.2s_ease-out_0.2s_both]">
                        Engineered for perfection. Explore our comprehensive range of high-performance adhesives, grouts and construction chemicals.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {products.map((category, idx) => (
                    <div key={idx} className="mb-24 last:mb-0 animate-[slide-up_1s_ease-out_both]" style={{ animationDelay: `${idx * 0.2}s` }}>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 border-b border-gray-200 pb-4">
                            <div>
                                <h2 className="text-3xl font-bold text-ventalo-blue mb-2 flex items-center gap-3">
                                    <span className="w-1.5 h-8 bg-ventalo-orange rounded-full"></span>
                                    {category.category}
                                </h2>
                                <p className="text-gray-500 pl-4.5">{category.description}</p>
                            </div>
                            <div className="hidden md:block pb-2 text-sm font-medium text-gray-400">
                                {category.items.length} Products
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {category.items.map((product, pIdx) => (
                                <ProductCard
                                    key={pIdx}
                                    id={product.id}
                                    title={product.title}
                                    description={product.description}
                                    benefits={product.benefits}
                                    image={product.image}
                                    link={`/products/${product.id}`}
                                />
                            ))}
                        </div>
                    </div>
                ))}

                {/* Custom Solution CTA */}
                <div className="mt-24 relative rounded-3xl overflow-hidden group">
                    <div className="absolute inset-0 bg-ventalo-dark"></div>
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-ventalo-blue/90 to-transparent"></div>

                    <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-2xl">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Manufacturer & Exporter?</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                We offer bulk manufacturing limits and specialized export-quality packaging. Partner with us for your global distribution needs and get tailored solutions.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-ventalo-orange font-medium bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                    <Package size={18} /> Bulk Orders
                                </div>
                                <div className="flex items-center gap-2 text-ventalo-orange font-medium bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                    <Globe size={18} /> Global Export
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <Link href="/contact" className="inline-flex items-center gap-2 bg-ventalo-orange text-white px-10 py-5 rounded-xl font-bold hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_-10px_rgba(249,115,22,0.5)]">
                                Contact for Inquiry <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

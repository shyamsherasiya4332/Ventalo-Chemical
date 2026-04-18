'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Check, Download, Share2, MessageSquare, ArrowRight, ShieldCheck, Zap, Droplets, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';

export default function ProductDetails() {
    const params = useParams();
    const router = useRouter();
    const id = params?.id;

    // Flatten products array to find the specific item
    const allProducts = products.flatMap(category => category.items);
    const product = allProducts.find(p => p.id === id);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    const handleShare = async () => {
        const shareData = {
            title: product.title,
            text: `Check out ${product.title} by Ventalo Chemical: ${product.description}`,
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (err) {
                console.log('Share failed', err);
                // Fallback to WhatsApp if native share fails
                window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`, '_blank');
            }
        } else {
            // Fallback to WhatsApp immediately if navigator.share is missing
            window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`, '_blank');
        }
    };

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-ventalo-light">
                <h2 className="text-3xl font-bold text-ventalo-blue mb-4">Product Not Found</h2>
                <Link href="/products" className="text-ventalo-orange hover:underline flex items-center gap-2 font-medium text-lg">
                    <ArrowLeft size={20} /> Back to Products
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-ventalo-light min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pb-20">
                {/* Breadcrumb Navigation */}
                <div className="flex items-center gap-4 mb-12 animate-[fade-in_0.8s_ease-out]">
                    <div
                        onClick={() => window.history.length > 2 ? router.back() : router.push('/products')}
                        className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-white hover:bg-ventalo-orange hover:border-ventalo-orange transition-all duration-300 cursor-pointer group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    </div>

                    <div className="h-6 w-px bg-gray-300"></div>

                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <Link href="/products" className="hover:text-ventalo-orange transition-colors">Products</Link>
                        <ChevronRight size={14} className="text-gray-300" />
                        <span className="text-ventalo-blue font-bold tracking-tight line-clamp-1">{product.title}</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Image Section */}
                    <div className="lg:col-span-6 relative z-10">
                        <div className="sticky top-32">
                            <div className="aspect-square bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-blue-900/5 border border-white/60 relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white/50 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ventalo-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-4/5 h-4/5 object-contain p-8 transform group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-700 z-10"
                                    />
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <button
                                    onClick={handleShare}
                                    className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-100 rounded-xl text-ventalo-blue font-bold hover:bg-gray-50 hover:border-ventalo-blue/30 transition-all shadow-sm group active:scale-95"
                                >
                                    <Share2 size={20} className="group-hover:scale-110 transition-transform text-gray-400 group-hover:text-ventalo-blue" /> Share
                                </button>

                                <a
                                    href={product.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-100 rounded-xl text-ventalo-blue font-bold hover:bg-gray-50 hover:border-ventalo-blue/30 transition-all shadow-sm group active:scale-95"
                                >
                                    <Download size={20} className="group-hover:scale-110 transition-transform text-gray-400 group-hover:text-ventalo-blue" /> Download Image
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-6 space-y-12 animate-[slide-up_0.8s_ease-out]">
                        <div>
                            <div className="flex flex-wrap gap-3 mb-6">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider border border-blue-100">
                                    <ShieldCheck size={14} /> Premium Quality
                                </span>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold uppercase tracking-wider border border-green-100">
                                    <Zap size={14} /> High Performance
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-black text-ventalo-blue mb-8 leading-[1.1]">
                                {product.title}
                            </h1>
                            <div className="prose prose-lg text-gray-600 leading-relaxed">
                                <p className="text-xl font-light text-gray-500 border-l-4 border-ventalo-orange pl-6 italic">
                                    {product.fullDescription || product.description}
                                </p>
                            </div>
                        </div>

                        {/* Key Benefits */}
                        <div>
                            <h3 className="text-xl font-bold text-ventalo-blue mb-6 flex items-center gap-3">
                                Why Choose This?
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {product.benefits.map((benefit, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                        <div className="w-8 h-8 rounded-full bg-ventalo-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check size={16} className="text-ventalo-orange" strokeWidth={3} />
                                        </div>
                                        <span className="font-medium text-gray-700 leading-snug">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Technical Specifications / Features */}
                        {product.features && (
                            <div>
                                <h3 className="text-xl font-bold text-ventalo-blue mb-6">
                                    Technical Specifications
                                </h3>
                                <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 border-b last:border-0 border-gray-100 hover:bg-gray-50 transition-colors group">
                                            <span className="font-semibold text-gray-500 mb-1 sm:mb-0 group-hover:text-ventalo-blue transition-colors">{feature.title}</span>
                                            <span className="font-bold text-ventalo-blue text-right font-mono">{feature.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Recommend Applications */}
                        {product.applications && (
                            <div>
                                <h3 className="text-xl font-bold text-ventalo-blue mb-6">
                                    Recommended Applications
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.applications.map((app, idx) => (
                                        <span key={idx} className="px-5 py-2.5 bg-gray-100 text-gray-700 rounded-xl text-sm font-bold border border-gray-200 hover:bg-gray-200 hover:text-gray-900 transition-colors">
                                            {app}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTA */}
                        <div className="pt-8 border-t border-gray-200">
                            <Link
                                href={`/contact?product=${encodeURIComponent(product.title)}`}
                                className="w-full flex items-center justify-center gap-3 bg-ventalo-blue text-white font-bold py-6 rounded-2xl hover:bg-ventalo-dark hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group text-lg shadow-lg shadow-ventalo-blue/20"
                            >
                                <MessageSquare size={22} className="group-hover:scale-110 transition-transform" />
                                Enquire About This Product
                            </Link>
                            <div className="text-center mt-6 flex items-center justify-center gap-6 text-sm font-medium text-gray-400">
                                <span className="flex items-center gap-1.5"><ShieldCheck size={16} /> Quality Assured</span>
                                <span className="flex items-center gap-1.5"><Droplets size={16} /> Water Resistant</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="mt-32">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-ventalo-blue">Similar Products</h2>
                        <Link href="/products" className="hidden md:flex items-center gap-2 font-bold text-ventalo-orange hover:gap-3 transition-all">View All Products <ArrowRight size={20} /></Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {allProducts
                            .filter(p => p.id !== product.id)
                            .slice(0, 3)
                            .map((p, idx) => (
                                <Link key={idx} href={`/products/${p.id}`} className="group block bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-white relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-ventalo-orange/10 transition-colors"></div>

                                    <div className="h-56 bg-gray-50 rounded-2xl mb-8 overflow-hidden relative group-hover:bg-white transition-colors border border-transparent group-hover:border-gray-100">
                                        <img src={p.image} alt={p.title} className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700" />
                                    </div>
                                    <h3 className="font-bold text-xl text-ventalo-blue group-hover:text-ventalo-orange transition-colors mb-3 pr-4 relative z-10">{p.title}</h3>
                                    <p className="text-sm text-gray-500 line-clamp-2 mb-6 relative z-10">{p.description}</p>
                                    <div className="flex items-center text-sm font-bold text-gray-400 group-hover:text-ventalo-orange transition-colors relative z-10">
                                        View Details <ArrowRight size={18} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

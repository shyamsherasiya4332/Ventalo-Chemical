import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Download, Share2, MessageSquare, ArrowRight, ShieldCheck, Zap, Droplets, ChevronRight } from 'lucide-react';
import { products } from '../data/products';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Flatten products array to find the specific item
    const allProducts = products.flatMap(category => category.items);
    const product = allProducts.find(p => p.id === id);

    const [shareStatus, setShareStatus] = React.useState(null);
    const [isGeneratingPDF, setIsGeneratingPDF] = React.useState(false);
    const [base64Image, setBase64Image] = React.useState(null);
    const specTemplateRef = React.useRef(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Convert image to base64 to avoid CORS issues in PDF generation
        // using the "Canvas Bridge" method which is the "proper" way for browser engines
        if (product && product.image) {
            const convertImage = (url) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.crossOrigin = 'Anonymous'; 
                    img.onload = () => {
                        try {
                            const canvas = document.createElement('canvas');
                            canvas.width = img.width;
                            canvas.height = img.height;
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(img, 0, 0);
                            resolve(canvas.toDataURL('image/png'));
                        } catch (e) {
                            console.warn("Canvas capture failed, trying direct URL fallback", e);
                            resolve(url);
                        }
                    };
                    img.onerror = () => {
                        console.error("Image load failed for PDF bridge");
                        resolve(url);
                    };
                    img.src = url;
                });
            };
            
            convertImage(product.image).then(data => setBase64Image(data));
        }
    }, [id, product]);

    const handleShare = async () => {
        const shareData = {
            title: `Ventalo Chemical - ${product.title}`,
            text: product.description,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setShareStatus('Link Copied!');
                setTimeout(() => setShareStatus(null), 3000);
            }
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    const handleDownloadSpec = async () => {
        if (product.specSheet) {
            window.open(product.specSheet, '_blank');
            return;
        }

        // Diagnostic Check: Verify if PDF library is loaded via CDN
        if (typeof window.html2pdf === 'undefined') {
            console.error("PDF engine not ready. Falling back.");
            window.print();
            return;
        }

        setIsGeneratingPDF(true);

        // Crucial pause to ensure browser has painted the Base64 image in the template
        await new Promise(resolve => setTimeout(resolve, 800));

        try {
            const element = specTemplateRef.current;
            if (!element) throw new Error("Template not found.");

            const options = {
                margin: [0.4, 0.4, 0.4, 0.4],
                filename: `${product.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}-specification.pdf`,
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: {
                    scale: 3, // Premium Print Resolution
                    useCORS: true,
                    letterRendering: true,
                    allowTaint: true,
                    backgroundColor: '#ffffff'
                },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            };

            await window.html2pdf().from(element).set(options).save();
        } catch (error) {
            console.error('PDF SYSTEM ERROR:', error);
            window.print();
        } finally {
            setIsGeneratingPDF(false);
        }
    };

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-ventalo-light">
                <h2 className="text-3xl font-bold text-ventalo-blue mb-4">Product Not Found</h2>
                <Link to="/products" className="text-ventalo-orange hover:underline flex items-center gap-2 font-medium text-lg">
                    <ArrowLeft size={20} /> Back to Products
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="bg-ventalo-light min-h-screen">
            {/* BULLETPROOF HIDDEN SPEC SHEET TEMPLATE */}
            {/* Using absolute with ultra-low visibility to ensure capture availability while hiding from user */}
            <div className="absolute top-0 left-0 w-[800px] -z-50 opacity-[0.001] pointer-events-none" style={{ left: '-5000px' }}>
                <div ref={specTemplateRef} className="p-10 bg-white" style={{ fontFamily: 'Inter, sans-serif', width: '794px' }}>
                    <div className="flex justify-between items-center border-b-4 border-ventalo-orange pb-8 mb-10">
                        <div>
                            <h2 className="text-3xl font-black text-ventalo-blue">VENTALO CHEMICAL</h2>
                            <p className="text-sm text-gray-500 uppercase tracking-[0.2em] font-bold">Premium Construction Chemicals</p>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-black text-ventalo-blue">PRODUCT SPECIFICATION SHEET</p>
                            <p className="text-xs text-gray-400 mt-1 font-mono">ID: {product.id.toUpperCase()}</p>
                        </div>
                    </div>

                    <div className="flex gap-10 mb-12">
                        <div className="w-2/5">
                            <div className="aspect-square bg-white rounded-3xl flex items-center justify-center overflow-hidden border-2 border-gray-50 p-6 shadow-sm">
                                <img
                                    src={base64Image || product.image}
                                    alt={product.title}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                        </div>
                        <div className="w-3/5">
                            <h1 className="text-5xl font-black text-ventalo-blue mb-6 leading-tight uppercase">{product.title}</h1>
                            <div className="bg-ventalo-orange/5 border-l-4 border-ventalo-orange p-6 mb-8 rounded-r-2xl">
                                <p className="text-sm text-ventalo-blue leading-relaxed font-semibold">
                                    {product.fullDescription || product.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {product.benefits.slice(0, 6).map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3 text-xs text-gray-700 font-bold bg-gray-50 p-3 rounded-xl border border-gray-100">
                                        <div className="w-2.5 h-2.5 rounded-full bg-ventalo-orange flex-shrink-0"></div>
                                        {benefit}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mb-10">
                        <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-lg font-black text-ventalo-blue uppercase tracking-wider whitespace-nowrap">Technical Specifications</h3>
                            <div className="h-0.5 bg-gray-100 w-full"></div>
                        </div>
                        <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                            <tbody>
                                {product.features?.map((feature, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <td className="py-4 px-6 text-sm font-bold text-gray-500 border-b border-gray-100">{feature.title}</td>
                                        <td className="py-4 px-6 text-sm font-black text-ventalo-blue text-right border-b border-gray-100 font-mono">{feature.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-6">
                            <h3 className="text-lg font-black text-ventalo-blue uppercase tracking-wider whitespace-nowrap">Recommended Applications</h3>
                            <div className="h-0.5 bg-gray-100 w-full"></div>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {product.applications?.map((app, i) => (
                                <span key={i} className="text-xs font-black bg-ventalo-blue text-white px-5 py-2 rounded-xl shadow-sm">
                                    {app}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 pt-10 border-t-2 border-gray-100 flex justify-between items-center bg-gray-50/50 -mx-10 px-10 -mb-10 pb-10">
                        <div className="text-[11px] text-gray-400 font-bold uppercase tracking-[0.1em]">
                            Generated: {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-black text-ventalo-blue tracking-wider">VENTALO CHEMICAL</p>
                            <p className="text-[11px] text-gray-500 font-medium">Morbi, Gujarat, India • ventalochemical.com</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pb-20">
                {/* Back Link & Breadcrumbs */}
                {/* Breadcrumb Navigation - The Perfect Place */}
                <div className="flex items-center gap-4 mb-12 animate-[fade-in_0.8s_ease-out]">
                    <div
                        onClick={() => {
                            if (window.history.length > 2) {
                                navigate(-1);
                            } else {
                                navigate('/products');
                                window.scrollTo(0, 0);
                            }
                        }}
                        className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-white hover:bg-ventalo-orange hover:border-ventalo-orange transition-all duration-300 cursor-pointer group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    </div>

                    <div className="h-6 w-px bg-gray-300"></div>

                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                        <Link to="/products" className="hover:text-ventalo-orange transition-colors">Products</Link>
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
                                    {/* Background decoration */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ventalo-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-4/5 h-4/5 object-contain p-8 transform group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-700 z-10"
                                    />
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="grid grid-cols-2 gap-4 mt-8 relative">
                                {shareStatus && (
                                    <div className="absolute -top-12 left-0 right-0 flex justify-center animate-bounce">
                                        <span className="bg-ventalo-orange text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                                            {shareStatus}
                                        </span>
                                    </div>
                                )}
                                <button
                                    onClick={handleShare}
                                    className="flex items-center justify-center gap-2 py-4 bg-white border border-gray-100 rounded-xl text-ventalo-blue font-bold hover:bg-gray-50 hover:border-ventalo-blue/30 transition-all shadow-sm group"
                                >
                                    <Share2 size={20} className="group-hover:scale-110 transition-transform text-gray-400 group-hover:text-ventalo-blue" />
                                    {shareStatus ? 'Copied!' : 'Share'}
                                </button>
                                <button
                                    onClick={handleDownloadSpec}
                                    disabled={isGeneratingPDF}
                                    className={`flex items-center justify-center gap-2 py-4 bg-white border border-gray-100 rounded-xl text-ventalo-blue font-bold hover:bg-gray-50 hover:border-ventalo-blue/30 transition-all shadow-sm group ${isGeneratingPDF ? 'opacity-70 cursor-wait' : ''}`}
                                >
                                    <Download size={20} className={`group-hover:scale-110 transition-transform text-gray-400 group-hover:text-ventalo-blue ${isGeneratingPDF ? 'animate-bounce text-ventalo-blue' : ''}`} /> 
                                    {isGeneratingPDF ? 'Generating...' : 'Spec Sheet'}
                                </button>
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

                        {/* Applications */}
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
                                to={`/contact?product=${encodeURIComponent(product.title)}`}
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
                        <Link to="/products" className="hidden md:flex items-center gap-2 font-bold text-ventalo-orange hover:gap-3 transition-all">View All Products <ArrowRight size={20} /></Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {allProducts
                            .filter(p => p.id !== product.id) // Exclude current
                            .sort(() => 0.5 - Math.random()) // Shuffle
                            .slice(0, 3) // Take 3
                            .map((p, idx) => (
                                <Link key={idx} to={`/products/${p.id}`} className="group block bg-white rounded-3xl p-6 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-white relative overflow-hidden">
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
        </>
    );
};

export default ProductDetails;

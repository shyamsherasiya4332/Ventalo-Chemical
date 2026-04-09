import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ title, description, benefits, link, image }) => {
    return (
        <Link
            to={link || '/products'}
            className="group relative bg-white rounded-[2rem] shadow-sm hover:shadow-[0_20px_50px_rgba(10,37,64,0.15)] transition-all duration-500 border border-gray-100 overflow-hidden flex flex-col h-full transform hover:-translate-y-2 isolate"
        >
            <span className="sr-only">View {title}</span>

            {/* Image Section */}
            <div className="h-72 bg-gray-50 relative overflow-hidden flex items-center justify-center group-hover:bg-blue-50/30 transition-colors duration-500">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500"
                    style={{ backgroundImage: 'radial-gradient(#0A2540 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                </div>

                {/* Glow Effect behind image */}
                <div className="absolute w-48 h-48 bg-ventalo-orange/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-50 group-hover:scale-150"></div>

                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain p-8 relative z-10 transition-transform duration-700 group-hover:scale-110 drop-shadow-sm group-hover:drop-shadow-xl"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                ) : null}

                {/* Fallback pattern */}
                <div
                    className={`absolute inset-0 flex items-center justify-center ${image ? 'hidden' : 'flex'}`}
                >
                    <span className="text-ventalo-blue/5 font-heading font-black text-6xl tracking-widest uppercase transform -rotate-12 select-none">Ventalo</span>
                </div>

                {/* Overlay Badge */}
                <div className="absolute bottom-4 right-4 z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <span className="bg-white/90 backdrop-blur-md text-ventalo-blue text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-2 border border-white/50">
                        View Details <ArrowRight size={12} className="text-ventalo-orange" />
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow relative bg-white z-20">
                <h3 className="text-2xl font-heading font-bold text-ventalo-blue mb-3 group-hover:text-ventalo-orange transition-colors duration-300 leading-tight">
                    {title}
                </h3>

                <div className="w-12 h-1 bg-gradient-to-r from-ventalo-orange to-orange-400 rounded-full mb-6 transform origin-left group-hover:scale-x-[2.5] transition-transform duration-500 ease-out"></div>

                <p className="text-gray-600 text-sm mb-8 line-clamp-3 leading-relaxed flex-grow font-medium text-opacity-80 group-hover:text-opacity-100 transition-all">
                    {description}
                </p>

                {benefits && (
                    <div className="mt-auto pt-6 border-t border-gray-50">
                        <ul className="space-y-3">
                            {benefits.slice(0, 3).map((benefit, index) => (
                                <li key={index} className="text-xs font-bold text-gray-500 flex items-center gap-3 group-hover:text-ventalo-blue transition-colors duration-300 delay-[50ms]">
                                    <span className="w-5 h-5 bg-ventalo-orange/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-ventalo-orange group-hover:shadow-md transition-all duration-300">
                                        <Sparkles size={10} className="text-ventalo-orange group-hover:text-white transition-colors" />
                                    </span>
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default ProductCard;

import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Send, MessageSquare, ArrowRight, Instagram, Linkedin, Facebook, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { sendEmail } from '../utils/emailService';

const Contact = () => {
    const location = useLocation();
    const [subject, setSubject] = useState('Product Inquiry');
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const product = params.get('product');
        const type = params.get('type');

        if (product) {
            setSubject(`Inquiry for ${product}`);
        } else if (type === 'quote') {
            setSubject('Request for Quotation');
            // Slight delay to ensure content is loaded before scrolling
            setTimeout(() => {
                const formElement = document.getElementById('contact-form');
                if (formElement) {
                    formElement.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        const result = await sendEmail(form.current);

        if (result.success) {
            setSubmitStatus('success');
            form.current.reset();
        } else {
            setSubmitStatus('error');
        }
        setIsSubmitting(false);

        // Clear status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    return (
        <div className="bg-ventalo-light min-h-screen">
            {/* Hero Section */}
            <div className="bg-ventalo-blue text-white relative overflow-hidden h-[50vh] flex items-center">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-ventalo-blue/90 via-ventalo-blue/80 to-ventalo-blue/50"></div>
                {/* Mesh Gradient Animation */}
                <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.15),transparent_50%)] animate-shimmer opacity-40"></div>

                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-ventalo-light to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-12">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-ventalo-orange font-semibold text-sm mb-6 animate-fade-in shadow-lg">
                        <MessageSquare size={16} /> We'd love to hear from you
                    </div>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight animate-[slide-up_1s_ease-out_forwards] uppercase font-heading">Get in Touch</h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light animate-[slide-up_1.2s_ease-out_0.2s_both]">
                        Whether you have a question about our products, need a custom quote, or want to discuss a partnership, our team is ready to help.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Contact Info Side - Premium Dark Theme */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-ventalo-blue rounded-[2.5rem] p-10 relative overflow-hidden shadow-2xl border border-white/10 text-white h-full transform hover:-translate-y-2 transition-transform duration-500">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-ventalo-orange rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 rounded-full blur-[80px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                <h3 className="text-3xl font-heading font-black mb-2">Contact Information</h3>
                                <p className="text-blue-200 mb-12">Reach out to us directly or visit our headquarters.</p>

                                <div className="space-y-10">
                                    <a href="https://www.google.com/maps/search/?api=1&query=Ventalo+Chemical+Pipali+Jetpar+Road+Morbi" target="_blank" rel="noopener noreferrer" className="flex items-start gap-5 group cursor-pointer">
                                        <div className="p-3.5 bg-white/10 rounded-2xl text-ventalo-orange border border-white/10 backdrop-blur-md group-hover:bg-ventalo-orange group-hover:text-white transition-all duration-300 shadow-lg">
                                            <MapPin size={22} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg mb-1 group-hover:text-ventalo-orange transition-colors">Our Location</p>
                                            <p className="text-blue-100 leading-relaxed font-light opacity-90 group-hover:text-white transition-colors">
                                                Pipali - Jetpar Road,<br />
                                                Morbi-2 363642,<br />
                                                Gujarat, India.
                                            </p>
                                        </div>
                                    </a>

                                    <a href="tel:+919979999087" className="flex items-start gap-5 group cursor-pointer">
                                        <div className="p-3.5 bg-white/10 rounded-2xl text-ventalo-orange border border-white/10 backdrop-blur-md group-hover:bg-ventalo-orange group-hover:text-white transition-all duration-300 shadow-lg">
                                            <Phone size={22} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg mb-1 group-hover:text-ventalo-orange transition-colors">Phone Number</p>
                                            <p className="text-blue-100 font-medium text-lg group-hover:text-white transition-colors">+91 99799 99087</p>
                                            <p className="text-blue-300 text-xs mt-1 uppercase tracking-wider font-semibold">Mon-Sat 9am - 6pm</p>
                                        </div>
                                    </a>

                                    <div className="flex items-start gap-5 group">
                                        <div className="p-3.5 bg-white/10 rounded-2xl text-ventalo-orange border border-white/10 backdrop-blur-md group-hover:bg-ventalo-orange group-hover:text-white transition-all duration-300 shadow-lg">
                                            <Mail size={22} />
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-lg mb-1">Email Address</p>
                                            <p className="text-blue-100 hover:text-white transition-colors cursor-pointer font-medium break-all">info@ventalochemical.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div className="mt-12 pt-12 border-t border-white/10">
                                <h4 className="font-bold text-white text-lg mb-6">Follow Us</h4>
                                <div className="flex gap-4">
                                    {[
                                        { Icon: Facebook, link: 'https://www.facebook.com/ventalochemical' },
                                        { Icon: Instagram, link: 'https://www.instagram.com/ventalochemical' },
                                        { Icon: Linkedin, link: 'https://www.linkedin.com/company/ventalochemical' }
                                    ].map(({ Icon, link }, idx) => (
                                        <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-ventalo-orange transition-all duration-300 transform hover:-translate-y-1 border border-white/5 shadow-lg">
                                            <Icon size={20} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Form Side */}
                    <div className="lg:col-span-8" id="contact-form">
                        <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden isolate">
                            {/* Decorative pulsing circle */}
                            <div className="absolute -top-40 -right-40 w-96 h-96 bg-ventalo-blue/5 rounded-full blur-3xl opacity-50 animate-float"></div>
                            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-ventalo-orange/5 rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>

                            <div className="relative z-10 mb-12">
                                <h3 className="text-4xl font-heading font-black text-ventalo-blue mb-4">Send us a message</h3>
                                <p className="text-gray-500 text-lg font-medium">Fill out the form below and our team will get back to you shortly.</p>
                            </div>

                            {submitStatus === 'success' && (
                                <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3 animate-fade-in">
                                    <CheckCircle size={24} />
                                    <p className="font-medium">Message sent successfully! We'll be in touch soon.</p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3 animate-fade-in">
                                    <XCircle size={24} />
                                    <p className="font-medium">Failed to send message. Please check your connection or try again later.</p>
                                </div>
                            )}

                            <form className="space-y-8 relative z-10" ref={form} onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2 group">
                                        <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-ventalo-orange transition-colors">First Name</label>
                                        <input type="text" name="first_name" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-ventalo-orange/30 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.1)] outline-none transition-all duration-300 font-semibold text-gray-800 placeholder:text-gray-400" placeholder="John" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-ventalo-orange transition-colors">Last Name</label>
                                        <input type="text" name="last_name" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-ventalo-orange/30 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.1)] outline-none transition-all duration-300 font-semibold text-gray-800 placeholder:text-gray-400" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2 group">
                                        <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-ventalo-orange transition-colors">Email Address</label>
                                        <input type="email" name="user_email" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-ventalo-orange/30 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.1)] outline-none transition-all duration-300 font-semibold text-gray-800 placeholder:text-gray-400" placeholder="john@example.com" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-ventalo-orange transition-colors">Phone Number</label>
                                        <input type="tel" name="user_phone" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-ventalo-orange/30 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.1)] outline-none transition-all duration-300 font-semibold text-gray-800 placeholder:text-gray-400" placeholder="+91 99999 99999" />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-ventalo-orange transition-colors">Subject</label>
                                    <div className="relative">
                                        <select
                                            name="subject"
                                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-ventalo-orange/30 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.1)] outline-none transition-all duration-300 font-semibold text-gray-800 appearance-none cursor-pointer hover:bg-gray-100"
                                            value={subject}
                                            onChange={(e) => setSubject(e.target.value)}
                                        >
                                            <option>Product Inquiry</option>
                                            <option>Request for Quotation</option>
                                            <option>Export / Dealership</option>
                                            <option>Technical Support</option>
                                            <option>Other</option>
                                            {subject.startsWith('Inquiry for') && <option>{subject}</option>}
                                        </select>
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                            <ArrowRight size={16} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-sm font-bold text-gray-700 ml-1 group-focus-within:text-ventalo-orange transition-colors">Message</label>
                                    <textarea name="message" required rows={5} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-ventalo-orange/30 focus:shadow-[0_0_0_4px_rgba(249,115,22,0.1)] outline-none transition-all duration-300 resize-none font-semibold text-gray-800 placeholder:text-gray-400" placeholder="How can we help you?"></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-ventalo-orange text-white py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={24} className="animate-spin" /> Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <Send size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal } from "@/lib/gsap";
import { Phone, WhatsappLogo } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/data/site";

export function FinalCTA() {
    const ref = useScrollReveal({ y: 40 });

    return (
        <section
            id="contact"
            className="relative py-16 md:py-20 overflow-hidden bg-[var(--wl-cream)] dark:bg-[#1A1A1A]"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D5D46' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div ref={ref} className="container-wl relative z-10">
                {/* Card Container - Full Width */}
                <div className="bg-white dark:bg-[#2C2C2C] rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid lg:grid-cols-5">
                        {/* Left - Content (3 cols) */}
                        <div className="lg:col-span-3 p-8 md:p-10 lg:p-12">
                            {/* Badge - Gold/Orange */}
                            <span
                                className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
                                style={{
                                    backgroundColor: 'rgba(225, 173, 1, 0.15)',
                                    color: 'var(--wl-gold)'
                                }}
                            >
                                ✨ Get Started Today
                            </span>
                            <h2 className="text-[var(--wl-charcoal)] dark:text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                                Ready to Experience the Full Circle?
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                Whether you're a farmer looking for quality feeds, a retailer
                                seeking fresh dairy, or an aspiring agri-preneur — we're here
                                to help.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#20BA5A] transition-all hover:scale-105 shadow-lg"
                                >
                                    <WhatsappLogo size={22} weight="fill" />
                                    Chat on WhatsApp
                                </a>
                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[var(--wl-emerald)] text-[var(--wl-emerald)] font-semibold hover:bg-[var(--wl-emerald)] hover:text-white transition-all"
                                >
                                    <Phone size={22} weight="fill" />
                                    Call Us Now
                                </a>
                            </div>

                            {/* Location */}
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                                📍 <span className="font-medium">{siteConfig.address}</span>
                            </p>
                        </div>

                        {/* Right - Image with subtle gradient (2 cols) */}
                        <div className="lg:col-span-2 relative h-48 lg:h-auto min-h-[280px]">
                            <Image
                                src="/images/products-hero.jpg"
                                alt="Wonderland Products"
                                fill
                                className="object-cover"
                                sizes="40vw"
                            />
                            {/* Subtle gradient overlay - not full green */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--wl-emerald)]/60 via-transparent to-black/40" />

                            {/* Stats Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                                        <p className="text-4xl md:text-5xl font-bold mb-1">1000+</p>
                                        <p className="text-white/90 text-sm uppercase tracking-wider">Farmers Trained</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import Link from "next/link";
import { useScrollReveal } from "@/lib/gsap";
import { Phone, WhatsappLogo } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/data/site";

export function FinalCTA() {
    const ref = useScrollReveal({ y: 40 });

    return (
        <section
            id="contact"
            className="section-padding relative overflow-hidden"
            style={{ backgroundColor: "var(--wl-emerald)" }}
        >
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />

            <div ref={ref} className="container-wl relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-white mb-6">
                        Ready to Experience the Full Circle of Goodness?
                    </h2>
                    <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
                        Whether you're a farmer looking for quality feeds, a retailer
                        seeking fresh dairy, or an aspiring agri-preneur — we're here to
                        help.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20BA5A] transition-colors"
                        >
                            <WhatsappLogo size={24} weight="fill" />
                            Chat on WhatsApp
                        </a>
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[var(--wl-emerald)] font-medium hover:bg-white/90 transition-colors"
                        >
                            <Phone size={24} weight="fill" />
                            Call Us Now
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 pt-8 border-t border-white/20">
                        <p className="text-white/60 text-sm mb-4">Or visit us at:</p>
                        <p className="text-white font-medium">{siteConfig.address}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

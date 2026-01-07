"use client";

import Link from "next/link";
import {
    InstagramLogo,
    FacebookLogo,
    LinkedinLogo,
    EnvelopeSimple,
    Phone,
    MapPin,
} from "@phosphor-icons/react";
import { siteConfig, navigation } from "@/lib/data/site";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative"
            style={{ backgroundColor: "var(--wl-emerald)" }}
        >
            <div className="container-wl section-padding">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--wl-emerald)] font-bold text-xl">
                                W
                            </div>
                            <span className="text-white font-bold text-xl">
                                {siteConfig.name.split(" ")[0]}
                            </span>
                        </Link>
                        <p className="text-white/80 text-sm mb-6 max-w-xs">
                            {siteConfig.description}
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href={siteConfig.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <InstagramLogo size={20} weight="fill" className="text-white" />
                            </a>
                            <a
                                href={siteConfig.socials.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="Facebook"
                            >
                                <FacebookLogo size={20} weight="fill" className="text-white" />
                            </a>
                            <a
                                href={siteConfig.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                aria-label="LinkedIn"
                            >
                                <LinkedinLogo size={20} weight="fill" className="text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <nav className="flex flex-col gap-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white/70 hover:text-white transition-colors text-sm"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/about"
                                className="text-white/70 hover:text-white transition-colors text-sm"
                            >
                                About Us
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <div className="flex flex-col gap-4">
                            <a
                                href={`tel:${siteConfig.phone}`}
                                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                            >
                                <Phone size={18} />
                                {siteConfig.phone}
                            </a>
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                            >
                                <EnvelopeSimple size={18} />
                                {siteConfig.email}
                            </a>
                            <div className="flex items-start gap-3 text-white/70 text-sm">
                                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                                <span>{siteConfig.address}</span>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
                        <p className="text-white/70 text-sm mb-4">
                            Subscribe to our newsletter for the latest news and updates.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50 text-sm"
                            />
                            <button
                                type="submit"
                                className="px-4 py-3 rounded-xl bg-white text-[var(--wl-emerald)] font-medium hover:bg-white/90 transition-colors text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Certifications */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                        {/* Placeholder certification badges */}
                        <div className="px-4 py-2 rounded-lg bg-white/10 text-white/70 text-xs">
                            KEBS Certified
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-white/10 text-white/70 text-xs">
                            Halal Certified
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-white/10 text-white/70 text-xs">
                            ISO 22000
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center">
                        <p className="text-white/60 text-sm">
                            © {currentYear} {siteConfig.name}. {siteConfig.tagline}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

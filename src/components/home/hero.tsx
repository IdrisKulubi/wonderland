"use client";

import Link from "next/link";
import Image from "next/image";
import { useHeroTextReveal, useParallax } from "@/lib/gsap";
import { heroContent } from "@/lib/data/site";
import { ArrowDown } from "@phosphor-icons/react";

export function Hero() {
    const textRef = useHeroTextReveal(0.3);
    const imageRef = useParallax(0.2);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <div ref={imageRef} className="absolute inset-0 -z-10">
                <Image
                    src="/images/hero-farm.jpg"
                    alt="Wonderland Dairy Farm"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Darker Gradient Overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                {/* Brand color overlay */}
                <div className="absolute inset-0 bg-[var(--wl-emerald)]/30 mix-blend-multiply" />
            </div>

            {/* Content */}
            <div ref={textRef} className="container-wl relative z-10 text-center pt-20 px-6">
                {/* Headline - optimized for mobile (won't break into 4 lines) */}
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl mx-auto mb-6">
                    <span className="block">The Full Circle</span>
                    <span className="block">of Goodness.</span>
                </h1>

                <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    {heroContent.subheadline}
                </p>

                {/* CTA Buttons - Pill shaped */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={heroContent.primaryCta.href}
                        className="px-8 py-4 rounded-full bg-white text-[var(--wl-emerald)] font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[220px]"
                    >
                        {heroContent.primaryCta.label}
                    </Link>
                    <Link
                        href={heroContent.secondaryCta.href}
                        className="px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base sm:text-lg hover:bg-white hover:text-[var(--wl-emerald)] transition-all duration-300 min-w-[220px]"
                    >
                        {heroContent.secondaryCta.label}
                    </Link>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <a
                    href="#ecosystem"
                    className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
                    aria-label="Scroll to explore"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ArrowDown size={20} />
                </a>
            </div>
        </section>
    );
}

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
                    alt="Wonderland Farm"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,93,70,0.85)] via-[rgba(13,93,70,0.5)] to-[rgba(13,93,70,0.3)]" />
            </div>

            {/* Content */}
            <div ref={textRef} className="container-wl relative z-10 text-center pt-20">
                <h1 className="text-white text-balance max-w-4xl mx-auto mb-6">
                    {heroContent.headline}
                </h1>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    {heroContent.subheadline}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={heroContent.primaryCta.href}
                        className="btn-pill btn-pill-primary min-w-[200px]"
                    >
                        {heroContent.primaryCta.label}
                    </Link>
                    <Link
                        href={heroContent.secondaryCta.href}
                        className="btn-pill btn-pill-outline border-white text-white hover:bg-white hover:text-[var(--wl-emerald)] min-w-[200px]"
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

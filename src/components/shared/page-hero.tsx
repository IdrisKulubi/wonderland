"use client";

import { useScrollReveal, useParallax } from "@/lib/gsap";
import Image from "next/image";

interface PageHeroProps {
    title: string;
    subtitle: string;
    image: string;
    accentColor?: string;
}

export function PageHero({ title, subtitle, image, accentColor = "var(--wl-emerald)" }: PageHeroProps) {
    const textRef = useScrollReveal({ y: 40 });
    const imageRef = useParallax(0.15);

    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Image */}
            <div ref={imageRef} className="absolute inset-0 -z-10">
                <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: `linear-gradient(to top, ${accentColor}CC 0%, ${accentColor}66 50%, ${accentColor}33 100%)`
                    }}
                />
            </div>

            {/* Content */}
            <div ref={textRef} className="container-wl relative z-10 text-center py-20">
                <h1 className="text-white text-balance max-w-3xl mx-auto mb-4">
                    {title}
                </h1>
                <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto">
                    {subtitle}
                </p>
            </div>
        </section>
    );
}

"use client";

import Image from "next/image";
import { useScrollReveal, useCounter, useParallax } from "@/lib/gsap";
import { whyUsContent } from "@/lib/data/site";

function StatCounter({
    value,
    suffix,
    label,
}: {
    value: number;
    suffix: string;
    label: string;
}) {
    const counterRef = useCounter(value, { suffix });

    return (
        <div className="text-center">
            <span
                ref={counterRef}
                className="block text-4xl md:text-5xl font-bold text-[var(--wl-emerald)]"
            >
                0{suffix}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">
                {label}
            </span>
        </div>
    );
}

export function WhyUs() {
    const contentRef = useScrollReveal({ y: 50 });
    const imageRef = useParallax(0.15);

    return (
        <section className="section-padding bg-white dark:bg-[#1A1A1A] overflow-hidden">
            <div className="container-wl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <div className="relative order-2 lg:order-1">
                        <div
                            ref={imageRef}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden"
                        >
                            <Image
                                src="/images/why-us.jpg"
                                alt="Wonderland quality control"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-[var(--wl-emerald)] text-white p-6 rounded-2xl shadow-lg">
                            <p className="text-3xl font-bold">15+</p>
                            <p className="text-sm text-white/80">Years of Excellence</p>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-4 border-[var(--wl-gold)] opacity-50" />
                    </div>

                    {/* Content Side */}
                    <div ref={contentRef} className="order-1 lg:order-2">
                        <span className="caption text-[var(--wl-gold)] mb-4 block">
                            Why Choose Us
                        </span>
                        <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-6">
                            {whyUsContent.headline}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
                            {whyUsContent.body}
                        </p>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-gray-700">
                            {whyUsContent.stats.map((stat) => (
                                <StatCounter
                                    key={stat.label}
                                    value={stat.value}
                                    suffix={stat.suffix}
                                    label={stat.label}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

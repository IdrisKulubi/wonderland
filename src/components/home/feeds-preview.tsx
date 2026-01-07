"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal, useStaggerReveal } from "@/lib/gsap";
import { feedsProducts } from "@/lib/data/products";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react";

export function FeedsPreview() {
    const headerRef = useScrollReveal({ y: 40 });
    const productsRef = useStaggerReveal({ stagger: 0.15 });

    // Get first 3 products
    const featuredFeeds = feedsProducts.slice(0, 3);

    return (
        <section id="feeds" className="section-padding bg-white dark:bg-[#1A1A1A]">
            <div className="container-wl">
                {/* Section Header */}
                <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <span
                            className="caption mb-3 block"
                            style={{ color: "var(--wl-gold)" }}
                        >
                            Wonderland Feeds
                        </span>
                        <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-4">
                            Fueling Kenya's Growth
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-xl">
                            Scientifically formulated animal feeds tested on our own herd
                            before reaching the market.
                        </p>
                    </div>
                    <Link
                        href="/feeds"
                        className="inline-flex items-center gap-2 font-medium text-[var(--wl-gold)] hover:gap-3 transition-all"
                    >
                        View All Feeds
                        <ArrowRight size={20} weight="bold" />
                    </Link>
                </div>

                {/* Products Grid */}
                <div ref={productsRef} className="grid md:grid-cols-3 gap-8">
                    {featuredFeeds.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-[var(--wl-cream)] dark:bg-[#2C2C2C] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h4 className="text-[var(--wl-charcoal)] dark:text-white font-semibold mb-2">
                                    {product.name}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                                    {product.description}
                                </p>

                                {/* Specs Preview */}
                                {product.specifications && (
                                    <div className="flex flex-wrap gap-2">
                                        {Object.entries(product.specifications)
                                            .slice(0, 2)
                                            .map(([key, value]) => (
                                                <span
                                                    key={key}
                                                    className="text-xs px-2 py-1 rounded-full bg-[var(--wl-gold)]/10 text-[var(--wl-gold)]"
                                                >
                                                    {key}: {value}
                                                </span>
                                            ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Points */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap justify-center gap-8">
                        {[
                            "Tested on our own herd",
                            "Consistent batch quality",
                            "No harmful additives",
                        ].map((point) => (
                            <div
                                key={point}
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                            >
                                <CheckCircle
                                    size={20}
                                    weight="fill"
                                    className="text-[var(--wl-gold)]"
                                />
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

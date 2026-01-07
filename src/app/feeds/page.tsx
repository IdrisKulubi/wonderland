"use client";

import { useState } from "react";
import { PageHero, ProductCard } from "@/components/shared";
import { useStaggerReveal } from "@/lib/gsap";
import { feedsProducts, feedCategories } from "@/lib/data/products";
import { CheckCircle } from "@phosphor-icons/react";

export default function FeedsPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const gridRef = useStaggerReveal({ stagger: 0.1 });

    const filteredProducts = activeCategory
        ? feedsProducts.filter((p) => p.subcategory === activeCategory)
        : feedsProducts;

    return (
        <>
            <PageHero
                title="Fueling Kenya's Growth."
                subtitle="Scientifically formulated animal feeds for higher yields and healthier livestock."
                image="/images/feeds-hero.jpg"
                accentColor="#E1AD01"
            />

            {/* Filter Section */}
            <section className="py-8 bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-gray-800 sticky top-20 z-30">
                <div className="container-wl">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!activeCategory
                                    ? "bg-[var(--wl-gold)] text-white"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            All Products
                        </button>
                        {feedCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                                        ? "bg-[var(--wl-gold)] text-white"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section-padding bg-[var(--wl-cream)] dark:bg-[#1A1A1A]">
                <div className="container-wl">
                    <div
                        ref={gridRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProducts.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                accentColor="var(--wl-gold)"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* The Promise Section */}
            <section className="section-padding bg-white dark:bg-[#2C2C2C]">
                <div className="container-wl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="caption text-[var(--wl-gold)] mb-4 block">
                                Our Promise
                            </span>
                            <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-6">
                                "We Use What We Sell."
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                                We are the only feed manufacturer that tests every batch on our
                                own pedigree herd before it reaches the market. If it's not good
                                enough for our cows, it's not good enough for yours.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Scientifically balanced nutrition",
                                    "Quality tested on our own herd",
                                    "No harmful additives",
                                    "Consistent batch quality",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-3 text-[var(--wl-charcoal)] dark:text-white"
                                    >
                                        <CheckCircle
                                            size={24}
                                            weight="fill"
                                            className="text-[var(--wl-gold)]"
                                        />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-[var(--wl-gold)]/10 flex items-center justify-center">
                                <span className="text-[var(--wl-gold)] text-lg">
                                    [Farmer with feed image]
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

"use client";

import { useState } from "react";
import { PageHero, ProductCard } from "@/components/shared";
import { useStaggerReveal } from "@/lib/gsap";
import { dairyProducts, productCategories } from "@/lib/data/products";
import { MapPin } from "@phosphor-icons/react";

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const gridRef = useStaggerReveal({ stagger: 0.1 });

    const filteredProducts = activeCategory
        ? dairyProducts.filter((p) => p.subcategory === activeCategory)
        : dairyProducts;

    return (
        <>
            <PageHero
                title="Pure. Fresh. Local."
                subtitle="No additives. No shortcuts. Just the way nature intended."
                image="/images/products-hero.jpg"
                accentColor="#FF6F61"
            />

            {/* Filter Section */}
            <section className="py-8 bg-white dark:bg-[#1A1A1A] border-b border-gray-200 dark:border-gray-800 sticky top-20 z-30">
                <div className="container-wl">
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <button
                            onClick={() => setActiveCategory(null)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${!activeCategory
                                    ? "bg-[var(--wl-coral)] text-white"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            All Products
                        </button>
                        {productCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat.id
                                        ? "bg-[var(--wl-coral)] text-white"
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
                                accentColor="var(--wl-coral)"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Find a Stockist CTA */}
            <section className="section-padding bg-white dark:bg-[#2C2C2C]">
                <div className="container-wl text-center">
                    <div className="w-20 h-20 rounded-full bg-[var(--wl-coral)]/10 flex items-center justify-center mx-auto mb-6">
                        <MapPin size={40} className="text-[var(--wl-coral)]" />
                    </div>
                    <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-4">
                        Find a Stockist Near You
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">
                        Our products are available at leading supermarkets and local stores
                        across Kenya. Contact us to find the nearest stockist.
                    </p>
                    <a
                        href="/contact"
                        className="btn-pill btn-pill-primary inline-block"
                        style={{ backgroundColor: "var(--wl-coral)" }}
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    );
}

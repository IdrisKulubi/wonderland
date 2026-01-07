"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal, useStaggerReveal } from "@/lib/gsap";
import { dairyProducts } from "@/lib/data/products";
import { ArrowRight, Leaf, Drop, HandHeart } from "@phosphor-icons/react";

const benefits = [
    { icon: <Leaf size={24} weight="duotone" />, text: "100% Natural" },
    { icon: <Drop size={24} weight="duotone" />, text: "Farm Fresh" },
    { icon: <HandHeart size={24} weight="duotone" />, text: "No Additives" },
];

export function ProductsPreview() {
    const headerRef = useScrollReveal({ y: 40 });
    const productsRef = useStaggerReveal({ stagger: 0.12 });

    // Get first 4 products
    const featuredProducts = dairyProducts.slice(0, 4);

    return (
        <section
            id="products"
            className="section-padding bg-[var(--wl-cream)] dark:bg-[#1A1A1A]"
        >
            <div className="container-wl">
                {/* Section Header */}
                <div ref={headerRef} className="text-center mb-12">
                    <span
                        className="caption mb-3 block"
                        style={{ color: "var(--wl-coral)" }}
                    >
                        Wonderland Products
                    </span>
                    <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-4">
                        Pure. Fresh. Local.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-6">
                        From our farm to your table. No additives, no shortcuts — just the
                        way nature intended.
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {benefits.map((benefit) => (
                            <div
                                key={benefit.text}
                                className="flex items-center gap-2 text-[var(--wl-coral)]"
                            >
                                {benefit.icon}
                                <span className="font-medium">{benefit.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div ref={productsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group bg-white dark:bg-[#2C2C2C] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Image */}
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h4 className="text-[var(--wl-charcoal)] dark:text-white font-medium text-sm mb-1">
                                    {product.name}
                                </h4>
                                <p className="text-gray-500 text-xs">
                                    {product.packingSizes?.join(" • ")}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-10">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: "var(--wl-coral)" }}
                    >
                        View All Products
                        <ArrowRight size={20} weight="bold" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

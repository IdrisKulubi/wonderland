"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import type { Product } from "@/lib/data/products";
import { siteConfig } from "@/lib/data/site";
import { ImageSquare } from "@phosphor-icons/react";

interface ProductCardProps {
    product: Product;
    accentColor?: string;
}

export function ProductCard({ product, accentColor = "var(--wl-emerald)" }: ProductCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [imageError, setImageError] = useState(false);

    const handleEnquire = () => {
        const message = encodeURIComponent(
            `Hello! I'm interested in ${product.name}. Please provide more details.`
        );
        const phone = siteConfig.whatsapp.replace(/[^0-9]/g, "");
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    };

    return (
        <div ref={cardRef} className="card-wl overflow-hidden group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {!imageError ? (
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                        <ImageSquare size={48} weight="thin" />
                        <span className="text-sm mt-2">{product.name}</span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-[var(--wl-charcoal)] dark:text-white mb-2">
                    {product.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {product.description}
                </p>

                {/* Specifications */}
                {product.specifications && (
                    <div className="mb-4 space-y-1">
                        {Object.entries(product.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between text-xs">
                                <span className="text-gray-500">{key}</span>
                                <span className="font-medium text-[var(--wl-charcoal)] dark:text-white">
                                    {value}
                                </span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Packing Sizes */}
                {product.packingSizes && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {product.packingSizes.map((size) => (
                            <span
                                key={size}
                                className="px-2 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                            >
                                {size}
                            </span>
                        ))}
                    </div>
                )}

                {/* Enquire Button */}
                <button
                    onClick={handleEnquire}
                    className="w-full py-3 rounded-full font-medium text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: accentColor }}
                >
                    Enquire Now
                </button>
            </div>
        </div>
    );
}

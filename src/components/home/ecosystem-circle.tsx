"use client";

import { useState } from "react";
import Link from "next/link";
import { useScrollReveal } from "@/lib/gsap";
import { ecosystemPillars } from "@/lib/data/site";
import { Grains, Barn, CookingPot, GraduationCap } from "@phosphor-icons/react";

const pillarIcons: Record<string, React.ReactNode> = {
    feeds: <Grains size={32} weight="duotone" />,
    farms: <Barn size={32} weight="duotone" />,
    foods: <CookingPot size={32} weight="duotone" />,
    academy: <GraduationCap size={32} weight="duotone" />,
};

const accentColors: Record<string, string> = {
    gold: "var(--wl-gold)",
    leaf: "var(--wl-leaf)",
    coral: "var(--wl-coral)",
    blue: "var(--wl-blue)",
};

export function EcosystemCircle() {
    const [activePillar, setActivePillar] = useState<string | null>(null);
    const sectionRef = useScrollReveal({ y: 60 });

    const activePillarData = activePillar
        ? ecosystemPillars.find((p) => p.id === activePillar)
        : null;

    return (
        <section
            id="ecosystem"
            className="section-padding bg-[var(--wl-cream)] dark:bg-[#1A1A1A]"
        >
            <div ref={sectionRef} className="container-wl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="caption text-[var(--wl-emerald)] mb-4 block">
                        Our Ecosystem
                    </span>
                    <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-4">
                        One Vision. Four Pillars.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A fully integrated value chain that delivers quality at every step.
                    </p>
                </div>

                {/* Interactive Circle */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Center Circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[var(--wl-emerald)] flex items-center justify-center z-10 shadow-lg">
                        <div className="text-center text-white p-4">
                            {activePillarData ? (
                                <>
                                    <p className="font-semibold text-lg mb-1">
                                        {activePillarData.name}
                                    </p>
                                    <p className="text-xs text-white/80">
                                        {activePillarData.tagline}
                                    </p>
                                </>
                            ) : (
                                <>
                                    <p className="text-sm font-medium mb-1">Wonderland</p>
                                    <p className="text-xs text-white/80">Full Circle</p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Pillar Cards Grid */}
                    <div className="grid grid-cols-2 gap-6 md:gap-10">
                        {ecosystemPillars.map((pillar) => {
                            const isActive = activePillar === pillar.id;
                            const accentColor = accentColors[pillar.accent];

                            return (
                                <Link
                                    key={pillar.id}
                                    href={pillar.href}
                                    className="group"
                                    onMouseEnter={() => setActivePillar(pillar.id)}
                                    onMouseLeave={() => setActivePillar(null)}
                                >
                                    <div
                                        className={`card-wl p-6 md:p-8 h-full transition-all duration-300 ${isActive ? "ring-2" : ""
                                            }`}
                                        style={{
                                            borderColor: isActive ? accentColor : "transparent",
                                            boxShadow: isActive
                                                ? `0 8px 32px ${accentColor}33`
                                                : undefined,
                                        }}
                                    >
                                        {/* Icon */}
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-colors"
                                            style={{
                                                backgroundColor: `${accentColor}15`,
                                                color: accentColor,
                                            }}
                                        >
                                            {pillarIcons[pillar.id]}
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-[var(--wl-charcoal)] dark:text-white mb-2 group-hover:text-[var(--wl-emerald)] transition-colors">
                                            {pillar.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                            {pillar.description}
                                        </p>

                                        {/* Learn More */}
                                        <span
                                            className="text-sm font-medium transition-colors"
                                            style={{ color: accentColor }}
                                        >
                                            Learn more →
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Connecting Lines (decorative) */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                        viewBox="0 0 400 400"
                    >
                        <circle
                            cx="200"
                            cy="200"
                            r="150"
                            fill="none"
                            stroke="var(--wl-emerald)"
                            strokeWidth="1"
                            strokeDasharray="8 8"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}

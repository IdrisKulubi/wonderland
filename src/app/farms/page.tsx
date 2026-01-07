"use client";

import { PageHero } from "@/components/shared";
import { useScrollReveal, useStaggerReveal } from "@/lib/gsap";
import { Dna, Recycle, SolarPanel } from "@phosphor-icons/react";

const approaches = [
    {
        icon: <Dna size={40} weight="duotone" />,
        title: "Pedigree Genetics",
        description:
            "Breeding the best Holsteins and Fleckviehs for maximum productivity and health.",
    },
    {
        icon: <SolarPanel size={40} weight="duotone" />,
        title: "Zero-Grazing",
        description:
            "Maximizing land use and maintaining the highest hygiene standards.",
    },
    {
        icon: <Recycle size={40} weight="duotone" />,
        title: "Sustainability",
        description:
            "Biogas energy and organic manure cycles for a greener future.",
    },
];

const stats = [
    { value: "500+", label: "Head of Cattle" },
    { value: "100%", label: "Traceability" },
    { value: "24/7", label: "Monitoring" },
    { value: "0%", label: "Antibiotics" },
];

export default function FarmsPage() {
    const contentRef = useScrollReveal({ y: 50 });
    const cardsRef = useStaggerReveal({ stagger: 0.15 });
    const statsRef = useStaggerReveal({ stagger: 0.1 });

    return (
        <>
            <PageHero
                title="The Future of Farming is Here."
                subtitle="A state-of-the-art facility combining Israeli technology with Kenyan heritage."
                image="/images/farms-hero.jpg"
                accentColor="#4CAF50"
            />

            {/* Our Approach */}
            <section className="section-padding bg-white dark:bg-[#1A1A1A]">
                <div className="container-wl">
                    <div ref={contentRef} className="text-center mb-16">
                        <span className="caption text-[var(--wl-leaf)] mb-4 block">
                            Our Approach
                        </span>
                        <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-4">
                            Modern Farming, Timeless Values
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            We combine cutting-edge agricultural technology with traditional
                            farming wisdom to create a sustainable, high-yield operation.
                        </p>
                    </div>

                    <div
                        ref={cardsRef}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {approaches.map((item) => (
                            <div
                                key={item.title}
                                className="card-wl p-8 text-center"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-[var(--wl-leaf)]/10 flex items-center justify-center mx-auto mb-6 text-[var(--wl-leaf)]">
                                    {item.icon}
                                </div>
                                <h3 className="text-[var(--wl-charcoal)] dark:text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Banner */}
            <section
                className="py-16"
                style={{ backgroundColor: "var(--wl-leaf)" }}
            >
                <div className="container-wl">
                    <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-white/80 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facility Features */}
            <section className="section-padding bg-[var(--wl-cream)] dark:bg-[#1A1A1A]">
                <div className="container-wl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-200">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                [Zero-grazing facility video/image]
                            </div>
                        </div>

                        <div>
                            <span className="caption text-[var(--wl-leaf)] mb-4 block">
                                Our Facility
                            </span>
                            <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-6">
                                World-Class Infrastructure
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
                                Our zero-grazing unit features automated feeding systems, climate
                                control, and real-time health monitoring to ensure optimal
                                conditions for our herd.
                            </p>

                            <ul className="space-y-3">
                                {[
                                    "Automated milking parlor",
                                    "Climate-controlled housing",
                                    "Real-time health monitoring",
                                    "Biogas power generation",
                                    "Organic waste recycling",
                                ].map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-3 text-[var(--wl-charcoal)] dark:text-white"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-[var(--wl-leaf)]" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useScrollReveal, useParallax, useCounter } from "@/lib/gsap";
import { ArrowRight, Dna, SolarPanel, Recycle } from "@phosphor-icons/react";

const highlights = [
    {
        icon: <Dna size={28} weight="duotone" />,
        title: "Pedigree Genetics",
        description: "Holstein & Fleckvieh breeds",
    },
    {
        icon: <SolarPanel size={28} weight="duotone" />,
        title: "Zero-Grazing",
        description: "Maximum hygiene standards",
    },
    {
        icon: <Recycle size={28} weight="duotone" />,
        title: "Sustainable",
        description: "Biogas & organic cycles",
    },
];

function StatCounter({ value, label }: { value: number; label: string }) {
    const ref = useCounter(value, { suffix: "+" });
    return (
        <div className="text-center">
            <span ref={ref} className="text-3xl md:text-4xl font-bold text-white">
                0+
            </span>
            <span className="text-white/80 text-sm block mt-1">{label}</span>
        </div>
    );
}

export function FarmsPreview() {
    const contentRef = useScrollReveal({ y: 40 });
    const imageRef = useParallax(0.1);

    return (
        <section id="farms" className="relative overflow-hidden">
            {/* Background Image */}
            <div ref={imageRef} className="absolute inset-0 -z-10">
                <Image
                    src="/images/farms-hero.jpg"
                    alt="Wonderland Farms"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#4CAF50]/95 via-[#4CAF50]/85 to-[#4CAF50]/70" />
            </div>

            <div className="container-wl section-padding">
                <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-white">
                        <span className="caption text-white/80 mb-3 block">
                            Wonderland Farms
                        </span>
                        <h2 className="text-white mb-6">
                            The Future of Farming is Here
                        </h2>
                        <p className="text-white/90 text-lg mb-8 leading-relaxed">
                            A state-of-the-art facility combining Israeli technology with
                            Kenyan heritage. Our zero-grazing unit features automated feeding,
                            climate control, and real-time health monitoring.
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {highlights.map((item) => (
                                <div key={item.title} className="text-center">
                                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-3">
                                        {item.icon}
                                    </div>
                                    <h5 className="font-medium text-sm mb-1">{item.title}</h5>
                                    <p className="text-white/70 text-xs">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/farms"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[var(--wl-leaf)] font-medium hover:bg-white/90 transition-colors"
                        >
                            Explore Our Farms
                            <ArrowRight size={20} weight="bold" />
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
                        <h4 className="text-white font-semibold mb-6 text-center">
                            By The Numbers
                        </h4>
                        <div className="grid grid-cols-2 gap-6">
                            <StatCounter value={500} label="Head of Cattle" />
                            <StatCounter value={100} label="Traceability" />
                            <StatCounter value={15} label="Years Experience" />
                            <StatCounter value={0} label="Antibiotics Used" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

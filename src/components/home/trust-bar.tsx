"use client";

import { useScrollReveal } from "@/lib/gsap";
import { ShieldCheck, Medal, Certificate } from "@phosphor-icons/react";

const certifications = [
    { icon: <ShieldCheck size={24} weight="duotone" />, name: "KEBS Certified" },
    { icon: <Medal size={24} weight="duotone" />, name: "Halal Certified" },
    { icon: <Certificate size={24} weight="duotone" />, name: "ISO 22000" },
];

const stats = [
    { value: "500+", label: "Head of Cattle" },
    { value: "10+", label: "Products" },
    { value: "1000+", label: "Farmers Trained" },
];

export function TrustBar() {
    const ref = useScrollReveal({ y: 30 });

    return (
        <section className="py-12 bg-white dark:bg-[#2C2C2C] border-y border-gray-100 dark:border-gray-800">
            <div ref={ref} className="container-wl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Stats */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl md:text-3xl font-bold text-[var(--wl-emerald)]">
                                    {stat.value}
                                </p>
                                <p className="text-gray-500 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="hidden lg:block w-px h-16 bg-gray-200 dark:bg-gray-700" />

                    {/* Certifications */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {certifications.map((cert) => (
                            <div
                                key={cert.name}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--wl-cream)] dark:bg-[#1A1A1A] text-gray-600 dark:text-gray-400"
                            >
                                <span className="text-[var(--wl-emerald)]">{cert.icon}</span>
                                <span className="text-sm font-medium">{cert.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

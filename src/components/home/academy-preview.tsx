"use client";

import Link from "next/link";
import { useScrollReveal, useStaggerReveal } from "@/lib/gsap";
import { courses } from "@/lib/data/courses";
import { siteConfig } from "@/lib/data/site";
import {
    ArrowRight,
    Clock,
    CurrencyCircleDollar,
    Calendar,
    GraduationCap,
} from "@phosphor-icons/react";

export function AcademyPreview() {
    const headerRef = useScrollReveal({ y: 40 });
    const coursesRef = useStaggerReveal({ stagger: 0.15 });

    // Get first 2 courses
    const featuredCourses = courses.slice(0, 2);

    const formatCurrency = (amount: number) =>
        new Intl.NumberFormat("en-KE", {
            style: "currency",
            currency: "KES",
            minimumFractionDigits: 0,
        }).format(amount);

    const handleApply = (courseName: string) => {
        const message = encodeURIComponent(
            `Hello! I would like to apply for the ${courseName} course. Please share more details.`
        );
        const phone = siteConfig.whatsapp.replace(/[^0-9]/g, "");
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    };

    return (
        <section
            id="academy"
            className="section-padding bg-white dark:bg-[#2C2C2C]"
        >
            <div className="container-wl">
                {/* Section Header */}
                <div ref={headerRef} className="text-center mb-12">
                    <span
                        className="caption mb-3 block"
                        style={{ color: "var(--wl-blue)" }}
                    >
                        Wonderland Academy
                    </span>
                    <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-4">
                        Grow Your Knowledge. Grow Your Wealth.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                        Practical training for the modern agri-preneur. Learn from industry
                        experts on a real working farm.
                    </p>
                </div>

                {/* Courses */}
                <div ref={coursesRef} className="grid md:grid-cols-2 gap-8 mb-10">
                    {featuredCourses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-[var(--wl-cream)] dark:bg-[#1A1A1A] rounded-3xl p-8 border border-gray-200 dark:border-gray-700"
                        >
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--wl-blue)]/10 text-[var(--wl-blue)] text-sm font-medium mb-4">
                                <Calendar size={16} />
                                Next Intake: {course.nextIntake}
                            </div>

                            <h3 className="text-[var(--wl-charcoal)] dark:text-white mb-3">
                                {course.name}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                                {course.description}
                            </p>

                            {/* Meta */}
                            <div className="flex flex-wrap gap-4 mb-6">
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Clock size={18} />
                                    <span className="text-sm">{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500">
                                    <CurrencyCircleDollar size={18} />
                                    <span className="text-sm">{formatCurrency(course.fee)}</span>
                                </div>
                            </div>

                            {/* Topics Preview */}
                            <div className="mb-6">
                                <p className="text-xs text-gray-500 mb-2">What you'll learn:</p>
                                <div className="flex flex-wrap gap-2">
                                    {course.topics.slice(0, 3).map((topic) => (
                                        <span
                                            key={topic}
                                            className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={() => handleApply(course.name)}
                                className="w-full py-3 rounded-full font-medium text-white transition-all hover:opacity-90"
                                style={{ backgroundColor: "var(--wl-blue)" }}
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>

                {/* View All Link */}
                <div className="text-center">
                    <Link
                        href="/academy"
                        className="inline-flex items-center gap-2 font-medium text-[var(--wl-blue)] hover:gap-3 transition-all"
                    >
                        <GraduationCap size={20} weight="duotone" />
                        View All Courses
                        <ArrowRight size={20} weight="bold" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

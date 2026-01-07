"use client";

import { useState } from "react";
import { PageHero, CourseCard } from "@/components/shared";
import { useStaggerReveal, useScrollReveal } from "@/lib/gsap";
import { courses, academyContent } from "@/lib/data/courses";
import { siteConfig } from "@/lib/data/site";
import {
    Chalkboard,
    UsersFour,
    Certificate,
    Handshake,
    X,
} from "@phosphor-icons/react";
import type { Course } from "@/lib/data/courses";

const featureIcons = [
    <Chalkboard key="1" size={32} weight="duotone" />,
    <UsersFour key="2" size={32} weight="duotone" />,
    <Certificate key="3" size={32} weight="duotone" />,
    <Handshake key="4" size={32} weight="duotone" />,
];

export default function AcademyPage() {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const featuresRef = useStaggerReveal({ stagger: 0.1 });
    const coursesRef = useStaggerReveal({ stagger: 0.15 });
    const ctaRef = useScrollReveal();

    const handleApply = (course: Course) => {
        const message = encodeURIComponent(
            `Hello! I would like to apply for the ${course.name} course starting ${course.nextIntake}. Please share more details.`
        );
        const phone = siteConfig.whatsapp.replace(/[^0-9]/g, "");
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    };

    return (
        <>
            <PageHero
                title={academyContent.headline}
                subtitle={academyContent.subheadline}
                image="/images/academy-hero.jpg"
                accentColor="#008CBA"
            />

            {/* Features */}
            <section className="section-padding bg-white dark:bg-[#1A1A1A]">
                <div className="container-wl">
                    <div
                        ref={featuresRef}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                        {academyContent.features.map((feature, index) => (
                            <div key={feature.title} className="text-center">
                                <div className="w-16 h-16 rounded-2xl bg-[var(--wl-blue)]/10 flex items-center justify-center mx-auto mb-4 text-[var(--wl-blue)]">
                                    {featureIcons[index]}
                                </div>
                                <h4 className="text-[var(--wl-charcoal)] dark:text-white font-medium mb-2">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses */}
            <section className="section-padding bg-[var(--wl-cream)] dark:bg-[#1A1A1A]">
                <div className="container-wl">
                    <div className="text-center mb-12">
                        <span className="caption text-[var(--wl-blue)] mb-4 block">
                            Our Programs
                        </span>
                        <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-4">
                            Courses Offered
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            {academyContent.description}
                        </p>
                    </div>

                    <div
                        ref={coursesRef}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        {courses.map((course) => (
                            <CourseCard
                                key={course.id}
                                course={course}
                                onApply={handleApply}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Download Brochure CTA */}
            <section
                ref={ctaRef}
                className="py-16"
                style={{ backgroundColor: "var(--wl-blue)" }}
            >
                <div className="container-wl text-center">
                    <h3 className="text-white text-2xl md:text-3xl font-semibold mb-4">
                        Download Our Course Brochure
                    </h3>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        Get detailed information about all our courses, schedules, and
                        admission requirements.
                    </p>
                    <button className="btn-pill bg-white text-[var(--wl-blue)] hover:bg-white/90">
                        Download PDF Brochure
                    </button>
                </div>
            </section>
        </>
    );
}

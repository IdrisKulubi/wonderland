"use client";

import Image from "next/image";
import { useRef } from "react";
import type { Course } from "@/lib/data/courses";
import { Calendar, Clock, CurrencyCircleDollar } from "@phosphor-icons/react";

interface CourseCardProps {
    course: Course;
    onApply?: (course: Course) => void;
}

export function CourseCard({ course, onApply }: CourseCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-KE", {
            style: "currency",
            currency: "KES",
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div ref={cardRef} className="card-wl overflow-hidden group">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-gray-100">
                <Image
                    src={course.image}
                    alt={course.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Next Intake Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[var(--wl-blue)] text-white text-xs font-medium">
                    {course.nextIntake}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-[var(--wl-charcoal)] dark:text-white mb-2">
                    {course.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {course.description}
                </p>

                {/* Meta Info */}
                <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col items-center text-center">
                        <Clock size={20} className="text-[var(--wl-blue)] mb-1" />
                        <span className="text-xs text-gray-500">Duration</span>
                        <span className="text-sm font-medium text-[var(--wl-charcoal)] dark:text-white">
                            {course.duration}
                        </span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <Calendar size={20} className="text-[var(--wl-blue)] mb-1" />
                        <span className="text-xs text-gray-500">Next Intake</span>
                        <span className="text-sm font-medium text-[var(--wl-charcoal)] dark:text-white">
                            {course.nextIntake.split(" ")[0]}
                        </span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <CurrencyCircleDollar size={20} className="text-[var(--wl-blue)] mb-1" />
                        <span className="text-xs text-gray-500">Fee</span>
                        <span className="text-sm font-medium text-[var(--wl-charcoal)] dark:text-white">
                            {formatCurrency(course.fee)}
                        </span>
                    </div>
                </div>

                {/* Topics Preview */}
                <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Topics include:</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {course.topics.slice(0, 3).map((topic) => (
                            <li key={topic} className="flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-[var(--wl-blue)]" />
                                {topic}
                            </li>
                        ))}
                        {course.topics.length > 3 && (
                            <li className="text-[var(--wl-blue)] text-xs">
                                +{course.topics.length - 3} more topics
                            </li>
                        )}
                    </ul>
                </div>

                {/* Apply Button */}
                <button
                    onClick={() => onApply?.(course)}
                    className="w-full py-3 rounded-full font-medium text-white transition-all hover:opacity-90 bg-[var(--wl-blue)]"
                >
                    Apply Now
                </button>
            </div>
        </div>
    );
}

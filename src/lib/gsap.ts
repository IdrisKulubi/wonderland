"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Default animation config
const defaultEase = "power2.out";
const defaultDuration = 0.8;

/**
 * Fade in and slide up animation
 */
export function useFadeInUp(
    options: {
        delay?: number;
        duration?: number;
        y?: number;
        stagger?: number;
    } = {}
) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.from(ref.current!.children, {
                y: options.y ?? 30,
                opacity: 0,
                duration: options.duration ?? defaultDuration,
                delay: options.delay ?? 0,
                stagger: options.stagger ?? 0.1,
                ease: defaultEase,
            });
        }, ref);

        return () => ctx.revert();
    }, [options.delay, options.duration, options.y, options.stagger]);

    return ref;
}

/**
 * Parallax effect for images on scroll
 */
export function useParallax(speed: number = 0.3) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.to(ref.current, {
                yPercent: speed * 100,
                ease: "none",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        }, ref);

        return () => ctx.revert();
    }, [speed]);

    return ref;
}

/**
 * Reveal animation triggered by scroll
 */
export function useScrollReveal(
    options: {
        y?: number;
        duration?: number;
        delay?: number;
        start?: string;
    } = {}
) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.from(ref.current, {
                y: options.y ?? 50,
                opacity: 0,
                duration: options.duration ?? defaultDuration,
                delay: options.delay ?? 0,
                ease: defaultEase,
                scrollTrigger: {
                    trigger: ref.current,
                    start: options.start ?? "top 85%",
                    toggleActions: "play none none none",
                },
            });
        }, ref);

        return () => ctx.revert();
    }, [options.y, options.duration, options.delay, options.start]);

    return ref;
}

/**
 * Counter animation for stats
 */
export function useCounter(
    endValue: number,
    options: {
        duration?: number;
        suffix?: string;
        prefix?: string;
    } = {}
) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            const obj = { value: 0 };

            gsap.to(obj, {
                value: endValue,
                duration: options.duration ?? 2,
                ease: "power1.out",
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
                onUpdate: () => {
                    if (ref.current) {
                        const prefix = options.prefix ?? "";
                        const suffix = options.suffix ?? "";
                        ref.current.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
                    }
                },
            });
        }, ref);

        return () => ctx.revert();
    }, [endValue, options.duration, options.suffix, options.prefix]);

    return ref;
}

/**
 * Scale animation on scroll (for cards)
 */
export function useScaleOnScroll(
    options: {
        startScale?: number;
        duration?: number;
    } = {}
) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.from(ref.current, {
                scale: options.startScale ?? 0.95,
                opacity: 0,
                duration: options.duration ?? defaultDuration,
                ease: defaultEase,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                },
            });
        }, ref);

        return () => ctx.revert();
    }, [options.startScale, options.duration]);

    return ref;
}

/**
 * Stagger children animation on scroll
 */
export function useStaggerReveal(
    options: {
        stagger?: number;
        y?: number;
        duration?: number;
    } = {}
) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            gsap.from(ref.current!.children, {
                y: options.y ?? 40,
                opacity: 0,
                duration: options.duration ?? defaultDuration,
                stagger: options.stagger ?? 0.15,
                ease: defaultEase,
                scrollTrigger: {
                    trigger: ref.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });
        }, ref);

        return () => ctx.revert();
    }, [options.stagger, options.y, options.duration]);

    return ref;
}

/**
 * Hero text animation (split text effect simulation)
 */
export function useHeroTextReveal(delay: number = 0) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay });

            // Animate the heading
            tl.from(ref.current!.querySelector("h1"), {
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Animate the subtitle
            tl.from(
                ref.current!.querySelector("p"),
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                },
                "-=0.5"
            );

            // Animate buttons
            tl.from(
                ref.current!.querySelectorAll("button, a"),
                {
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                },
                "-=0.4"
            );
        }, ref);

        return () => ctx.revert();
    }, [delay]);

    return ref;
}

/**
 * Magnetic hover effect for buttons
 */
export function useMagneticHover(strength: number = 0.3) {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!ref.current) return;

        const element = ref.current;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(element, {
                x: x * strength,
                y: y * strength,
                duration: 0.3,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)",
            });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [strength]);

    return ref;
}

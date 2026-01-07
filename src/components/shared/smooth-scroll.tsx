"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollProps {
    children: React.ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initialize ScrollTrigger for all elements with data-animate attribute
        const elements = document.querySelectorAll("[data-animate]");

        elements.forEach((element) => {
            const animation = element.getAttribute("data-animate");
            const delay = parseFloat(element.getAttribute("data-delay") || "0");

            switch (animation) {
                case "fade-up":
                    gsap.from(element, {
                        y: 50,
                        opacity: 0,
                        duration: 0.8,
                        delay,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                    break;

                case "fade-in":
                    gsap.from(element, {
                        opacity: 0,
                        duration: 0.8,
                        delay,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                    break;

                case "scale":
                    gsap.from(element, {
                        scale: 0.9,
                        opacity: 0,
                        duration: 0.8,
                        delay,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                    break;

                case "slide-left":
                    gsap.from(element, {
                        x: -50,
                        opacity: 0,
                        duration: 0.8,
                        delay,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                    break;

                case "slide-right":
                    gsap.from(element, {
                        x: 50,
                        opacity: 0,
                        duration: 0.8,
                        delay,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    });
                    break;
            }
        });

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return <div ref={containerRef}>{children}</div>;
}

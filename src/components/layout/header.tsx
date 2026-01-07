"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { siteConfig, navigation } from "@/lib/data/site";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const getAccentColor = (accent: string) => {
        const colors: Record<string, string> = {
            gold: "var(--wl-gold)",
            leaf: "var(--wl-leaf)",
            coral: "var(--wl-coral)",
            blue: "var(--wl-blue)",
            emerald: "var(--wl-emerald)",
        };
        return colors[accent] || "var(--wl-emerald)";
    };

    // Handle smooth scrolling for anchor links
    const handleNavClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            // Check if it's an anchor link on homepage
            if (href.startsWith("/#")) {
                e.preventDefault();
                const targetId = href.replace("/#", "");

                // If already on homepage, smooth scroll
                if (pathname === "/") {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                } else {
                    // Navigate to homepage first, then scroll
                    router.push("/");
                    setTimeout(() => {
                        const element = document.getElementById(targetId);
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                    }, 100);
                }

                setIsMobileMenuOpen(false);
            }
        },
        [pathname, router]
    );

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/95 dark:bg-[#1A1A1A]/95 backdrop-blur-md shadow-sm"
                        : "bg-gradient-to-b from-black/50 to-transparent"
                )}
            >
                <div className="container-wl">
                    <nav className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-bold text-xl"
                            style={{ color: isScrolled ? "var(--wl-emerald)" : "white" }}
                        >
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                                style={{ backgroundColor: "var(--wl-emerald)" }}
                            >
                                W
                            </div>
                            <span className={cn(!isScrolled && "text-white")}>
                                {siteConfig.name.split(" ")[0]}
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className={cn(
                                        "relative py-2 text-sm font-medium transition-colors cursor-pointer",
                                        isScrolled
                                            ? "text-[var(--wl-charcoal)] hover:text-[var(--wl-emerald)] dark:text-white dark:hover:text-[var(--wl-emerald)]"
                                            : "text-white/80 hover:text-white"
                                    )}
                                >
                                    {item.name}
                                    <span
                                        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full scale-x-0 hover:scale-x-100 transition-transform origin-left"
                                        style={{ backgroundColor: getAccentColor(item.accent) }}
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded-lg transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            style={{
                                color: isScrolled ? "var(--wl-charcoal)" : "white",
                            }}
                        >
                            {isMobileMenuOpen ? (
                                <X size={24} weight="bold" />
                            ) : (
                                <List size={24} weight="bold" />
                            )}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300",
                    isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={cn(
                    "fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white dark:bg-[#1A1A1A] z-50 md:hidden transition-transform duration-300 ease-out",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col h-full p-6 pt-24">
                    <nav className="flex flex-col gap-2">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="flex items-center gap-4 px-4 py-4 rounded-xl text-lg font-medium text-[var(--wl-charcoal)] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: getAccentColor(item.accent) }}
                                />
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 mb-2">{siteConfig.tagline}</p>
                        <a
                            href={`tel:${siteConfig.phone}`}
                            className="text-[var(--wl-emerald)] font-medium"
                        >
                            {siteConfig.phone}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

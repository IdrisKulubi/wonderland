"use client";

import { usePathname } from "next/navigation";
import { WhatsappLogo } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/data/site";

const pageMessages: Record<string, string> = {
    "/": "Hello! I'd like to learn more about Wonderland Group.",
    "/feeds": "Hello! I'm interested in your animal feeds products.",
    "/farms": "Hello! I'd like to know more about Wonderland Farms.",
    "/products": "Hello! I'm interested in your dairy products.",
    "/academy": "Hello! I'd like to enquire about the Agri-Academy courses.",
    "/contact": "Hello! I'd like to get in touch with Wonderland Group.",
};

export function WhatsAppButton() {
    const pathname = usePathname();

    const getMessage = () => {
        return pageMessages[pathname] || pageMessages["/"];
    };

    const getWhatsAppUrl = () => {
        const phone = siteConfig.whatsapp.replace(/[^0-9]/g, "");
        const message = encodeURIComponent(getMessage());
        return `https://wa.me/${phone}?text=${message}`;
    };

    return (
        <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Contact us on WhatsApp"
        >
            {/* Pulse Animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

            {/* Button */}
            <div className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <WhatsappLogo size={28} weight="fill" className="text-white" />
            </div>

            {/* Tooltip */}
            <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-white dark:bg-[#2C2C2C] rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                <span className="text-sm font-medium text-[var(--wl-charcoal)] dark:text-white">
                    Chat with us
                </span>
                {/* Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-white dark:bg-[#2C2C2C] rotate-45" />
            </div>
        </a>
    );
}

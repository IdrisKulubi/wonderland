"use client";

import { useState } from "react";
import { PageHero } from "@/components/shared";
import { useScrollReveal } from "@/lib/gsap";
import { siteConfig } from "@/lib/data/site";
import {
    Phone,
    EnvelopeSimple,
    MapPin,
    WhatsappLogo,
} from "@phosphor-icons/react";

const interestOptions = [
    { value: "feeds", label: "Buying Feeds" },
    { value: "products", label: "Buying Products" },
    { value: "academy", label: "Academy Enquiry" },
    { value: "investor", label: "Investor Relations" },
    { value: "other", label: "Other" },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        interest: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useScrollReveal({ y: 40 });
    const infoRef = useScrollReveal({ y: 40, delay: 0.2 });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // For now, redirect to WhatsApp with the message
        const message = encodeURIComponent(
            `Name: ${formData.name}\nPhone: ${formData.phone}\nInterest: ${formData.interest}\n\nMessage: ${formData.message}`
        );
        const phone = siteConfig.whatsapp.replace(/[^0-9]/g, "");
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

        setIsSubmitting(false);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <>
            <PageHero
                title="Get in Touch"
                subtitle="We'd love to hear from you. Reach out for enquiries, partnerships, or just to say hello."
                image="/images/contact-hero.jpg"
                accentColor="var(--wl-emerald)"
            />

            <section className="section-padding bg-[var(--wl-cream)] dark:bg-[#1A1A1A]">
                <div className="container-wl">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div ref={formRef} className="card-wl p-8">
                            <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-6">
                                Send us a Message
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-[var(--wl-charcoal)] dark:text-white mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-[var(--wl-emerald)] text-[var(--wl-charcoal)] dark:text-white"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-medium text-[var(--wl-charcoal)] dark:text-white mb-2"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-[var(--wl-emerald)] text-[var(--wl-charcoal)] dark:text-white"
                                        placeholder="+254 7XX XXX XXX"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="interest"
                                        className="block text-sm font-medium text-[var(--wl-charcoal)] dark:text-white mb-2"
                                    >
                                        I'm interested in...
                                    </label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-[var(--wl-emerald)] text-[var(--wl-charcoal)] dark:text-white"
                                    >
                                        <option value="">Select an option</option>
                                        {interestOptions.map((option) => (
                                            <option key={option.value} value={option.label}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-[var(--wl-charcoal)] dark:text-white mb-2"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border-none focus:ring-2 focus:ring-[var(--wl-emerald)] text-[var(--wl-charcoal)] dark:text-white resize-none"
                                        placeholder="Tell us more about your enquiry..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-pill btn-pill-primary disabled:opacity-50"
                                >
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div ref={infoRef} className="space-y-8">
                            <div>
                                <h2 className="text-[var(--wl-charcoal)] dark:text-white mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-8">
                                    Have questions? Reach out through any of the channels below,
                                    or fill out the form and we'll get back to you within 24
                                    hours.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2C2C2C] hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[var(--wl-emerald)]/10 flex items-center justify-center">
                                        <Phone size={24} className="text-[var(--wl-emerald)]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="font-medium text-[var(--wl-charcoal)] dark:text-white">
                                            {siteConfig.phone}
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-[#2C2C2C] hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-full bg-[var(--wl-emerald)]/10 flex items-center justify-center">
                                        <EnvelopeSimple
                                            size={24}
                                            className="text-[var(--wl-emerald)]"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium text-[var(--wl-charcoal)] dark:text-white">
                                            {siteConfig.email}
                                        </p>
                                    </div>
                                </a>

                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#25D366] text-white hover:bg-[#20BA5A] transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                        <WhatsappLogo size={24} weight="fill" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/80">WhatsApp</p>
                                        <p className="font-medium">Chat with us now</p>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-[#2C2C2C]">
                                    <div className="w-12 h-12 rounded-full bg-[var(--wl-emerald)]/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin size={24} className="text-[var(--wl-emerald)]" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Address</p>
                                        <p className="font-medium text-[var(--wl-charcoal)] dark:text-white">
                                            {siteConfig.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

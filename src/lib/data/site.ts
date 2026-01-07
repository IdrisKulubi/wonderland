// Site-wide data and content
export const siteConfig = {
    name: "Wonderland Group",
    tagline: "The Full Circle of Goodness.",
    description: "Kenya's first fully integrated agricultural ecosystem. From our soil to your spoon.",
    url: "https://wonderlandgroup.co.ke",
    whatsapp: "+254714594345",
    email: "info@wonderlandgroup.co.ke",
    phone: "+254 714 594 345",
    address: "Nairobi, Kenya",
    socials: {
        instagram: "https://instagram.com/wonderlandgroup",
        facebook: "https://facebook.com/wonderlandgroup",
        linkedin: "https://linkedin.com/company/wonderlandgroup",
    },
};

export const navigation = [
    { name: "Feeds", href: "/#feeds", fullPage: "/feeds", accent: "gold" },
    { name: "Farms", href: "/#farms", fullPage: "/farms", accent: "leaf" },
    { name: "Products", href: "/#products", fullPage: "/products", accent: "coral" },
    { name: "Academy", href: "/#academy", fullPage: "/academy", accent: "blue" },
    { name: "Contact", href: "/#contact", fullPage: "/contact", accent: "emerald" },
];

// Homepage content
export const heroContent = {
    headline: "The Full Circle of Goodness.",
    subheadline: "Kenya's first fully integrated agricultural ecosystem. From our soil to your spoon.",
    primaryCta: { label: "Explore Our World", href: "#ecosystem" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
};

export const ecosystemPillars = [
    {
        id: "feeds",
        name: "Feeds",
        tagline: "Precision nutrition for maximum yield.",
        description: "Scientifically formulated animal feeds for higher yields and healthier livestock.",
        href: "/feeds",
        accent: "gold",
    },
    {
        id: "farms",
        name: "Farms",
        tagline: "Modern, sustainable, and ethical farming.",
        description: "State-of-the-art facilities combining Israeli technology with Kenyan heritage.",
        href: "/farms",
        accent: "leaf",
    },
    {
        id: "foods",
        name: "Foods",
        tagline: "Fresh, preservative-free dairy products.",
        description: "Pure, fresh, and local. No additives. No shortcuts.",
        href: "/products",
        accent: "coral",
    },
    {
        id: "academy",
        name: "Academy",
        tagline: "Training the next generation of farmers.",
        description: "Practical training for the modern agri-preneur.",
        href: "/academy",
        accent: "blue",
    },
];

export const whyUsContent = {
    headline: "We Don't Just Source It. We Create It.",
    body: "Unlike other processors, Wonderland controls every step of the value chain. We grow the feed, we rear the herd, and we process the milk. This guarantees a level of quality that traditional manufacturers simply cannot match.",
    stats: [
        { value: 100, suffix: "%", label: "Traceable" },
        { value: 0, suffix: "%", label: "Antibiotics" },
    ],
};

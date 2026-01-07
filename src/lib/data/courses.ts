// Academy courses data

export interface Course {
    id: string;
    name: string;
    description: string;
    duration: string;
    fee: number;
    nextIntake: string;
    topics: string[];
    image: string;
}

export const courses: Course[] = [
    {
        id: "dairy-management",
        name: "Dairy Management",
        description: "From calf rearing to milk hygiene. A comprehensive course covering all aspects of modern dairy farming.",
        duration: "4 weeks",
        fee: 35000,
        nextIntake: "February 2026",
        topics: [
            "Calf rearing and nutrition",
            "Breeding and genetics",
            "Milk hygiene and quality control",
            "Disease prevention and management",
            "Record keeping and farm management",
        ],
        image: "/images/academy/dairy-management.jpg",
    },
    {
        id: "feed-formulation",
        name: "Feed Formulation",
        description: "Understanding animal nutrition. Learn to formulate cost-effective feeds for maximum productivity.",
        duration: "2 weeks",
        fee: 25000,
        nextIntake: "March 2026",
        topics: [
            "Principles of animal nutrition",
            "Raw material selection",
            "Ration formulation techniques",
            "Quality control in feed production",
            "Cost optimization strategies",
        ],
        image: "/images/academy/feed-formulation.jpg",
    },
    {
        id: "farm-business",
        name: "Farm Business Management",
        description: "How to run your farm like a CEO. Business skills for the modern agri-preneur.",
        duration: "3 weeks",
        fee: 30000,
        nextIntake: "April 2026",
        topics: [
            "Farm financial management",
            "Marketing and sales strategies",
            "Access to credit and funding",
            "Business planning and projections",
            "Digital tools for farm management",
        ],
        image: "/images/farms-hero.jpg",
    },
    {
        id: "poultry-production",
        name: "Poultry Production",
        description: "Intensive training on layers and broilers. From day-old chicks to market-ready birds.",
        duration: "3 weeks",
        fee: 28000,
        nextIntake: "May 2026",
        topics: [
            "Brooding and early management",
            "Feed and nutrition programs",
            "Housing and environmental control",
            "Disease prevention and biosecurity",
            "Marketing and value addition",
        ],
        image: "/images/feeds-hero.jpg",
    },
];

export const academyContent = {
    headline: "Grow Your Knowledge. Grow Your Wealth.",
    subheadline: "Practical training for the modern agri-preneur.",
    description: "The Wonderland Agri-Academy offers hands-on training programs designed to equip farmers with the skills and knowledge needed to succeed in modern agriculture.",
    features: [
        {
            title: "Hands-On Training",
            description: "Learn by doing on our working farm facilities.",
        },
        {
            title: "Expert Instructors",
            description: "Taught by industry professionals with decades of experience.",
        },
        {
            title: "Certification",
            description: "Receive a recognized certificate upon completion.",
        },
        {
            title: "Networking",
            description: "Connect with fellow farmers and industry partners.",
        },
    ],
};

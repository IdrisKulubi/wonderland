import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Wonderland Group",
    description:
        "Get in touch with Wonderland Group for enquiries about feeds, dairy products, academy courses, or investor relations.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Animal Feeds | Wonderland Group",
    description:
        "Scientifically formulated animal feeds for higher yields and healthier livestock. Dairy meal, poultry feeds, and pig finishers.",
};

export default function FeedsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Farms | Wonderland Group",
    description:
        "A state-of-the-art facility combining Israeli technology with Kenyan heritage. Zero-grazing, pedigree genetics, and sustainable farming.",
};

export default function FarmsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

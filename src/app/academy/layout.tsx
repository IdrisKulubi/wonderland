import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Agri-Academy | Wonderland Group",
    description:
        "Practical training for the modern agri-preneur. Dairy management, feed formulation, and farm business courses.",
};

export default function AcademyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

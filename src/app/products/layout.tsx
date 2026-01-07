import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dairy Products | Wonderland Group",
    description:
        "Pure, fresh, local dairy products. Fresh milk, yoghurt, and artisan cheese made with no additives.",
};

export default function ProductsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}

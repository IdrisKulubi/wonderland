import {
    Hero,
    TrustBar,
    EcosystemCircle,
    FeedsPreview,
    FarmsPreview,
    ProductsPreview,
    AcademyPreview,
    WhyUs,
    FinalCTA,
} from "@/components/home";

export default function HomePage() {
    return (
        <>
            {/* 1. Hero - Emotional hook */}
            <Hero />

            {/* 2. Trust Bar - Build credibility */}
            <TrustBar />

            {/* 3. Ecosystem Overview - What we do */}
            <EcosystemCircle />

            {/* 4. Feeds Section - B2B products */}
            <FeedsPreview />

            {/* 5. Farms Section - Technology showcase */}
            <FarmsPreview />

            {/* 6. Products Section - B2C dairy */}
            <ProductsPreview />

            {/* 7. Academy Section - Training */}
            <AcademyPreview />

            {/* 8. Why Us - Differentiators */}
            <WhyUs />

            {/* 9. Final CTA - Contact */}
            <FinalCTA />
        </>
    );
}
import React from "react";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/features/home/hero/HeroSection";
import backgroundImage from "@/assets/images/hero.png";
import PartnersSection from "@/components/features/home/partners/PartnersSection";
import StatsSection from "@/components/features/home/stats/StatsSection";
import NewProductsSection from "@/components/features/home/new-products/NewProductsSection";
import FounderSection from "@/components/features/home/founder/FounderSection";

const HomePage: React.FC = () => {
    return (
        <main className="overflow-x-hidden">
            <div
                style={
                    {
                        "--hero-image": `url(${backgroundImage})`,
                    } as React.CSSProperties
                }
                className="hero-section-bg bg-cover bg-center bg-no-repeat pt-2 lg:pt-4"
            >
                <Header />
                <HeroSection />
            </div>
            <PartnersSection />
            <StatsSection />
            <NewProductsSection />
            <FounderSection />
        </main>
    );
};

export default HomePage;

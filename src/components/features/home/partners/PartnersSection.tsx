import React from "react";
import partner1 from "@/assets/images/partners/partner1.png";
import partner2 from "@/assets/images/partners/partner2.png";
import partner3 from "@/assets/images/partners/partner3.png";

const partners = [
    { src: partner1, alt: "Crosshatch" },
    { src: partner2, alt: "LC Waikiki" },
    { src: partner3, alt: "Terranova" },
];

const marqueePartners = [...partners, ...partners, ...partners, ...partners];

const PartnersSection: React.FC = () => {
    return (
        <section className="mt-10 mb-12 lg:mt-20 lg:mb-[100px]">
            <h4 className="text-center text-black text-base lg:text-xl mb-4 lg:mb-[26px] px-4">
                Bizga ishongan hamkorlarimiz
            </h4>

            <div className="overflow-hidden">
                <div className="partners-marquee-track flex items-center gap-10 lg:gap-20">
                    {[...marqueePartners, ...marqueePartners].map(
                        (partner, index) => (
                            <img
                                key={index}
                                src={partner.src}
                                alt={partner.alt}
                                className="h-5 sm:h-6 lg:h-[29px] w-auto shrink-0 object-contain select-none"
                                draggable={false}
                            />
                        ),
                    )}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;

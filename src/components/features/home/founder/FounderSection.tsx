import React from "react";
import { ChevronRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import founderBg from "@/assets/images/founder-bg.png";

const FounderSection: React.FC = () => {
    return (
        <section className="max-w-[1412px] px-4 mx-auto mb-10 lg:mb-[160px]">
            <div className="relative isolate overflow-hidden rounded-[16px] lg:rounded-[25px]">
                <img
                    src={founderBg}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-right"
                    aria-hidden
                />
                <div
                    aria-hidden
                    className="absolute inset-0 bg-linear-to-r from-black/80 via-black/35 to-transparent sm:from-black/60 sm:via-black/20 lg:from-transparent lg:via-transparent"
                />

                <div
                    aria-hidden
                    className="pointer-events-none absolute -left-[80px] bottom-[-40px] sm:-left-[120px] lg:-left-[192px] lg:bottom-[-80px] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[528px] lg:h-[528px] rounded-full bg-[#FAB91D]/50 blur-[120px] sm:blur-[250px] lg:blur-[500px]"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute -top-[80px] -right-[40px] sm:-top-[140px] sm:-right-[60px] lg:-top-[220px] lg:left-[1066px] lg:right-auto w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[528px] lg:h-[528px] rounded-full bg-white/50 blur-[120px] sm:blur-[250px] lg:blur-[500px]"
                />

                <div className="relative z-10 flex min-h-[460px] flex-col justify-between px-5 py-8 sm:min-h-[500px] sm:px-8 sm:py-10 lg:min-h-[554px] lg:px-[60px] lg:py-[60px]">
                    <div className="max-w-[520px] sm:max-w-[560px] lg:max-w-[600px]">
                        <p className="text-white text-base sm:text-lg lg:text-xl font-medium mb-1 lg:mb-2">
                            Azizbek Karimov
                        </p>
                        <p className="text-[#868585] text-sm sm:text-base mb-5 sm:mb-6 lg:mb-10">
                            Bosh direktor (CEO), Duruhan
                        </p>
                        <blockquote className="m-0 text-white text-[24px] sm:text-[32px] lg:text-[44px] leading-[110%] tracking-[-0.01em] font-medium italic">
                            “DURUHAN’da har bir mahsulotni kundalik qulaylik
                            manbai sifatida ko‘ramiz.”
                        </blockquote>
                    </div>

                    <Link
                        to="/company"
                        className="mt-8 lg:mt-10 inline-flex w-fit items-center gap-2 lg:gap-2.5 bg-[#FAB91D] text-black p-1.5 pl-5 lg:pl-6 rounded-full font-system font-medium text-sm lg:text-base active:scale-95 transition-all duration-300"
                    >
                        Batafsil ko‘rish
                        <span className="rounded-full bg-white w-[32px] h-[32px] lg:w-[42px] lg:h-[42px] flex items-center justify-center shrink-0">
                            <ChevronRightIcon className="size-[18px] lg:size-[22px] text-black" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;

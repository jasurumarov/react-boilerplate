import React from "react";
import statCard from "@/assets/images/stats-card.png";

const StatsSection: React.FC = () => {
    return (
        <section className="relative max-w-[1412px] px-4 mx-auto mb-10 lg:mb-20">
            <div className="hidden lg:flex absolute inset-y-0 left-4 right-4 items-center justify-between z-10 pointer-events-none">
                <p className="text-xl text-black text-nowrap pointer-events-auto">
                    01 / 04
                </p>
                <div className="flex flex-col gap-2.5 pointer-events-auto">
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <div className="w-2 h-2 bg-[#D9D9D9] rounded-full" />
                    <div className="w-2 h-2 bg-[#D9D9D9] rounded-full" />
                    <div className="w-2 h-2 bg-[#D9D9D9] rounded-full" />
                </div>
            </div>

            <div className="flex lg:hidden items-center justify-between mb-4 px-2">
                <p className="text-base text-black">01 / 04</p>
                <div className="flex flex-col gap-2">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#D9D9D9] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#D9D9D9] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#D9D9D9] rounded-full" />
                </div>
            </div>

            <div className="relative mx-auto w-full max-w-[1100px]">
                <img
                    src={statCard}
                    alt=""
                    className="w-full h-auto"
                    aria-hidden
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                    <p className="text-[32px] sm:text-[56px] lg:text-[72px] leading-none font-bold text-black tracking-[-1px] lg:tracking-[-2px]">
                        10,000+
                    </p>
                    <p className="mt-1 sm:mt-3 text-sm sm:text-lg lg:text-xl text-black">
                        Mamnun mijozlar
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

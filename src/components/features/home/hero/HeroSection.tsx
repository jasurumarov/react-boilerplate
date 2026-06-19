import React from "react";
import heroBadge from "@/assets/images/hero-badge.png";
import heroImage from "@/assets/images/hero-image.png";
import { PlayIcon } from "lucide-react";

const HeroSection: React.FC = () => {
    return (
        <section className="mt-6 lg:mt-[46px] pb-10 lg:pb-[66px] max-w-[1412px] px-4 mx-auto">
            <img
                src={heroBadge}
                alt="hero badge"
                className="mx-auto max-w-[150px] lg:max-w-[197px] w-full mb-[14px]"
            />
            <h1 className="max-w-[952px] mx-auto text-center text-white text-[32px] sm:text-[48px] lg:text-[84px] leading-[110%] tracking-[-1px] lg:tracking-[-4px] font-medium mb-6 lg:mb-9 px-2">
                Har kun uchun qulay va ishonchli paypoq
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 mb-8 lg:mb-12">
                <div className="max-w-[296px] w-full text-center lg:text-left text-sm lg:text-base text-white">
                    DURUHAN paypoqlari — qulaylik va sog‘lom oyoq parvarishi.
                    Har bir qadamda sifatni his qiling.
                </div>
                <img
                    src={heroImage}
                    alt="hero image"
                    className="mx-auto max-w-[280px] sm:max-w-[360px] lg:max-w-[448px] w-full shrink-0"
                />
                <div className="max-w-[310px] w-full text-center lg:text-right text-sm lg:text-base text-white">
                    3 davlat Texnologiyasi asosida ishlab chiqariladi (Turkiya +
                    O‘zbekiston + global standartlar)
                </div>
            </div>
            <button className="mx-auto text-center bg-white text-black p-1.5 pr-6 rounded-full font-system font-medium text-sm lg:text-base flex w-fit items-center justify-center gap-2.5 cursor-pointer active:scale-95 transition-all duration-300">
                <div className="rounded-full bg-[#F2F2F2] lg:w-[42px] lg:h-[42px] w-[36px] h-[36px] flex items-center justify-center">
                    <PlayIcon className="size-5 text-black" />
                </div>
                <div>
                    <span className="text-[#727377]">(01:34)</span> Videoni
                    ko‘rish
                </div>
            </button>
        </section>
    );
};

export default HeroSection;

import { ChevronRightIcon } from "lucide-react";
import React from "react";
import newProductsImage1 from "@/assets/images/new-products/new-product1.png";
import newProductsImage2 from "@/assets/images/new-products/new-product2.png";
import newProductsImage3 from "@/assets/images/new-products/new-product3.png";

const products = [
    {
        src: newProductsImage1,
        alt: "DURUHAN paypoq 1",
        className:
            "w-[100px] h-[121px] sm:w-[120px] sm:h-[145px] lg:w-[157px] lg:h-[190px]",
    },
    {
        src: newProductsImage2,
        alt: "DURUHAN paypoq 2",
        className:
            "w-[92px] h-[111px] sm:w-[110px] sm:h-[133px] lg:w-[137px] lg:h-[165px]",
    },
    {
        src: newProductsImage3,
        alt: "DURUHAN paypoq 3",
        className:
            "w-[100px] h-[121px] sm:w-[120px] sm:h-[145px] lg:w-[157px] lg:h-[190px]",
    },
];

const marqueeProducts = [...products, ...products, ...products, ...products];

const NewProductsSection: React.FC = () => {
    return (
        <section className="max-w-[1412px] px-4 mx-auto mb-10 lg:mb-[160px]">
            <div className="bg-black rounded-[16px] lg:rounded-[25px] py-8 sm:py-10 lg:py-[60px] overflow-hidden">
                <div className="flex items-center gap-2 bg-[#FFFFFF26] rounded-[18px] px-4 sm:px-5 py-[5px] mx-auto w-max text-white font-system text-xs sm:text-sm lg:text-base mb-3 lg:mb-4">
                    <div className="w-2 h-2 bg-[#FAB91D] rounded-full shrink-0" />
                    Biz haqimizda
                </div>
                <h2 className="text-[28px] sm:text-[48px] lg:text-[64px] leading-[110%] tracking-[-1%] font-medium text-white max-w-[799px] mx-auto text-center mb-4 lg:mb-6 px-4">
                    DURUHAN - yangi avlod paypoqlari
                </h2>
                <button className="mx-auto text-center bg-[#FAB91D] text-black p-1.5 pl-5 lg:pl-6 rounded-full font-system font-medium text-sm lg:text-base flex w-fit items-center justify-center gap-2 lg:gap-2.5 cursor-pointer active:scale-95 transition-all duration-300">
                    Batafsil ma’lumot
                    <div className="rounded-full bg-white w-[32px] h-[32px] lg:w-[42px] lg:h-[42px] flex items-center justify-center shrink-0">
                        <ChevronRightIcon className="size-[18px] lg:size-[22px] text-black" />
                    </div>
                </button>

                <div className="relative mt-8 mb-10 sm:mt-10 sm:mb-12 lg:mt-[63px] lg:mb-[85px] overflow-hidden">
                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[60px] sm:w-[120px] lg:w-[190px] bg-linear-to-r from-[#060606] to-transparent"
                        aria-hidden
                    />
                    <div
                        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[60px] sm:w-[120px] lg:w-[190px] bg-linear-to-l from-[#060606] to-transparent"
                        aria-hidden
                    />

                    <div className="new-products-marquee-track flex items-end gap-3 sm:gap-5 lg:gap-6">
                        {[...marqueeProducts, ...marqueeProducts].map(
                            (product, index) => (
                                <div
                                    key={index}
                                    className={`group shrink-0 overflow-hidden rounded-[14px] lg:rounded-[20px] ${product.className}`}
                                >
                                    <img
                                        src={product.src}
                                        alt={product.alt}
                                        className="h-full w-full object-cover select-none transition-transform duration-300 ease-out group-hover:scale-110"
                                        draggable={false}
                                    />
                                </div>
                            ),
                        )}
                    </div>
                </div>

                <p className="max-w-[821px] mx-auto text-center text-white text-sm sm:text-base lg:text-xl px-4">
                    DURUHAN — 2024-yilda paypoq ishlab chiqarish uchun yangi
                    brend.{" "}
                    <span className="text-[#868585]">
                        Biz inson salomatligi va qulayligini birinchi o‘ringa
                        qo‘ygan holda, ilg‘or texnologiyalar yordamida mahsulot
                        yaratamiz.
                    </span>
                </p>
            </div>
        </section>
    );
};

export default NewProductsSection;

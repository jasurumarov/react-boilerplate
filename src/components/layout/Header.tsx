import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "@/assets/images/logo.png";
import menu from "@/assets/images/menu.png";
import close from "@/assets/images/close.png";
import arrowUpRight from "@/assets/images/arrow-up-right.png";
import { HEADER_MENU_ITEMS } from "@/constants/header";
import { ChevronDownIcon } from "lucide-react";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    const renderMenuButton = (dropdownClassName: string) => (
        <div className="h-6 shrink-0">
            <button
                type="button"
                aria-expanded={isMenuOpen}
                aria-label={isMenuOpen ? "Menyuni yopish" : "Menyuni ochish"}
                onClick={() => setIsMenuOpen(open => !open)}
            >
                <img
                    src={isMenuOpen ? close : menu}
                    alt=""
                    className="h-6 w-12"
                />
            </button>

            {isMenuOpen && (
                <nav
                    className={`absolute top-[calc(100%+8px)] w-[calc(100vw-2rem)] max-w-[240px] lg:max-w-[263px] rounded-[20px] bg-black/40 backdrop-blur-[25px] p-6 lg:p-8 ${dropdownClassName}`}
                >
                    <ul>
                        {HEADER_MENU_ITEMS.map(item => (
                            <li
                                key={item.label}
                                className="pb-4 pt-4 first:pt-0 last:pb-0 border-b last:border-b-0 border-white/25 hover:opacity-80 duration-300"
                            >
                                <Link
                                    to={item.to}
                                    onClick={closeMenu}
                                    className="group flex items-center justify-between text-white text-sm lg:text-base"
                                >
                                    <span>{item.label}</span>
                                    <img
                                        src={arrowUpRight}
                                        alt="arrow up right"
                                        className="size-6 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    );

    return (
        <>
            {isMenuOpen && (
                <button
                    type="button"
                    aria-label="Menyuni yopish"
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={closeMenu}
                />
            )}

            <header className="max-w-[1056px] mx-auto px-4 sticky top-2 lg:top-4 left-0 right-0 z-50">
                <div className="relative pl-4 pr-4 py-4 lg:pl-6 lg:pr-7 bg-black rounded-[20px] flex items-center justify-between gap-4 lg:gap-20">
                    <Link to="/" className="shrink-0 lg:hidden">
                        <img src={logo} alt="logo" className="h-[22px]" />
                    </Link>

                    <div className="hidden lg:flex items-center gap-6 min-w-0">
                        {renderMenuButton("left-0")}
                        <div className="w-px h-8 opacity-25 bg-white shrink-0" />
                        <Link to="/" className="shrink-0">
                            <img src={logo} alt="logo" className="h-[27px]" />
                        </Link>
                    </div>

                    <nav className="hidden lg:block shrink-0">
                        <ul className="flex items-center gap-8">
                            <li>
                                <Link
                                    to="/company"
                                    className="text-white hover:text-white/80 duration-300"
                                >
                                    Kompaniya
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/products"
                                    className="text-white hover:text-white/80 duration-300"
                                >
                                    Mahsulotlar
                                </Link>
                            </li>
                            <div className="w-px h-8 opacity-25 bg-white" />
                            <li>
                                <button className="flex items-center gap-1 cursor-pointer text-white">
                                    <span>UZ</span>
                                    <ChevronDownIcon className="size-4" />
                                </button>
                            </li>
                            <div className="w-px h-8 opacity-25 bg-white" />
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-white hover:text-white/80 duration-300"
                                >
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="lg:hidden">
                        {renderMenuButton("right-0")}
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;

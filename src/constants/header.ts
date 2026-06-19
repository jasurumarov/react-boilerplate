export type HeaderMenuItem = {
    label: string;
    to: string;
};

export const HEADER_MENU_ITEMS: HeaderMenuItem[] = [
    { label: "Bosh sahifa", to: "/" },
    { label: "Kompaniya", to: "/company" },
    { label: "Mahsulotlar", to: "/products" },
    { label: "Galareya", to: "/gallery" },
    { label: "Yangiliklar", to: "/news" },
    { label: "Vakansiyalar", to: "/vacancies" },
    { label: "Buyurtma", to: "/order" },
];

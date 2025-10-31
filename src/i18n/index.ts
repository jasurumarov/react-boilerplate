import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translations
import enTranslations from "./locales/en.json";
import ruTranslations from "./locales/ru.json";
import uzTranslations from "./locales/uz.json";

const resources = {
    en: {
        translation: enTranslations,
    },
    ru: {
        translation: ruTranslations,
    },
    uz: {
        translation: uzTranslations,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

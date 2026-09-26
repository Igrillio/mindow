import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import zh from "./zh.json";
import en from "./en.json";
import ru from "./ru.json"; // русский перевод

i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: zh },
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: "ru", // язык по умолчанию — русский
  fallbackLng: "en", // чего нет в ru.json, берём из английского
  interpolation: {
    escapeValue: false, // React уже защищает от XSS
  },
});

export default i18n;

import i18n from "i18next";
import en from "./languages/en";
import tr from "./languages/tr";
import { initReactI18next } from "react-i18next";

const RESOURCES = {
  en: {
    translation: en,
  },
  tr: {
    translation: tr,
  },
};

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  resources: RESOURCES,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

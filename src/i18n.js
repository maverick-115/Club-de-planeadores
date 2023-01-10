import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import  translation_en  from "./translations/en/translation.json";
import  translation_es  from "./translations/es/translation.json";
i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    interpolation: { escapeValue: false},
    lng: "es",
    resources: {
      es: {
        global: translation_es,
      },
      en:
      {
        global: translation_en,
      },
    },

  });

  export default i18n;
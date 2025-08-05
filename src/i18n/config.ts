import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n.use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: {
            en: ['en'],
            pt: ['pt-BR'],
            default: ['pt-BR'],
        },
        supportedLngs: ['en', 'pt', 'pt-BR'],
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json`,
        },
        react: {
            useSuspense: true,
        },
    })
    .then(() => {
        i18n.loadLanguages(['en', 'pt-BR']);
    });

export default i18n;

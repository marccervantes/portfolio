export const translations = {
  en: {
    aboutMe: "About me",
    projects: "Projects",
  },
  es: {
    aboutMe: "Sobre mi",
    projects: "Proyectos",
  },
};

export type Locale = keyof typeof translations; // 'en' | 'es'
export type TranslationKey = keyof typeof translations['en']; // 'greeting' | 'description'

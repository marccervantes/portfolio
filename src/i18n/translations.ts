export const translations = {
  en: {
    aboutMe: "About me",
    projects: "Projects",
    contact: "Contact",
  },
  es: {
    aboutMe: "Sobre mi",
    projects: "Proyectos",
    contact: "Contacto",
  },
};

export type Locale = keyof typeof translations; // 'en' | 'es'
export type TranslationKey = keyof typeof translations['en']; // 'greeting' | 'description'

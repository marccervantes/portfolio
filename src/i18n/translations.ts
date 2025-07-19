export const translations = {
  en: {
    greeting: "Hello!",
    description: "Welcome to my website.",
  },
  es: {
    greeting: "¡Hola!",
    description: "Bienvenido a mi sitio web.",
  },
};

export type Locale = keyof typeof translations; // 'en' | 'es'
export type TranslationKey = keyof typeof translations['en']; // 'greeting' | 'description'

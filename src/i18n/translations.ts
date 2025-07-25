export const translations = {
  en: {
    projects: "Projects",
    aboutMe: "About me",
    contact: "Contact",
    intro: "Hi, I'm",
    code: "Code",
    lookMore: "Look more",
    apicrypto: "This app allows you to easily view the 100 most popular cryptocurrencies on the market, showing their current price and whether they have risen or fallen in the last 24 hours. This way, you can stay up to date with the most important movements in the crypto world without any complications, from any device and at any time.",
    planDeRisas: "I coded this website backend usando laravel api. It handles everything: creating, reading, updating, and deleting records (CRUD), managing user authentication, validating data, and structuring the database. Ensures secure and fast communication between the front end and the database, making it easy. Whether you're adding new items, editing existing ones, or retrieving filtered data, the API responds with clean, structured JSON.",
    aboutMeDescription1: "I'm a web developer with experience in designing and building responsive websites and web applications. I've worked in a variety of technologies and frameworks, including React, Angular, Laravel, and WordPress, which has allowed me to take on diverse projects and quickly adapt to different tech environments.",
    aboutMeDescription2: "Ability to teamwork, adaptable, and committed to continuous learning and improvement. I'm currently looking for new opportunities where I can contribute my skills, take on exciting challenges, and continue growing as a web development professional.",
    email: "My email is always open!"
  },
  es: {
    projects: "Proyectos",
    aboutMe: "Sobre mi",
    contact: "Contacto",
    intro: "Hola, soy",
    code: "Código",
    lookMore: "Ver más",
    apicrypto: "Esta aplicación te permite ver fácilmente las 100 criptomonedas más populares del mercado, mostrando su precio actual y si han subido o bajado en las últimas 24 horas. Así puedes estar al tanto de los movimientos más importantes en el mundo cripto sin complicaciones, desde cualquier dispositivo y en cualquier momento.",
    planDeRisas: "He escrito el backend de este sitio web usando laravel api. Se encarga de todo: crear, leer, actualizar y eliminar registros (CRUD), gestionar la autenticación de usuarios, validar datos y estructurar la base de datos. Garantiza una comunicación segura y rápida entre el front-end y la base de datos, facilitando las cosas. Ya se trate de añadir nuevos elementos, editar los existentes o recuperar datos filtrados, la API responde con un JSON limpio y estructurado.",
    aboutMeDescription1: "Soy un desarrollador web con experiencia en el diseño y la creación de sitios web y aplicaciones web adaptables. He trabajado con diversas tecnologías y marcos de trabajo, entre ellos React, Angular, Laravel y WordPress, lo que me ha permitido abordar proyectos variados y adaptarme rápidamente a diferentes entornos tecnológicos.",
    aboutMeDescription2: "Habilidad para trabajar en equipo, adaptable y comprometido con el aprendizaje y la mejora continuos. Actualmente busco nuevas oportunidades en las que pueda aportar mis habilidades, asumir retos emocionantes y seguir creciendo como profesional del desarrollo web.",
    email: "¡Mi correo electrónico siempre está abierto!"
  },
};

export type Locale = keyof typeof translations; // 'en' | 'es'
export type TranslationKey = keyof typeof translations['en']; // 'greeting' | 'description'

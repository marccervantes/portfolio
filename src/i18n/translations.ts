export const translations = {
  en: {
    projects: "Projects",
    aboutMe: "About me",
    contact: "Contact",
    intro: "Hi, I'm",
    code: "Code",
    lookMore: "See more",
    apicrypto: "This app allows you to easily view the 100 most popular cryptocurrencies on the market, showing their current price and whether they have risen or fallen in the last 24 hours. This way, you can stay up to date with the most important movements in the crypto world without any complications, from any device and at any time.",
    sushiCounter: "When I went out for sushi with my friends, we would have challenges to see who could eat the most pieces of sushi, and we would record each piece we ate on WhatsApp. I thought it was a bit old-fashioned, and as a good programmer, I decided to create my own sushi counter and make the competition more fun.",
    planDeRisas: "I developed both the backend and frontend of this website. The backend is built using a Laravel API, which handles all core functionalities such as creating, reading, updating, and deleting records (CRUD), managing user authentication, validating input data, and designing the database structure. It ensures secure and efficient communication between the frontend and the server through clean, well-structured JSON responses. On the frontend, I used Angular to build a responsive and dynamic interface that interacts seamlessly with the API. Whether you're adding new items, editing existing ones, or filtering and retrieving data, the system is optimized for performance and ease of use.",
    dkside: "I have made custom modifications in Shopify using its native language (Liquid), along with CSS and JavaScript, to achieve specific functionality and design goals. These changes have allowed me to tailor the user experience and interface to meet the unique needs of each project. Whether it involved adjusting layout structures, adding dynamic elements, or optimizing styles, I ensured that every customization aligned with best practices and delivered the desired results.",
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
    sushiCounter: "Cuando salía a comer sushi con mis amigos, hacíamos retos para ver quién podía comer más piezas de sushi, y anotábamos cada pieza que comíamos en WhatsApp. Me parecía un poco anticuado y, como buen programador, decidí crear mi propio contador de sushi y hacer la competencia más divertida.",
    planDeRisas: "Desarrollé tanto el backend como el frontend de este sitio web. El backend está construido utilizando una API Laravel, que gestiona todas las funcionalidades principales, como la creación, lectura, actualización y eliminación de registros (CRUD), la gestión de la autenticación de usuarios, la validación de datos de entrada y el diseño de la estructura de la base de datos. Garantiza una comunicación segura y eficiente entre el frontend y el servidor a través de respuestas JSON limpias y bien estructuradas. En el frontend, utilicé Angular para crear una interfaz responsiva y dinámica que interactúa a la perfección con la API. Tanto si se añaden nuevos elementos, se editan los existentes o se filtran y recuperan datos, el sistema está optimizado para ofrecer un buen rendimiento y facilidad de uso.",
    dkside: "He realizado modificaciones personalizadas en Shopify utilizando su lenguaje propio (Liquid), además de CSS y JavaScript, para lograr funcionalidades y diseños específicos. Estos cambios me han permitido adaptar la experiencia del usuario y la interfaz según las necesidades particulares de cada proyecto. Ya sea ajustando estructuras de diseño, incorporando elementos dinámicos u optimizando estilos, me aseguré de que cada personalización siguiera buenas prácticas y cumpliera con los resultados esperados.",
    aboutMeDescription1: "Soy un desarrollador web con experiencia en el diseño y la creación de sitios web y aplicaciones web adaptables. He trabajado con diversas tecnologías y marcos de trabajo, entre ellos React, Angular, Laravel y WordPress, lo que me ha permitido abordar proyectos variados y adaptarme rápidamente a diferentes entornos tecnológicos.",
    aboutMeDescription2: "Habilidad para trabajar en equipo, adaptable y comprometido con el aprendizaje y la mejora continuos. Actualmente busco nuevas oportunidades en las que pueda aportar mis habilidades, asumir retos emocionantes y seguir creciendo como profesional del desarrollo web.",
    email: "¡Mi correo electrónico siempre está abierto!"
  },
};

export type Locale = keyof typeof translations; // 'en' | 'es'
export type TranslationKey = keyof typeof translations['en']; // 'greeting' | 'description'

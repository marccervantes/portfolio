import React from 'react';
import { useI18n } from '@/i18n/i18nContext';
import ProjectCard from './projectCard';

const Main: React.FC = () => {
    const { t } = useI18n();

    return (
        <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <section id="top" className="min-h-[70vh] flex items-center justify-center bg-gradient-subtle">
                <div className="w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="mb-6">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">{t('intro')} Marc Cervantes</h1>
                                <h2 className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 font-medium">Full Stack Developer</h2>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                <a href='https://www.linkedin.com/in/marc-cervantes-garcia/' target='_blank' className="flex items-center justify-center px-4 py-3 rounded-[0.5rem] bg-[color:var(--button-color)] text-white font-semibold transition-all duration-300 ease-in-out gap-2"
                                >
                                    Linkedin
                                </a>
                                <a href='https://github.com/marccervantes/' target='_blank' className="flex items-center justify-center px-4 py-3 rounded-[0.5rem] bg-[color:var(--button-color)] text-white font-semibold transition-all duration-300 ease-in-out gap-2"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                        {/* Profile Image */}
                        <div className="flex justify-center order-1 lg:order-2">
                            <div className="relative w-60 sm:w-72 md:w-80 lg:w-96 aspect-square rounded-full overflow-hidden shadow-elegant bg-gradient-primary p-1">
                                <img src="/images/me.jpg" alt="Marc Cervantes - Desarrollador FullStack" className="w-full h-full object-cover rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='projects' className='grid grid-cols-1 gap-8 my-8'>
                <h3 className='font-semibold text-[2.8rem] self-start'>{t('projects')}</h3>
                <ProjectCard
                    title="Apicrypto"
                    description={t("apicrypto")}
                    image="/images/projects/apicrypto.webp"
                    repoUrl="https://github.com/marccervantes/apicrypto"
                    demoUrl="https://apicrypto.marccervantes.com/"
                    techs={[
                        { name: "ReactJS", icon: "/images/languages/react.webp" },
                        { name: "Bootstrap", icon: "/images/languages/bootstrap.webp" },
                    ]}
                />
                <ProjectCard
                    title="Sushi Counter"
                    description={t("sushiCounter")}
                    image="/images/projects/sushi-counter.webp"
                    repoUrl="https://github.com/marccervantes/sushi-counter/"
                    demoUrl="https://sushi-counter.marccervantes.com/"
                    techs={[
                        { name: "Next.js", icon: "/images/languages/nextjs.webp" },
                        { name: "Tailwind CSS", icon: "/images/languages/tailwindcss.webp" },
                    ]}
                />
                <ProjectCard
                    title="Plan de risas"
                    description={t("planDeRisas")}
                    image="/images/projects/planderisas.webp"
                    demoUrl="https://planderisas.com/"
                    techs={[
                        { name: "Angular", icon: "/images/languages/angular.webp" },
                        { name: "Laravel", icon: "/images/languages/laravel.webp" },
                        { name: "CSS", icon: "/images/languages/css.webp" },
                    ]}
                />
                <ProjectCard
                    title="Dkside"
                    description={t("dkside")}
                    image="/images/projects/dkside.webp"
                    demoUrl="https://dkside.com/"
                    techs={[
                        { name: "Shopify", icon: "/images/languages/shopify.webp" },
                        { name: "JavaScript", icon: "/images/languages/javascript.webp" },
                        { name: "CSS", icon: "/images/languages/css.webp" },
                    ]}
                />
                <div className='w-32 mx-auto mt-5'>
                    <a href='https://github.com/marccervantes/' target="_blank" className="flex items-center justify-center px-4 py-3 rounded-[0.5rem] bg-[color:var(--button-color)] text-white font-semibold transition-all duration-300 ease-in-out gap-2">
                        {t('lookMore')}
                    </a>
                </div>
            </section>
            <section id='about-me' className='grid grid-cols-1 gap-8 my-8'>
                <h3 className='font-semibold text-[2.8rem] self-start'>{t('aboutMe')}</h3>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">{t('aboutMeDescription1')}</p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">{t('aboutMeDescription2')}</p>
            </section>
            <section id='contact' className='grid grid-cols-1 gap-8 my-8'>
                <h3 className='font-semibold text-[2.8rem] self-start'>{t('contact')}</h3>
                    <div className="flex flex-col items-center justify-center gap-8  mx-auto">
                        {/* <p className="text-lg text-gray-700 mb-6text-[28px] font-medium text-center"> */}
                        <p className="text-lg mb-6text-[28px] font-medium text-center">{t('email')}</p>
                        <div className="md:flex md:items-center md:justify-center gap-4 w-full">
                            <div className="px-4 py-[9px] h-11 bg-[#F7F7F7] rounded-md border text-[18px] font-medium w-full overflow-hidden">
                                <span className='block overflow-hidden text-ellipsis whitespace-nowrap'>hola@marccervantes.com</span>
                            </div>
                            <div className="flex items-center justify-center gap-4 mt-4 md:m-auto">
                                <a href="mailto:hola@marccervantes.com"
                                    className="bg-[color:var(--button-color)] text-white px-4 py-3 rounded-md text-xl font-semibold transition-all gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" stroke="none"></path>
                                        <path d="M10 14l11 -11"></path>
                                        <path d="M21 3l-6.5 18a.55.55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55.55 0 0 1 0 -1l18 -6.5"></path>
                                    </svg>
                                </a>
                            <button className="bg-[color:var(--button-color)] text-white cursor-pointer px-4 py-3 rounded-md text-[1.2rem] font-semibold transition-all gap-2"
                                onClick={() => navigator.clipboard.writeText("hola@marccervantes.com")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" stroke="none"></path>
                                    <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"></path>
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;

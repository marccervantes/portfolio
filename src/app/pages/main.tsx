import React from 'react';
import { useI18n } from '@/i18n/i18nContext';
import Image from 'next/image'

const Main: React.FC = () => {
    const { t } = useI18n();

    return (
        <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-subtle">
                <div className="w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <div className="mb-6">
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">Hola, soy Marc Cervantes</h1>
                                <h2 className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-6 font-medium">Desarrollador FullStack</h2>
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                                    Especializado en crear experiencias web modernas, intuitivas y performantes.
                                    Transformo ideas en interfaces digitales que conectan con los usuarios.
                                </p>
                            </div>
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                                {/* 
                                <Button size="lg" className="shadow-elegant">
                                <Mail className="w-4 h-4 mr-2" />
                                Contáctame
                                </Button>
                                <Button variant="outline" size="lg">
                                <Download className="w-4 h-4 mr-2" />
                                Descargar CV
                                </Button> 
                                */}
                            </div>
                            {/* Social Links */}
                            <div className="flex gap-4 justify-center lg:justify-start">
                                {/*
                                <Button variant="ghost" size="icon" className="hover:text-primary">
                                <Github className="w-5 h-5" />
                                </Button>
                                <Button variant="ghost" size="icon" className="hover:text-primary">
                                <Linkedin className="w-5 h-5" />
                                </Button> 
                                */}
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
        </main>
    );
};

export default Main;

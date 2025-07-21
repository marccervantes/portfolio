import React from 'react';
import { useI18n } from '@/i18n/i18nContext';


const Main: React.FC = () => {
    const { t } = useI18n();

    return (
        <main className="max-w-7xl mx-auto px-6 py-8">
            <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-subtle px-4 pt-20">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        <div className="mb-6">
                        <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                            Hola, soy{' '}
                            <span className="bg-gradient-primary bg-clip-text text-transparent">
                            Alex Rodríguez
                            </span>
                        </h1>
                        <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6 font-medium">
                            Desarrollador Frontend
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Especializado en crear experiencias web modernas, intuitivas y performantes.
                            Transformo ideas en interfaces digitales que conectan con los usuarios.
                        </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                            <button className="shadow-elegant"></button>
                        {/* <Button size="lg" className="shadow-elegant">
                            <Mail className="w-4 h-4 mr-2" />
                            Contáctame
                        </Button>
                        <Button variant="outline" size="lg">
                            <Download className="w-4 h-4 mr-2" />
                            Descargar CV
                        </Button> */}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <button className="shadow-elegant hover:text-primary"></button>
                        {/* <Button variant="ghost" size="icon" className="hover:text-primary">
                            <Github className="w-5 h-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:text-primary">
                            <Linkedin className="w-5 h-5" />
                        </Button> */}
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex justify-center order-1 lg:order-2">
                        <div className="relative">
                        <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-elegant bg-gradient-primary p-1">
                            <img
                            // src={developerPhoto}
                            alt="Alex Rodríguez - Desarrollador Frontend"
                            className="w-full h-full object-cover rounded-full"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                    </div>

                    {/* Scroll indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    {/* <ChevronDown className="w-6 h-6 text-muted-foreground" /> */}
                    </div>
                </div>
                </section>
        </main>
    );
};

export default Main;

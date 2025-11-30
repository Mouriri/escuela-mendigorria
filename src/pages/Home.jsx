import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import heroImg from '../assets/hero.png';
import { BookOpen, Users, Coffee, Sun, ArrowRight } from 'lucide-react';

const Home = () => {
    const { t } = useLanguage();

    const sections = [
        {
            id: 'quienes-somos',
            icon: <Users className="w-12 h-12" />,
            title: 'menu.about',
            desc: 'home.about_desc',
            gradient: 'from-blue-500 to-blue-600',
            bgGradient: 'bg-gradient-to-br from-blue-50 to-blue-100'
        },
        {
            id: 'colegio',
            icon: <BookOpen className="w-12 h-12" />,
            title: 'menu.school',
            desc: 'home.school_desc',
            gradient: 'from-green-500 to-green-600',
            bgGradient: 'bg-gradient-to-br from-green-50 to-green-100'
        },
        {
            id: 'familia',
            icon: <Sun className="w-12 h-12" />,
            title: 'menu.family',
            desc: 'home.family_desc',
            gradient: 'from-amber-500 to-amber-600',
            bgGradient: 'bg-gradient-to-br from-amber-50 to-amber-100'
        },
        {
            id: 'colegio',
            icon: <Sun className="w-12 h-12" />,
            title: 'home.activities',
            desc: 'home.activities_desc',
            gradient: 'from-orange-500 to-orange-600',
            bgGradient: 'bg-gradient-to-br from-orange-50 to-orange-100'
        },
        {
            id: 'colegio',
            icon: <Coffee className="w-12 h-12" />,
            title: 'home.dining',
            desc: 'home.dining_desc',
            gradient: 'from-rose-500 to-rose-600',
            bgGradient: 'bg-gradient-to-br from-rose-50 to-rose-100'
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-700"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="text-center lg:text-left space-y-6">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                {t('home.welcome')}
                            </h1>
                            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 max-w-2xl mx-auto lg:mx-0">
                                {t('home.school_desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                                <a
                                    href="/contacto"
                                    className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
                                >
                                    {t('menu.contact')}
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <a
                                    href="/colegio"
                                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full border-2 border-white/30 transition-all"
                                >
                                    Descubre más
                                </a>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
                            <img
                                src={heroImg}
                                alt="School"
                                className="relative w-full h-auto rounded-3xl shadow-2xl transform hover:rotate-1 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Wave Divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#F5F7FA" />
                    </svg>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                            Nuestra Comunidad Educativa
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Descubre todo lo que la Escuela de Mendigorría tiene para ofrecer
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sections.map((section, index) => (
                            <a
                                key={index}
                                href={`/${section.id}`}
                                className={`group relative ${section.bgGradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden`}
                            >
                                {/* Icon Background */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
                                    <div className={`w-full h-full bg-gradient-to-br ${section.gradient} rounded-full`}></div>
                                </div>

                                {/* Icon */}
                                <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${section.gradient} text-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    {section.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-800 mb-3 relative">
                                    {t(section.title)}
                                </h3>
                                <p className="text-gray-600 mb-4 relative leading-relaxed">
                                    {t(section.desc)}
                                </p>

                                {/* Arrow */}
                                <div className="relative flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                                    <span>Leer más</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        ¿Listo para formar parte de nuestra familia?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Contacta con nosotros y descubre cómo podemos ayudar en el desarrollo de tus hijos
                    </p>
                    <a
                        href="/contacto"
                        className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-10 py-5 rounded-full text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
                    >
                        Solicitar Información
                        <ArrowRight className="w-6 h-6" />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;

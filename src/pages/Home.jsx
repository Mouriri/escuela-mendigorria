import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import heroImg from '../assets/hero.png';
import { BookOpen, Users, Coffee, Sun, ArrowRight, Star, Heart, Shield } from 'lucide-react';

const Home = () => {
    const { t } = useLanguage();

    const features = [
        {
            id: 'quienes-somos',
            icon: <Users className="w-8 h-8 text-blue-600" />,
            title: 'menu.about',
            desc: 'home.about_desc',
        },
        {
            id: 'colegio',
            icon: <BookOpen className="w-8 h-8 text-blue-600" />,
            title: 'menu.school',
            desc: 'home.school_desc',
        },
        {
            id: 'familia',
            icon: <Heart className="w-8 h-8 text-blue-600" />,
            title: 'menu.family',
            desc: 'home.family_desc',
        },
        {
            id: 'actividades',
            icon: <Star className="w-8 h-8 text-blue-600" />,
            title: 'home.activities',
            desc: 'home.activities_desc',
        },
        {
            id: 'comedor',
            icon: <Coffee className="w-8 h-8 text-blue-600" />,
            title: 'home.dining',
            desc: 'home.dining_desc',
        },
        {
            id: 'valores',
            icon: <Shield className="w-8 h-8 text-blue-600" />,
            title: 'Valores',
            desc: 'Formación integral basada en el respeto y la excelencia.',
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20 z-0"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8 animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium">
                                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                                Bienvenidos a la Escuela de Mendigorría
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                                {t('home.welcome')}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                                {t('home.school_desc')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <a href="/contacto" className="btn-primary">
                                    {t('menu.contact')}
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                                <a href="/colegio" className="btn-secondary bg-transparent text-white border-white/20 hover:bg-white/10 hover:border-white">
                                    Descubre más
                                </a>
                            </div>
                        </div>

                        <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="relative w-full max-w-lg aspect-square lg:aspect-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl rotate-3 opacity-20 blur-lg"></div>
                                <img
                                    src={heroImg}
                                    alt="School Life"
                                    className="relative rounded-2xl shadow-2xl w-full h-full object-cover border border-white/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Excelencia Educativa
                        </h2>
                        <p className="text-lg text-slate-600">
                            Un entorno diseñado para potenciar el talento y la creatividad de cada estudiante.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <a
                                key={index}
                                href={`/${feature.id}`}
                                className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm card-hover flex flex-col items-start"
                            >
                                <div className="p-3 rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 mb-6">
                                    {React.cloneElement(feature.icon, { className: "w-8 h-8 text-blue-600 group-hover:text-white transition-colors" })}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {t(feature.title)}
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                                    {t(feature.desc)}
                                </p>
                                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                                    Leer más <ArrowRight className="ml-1 w-4 h-4" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                            ¿Listo para formar parte de nuestra familia?
                        </h2>
                        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto relative z-10">
                            Abierto el plazo de matrícula. Ven a conocernos y descubre nuestro proyecto educativo.
                        </p>
                        <a
                            href="/contacto"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                            Solicitar Información
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

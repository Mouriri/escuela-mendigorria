import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import heroImg from '../assets/hero.png';
import { BookOpen, Users, Coffee, Sun } from 'lucide-react';

const Home = () => {
    const { t } = useLanguage();

    const sections = [
        { id: 'about', icon: <Users size={40} className="text-blue-500" />, title: 'menu.about', desc: 'home.about_desc', color: 'bg-blue-50' },
        { id: 'school', icon: <BookOpen size={40} className="text-green-500" />, title: 'menu.school', desc: 'home.school_desc', color: 'bg-green-50' },
        { id: 'family', icon: <Sun size={40} className="text-yellow-500" />, title: 'menu.family', desc: 'home.family_desc', color: 'bg-yellow-50' },
        { id: 'activities', icon: <Sun size={40} className="text-orange-500" />, title: 'home.activities', desc: 'home.activities_desc', color: 'bg-orange-50' },
        { id: 'dining', icon: <Coffee size={40} className="text-red-500" />, title: 'home.dining', desc: 'home.dining_desc', color: 'bg-red-50' },
    ];

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="relative bg-blue-600 text-white overflow-hidden">
                <div className="container mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
                    <div className="md:w-1/2 z-10">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            {t('home.welcome')}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 text-blue-100">
                            {t('home.school_desc')}
                        </p>
                        <a href="/contacto" className="btn bg-yellow-400 text-blue-900 hover:bg-yellow-300">
                            {t('menu.contact')}
                        </a>
                    </div>
                    <div className="md:w-1/2">
                        <img src={heroImg} alt="School" className="w-full h-auto rounded-2xl shadow-2xl transform md:rotate-2 hover:rotate-0 transition-transform duration-500" />
                    </div>
                </div>

                {/* Decorative background circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
            </section>

            {/* Cards Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sections.map((section) => (
                            <div key={section.id} className={`card ${section.color} border-none hover:shadow-lg transition-all duration-300 group`}>
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {section.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-gray-800">{t(section.title)}</h3>
                                <p className="text-gray-600 mb-4">{t(section.desc)}</p>
                                <a href={`/${section.id === 'activities' || section.id === 'dining' ? 'colegio' : section.id}`} className="text-blue-600 font-semibold hover:underline">
                                    Leer más &rarr;
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

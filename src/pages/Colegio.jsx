import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Book, Layout, PenTool, Coffee, Sparkles, Building2, Users2 } from 'lucide-react';

const Colegio = () => {
    const { t } = useLanguage();

    const sections = [
        {
            key: 'project',
            icon: <Book className="w-10 h-10" />,
            gradient: 'from-blue-500 to-cyan-500',
            bgColor: 'bg-blue-50'
        },
        {
            key: 'facilities',
            icon: <Building2 className="w-10 h-10" />,
            gradient: 'from-green-500 to-emerald-500',
            bgColor: 'bg-green-50'
        },
        {
            key: 'methodology',
            icon: <PenTool className="w-10 h-10" />,
            gradient: 'from-purple-500 to-pink-500',
            bgColor: 'bg-purple-50'
        },
        {
            key: 'services',
            icon: <Coffee className="w-10 h-10" />,
            gradient: 'from-orange-500 to-amber-500',
            bgColor: 'bg-orange-50'
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4" />
                        Excelencia Educativa
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('school.title')}</h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                        Un espacio donde cada niño desarrolla su máximo potencial
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {sections.map((section) => (
                        <div
                            key={section.key}
                            className={`group relative ${section.bgColor} rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}
                        >
                            {/* Background Decoration */}
                            <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                                <div className={`w-full h-full bg-gradient-to-br ${section.gradient} rounded-full transform translate-x-10 -translate-y-10`}></div>
                            </div>

                            {/* Icon */}
                            <div className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${section.gradient} text-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                {section.icon}
                            </div>

                            {/* Content */}
                            <h2 className="relative text-3xl font-bold text-gray-800 mb-4">
                                {t(`school.${section.key}`)}
                            </h2>
                            <p className="relative text-gray-600 leading-relaxed text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    ))}
                </div>

                {/* Gallery Section */}
                <div className="bg-white rounded-3xl shadow-xl p-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestras Instalaciones</h2>
                        <p className="text-xl text-gray-600">Espacios diseñados para el aprendizaje y la diversión</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="group relative aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                                    <span className="text-white font-semibold">Imagen {i}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Colegio;

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Camera, Award } from 'lucide-react';

const QuienesSomos = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Award className="w-4 h-4" />
                        Nuestra Historia
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('about.title')}</h1>
                    <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                        Conoce los valores y la misión que nos guían
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
                    <div className="min-h-[300px] flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                            <Camera className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-2xl text-gray-400 italic">{t('about.content')}</p>
                        <p className="text-gray-500 mt-4">Este espacio estará disponible próximamente con nuestra historia completa</p>
                    </div>
                </div>

                {/* Photo Gallery Placeholder */}
                <div className="bg-white rounded-3xl shadow-xl p-10">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Galería de Fotos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="group relative h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Camera className="w-12 h-12 text-white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuienesSomos;

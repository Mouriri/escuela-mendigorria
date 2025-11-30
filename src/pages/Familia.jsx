import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, MessageCircle, Users, Download, Heart } from 'lucide-react';

const Familia = () => {
    const { t } = useLanguage();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-br from-green-600 via-green-700 to-emerald-800 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Heart className="w-4 h-4" />
                        Juntos es Mejor
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('family.title')}</h1>
                    <p className="text-xl text-green-100 max-w-3xl mx-auto">
                        La colaboración entre familias y escuela es la clave del éxito
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Info Card */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl mb-6 shadow-lg">
                            <Users className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('family.info')}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Noticias, reuniones y eventos importantes para las familias.
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                Calendario Escolar
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                Horarios de tutoría
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                Actividades extraescolares
                            </li>
                        </ul>
                    </div>

                    {/* Downloads Card */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl mb-6 shadow-lg">
                            <FileText className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('family.downloads')}</h2>
                        <ul className="space-y-3">
                            {['Matrícula 2025-26', 'Autorización de salidas', 'Menú del comedor', 'Normativa del centro'].map((doc, i) => (
                                <li key={i} className="group flex items-center justify-between p-4 bg-gray-50 hover:bg-green-50 rounded-xl cursor-pointer transition-colors">
                                    <span className="text-gray-700 font-medium">{doc}</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-lg">PDF</span>
                                        <Download className="w-4 h-4 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Communication Card */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl mb-6 shadow-lg">
                            <MessageCircle className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('family.channels')}</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Mantente informado a través de nuestros canales oficiales.
                        </p>
                        <div className="space-y-4">
                            <button className="w-full py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                                WhatsApp
                            </button>
                            <button className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                                Telegram
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Familia;

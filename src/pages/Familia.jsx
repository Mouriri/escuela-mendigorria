import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, MessageCircle, Users } from 'lucide-react';

const Familia = () => {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="section-title">{t('family.title')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Info */}
                <div className="card border-t-4 border-blue-400">
                    <div className="flex items-center gap-3 mb-4">
                        <Users className="text-blue-500" size={28} />
                        <h2 className="text-xl font-bold">{t('family.info')}</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Noticias, reuniones y eventos importantes para las familias.
                    </p>
                    <ul className="space-y-2 text-sm text-gray-500">
                        <li>• Calendario Escolar</li>
                        <li>• Horarios de tutoría</li>
                        <li>• Actividades extraescolares</li>
                    </ul>
                </div>

                {/* Downloads */}
                <div className="card border-t-4 border-green-400">
                    <div className="flex items-center gap-3 mb-4">
                        <FileText className="text-green-500" size={28} />
                        <h2 className="text-xl font-bold">{t('family.downloads')}</h2>
                    </div>
                    <ul className="space-y-3">
                        {['Matrícula 2025-26', 'Autorización de salidas', 'Menú del comedor', 'Normativa del centro'].map((doc, i) => (
                            <li key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer transition-colors">
                                <span className="text-gray-700">{doc}</span>
                                <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-1 rounded">PDF</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Channels */}
                <div className="card border-t-4 border-yellow-400">
                    <div className="flex items-center gap-3 mb-4">
                        <MessageCircle className="text-yellow-500" size={28} />
                        <h2 className="text-xl font-bold">{t('family.channels')}</h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Mantente informado a través de nuestros canales oficiales.
                    </p>
                    <div className="space-y-3">
                        <button className="w-full py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors">
                            WhatsApp
                        </button>
                        <button className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
                            Telegram
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Familia;

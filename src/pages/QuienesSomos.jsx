import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const QuienesSomos = () => {
    const { t } = useLanguage();

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="section-title">{t('about.title')}</h1>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 min-h-[300px] flex items-center justify-center text-gray-400 italic">
                {t('about.content')}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Placeholders for photos */}
                <div className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
                <div className="h-64 bg-gray-200 rounded-xl animate-pulse"></div>
            </div>
        </div>
    );
};

export default QuienesSomos;

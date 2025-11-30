import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Book, Layout, PenTool, Coffee } from 'lucide-react';

const Colegio = () => {
    const { t } = useLanguage();

    const sections = [
        { key: 'project', icon: <Book size={32} className="text-blue-500" />, color: 'bg-blue-50' },
        { key: 'facilities', icon: <Layout size={32} className="text-green-500" />, color: 'bg-green-50' },
        { key: 'methodology', icon: <PenTool size={32} className="text-purple-500" />, color: 'bg-purple-50' },
        { key: 'services', icon: <Coffee size={32} className="text-orange-500" />, color: 'bg-orange-50' },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="section-title">{t('school.title')}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {sections.map((section) => (
                    <div key={section.key} className={`p-8 rounded-2xl ${section.color} hover:shadow-md transition-shadow`}>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white rounded-full shadow-sm">
                                {section.icon}
                            </div>
                            <h2 className="text-2xl font-bold text-gray-800">{t(`school.${section.key}`)}</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                ))}
            </div>

            {/* Gallery Placeholder */}
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Galería</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-video bg-gray-200 rounded-lg hover:opacity-90 transition-opacity cursor-pointer"></div>
                ))}
            </div>
        </div>
    );
};

export default Colegio;

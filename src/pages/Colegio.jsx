import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Book, Layout, PenTool, Coffee, Sparkles, Building2, Users2 } from 'lucide-react';

const Colegio = () => {
    const { t } = useLanguage();

    const sections = [
        {
            key: 'project',
            icon: <Book className="w-8 h-8 text-blue-600" />,
            title: 'school.project',
            desc: 'Nuestro proyecto educativo se centra en el desarrollo integral del alumno, fomentando la curiosidad y el pensamiento crítico.'
        },
        {
            key: 'facilities',
            icon: <Building2 className="w-8 h-8 text-blue-600" />,
            title: 'school.facilities',
            desc: 'Contamos con instalaciones modernas y adaptadas a las necesidades educativas actuales, incluyendo aulas digitales y espacios deportivos.'
        },
        {
            key: 'methodology',
            icon: <PenTool className="w-8 h-8 text-blue-600" />,
            title: 'school.methodology',
            desc: 'Aplicamos metodologías activas que sitúan al alumno en el centro del aprendizaje, promoviendo la colaboración y la creatividad.'
        },
        {
            key: 'services',
            icon: <Coffee className="w-8 h-8 text-blue-600" />,
            title: 'school.services',
            desc: 'Ofrecemos servicios complementarios como comedor con cocina propia y aula matinal para facilitar la conciliación familiar.'
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/20"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-300 text-sm font-medium mb-8">
                        <Sparkles className="w-4 h-4" />
                        Excelencia Educativa
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">{t('school.title')}</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Un espacio donde cada niño desarrolla su máximo potencial en un entorno seguro y estimulante.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {sections.map((section) => (
                        <div
                            key={section.key}
                            className="group bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="flex items-start gap-6">
                                <div className="p-4 rounded-xl bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 shrink-0">
                                    {React.cloneElement(section.icon, { className: "w-8 h-8 text-blue-600 group-hover:text-white transition-colors" })}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        {t(section.title)}
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {section.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gallery Section */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-10 md:p-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nuestras Instalaciones</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Espacios diseñados para el aprendizaje, la convivencia y el desarrollo integral de nuestros alumnos.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="group relative aspect-square bg-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-400">
                                    <Building2 className="w-12 h-12 opacity-20" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                                    <span className="text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Ver Galería</span>
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

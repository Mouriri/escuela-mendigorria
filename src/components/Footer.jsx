import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8 mt-auto border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white tracking-tight">Escuela de Mendigorría</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                                <div className="p-2 rounded-full bg-slate-800 group-hover:bg-blue-600 transition-colors">
                                    <Phone size={18} className="text-blue-400 group-hover:text-white" />
                                </div>
                                <span>948 00 00 00</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                                <div className="p-2 rounded-full bg-slate-800 group-hover:bg-blue-600 transition-colors">
                                    <Mail size={18} className="text-blue-400 group-hover:text-white" />
                                </div>
                                <span>info@escuelamendigorria.es</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                                <div className="p-2 rounded-full bg-slate-800 group-hover:bg-blue-600 transition-colors">
                                    <MapPin size={18} className="text-blue-400 group-hover:text-white" />
                                </div>
                                <span>C/ Mayor s/n, 31150 Mendigorría</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">{t('menu.home')}</h3>
                        <ul className="space-y-3 text-slate-400">
                            <li><a href="/quienes-somos" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>{t('menu.about')}</a></li>
                            <li><a href="/colegio" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>{t('menu.school')}</a></li>
                            <li><a href="/familia" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>{t('menu.family')}</a></li>
                            <li><a href="/zona-privada" className="hover:text-blue-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-blue-500 rounded-full"></span>{t('menu.private')}</a></li>
                        </ul>
                    </div>

                    {/* Social & Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white">Síguenos</h3>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-blue-600 hover:text-white text-slate-400 transition-all hover:-translate-y-1"><Facebook size={20} /></a>
                            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-pink-600 hover:text-white text-slate-400 transition-all hover:-translate-y-1"><Instagram size={20} /></a>
                            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-blue-400 hover:text-white text-slate-400 transition-all hover:-translate-y-1"><Twitter size={20} /></a>
                        </div>
                        <p className="text-slate-500 text-sm">
                            Comprometidos con la educación y el futuro de nuestros alumnos.
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <div>
                        &copy; {new Date().getFullYear()} Escuela de Mendigorría.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

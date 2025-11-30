import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-800 text-white pt-12 pb-6 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-blue-300">Escuela de Mendigorría</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-yellow-400" />
                                <span>948 00 00 00</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-yellow-400" />
                                <span>info@escuelamendigorria.es</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-yellow-400" />
                                <span>C/ Mayor s/n, 31150 Mendigorría</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">{t('menu.home')}</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li><a href="/quienes-somos" className="hover:text-white transition-colors">{t('menu.about')}</a></li>
                            <li><a href="/colegio" className="hover:text-white transition-colors">{t('menu.school')}</a></li>
                            <li><a href="/familia" className="hover:text-white transition-colors">{t('menu.family')}</a></li>
                            <li><a href="/zona-privada" className="hover:text-white transition-colors">{t('menu.private')}</a></li>
                        </ul>
                    </div>

                    {/* Social & Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Social</h3>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-pink-600 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-400 transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Escuela de Mendigorría. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const isActive = (path) => location.pathname === path ? 'text-blue-500 font-bold' : '';

    const navLinks = [
        { path: '/', label: 'menu.home' },
        { path: '/quienes-somos', label: 'menu.about' },
        { path: '/colegio', label: 'menu.school' },
        { path: '/familia', label: 'menu.family' },
        { path: '/contacto', label: 'menu.contact' },
        { path: '/zona-privada', label: 'menu.private' },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3" onClick={closeMenu}>
                    <img src={logo} alt="Escuela de Mendigorría" className="h-12 w-auto" />
                    <span className="font-bold text-xl text-gray-800 hidden md:block">
                        Escuela de Mendigorría
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`hover:text-blue-500 transition-colors ${isActive(link.path)}`}
                        >
                            {t(link.label)}
                        </Link>
                    ))}

                    {/* Language Selector */}
                    <div className="flex items-center gap-2 border-l pl-4 ml-2">
                        <Globe size={18} className="text-gray-500" />
                        <button
                            onClick={() => setLanguage('es')}
                            className={`font-semibold ${language === 'es' ? 'text-blue-600' : 'text-gray-400'}`}
                        >
                            ES
                        </button>
                        <span className="text-gray-300">|</span>
                        <button
                            onClick={() => setLanguage('eu')}
                            className={`font-semibold ${language === 'eu' ? 'text-green-600' : 'text-gray-400'}`}
                        >
                            EU
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700" onClick={toggleMenu}>
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t absolute w-full shadow-lg">
                    <nav className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-lg py-2 border-b border-gray-100"
                                onClick={closeMenu}
                            >
                                {t(link.label)}
                            </Link>
                        ))}
                        <div className="flex gap-4 mt-2 pt-2">
                            <button
                                onClick={() => { setLanguage('es'); closeMenu(); }}
                                className={`flex-1 py-2 rounded text-center ${language === 'es' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100'}`}
                            >
                                Castellano
                            </button>
                            <button
                                onClick={() => { setLanguage('eu'); closeMenu(); }}
                                className={`flex-1 py-2 rounded text-center ${language === 'eu' ? 'bg-green-100 text-green-600' : 'bg-gray-100'}`}
                            >
                                Euskera
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
